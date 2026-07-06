let QUESTIONS = window.QUESTION_BANK || [];
const LICENSE_STORAGE_KEY = "lkq_license_v2_signed";
const DEVICE_STORAGE_KEY = "lkq_device_id_v1";
const ADMIN_SESSION_KEY = "lkq_admin_session_v2";
const ANSWER_CORRECTION_KEY = "tkhts_answer_corrections_v1";
// Chỉ chứa PUBLIC KEY để xác thực chữ ký license. Không chứa mật khẩu admin, private key hoặc thuật toán tạo key.
const PUBLIC_KEY_N = BigInt("0xab4c9775518e19d7f56d6e38a8e6f9c529181ff464964689e46a6babc525daef59ac4039399c8c70dd213d3cc9c71323caf31d9a4d3c0fafbde074f72c09e9231621fc7436bcb6facc80b1265da5d8b955167f4f26ec68167858e06f7fbcb1c5abc1d27482576c6c7baf1e3f52cb225d298d22b9310a8c52011d54a4051f4fd587712b276732b45a95d61865dfd18162c4a81a4d715ed1e35f5ec73e2acff30eeb73ffeabb57db44ce80c1aa1e16427f46f92aa6ee8a82ce737fd0b6513dccbb0957baa6d66b3e2c1293b12bb887a66b6f1a817857c17c09cc15851d74c2b297683c31b527f94a612ed792025b4a878c9e29204647e55e662c8821ab68e1e533");
const PUBLIC_KEY_E = BigInt(65537);
const RSA_KEY_BYTES = 256;
const LICENSE_PRODUCT = "TKHTS-LKQ-24161276";
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

function showFeedback(q) {
  const fb = $("feedbackBox");
  const correct = isCorrect(q);
  const correctOptions = q.options.filter(o => o.correct).map(o => `${o.id}. ${o.text}`);
  fb.className = `feedback ${correct ? "ok" : "no"}`;
  fb.innerHTML = `
    <div>${correct
      ? `Đúng rồi. Đáp án: <b>${escapeHTML(correctOptions.join(" | "))}</b>`
      : `Chưa đúng. Đáp án đúng: <b>${escapeHTML(correctOptions.join(" | "))}</b>`}
    </div>
    ${renderAnswerExplanation(q)}
  `;
  document.querySelectorAll(".option").forEach(el => {
    const optId = el.dataset.optionId;
    const opt = q.options.find(o => o.id === optId);
    el.classList.toggle("correct", !!opt?.correct);
    el.classList.toggle("wrong", (state.answers[q.id] || []).includes(optId) && !opt?.correct);
  });
}


function renderAnswerExplanation(q) {
  const text = getQuestionExplanation(q);
  if (!text) return "";
  return renderExplanationHTML(text);
}

function renderExplanationHTML(text) {
  const raw = String(text || "").trim();
  if (!raw) return "";

  const answerMatch = raw.match(/^Đáp án đúng là\s+([\s\S]*?)(?:\.\s*\n\n|\.\s*Phân tích:|$)/);
  const answerText = answerMatch ? answerMatch[1].trim() : "";

  let analysisText = "";
  let rejectText = "";
  const analysisIndex = raw.indexOf("Phân tích:");
  const rejectIndex = raw.indexOf("Vì sao không chọn các đáp án còn lại:");

  if (analysisIndex >= 0) {
    const start = analysisIndex + "Phân tích:".length;
    const end = rejectIndex >= 0 ? rejectIndex : raw.length;
    analysisText = raw.slice(start, end).trim();
  }

  if (rejectIndex >= 0) {
    rejectText = raw.slice(rejectIndex + "Vì sao không chọn các đáp án còn lại:".length).trim();
  }

  const rejectItems = rejectText
    ? rejectText.split(/\n+/).map(line => line.trim()).filter(Boolean).map(line => {
        const clean = line.replace(/^[-•]\s*/, "");
        const m = clean.match(/^([A-D]\.\s*[^:]+):\s*([\s\S]*)$/);
        if (m) {
          return `<li><strong>${escapeHTML(m[1])}</strong><span>${renderRichExplanationText(m[2])}</span></li>`;
        }
        return `<li><span>${renderRichExplanationText(clean)}</span></li>`;
      }).join("")
    : "";

  const fallback = (!answerText && !analysisText && !rejectItems)
    ? `<div class="explain-section">${renderRichExplanationText(raw)}</div>`
    : "";

  return `
    <div class="answer-explanation">
      <div class="explain-title">Giải thích chi tiết</div>
      ${answerText ? `
        <div class="explain-answer">
          <span class="explain-label">Đáp án đúng</span>
          <strong>${renderInlineExplanation(answerText)}</strong>
        </div>` : ""}
      ${analysisText ? `
        <div class="explain-section">
          <h4>Phân tích</h4>
          ${renderRichExplanationText(analysisText)}
        </div>` : ""}
      ${rejectItems ? `
        <div class="explain-section">
          <h4>Vì sao không chọn các đáp án còn lại?</h4>
          <ul class="explain-list">${rejectItems}</ul>
        </div>` : ""}
      ${fallback}
    </div>
  `;
}

function renderInlineExplanation(text) {
  return escapeHTML(String(text || "")).replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
}

function renderRichExplanationText(text) {
  const src = String(text || "").trim();
  if (!src) return "";
  const parts = [];
  let rest = src;
  const fenceRe = /```(\w+)?\n([\s\S]*?)```/m;
  while (rest) {
    const m = rest.match(fenceRe);
    if (!m) {
      parts.push({ type: "text", value: rest });
      break;
    }
    if (m.index > 0) parts.push({ type: "text", value: rest.slice(0, m.index) });
    parts.push({ type: "code", lang: m[1] || "verilog", value: m[2].trimEnd() });
    rest = rest.slice(m.index + m[0].length);
  }
  return parts.map(part => {
    if (part.type === "code") {
      return `<div class="explain-code-wrap"><div class="explain-code-title">${escapeHTML(part.lang)}</div><pre class="explain-code"><code>${escapeHTML(part.value)}</code></pre></div>`;
    }
    return renderExplanationParagraphs(part.value);
  }).join("");
}

function renderExplanationParagraphs(text) {
  const lines = String(text || "").split(/\n/).map(x => x.trim()).filter(Boolean);
  if (!lines.length) return "";
  const blocks = [];
  let list = [];
  const flushList = () => {
    if (list.length) {
      blocks.push(`<ul class="explain-mini-list">${list.map(item => `<li>${renderInlineExplanation(item)}</li>`).join("")}</ul>`);
      list = [];
    }
  };
  lines.forEach(line => {
    if (/^[-•]\s+/.test(line)) {
      list.push(line.replace(/^[-•]\s+/, ""));
    } else {
      flushList();
      blocks.push(`<p>${renderInlineExplanation(line)}</p>`);
    }
  });
  flushList();
  return blocks.join("");
}


function getQuestionExplanation(q) {
  const correctOptions = q.options.filter(o => o.correct);
  const wrongOptions = q.options.filter(o => !o.correct);
  const correctLabel = correctOptions.map(o => `${o.id}. ${o.text}`).join(" | ");
  let baseExplanation = (q.explanation || "").trim();
  if (/^Cần đọc đoạn code theo thứ tự thực thi/i.test(baseExplanation)) baseExplanation = "";
  if (/^Đáp án đúng là/i.test(baseExplanation)) return baseExplanation;
  const reason = baseExplanation || buildAutoExplanation(q, correctOptions);

  const wrongText = wrongOptions.length
    ? `\n\nVì sao không chọn các đáp án còn lại:\n${wrongOptions.map(o => `- ${o.id}. ${o.text}: ${buildWrongOptionReason(q, o, correctOptions)}`).join("\n")}`
    : "";

  return `Đáp án đúng là ${correctLabel}.\n\nPhân tích: ${reason}${wrongText}`;
}

function optionText(correctOptions) {
  return correctOptions.map(o => `${o.id}. ${o.text}`).join(" | ");
}

function includesAny(text, keys) {
  return keys.some(k => text.includes(k));
}

function textOfQuestion(q) {
  return normalize([q.question, q.chapter, q.section, ...(q.codeBlocks || []).map(b => b.code || ""), ...(q.options || []).map(o => o.text || "")].join(" "));
}

