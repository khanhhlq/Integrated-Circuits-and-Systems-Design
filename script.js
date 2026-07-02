window.QUESTION_BANK = [];

// GitHub Pages chỉ chạy frontend tĩnh. Hãy thay URL bên dưới bằng server backend của bạn
// Ví dụ Render/Railway/Cloudflare: https://ten-app-cua-ban.onrender.com
// Khi chạy frontend cùng server thì để rỗng "".
const API_BASE_URL = (window.API_BASE_URL || "").replace(/\/$/, "");

let QUESTIONS = window.QUESTION_BANK || [];
let QUESTIONS_LOADED = false;
let CLIENT_ROLE = "guest";
const LICENSE_STORAGE_KEY = "lkq_server_license_v1";
const DEVICE_STORAGE_KEY = "lkq_device_id_v1";
const ADMIN_SESSION_KEY = "lkq_server_admin_session_v1";
const ANSWER_CORRECTION_KEY = "tkhts_answer_corrections_v1";
let isAdmin = false;
const DEFAULT_CORRECT = {};
let savedCorrections = {};

const $ = (id) => document.getElementById(id);
const state = {
  pool: [],
  exam: [],
  answers: {},
  checked: {},
  locked: {},
  index: 0,
  startedAt: null,
  timeLimitSec: 0,
  timerId: null,
  submitted: false,
  lastConfig: null
};

const CHAPTER_1_TO_6 = [
  "CHƯƠNG 1:",
  "CHƯƠNG 2:",
  "CHƯƠNG 3:",
  "CHƯƠNG 4:",
  "CHƯƠNG 5:",
  "CHƯƠNG 6:"
];

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", safeInit);
} else {
  safeInit();
}

function safeInit() {
  try {
    init();
    initLicenseAndAdmin();
  } catch (err) {
    console.error(err);
    alert("Website bị lỗi khi khởi tạo: " + (err && err.message ? err.message : err));
  }
}

window.addEventListener("error", (event) => {
  console.error(event.error || event.message);
});

function init() {
  captureDefaultAnswers();
  applySavedAnswerCorrections();
  $("totalQuestions").textContent = QUESTIONS.length;
  renderChapterStats();
  populateFilters();
  updateSelectedCount();
  bindEvents();
  renderBank(QUESTIONS.slice(0, 60));
}

function bindEvents() {
  $("chapterSelect").addEventListener("change", () => {
    updateSelectedCount();
  });
  $("includeAllChapters").addEventListener("change", () => {
    populateFilters();
    updateSelectedCount();
  });
  $("quickExamBtn").addEventListener("click", () => {
    $("includeAllChapters").checked = false;
    $("chapterSelect").value = "CHAPTER_1_6";
    $("timeLimit").value = "45";
    $("shuffleQuestions").checked = true;
    $("shuffleOptions").checked = false;
    updateSelectedCount();
  });
  $("startBtn").addEventListener("click", (event) => {
    event.preventDefault();
    try {
      startExam();
    } catch (err) {
      console.error(err);
      alert("Không bắt đầu được bài làm. Lỗi: " + (err && err.message ? err.message : err));
    }
  });
  $("reviewBankBtn").addEventListener("click", () => showView("bankView"));
  $("closeBankBtn").addEventListener("click", () => showView("setupView"));
  $("bankSearch").addEventListener("input", (e) => searchBank(e.target.value));
  $("prevBtn").addEventListener("click", () => goQuestion(state.index - 1));
  $("nextBtn").addEventListener("click", () => goQuestion(state.index + 1));
  $("editAnswerBtn").addEventListener("click", openAnswerEditor);
  $("saveAnswerEditBtn").addEventListener("click", saveCurrentAnswerEdit);
  $("cancelAnswerEditBtn").addEventListener("click", closeAnswerEditor);
  $("resetAnswerEditBtn").addEventListener("click", resetCurrentAnswerEdit);
  $("submitBtn").addEventListener("click", submitExam);
  $("backSetupBtn").addEventListener("click", () => {
    if (confirm("Quay về thiết lập? Tiến trình hiện tại sẽ bị hủy.")) {
      stopTimer();
      showView("setupView");
    }
  });
  $("newExamBtn").addEventListener("click", () => {
    stopTimer();
    showView("setupView");
  });
  $("retrySameBtn").addEventListener("click", () => {
    if (state.lastConfig) startExam(state.lastConfig);
  });
  $("retryWrongBtn").addEventListener("click", retryWrong);
  bindLicenseEvents();
}

