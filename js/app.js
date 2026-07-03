const QUESTIONS = window.QUESTION_BANK || [];
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
        const clean = line.replace(/^-\s*/, "");
        const m = clean.match(/^([A-D]\.\s*[^:]+):\s*([\s\S]*)$/);
        if (m) {
          return `<li><strong>${escapeHTML(m[1])}</strong><span>${escapeHTML(m[2])}</span></li>`;
        }
        return `<li><span>${escapeHTML(clean)}</span></li>`;
      }).join("")
    : "";

  const fallback = (!answerText && !analysisText && !rejectItems)
    ? `<div class="explain-section"><p>${escapeHTML(raw).replace(/\n/g, "<br>")}</p></div>`
    : "";

  return `
    <div class="answer-explanation">
      <div class="explain-title">Giải thích chi tiết</div>
      ${answerText ? `
        <div class="explain-answer">
          <span class="explain-label">Đáp án đúng</span>
          <strong>${escapeHTML(answerText)}</strong>
        </div>` : ""}
      ${analysisText ? `
        <div class="explain-section">
          <h4>Phân tích</h4>
          <p>${escapeHTML(analysisText).replace(/\n/g, "<br>")}</p>
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

function getQuestionExplanation(q) {
  const correctOptions = q.options.filter(o => o.correct);
  const wrongOptions = q.options.filter(o => !o.correct);
  const correctLabel = correctOptions.map(o => `${o.id}. ${o.text}`).join(" | ");
  const baseExplanation = (q.explanation || "").trim();
  const autoReason = buildAutoExplanation(q, correctOptions);
  const reason = baseExplanation || autoReason;

  const wrongText = wrongOptions.length
    ? `\n\nVì sao không chọn các đáp án còn lại:\n${wrongOptions.map(o => `- ${o.id}. ${o.text}: ${buildWrongOptionReason(q, o, correctOptions)}`).join("\n")}`
    : "";

  return `Đáp án đúng là ${correctLabel}.\n\nPhân tích: ${reason}${wrongText}`;
}

const COURSE_REFERENCES = {
  ch1: "Cơ sở Chương 1: quy trình thiết kế ASIC/FPGA gồm HDL coding, simulation, synthesis, placement & routing, timing analysis/verification; Front-End thuộc phía người thiết kế, Back-End thuộc phía nhà sản xuất; tapeout là kết quả cuối trước khi sản xuất.",
  ch2: "Cơ sở Chương 2: Digital IC chia thành PLD và ASIC; PLD gồm SPLD/CPLD/FPGA; ASIC gồm Semi-Custom và Full-Custom. FPGA dễ lập trình, rẻ khi số lượng nhỏ, rủi ro thấp nhưng chậm/tốn điện/diện tích lớn hơn ASIC. ASIC nhanh, tiết kiệm điện và rẻ khi sản xuất số lượng lớn nhưng không lập trình lại được, lâu chế tạo và chi phí mask/NRE cao.",
  ch3: "Cơ sở Chương 3: module là khối xây dựng cơ bản trong Verilog. Cú pháp chuẩn là `module <module_name> (<module_terminal_list>); ... endmodule`. Verilog phân biệt net/variable, wire/reg, vector/array, toán tử logic/toán tử bit và các khối `initial`/`always`.",
  ch4: "Cơ sở Chương 4: mạch tổ hợp có ngõ ra phụ thuộc trực tiếp vào giá trị hiện tại của ngõ vào. MUX chọn một trong nhiều ngõ vào đưa ra một ngõ ra; DEMUX phân phối một ngõ vào tới một trong nhiều ngõ ra; Encoder mã hóa one-hot sang mã nhị phân; Decoder giải mã nhị phân sang one-hot.",
  ch5: "Cơ sở Chương 5: latch là phần tử nhớ mức, ngõ ra có thể đổi khi tín hiệu cho phép/clock đang ở mức tác động; flip-flop là phần tử nhớ cạnh, chỉ cập nhật tại cạnh lên hoặc cạnh xuống của clock. RS/D latch, D/JK/T flip-flop được nhận dạng bằng tín hiệu vào, hồi tiếp và điều kiện cập nhật.",
  ch6: "Cơ sở Chương 6: mạch tuần tự đồng bộ dùng clock để điều khiển phần tử nhớ. Continuous assignment `assign` gán liên tục, procedural assignment nằm trong `always/initial`. Blocking `=` thực thi theo thứ tự nên hợp với logic tổ hợp; non-blocking `<=` cập nhật song song nên hợp với thanh ghi/flip-flop."
};