function buildAutoExplanation(q, correctOptions) {
  const cid = q.id;
  const qText = textOfQuestion(q);
  const correctText = correctOptions.map(o => o.text).join("; ");
  const correctNorm = normalize(correctText);
  const code = ((q.codeBlocks || [])[0]?.code || "");
  const hasCode = (q.codeBlocks || []).length > 0;
  const hasImage = (q.images || []).length > 0 || q.image;

  const direct = specificExplanation(q, correctOptions);
  if (direct) return direct;

  // Chương 1 - quy trình thiết kế ASIC/FPGA, lịch sử IC, phân loại mức tích hợp.
  if (qText.includes("qua trinh thiet ke") && includesAny(qText, ["asis", "asic", "fgpa", "fpga"]) && qText.includes("bao nhieu tang")) {
    return "Flow thiết kế ASIC/FPGA trong phần mở đầu được chia thành 7 tầng: viết HDL/testbench/thông số, mô phỏng, tổng hợp, floorplan/placement ban đầu, place & route, phân tích thời gian/điều chỉnh bố cục, kiểm tra logic và tapeout. Vì câu hỏi hỏi tổng số tầng nên chọn 7.";
  }
  if (qText.includes("front") && qText.includes("bao nhieu tang")) {
    return "Front-End là phần việc của người thiết kế: mô tả phần cứng bằng HDL, mô phỏng/kiểm chứng chức năng và tổng hợp logic. Ba việc này tương ứng 3 tầng đầu của flow, nên đáp án là 3.";
  }
  if (qText.includes("back") && qText.includes("bao nhieu tang")) {
    return "Back-End là phần việc đưa thiết kế đã tổng hợp sang bố cục vật lý: placement/floorplan, routing, phân tích thời gian sau bố cục và kiểm tra/tapeout. Phần này chiếm 4 tầng còn lại của flow, nên đáp án là 4.";
  }
  if (qText.includes("tang thu nhat") && qText.includes("nhiem vu")) return "Tầng 1 là bước tạo mô tả thiết kế ban đầu: viết chương trình hệ thống/HDL, testbench mô phỏng và các thông số cần dùng. Vì vậy đáp án đúng là phần mô tả việc viết chương trình và thông số.";
  if (qText.includes("tang thu hai") && qText.includes("nhiem vu")) return "Sau khi có mô tả HDL/testbench, bước tiếp theo là chạy mô phỏng để kiểm tra chức năng và đánh giá thiết kế. Do đó tầng 2 là mô phỏng và đánh giá.";
  if (qText.includes("tang thu ba") && qText.includes("nhiem vu")) return "Tầng 3 là tổng hợp: công cụ chuyển mô tả HDL cùng ràng buộc thời gian thành cấu trúc logic/netlist và gắn với thư viện phần tử. Vì vậy đáp án liên quan đến tổng hợp chương trình/ràng buộc/vị trí ô là đúng.";
  if (qText.includes("tang thu tu") && qText.includes("nhiem vu")) return "Tầng 4 bắt đầu phần Back-End: xác định bố cục ban đầu trước khi phân tích sâu các yếu tố thời gian. Đây là bước floorplan/placement sơ bộ, chưa phải routing hay kiểm tra logic cuối.";
  if (qText.includes("tang thu nam") && qText.includes("nhiem vu")) return "Sau bố cục ban đầu, công cụ thực hiện place & route, tức sắp xếp và đi dây các kết nối trong thiết kế. Vì vậy tầng 5 là đi dây tự động cho hệ thống.";
  if (qText.includes("tang thu sau") && qText.includes("nhiem vu")) return "Tầng 6 dùng kết quả đi dây để phân tích thời gian sau bố cục; nếu chưa đạt timing thì cần điều chỉnh lại bố cục. Do đó đáp án nói về xác định bố cục cuối cùng sau phân tích thời gian là đúng.";
  if (qText.includes("tang thu bay") && qText.includes("nhiem vu")) return "Tầng cuối là kiểm tra hoạt động logic và tạo kết quả cuối để tapeout. Ở bước này thiết kế đã qua mô phỏng, tổng hợp, layout/timing nên nhiệm vụ chính là xác nhận logic cuối cùng.";
  if (qText.includes("front") && qText.includes("cong viec")) return "Front-End gồm các công việc ở mức mô tả và kiểm chứng logic: viết chương trình mô tả phần cứng, mô phỏng và tổng hợp. Vì cả ba mục đều thuộc Front-End nên đáp án gộp cả ba là đúng.";
  if (qText.includes("back") && qText.includes("cong viec")) return "Back-End gồm sắp xếp bố cục/đi dây và phân tích thời gian/kiểm tra sau bố cục. Vì cả hai nhóm A và B đều là công việc Back-End, lựa chọn phủ định phương án C là lựa chọn đúng trong đề.";
  if (qText.includes("tapeout")) return "Tapeout là kết quả cuối của quá trình thiết kế IC/PCB trước khi gửi đi chế tạo. Nó không phải file luật thiết kế hay chỉ là kết quả chú thích mô phỏng; nó là gói dữ liệu cuối để sản xuất.";
  if (qText.includes("mach roi rac") && qText.includes("han che")) return "Mạch rời rạc thường chiếm diện tích lớn, tiêu thụ điện năng cao, tốc độ chỉ ở mức vừa phải và bị giới hạn ứng dụng so với IC. Do đó nếu đề dùng phương án phủ định 'phương án C sai' thì nó tương đương với việc A và B đều là hạn chế đúng.";
  if (qText.includes("mach tich hop") && qText.includes("uu diem")) return "Mạch tích hợp có nhiều ưu điểm so với mạch rời rạc: diện tích nhỏ, tốc độ cao, tiêu thụ nguồn thấp và ứng dụng rộng hơn. Vì cả A và B đều nêu ưu điểm đúng nên đáp án gộp cả hai là đúng.";
  if (qText.includes("bong ban dan dau tien")) return "Cột mốc transistor đầu tiên thường được ghi nhận năm 1947, mở đầu kỷ nguyên transistor. Các năm khác không phải mốc ra đời transistor đầu tiên.";
  if (qText.includes("tiep giap dau tien")) return "Bóng bán dẫn tiếp giáp được sản xuất hàng loạt vào khoảng năm 1951. Các năm 1940, 1945, 1947 không đúng với mốc sản xuất hàng loạt của transistor tiếp giáp.";
  if (qText.includes("moore")) return "Định luật Moore mô tả xu hướng mật độ/số lượng transistor tăng nhanh theo thời gian, thường được diễn giải là số transistor tăng gấp đôi sau khoảng 18 tháng đến 2 năm. Trong bộ đáp án của đề, lựa chọn đúng là phát biểu gộp theo cách thầy đã đưa trong ngân hàng câu hỏi.";
  if (qText.includes("ssi") || qText.includes("msi") || qText.includes("lsi") || qText.includes("vlsi")) return `Câu này kiểm tra mức độ tích hợp IC theo số transistor. Đáp án đúng là ${correctText} vì nó khớp mức tích hợp được nêu trong bảng phân loại của đề; các số còn lại thuộc mức tích hợp khác.`;
  if (qText.includes("san xuat ic") || qText.includes("silic")) return "Quy trình sản xuất IC đi từ vật liệu silicon, tạo silicon wafer, tạo mẫu mạch trên wafer, tách die chưa đóng gói, đóng gói die rồi kiểm tra. Đáp án đúng giữ đúng thứ tự công nghệ đó.";

  // Chương 2 - PLD/ASIC/FPGA.
  if (qText.includes("ic so") && qText.includes("nen tang")) return "Digital IC trong chương PLD được chia thành hai hướng chính: các thiết bị logic lập trình được (PLD) và mạch tích hợp chuyên dụng (ASIC). Vì vậy đáp án đúng là PLDs và ASIC.";
  if (qText.includes("fpga") && qText.includes("thuoc nen tang")) return "FPGA là Field Programmable Gate Array, thuộc nhóm PLD vì người dùng có thể lập trình cấu trúc logic sau khi chế tạo. ASIC thì cố định theo ứng dụng, còn SPLD chỉ là một nhánh nhỏ hơn trong PLD.";
  if (qText.includes("pld viet tat")) return "PLD viết đầy đủ là Programmable Logic Device(s): thiết bị logic lập trình được. Các lựa chọn khác không phải thuật ngữ chuẩn hoặc viết sai chính tả.";
  if (qText.includes("asic viet tat")) return "ASIC là Application-Specific Integrated Circuit, tức mạch tích hợp chuyên dụng cho một ứng dụng cụ thể. Các phương án khác không đúng thuật ngữ chuyên ngành.";
  if (qText.includes("fgpa viet tat") || qText.includes("fpga viet tat")) return "FPGA viết đúng là Field Programmable Gate Array. Đây là mảng cổng logic có thể lập trình ngoài hiện trường; các phương án khác chỉ là cụm từ sai hoặc không tồn tại.";
  if (qText.includes("nen tang cac thiet bi lap trinh duoc pld")) return "PLD gồm SPLD, CPLD và FPGA. SPLD là loại đơn giản, CPLD phức tạp hơn, còn FPGA có cấu trúc mảng logic/routing lập trình được lớn hơn.";
  if (qText.includes("nen tang cac mach tich hop voi mot ung dung cu the")) return "ASIC là mạch tích hợp cho ứng dụng cụ thể, gồm hai hướng chính: Semi-Custom và Full-Custom. Các nhóm SPLD/CPLD/FPGA thuộc PLD nên không phải câu trả lời cho ASIC.";
  if (qText.includes("uu diem") && qText.includes("fpga")) return "Ưu điểm FPGA là lập trình nhanh, dễ thử nghiệm, rẻ khi số lượng nhỏ, rủi ro tài chính thấp và có thể sửa thiết kế. Vì vậy các ý về giá rẻ số lượng nhỏ và rủi ro thấp đều đúng.";
  if (qText.includes("nhuoc diem") && qText.includes("fpga")) return "Nhược điểm FPGA so với ASIC là chậm hơn, tiêu thụ điện/diện tích lớn hơn và dùng nhiều transistor hơn cho mỗi chức năng logic. Do cả ba nhận định đều không sai, đáp án tổng hợp là đúng.";
  if (qText.includes("uu diem") && qText.includes("asic")) return "ASIC có ưu điểm nhanh hơn, tiêu thụ điện thấp hơn, dùng ít transistor hơn và rẻ khi sản xuất số lượng lớn. Vì vậy phương án gộp các ưu điểm này là đúng.";
  if (qText.includes("nhuoc diem") && qText.includes("asic")) return "ASIC bị cố định theo thiết kế, thời gian chế tạo dài và chi phí công cụ/mask/NRE cao. Vì cả ba ý đều là nhược điểm nên phương án gộp là đúng.";
  if (qText.includes("dac trung") && qText.includes("asic")) return "Đặc trưng ASIC là hiệu suất cao, công suất thấp và chi phí trên chip rẻ khi sản xuất khối lượng lớn. Những đặc điểm như lập trình lại nhanh hoặc rẻ ở số lượng nhỏ là của FPGA hơn là ASIC.";
  if (qText.includes("dac trung") && qText.includes("fpga")) return "Đặc trưng FPGA là lập trình lại được, thời gian thử nghiệm nhanh, chi phí ban đầu thấp và phù hợp nguyên mẫu/số lượng nhỏ. Những đặc điểm như tối ưu diện tích/công suất tuyệt đối lại nghiêng về ASIC.";
  if (qText.includes("sop")) return "Dạng Sum of Products lấy các minterm ứng với các hàng có F=1 rồi OR các tích lại. Đáp án đúng là biểu thức có các tích tương ứng đúng với những tổ hợp đầu vào tạo ngõ ra 1.";
  if (qText.includes("pos")) return "Dạng Product of Sums lấy các maxterm ứng với các hàng có F=0 rồi AND các tổng lại. Đáp án đúng là biểu thức POS khớp các hàng F=0 của bảng chân trị.";
  if (qText.includes("pal") || qText.includes("gal") || qText.includes("pla") || qText.includes("cpld")) return `Đáp án ${correctText} đúng vì nó khớp cấu trúc/thuật ngữ PLD được hỏi: PAL/PLA/SPLD/CPLD khác nhau ở mảng AND/OR lập trình được, độ phức tạp và công nghệ lưu cấu hình.`;

  // Chương 3 - Verilog.
  if (qText.includes("verilog") && qText.includes("la gi")) return "Verilog là ngôn ngữ mô tả phần cứng (HDL), dùng để mô tả, mô phỏng và tổng hợp mạch số. Nó không phải ngôn ngữ lập trình phần mềm thông thường.";
  if (qText.includes("nguoi phat trien verilog")) return "Verilog ban đầu do Phil Moorby phát triển tại Gateway Design Automation. Các tên khác không phải người khởi tạo Verilog theo lịch sử HDL.";
  if (qText.includes("module") && includesAny(qText, ["co dang", "cu phap", "khai bao", "thieu", "sai", "ten module"])) {
    return "Trong Verilog, `module` là khối thiết kế cơ bản. Cú pháp chuẩn phải là `module ten_module (danh_sach_cong); ... endmodule`. Tên module đứng ngay sau từ khóa `module`; danh sách cổng đặt trong ngoặc; các khai báo/kết nối bên trong phải đúng cú pháp.";
  }
  if (qText.includes("instance") || qText.includes("noi day giua cac module")) return "Khi dùng lại một module con, Verilog tạo instance. Có thể nối port theo thứ tự hoặc nối theo tên. Nối theo tên rõ ràng hơn vì `.port(signal)` tránh nhầm thứ tự cổng.";
  if (qText.includes("dinh danh")) return "Định danh người dùng trong Verilog dùng để đặt tên module, tín hiệu, instance... Tên hợp lệ không được bắt đầu bằng số, không chứa ký tự đặc biệt không cho phép và không trùng từ khóa hệ thống.";
  if (qText.includes("chu thich") || qText.includes("comment")) return "Verilog có chú thích một dòng bằng `//` và chú thích nhiều dòng bằng `/* ... */`. Chú thích nhiều dòng không được lồng nhau; nếu lồng comment, trình biên dịch sẽ hiểu sai vị trí kết thúc comment.";
  if (qText.includes("wire") || qText.includes("reg") || qText.includes("net")) return "`wire` là net dùng cho kết nối mạch hoặc continuous assignment. `reg` là biến lưu giá trị trong khối thủ tục `always/initial`; tên `reg` không nhất thiết luôn tổng hợp thành thanh ghi, mà tùy cách mô tả logic.";
  if (qText.includes("vector") || qText.includes("array") || qText.includes("bus") || qText.includes("string")) return "Vector là một tín hiệu nhiều bit như `[7:0]`, còn array là nhiều phần tử được đánh chỉ số. Chuỗi trong Verilog thường được lưu trong biến `reg` nhiều bit, mỗi ký tự ASCII chiếm 8 bit.";
  if (qText.includes("so nhi phan") || qText.includes("he 2") || qText.includes("he 16") || qText.includes("number") || qText.includes("'b") || qText.includes("'h")) return "Số Verilog có dạng `<độ_rộng>'<cơ_số><giá_trị>`, ví dụ `4'b1010` là số 4 bit hệ nhị phân. Nếu không ghi đúng độ rộng/cơ số hoặc dùng ký tự không hợp lệ thì giá trị sẽ sai.";
  if (qText.includes("toan tu logic")) return "Toán tử logic như `&&`, `||`, `!` xét toàn bộ biểu thức theo đúng/sai và thường cho kết quả 1 bit. Nó khác bitwise vì không xử lý từng bit độc lập.";
  if (qText.includes("toan tu bit") || qText.includes("bitwise")) return "Toán tử bitwise như `&`, `|`, `^`, `~` tác động từng bit của toán hạng. Vì vậy với vector nhiều bit, kết quả được tính bit tương ứng với bit.";
  if (qText.includes("conditional") || qText.includes("?:")) return "Toán tử điều kiện `condition ? value1 : value2` chọn `value1` khi điều kiện đúng và chọn `value2` khi điều kiện sai, thường dùng mô tả MUX.";
  if (qText.includes("assign") || qText.includes("continuous")) return "`assign` là gán liên tục: vế trái luôn được cập nhật theo vế phải khi các tín hiệu liên quan thay đổi. Vì vậy nó phù hợp mô tả logic tổ hợp dạng biểu thức.";
  if (qText.includes("initial")) return "Khối `initial` chạy một lần từ thời điểm mô phỏng 0, thường dùng trong testbench để khởi tạo tín hiệu, tạo kích thích và kết thúc mô phỏng. Nó không chạy lặp mãi như `always`.";
  if (qText.includes("always")) return "Khối `always` là khối thủ tục chạy lại mỗi khi điều kiện trong sensitivity list xảy ra, hoặc chạy lặp để tạo clock/testbench. Trong logic tổ hợp cần liệt kê đủ tín hiệu nhạy hoặc dùng `always @*`; trong logic tuần tự thường dùng cạnh clock.";
  if (qText.includes("blocking") || qText.includes("non-blocking") || qText.includes("nonblocking")) return "Blocking `=` thực hiện tuần tự: câu sau dùng giá trị đã gán ở câu trước. Non-blocking `<=` lấy giá trị vế phải trước rồi cập nhật đồng thời ở cuối bước thời gian, nên phù hợp mô tả flip-flop/thanh ghi.";
  if (hasCode && includesAny(qText, ["forever", "repeat", "finish", "#75", "clk"])) return "Cần lần theo dòng lệnh mô phỏng: `#` tạo trễ, `repeat(n)` lặp hữu hạn, `$finish` dừng mô phỏng, còn `forever` lặp vô hạn nếu không có lệnh dừng bên trong. Nếu `forever` đứng trước các lệnh sau trong cùng luồng, các lệnh sau có thể không bao giờ được thực thi.";
  if (hasCode) return `Cần đọc code theo thứ tự: khai báo module/port, kiểu dữ liệu, toán tử, khối thủ tục và giá trị gán. Khi áp dụng đúng cú pháp và hành vi Verilog, kết luận phù hợp với đáp án ${correctText}.`;

  // Chương 4 - mạch tổ hợp.
  if (qText.includes("mux") || qText.includes("multiplexer") || qText.includes("bo chon kenh")) return "MUX có nhiều ngõ vào dữ liệu, một ngõ ra và tín hiệu chọn. Giá trị của tín hiệu chọn quyết định ngõ vào nào được đưa ra output.";
  if (qText.includes("demux") || qText.includes("demultiplexer") || qText.includes("phan kenh")) return "DEMUX có một ngõ vào dữ liệu, nhiều ngõ ra và tín hiệu chọn. Dữ liệu vào được đưa tới đúng một ngõ ra tùy mã chọn.";
  if (qText.includes("encoder")) return "Encoder mã hóa nhiều đường vào dạng one-hot hoặc ưu tiên thành mã nhị phân ít bit hơn. Nếu 4 ngõ vào thành 2 bit ra thì đó là encoder 4-to-2.";
  if (qText.includes("decoder")) return "Decoder giải mã mã nhị phân ít bit thành nhiều ngõ ra one-hot. Nếu 2 bit vào tạo 4 đường ra thì đó là decoder 2-to-4.";
  if (qText.includes("half") || qText.includes("bo cong ban")) return "Half adder có hai ngõ vào và tạo tổng `S = A xor B`, nhớ `C = A and B`. Nó không có ngõ vào carry-in.";
  if (qText.includes("full") || qText.includes("bo cong toan")) return "Full adder có ba ngõ vào A, B, Cin; tổng là XOR ba biến và carry-out bằng tổng các tích đôi. Vì có carry-in nên khác half adder.";
  if (hasImage && includesAny(qText, ["mach to hop", "so do", "mach dien nao"])) return "Mạch tổ hợp được nhận dạng bằng quan hệ ngõ vào/ngõ ra hiện tại, không có phần tử nhớ. Nếu hình có đường chọn thì xét MUX/DEMUX; nếu đổi số bit vào/ra thì xét Encoder/Decoder; nếu là cổng logic thì đọc theo ký hiệu AND/OR/NOT/XOR.";

  // Chương 5 - latch/flip-flop/thanh ghi.
  if (qText.includes("latch") || qText.includes("mach chot") || qText.includes("chot")) return "Latch là phần tử nhớ tác động theo mức: khi tín hiệu cho phép/clock ở mức tác động, ngõ ra có thể thay đổi theo ngõ vào; khi không cho phép, nó giữ trạng thái cũ. Đó là điểm khác flip-flop.";
  if (qText.includes("flip flop") || qText.includes("flip-flop")) return "Flip-flop là phần tử nhớ tác động theo cạnh clock. Nó chỉ cập nhật trạng thái ở cạnh lên hoặc cạnh xuống nên ổn định hơn trong mạch tuần tự đồng bộ so với latch mức.";
  if (qText.includes("sr") || qText.includes("rs")) return "SR/RS latch có hai tín hiệu Set và Reset cùng hồi tiếp chéo. Khi Set tác động thì Q được đặt 1, khi Reset tác động thì Q về 0; trường hợp cùng tác động có thể bị cấm/không xác định tùy cấu trúc.";
  if (qText.includes("d latch")) return "D latch lấy một dữ liệu D và tín hiệu enable/clock mức. Khi enable tác động, Q theo D; khi enable không tác động, Q giữ giá trị trước.";
  if (qText.includes("d flip")) return "D flip-flop lấy mẫu D tại cạnh clock và đưa ra Q. Vì cập nhật theo cạnh, nó dùng phổ biến làm thanh ghi trong mạch tuần tự đồng bộ.";
  if (qText.includes("jk")) return "JK flip-flop có hai ngõ J,K; 00 giữ, 01 reset, 10 set, 11 đảo trạng thái. Vì trạng thái 11 toggle nên JK khắc phục trạng thái cấm của SR.";
  if (qText.includes("t flip") || qText.includes("toggle")) return "T flip-flop giữ trạng thái khi T=0 và đảo trạng thái khi T=1 tại cạnh clock. Vì vậy nó thường dùng tạo bộ đếm hoặc chia tần.";
  if (qText.includes("thanh ghi") || qText.includes("shift") || qText.includes("siso") || qText.includes("sipo")) return "Thanh ghi là tập hợp nhiều flip-flop dùng chung clock. Thanh ghi dịch chuyển dữ liệu qua từng tầng theo mỗi xung clock; kiểu vào/ra nối tiếp hay song song phụ thuộc cách lấy dữ liệu.";

  // Chương 6 - mạch tuần tự đồng bộ.
  if (qText.includes("mach tuan tu dong bo") || qText.includes("synchronous")) return "Mạch tuần tự đồng bộ dùng clock chung để điều khiển phần tử nhớ. Ngõ ra phụ thuộc cả ngõ vào hiện tại và trạng thái đã lưu trước đó, khác mạch tổ hợp chỉ phụ thuộc ngõ vào hiện tại.";
  if (qText.includes("state register") || qText.includes("next-state") || qText.includes("output logic")) return "Mạch tuần tự đồng bộ thường tách thành thanh ghi trạng thái, logic trạng thái kế tiếp và logic ngõ ra. Thanh ghi lưu trạng thái ở cạnh clock, logic tổ hợp tính trạng thái kế tiếp/ngõ ra.";
  if (qText.includes("counter") || qText.includes("bo dem")) return "Bộ đếm đồng bộ dùng các flip-flop cập nhật cùng cạnh clock. Giá trị kế tiếp thường bằng trạng thái hiện tại cộng/trừ 1 hoặc theo hàm trạng thái kế tiếp đã thiết kế.";
  if (qText.includes("blocking") || qText.includes("non-blocking") || qText.includes("nonblocking")) return "Trong thiết kế tuần tự, non-blocking `<=` giúp các thanh ghi cập nhật song song tại cạnh clock. Blocking `=` phù hợp hơn cho logic tổ hợp trong `always @*` vì nó giữ đúng dòng chảy tính toán tuần tự.";

  // Chương 8/VLSI - kiến thức CMOS cơ bản.
  if (includesAny(qText, ["nmos", "pmos", "cmos", "not", "nand", "nor", "transmission", "pass transistor", "mux", "logic gate"])) {
    return `Câu này nhận dạng mạch CMOS/VLSI. NMOS dẫn tốt mức 0 khi gate ở 1, PMOS dẫn tốt mức 1 khi gate ở 0; cổng NOT/NAND/NOR được nhận dạng bằng mạng kéo lên PMOS và kéo xuống NMOS. Đặc điểm mạch trong câu khớp với đáp án ${correctText}.`;
  }

  // Fallback: giải thích trực tiếp theo cách học, không ghi chung chung "dựa vào chương".
  if (hasImage) return `Cách làm là đọc hình theo dấu hiệu chức năng: số ngõ vào/ngõ ra, có tín hiệu chọn hay không, có hồi tiếp giữ trạng thái hay không, và cập nhật theo mức hay theo cạnh clock. Lựa chọn đúng phải khớp các dấu hiệu đó. Trong câu này, dấu hiệu của hình khớp với ${correctText}.`;
  if (includesAny(qText, ["bao nhieu", "may", "so luong", "nam nao"])) return `Đây là câu hỏi kiểm tra giá trị hoặc mốc kiến thức. Khi gặp dạng này cần xác định đại lượng đang hỏi rồi đối chiếu đúng đơn vị: số tầng, số ngõ vào/ngõ ra, số bit, tần số hoặc mốc năm. Giá trị ${correctText} là giá trị khớp yêu cầu câu hỏi; các giá trị khác bị lệch về số lượng, đơn vị hoặc mốc phân loại.`;
  return `Câu hỏi đang kiểm tra một định nghĩa hoặc quy tắc cụ thể. Đáp án ${correctText} đúng vì khớp đúng từ khóa chính trong đề. Các lựa chọn còn lại thường sai do nhầm sang khái niệm gần giống, nhầm tên gọi, hoặc chỉ đúng một phần nhưng không trả lời chính xác điều được hỏi.`;
}


