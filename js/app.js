let QUESTIONS = window.QUESTION_BANK || [];
const THEORY_NOTES = window.THEORY_NOTES || [];
const LICENSE_STORAGE_KEY = "lkq_license_v2_signed";
const DEVICE_STORAGE_KEY = "lkq_device_id_v1";
const ADMIN_SESSION_KEY = "lkq_admin_session_v2";
const ANSWER_CORRECTION_KEY = "tkhts_answer_corrections_v1";
const AI_NOTE_STORAGE_KEY = "tkhts_ai_notes_v1";
const THEME_STORAGE_KEY = "tkhts_theme_mode_v1";
// Chỉ chứa PUBLIC KEY để xác thực chữ ký license. Không chứa mật khẩu admin, private key hoặc thuật toán tạo key.
const PUBLIC_KEY_N = BigInt("0xab4c9775518e19d7f56d6e38a8e6f9c529181ff464964689e46a6babc525daef59ac4039399c8c70dd213d3cc9c71323caf31d9a4d3c0fafbde074f72c09e9231621fc7436bcb6facc80b1265da5d8b955167f4f26ec68167858e06f7fbcb1c5abc1d27482576c6c7baf1e3f52cb225d298d22b9310a8c52011d54a4051f4fd587712b276732b45a95d61865dfd18162c4a81a4d715ed1e35f5ec73e2acff30eeb73ffeabb57db44ce80c1aa1e16427f46f92aa6ee8a82ce737fd0b6513dccbb0957baa6d66b3e2c1293b12bb887a66b6f1a817857c17c09cc15851d74c2b297683c31b527f94a612ed792025b4a878c9e29204647e55e662c8821ab68e1e533");
const PUBLIC_KEY_E = BigInt(65537);
const RSA_KEY_BYTES = 256;

const LICENSE_PRODUCT = "TKHTS-LKQ-24161276";
const SPECIAL_DEVICE_MESSAGES = {
  "LKQ-MR36KCTH-8H7GQTXG": {
    icon: "🐶",
    title: "con tuất đức mua hahaha",
    subtitle: "Chúc mừng thiết bị này đã được ghi nhận!",
    effect: "congratulation"
  }
};
let specialDeviceCelebrationShown = false;
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
  lastConfig: null,
  theoryIndex: 0
};

const CHAPTER_1_TO_6 = [
  "CHƯƠNG 1:",
  "CHƯƠNG 2:",
  "CHƯƠNG 3:",
  "CHƯƠNG 4:",
  "CHƯƠNG 5:",
  "CHƯƠNG 6:"
];

function isAllowedBankQuestion(q) {
  const ch = String(q?.chapter || "");
  return CHAPTER_1_TO_6.some(p => ch.startsWith(p))
    || ch.startsWith("ĐỀ")
    || ch.startsWith("KIỂM TRA ONLINE");
}

QUESTIONS = QUESTIONS.filter(isAllowedBankQuestion);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", safeInit);
} else {
  safeInit();
}