function chapterKey(q) {
  const ch = normalize(q.chapter || "");
  if (ch.includes("chuong 1")) return "ch1";
  if (ch.includes("chuong 2")) return "ch2";
  if (ch.includes("chuong 3")) return "ch3";
  if (ch.includes("chuong 4")) return "ch4";
  if (ch.includes("chuong 5")) return "ch5";
  if (ch.includes("chuong 6")) return "ch6";
  return "";
}

function getCourseReference(q) {
  return COURSE_REFERENCES[chapterKey(q)] || "Cơ sở lý thuyết: đối chiếu trực tiếp với định nghĩa, cú pháp hoặc quy tắc thiết kế số tương ứng trong tài liệu môn học.";
}

function optionText(correctOptions) {
  return correctOptions.map(o => `${o.id}. ${o.text}`).join(" | ");
}

function includesAny(text, keys) {
  return keys.some(k => text.includes(k));
}

function specificExplanation(q, correctOptions) {
  const cid = q.id;
  const ans = optionText(correctOptions);
  const code = ((q.codeBlocks || [])[0]?.code || "");
  const qText = normalize([q.question, q.chapter, q.section, code].join(" "));

  const lineErrors = {
    main_245: "Dòng (1) sai vì tên module `F_(ADDER)` chứa dấu ngoặc. Theo quy tắc định danh Verilog, tên module phải là một identifier hợp lệ, không được viết thêm cặp ngoặc trong tên. Cách đúng có thể là `module F_ADDER(a, b, s, ci, co);`.",
    main_246: "Dòng (3) sai vì khai báo `output co, s` thiếu dấu chấm phẩy ở cuối dòng. Trong Verilog, mỗi khai báo port/signal như `input`, `output`, `wire`, `reg` phải kết thúc bằng dấu `;`.",
    main_247: "Dòng (6) sai vì viết `endmodule;`. Theo cú pháp module, kết thúc module dùng từ khóa `endmodule` và không thêm dấu chấm phẩy sau nó. Dòng (7) là khai báo module `ADDER_4B(A, B, S);` nên không phải lỗi chính.",
    main_248: "Dòng (9) sai theo quy ước bài học vì khai báo vector `input [3:-1] B;` dùng biên âm `-1`, làm kích thước/đánh chỉ số của bus không phù hợp với cách khai báo bus thông thường trong bài. Với bus 4 bit nên dùng dạng `[3:0]`.",
    main_249: "Dòng (10) sai về kiểu biến. `S` là ngõ ra được nối với output của các module con và bit `S[4]`, nên trong mô tả cấu trúc nên là net/wire để được driver bên ngoài gán. Khai báo `output reg [4:0] S;` làm sai kiểu trong ngữ cảnh nối module.",
    main_250: "Dòng (15) sai ở phần định danh instance: `F_ADDER ADDER_4B(...)` dùng tên instance trùng với tên module cấp trên `ADDER_4B`, dễ gây lỗi/nhầm định danh trong mô tả cấu trúc. Nên đặt instance khác như `fad3`.",
    main_251: "Dòng (16) sai vì Verilog phân biệt chữ hoa chữ thường. Từ khóa phải viết là `endmodule`, không phải `Endmodule`.",
    main_252: "Dòng (10) sai do kiểu biến: `S` đang là tín hiệu được các instance `F_ADDER` điều khiển qua port output nên phải là net/wire, không nên khai báo `reg` trong mô tả cấu trúc.",
    main_253: "Dòng (16) sai về từ khóa vì `Endmodule` viết hoa chữ E. Verilog là ngôn ngữ phân biệt chữ hoa/thường, từ khóa kết thúc module bắt buộc là `endmodule`.",
    main_254: "Dòng (15) sai ở tên định danh instance. Trong lời gọi module, phần sau tên module là tên instance; dùng `ADDER_4B` trùng tên module cấp trên làm định danh không phù hợp, nên đặt tên instance riêng như `fad3`."
  };
  if (lineErrors[cid]) return lineErrors[cid];

  if (cid === "main_233") {
    return "Đoạn code bắt đầu bằng `module (a, b, ci, r, co);`. Theo cú pháp Chương 3, sau từ khóa `module` bắt buộc phải có tên module rồi mới đến danh sách cổng, ví dụ `module FULL_ADDER(a, b, ci, r, co);`. Vì thiếu tên module nên đáp án đúng là C. Tên module. Lưu ý dòng cuối còn dùng `cin` trong khi đã khai báo `ci`, nhưng lỗi chính khớp với lựa chọn của đề là thiếu tên module.";
  }
  if (cid === "main_234") return "Code tạo 4 instance `FullAdder` liên tiếp cho các bit A[0]..A[3] và B[0]..B[3]. Carry đi từ `c1`, `c2`, `c3` tới bit cao hơn, còn `R[4]` là carry cuối. Đây là cấu trúc ripple-carry adder 4 bit, không phải một full adder đơn lẻ.";
  if (cid === "main_235") return "Dòng `assign Y = A & B;` dùng toán tử `&` theo bit giữa A và B. Với hai tín hiệu 1 bit, toán tử này mô tả đúng cổng AND. NAND/NOR/OR sẽ cần toán tử hoặc dấu đảo khác.";
  if (cid === "main_236") return "Ngõ vào `I` có 4 bit dạng one-hot, còn ngõ ra `O` chỉ có 2 bit. Các nhánh `0001→00`, `0010→01`, `0100→10`, `1000→11` chính là quá trình mã hóa 4 trạng thái đầu vào thành 2 bit đầu ra, nên là Encoder.";
  if (cid === "main_237") return "Ngõ vào `I` là 2 bit, còn ngõ ra `O` là 4 bit one-hot. Mỗi giá trị nhị phân của `I` chỉ bật một bit của `O`, đúng bản chất Decoder 2-to-4.";
  if (cid === "main_238") return "Vì `EN=1`, code không vào nhánh vô hiệu hóa `temp=0000`. Với `I=2'b10`, `temp=0100`. Do `HL=0`, ngõ ra bị đảo nên `O = ~0100 = 1011`. Vì vậy chọn 1011.";
  if (cid === "main_239") return "Trong module, `I` được khai báo `input [1:0] I`, tức chỉ rộng 2 bit. Đề cho `I=3'b001` là giá trị 3 bit nên không đúng kích thước tín hiệu mà chương trình định nghĩa; vì vậy kết quả theo đề là không tồn tại.";
  if (cid === "main_240") return "Điều kiện đầu tiên là `if (EN == 0) temp = 4'b0000;`. Khi EN bằng 0, các giá trị HL và I phía sau không còn quyết định kết quả. Vì vậy ngõ ra cần xét là 0000.";
  if (cid === "main_241") return "Tín hiệu `sel` chọn một trong bốn bit `I[0]`, `I[1]`, `I[2]`, `I[3]` đưa ra `O`. Một mạch nhiều ngõ vào, một ngõ ra và có đường chọn chính là MUX.";
  if (cid === "main_242") return "Tín hiệu một bit `I` được đặt vào một trong bốn vị trí của vector `O` tùy `sel`: `000I`, `00I0`, `0I00`, hoặc `I000`. Một ngõ vào được phân phối ra nhiều ngõ ra là DEMUX.";
  if (cid === "main_243") return "Half-adder có hai ngõ vào A, B; tổng `S = A ^ B` và nhớ `C = A & B`. Code trong đề đúng hai công thức này nên là bộ cộng bán phần.";
  if (cid === "main_244") return "Full-adder có ba ngõ vào A, B, CI; tổng `S = A ^ B ^ CI`, nhớ ra CO bằng tổng các tích đôi `(A&B)`, `(B&CI)`, `(A&CI)`. Code đúng công thức full-adder nên là bộ cộng toàn phần.";

  if (cid === "main_260") return "Module có hai tín hiệu điều khiển R, S và CLK; khi CLK=1, tổ hợp S/R quyết định Q và Qb. Đây là mạch chốt SR có enable/clock mức, không phải flip-flop vì sensitivity list là `(R, S, CLK)` chứ không phải `posedge`/`negedge`.";
  if (cid === "main_262") return "Code `always @(clk, D) if (clk) q = D;` làm Q bám theo D khi clk đang ở mức 1. Đây là đặc trưng của D latch: tác động theo mức, không phải theo cạnh clock.";
  if (cid === "main_263") return "Code dùng `always @(posedge clk)`, nghĩa là Q chỉ nhận D tại cạnh lên của clock. Theo Chương 5, flip-flop là edge-triggered nên đây là D Flip-Flop.";
  if (cid === "main_264") return "Trong `always @(posedge CLK)`, nếu T=1 thì Q và QB bị đảo trạng thái. Flip-flop T có đặc trưng toggle khi T=1 tại cạnh clock, nên đáp án đúng là Flip Flop T.";
  if (cid === "main_265") return "Code mắc nhiều DFF nối tiếp: output của tầng trước đi vào input của tầng sau và chỉ có một ngõ vào dữ liệu nối tiếp. Vì vậy đây là thanh ghi dịch 4 bit vào nối tiếp, ra nối tiếp.";
  if (cid === "main_266") return "Code dùng 4 DFF mắc nối tiếp, dữ liệu `in` đi vào q[0], rồi lan sang q[1], q[2], q[3]; đồng thời ngõ ra là vector `[3:0] q`. Đây là thanh ghi dịch 4 bit vào nối tiếp, ra song song.";

  if (qText.includes("blocking") || qText.includes("non-blocking") || qText.includes("nonblocking")) {
    return "Theo Chương 6, blocking `=` thực hiện theo thứ tự câu lệnh trong `always`, còn non-blocking `<=` lấy giá trị vế phải trước rồi cập nhật đồng thời. Vì vậy cần lần theo loại phép gán để xác định giá trị cuối.";
  }

  return "";
}