function richSpecificExplanation(q, correctOptions) {
  const id = q.id;
  const map = {
    main_246: "Dòng (3) viết `output co, s` nhưng thiếu dấu chấm phẩy kết thúc câu lệnh. Trong Verilog, các khai báo như `input`, `output`, `wire`, `reg` đều là statement nên phải kết thúc bằng `;`. Dòng đúng phải là:\n```verilog\noutput co, s;\n```\nDòng (2) chỉ khai báo input nên đúng. Dòng (4) là phép gán liên tục hợp lệ. Dòng (5) tuy biểu thức carry có vấn đề về biến dùng trong công thức, nhưng lựa chọn của câu này đang hỏi trong các dòng 2–5 thì lỗi cú pháp rõ nhất là dòng 3 thiếu `;`.",
    main_248: "Dòng (9) khai báo `input [3:-1] B;`. Với một vector 4 bit thông thường, chỉ số phải là `[3:0]`, tương ứng các bit B[3], B[2], B[1], B[0]. Viết `[3:-1]` làm dải chỉ số đi xuống tới -1, tạo vector 5 vị trí và không khớp với cách truy cập B[0] đến B[3] trong các dòng instance phía dưới. Sửa nên là:\n```verilog\ninput [3:0] B;\n```\nDòng (8) `input wire [3:0] A;` hợp lệ. Dòng (11) `wire c1, c2, c3;` hợp lệ. Dòng (12) là một instance theo tên cổng, về hình thức kết nối là đúng.",
    main_249: "Dòng (10) viết `output reg [4:0] S;` trong khi `S` được nối trực tiếp với ngõ ra của các module con `F_ADDER` tại các dòng instance. Tín hiệu được module con hoặc continuous assignment lái nên phải là net, thường khai báo là `wire`, không phải `reg`. Cách sửa:\n```verilog\noutput wire [4:0] S;\n```\nDòng (11) khai báo các dây carry trung gian là đúng. Dòng (12), (13) là kết nối instance theo tên cổng nên không phải lỗi chính của câu này.",
    main_250: "Dòng (15) dùng `ADDER_4B` làm tên instance:\n```verilog\nF_ADDER ADDER_4B(...);\n```\nTrong khi `ADDER_4B` cũng là tên module cha ở dòng (7). Cú pháp instance là `<tên_module_con> <tên_instance>(...)`; tên instance nên là tên riêng như `fad3`, không nên trùng tên module tổng thể vì gây nhầm định danh và không đúng cách đặt instance. Cách sửa:\n```verilog\nF_ADDER fad3(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n```\nCác dòng 12, 13, 14 đều là các instance của `F_ADDER` với tên riêng `fad0`, `fad1`, `fad2` nên không sai theo lỗi mà câu hỏi nhắm tới.",
    main_251: "Dòng (16) viết `Endmodule` với chữ E in hoa. Verilog phân biệt chữ hoa/thường, nên từ khóa kết thúc module phải viết đúng là `endmodule`. Vì vậy lỗi nằm ở từ khóa dòng 16. Cách sửa:\n```verilog\nendmodule\n```\nDòng (2) khai báo input hợp lệ. Dòng (8) khai báo input wire vector hợp lệ. Dòng (12) là instance theo tên cổng nên không phải lỗi dòng này.",
    main_252: "Dòng (10) sai ở kiểu biến: `S` là output của module tổng thể nhưng lại được các module con `F_ADDER` lái qua các cổng `.s(S[0])`, `.co(S[4])`. Trong mô tả cấu trúc, tín hiệu nối giữa các module phải là net/wire. `reg` chỉ dùng khi tín hiệu được gán trong khối thủ tục như `always` hoặc `initial`. Vì vậy lỗi là kiểu biến. Sửa:\n```verilog\noutput wire [4:0] S;\n```",
    main_253: "Dòng (16) sai ở từ khóa. Verilog yêu cầu từ khóa kết thúc module là `endmodule` viết thường toàn bộ. `Endmodule` không được hiểu là từ khóa vì Verilog phân biệt hoa/thường. Đây không phải lỗi biến trùng lặp hay lỗi ngữ nghĩa mạch, mà là viết sai từ khóa.",
    main_254: "Dòng (15) sai ở tên định danh instance. Câu lệnh instance có dạng:\n```verilog\nF_ADDER ten_instance(...);\n```\nỞ đây lại đặt tên instance là `ADDER_4B`, trùng với tên module cha. Tên instance cần là một định danh riêng để chỉ phần tử con cụ thể, ví dụ `fad3`. Do đó lỗi phù hợp nhất là tên định danh, không phải từ khóa hay cú pháp dấu câu.",
    main_260: "Module có hai ngõ vào điều khiển trạng thái là `S` và `R`, thêm tín hiệu cho phép `CLK`. Trong `always @(R, S, CLK)`, mạch phản ứng theo mức của các tín hiệu, không đợi cạnh `posedge` hay `negedge`. Khi `CLK=1, S=1, R=0` thì Q được set lên 1; khi `CLK=1, S=0, R=1` thì Q reset về 0. Đây đúng là chốt SR có clock/enable.\n\nKhông phải flip-flop vì flip-flop phải cập nhật theo cạnh clock. Không phải chốt D vì chốt D chỉ có một đường dữ liệu D, còn mạch này có hai đường S và R.",
    main_262: "Điểm quyết định là dòng:\n```verilog\nalways @(clk, D)\n  if (clk) q = D;\n```\nQ nhận D khi `clk` đang ở mức 1. Nghĩa là trong suốt thời gian clock ở mức cho phép, D thay đổi thì Q cũng có thể đổi theo. Đây là chốt D tác động theo mức.\n\nNếu là D Flip-Flop thì phải có `always @(posedge clk)` hoặc `always @(negedge clk)`, tức chỉ lấy mẫu tại cạnh clock. Không phải chốt SR vì không có hai input S/R. Không phải JK vì không có J/K và không có chế độ toggle.",
    main_263: "Dòng quan trọng là:\n```verilog\nalways @(posedge clk) begin\n  q = D;\nend\n```\n`posedge clk` nghĩa là Q chỉ nhận giá trị D tại cạnh lên của clock. Phần lý thuyết phân biệt rõ: latch tác động theo mức, còn flip-flop tác động theo cạnh. Vì vậy đây là D Flip-Flop.\n\nKhông chọn chốt D vì chốt D dùng điều kiện mức `if(clk)`. Không chọn chốt SR hoặc JK vì code không có cặp tín hiệu S/R hoặc J/K.",
    main_264: "Trong mỗi cạnh lên `posedge CLK`, nếu `T == 1` thì:\n```verilog\nQ  = ~Q;\nQB = ~QB;\n```\nTín hiệu Q đảo trạng thái ở mỗi cạnh clock khi T=1. Chức năng đảo/toggle này chính là đặc trưng của T Flip-Flop.\n\nKhông phải mạch chốt vì mạch chốt tác động theo mức. Không phải D Flip-Flop vì D-FF nhận dữ liệu D trực tiếp, không tự đảo Q. Không phải chốt T vì code dùng cạnh clock `posedge`.",
    main_265: "Mạch gồm 4 D Flip-Flop mắc nối tiếp. Đường dữ liệu đi theo chuỗi:\n```verilog\nin -> q1 -> q2 -> q3 -> out\n```\nMỗi cạnh lên của `clk`, dữ liệu được chốt qua một tầng DFF. Sau 4 xung, bit đưa vào ở `in` sẽ đi ra ở `out`. Vì chỉ có một input nối tiếp `in` và một output nối tiếp `out`, đây là thanh ghi dịch 4 bit SISO: Serial In – Serial Out.\n\nLưu ý nhỏ: code trong đề có lỗi hoa/thường ở cổng D. Module khai báo cổng là `D`:\n```verilog\nmodule DFF(clk, D, q);\n```\nnhưng instance lại gọi `.d(in)`. Verilog phân biệt chữ hoa/thường, nên để biên dịch đúng cần sửa thành:\n```verilog\nDFF dff1(.clk(clk), .D(in), .q(q1));\n```\nhoặc đổi tên cổng trong module từ `D` thành `d`. Tuy vậy, về ý tưởng mạch mà câu hỏi muốn nhận dạng thì vẫn là thanh ghi dịch SISO 4 bit.",
    main_266: "Mạch cũng dùng 4 DFF nối tiếp, dữ liệu đi từ `in` sang `q[0]`, rồi `q[1]`, `q[2]`, `q[3]` qua từng cạnh clock:\n```verilog\nin -> q[0] -> q[1] -> q[2] -> q[3]\n```\nĐiểm khác với SISO là output của module là toàn bộ vector `q[3:0]`, nghĩa là người học có thể quan sát đồng thời cả 4 trạng thái lưu trong thanh ghi. Vì vào một bit nối tiếp nhưng ra 4 bit song song, đây là thanh ghi dịch 4 bit vào nối tiếp ra song song.",
    main_267: "Biến `count` là thanh ghi 4 bit nên đây là bộ đếm 4 bit. Khi `rst == 1`, count reset về `0000`. Khi `sp == 1`, mạch mới cho phép đếm. Tín hiệu `ud` quyết định chiều đếm: nếu `ud == 1` thì `count = count + 1`; ngược lại `count = count - 1`. Vì có tín hiệu điều khiển chiều lên/xuống nên đáp án là mạch đếm lên xuống 4 bit có điều khiển.\n\nKhông phải chỉ đếm lên hoặc chỉ đếm xuống vì code có cả hai nhánh `+1` và `-1`. Không phải tự động vì chiều đếm phụ thuộc input `ud`.",
    main_268: "Ba T Flip-Flop đều có `T=1`, nên mỗi tầng sẽ đảo trạng thái khi nhận cạnh clock. Tầng đầu nhận clock ngoài `clk`; tầng sau không nhận cùng clock ngoài mà nhận clock từ ngõ ra đảo của tầng trước (`qb1`, `qb2`). Vì clock truyền gợn từ tầng này sang tầng sau nên đây là bộ đếm không đồng bộ/ripple counter. Với 3 ngõ ra `q[2:0]`, mạch là bộ đếm 3 bit. Cách nối này tạo chiều đếm lên theo đáp án của đề.",
    main_270: "Ban đầu reset làm `led = 1000_0000`, tức chỉ LED bên trái sáng. Mỗi xung clock, nếu chưa về 0 thì `led = led >> 1`, bit 1 dịch dần sang phải:\n```verilog\n1000_0000 -> 0100_0000 -> 0010_0000 -> ... -> 0000_0001\n```\nSau khi dịch hết về 0, code nạp lại `1000_0000`. Vì chỉ có một điểm sáng chạy từ trái sang phải nên đây là sáng dịch từ trái sang phải, không phải sáng dần hay sáng dồn.",
    main_271: "Reset nạp `led = 1000_0001`, tức hai LED ngoài cùng sáng. Sau đó nửa thấp `led[3:0]` dịch trái, nửa cao `led[7:4]` dịch phải. Hai điểm sáng vì vậy đi từ hai mép ngoài vào giữa. Mẫu đặc trưng là:\n```verilog\n1000_0001 -> 0100_0010 -> 0010_0100 -> 0001_1000\n```\nVì chỉ có các điểm sáng dịch vị trí, không tích lũy thêm bit sáng, nên là sáng dịch từ ngoài vào trong.",
    main_272: "Reset nạp `1000_0000`. Mỗi xung clock, code vừa dịch phải vừa cộng thêm `1000_0000`:\n```verilog\nled = (led >> 1) + 8'b1000_0000;\n```\nDo luôn thêm lại bit trái cùng, số LED sáng tăng dần từ trái sang phải:\n```verilog\n1000_0000 -> 1100_0000 -> 1110_0000 -> ... -> 1111_1111\n```\nVì số bit sáng tăng dần nên là sáng dần từ trái sang phải, không phải chỉ một LED dịch.",
    main_273: "Code xử lý riêng hai nửa LED. Nửa thấp dịch trái rồi thêm bit `0001`; nửa cao dịch phải rồi thêm bit `1000`. Kết quả là các LED sáng được tích lũy dần từ hai mép ngoài tiến vào giữa, ví dụ dạng ý tưởng:\n```verilog\n1000_0001 -> 1100_0011 -> 1110_0111 -> 1111_1111\n```\nVì số LED sáng tăng thêm từ ngoài vào trong nên đáp án là sáng dần từ ngoài vào trong.",
    main_295: "Clock vào là 50 MHz, tức 50.000.000 cạnh clock mỗi giây. Biến `count` đếm đến 25.000.000 thì đảo `clkout` một lần. Một lần đảo chỉ là nửa chu kỳ của `clkout`; muốn đủ một chu kỳ cần hai lần đảo:\n```verilog\n25.000.000 + 25.000.000 = 50.000.000 xung\n```\nVì 50.000.000 xung ứng với 1 giây, tần số ngõ ra là 1 Hz.",
    main_296: "Muốn chia clock 50 MHz xuống 2 Hz, trước hết đổi tần số thành chu kỳ. Clock 50 MHz nghĩa là mỗi giây có 50.000.000 xung. Tần số 2 Hz nghĩa là ngõ ra có 2 chu kỳ trong 1 giây, nên một chu kỳ ngõ ra dài 0,5 giây.\n\nTrong mạch chia xung dạng bộ đếm, `clkout` thường được đảo trạng thái khi `count` đạt giá trị so sánh. Một lần đảo chỉ tạo nửa chu kỳ, muốn đủ một chu kỳ phải đảo 2 lần:\n```verilog\nT_out = 1 / 2 Hz = 0,5 s\nT_nửa_chu_kỳ = 0,5 / 2 = 0,25 s\nSố xung cần đếm = 50.000.000 × 0,25 = 12.500.000\n```\nVì vậy hệ số so sánh đúng là 12.500.000.\n\nNếu chọn 25.000.000 thì `clkout` đảo mỗi 0,5 giây, một chu kỳ đầy đủ là 1 giây nên chỉ ra 1 Hz. Nếu chọn 50.000.000 thì còn chậm hơn. Nếu chọn 12.000.000 thì chỉ là gần đúng và tạo khoảng 2,08 Hz, không đúng chính xác yêu cầu 2 Hz.",
    main_297: "Hệ thống trên có hai khối chức năng chính: module chia xung `CK_DIV` tạo clock chậm từ 50 MHz, và module bộ đếm/hiển thị dùng clock chậm đó để tạo trạng thái đếm. Khi vẽ sơ đồ khối tổng thể, ta gom theo chức năng nên có 2 module chính, không đếm các thanh ghi nội bộ như `count` thành module riêng.",
    main_298: "Khi `speed = 1`, code dùng nhánh đếm đến 12.500.000 rồi đảo `clkout` một lần. Một chu kỳ đầy đủ của `clkout` cần hai lần đảo, nên số xung clock 50 MHz cho một chu kỳ là:\n```verilog\n12.500.000 × 2 = 25.000.000 xung\n```\nTần số ra bằng `50.000.000 / 25.000.000 = 2 Hz`. Vì vậy xung nhịp đếm là 2 Hz.",
    main_299: "Chương trình 1 là khối chia xung `CK_DIV` có cấu trúc hợp lệ. Hai chương trình còn lại trong đề có lỗi khi tổng hợp/khai báo, chủ yếu liên quan kiểu tín hiệu hoặc cách nối module. Vì vậy đáp án là chương trình 2 và chương trình 3. Khi kiểm tra lỗi Verilog, cần phân biệt: lỗi cú pháp là sai cấu trúc câu lệnh; lỗi kiểu biến là dùng `reg/wire` không đúng cách; lỗi định danh là gọi sai tên cổng/tín hiệu.",
    main_300: "Lỗi được hỏi thuộc kiểu biến. Trong Verilog, tín hiệu được gán bên trong `always` phải khai báo `reg`; tín hiệu được nối giữa module hoặc được lái bởi `assign`/instance thường là `wire`. Nếu chương trình dùng sai `reg`/`wire` so với cách tín hiệu được lái thì lỗi đúng nhất là kiểu biến, không phải lỗi cú pháp dấu câu hay tên định danh.",
    main_301: "Câu hỏi hỏi khi `rst = 0`, nhưng đoạn code chia xung hiển thị ở câu này không có tín hiệu `rst`; nó chỉ có `clk50m`, `clkout` và `speed`. Vì dữ kiện `rst` không thuộc module đang xét nên không thể suy ra xung nhịp đếm từ điều kiện này. Do đó đáp án là chưa thể xác định.",
    main_302: "Module tổng thể sau khi ghép hệ thống cần các tín hiệu vào từ bên ngoài gồm clock 50 MHz, reset, điều khiển dừng/chạy hoặc cho phép, điều khiển chiều đếm và chọn tốc độ. Tổng cộng là 5 ngõ vào. Các dây nội bộ như clock đã chia hoặc bus trạng thái không tính là ngõ vào hoàn chỉnh từ bên ngoài module tổng thể.",
    main_303: "Ngõ ra hoàn chỉnh của module tổng thể là bus hiển thị/trạng thái đưa ra ngoài. Dù bus có nhiều bit, trong câu hỏi số ngõ ra được tính theo cổng output tổng thể, không phải đếm từng bit riêng lẻ. Vì vậy module có 1 ngõ ra hoàn chỉnh."
  };
  return map[id] || "";
}