function safeInit() {
  try {
    initThemeMode();
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

function initThemeMode() {
  let saved = "light";
  try {
    saved = localStorage.getItem(THEME_STORAGE_KEY) || "light";
  } catch (err) {
    saved = "light";
  }
  applyThemeMode(saved === "dark" ? "dark" : "light");

  const btn = $("themeToggle");
  if (!btn || btn.dataset.bound === "1") return;
  btn.dataset.bound = "1";
  btn.addEventListener("click", () => {
    const next = document.documentElement.classList.contains("dark-mode") ? "light" : "dark";
    applyThemeMode(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch (err) {
      console.warn("Không lưu được chế độ giao diện", err);
    }
  });
}

function applyThemeMode(mode) {
  const isDark = mode === "dark";
  document.documentElement.classList.toggle("dark-mode", isDark);
  if (document.body) document.body.classList.toggle("dark-mode", isDark);
  const btn = $("themeToggle");
  if (btn) {
    btn.textContent = isDark ? "☀️ Sáng" : "🌙 Tối";
    btn.setAttribute("aria-label", isDark ? "Bật chế độ sáng" : "Bật chế độ tối");
    btn.setAttribute("aria-pressed", String(isDark));
  }
}

function init() {
  captureDefaultAnswers();
  applySavedAnswerCorrections();
  $("totalQuestions").textContent = QUESTIONS.length;
  renderChapterStats();
  populateFilters();
  updateSelectedCount();
  bindEvents();
  renderBank(QUESTIONS.slice(0, 60));
  renderTheoryView();
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
  $("theoryBtn")?.addEventListener("click", () => { renderTheoryView(); showView("theoryView"); });
  $("closeTheoryBtn")?.addEventListener("click", () => showView("setupView"));
  $("theorySearch")?.addEventListener("input", (e) => searchTheory(e.target.value));
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
  ["setupView", "quizView", "resultView", "bankView", "theoryView"].forEach(v => $(v).classList.add("hidden"));
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
  const chapters = unique(QUESTIONS.map(q => q.chapter)).filter(Boolean);
  const opts = [
    `<option value="CHAPTER_1_6">Tất cả chương 1–6</option>`,
    `<option value="ALL">Tất cả câu trong ngân hàng</option>`,
    ...chapters.map(ch => `<option value="${escapeAttr(ch)}">${escapeHTML(shortChapter(ch))}</option>`)
  ];
  $("chapterSelect").innerHTML = opts.join("");
  $("chapterSelect").value = "CHAPTER_1_6";
}

function updateSelectedCount() {
  const max = getFilteredPool().length;
  const el = $("selectedCount");
  if (el) el.textContent = max ? `${max} câu` : "0 câu";
}

function getFilteredPool(options = {}) {
  const chapter = $("chapterSelect").value;
  let pool = QUESTIONS.filter(isAllowedBankQuestion);

  if (chapter === "CHAPTER_1_6") {
    pool = pool.filter(q => CHAPTER_1_TO_6.some(p => (q.chapter || "").startsWith(p)));
  } else if (chapter !== "ALL") {
    pool = pool.filter(q => q.chapter === chapter);
  }
  return pool;
}

function startExam(configOverride = null) {
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
  const blocks = q.codeBlocks || [];
  // Nếu đã có khung code dạng chữ, không hiển thị lại ảnh code gốc để tránh rối mắt.
  const images = blocks.length ? [] : (q.images || (q.image ? [q.image] : []));
  const codeHtml = blocks.map(block => `<div class="question-code-wrap">
    ${block.title ? `<div class="code-title">${escapeHTML(block.title)}</div>` : ""}
    <pre class="code-block"><code>${escapeHTML(block.code || "")}</code></pre>
  </div>`).join("");
  const imageHtml = images.map(img => `<figure>
    <a href="${escapeAttr(img.src)}" target="_blank" rel="noopener">
      <img src="${escapeAttr(img.src)}" alt="${escapeAttr(img.alt || 'Hình minh họa câu hỏi')}">
    </a>
    ${img.caption ? `<figcaption>${escapeHTML(img.caption)} • Bấm vào ảnh để mở lớn</figcaption>` : ""}
  </figure>`).join("");
  return codeHtml + imageHtml;
}

function isCodeLikeOption(text) {
  const value = String(text || "").trim();
  if (!value) return false;

  // Câu văn tiếng Việt có keyword như always/assign/wire vẫn phải dùng font thường.
  if (/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/.test(value)) {
    return false;
  }

  // Các toán tử/ký hiệu Verilog riêng lẻ.
  if (/^(==|=|=>|<=|>=|<|>|\+|-|\*|\/|&&|\|\||!|~|\^)$/.test(value)) return true;

  // Đáp án nhiều dòng thường là đoạn code.
  if (value.includes("\n")) return true;

  // Chú thích Verilog/C-style.
  if (/^(\/\*|\/\/|\*\/)/.test(value)) return true;

  // Câu lệnh hoặc khai báo Verilog thật sự.
  if (/^(assign|always|module|reg|wire|input|output|and|or|not|nand|nor|xor|xnor|type)\b/.test(value)) return true;

  // Gán/instance/primitive ngắn, không phải câu văn.
  if (/^[A-Za-z_]\w*(\[[^\]]+\])?\s*(<=|=)\s*.+;?$/.test(value)) return true;
  if (/^[A-Za-z_]\w*\s*\([^)]*\);?$/.test(value)) return true;

  return false;
}

function renderOptionContent(text) {
  return isCodeLikeOption(text)
    ? `<code class="option-code">${escapeHTML(text)}</code>`
    : `<span>${escapeHTML(text)}</span>`;
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
      ${renderOptionContent(opt.text)}
    </label>`;
  }).join("");

  document.querySelectorAll(".option").forEach(label => {
    label.addEventListener("click", (event) => {
      event.preventDefault();
      if (state.submitted || state.locked[q.id]) return;
      toggleAnswer(q, label.dataset.optionId);
    });
  });

  if (q.type === "multi" && !state.submitted && !state.locked[q.id]) {
    const multiHelp = document.createElement("div");
    multiHelp.className = "multi-answer-help";
    multiHelp.innerHTML = `Câu này có thể có nhiều đáp án đúng. Hãy tick đủ đáp án rồi bấm <b>Chốt đáp án</b>.`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn primary multi-lock-btn";
    btn.textContent = "Chốt đáp án";
    btn.addEventListener("click", () => {
      if (!(state.answers[q.id]?.length)) {
        alert("Bạn cần chọn ít nhất một đáp án.");
        return;
      }
      state.checked[q.id] = true;
      state.locked[q.id] = true;
      renderQuestion();
    });
    $("optionList").appendChild(multiHelp);
    $("optionList").appendChild(btn);
  }

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
    if (current.includes(optId)) {
      state.answers[q.id] = current.filter(x => x !== optId);
    } else {
      state.answers[q.id] = [...current, optId];
    }
    renderQuestion();
    return;
  }

  state.answers[q.id] = [optId];
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

function getCorrectAnswerText(q) {
  return q.options.filter(o => o.correct).map(o => o.id).join(", ");
}

function getAINotes() {
  try {
    const raw = localStorage.getItem(AI_NOTE_STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {};
    return data && typeof data === "object" && !Array.isArray(data) ? data : {};
  } catch {
    return {};
  }
}

function getAINote(qid) {
  const q = QUESTIONS.find(item => item.id === qid);
  if (q?.aiNote) return q.aiNote;
  const data = getAINotes();
  return data[qid] || "";
}

function saveAINote(qid, text) {
  const data = getAINotes();
  data[qid] = String(text || "").trim();
  localStorage.setItem(AI_NOTE_STORAGE_KEY, JSON.stringify(data));
}

function formatText(text) {
  return escapeHTML(text).replace(/\n/g, "<br>");
}

function buildChatGPTPrompt(q) {
  const selected = state.answers[q.id] || [];
  const options = q.options.map(o => `${o.id}. ${o.text}`).join("\n");
  const code = (q.codeBlocks || [])
    .map((b, i) => `\nĐoạn code ${b.title ? `(${b.title})` : i + 1}:\n${b.code || ""}`)
    .join("\n");

  return `Bạn là giảng viên môn Thiết kế & Tổng hợp Hệ thống số.

Hãy giải thích ngắn gọn câu trắc nghiệm sau.
Yêu cầu:
- Đúng trọng tâm, không lan man.
- Tối đa 6 dòng.
- Nêu vì sao đáp án đúng là đúng.
- Nếu tôi chọn sai, nêu ngắn gọn vì sao lựa chọn của tôi sai.
- Nếu phát hiện đáp án trong dữ liệu có thể sai, hãy ghi rõ: "Cần kiểm tra lại đáp án".

Câu hỏi:
${q.question}
${code}

Các lựa chọn:
${options}

Đáp án đúng theo website: ${getCorrectAnswerText(q)}
Tôi đã chọn: ${selected.length ? selected.join(", ") : "chưa chọn"}
Kết quả của tôi: ${isCorrect(q) ? "đúng" : "sai"}`;
}

function copyText(text, button) {
  const done = () => {
    if (!button) return;
    const old = button.textContent;
    button.textContent = "Đã copy";
    setTimeout(() => { button.textContent = old; }, 1400);
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  const area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.focus();
  area.select();
  document.execCommand("copy");
  area.remove();
  done();
}

function buildAINotesDataFile() {
  const notes = {};
  QUESTIONS.forEach(q => {
    const note = getAINote(q.id).trim();
    if (note) notes[q.id] = note;
  });

  return `// File này được xuất từ website luyện thi.\n`
    + `// Cách dùng: thay file data/ai-notes.js cũ bằng file này.\n\n`
    + `window.AI_NOTES = ${JSON.stringify(notes, null, 2)};\n\n`
    + `(function applyAINotesToQuestionBank() {\n`
    + `  const notes = window.AI_NOTES || {};\n`
    + `  (window.QUESTION_BANK || []).forEach(q => {\n`
    + `    if (Object.prototype.hasOwnProperty.call(notes, q.id)) {\n`
    + `      q.aiNote = notes[q.id];\n`
    + `    }\n`
    + `  });\n`
    + `})();\n`;
}

function downloadBlob(content, filename, type = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 800);
}