function showView(id) {
  ["setupView", "quizView", "resultView", "bankView"].forEach(v => $(v).classList.add("hidden"));
  $(id).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderChapterStats() {
  const map = countBy(QUESTIONS, q => q.chapter || "Khác");
  $("chapterStats").innerHTML = Object.entries(map)
    .map(([chapter, count]) => `<div class="stat"><strong>${count}</strong><span>${escapeHTML(shortChapter(chapter))}</span></div>`)
    .join("");
}

function populateFilters() {
  const includeAll = $("includeAllChapters")?.checked;
  const chapters = unique(QUESTIONS.map(q => q.chapter)).filter(Boolean);
  const allowed = includeAll ? chapters : chapters.filter(ch => CHAPTER_1_TO_6.some(p => ch.startsWith(p)));
  const opts = [
    `<option value="CHAPTER_1_6">Tất cả chương 1–6</option>`,
    `<option value="ALL">Tất cả câu trong ngân hàng</option>`,
    ...allowed.map(ch => `<option value="${escapeAttr(ch)}">${escapeHTML(shortChapter(ch))}</option>`)
  ];
  $("chapterSelect").innerHTML = opts.join("");
  if (!includeAll) $("chapterSelect").value = "CHAPTER_1_6";
}

function updateSelectedCount() {
  const max = getFilteredPool().length;
  const el = $("selectedCount");
  if (el) el.textContent = max ? `${max} câu` : "0 câu";
}

function getFilteredPool(options = {}) {
  const chapter = $("chapterSelect").value;
  let pool = QUESTIONS.slice();

  if (chapter === "CHAPTER_1_6") {
    pool = pool.filter(q => CHAPTER_1_TO_6.some(p => (q.chapter || "").startsWith(p)));
  } else if (chapter !== "ALL") {
    pool = pool.filter(q => q.chapter === chapter);
  }
  return pool;
}

function startExam(configOverride = null) {
  if (!QUESTIONS_LOADED || !QUESTIONS.length) {
    alert("Ngân hàng câu hỏi chưa tải xong hoặc bạn chưa có quyền truy cập. Vui lòng kích hoạt key và thử lại.");
    return;
  }
  if (!canUseApp()) {
    showLicenseGate("Bạn cần kích hoạt mã key 50.000đ trước khi làm bài trên thiết bị này.", true);
    return;
  }
  const config = configOverride || {
    pool: getFilteredPool(),
    count: null,
    shuffleQuestions: $("shuffleQuestions").checked,
    shuffleOptions: false,
    instantFeedback: true,
    timeLimitMin: parseInt($("timeLimit").value || "0", 10)
  };

  let pool = config.pool.slice();
  if (!pool.length) {
    alert("Không có câu hỏi phù hợp với bộ lọc hiện tại.");
    return;
  }

  if (config.shuffleQuestions) pool = shuffle(pool);
  const targetCount = config.count ? Math.min(config.count, pool.length) : pool.length;
  const selected = pool.slice(0, targetCount).map((q, idx) => {
    const clone = deepClone(q);
    clone.examNo = idx + 1;
    // Giữ nguyên thứ tự A/B/C/D; chỉ trộn thứ tự câu hỏi theo thiết lập.
    return clone;
  });

  state.pool = pool;
  state.exam = selected;
  state.answers = {};
  state.checked = {};
  state.locked = {};
  state.index = 0;
  state.startedAt = Date.now();
  state.timeLimitSec = config.timeLimitMin * 60;
  state.submitted = false;
  state.lastConfig = config;

  showView("quizView");
  renderNav();
  renderQuestion();
  startTimer();
}

function renderQuestionMedia(q) {
  const images = q.images || (q.image ? [q.image] : []);
  if (!images.length) return "";
  return images.map(img => `<figure>
    <img src="${escapeAttr(img.src)}" alt="${escapeAttr(img.alt || 'Hình minh họa câu hỏi')}">
    ${img.caption ? `<figcaption>${escapeHTML(img.caption)}</figcaption>` : ""}
  </figure>`).join("");
}

function renderQuestion() {
  const q = state.exam[state.index];
  $("progressLabel").textContent = `Câu ${state.index + 1}/${state.exam.length}`;
  $("answeredLabel").textContent = `Đã làm ${Object.keys(state.answers).filter(k => state.answers[k]?.length).length}`;
  $("progressFill").style.width = `${((state.index + 1) / state.exam.length) * 100}%`;

  const sourceLink = q.source_file?.includes(".pdf")
    ? ` • Trang ${q.page || "?"}`
    : "";
  $("questionMeta").textContent = `${q.chapter || ""} • ${q.section || ""}${sourceLink}${q.type === "multi" ? " • Có thể chọn nhiều đáp án" : ""}`;
  $("questionText").textContent = q.question;
  $("questionMedia").innerHTML = renderQuestionMedia(q);

  const selected = state.answers[q.id] || [];
  const locked = state.submitted || !!state.locked[q.id];
  $("optionList").innerHTML = q.options.map(opt => {
    const inputType = q.type === "multi" ? "checkbox" : "radio";
    const checked = selected.includes(opt.id) ? "checked" : "";
    const disabled = locked ? "disabled" : "";
    return `<label class="option ${checked ? "selected" : ""} ${locked ? "locked" : ""}" data-option-id="${escapeAttr(opt.id)}">
      <input type="${inputType}" name="q_${escapeAttr(q.id)}" value="${escapeAttr(opt.id)}" ${checked} ${disabled}>
      <span class="letter">${escapeHTML(opt.id)}</span>
      <span>${escapeHTML(opt.text)}</span>
    </label>`;
  }).join("");

  document.querySelectorAll(".option").forEach(label => {
    label.addEventListener("click", (event) => {
      event.preventDefault();
      if (state.submitted || state.locked[q.id]) return;
      toggleAnswer(q, label.dataset.optionId);
    });
  });

  closeAnswerEditor(false);
  $("feedbackBox").className = "feedback hidden";
  $("feedbackBox").textContent = "";

  if (state.checked[q.id]) showFeedback(q);
  $("prevBtn").disabled = state.index === 0;
  $("nextBtn").disabled = state.index === state.exam.length - 1;
  updateAdminUI();
  renderNav();
}

function toggleAnswer(q, optId) {
  if (state.submitted || state.locked[q.id]) return;
  const current = state.answers[q.id] || [];

  if (q.type === "multi") {
    // Câu nhiều đáp án: chọn 1 đáp án sẽ chấm ngay và khóa theo yêu cầu.
    // Nếu muốn chọn nhiều đáp án trước khi chấm, hãy dùng nút Chỉnh đáp án để sửa khóa đáp án của câu.
    state.answers[q.id] = current.includes(optId) ? current : [optId];
  } else {
    state.answers[q.id] = [optId];
  }

  // Chế độ v5: bấm đáp án là tự động kiểm tra và khóa, không cho chọn lại.
  state.checked[q.id] = true;
  state.locked[q.id] = true;
  renderQuestion();
}

function renderNav() {
  $("questionNav").innerHTML = state.exam.map((q, i) => {
    const answered = state.answers[q.id]?.length ? "answered" : "";
    let status = "";
    if (state.submitted || state.checked[q.id]) status = isCorrect(q) ? "correct" : "wrong";
    return `<button class="nav-dot ${i === state.index ? "current" : ""} ${answered} ${status}" data-i="${i}">${i + 1}</button>`;
  }).join("");

  document.querySelectorAll(".nav-dot").forEach(btn => {
    btn.addEventListener("click", () => goQuestion(+btn.dataset.i));
  });
}

function goQuestion(i) {
  if (i < 0 || i >= state.exam.length) return;
  state.index = i;
  renderQuestion();
}

function checkCurrent(scroll = false) {
  const q = state.exam[state.index];
  if (!q || state.submitted || state.locked[q.id]) return;
  if (!(state.answers[q.id]?.length)) {
    alert("Bạn cần chọn đáp án trước khi kiểm tra.");
    return;
  }
  state.checked[q.id] = true;
  state.locked[q.id] = true;
  showFeedback(q);
  renderQuestion();
  if (scroll) $("feedbackBox").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showFeedback(q) {
  const fb = $("feedbackBox");
  const correct = isCorrect(q);
  const correctOptions = q.options.filter(o => o.correct).map(o => `${o.id}. ${o.text}`);
  fb.className = `feedback ${correct ? "ok" : "no"}`;
  fb.innerHTML = correct
    ? `Đúng rồi. Đáp án: <b>${escapeHTML(correctOptions.join(" | "))}</b>`
    : `Chưa đúng. Đáp án đúng: <b>${escapeHTML(correctOptions.join(" | "))}</b>`;
  document.querySelectorAll(".option").forEach(el => {
    const optId = el.dataset.optionId;
    const opt = q.options.find(o => o.id === optId);
    el.classList.toggle("correct", !!opt?.correct);
    el.classList.toggle("wrong", (state.answers[q.id] || []).includes(optId) && !opt?.correct);
  });
}

function isCorrect(q) {
  const selected = [...(state.answers[q.id] || [])].sort();
  const correct = q.options.filter(o => o.correct).map(o => o.id).sort();
  return selected.length === correct.length && selected.every((x, i) => x === correct[i]);
}

function submitExam() {
  const unanswered = state.exam.filter(q => !(state.answers[q.id]?.length)).length;
  if (unanswered && !confirm(`Bạn còn ${unanswered} câu chưa làm. Bạn vẫn muốn nộp bài?`)) return;
  state.submitted = true;
  stopTimer();
  renderResult();
  showView("resultView");
}

function renderResult() {
  const total = state.exam.length;
  const correct = state.exam.filter(isCorrect).length;
  const percent = Math.round((correct / total) * 100);
  $("scoreTitle").textContent = `${correct}/${total} câu đúng`;
  $("scoreDesc").textContent = `Điểm quy đổi: ${(percent / 10).toFixed(1)}/10 • Thời gian: ${formatDuration(Math.floor((Date.now() - state.startedAt) / 1000))}`;
  $("scoreCircle").style.setProperty("--p", `${percent}%`);
  $("scoreCircle").dataset.score = `${percent}%`;

  $("reviewList").innerHTML = state.exam.map((q, i) => renderReviewItem(q, i)).join("");
  saveResult({ correct, total, percent, date: new Date().toISOString() });
}

function renderReviewItem(q, i) {
  const selected = state.answers[q.id] || [];
  const correctIds = q.options.filter(o => o.correct).map(o => o.id);
  const ok = isCorrect(q);
  const source = `${q.chapter || ""}${q.page ? ` • trang ${q.page}` : ""}`;
  const opts = q.options.map(o => {
    const classes = [
      "answer-pill",
      o.correct ? "good" : "",
      selected.includes(o.id) && !o.correct ? "bad" : ""
    ].join(" ");
    const mark = o.correct ? " ✓" : selected.includes(o.id) ? " ✗" : "";
    return `<span class="${classes}">${escapeHTML(o.id)}. ${escapeHTML(o.text)}${mark}</span>`;
  }).join("");
  return `<div class="review-item ${ok ? "correct" : "wrong"}">
    <div class="review-meta">${escapeHTML(source)}</div>
    <h4>${i + 1}. ${escapeHTML(q.question)}</h4>
    ${renderQuestionMedia(q)}
    <div>${opts}</div>
    ${q.note ? `<p class="review-meta">Ghi chú: ${escapeHTML(q.note)}</p>` : ""}
  </div>`;
}

function retryWrong() {
  const wrong = state.exam.filter(q => !isCorrect(q));
  if (!wrong.length) {
    alert("Bạn không có câu sai để luyện lại.");
    return;
  }
  const config = {
    pool: wrong,
    count: wrong.length,
    shuffleQuestions: true,
    shuffleOptions: false,
    instantFeedback: true,
    timeLimitMin: 0
  };
  startExam(config);
}

function captureDefaultAnswers() {
  QUESTIONS.forEach(q => {
    DEFAULT_CORRECT[q.id] = q.options.filter(o => o.correct).map(o => o.id);
  });
}

function getSavedAnswerCorrections() {
  try {
    const raw = localStorage.getItem(ANSWER_CORRECTION_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch (err) {
    console.warn("Không đọc được dữ liệu chỉnh đáp án", err);
    return {};
  }
}

function persistAnswerCorrections() {
  localStorage.setItem(ANSWER_CORRECTION_KEY, JSON.stringify(savedCorrections));
}

function applySavedAnswerCorrections() {
  savedCorrections = getSavedAnswerCorrections();
  Object.entries(savedCorrections).forEach(([qid, ids]) => {
    const q = QUESTIONS.find(item => item.id === qid);
    if (q && Array.isArray(ids)) setCorrectIds(q, ids);
  });
}

function setCorrectIds(q, ids) {
  const correctIds = Array.from(new Set(ids)).filter(Boolean);
  q.options.forEach(o => { o.correct = correctIds.includes(o.id); });
  q.answers = correctIds.slice();
  q.type = correctIds.length > 1 ? "multi" : "single";
}

function syncCurrentQuestionToBank(q, ids) {
  setCorrectIds(q, ids);
  const original = QUESTIONS.find(item => item.id === q.id);
  if (original) setCorrectIds(original, ids);
  state.exam.forEach(item => {
    if (item.id === q.id) setCorrectIds(item, ids);
  });
}

function openAnswerEditor() {
  if (!isAdmin) {
    alert("Chức năng chỉnh đáp án chỉ dành cho Admin.");
    return;
  }
  const q = state.exam[state.index];
  if (!q) return;
  const currentCorrect = q.options.filter(o => o.correct).map(o => o.id);
  $("editorOptions").innerHTML = q.options.map(opt => {
    const checked = currentCorrect.includes(opt.id) ? "checked" : "";
    return `<label class="editor-option">
      <input type="checkbox" value="${escapeAttr(opt.id)}" ${checked}>
      <strong>${escapeHTML(opt.id)}</strong>
      <span>${escapeHTML(opt.text)}</span>
    </label>`;
  }).join("");
  $("editAnswerNote").className = "edit-note hidden";
  $("editAnswerNote").textContent = "";
  $("answerEditor").classList.remove("hidden");
  $("answerEditor").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeAnswerEditor(clearNote = true) {
  const editor = $("answerEditor");
  if (!editor) return;
  editor.classList.add("hidden");
  if (clearNote && $("editAnswerNote")) {
    $("editAnswerNote").className = "edit-note hidden";
    $("editAnswerNote").textContent = "";
  }
}

function saveCurrentAnswerEdit() {
  if (!isAdmin) {
    alert("Chức năng chỉnh đáp án chỉ dành cho Admin.");
    return;
  }
  const q = state.exam[state.index];
  const checked = Array.from($("editorOptions").querySelectorAll("input:checked")).map(input => input.value);
  if (!checked.length) {
    alert("Bạn cần chọn ít nhất 1 đáp án đúng.");
    return;
  }
  syncCurrentQuestionToBank(q, checked);
  savedCorrections[q.id] = checked;
  persistAnswerCorrections();
  state.checked[q.id] = true;
  if (state.answers[q.id]?.length) state.locked[q.id] = true;
  $("editAnswerNote").className = "edit-note";
  $("editAnswerNote").textContent = `Đã lưu đáp án đúng: ${checked.join(", ")}. Lần sau mở lại file, chỉnh sửa này vẫn còn trên trình duyệt này.`;
  renderQuestion();
}

function resetCurrentAnswerEdit() {
  if (!isAdmin) {
    alert("Chức năng chỉnh đáp án chỉ dành cho Admin.");
    return;
  }
  const q = state.exam[state.index];
  if (!q) return;
  const defaults = DEFAULT_CORRECT[q.id];
  if (!defaults || !defaults.length) {
    alert("Không tìm thấy đáp án mặc định của câu này.");
    return;
  }
  if (!confirm(`Xóa chỉnh sửa đã lưu và đưa câu này về đáp án mặc định: ${defaults.join(", ")}?`)) return;
  delete savedCorrections[q.id];
  persistAnswerCorrections();
  syncCurrentQuestionToBank(q, defaults);
  if (state.answers[q.id]?.length) {
    state.checked[q.id] = true;
    state.locked[q.id] = true;
  } else {
    delete state.checked[q.id];
    delete state.locked[q.id];
  }
  renderQuestion();
}



/* ===== Server License / Admin functions =====
   Bản này KHÔNG chứa mật khẩu admin, thuật toán tạo key, private key hay ngân hàng câu hỏi trong frontend.
   License và quyền admin được kiểm tra qua server.js. Muốn thu hồi key phải chạy bản server này.
*/
function initLicenseAndAdmin() {
  updateDeviceCodeDisplays();
  restoreAdminSession();
  updateAdminUI();
  validateStoredAccess();
}

function bindLicenseEvents() {
  const binds = [
    ["copyDeviceBtn", "click", copyDeviceCode],
    ["copyDeviceBtnMain", "click", copyDeviceCode],
    ["copyDeviceBtnFooter", "click", copyDeviceCode],
    ["copyDeviceBtnAdmin", "click", copyDeviceCode],
    ["activateBtn", "click", activateLicense],
    ["openAdminDialogBtn", "click", openAdminDialog],
    ["openAdminFooterBtn", "click", openAdminDialog],
    ["closeAdminDialogBtn", "click", closeAdminDialog],
    ["adminLoginBtn", "click", adminLogin],
    ["adminLogoutBtn", "click", adminLogout]
  ];
  binds.forEach(([id, event, handler]) => {
    const el = $(id);
    if (el && !el.dataset.bound) {
      el.addEventListener(event, handler);
      el.dataset.bound = "1";
    }
  });
  const licenseInput = $("licenseInput");
  if (licenseInput && !licenseInput.dataset.bound) {
    licenseInput.addEventListener("keydown", (e) => { if (e.key === "Enter") activateLicense(); });
    licenseInput.dataset.bound = "1";
  }
}

function getDeviceId() {
  let id = window.__LKQ_DEVICE_ID__ || localStorage.getItem(DEVICE_STORAGE_KEY);
  if (!id) {
    let part = "";
    try {
      const arr = new Uint32Array(3);
      crypto.getRandomValues(arr);
      part = Array.from(arr).map(n => n.toString(36).toUpperCase().padStart(7, "0")).join("-");
    } catch (_) {
      const rand = Math.random().toString(36).slice(2, 10).toUpperCase();
      const time = Date.now().toString(36).toUpperCase();
      part = `${time}-${rand}`;
    }
    id = `LKQ-${part}`;
    localStorage.setItem(DEVICE_STORAGE_KEY, id);
  }
  window.__LKQ_DEVICE_ID__ = id;
  return id;
}

function updateDeviceCodeDisplays() {
  const deviceId = getDeviceId();
  ["deviceCode", "footerDeviceCode"].forEach(id => {
    const el = $(id);
    if (el) el.textContent = deviceId;
  });
}

function getStoredUserToken() {
  try { return JSON.parse(localStorage.getItem(LICENSE_STORAGE_KEY) || "null")?.token || ""; }
  catch (_) { return ""; }
}

function getStoredAdminToken() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) || localStorage.getItem(ADMIN_SESSION_KEY) || "";
}

function getAccessToken() {
  return getStoredAdminToken() || getStoredUserToken();
}

async function apiFetch(path, options = {}) {
  const headers = Object.assign({ "Content-Type": "application/json" }, options.headers || {});
  const token = getAccessToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
  const res = await fetch(url, Object.assign({}, options, { headers }));
  let data = null;
  try { data = await res.json(); } catch (_) { data = {}; }
  if (!res.ok || data.ok === false) throw new Error(data.message || `Lỗi server ${res.status}`);
  return data;
}

async function validateStoredAccess() {
  const token = getAccessToken();
  if (!token) {
    showLicenseGate("Nhập mã key đã mua để sử dụng website trên thiết bị này. Muốn mua key vui lòng liên hệ Zalo: 0772998989.", false);
    return;
  }
  try {
    const data = await apiFetch('/api/validate', {
      method: 'POST',
      body: JSON.stringify({ deviceId: getDeviceId(), token })
    });
    CLIENT_ROLE = data.role || 'user';
    isAdmin = CLIENT_ROLE === 'admin';
    unlockApp(isAdmin ? 'admin' : 'license');
  } catch (err) {
    localStorage.removeItem(LICENSE_STORAGE_KEY);
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    isAdmin = false;
    CLIENT_ROLE = 'guest';
    showLicenseGate((err.message || 'Key không hợp lệ hoặc đã bị thu hồi.') + ' Liên hệ Zalo: 0772998989.', true);
  }
}

async function loadProtectedQuestions() {
  if (QUESTIONS_LOADED) return true;
  try {
    const data = await apiFetch('/api/questions', { method: 'GET' });
    QUESTIONS = Array.isArray(data.questions) ? data.questions : [];
    QUESTIONS_LOADED = true;
    Object.keys(DEFAULT_CORRECT).forEach(k => delete DEFAULT_CORRECT[k]);
    captureDefaultAnswers();
    applySavedAnswerCorrections();
    $("totalQuestions").textContent = QUESTIONS.length;
    renderChapterStats();
    populateFilters();
    updateSelectedCount();
    renderBank(QUESTIONS.slice(0, 60));
    return true;
  } catch (err) {
    console.error(err);
    showLicenseMessage('Không tải được ngân hàng câu hỏi: ' + err.message, 'error');
    return false;
  }
}

function canUseApp() {
  return document.body.classList.contains('license-unlocked') && !!getAccessToken();
}

async function activateLicense() {
  const input = $("licenseInput");
  const key = input ? input.value.trim() : "";
  if (!key) {
    showLicenseMessage("Bạn chưa nhập mã key. Muốn mua key vui lòng liên hệ Zalo: 0772998989.", "error");
    return;
  }
  try {
    const data = await apiFetch('/api/activate', {
      method: 'POST',
      body: JSON.stringify({ key, deviceId: getDeviceId() })
    });
    localStorage.setItem(LICENSE_STORAGE_KEY, JSON.stringify({ token: data.token, deviceId: getDeviceId(), activatedAt: new Date().toISOString() }));
    CLIENT_ROLE = 'user';
    isAdmin = false;
    showLicenseMessage("Kích hoạt thành công. Bạn có thể sử dụng website trên thiết bị này.", "ok");
    unlockApp("license");
  } catch (err) {
    showLicenseMessage((err.message || "Mã key không hợp lệ với thiết bị này.") + " Liên hệ Zalo: 0772998989.", "error");
  }
}

function restoreAdminSession() {
  isAdmin = !!getStoredAdminToken();
}

async function adminLogin() {
  const password = ($("adminKeyInput")?.value || "").trim();
  if (!password) {
    showAdminMessage("Bạn chưa nhập mật khẩu admin.", "error");
    return;
  }
  try {
    const data = await apiFetch('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ password, deviceId: getDeviceId() })
    });
    sessionStorage.setItem(ADMIN_SESSION_KEY, data.token);
    localStorage.setItem(ADMIN_SESSION_KEY, data.token);
    isAdmin = true;
    CLIENT_ROLE = 'admin';
    showAdminMessage("Đăng nhập Admin thành công. Bạn có thể chỉnh đáp án.", "ok");
    unlockApp("admin");
    updateAdminUI();
  } catch (err) {
    showAdminMessage(err.message || "Sai mật khẩu admin.", "error");
  }
}

function adminLogout() {
  isAdmin = false;
  CLIENT_ROLE = 'guest';
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  localStorage.removeItem(ADMIN_SESSION_KEY);
  closeAnswerEditor();
  showAdminMessage("Đã đăng xuất Admin.", "");
  updateAdminUI();
  validateStoredAccess();
}

function unlockApp(mode = "license") {
  document.body.classList.remove("license-locked");
  document.body.classList.add("license-unlocked");
  updateDeviceCodeDisplays();
  updateLicenseStatus(mode);
  updateAdminUI();
  loadProtectedQuestions();
}

function showLicenseGate(message, isError = false) {
  document.body.classList.add("license-locked");
  document.body.classList.remove("license-unlocked");
  if (message) showLicenseMessage(message, isError ? "error" : "");
  updateDeviceCodeDisplays();
  updateLicenseStatus("locked");
}

function updateLicenseStatus(mode) {
  const el = $("licenseStatus");
  if (!el) return;
  el.className = "license-status";
  if (mode === "admin" || isAdmin) {
    el.textContent = "Admin đang đăng nhập";
    el.classList.add("admin");
  } else if (canUseApp()) {
    el.textContent = "Đã kích hoạt 1 thiết bị";
    el.classList.add("active");
  } else {
    el.textContent = "Chưa kích hoạt";
  }
}

function showLicenseMessage(message, type = "") {
  const el = $("licenseMessage");
  if (!el) return;
  el.textContent = message;
  el.className = `license-message ${type || ""}`.trim();
}

function copyDeviceCode() {
  const code = getDeviceId();
  updateDeviceCodeDisplays();
  const done = () => showDeviceCopyMessage("Đã copy mã thiết bị. Gửi mã này qua Zalo 0772998989 để mua key.");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(done).catch(() => {
      prompt("Copy mã thiết bị và gửi qua Zalo 0772998989:", code);
      done();
    });
  } else {
    prompt("Copy mã thiết bị và gửi qua Zalo 0772998989:", code);
    done();
  }
}

function showDeviceCopyMessage(message) {
  const inline = $("deviceInlineMessage");
  if (inline) {
    inline.textContent = message;
    window.clearTimeout(showDeviceCopyMessage._timer);
    showDeviceCopyMessage._timer = window.setTimeout(() => { inline.textContent = ""; }, 3500);
  }
  const licenseViewVisible = document.body.classList.contains("license-locked");
  if (licenseViewVisible) showLicenseMessage(message, "ok");
  const adminMsg = $("adminMessage");
  const adminDialogOpen = $("adminDialog") && !$("adminDialog").classList.contains("hidden");
  if (adminMsg && adminDialogOpen) showAdminMessage(message, "ok");
}

function openAdminDialog() {
  const dialog = $("adminDialog");
  if (dialog) dialog.classList.remove("hidden");
  updateAdminUI();
}

function closeAdminDialog() {
  const dialog = $("adminDialog");
  if (dialog) dialog.classList.add("hidden");
}

function updateAdminUI() {
  const editBtn = $("editAnswerBtn");
  if (editBtn) editBtn.classList.toggle("admin-only-hidden", !isAdmin);
  const logoutBtn = $("adminLogoutBtn");
  if (logoutBtn) logoutBtn.classList.toggle("hidden", !isAdmin);
  const loginBtn = $("adminLoginBtn");
  if (loginBtn) loginBtn.classList.toggle("hidden", isAdmin);
  updateLicenseStatus(isAdmin ? "admin" : (canUseApp() ? "license" : "locked"));
}

function showAdminMessage(message, type = "") {
  const el = $("adminMessage");
  if (!el) return;
  el.textContent = message;
  el.className = `license-message ${type || ""}`.trim();
}

function startTimer() {
  stopTimer();
  if (!state.timeLimitSec) {
    $("timer").textContent = "Không giới hạn";
    state.timerId = setInterval(() => {
      $("timer").textContent = formatDuration(Math.floor((Date.now() - state.startedAt) / 1000));
    }, 1000);
    return;
  }
  const endAt = Date.now() + state.timeLimitSec * 1000;
  state.timerId = setInterval(() => {
    const remain = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
    $("timer").textContent = formatDuration(remain);
    if (remain <= 0) {
      alert("Hết giờ. Hệ thống sẽ tự nộp bài.");
      submitExam();
    }
  }, 300);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function renderBank(items) {
  $("bankList").innerHTML = items.map((q, i) => {
    const correct = q.options.filter(o => o.correct).map(o => `${o.id}. ${o.text}`).join(" | ");
    return `<div class="review-item">
      <div class="review-meta">${escapeHTML(q.chapter || "")} • ${escapeHTML(q.section || "")} • trang ${q.page || "?"}</div>
      <h4>${escapeHTML(q.question_no || `Câu ${i+1}`)}: ${escapeHTML(q.question)}</h4>
      ${renderQuestionMedia(q)}
      <div>${q.options.map(o => `<span class="answer-pill ${o.correct ? "good" : ""}">${escapeHTML(o.id)}. ${escapeHTML(o.text)}</span>`).join("")}</div>
      <p class="review-meta">Đáp án: ${escapeHTML(correct)}</p>
    </div>`;
  }).join("");
}

function searchBank(keyword) {
  const kw = normalize(keyword);
  if (!kw) {
    renderBank(QUESTIONS.slice(0, 60));
    return;
  }
  const items = QUESTIONS.filter(q => {
    const text = normalize([q.question, q.chapter, q.section, q.question_no, ...q.options.map(o => o.text)].join(" "));
    return text.includes(kw);
  }).slice(0, 100);
  renderBank(items);
}

function saveResult(result) {
  const key = "tkhts_quiz_results";
  const old = JSON.parse(localStorage.getItem(key) || "[]");
  old.unshift(result);
  localStorage.setItem(key, JSON.stringify(old.slice(0, 20)));
}

function deepClone(obj) {
  // Dùng JSON clone để chạy ổn cả trên trình duyệt cũ hoặc khi mở file offline.
  return JSON.parse(JSON.stringify(obj));
}

function countBy(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function unique(arr) {
  return [...new Set(arr)];
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shortChapter(chapter) {
  return (chapter || "Khác").replace(/^CHƯƠNG\s+/i, "Chương ");
}

function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function escapeHTML(str) {
  return String(str ?? "").replace(/[&<>"']/g, m => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[m]));
}

function escapeAttr(str) {
  return escapeHTML(str).replace(/`/g, "&#096;");
}

function normalize(str) {
  return String(str || "").toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}