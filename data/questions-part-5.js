// Question bank questions-part-5 - cleaned and answer-audited
window.QUESTION_BANK = (window.QUESTION_BANK || []).concat(
[
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 36,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 49",
    "question": "Đoạn chương trình sau thực hiện công việc gì?",
    "options": [
      {
        "id": "A",
        "text": "Mạch so sánh 2 bit",
        "correct": false
      },
      {
        "id": "B",
        "text": "Thanh ghi dịch 2 bit",
        "correct": false
      },
      {
        "id": "C",
        "text": "Mạch chốt 1 bit",
        "correct": true
      },
      {
        "id": "D",
        "text": "Hai cổng NOR được nối tầng với nhau",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_225",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "assign d = ~(c | b);\nassign c = ~(a | d);"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 36,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 50",
    "question": "Phát biểu nào sau đây là sai đối với các mô-đun Verilog?",
    "options": [
      {
        "id": "A",
        "text": "Nếu một mô-đun X được khởi tạo 4 lần trong một mô-đun khác, 4 bản sao của X sẽ được tạo.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Khi một mô-đun X được gọi nhiều lần từ một số mô-đun khác, chỉ một bản sao của mô-đun X được đưa vào phần cứng sau khi tổng hợp.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Một mô-đun không thể chứa định nghĩa của các mô-đun khác.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Không thể khởi tạo nhiều hơn một mô-đun trong một mô-đun khác.",
        "correct": true
      },
      {
        "id": "E",
        "text": "Cả B và C",
        "correct": false
      }
    ],
    "answers": [
      "B",
      "D"
    ],
    "type": "multi",
    "id": "main_226"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 37,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 51",
    "question": "Chọn phát biểu đúng cho chương trình sau?",
    "options": [
      {
        "id": "A",
        "text": "Biến clk2 sẽ không bao giờ thay đổi trạng thái ban đầu",
        "correct": false
      },
      {
        "id": "B",
        "text": "Biến clk1 sẽ thay đổi trạng thái vô thời hạn cho đến khi kết thúc tại thời điểm 75 đơn vị",
        "correct": false
      },
      {
        "id": "C",
        "text": "Khối sẽ không bao giờ chấm dứt",
        "correct": true
      },
      {
        "id": "D",
        "text": "Trạng thái của biến clk2 sẽ thay đổi 50 lần",
        "correct": false
      },
      {
        "id": "E",
        "text": "Cả B và D đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_227",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "output reg clk1, clk2;\n\ninitial begin\n  clk1 = 1'b0;\n  clk2 = 1'b1;\n\n  forever clk1 = !clk1;\n\n  repeat (5) #5 clk2 = ~clk2;\n  #75 $finish;\nend"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 37,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 52",
    "question": "Ai là người phát triển Verilog?",
    "options": [
      {
        "id": "A",
        "text": "Moorby",
        "correct": false
      },
      {
        "id": "B",
        "text": "Thomas",
        "correct": false
      },
      {
        "id": "C",
        "text": "Russell and Ritchie",
        "correct": false
      },
      {
        "id": "D",
        "text": "Moorby and Thomson",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_228"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 37,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 53",
    "question": "Ngôn ngữ mô tả phần cứng nào phổ biến ở Mỹ?",
    "options": [
      {
        "id": "A",
        "text": "Verilog hệ thống",
        "correct": false
      },
      {
        "id": "B",
        "text": "Nhật ký hệ thống",
        "correct": false
      },
      {
        "id": "C",
        "text": "Verilog",
        "correct": true
      },
      {
        "id": "D",
        "text": "VHDL",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_229"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 37,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 54",
    "question": "Ngôn ngữ mô tả phần cứng nào phổ biến hơn ở Châu Âu?",
    "options": [
      {
        "id": "A",
        "text": "VHDL",
        "correct": true
      },
      {
        "id": "B",
        "text": "System Log",
        "correct": false
      },
      {
        "id": "C",
        "text": "Verilog",
        "correct": false
      },
      {
        "id": "D",
        "text": "C",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_230"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 37,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 55",
    "question": "Ngôn ngữ mô tả phần cứng nào linh hoạt hơn?",
    "options": [
      {
        "id": "A",
        "text": "VHDL",
        "correct": true
      },
      {
        "id": "B",
        "text": "Verilog",
        "correct": false
      },
      {
        "id": "C",
        "text": "C",
        "correct": false
      },
      {
        "id": "D",
        "text": "C++",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_231"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 38,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 56",
    "question": "Ngôn ngữ mô tả phần cứng nào cung cấp nhiều tính năng hơn cho các mô tả cấp độ bóng bán dẫn?",
    "options": [
      {
        "id": "A",
        "text": "C++",
        "correct": false
      },
      {
        "id": "B",
        "text": "VHDL",
        "correct": false
      },
      {
        "id": "C",
        "text": "Verilog",
        "correct": true
      },
      {
        "id": "D",
        "text": "C",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_232"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 38,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 1",
    "question": "Đoạn chương trình sau thiếu hay sai yếu tố gì?",
    "options": [
      {
        "id": "A",
        "text": "Tên chương trình",
        "correct": false
      },
      {
        "id": "B",
        "text": "Định danh người dùng",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tên module",
        "correct": true
      },
      {
        "id": "D",
        "text": "Chính tả",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_233",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module (a, b, ci, r, co);\n  input a, b, ci;\n  output r, co;\n\n  assign r  = a ^ b ^ ci;\n  assign co = a & ci + a & b + b & cin;\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 38,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 2",
    "question": "Chương trình sau mô tả mạch điện nào?",
    "options": [
      {
        "id": "A",
        "text": "Bộ cộng 4 bit",
        "correct": true
      },
      {
        "id": "B",
        "text": "Bộ cộng toàn phần",
        "correct": false
      },
      {
        "id": "C",
        "text": "Bộ cộng 3 bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "Bộ trừ 4 bit",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_234",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module Adder(A, B, R);\n  input  [3:0] A;\n  input  [3:0] B;\n  output [4:0] R;\n  wire c1, c2, c3;\n\n  FullAdder add0(.a(A[0]), .b(B[0]), .ci(1'b0), .co(c1), .r(R[0]));\n  FullAdder add1(.a(A[1]), .b(B[1]), .ci(c1),   .co(c2), .r(R[1]));\n  FullAdder add2(.a(A[2]), .b(B[2]), .ci(c2),   .co(c3), .r(R[2]));\n  FullAdder add3(.a(A[3]), .b(B[3]), .ci(c3),   .co(R[4]), .r(R[3]));\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 38,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 3",
    "question": "Chương trình sau mô tả mạch điện?",
    "options": [
      {
        "id": "A",
        "text": "Cổng NAND",
        "correct": false
      },
      {
        "id": "B",
        "text": "Cổng NOR",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cổng AND",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cổng OR",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_235",
    "note": "Đáp án được bổ sung do trong PDF dòng đáp án không được in đậm rõ. Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "wire A, B, Y;\nassign Y = A & B;"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 39,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 4",
    "question": "Chương trình sau mô tả mạch điện?",
    "options": [
      {
        "id": "A",
        "text": "ENCODER",
        "correct": true
      },
      {
        "id": "B",
        "text": "DECODER",
        "correct": false
      },
      {
        "id": "C",
        "text": "MUX",
        "correct": false
      },
      {
        "id": "D",
        "text": "DEMUX",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_236",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module Mymodule(I, O);\n  input [3:0] I;\n  output reg [1:0] O;\n\n  always @(I) begin\n    if      (I == 4'b0001) O = 2'b00;\n    else if (I == 4'b0010) O = 2'b01;\n    else if (I == 4'b0100) O = 2'b10;\n    else if (I == 4'b1000) O = 2'b11;\n  end\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 39,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 5",
    "question": "Chương trình sau mô tả mạch điện?",
    "options": [
      {
        "id": "A",
        "text": "ENCODER",
        "correct": false
      },
      {
        "id": "B",
        "text": "DECODER",
        "correct": true
      },
      {
        "id": "C",
        "text": "MUX",
        "correct": false
      },
      {
        "id": "D",
        "text": "DEMUX",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_237",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module Mymodule(I, O);\n  input [1:0] I;\n  output reg [3:0] O;\n\n  always @(I) begin\n    if      (I == 2'b00) O = 4'b0001;\n    else if (I == 2'b01) O = 4'b0010;\n    else if (I == 2'b10) O = 4'b0100;\n    else                 O = 4'b1000;\n  end\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 39,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 6",
    "question": "Xác định kết quả tempt của chương trình khi EN=1 và HL=0 và I=2’b10.",
    "options": [
      {
        "id": "A",
        "text": "0100",
        "correct": false
      },
      {
        "id": "B",
        "text": "0000",
        "correct": false
      },
      {
        "id": "C",
        "text": "1011",
        "correct": true
      },
      {
        "id": "D",
        "text": "0010",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_238",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module Mymodule(I, O, EN, HL);\n  input [1:0] I;\n  input EN, HL;\n  output [3:0] O;\n  reg [3:0] temp;\n\n  always @(I, EN, HL) begin\n    if (EN == 0)\n      temp = 4'b0000;\n    else begin\n      if      (I == 2'b00) temp = 4'b0001;\n      else if (I == 2'b01) temp = 4'b0010;\n      else if (I == 2'b10) temp = 4'b0100;\n      else                 temp = 4'b1000;\n    end\n  end\n\n  assign O = (HL == 1'b1) ? temp : ~temp;\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 40,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 7",
    "question": "Sử dụng chương trình trên, xác định ngõ ra tempt nếu EN=1, HL=1, I=3’b 001.",
    "options": [
      {
        "id": "A",
        "text": "1101",
        "correct": false
      },
      {
        "id": "B",
        "text": "0010",
        "correct": false
      },
      {
        "id": "C",
        "text": "0000",
        "correct": false
      },
      {
        "id": "D",
        "text": "Không tồn tại",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_239",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module Mymodule(I, O, EN, HL);\n  input [1:0] I;\n  input EN, HL;\n  output [3:0] O;\n  reg [3:0] temp;\n\n  always @(I, EN, HL) begin\n    if (EN == 0)\n      temp = 4'b0000;\n    else begin\n      if      (I == 2'b00) temp = 4'b0001;\n      else if (I == 2'b01) temp = 4'b0010;\n      else if (I == 2'b10) temp = 4'b0100;\n      else                 temp = 4'b1000;\n    end\n  end\n\n  assign O = (HL == 1'b1) ? temp : ~temp;\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 40,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 8",
    "question": "Sử dụng chương trình trên, xác định ngõ ra tempt nếu EN=0, HL=1, I=0",
    "options": [
      {
        "id": "A",
        "text": "1101",
        "correct": false
      },
      {
        "id": "B",
        "text": "0010",
        "correct": false
      },
      {
        "id": "C",
        "text": "0000",
        "correct": true
      },
      {
        "id": "D",
        "text": "Không tồn tại",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_240",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module Mymodule(I, O, EN, HL);\n  input [1:0] I;\n  input EN, HL;\n  output [3:0] O;\n  reg [3:0] temp;\n\n  always @(I, EN, HL) begin\n    if (EN == 0)\n      temp = 4'b0000;\n    else begin\n      if      (I == 2'b00) temp = 4'b0001;\n      else if (I == 2'b01) temp = 4'b0010;\n      else if (I == 2'b10) temp = 4'b0100;\n      else                 temp = 4'b1000;\n    end\n  end\n\n  assign O = (HL == 1'b1) ? temp : ~temp;\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 40,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 9",
    "question": "Đoạn chương trình sau mô tả mạch điện?",
    "options": [
      {
        "id": "A",
        "text": "MUX",
        "correct": true
      },
      {
        "id": "B",
        "text": "DEMUX",
        "correct": false
      },
      {
        "id": "C",
        "text": "ENCODER",
        "correct": false
      },
      {
        "id": "D",
        "text": "DECODER",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_241",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "always @(I, sel) begin\n  if      (sel == 2'b00) O = I[0];\n  else if (sel == 2'b01) O = I[1];\n  else if (sel == 2'b10) O = I[2];\n  else                   O = I[3];\nend"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 40,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 10",
    "question": "Đoạn chương trình sau mô tả mạch điện?",
    "options": [
      {
        "id": "A",
        "text": "MUX",
        "correct": false
      },
      {
        "id": "B",
        "text": "DEMUX",
        "correct": true
      },
      {
        "id": "C",
        "text": "ENCODER",
        "correct": false
      },
      {
        "id": "D",
        "text": "DECODER",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_242",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "always @(I, sel) begin\n  if      (sel == 2'b00) O = {3'b000, I};\n  else if (sel == 2'b01) O = {2'b00, I, 1'b0};\n  else if (sel == 2'b10) O = {1'b0, I, 2'b00};\n  else                   O = {I, 3'b000};\nend"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 40,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 11",
    "question": "Đoạn chương trình sau mô tả mạch điện?",
    "options": [
      {
        "id": "A",
        "text": "Cộng bán phần",
        "correct": true
      },
      {
        "id": "B",
        "text": "Cộng toàn phần",
        "correct": false
      },
      {
        "id": "C",
        "text": "Trừ nhị phân",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mạch so sánh",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_243",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module MYMODULE(A, B, C, S);\n  input A, B;\n  output reg C, S;\n\n  always @(A, B) begin\n    C = A & B;\n    S = A ^ B;\n  end\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 40,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "I. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 11",
    "question": "Đoạn chương trình sau mô tả mạch điện?",
    "options": [
      {
        "id": "A",
        "text": "Cộng bán phần",
        "correct": false
      },
      {
        "id": "B",
        "text": "Cộng toàn phần",
        "correct": true
      },
      {
        "id": "C",
        "text": "Trừ nhị phân",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mạch so sánh Cho đoạn chương trình sau, trả lời các câu hỏi từ câu 1 đến",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_244",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module FULL_ADDER(A, B, CI, S, CO);\n  input A, B, CI;\n  output CO, S;\n\n  assign S  = A ^ B ^ CI;\n  assign CO = (A & B) + (B & CI) + (A & CI);\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 41,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "II. NHẬN BIẾT LỖI VÀ SỬA LỖI",
    "question_no": "Câu 1",
    "question": "Dòng nào trong các dòng sau đây có chứa lỗi sai cú pháp hoặc ngữ nghĩa?",
    "options": [
      {
        "id": "A",
        "text": "1",
        "correct": true
      },
      {
        "id": "B",
        "text": "2",
        "correct": false
      },
      {
        "id": "C",
        "text": "4",
        "correct": false
      },
      {
        "id": "D",
        "text": "5",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_245",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 41,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "II. NHẬN BIẾT LỖI VÀ SỬA LỖI",
    "question_no": "Câu 2",
    "question": "Dòng nào trong các dòng sau đây có chứa lỗi sai cú pháp hoặc ngữ nghĩa?",
    "options": [
      {
        "id": "A",
        "text": "3",
        "correct": true
      },
      {
        "id": "B",
        "text": "2",
        "correct": false
      },
      {
        "id": "C",
        "text": "4",
        "correct": false
      },
      {
        "id": "D",
        "text": "5",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_246",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 41,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "II. NHẬN BIẾT LỖI VÀ SỬA LỖI",
    "question_no": "Câu 3",
    "question": "Dòng nào trong các dòng sau đây có chứa lỗi sai cú pháp hoặc ngữ nghĩa?",
    "options": [
      {
        "id": "A",
        "text": "6",
        "correct": true
      },
      {
        "id": "B",
        "text": "7",
        "correct": false
      },
      {
        "id": "C",
        "text": "8",
        "correct": false
      },
      {
        "id": "D",
        "text": "11",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_247",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 41,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "II. NHẬN BIẾT LỖI VÀ SỬA LỖI",
    "question_no": "Câu 4",
    "question": "Dòng nào trong các dòng sau đây có chứa lỗi sai cú pháp hoặc ngữ nghĩa?",
    "options": [
      {
        "id": "A",
        "text": "8",
        "correct": false
      },
      {
        "id": "B",
        "text": "9",
        "correct": true
      },
      {
        "id": "C",
        "text": "11",
        "correct": false
      },
      {
        "id": "D",
        "text": "12",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_248",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 41,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "II. NHẬN BIẾT LỖI VÀ SỬA LỖI",
    "question_no": "Câu 5",
    "question": "Dòng nào trong các dòng sau đây có chứa lỗi sai cú pháp hoặc ngữ nghĩa?",
    "options": [
      {
        "id": "A",
        "text": "10",
        "correct": true
      },
      {
        "id": "B",
        "text": "11",
        "correct": false
      },
      {
        "id": "C",
        "text": "12",
        "correct": false
      },
      {
        "id": "D",
        "text": "13",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_249",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 41,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "II. NHẬN BIẾT LỖI VÀ SỬA LỖI",
    "question_no": "Câu 6",
    "question": "Dòng nào trong các dòng sau đây có chứa lỗi sai cú pháp hoặc ngữ nghĩa?",
    "options": [
      {
        "id": "A",
        "text": "12",
        "correct": false
      },
      {
        "id": "B",
        "text": "13",
        "correct": false
      },
      {
        "id": "C",
        "text": "14",
        "correct": false
      },
      {
        "id": "D",
        "text": "15",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_250",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 41,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "II. NHẬN BIẾT LỖI VÀ SỬA LỖI",
    "question_no": "Câu 7",
    "question": "Dòng nào trong các dòng sau đây có chứa lỗi sai cú pháp hoặc ngữ nghĩa?",
    "options": [
      {
        "id": "A",
        "text": "2",
        "correct": false
      },
      {
        "id": "B",
        "text": "8",
        "correct": false
      },
      {
        "id": "C",
        "text": "12",
        "correct": false
      },
      {
        "id": "D",
        "text": "16",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_251",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 41,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "II. NHẬN BIẾT LỖI VÀ SỬA LỖI",
    "question_no": "Câu 8",
    "question": "Lỗi sai ở dòng số 10 là?",
    "options": [
      {
        "id": "A",
        "text": "Kiểu biến",
        "correct": true
      },
      {
        "id": "B",
        "text": "Kích thước biến",
        "correct": false
      },
      {
        "id": "C",
        "text": "Biến trùng lặp",
        "correct": false
      },
      {
        "id": "D",
        "text": "Từ khóa",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_252",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 41,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "II. NHẬN BIẾT LỖI VÀ SỬA LỖI",
    "question_no": "Câu 9",
    "question": "Lỗi sai ở dòng số 16 là?",
    "options": [
      {
        "id": "A",
        "text": "Ngữ nghĩa",
        "correct": false
      },
      {
        "id": "B",
        "text": "Cú pháp",
        "correct": false
      },
      {
        "id": "C",
        "text": "Biến trùng lặp",
        "correct": false
      },
      {
        "id": "D",
        "text": "Từ khóa",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_253",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 42,
    "chapter": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "section": "II. NHẬN BIẾT LỖI VÀ SỬA LỖI",
    "question_no": "Câu 10",
    "question": "Lỗi sai ở dòng số 15 là?",
    "options": [
      {
        "id": "A",
        "text": "Ngữ nghĩa",
        "correct": false
      },
      {
        "id": "B",
        "text": "Cú pháp",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tên định danh",
        "correct": true
      },
      {
        "id": "D",
        "text": "Từ khóa",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_254",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 42,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 1",
    "question": "Đặc điểm nào sau đây là của mạch chốt (Latch)?",
    "options": [
      {
        "id": "A",
        "text": "Là mạch không đồng bộ",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đầu ra thay đổi ngay sau khi đầu vào thay đổi",
        "correct": false
      },
      {
        "id": "C",
        "text": "Độ trễ lan truyền (nếu có) rất nhỏ",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A, B và C",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_255"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 42,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 2",
    "question": "Đặc điểm nào sau đây là của Flip Flop?",
    "options": [
      {
        "id": "A",
        "text": "Là mạch đồng bộ",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đầu ra chỉ thay đổi khi có sự thay đổi cạnh của tín hiệu điều khiển",
        "correct": false
      },
      {
        "id": "C",
        "text": "Sự thay đổi ngõ vào nhưng không có sự thay đổi cạnh của tín hiệu điều khiển không làm thay đổi ngõ ra",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A, B và C",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_256"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 42,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 3",
    "question": "Có bao nhiêu cách thực hiện việc nối dây giữa các module?",
    "options": [
      {
        "id": "A",
        "text": "2",
        "correct": true
      },
      {
        "id": "B",
        "text": "3",
        "correct": false
      },
      {
        "id": "C",
        "text": "4",
        "correct": false
      },
      {
        "id": "D",
        "text": "5",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_257",
    "note": "Nhãn đáp án bị trùng trong PDF nên đã chuẩn hóa lại thứ tự A/B/C/D."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 42,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 4",
    "question": "Phương pháp nối dây có thể là?",
    "options": [
      {
        "id": "A",
        "text": "Nối dây theo tên, các biến được kết nối với đầu vào hay đầu ra được chỉ định trong dấu ngoặc đơn. Thứ tự các kết nối không phân biệt.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Kết nối theo thứ tự đặt sẳn bởi module chuẩn, thứ tự các cổng phải khớp với thứ tự xuất hiện của module được khởi tạo.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A và B đều đúng",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cả A và B đều sai.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_258"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 43,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 1",
    "question": "Đây là sơ đồ mạch điện nào?",
    "options": [
      {
        "id": "A",
        "text": "Mạch chốt D",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mạch chốt SR",
        "correct": true
      },
      {
        "id": "C",
        "text": "Flip Flop JK",
        "correct": false
      },
      {
        "id": "D",
        "text": "Flip Flop SR",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_259",
    "images": [
      {
        "src": "data:image/jpeg;base64,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3/RG/Cv/AIT9t/8AEV1lFAHKf8KH+B//AERzwr/4T9t/8RR/wof4H/8ARHPCv/hP23/xFdXRQByn/Ch/gf8A9Ec8K/8AhP23/wARR/wof4H/APRHPCv/AIT9t/8AEV1dFAHKf8KH+B//AERzwr/4T9t/8RR/wof4H/8ARHPCv/hP23/xFdXRQByn/Ch/gf8A9Ec8K/8AhP23/wARR/wof4H/APRHPCv/AIT9t/8AEV1dFAHIz/Aj4ICJgPg74W+43/Mv23p/uV+Fn/BuAukaB/wXi/aptovs9nbR6bq0cMS7Y0QDWIcKBwAPYV+/00cjoRGwBK4Ga/B34x/8GmP7bPiz9pjx3+0F8Iv2/fDXhFvGPiG8vhDY2GoRzpBNMZBE7xsA2Mj2yKAP3ZGvaMRn+2LX/wACF/xo/t3Rv+gxa/8AgSn+Nfgkf+DUT/gqgT/ylnsh7b9W/wDi6P8AiFD/AOCqH/SWmy/761b/AOLoA/e3+3dG/wCgxa/+BKf40HXtFAydYtf/AAJT/GvwS/4hQ/8Agqh/0lpsv++tW/8Ai6qa1/wal/8ABW23hDeHf+CqejXcm7lL3UdZt1x9VEh/SgD97tX8aeEdBsn1LW/FWn2cCqS09zepGij1yzYr4e/4KAf8HEf/AATs/YW0PUNMX4uWfjvxpFERZ+EfCNwLqQy/wrNKuY4V9STnjoa+BdK/4NOf+CkHxYXTtD/ab/4Kj6ZDpFjbLCbfw9BqWoM6BmOMTvbqSdx+Y5PTg19c/sT/APBqj/wTf/ZU1OHxj8SLPVfir4hhmEsV54wdfs0TjutvEFQ885bcfegD89Pgb+xr/wAFA/8Ag5s/a2sf2rv2z7PVPA/wL0aXbpVjEGiie2DAm1sEflnkwPMuDn2PCgf0O/CP4WeAPgn8OdF+EXwv8N2+keHfDumQ2GkaXariO3giUIqjuTgck8k5JOSa1/DnhvRPCWkW/h7w1pNtYWFpEsVrZ2cIjjiQDAVVHCgegq/gelAAAB0GKKKKACiiigAooooAKKKKACiiigAowM5xRRQAm1QMADHpSgADAGKKKACiiigAAA6Ck2r/AHR+VLRQAYHoOOlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z",
        "alt": "Sơ đồ mạch chốt SR đầy đủ",
        "caption": "Sơ đồ mạch chốt SR dùng cho câu này - trang 43"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 43,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 2",
    "question": "Chương trình sau mô tả mạch điện nào?",
    "options": [
      {
        "id": "A",
        "text": "Mạch chốt D",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mạch chốt SR",
        "correct": true
      },
      {
        "id": "C",
        "text": "Flip Flop JK",
        "correct": false
      },
      {
        "id": "D",
        "text": "Flip Flop SR",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_260",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module RS_LATCH(\n  input wire R, S, CLK,\n  output reg Q, Qb\n);\n\nalways @(R, S, CLK) begin\n  if ((CLK == 1) && (S == 0) && (R == 1)) begin\n    Q = 0; Qb = 1;\n  end else if ((CLK == 1) && (S == 1) && (R == 0)) begin\n    Q = 1; Qb = 0;\n  end\nend\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 43,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 3",
    "question": "Đây là sơ đồ mạch điện nào ?",
    "options": [
      {
        "id": "A",
        "text": "Mạch chốt D",
        "correct": true
      },
      {
        "id": "B",
        "text": "Mạch chốt SR",
        "correct": false
      },
      {
        "id": "C",
        "text": "Flip Flop T",
        "correct": false
      },
      {
        "id": "D",
        "text": "Flip Flop SR",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_261",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Sơ đồ mạch chốt D đầy đủ",
        "caption": "Sơ đồ mạch chốt D dùng cho câu này - trang 43"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 43,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 4",
    "question": "Chương trình sau mô tả mạch điện nào?",
    "options": [
      {
        "id": "A",
        "text": "Mạch chốt D",
        "correct": true
      },
      {
        "id": "B",
        "text": "Mạch chốt SR",
        "correct": false
      },
      {
        "id": "C",
        "text": "Flip Flop JK",
        "correct": false
      },
      {
        "id": "D",
        "text": "Flip Flop SR",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_262",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module D_L(clk, D, q);\n  input D, clk;\n  output reg q;\n\n  always @(clk, D)\n    if (clk)\n      q = D;\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 43,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 5",
    "question": "Chương trình sau mô tả mạch điện nào?",
    "options": [
      {
        "id": "A",
        "text": "Mạch chốt D",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mạch chốt SR",
        "correct": false
      },
      {
        "id": "C",
        "text": "Flip Flop JK",
        "correct": false
      },
      {
        "id": "D",
        "text": "Flip Flop D",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_263",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module DFF(clk, D, q);\n  input D, clk;\n  output reg q;\n\n  always @(posedge clk) begin\n    q = D;\n  end\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 43,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 6",
    "question": "Chương trình sau mô tả mạch điện nào?",
    "options": [
      {
        "id": "A",
        "text": "Mạch chốt T",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mạch chốt D",
        "correct": false
      },
      {
        "id": "C",
        "text": "Flip Flop D",
        "correct": false
      },
      {
        "id": "D",
        "text": "Flip Flop T",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_264",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module T_FF(T, Q, QB, CLK);\n  input T, CLK;\n  output reg Q, QB;\n\n  always @(posedge CLK) begin\n    if (T == 1) begin\n      Q  = ~Q;\n      QB = ~QB;\n    end\n  end\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 44,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 7",
    "question": "Chương trình sau mô tả?",
    "options": [
      {
        "id": "A",
        "text": "Thanh ghi dịch 4 bit vào nối tiếp ra nối tiếp",
        "correct": true
      },
      {
        "id": "B",
        "text": "Thanh ghi dịch 4 bit vào nối tiếp ra song song",
        "correct": false
      },
      {
        "id": "C",
        "text": "Thanh ghi dịch 4 bit và song song ra nối tiếp hoặc song song",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mạch đếm không đồng bộ 4 bit",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_265",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module DFF(clk, D, q);\n  input D, clk;\n  output reg q;\n\n  always @(posedge clk) begin\n    q = D;\n  end\nendmodule\n\nmodule SRSS(in, clk, out);\n  input in, clk;\n  output reg out;\n  wire q1, q2, q3;\n\n  DFF dff1(.clk(clk), .d(in), .q(q1));\n  DFF dff2(.clk(clk), .d(q1), .q(q2));\n  DFF dff3(.clk(clk), .d(q2), .q(q3));\n  DFF dff4(.clk(clk), .d(q3), .q(out));\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 44,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 8",
    "question": "Chương trình sau mô tả?",
    "options": [
      {
        "id": "A",
        "text": "Thanh ghi dịch 4 bit vào nối tiếp ra nối tiếp",
        "correct": false
      },
      {
        "id": "B",
        "text": "Thanh ghi dịch 4 bit vào nối tiếp ra song song",
        "correct": true
      },
      {
        "id": "C",
        "text": "Thanh ghi dịch 4 bit và song song ra nối tiếp hoặc song song",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mạch đếm không đồng bộ 4 bit",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_266",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module DFF(C, D, q);\n  input C, D;\n  output reg q;\n\n  always @(posedge C) begin\n    q = D;\n  end\nendmodule\n\nmodule SRSP(C, in, q);\n  input C, in;\n  output [3:0] q;\n\n  DFF D1(.C(C), .D(in),   .q(q[0]));\n  DFF D2(.C(C), .D(q[0]), .q(q[1]));\n  DFF D3(.C(C), .D(q[1]), .q(q[2]));\n  DFF D4(.C(C), .D(q[2]), .q(q[3]));\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 45,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 9",
    "question": "Chương trình sau mô tả?",
    "options": [
      {
        "id": "A",
        "text": "Mạch đếm lên 4 bit",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mạch đếm xuống 4 bit",
        "correct": false
      },
      {
        "id": "C",
        "text": "Mạch đếm lên xuống 4 bit tự động",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mạch đếm lên xuống 4 bit có điều khiển",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_267",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module UP_COUNTER4B_RST_SP_UD(clk, rst, sp, count, ud);\n  input sp, clk, rst, ud;\n  output reg [3:0] count;\n\n  always @(posedge clk) begin\n    if (rst == 1)\n      count = 4'b0000;\n    else if (sp == 1)\n      if (ud == 1)\n        count = count + 1;\n      else\n        count = count - 1;\n    else\n      count = count;\n  end\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 46,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 10",
    "question": "Chương trình sau mô tả?",
    "options": [
      {
        "id": "A",
        "text": "Mạch đếm lên không đồng bộ 3 bit",
        "correct": true
      },
      {
        "id": "B",
        "text": "Mạch đếm xuống không đồng bộ 3 bit",
        "correct": false
      },
      {
        "id": "C",
        "text": "Mạch đếm lên đồng bộ 3 bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mạch đếm xuống đồng bộ 3 bit",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_268",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module TFF(T, Q, QB, CLK);\n  input T, CLK;\n  output reg Q, QB;\n\n  always @(posedge CLK)\n    if (T == 1) begin\n      Q  = ~Q;\n      QB = ~QB;\n    end\nendmodule\n\nmodule COUNTER_TTF(clk, q);\n  input clk;\n  output [2:0] q;\n  wire qb1, qb2;\n\n  TFF tff1(.T(1'b1), .Q(q[0]), .QB(qb1), .CLK(clk));\n  TFF tff2(.T(1'b1), .Q(q[1]), .QB(qb2), .CLK(qb1));\n  TFF tff3(.T(1'b1), .Q(q[2]), .CLK(qb2));\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 46,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 11",
    "question": "Đây là sơ đồ mạch điện của?",
    "options": [
      {
        "id": "A",
        "text": "Flip Flop T",
        "correct": true
      },
      {
        "id": "B",
        "text": "Mạch chốt T",
        "correct": false
      },
      {
        "id": "C",
        "text": "Flip Flop D",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mạch chốt D",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_269",
    "images": [
      {
        "src": "data:image/jpeg;base64,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IQyRvuJqv5e/0qTsY/5N87HsVZmqSVao1ekJl0697Wvok45HNxXSithKioS7t9pvBa15jnfUgejB5zb7TeC1rzHO+pG32m8FrXmOd9SB6MHnNvtN4LWvMc76kbfabwWteY531IHowec2+03gta8xzvqRt9pvBa15jnfUgejB5zb7TeC1rzHO+pG32m8FrXmOd9SB6MHnNvtN4LWvMc76kbfabwWteY531IHowec2+03gta8xzvqRt9pvBa15jnfUgejB5zb7TeC1rzHO+pG32m8FrXmOd9SB6MHnNvtN4LWvMc76kbfabwWteY531IHowec2+03gta8xzvqRt9pvBa15jnfUgejB5zb7TeC1rzHO+pG32m8FrXmOd9SB6MHnNvtN4LWvMc76kbfabwWteY531IHowec2+03gta8xzvqRt9pvBa15jnfUgejB5zb7TeC1rzHO+pG32m8FrXmOd9SB6MHnNvtN4LWvMc76kbfabwWteY531IHowec2+03gta8xzvqRt9pvBa15jnfUgejB5zb7TeC1rzHO+pG32m8FrXmOd9SB6MHnNvtN4LWvMc76kbfabwWteY531IHowec2+03gta8xzvqRt9pvBa15jnfUgejB5zb7TeC1rzHO+pG32m8FrXmOd9SB6MHnNvtN4LWvMc76kbfabwWteY531IHowec2+03gta8xzvqRt9pvBa15jnfUgejB5zb7TeC1rzHO+pG32m8FrXmOd9SB6MHnNvtN4LWvMc76kbfabwWteY531IHowec2+03gta8xzvqRt9pvBa15jnfUgejB5zb7TeC1rzHO+pG32m8FrXmOd9SBFOUN2TbofjWP9CpO8PrG+BCA73oszbG8m6+LSaPW5iBI1KNFmo76PNQ4cFqwlRFe98NERMdGlSfGdY3taALgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=",
        "alt": "Sơ đồ Flip-Flop T dùng cho câu này - trang 46",
        "caption": "Sơ đồ Flip-Flop T dùng cho câu này - trang 46"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 47,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 12",
    "question": "Chương trình sau cho phép điều khiển LED sáng như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "Sáng dịch từ trái sang phải",
        "correct": true
      },
      {
        "id": "B",
        "text": "Sáng dần từ trái sang phải",
        "correct": false
      },
      {
        "id": "C",
        "text": "Sáng dồn từ trái sang phải",
        "correct": false
      },
      {
        "id": "D",
        "text": "Sáng tắt liên tục",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_270",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "always @(posedge clk)\n  if (rst == 1)\n    led = 8'b1000_0000;\n  else if (led == 8'b0000_0000)\n    led = 8'b1000_0000;\n  else\n    led = led >> 1;"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 47,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 13",
    "question": "Chương trình sau cho phép điều khiển LED sáng như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "Sáng dịch từ ngoài vào trong",
        "correct": true
      },
      {
        "id": "B",
        "text": "Sáng dần ra hai phía",
        "correct": false
      },
      {
        "id": "C",
        "text": "Sáng dồn từ ngoài vào trong",
        "correct": false
      },
      {
        "id": "D",
        "text": "Sáng dịch ra hai phía",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_271",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "always @(posedge clk) begin\n  if (rst == 1)\n    led = 8'b1000_0001;\n  else begin\n    if (led == 8'b0000_0000)\n      led = 8'b1000_0001;\n    else begin\n      led[3:0] = led[3:0] << 1;\n      led[7:4] = led[7:4] >> 1;\n    end\n  end\nend"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 47,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 14",
    "question": "Chương trình sau cho phép điều khiển LED sáng như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "Sáng dịch từ trái sang phải",
        "correct": false
      },
      {
        "id": "B",
        "text": "Sáng dần từ trái sang phải",
        "correct": true
      },
      {
        "id": "C",
        "text": "Sáng dồn từ trái sang phải",
        "correct": false
      },
      {
        "id": "D",
        "text": "Sáng tắt liên tục",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_272",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "always @(posedge clk)\n  if (rst == 1)\n    led = 8'b1000_0000;\n  else if (led == 8'b1111_1111)\n    led = 8'b0000_0000;\n  else\n    led = (led >> 1) + 8'b1000_0000;"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 48,
    "chapter": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 15",
    "question": "Chương trình sau cho phép điều khiển LED sáng như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "Sáng dần từ ngoài vào trong",
        "correct": true
      },
      {
        "id": "B",
        "text": "Sáng dần ra hai phía",
        "correct": false
      },
      {
        "id": "C",
        "text": "Sáng dồn từ ngoài vào trong",
        "correct": false
      },
      {
        "id": "D",
        "text": "Sáng dịch ra hai phía",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_273",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "if (led == 8'b1111_1111)\n  led = 8'b0000_0000;\nelse begin\n  led[3:0] = led[3:0] << 1 + 4'b0001;\n  led[7:4] = led[7:4] >> 1 + 4'b1000;\nend"
      }
    ],
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 49,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 1",
    "question": "Đâu là đặc điểm của mạch tuần tự ?",
    "options": [
      {
        "id": "A",
        "text": "Các kết quả đầu ra là được xác định đầy đủ bởi các giá trị hiện tại của đầu vào",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đầu ra phụ thuộc vào trạng thái của flip-flop hơn là giá trị của đầu vào của nó tại bất kỳ thời gian nhất định",
        "correct": false
      },
      {
        "id": "C",
        "text": "Đầu ra phụ thuộc vào trạng thái trước đó của mạch",
        "correct": false
      },
      {
        "id": "D",
        "text": "Đầu ra phụ thuộc vào trạng thái quá khứ của mạch, cũng như giá trị hiện tại của đầu vào",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_274"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 49,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 2",
    "question": "Tín hiệu nào được sử dụng để điều khiển hoạt động của mạch tuần tự đồng bộ?",
    "options": [
      {
        "id": "A",
        "text": "Xung clock",
        "correct": true
      },
      {
        "id": "B",
        "text": "Tín hiệu sin",
        "correct": false
      },
      {
        "id": "C",
        "text": "Xung tam giác",
        "correct": false
      },
      {
        "id": "D",
        "text": "Xung dirak",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_275"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 49,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 3",
    "question": "Đặc điểm mạch tuần tự đồng bộ là?",
    "options": [
      {
        "id": "A",
        "text": "Chứa bộ nhớ hình thành các trạng thái bên trong mạch",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đầu ra là một hàm của đầu vào và trạng thái bên trong mạch",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tín hiệu xung clock điều khiển hoạt động toàn mạch, dữ liệu được lấy mẫu tại cạnh lên hay xuống của xung clock",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A, B và C",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_276"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 49,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 4",
    "question": "Đâu là phép gán chặn Blocking?",
    "options": [
      {
        "id": "A",
        "text": "==",
        "correct": false
      },
      {
        "id": "B",
        "text": "=",
        "correct": true
      },
      {
        "id": "C",
        "text": "=>",
        "correct": false
      },
      {
        "id": "D",
        "text": "==>",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_277"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 49,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 5",
    "question": "Đâu là phép gán không chặn Non – Blocking?",
    "options": [
      {
        "id": "A",
        "text": "==",
        "correct": false
      },
      {
        "id": "B",
        "text": "=",
        "correct": false
      },
      {
        "id": "C",
        "text": "=>",
        "correct": false
      },
      {
        "id": "D",
        "text": "<=",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_278"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 49,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 6",
    "question": "Các công việc với dấu gán chặn Blocking được thực hiện như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "Thực hiện theo thứ tự từ trên xuống",
        "correct": true
      },
      {
        "id": "B",
        "text": "Thực hiện đồng thời song song với nhau",
        "correct": false
      },
      {
        "id": "C",
        "text": "Thực hiện từ dưới lên",
        "correct": false
      },
      {
        "id": "D",
        "text": "Thực hiện có điều kiện",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_279"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 49,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 7",
    "question": "Các công việc với dấu gán không chặn Non - Blocking được thực hiện như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "Thực hiện theo thứ tự từ trên xuống",
        "correct": false
      },
      {
        "id": "B",
        "text": "Thực hiện đồng thời song song với nhau",
        "correct": true
      },
      {
        "id": "C",
        "text": "Thực hiện từ dưới lên",
        "correct": false
      },
      {
        "id": "D",
        "text": "Thực hiện có điều kiện",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_280"
  }
]
);