function buildAutoExplanation(q, correctOptions) {
  const qText = normalize([q.question, q.chapter, q.section, ...(q.codeBlocks || []).map(b => b.code || "")].join(" "));
  const correctText = correctOptions.map(o => o.text).join("; ");
  const correctTextNorm = normalize(correctText);
  const hasCode = (q.codeBlocks || []).length > 0;
  const hasImage = (q.images || []).length > 0 || q.image;
  const ref = getCourseReference(q);
  const spec = specificExplanation(q, correctOptions);
  if (spec) return `${spec}\n\nDựa trên tài liệu: ${ref}`;

  if (qText.includes("module")) {
    return `Trong Verilog, module là khối xây dựng cơ bản và cú pháp khai báo phải có dạng \`module <module_name> (<module_terminal_list>);\`, kết thúc bằng \`endmodule\`. Đáp án "${correctText}" khớp với quy tắc này.\n\nDựa trên tài liệu: ${ref}`;
  }

  if (hasCode) {
    if (qText.includes("thieu") || qText.includes("sai") || qText.includes("loi")) {
      return `Cần đọc đúng từng dòng code theo cú pháp Verilog: tên module/instance phải là định danh hợp lệ, khai báo phải kết thúc bằng dấu chấm phẩy, port phải có kiểu phù hợp, và từ khóa phải viết đúng chữ thường. Thành phần đúng cần xác định là "${correctText}".\n\nDựa trên tài liệu: ${ref}`;
    }
    if (includesAny(qText, ["mux", "demux", "encoder", "decoder", "cong", "mach", "so do"])) {
      return `Đối chiếu code với chức năng mạch tổ hợp: xem số ngõ vào/ngõ ra, tín hiệu chọn, phép toán logic và quan hệ gán ở các lệnh \`assign\`/\`always\`. Các dấu hiệu trong code khớp với "${correctText}".\n\nDựa trên tài liệu: ${ref}`;
    }
    if (includesAny(qText, ["ket qua", "gia tri", "xung", "chu ky", "repeat", "forever", "finish", "initial", "always"])) {
      return `Cần mô phỏng thứ tự thực thi trong Verilog: \`initial\` chạy một lần từ thời điểm 0, \`always\` chạy lặp theo điều kiện kích hoạt, \`#\` tạo trễ thời gian, \`repeat\` lặp số lần hữu hạn, còn \`forever\` lặp vô hạn nếu không có cơ chế dừng. Lần theo đúng các lệnh sẽ ra "${correctText}".\n\nDựa trên tài liệu: ${ref}`;
    }
    return `Đây là câu đọc hiểu code Verilog. Cần xét cú pháp module, kiểu dữ liệu wire/reg, toán tử, sensitivity list và kiểu gán. Khi đối chiếu với tài liệu và đoạn code, kết luận đúng là "${correctText}".\n\nDựa trên tài liệu: ${ref}`;
  }

  if (hasImage) {
    return `Quan sát hình để nhận dạng chức năng: mạch latch thường có hồi tiếp chéo và tác động theo mức; flip-flop tác động theo cạnh clock; MUX/DEMUX có đường chọn; encoder/decoder thay đổi số bit giữa ngõ vào và ngõ ra. Đặc điểm trong hình khớp với "${correctText}".\n\nDựa trên tài liệu: ${ref}`;
  }

  if (qText.includes("viet tat")) {
    return `Câu hỏi yêu cầu nhớ đúng tên đầy đủ của thuật ngữ. "${correctText}" là cách viết đúng theo tài liệu môn học; các lựa chọn còn lại là sai thuật ngữ hoặc viết sai.\n\nDựa trên tài liệu: ${ref}`;
  }

  if (includesAny(qText, ["cu phap", "khai bao", "dinh danh", "chu thich", "reg", "wire", "array", "vector", "string"])) {
    return `Đây là phần quy tắc ngôn ngữ Verilog. Cần phân biệt \`wire\` là net để nối mạch/continuous assignment, \`reg\` là biến lưu giá trị trong procedural block hoặc khai báo vector lưu dữ liệu, vector là dãy bit còn array là tập nhiều phần tử. Đáp án "${correctText}" phù hợp với quy tắc được hỏi.\n\nDựa trên tài liệu: ${ref}`;
  }

  if (qText.includes("toan tu")) {
    return `Verilog có nhóm toán tử khác nhau: logic (\`&&\`, \`||\`, \`!\`) cho điều kiện đúng/sai, bitwise (\`&\`, \`|\`, \`^\`, \`~\`) tác động từng bit, reduction rút gọn vector về 1 bit, và conditional \`?:\` chọn giá trị theo điều kiện. Đáp án "${correctText}" đúng với loại toán tử được hỏi.\n\nDựa trên tài liệu: ${ref}`;
  }

  if (includesAny(qText, ["ket qua", "gia tri", "tinh", "phep", "bao nhieu bit", "so bit"])) {
    return `Cần áp dụng đúng quy tắc biểu diễn số trong Verilog: dạng \`<size>'<base><value>\`, số bit quyết định độ rộng, các bit x/z ảnh hưởng phép so sánh/logic, và toán tử quyết định cách tính. Sau khi tính đúng, kết quả là "${correctText}".\n\nDựa trên tài liệu: ${ref}`;
  }

  if (includesAny(qText, ["bao nhieu", "may", "so luong", "nam nao", "tang thu", "cong doan"])) {
    return `Câu hỏi kiểm tra số liệu hoặc thứ tự trong quy trình/tài liệu. Giá trị đúng là "${correctText}" vì khớp với bảng/quy trình trong nội dung học; các số khác lệch thứ tự hoặc không đúng số lượng.\n\nDựa trên tài liệu: ${ref}`;
  }

  if (includesAny(qText, ["nhiem vu", "cong viec", "buoc", "front", "back", "tapeout"])) {
    return `Trong quy trình thiết kế, các bước front-end tập trung vào đặc tả, RTL/HDL, mô phỏng và tổng hợp; back-end tập trung vào placement/routing, timing, verification và tapeout. Nội dung "${correctText}" đúng với bước/tầng đang hỏi.\n\nDựa trên tài liệu: ${ref}`;
  }

  if (includesAny(qText, ["fpga", "asic", "pld", "spld", "cpld", "semi", "full", "uu diem", "nhuoc diem", "han che", "dac trung", "dac diem"])) {
    return `Cần phân biệt đúng nền tảng thiết kế số. PLD gồm SPLD/CPLD/FPGA; ASIC gồm Semi-Custom/Full-Custom. FPGA linh hoạt, rẻ khi số lượng nhỏ nhưng chậm/tốn tài nguyên hơn; ASIC nhanh, ít điện, rẻ khi sản lượng lớn nhưng chi phí ban đầu cao và không lập trình lại. Đáp án "${correctText}" phù hợp với đặc điểm đang hỏi.\n\nDựa trên tài liệu: ${ref}`;
  }

  if (includesAny(qText, ["mach", "flip flop", "latch", "chot", "thanh ghi", "bo dem", "mux", "demux", "decoder", "encoder"])) {
    return `Cần nhận dạng mạch theo chức năng. Mạch tổ hợp phụ thuộc vào ngõ vào hiện tại; mạch tuần tự có nhớ. Latch tác động theo mức, flip-flop tác động theo cạnh; MUX chọn ngõ vào, DEMUX phân phối ngõ vào, Encoder/Decoder đổi dạng mã. Đáp án "${correctText}" khớp với chức năng được mô tả.\n\nDựa trên tài liệu: ${ref}`;
  }

  if (correctTextNorm.startsWith("ca ") || correctTextNorm.includes("deu dung") || correctTextNorm.includes("deu sai") || correctTextNorm.includes("khong sai")) {
    return `Đây là câu tổng hợp. Cần kiểm tra từng nhận định nhỏ; đáp án "${correctText}" đúng vì nó bao quát đầy đủ trạng thái đúng/sai của các nhận định trong câu.\n\nDựa trên tài liệu: ${ref}`;
  }

  return `Đáp án "${correctText}" khớp với khái niệm hoặc quy tắc trong tài liệu môn học. Khi học dạng câu này, nên xác định từ khóa chính của câu hỏi rồi đối chiếu với định nghĩa tương ứng trong chương.\n\nDựa trên tài liệu: ${ref}`;
}