function specificExplanation(q, correctOptions) {
  const cid = q.id;
  const ans = optionText(correctOptions);
  const code = ((q.codeBlocks || [])[0]?.code || "");
  const qText = normalize([q.question, q.chapter, q.section, code].join(" "));
  const rich = richSpecificExplanation(q, correctOptions);
  if (rich) return rich;

  const lineErrors = {
    main_245: "Dòng (1) sai vì tên module `F_(ADDER)` chứa dấu ngoặc. Tên module trong Verilog phải là định danh hợp lệ: bắt đầu bằng chữ hoặc dấu gạch dưới, sau đó là chữ/số/gạch dưới/ký tự `$`; không được chèn dấu ngoặc vào giữa tên. Cách đúng có thể là `module F_ADDER(a, b, s, ci, co);`.",
    main_246: "Dòng (3) sai vì khai báo `output co, s` thiếu dấu chấm phẩy ở cuối dòng. Trong Verilog, khai báo `input`, `output`, `wire`, `reg` là một statement và phải kết thúc bằng dấu `;`.",
    main_247: "Dòng (6) sai vì viết `endmodule;`. `endmodule` là từ khóa kết thúc module, không phải một statement khai báo nên không thêm dấu chấm phẩy sau nó.",
    main_248: "Dòng (9) sai theo cách dùng bus trong bài vì `input [3:-1] B;` dùng biên âm `-1`. Với bus 4 bit thông thường phải khai báo `[3:0]`; dùng `[3:-1]` làm độ rộng và chỉ số không khớp yêu cầu mạch 4 bit trong đề.",
    main_249: "Dòng (10) sai về kiểu dữ liệu. `S` được điều khiển bởi các instance `F_ADDER` và bởi phép gán nối mạch nên trong mô tả cấu trúc nó phải là net/wire, không nên khai báo `output reg [4:0] S;`.",
    main_250: "Dòng (15) sai ở tên instance. Cú pháp instance là `<module_name> <instance_name>(...)`; dùng `ADDER_4B` làm instance trong chính module `ADDER_4B` gây trùng/tối nghĩa định danh. Nên đặt instance riêng như `fa3` hoặc `u3`.",
    main_251: "Dòng (16) sai vì từ khóa kết thúc module phải viết chính xác là `endmodule`. Verilog phân biệt chữ hoa/thường nên `Endmodule` không phải từ khóa hợp lệ.",
    main_252: "Lỗi dòng 10 là khai báo biến không đúng kiểu: tín hiệu output được các module con lái trong mô tả cấu trúc cần là net/wire. Khai báo `reg` chỉ phù hợp khi tín hiệu được gán trong khối `always/initial`.",
    main_253: "Lỗi dòng 16 là sai từ khóa do viết `Endmodule`. Verilog phân biệt hoa/thường nên chỉ `endmodule` mới đúng cú pháp.",
    main_254: "Lỗi dòng 15 nằm ở định danh instance. Tên instance không nên trùng với tên module cấp trên; trong mô tả cấu trúc cần đặt tên instance riêng để công cụ hiểu đây là một phần tử con cụ thể."
  };
  if (lineErrors[cid]) return lineErrors[cid];

  if (cid === "main_233") return "Đoạn code bắt đầu bằng `module (a, b, ci, r, co);`, tức sau từ khóa `module` là dấu ngoặc mở ngay. Cú pháp Verilog bắt buộc phải có tên module trước danh sách cổng, ví dụ `module FULL_ADDER(a, b, ci, r, co);`. Vì thiếu tên module nên đáp án đúng là C. Tên module. Dòng `cin`/`ci` cũng có vấn đề định danh, nhưng lỗi mà câu hỏi nhắm tới theo đáp án là thiếu tên module ở dòng khai báo.";
  if (cid === "main_234") return "Code tạo 4 module `FullAdder` nối tiếp nhau: carry từ bit thấp truyền sang bit cao qua `c1`, `c2`, `c3`, còn `R[4]` là carry cuối. Đây là cấu trúc bộ cộng 4 bit kiểu ripple-carry, không phải một full adder đơn hay half adder.";
  if (cid === "main_235") return "Dòng `assign Y = A & B;` dùng toán tử bitwise AND. Nếu A và B là tín hiệu 1 bit, ngõ ra Y đúng bằng phép AND của hai ngõ vào. Muốn OR phải dùng `|`, NAND phải đảo kết quả `~(A&B)`, NOR phải `~(A|B)`.";
  if (cid === "main_236") return "Ngõ vào `I` là 4 bit, ngõ ra `O` là 2 bit. Các trường hợp `0001`, `0010`, `0100`, `1000` được đổi thành `00`, `01`, `10`, `11`. Đó là mã hóa one-hot 4 đường vào thành mã nhị phân 2 bit, nên là Encoder.";
  if (cid === "main_237") return "Ngõ vào `I` là 2 bit, ngõ ra `O` là 4 bit one-hot. Mỗi giá trị của I chỉ bật một bit của O: `00→0001`, `01→0010`, `10→0100`, `11→1000`. Đây là Decoder 2-to-4.";
  if (cid === "main_238") return "Với EN=1, mạch không bị vô hiệu hóa. I=2'b10 làm biến trung gian `temp = 4'b0100`. Vì HL=0 nên ngõ ra bị đảo mức, do đó kết quả là `~0100 = 1011`.";
  if (cid === "main_239") return "Trong chương trình, I được khai báo là `input [1:0] I`, nghĩa là chỉ nhận giá trị 2 bit. Đề lại cho I=3'b001 là giá trị 3 bit, không khớp độ rộng tín hiệu nên kết quả theo lựa chọn của đề là không tồn tại/không hợp lệ.";
  if (cid === "main_240") return "Khi EN=0, chương trình đi vào nhánh vô hiệu hóa và gán `temp = 4'b0000`. Lúc này HL và I không còn ảnh hưởng đến kết quả trung gian. Vì vậy kết quả cần chọn là `0000`.";
  if (cid === "main_241") return "Tín hiệu `sel` quyết định chọn một trong bốn bit `I[0]`, `I[1]`, `I[2]`, `I[3]` đưa ra một ngõ ra `O`. Nhiều ngõ vào, một ngõ ra và có tín hiệu chọn là đặc trưng của MUX.";
  if (cid === "main_242") return "Tín hiệu một bit `I` được đưa tới một trong bốn vị trí của vector `O` tùy `sel`. Một ngõ vào được phân phối ra nhiều ngõ ra là đặc trưng của DEMUX.";
  if (cid === "main_243") return "Half adder có hai input A,B; tổng `S = A ^ B`, nhớ `C = A & B`. Đoạn code đúng hai công thức này nên nó mô tả bộ cộng bán phần.";
  if (cid === "main_244") return "Full adder có ba input A, B, CI; tổng `S = A ^ B ^ CI`, carry-out bằng `(A&B) | (B&CI) | (A&CI)`. Đoạn code có đủ carry-in và carry-out nên là bộ cộng toàn phần.";

  if (cid === "main_260") return "Module dùng R, S và CLK. Khi CLK ở mức cho phép, các tổ hợp S/R làm Q và Qb set/reset. Vì nhạy theo mức `R,S,CLK` chứ không theo cạnh `posedge/negedge`, đây là chốt SR, không phải flip-flop.";
  if (cid === "main_262") return "Đoạn `always @(clk, D) if (clk) q = D;` làm Q đi theo D khi clk đang ở mức 1. Đó là latch tác động theo mức; nếu là D flip-flop thì phải dùng `always @(posedge clk)` hoặc `negedge clk`.";
  if (cid === "main_263") return "Đoạn code dùng `always @(posedge clk)`, tức Q chỉ nhận D tại cạnh lên clock. Cập nhật theo cạnh là đặc trưng của flip-flop, nên đây là D Flip-Flop.";
  if (cid === "main_264") return "Trong `always @(posedge CLK)`, khi T=1 thì Q/QB đảo trạng thái. T flip-flop có chức năng toggle ở mỗi cạnh clock khi T=1, nên đáp án là Flip Flop T.";
  if (cid === "main_265") return "Các DFF được nối nối tiếp: ngõ ra tầng trước đưa sang ngõ vào tầng sau. Dữ liệu đi vào từng bit theo mỗi xung clock và lấy ra nối tiếp ở cuối, nên là thanh ghi dịch SISO 4 bit.";
  if (cid === "main_266") return "Dữ liệu `in` đi vào q[0], rồi dịch sang q[1], q[2], q[3] qua các DFF cùng clock; đồng thời ngõ ra là vector song song `[3:0] q`. Vì vậy đây là thanh ghi dịch vào nối tiếp, ra song song.";

  if (includesAny(qText, ["forever clk1", "repeat (5)", "#75", "finish"])) return "Khối `initial` thực thi tuần tự. Khi gặp `forever clk1 = !clk1;`, nó lặp vô hạn ngay trong luồng đó, nên các lệnh phía sau như `repeat(5)` và `#75 $finish` không bao giờ được thực hiện. Vì vậy mô phỏng/khối này không tự chấm dứt theo các dòng sau.";
  if (qText.includes("blocking") || qText.includes("non-blocking") || qText.includes("nonblocking")) return "Blocking `=` cập nhật ngay và câu lệnh sau thấy giá trị mới; non-blocking `<=` lấy giá trị cũ ở vế phải rồi cập nhật đồng thời. Vì vậy kết quả phải được tính theo đúng loại phép gán đang dùng.";

  return "";
}