function exportAINotesData(button) {
  const data = buildAINotesDataFile();
  downloadBlob(data, "ai-notes.js", "application/javascript;charset=utf-8");

  if (!button) return;
  const old = button.textContent;
  button.textContent = "Đã xuất file";
  setTimeout(() => { button.textContent = old; }, 1400);
}

function showAIEditor(q) {
  const editor = $("aiNoteEditor");
  if (!editor) return;
  editor.innerHTML = `
    <textarea id="aiNoteInput" class="ai-paste-input" rows="7" placeholder="Dán phản hồi ChatGPT vào đây...">${escapeHTML(getAINote(q.id))}</textarea>
    <div class="ai-editor-actions">
      <button id="saveAiNoteBtn" class="btn primary" type="button">Lưu và hiển thị</button>
      <button id="cancelAiNoteBtn" class="btn ghost" type="button">Hủy</button>
    </div>
  `;
  $("saveAiNoteBtn").addEventListener("click", () => {
    saveAINote(q.id, $("aiNoteInput").value);
    showFeedback(q);
  });
  $("cancelAiNoteBtn").addEventListener("click", () => {
    editor.innerHTML = "";
  });
}

function showFeedback(q) {
  const fb = $("feedbackBox");
  const correct = isCorrect(q);
  const answer = escapeHTML(getCorrectAnswerText(q));
  const note = getAINote(q.id);

  fb.className = `feedback ${correct ? "ok" : "no"}`;
  fb.innerHTML = `
    <div class="answer-line">${correct ? "Đúng." : "Sai."} Đáp án đúng: <b>${answer}</b></div>
    ${note ? `
      <div class="ai-note-box">
        <div class="ai-note-title">Giải thích</div>
        <div class="ai-note-body">${formatText(note)}</div>
      </div>
    ` : ""}
  `;

  const selected = state.answers[q.id] || [];
  document.querySelectorAll(".option").forEach(el => {
    const optId = el.dataset.optionId;
    const opt = q.options.find(o => o.id === optId);
    el.classList.toggle("correct", !!opt?.correct);
    el.classList.toggle("wrong", selected.includes(optId) && !opt?.correct);
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
      ${renderOptionContent(opt.text)}
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

/* ===== License / Admin functions ===== */
function initLicenseAndAdmin() {
  updateDeviceCodeUI();
  restoreAdminSession();
  updateAdminUI();
  if (canUseApp()) {
    unlockApp(isAdmin ? "admin" : "license");
  } else {
    showLicenseGate("Nhập mã key đã mua để sử dụng website trên thiết bị này. Muốn mua key vui lòng liên hệ Zalo: 0772998989.", false);
  }
}

function bindLicenseEvents() {
  const binds = [
    ["copyDeviceBtn", "click", copyDeviceCode],
    ["copyFooterDeviceBtn", "click", copyDeviceCode],
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
  let id = localStorage.getItem(DEVICE_STORAGE_KEY);
  if (!id) {
    const rand = Math.random().toString(36).slice(2, 10).toUpperCase();
    const time = Date.now().toString(36).toUpperCase();
    id = `LKQ-${time}-${rand}`;
    localStorage.setItem(DEVICE_STORAGE_KEY, id);
  }
  return id;
}

function updateDeviceCodeUI() {
  const deviceId = getDeviceId();
  ["deviceCode", "footerDeviceCode"].forEach(id => {
    const el = $(id);
    if (el) el.textContent = deviceId;
  });
}

function getSpecialDeviceConfig() {
  return SPECIAL_DEVICE_MESSAGES[getDeviceId()] || null;
}

function maybeShowSpecialDeviceCelebration(force = false) {
  const config = getSpecialDeviceConfig();
  if (!config) return;
  if (specialDeviceCelebrationShown && !force) return;
  specialDeviceCelebrationShown = true;

  const oldOverlay = document.querySelector(".special-device-overlay");
  if (oldOverlay) oldOverlay.remove();

  const overlay = document.createElement("div");
  overlay.className = "special-device-overlay";
  overlay.setAttribute("role", "status");
  overlay.setAttribute("aria-live", "polite");

  const particles = ["🎉", "✨", "🎊", "🐶", "🦴", "⭐", "🥳", "🐾"];
  const particleHtml = Array.from({ length: 34 }, (_, i) => {
    const icon = particles[i % particles.length];
    const left = Math.round((i * 29) % 100);
    const delay = (i % 9) * 0.12;
    const duration = 2.3 + (i % 5) * 0.25;
    const size = 18 + (i % 4) * 6;
    return `<span style="left:${left}%;animation-delay:${delay}s;animation-duration:${duration}s;font-size:${size}px">${icon}</span>`;
  }).join("");

  overlay.innerHTML = `
    <div class="special-device-confetti">${particleHtml}</div>
    <div class="special-device-card">
      <div class="special-device-icon" aria-hidden="true">${escapeHTML(config.icon || "🐶")}</div>
      <div>
        <p class="special-device-kicker">CONGRATULATIONS</p>
        <h2>${escapeHTML(config.title || "")}</h2>
        <p>${escapeHTML(config.subtitle || "")}</p>
      </div>
      <button type="button" class="special-device-close" aria-label="Đóng thông báo">×</button>
    </div>
  `;

  document.body.appendChild(overlay);

  const close = () => {
    overlay.classList.add("closing");
    setTimeout(() => overlay.remove(), 280);
  };
  overlay.querySelector(".special-device-close")?.addEventListener("click", close);
  setTimeout(close, 5200);
}


function canonicalKey(str) {
  return String(str || "").trim();
}

function base64UrlToBytes(str) {
  str = String(str || "").replace(/\s+/g, "").replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  const bin = atob(str);
  return Array.from(bin, ch => ch.charCodeAt(0));
}

function bytesToString(bytes) {
  return new TextDecoder().decode(new Uint8Array(bytes));
}

function bytesToBigInt(bytes) {
  let hex = bytes.map(b => b.toString(16).padStart(2, "0")).join("");
  return BigInt("0x" + (hex || "0"));
}

function bigIntToBytes(num, len) {
  let hex = num.toString(16);
  if (hex.length % 2) hex = "0" + hex;
  let bytes = hex.match(/.{1,2}/g)?.map(h => parseInt(h, 16)) || [];
  if (len) {
    while (bytes.length < len) bytes.unshift(0);
    if (bytes.length > len) bytes = bytes.slice(bytes.length - len);
  }
  return bytes;
}

function modPow(base, exp, mod) {
  let result = 1n;
  base = base % mod;
  while (exp > 0n) {
    if (exp & 1n) result = (result * base) % mod;
    exp >>= 1n;
    base = (base * base) % mod;
  }
  return result;
}

function sha256Bytes(message) {
  function rotr(n, x) { return (x >>> n) | (x << (32 - n)); }
  const K = [
    0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
  ];
  const msg = Array.from(new TextEncoder().encode(message));
  const bitLen = msg.length * 8;
  msg.push(0x80);
  while ((msg.length % 64) !== 56) msg.push(0);
  const hi = Math.floor(bitLen / 0x100000000);
  const lo = bitLen >>> 0;
  [hi, lo].forEach(num => msg.push((num>>>24)&255, (num>>>16)&255, (num>>>8)&255, num&255));
  let H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  for (let i = 0; i < msg.length; i += 64) {
    const W = new Array(64);
    for (let t = 0; t < 16; t++) W[t] = ((msg[i+4*t]<<24)|(msg[i+4*t+1]<<16)|(msg[i+4*t+2]<<8)|msg[i+4*t+3]) >>> 0;
    for (let t = 16; t < 64; t++) {
      const s0 = rotr(7,W[t-15]) ^ rotr(18,W[t-15]) ^ (W[t-15]>>>3);
      const s1 = rotr(17,W[t-2]) ^ rotr(19,W[t-2]) ^ (W[t-2]>>>10);
      W[t] = (W[t-16] + s0 + W[t-7] + s1) >>> 0;
    }
    let [a,b,c,d,e,f,g,h] = H;
    for (let t = 0; t < 64; t++) {
      const S1 = rotr(6,e) ^ rotr(11,e) ^ rotr(25,e);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (h + S1 + ch + K[t] + W[t]) >>> 0;
      const S0 = rotr(2,a) ^ rotr(13,a) ^ rotr(22,a);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) >>> 0;
      h = g; g = f; f = e; e = (d + temp1) >>> 0; d = c; c = b; b = a; a = (temp1 + temp2) >>> 0;
    }
    H = H.map((v, idx) => (v + [a,b,c,d,e,f,g,h][idx]) >>> 0);
  }
  const out = [];
  H.forEach(num => out.push((num>>>24)&255, (num>>>16)&255, (num>>>8)&255, num&255));
  return out;
}

function expectedPkcs1Block(payloadText) {
  const digestInfo = [0x30,0x31,0x30,0x0d,0x06,0x09,0x60,0x86,0x48,0x01,0x65,0x03,0x04,0x02,0x01,0x05,0x00,0x04,0x20];
  const hash = sha256Bytes(payloadText);
  const tail = digestInfo.concat(hash);
  const psLen = RSA_KEY_BYTES - tail.length - 3;
  return [0x00, 0x01].concat(new Array(psLen).fill(0xff), [0x00], tail);
}

function constantTimeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

function verifySignedKey(key) {
  try {
    const raw = canonicalKey(key);
    const parts = raw.split(".");
    if (parts.length !== 3 || parts[0] !== "LKQ1") return null;
    const payloadB64 = parts[1];
    const sigBytes = base64UrlToBytes(parts[2]);
    const payloadText = bytesToString(base64UrlToBytes(payloadB64));
    const payload = JSON.parse(payloadText);
    if (payload.product !== LICENSE_PRODUCT) return null;
    const sigNum = bytesToBigInt(sigBytes);
    const decoded = bigIntToBytes(modPow(sigNum, PUBLIC_KEY_E, PUBLIC_KEY_N), RSA_KEY_BYTES);
    const expected = expectedPkcs1Block(payloadB64);
    if (!constantTimeEqual(decoded, expected)) return null;
    return payload;
  } catch (err) {
    console.warn("License verify failed", err);
    return null;
  }
}

function isPayloadForThisDevice(payload) {
  return payload && payload.deviceId === getDeviceId();
}

function canUseApp() {
  if (isAdmin) return true;
  try {
    const record = JSON.parse(localStorage.getItem(LICENSE_STORAGE_KEY) || "null");
    if (!record || !record.key) return false;
    const payload = verifySignedKey(record.key);
    return !!(payload && payload.role === "user" && isPayloadForThisDevice(payload));
  } catch (_) {
    return false;
  }
}

function activateLicense() {
  const input = $("licenseInput");
  const key = input ? input.value.trim() : "";
  if (!key) {
    showLicenseMessage("Bạn chưa nhập mã key. Muốn mua key vui lòng liên hệ Zalo: 0772998989.", "error");
    return;
  }
  const payload = verifySignedKey(key);
  if (!payload || payload.role !== "user" || !isPayloadForThisDevice(payload)) {
    showLicenseMessage("Mã key không hợp lệ với thiết bị này. Key chỉ dùng được trên đúng 1 thiết bị đã cấp. Liên hệ Zalo: 0772998989.", "error");
    return;
  }
  localStorage.setItem(LICENSE_STORAGE_KEY, JSON.stringify({ key, deviceId: getDeviceId(), activatedAt: new Date().toISOString() }));
  const special = getSpecialDeviceConfig();
  showLicenseMessage(special ? `${special.icon || "🐶"} ${special.title}` : "Kích hoạt thành công. Bạn có thể sử dụng website trên thiết bị này.", "ok");
  unlockApp("license");
  maybeShowSpecialDeviceCelebration(true);
}

function restoreAdminSession() {
  try {
    const key = sessionStorage.getItem(ADMIN_SESSION_KEY) || "";
    const payload = verifySignedKey(key);
    isAdmin = !!(payload && payload.role === "admin" && isPayloadForThisDevice(payload));
  } catch (_) { isAdmin = false; }
}

function unlockApp(mode = "license") {
  document.body.classList.remove("license-locked");
  document.body.classList.add("license-unlocked");
  updateLicenseStatus(mode);
  updateAdminUI();
  if (canUseApp() || isAdmin) {
    setTimeout(() => maybeShowSpecialDeviceCelebration(false), 260);
  }
}

function showLicenseGate(message, isError = false) {
  document.body.classList.add("license-locked");
  document.body.classList.remove("license-unlocked");
  if (message) showLicenseMessage(message, isError ? "error" : "");
  updateDeviceCodeUI();
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
    const special = getSpecialDeviceConfig();
    el.textContent = special ? `${special.icon || "🐶"} ${special.title}` : "Đã kích hoạt 1 thiết bị";
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
  updateDeviceCodeUI();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => {
      showLicenseMessage("Đã copy mã thiết bị. Gửi mã này qua Zalo 0772998989 để mua key.", "ok");
    }).catch(() => {
      prompt("Copy mã thiết bị và gửi qua Zalo 0772998989:", code);
    });
  } else {
    prompt("Copy mã thiết bị và gửi qua Zalo 0772998989:", code);
  }
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

function adminLogin() {
  const key = ($("adminKeyInput")?.value || "").trim();
  const payload = verifySignedKey(key);
  if (!payload || payload.role !== "admin" || !isPayloadForThisDevice(payload)) {
    showAdminMessage("Admin key không hợp lệ với thiết bị này.", "error");
    return;
  }
  isAdmin = true;
  sessionStorage.setItem(ADMIN_SESSION_KEY, key);
  showAdminMessage("Đăng nhập Admin thành công. Bạn có thể chỉnh đáp án.", "ok");
  unlockApp("admin");
  updateAdminUI();
}

function adminLogout() {
  isAdmin = false;
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  closeAnswerEditor();
  showAdminMessage("Đã đăng xuất Admin.", "");
  updateAdminUI();
  if (!canUseApp()) showLicenseGate("Đã đăng xuất Admin. Vui lòng nhập key để sử dụng website.", false);
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


function renderTheoryView(list = THEORY_NOTES) {
  const chapterList = $("theoryChapterList");
  const content = $("theoryContent");
  if (!chapterList || !content) return;

  if (!THEORY_NOTES.length) {
    chapterList.innerHTML = "";
    content.innerHTML = `<div class="empty-state">Chưa có dữ liệu lý thuyết.</div>`;
    return;
  }

  const source = list.length ? list : THEORY_NOTES;
  const active = source[state.theoryIndex] || source[0];
  const activeIndex = Math.max(0, source.findIndex(item => item.id === active.id));
  state.theoryIndex = activeIndex;

  chapterList.innerHTML = source.map((item, index) => `
    <button class="theory-chapter ${index === activeIndex ? "active" : ""}" data-index="${index}">
      <strong>${escapeHTML(item.shortTitle || item.title)}</strong>
      <span>${escapeHTML(item.subtitle || "")}</span>
    </button>
  `).join("");

  chapterList.querySelectorAll(".theory-chapter").forEach(btn => {
    btn.addEventListener("click", () => {
      state.theoryIndex = +btn.dataset.index;
      renderTheoryView(source);
    });
  });

  content.innerHTML = renderTheoryContent(active);
  content.querySelector("[data-theory-practice]")?.addEventListener("click", () => startTheoryPractice(active));
}

function renderTheoryContent(item) {
  const badges = (item.badges || []).map(b => `<span>${escapeHTML(b)}</span>`).join("");
  const sections = (item.sections || []).map(section => `
    <section class="theory-section">
      <h4>${escapeHTML(section.title)}</h4>
      <ul>${(section.items || []).map(line => `<li>${formatInlineCode(line)}</li>`).join("")}</ul>
    </section>
  `).join("");
  const examples = (item.examples || []).map(ex => `
    <div class="theory-example">
      <strong>${escapeHTML(ex.title)}</strong>
      <p>${formatInlineCode(ex.body || "")}</p>
    </div>
  `).join("");

  return `
    <div class="theory-hero">
      <p class="eyebrow">${escapeHTML(item.shortTitle || "Lý thuyết")}</p>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.subtitle || "")}</p>
      <div class="theory-badges">${badges}</div>
      <button class="btn primary" type="button" data-theory-practice>Luyện câu chương này</button>
    </div>
    ${sections}
    ${examples ? `<section class="theory-section"><h4>Ví dụ nhanh</h4><div class="theory-examples">${examples}</div></section>` : ""}
  `;
}

function formatInlineCode(text) {
  return escapeHTML(text).replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
}

function searchTheory(keyword) {
  const key = normalizeText(keyword || "");
  if (!key) {
    state.theoryIndex = 0;
    renderTheoryView(THEORY_NOTES);
    return;
  }

  const filtered = THEORY_NOTES.filter(item => {
    const haystack = [
      item.title,
      item.subtitle,
      ...(item.badges || []),
      ...(item.sections || []).flatMap(section => [section.title, ...(section.items || [])]),
      ...(item.examples || []).flatMap(ex => [ex.title, ex.body])
    ].join(" ");
    return normalizeText(haystack).includes(key);
  });

  state.theoryIndex = 0;
  if (!filtered.length) {
    $("theoryChapterList").innerHTML = "";
    $("theoryContent").innerHTML = `<div class="empty-state">Không tìm thấy nội dung lý thuyết phù hợp.</div>`;
    return;
  }
  renderTheoryView(filtered);
}

function startTheoryPractice(item) {
  if (!item?.chapterValue) return;
  showView("setupView");
  const select = $("chapterSelect");
  if (select) {
    select.value = item.chapterValue;
    if (select.value !== item.chapterValue) select.value = "CHAPTER_1_6";
  }
  $("shuffleQuestions").checked = true;
  updateSelectedCount();
}

function normalizeText(text) {
  return String(text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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