function buildWrongOptionReason(q, opt, correctOptions) {
  if (q.wrongExplanations && q.wrongExplanations[opt.id]) return q.wrongExplanations[opt.id];

  const qText = normalize([q.question, q.chapter, q.section, ...(q.codeBlocks || []).map(b => b.code || "")].join(" "));
  const optText = opt.text || "";
  const optNorm = normalize(optText);
  const correctText = correctOptions.map(o => o.text).join("; ");
  const correctNorm = normalize(correctText);
  const hasCode = (q.codeBlocks || []).length > 0;
  const hasImage = (q.images || []).length > 0 || q.image;

  if (correctOptions.length > 1) return "câu này có nhiều đáp án đúng; phương án này thiếu hoặc không nằm trong tập đáp án đúng đầy đủ.";
  if (correctNorm.includes("ca ") || correctNorm.includes("deu dung") || correctNorm.includes("khong sai") || correctNorm.includes("khong the sai")) {
    return "ý này có thể đúng một phần nhưng chưa bao quát đủ tất cả nhận định đúng, nên không phải lựa chọn đầy đủ nhất.";
  }
  if (optNorm.includes("ca ") || optNorm.includes("deu dung") || optNorm.includes("deu sai") || optNorm.includes("khong sai") || optNorm.includes("khong the sai")) {
    return "phương án tổng hợp này sai vì không phải toàn bộ các ý trong câu đều có trạng thái đúng/sai như phương án nêu.";
  }
  if (hasCode) {
    if (includesAny(qText, ["thieu", "sai", "loi"])) return "không chỉ đúng dòng/thành phần gây lỗi trong code; cần đối chiếu đúng cú pháp module, dấu chấm phẩy, định danh, kiểu biến và từ khóa.";
    return "không khớp với hành vi thực tế của đoạn code khi xét tín hiệu, toán tử, sensitivity list và kiểu gán.";
  }
  if (hasImage) return "không khớp với đặc điểm thấy trong hình như hồi tiếp, clock/enable, số ngõ vào-ngõ ra hoặc đường chọn.";
  if (qText.includes("viet tat")) return "không phải cách viết đầy đủ đúng chuẩn của thuật ngữ trong tài liệu.";
  if (includesAny(qText, ["cu phap", "khai bao", "dinh danh", "chu thich", "reg", "wire", "array", "vector", "string"])) {
    return "nhầm quy tắc cú pháp/khai báo; lựa chọn này không thỏa điều kiện của định danh, kiểu dữ liệu hoặc cấu trúc Verilog đang hỏi.";
  }
  if (qText.includes("toan tu")) return "mô tả này thuộc loại toán tử khác hoặc không đúng tác dụng của toán tử đang hỏi.";
  if (includesAny(qText, ["ket qua", "gia tri", "tinh", "phep"])) return "không phải kết quả thu được sau khi tính đúng theo số bit, hệ cơ số và toán tử Verilog.";
  if (includesAny(qText, ["bao nhieu", "may", "so luong", "nam nao", "tang thu"])) return "số liệu/thứ tự này không khớp với bảng hoặc quy trình trong tài liệu.";
  if (includesAny(qText, ["nhiem vu", "cong viec", "buoc", "front", "back", "tapeout"])) return "mô tả này thuộc bước khác trong flow thiết kế hoặc không đúng nhiệm vụ của tầng đang hỏi.";
  if (includesAny(qText, ["fpga", "asic", "pld", "spld", "cpld", "uu diem", "nhuoc diem", "han che", "dac trung", "dac diem"])) return "đặc điểm này bị gán nhầm cho công nghệ/nhóm mạch khác hoặc chưa đủ ý so với đáp án đúng.";
  if (includesAny(qText, ["mach", "flip flop", "latch", "chot", "thanh ghi", "bo dem", "mux", "demux", "decoder", "encoder"])) return "đây là loại mạch khác; dấu hiệu chức năng/ngõ vào-ngõ ra trong câu không phù hợp với lựa chọn này.";
  return "nội dung này không khớp trực tiếp với định nghĩa, quy tắc hoặc kết quả mà câu hỏi yêu cầu.";
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