function buildWrongOptionReason(q, opt, correctOptions) {
  if (q.wrongExplanations && q.wrongExplanations[opt.id]) return q.wrongExplanations[opt.id];

  const qText = textOfQuestion(q);
  const optText = opt.text || "";
  const optNorm = normalize(optText);
  const correctText = correctOptions.map(o => o.text).join("; ");
  const correctNorm = normalize(correctText);
  const hasCode = (q.codeBlocks || []).length > 0;
  const hasImage = (q.images || []).length > 0 || q.image;

  if (q.id === "main_296") {
    if (opt.id === "A") return "50.000.000 là số xung clock gốc trong 1 giây, không phải số đếm để đảo `clkout` cho tần số 2 Hz.";
    if (opt.id === "B") return "25.000.000 là giá trị làm `clkout` đảo mỗi nửa giây; vì cần hai lần đảo cho một chu kỳ nên ngõ ra chỉ khoảng 1 Hz.";
    if (opt.id === "D") return "12.000.000 chỉ là giá trị gần đúng; tính ra khoảng 2,08 Hz nên không đúng chính xác yêu cầu 2 Hz.";
  }

  const missingModuleName = q.id === "main_233";
  if (missingModuleName) {
    if (optNorm.includes("ten chuong trinh")) return "Verilog không gọi phần này là tên chương trình; cú pháp yêu cầu cụ thể là tên module sau từ khóa `module`.";
    if (optNorm.includes("dinh danh")) return "Các tín hiệu như `a`, `b`, `ci`, `r`, `co` vẫn là định danh. Lỗi chính không phải thiếu định danh nói chung mà là thiếu tên module ở vị trí bắt buộc.";
    if (optNorm.includes("chinh ta")) return "Đoạn code không sai do gõ nhầm từ khóa; từ khóa `module` và `endmodule` vẫn đúng. Lỗi nằm ở cấu trúc khai báo module.";
  }

  if (correctOptions.length > 1) return "câu này yêu cầu chọn đủ tập đáp án đúng; phương án này không nằm trong tập đáp án đúng hoặc chỉ đúng một phần nên chưa đầy đủ.";
  if (correctNorm.includes("ca ") || correctNorm.includes("deu dung") || correctNorm.includes("khong sai") || correctNorm.includes("khong the sai")) {
    return "ý này có thể đúng một phần, nhưng câu hỏi yêu cầu lựa chọn bao quát đầy đủ. Đáp án đúng là phương án tổng hợp vì các nhận định liên quan đều đúng/đều không sai.";
  }
  if (optNorm.includes("ca ") || optNorm.includes("deu dung") || optNorm.includes("deu sai") || optNorm.includes("khong sai") || optNorm.includes("khong the sai")) {
    return "phương án tổng hợp này không đúng vì không phải toàn bộ các ý trong câu đều thỏa điều kiện như nó nêu.";
  }

  if (hasCode) {
    if (includesAny(qText, ["thieu", "sai", "loi", "dong nao"])) return "không chỉ đúng vị trí/thành phần gây lỗi. Cần đọc đúng dòng code, kiểm tra tên module/instance, dấu `;`, kiểu `wire/reg`, độ rộng bus và từ khóa Verilog.";
    if (optNorm.includes("mux")) return "mạch MUX phải có nhiều ngõ vào dữ liệu và một ngõ ra được điều khiển bởi tín hiệu chọn; đoạn code/hình trong câu không có dấu hiệu đó.";
    if (optNorm.includes("demux")) return "DEMUX phải có một ngõ vào được phân phối ra nhiều ngõ ra; đoạn code không thể hiện đúng hướng phân phối này.";
    if (optNorm.includes("encoder")) return "Encoder phải mã hóa nhiều đường vào thành số bit ít hơn; đoạn code không có quan hệ mã hóa đó.";
    if (optNorm.includes("decoder")) return "Decoder phải giải mã mã nhị phân thành one-hot nhiều bit; đoạn code không khớp mẫu này.";
    if (optNorm.includes("nand")) return "NAND là AND rồi đảo kết quả; nếu code không có phép đảo `~` hoặc cổng NAND thì không phải NAND.";
    if (optNorm.includes("nor")) return "NOR là OR rồi đảo kết quả; nếu code không có OR kèm đảo thì không phải NOR.";
    if (optNorm.includes("or")) return "OR dùng toán tử `|`; nếu code dùng `&` hoặc logic khác thì không phải OR.";
    return "không khớp hành vi thực tế của đoạn code khi xét toán tử, tín hiệu điều khiển, sensitivity list và kiểu gán.";
  }

  if (hasImage) {
    if (optNorm.includes("latch") || optNorm.includes("chot")) return "latch có đặc trưng tác động theo mức và thường có hồi tiếp giữ trạng thái; hình/câu hỏi không khớp đặc trưng latch của lựa chọn này.";
    if (optNorm.includes("flip flop") || optNorm.includes("flip-flop")) return "flip-flop phải cập nhật theo cạnh clock; nếu hình/câu không thể hiện tác động theo cạnh hoặc không đúng loại input thì không chọn phương án này.";
    if (optNorm.includes("mux")) return "MUX cần tín hiệu chọn để đưa một trong nhiều ngõ vào ra output; hình không khớp dấu hiệu đó.";
    if (optNorm.includes("decoder")) return "Decoder có ít ngõ vào mã hóa và nhiều ngõ ra one-hot; hình không thể hiện đúng cấu trúc đó.";
    return "không khớp dấu hiệu trong hình như số ngõ vào/ngõ ra, hồi tiếp, clock/enable hoặc đường chọn.";
  }

  if (qText.includes("viet tat")) return "không phải cách viết đầy đủ chuẩn của thuật ngữ, hoặc là cụm từ không tồn tại trong nội dung môn học.";
  if (includesAny(qText, ["cu phap", "khai bao", "dinh danh", "chu thich", "comment"])) return "vi phạm hoặc nhầm quy tắc cú pháp/định danh/chú thích được hỏi; phương án đúng phải khớp chính xác quy tắc Verilog.";
  if (includesAny(qText, ["reg", "wire", "net", "array", "vector", "bus", "string"])) {
    if (optNorm.includes("wire")) return "`wire` là net dùng để nối mạch/gán liên tục, không phải lựa chọn đúng trong ngữ cảnh cần biến lưu giá trị hoặc kiểu được hỏi.";
    if (optNorm.includes("reg")) return "`reg` là biến dùng trong procedural block; trong câu này ngữ cảnh không yêu cầu kiểu `reg` hoặc đáp án đúng chỉ ra loại khác.";
    if (optNorm.includes("array")) return "array là tập nhiều phần tử, khác với vector/bus nhiều bit hoặc chuỗi đang được hỏi.";
    if (optNorm.includes("bus")) return "bus chỉ mô tả đường nhiều bit, không phải kiểu/khái niệm chính xác mà câu hỏi yêu cầu.";
    return "nhầm giữa kiểu net/variable hoặc giữa vector và array.";
  }
  if (qText.includes("toan tu")) return "đây là nhóm toán tử khác hoặc tác dụng khác; cần phân biệt logic, bitwise, reduction và conditional.";
  if (includesAny(qText, ["ket qua", "gia tri", "tinh", "phep", "output", "tempt"])) return "không phải kết quả sau khi lần đúng biểu thức, độ rộng bit, điều kiện nhánh hoặc thứ tự thực thi của chương trình.";
  if (includesAny(qText, ["bao nhieu", "may", "so luong", "nam nao", "tang thu"])) return "số liệu/thứ tự này không khớp mốc hoặc bảng phân loại được học.";
  if (includesAny(qText, ["nhiem vu", "cong viec", "buoc", "front", "back", "tapeout"])) return "mô tả này thuộc bước khác trong flow thiết kế hoặc không đúng nhiệm vụ của tầng đang hỏi.";
  if (includesAny(qText, ["fpga", "asic", "pld", "spld", "cpld", "uu diem", "nhuoc diem", "dac trung", "dac diem"])) return "đặc điểm này bị gán nhầm cho nền tảng khác hoặc chưa đủ ý so với đáp án đúng.";
  if (includesAny(qText, ["mach", "flip flop", "latch", "chot", "thanh ghi", "bo dem", "mux", "demux", "decoder", "encoder"])) return "đây là loại mạch khác; dấu hiệu chức năng/ngõ vào-ngõ ra trong câu không phù hợp với lựa chọn này.";
  return "nội dung này không trả lời đúng trọng tâm câu hỏi hoặc không khớp định nghĩa/quy tắc đang được kiểm tra.";
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
    ${renderAnswerExplanation(q)}
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
  showLicenseMessage("Kích hoạt thành công. Bạn có thể sử dụng website trên thiết bị này.", "ok");
  unlockApp("license");
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