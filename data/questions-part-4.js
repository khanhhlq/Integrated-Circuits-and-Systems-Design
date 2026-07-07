// Question bank questions-part-4 - cleaned and answer-audited
window.QUESTION_BANK = (window.QUESTION_BANK || []).concat(
[
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 24,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 89",
    "question": "Đoạn chương trình sau chỉ được thực hiện khi nào?",
    "options": [
      {
        "id": "A",
        "text": "Luôn được thực thi",
        "correct": false
      },
      {
        "id": "B",
        "text": "Khi tín hiệu ctrl lên mức 1",
        "correct": true
      },
      {
        "id": "C",
        "text": "Khi hết thời gian chờ",
        "correct": false
      },
      {
        "id": "D",
        "text": "Bất kì sự thay đổi nào từ bên ngoài",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_169",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "always\nbegin\n  wait (ctrl)\n  #10 cnt = cnt + 1;\n  #10 cnt2 = cnt2 + 2;\nend"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 26,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 90",
    "question": "Xung clock được tạo ra từ đoạn chương trình sau với chu kỳ là?",
    "options": [
      {
        "id": "A",
        "text": "10 ns",
        "correct": false
      },
      {
        "id": "B",
        "text": "20 ns",
        "correct": false
      },
      {
        "id": "C",
        "text": "10 ms",
        "correct": false
      },
      {
        "id": "D",
        "text": "20 đơn vị thời gian",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_170",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "initial begin\n  clk = 0;\n  forever #10 clk = ~clk;\nend"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 26,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 91",
    "question": "Các lệnh của hệ thống như $display,.. được viết ở đâu?",
    "options": [
      {
        "id": "A",
        "text": "Trong quá trình",
        "correct": true
      },
      {
        "id": "B",
        "text": "Ngoài quá trình",
        "correct": false
      },
      {
        "id": "C",
        "text": "Đâu cũng được",
        "correct": false
      },
      {
        "id": "D",
        "text": "Tùy trường hợp",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_171"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 26,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 92",
    "question": "Định dạng được in ra bởi hàm $display(“..”, arg2, arg3, ..);",
    "options": [
      {
        "id": "A",
        "text": "Một chuỗi liên tục theo định dạng",
        "correct": true
      },
      {
        "id": "B",
        "text": "Các chuỗi rời rạc theo từng khoảng thời gian",
        "correct": false
      },
      {
        "id": "C",
        "text": "Các chuỗi cách nhau từng dòng",
        "correct": false
      },
      {
        "id": "D",
        "text": "Các mã nhị phân đại diện mã ASCII cho từng ký tự.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_172"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 26,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 93",
    "question": "Định dạng được in ra bởi hàm $monitor(“..”, arg2, arg3, ..);",
    "options": [
      {
        "id": "A",
        "text": "Một chuỗi liên tục theo định dạng",
        "correct": false
      },
      {
        "id": "B",
        "text": "Các chuỗi rời rạc theo từng khoảng thời gian",
        "correct": true
      },
      {
        "id": "C",
        "text": "Các chuỗi cách nhau từng dòng",
        "correct": false
      },
      {
        "id": "D",
        "text": "Các mã nhị phân đại diện mã ASCII cho từng ký tự.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_173"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 26,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 94",
    "question": "Định dạng được in ra khi sử dụng hàm display hoặc monitor khi sử dụng %o là?",
    "options": [
      {
        "id": "A",
        "text": "Giá trị ở hệ bát phân",
        "correct": true
      },
      {
        "id": "B",
        "text": "Chuỗi",
        "correct": false
      },
      {
        "id": "C",
        "text": "Giá trị thập phân",
        "correct": false
      },
      {
        "id": "D",
        "text": "Số thực",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_174",
    "note": "Nhãn đáp án bị trùng trong PDF nên đã chuẩn hóa lại thứ tự A/B/C/D."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 26,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 95",
    "question": "Định dạng %f in ra số thực ở hệ thống số nào?",
    "options": [
      {
        "id": "A",
        "text": "Nhị phân",
        "correct": false
      },
      {
        "id": "B",
        "text": "Bát phân",
        "correct": false
      },
      {
        "id": "C",
        "text": "Hệ thập phân",
        "correct": true
      },
      {
        "id": "D",
        "text": "Hệ thập lục phân",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_175"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 26,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 96",
    "question": "Cho biết thời gian được trì hoãn của câu lệnh sau trước khi được thực hiện?",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "`timescale 10ns/1ns\n#5 a = b;"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "5 ns",
        "correct": false
      },
      {
        "id": "B",
        "text": "50ns",
        "correct": true
      },
      {
        "id": "C",
        "text": "5 ms",
        "correct": false
      },
      {
        "id": "D",
        "text": "50 ms",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_176"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 26,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 1",
    "question": "Ngôn ngữ truyền thống để lập trình thiết kế vi mạch là:",
    "options": [
      {
        "id": "A",
        "text": "C, foxtran, hdl.",
        "correct": false
      },
      {
        "id": "B",
        "text": "C, foxtran, java.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Hdl, verilog.",
        "correct": false
      },
      {
        "id": "D",
        "text": "C, vhdl.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_177"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 26,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 2",
    "question": "Không thể sử dụng ngôn ngữ truyền thống để thiết kế mạch vì lý do:",
    "options": [
      {
        "id": "A",
        "text": "Thực hiện song song.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Tốc độ thực hiện chậm.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Thực hiện tuần tự.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Vừa song song và tuần tự.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_178"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 27,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 3",
    "question": "Một hệ thống số tiêu biểu được xây dựng từ các thành phần gồm:",
    "options": [
      {
        "id": "A",
        "text": "Chỉ có các dây dẫn.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Chỉ có các ngõ vào và các ngõ ra",
        "correct": false
      },
      {
        "id": "C",
        "text": "Các thành phần nhỏ hơn, các dây dẫn kết nối các ngõ vào và các ngõ ra của các thành phần.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Chỉ có các thành phần nhỏ hơn.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_179"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 27,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 4",
    "question": "Một chương trình VHDL tiêu biểu gồm:",
    "options": [
      {
        "id": "A",
        "text": "Hai phần chính là khai báo entity và architecture.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Một phần chính là khai báo architecture.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Một phần chính là khai báo entity.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Hai phần chính là khai báo entity và process.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_180"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 27,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 5",
    "question": "Architecture trong chương trình VHDL thì:",
    "options": [
      {
        "id": "A",
        "text": "Chứa các khai báo thư viện.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Chứa các hoạt động bên trong hoặc tổ chức của mạch điện.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Chứa các khai báo vào ra của mạch điện số.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Chỉ chúra process",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_181"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 27,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 6",
    "question": "Khi một tín hiệu ngõ vào của mạch điện số thay đổi thì:",
    "options": [
      {
        "id": "A",
        "text": "Không gây ảnh hưởng gì.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Ngõ ra thay đổi ngay lập tức.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Chỉ có mạch điện nào nối với tín hiệu đó thì bị kích hoạt.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Toàn bộ mạch điện thay đổi.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_182"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 27,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 7",
    "question": "Một số nhị phân chẵn là:",
    "options": [
      {
        "id": "A",
        "text": "Tổng số bit i là lẻ.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Tổng số bit 1 là chẵn.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Số đó chia hết cho 2,",
        "correct": false
      },
      {
        "id": "D",
        "text": "Số nhị phân với số bit là số chẵn.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_183"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 27,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 8",
    "question": "Entity trong chương trình VHDL thi:",
    "options": [
      {
        "id": "A",
        "text": "Chỉ chứa process.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Chứa các khai báo thư viện.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Chứa các khai báo vào ra của mạch điện số.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Chứa các hoạt động bên trong hoặc tổ chức của mạch điện.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_184"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 28,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 9",
    "question": "Các lệnh trong Architecture của chương trình VHDL là:",
    "options": [
      {
        "id": "A",
        "text": "Các lệnh đồng thời.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Vừa tuần tự và đồng thời.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Không thể thay đổi thứ tự.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Các lệnh tuần tự.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_185"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 28,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 10",
    "question": "Giá trị mặc định của thanh ghi là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "U",
        "correct": false
      },
      {
        "id": "C",
        "text": "Z",
        "correct": false
      },
      {
        "id": "D",
        "text": "X",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_186"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 28,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 11",
    "question": "Ngõ ra cổng OR 4 ngõ vào chỉ bằng 1 khi?",
    "options": [
      {
        "id": "A",
        "text": "Tất cả các ngõ vào đều bằng 1",
        "correct": false
      },
      {
        "id": "B",
        "text": "Ít nhất một ngõ vào bằng 1",
        "correct": true
      },
      {
        "id": "C",
        "text": "Tất cả các ngõ vào đều bằng 0",
        "correct": false
      },
      {
        "id": "D",
        "text": "Ít nhất một ngõ vào bằng 0",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_187"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 28,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 12",
    "question": "Câu lệnh \"assign f=(a|b)&(c|d)\" biểu thị điều gì?",
    "options": [
      {
        "id": "A",
        "text": "Tất cả đều sai",
        "correct": false
      },
      {
        "id": "B",
        "text": "Một danh sách mạng mức cổng bao gồm hai cổng OR và một cổng AND",
        "correct": false
      },
      {
        "id": "C",
        "text": "Mô tả cấu trúc của hàm f",
        "correct": false
      },
      {
        "id": "D",
        "text": "Một mô tả hành vi của hàm f",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_188"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 28,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 13",
    "question": "Tổng hợp (synthesis) nghĩa là gì?",
    "options": [
      {
        "id": "A",
        "text": "Để tạo ra một mạch từ một đặc điểm kỹ thuật nhất định.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Để xác minh hoạt động chính xác của một mạch.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Để xác minh xem thông số kỹ thuật có đúng không.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Không ai trong số này.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_189"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 28,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 14",
    "question": "Nếu một kết nối (a net) không tải, nó mang mức logic gì?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "X",
        "correct": false
      },
      {
        "id": "C",
        "text": "Z",
        "correct": true
      },
      {
        "id": "D",
        "text": "U",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_190"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 28,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 15",
    "question": "Mức logic nào không được hổ trợ bởi ngôn ngữ Verilog?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "X",
        "correct": false
      },
      {
        "id": "C",
        "text": "Z",
        "correct": false
      },
      {
        "id": "D",
        "text": "U",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_191"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 28,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 16",
    "question": "Câu lệnh $stop có chức năng?",
    "options": [
      {
        "id": "A",
        "text": "Kết thúc mô phỏng",
        "correct": false
      },
      {
        "id": "B",
        "text": "Thoát mô phỏng",
        "correct": false
      },
      {
        "id": "C",
        "text": "Trì hoãn mô phỏng",
        "correct": true
      },
      {
        "id": "D",
        "text": "Tất cả đều sai",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_192"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 29,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 17",
    "question": "Ưu điểm của thiết kế dựa trên FPGA so với thiết kế ASIC là gì?",
    "options": [
      {
        "id": "A",
        "text": "Nó linh hoạt hơn.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Nó nhanh hơn.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A và D",
        "correct": true
      },
      {
        "id": "D",
        "text": "Nó có chi phí thiết kế thấp hơn.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_193"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 29,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 18",
    "question": "Trạng thái đầu ra tristate (3 trạng thái) là gì?",
    "options": [
      {
        "id": "A",
        "text": "Tất cả đều sai.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Khi điện áp nằm ở đâu đó giữa logic 0 và logic 1.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Khi đường dây đầu ra được cách ly về điện.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Trạng thái thứ ba trong hệ thống logic bậc ba.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_194"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 29,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 19",
    "question": "Đâu không phải là phương pháp chính xác để chỉ định thang thời gian trong Verilog?",
    "options": [
      {
        "id": "A",
        "text": "100ns/110ps",
        "correct": true
      },
      {
        "id": "B",
        "text": "10ns/1ps",
        "correct": false
      },
      {
        "id": "C",
        "text": "1ns/1ps",
        "correct": false
      },
      {
        "id": "D",
        "text": "100ns/100ps",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_195"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 29,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 20",
    "question": "Nếu A= 4b’ 001x và B= 4b’ 1011 thì kết quả của A+B sẽ là",
    "options": [
      {
        "id": "A",
        "text": "1100",
        "correct": false
      },
      {
        "id": "B",
        "text": "Tất cả đều sai",
        "correct": false
      },
      {
        "id": "C",
        "text": "xxxx",
        "correct": true
      },
      {
        "id": "D",
        "text": "110x",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_196"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 29,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 21",
    "question": "Cho đoạn chương trình Verilog sau. Nếu giá trị của A là 8'b00111001 thì giá trị của {A[5:3], {3{B}}} sẽ là bao nhiêu?",
    "options": [
      {
        "id": "A",
        "text": "Tất cả đều sai",
        "correct": false
      },
      {
        "id": "B",
        "text": "6'b011000",
        "correct": false
      },
      {
        "id": "C",
        "text": "6'b111000",
        "correct": true
      },
      {
        "id": "D",
        "text": "6’b111111",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_197",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "wire [7:0] A;\nwire B;\nassign B = ~|A;"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 29,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 22",
    "question": "Số tối đa có thể được biểu diễn ở dạng nhị phân không dấu 8 bit là bao nhiêu?",
    "options": [
      {
        "id": "A",
        "text": "255",
        "correct": true
      },
      {
        "id": "B",
        "text": "128",
        "correct": false
      },
      {
        "id": "C",
        "text": "127",
        "correct": false
      },
      {
        "id": "D",
        "text": "256",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_198"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 29,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 23",
    "question": "Kết quả nào sau đây trong thời gian quay vòng thiết kế ngắn nhất?",
    "options": [
      {
        "id": "A",
        "text": "FGPA",
        "correct": true
      },
      {
        "id": "B",
        "text": "Full Custom",
        "correct": false
      },
      {
        "id": "C",
        "text": "Standard Cell",
        "correct": false
      },
      {
        "id": "D",
        "text": "Gate Array",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_199"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 29,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 24",
    "question": "Trong verilog `h1234 là một",
    "options": [
      {
        "id": "A",
        "text": "Số thập lục phân 4 bit",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đó là ký hiệu không hợp lệ.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Số thập lục phân 16 bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "Số thập lục phân 32 bit",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_200"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 30,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 25",
    "question": "Nếu A= 4 1xxz và B=4'b1xxx thì A===B sẽ trả về kết quả là?",
    "options": [
      {
        "id": "A",
        "text": "X",
        "correct": false
      },
      {
        "id": "B",
        "text": "0",
        "correct": true
      },
      {
        "id": "C",
        "text": "Z",
        "correct": false
      },
      {
        "id": "D",
        "text": "1",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_201"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 30,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 26",
    "question": "Số âm nhỏ nhất có thể được biểu diễn trong nhị phân 8 bit dưới dạng bù 2 là?",
    "options": [
      {
        "id": "A",
        "text": "-255",
        "correct": false
      },
      {
        "id": "B",
        "text": "-127",
        "correct": false
      },
      {
        "id": "C",
        "text": "-128",
        "correct": true
      },
      {
        "id": "D",
        "text": "-256",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_202"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 30,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 27",
    "question": "Trong đoạn mã đã cho, câu lệnh 2 sẽ được thực thi tại thời điểm nào?",
    "options": [
      {
        "id": "A",
        "text": "15",
        "correct": false
      },
      {
        "id": "B",
        "text": "20",
        "correct": true
      },
      {
        "id": "C",
        "text": "5",
        "correct": false
      },
      {
        "id": "D",
        "text": "Thời gian mô phỏng hiện tại",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_203",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "initial begin\n  #5  x = 1'b0;  // câu lệnh 1\n  #15 y = 1'b1;  // câu lệnh 2\nend"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 30,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 28",
    "question": "Nếu A=4'b011 và B= 4b’ 0011 thì kết quả của A**B sẽ là",
    "options": [
      {
        "id": "A",
        "text": "6",
        "correct": false
      },
      {
        "id": "B",
        "text": "9",
        "correct": false
      },
      {
        "id": "C",
        "text": "27",
        "correct": true
      },
      {
        "id": "D",
        "text": "Không hợp lệ",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_204"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 30,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 29",
    "question": "Nếu A = 5'b10011 và B = 5'b01110 thì giá trị của {A[3:1], 2{C}, B[2:0]} là bao nhiêu?",
    "options": [
      {
        "id": "A",
        "text": "Tất cả đều sai",
        "correct": false
      },
      {
        "id": "B",
        "text": "00111110",
        "correct": true
      },
      {
        "id": "C",
        "text": "00100110",
        "correct": false
      },
      {
        "id": "D",
        "text": "01111110",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_205",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "wire [5:0] A, B;\nwire C;\nassign C = ^A;"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 30,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 30",
    "question": "Đầu ra của cổng AND 4 ngõ vào sẽ là 1 nếu",
    "options": [
      {
        "id": "A",
        "text": "Tất cả các đầu vào đều ở mức 1.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Ít nhất một trong các đầu vào là 1.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Ít nhất một trong các đầu vào bằng 0.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Tất cả các đầu vào đều ở mức 0.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_206"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 30,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 31",
    "question": "Trong một mạch tổ hợp thuần túy có cần thiết phải đề cập đến tất cả các đầu vào trong danh sách độ nhạy always @() không?",
    "options": [
      {
        "id": "A",
        "text": "Không cần thiết",
        "correct": false
      },
      {
        "id": "B",
        "text": "Nó phụ thuộc vào phong cách mã hóa",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cần thiết",
        "correct": true
      },
      {
        "id": "D",
        "text": "Tất cả đều sai",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_207"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 31,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 32",
    "question": "Đầu ra của cổng NOR 4 đầu vào sẽ là 1 nếu",
    "options": [
      {
        "id": "A",
        "text": "Tất cả các đầu vào đều ở mức 0.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Ít nhất một trong các đầu vào là 1.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Ít nhất một trong các đầu vào bằng 0.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Tất cả các đầu vào đều ở mức 1.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_208"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 31,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 33",
    "question": "Chọn phương án đúng với đoạn chương trình sau?",
    "options": [
      {
        "id": "A",
        "text": "Một mạch tổ hợp thực hiện chức năng cổng XOR",
        "correct": true
      },
      {
        "id": "B",
        "text": "Một mạch chốt được tạo ra với ngõ ra là a",
        "correct": false
      },
      {
        "id": "C",
        "text": "Quá trình tổng hợp báo lỗi",
        "correct": false
      },
      {
        "id": "D",
        "text": "Một mạch tổ hợp thực hiện chức năng DECODER",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_209",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "module mydesign (a, b);\n  input [1:0] b;\n  output reg a;\n\n  always @(b) begin\n    if (b == 2'b00)\n      a = 1'b0;\n    else if (b == 2'b11)\n      a = 1'b0;\n    else\n      a = 1'b1;\n  end\nendmodule"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 31,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 34",
    "question": "Mục đích của khối thủ tục \"Initial\" trong Verilog là gì?",
    "options": [
      {
        "id": "A",
        "text": "Nó được sử dụng để chỉ định một khối thủ tục chỉ được thực hiện một lần",
        "correct": true
      },
      {
        "id": "B",
        "text": "Mỗi khi một khối \"always\" được thực thi, các biến được khởi tạo như được chỉ định trong khối \"initial\"",
        "correct": false
      },
      {
        "id": "C",
        "text": "Nếu có nhiều khối \"ban đầu\" trong một mô-đun, chúng sẽ được thực hiện lần lượt theo trình tự",
        "correct": false
      },
      {
        "id": "D",
        "text": "Nó có thể được sử dụng để chỉ định một khối thủ tục để tổng hợp",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_210"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 32,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 35",
    "question": "Nếu \"clk\" và \"clear\" là hai đầu vào của mô-đun bộ đếm, biểu thức nào sau đây phải được thực hiện nếu chúng ta muốn thực hiện việc xóa một cách không đồng bộ (giả sử \"xóa\" ở mức thấp, cạnh lên của tín hiệu \"clk\" là được sử dụng để đếm và khối \"always\" duy nhất được sử dụng để triển khai)?",
    "options": [
      {
        "id": "A",
        "text": "always @(posedge clk)",
        "correct": false
      },
      {
        "id": "B",
        "text": "always @ (negedge clear)",
        "correct": false
      },
      {
        "id": "C",
        "text": "always @(posedge clk or negedge clear)",
        "correct": true
      },
      {
        "id": "D",
        "text": "Tất cả đều sai",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_211"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 32,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 36",
    "question": "Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Câu lệnh \"gán\" có thể được sử dụng để thực hiện cả mạch tổ hợp cũng như mạch tuần tự",
        "correct": false
      },
      {
        "id": "B",
        "text": "Việc sử dụng toán tử có điều kiện trong câu lệnh \"gán\" luôn dẫn đến bộ ghép kênh",
        "correct": false
      },
      {
        "id": "C",
        "text": "Chỉ mục biến được sử dụng tại RHS của câu lệnh \"gán\" tạo ra bộ ghép kênh trong khi việc sử dụng nó tại LHS dẫn đến bộ giải mã",
        "correct": false
      },
      {
        "id": "D",
        "text": "Chỉ A và C đúng",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_212"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 32,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 37",
    "question": "Chọn phương án đúng với đoạn chương trình sau?",
    "options": [
      {
        "id": "A",
        "text": "Giá trị của x được in 13 lần",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không thể xác định được số lần giá trị x được in ra",
        "correct": false
      },
      {
        "id": "C",
        "text": "Giá trị của x được in 15 lần",
        "correct": true
      },
      {
        "id": "D",
        "text": "Giá trị của x chính là 15",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_213",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "integer x, y;\n\ninitial begin\n  x = 15;\n  y = 10;\nend\n\ninitial\n  repeat (x) $display(\"x=%d\", x);\n\ninitial\n  while (y < 12) begin\n    y = y + 1;\n    x = x - 1;\n  end"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 33,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 38",
    "question": "Đoạn chương trình sau cho biết điều gì?",
    "options": [
      {
        "id": "A",
        "text": "Tất cả đều sai",
        "correct": false
      },
      {
        "id": "B",
        "text": "Các cạnh lên của xung clock xuất hiện vào các thời điểm 5, 10, 15, 20...",
        "correct": false
      },
      {
        "id": "C",
        "text": "Các cạnh lên của xung clock xuất hiện vào các thời điểm 5, 15, 25, 35,..",
        "correct": true
      },
      {
        "id": "D",
        "text": "Các cạnh lên của xung clock xuất hiện vào các thời điểm 10, 20, 30,...",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_214",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "initial clk = 1'b0;\nalways #5 clk = ~clk;"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 33,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 39",
    "question": "Nếu A, B, C và D lần lượt là các biến reg, reg, integer và wire, mỗi biến có kích thước [7:0], thì điều nào sau đây được cho phép bên trong các quá trình?",
    "options": [
      {
        "id": "A",
        "text": "B[3:0] = D[4:1]+1;",
        "correct": false
      },
      {
        "id": "B",
        "text": "Cả A và D",
        "correct": true
      },
      {
        "id": "C",
        "text": "D = A + B;",
        "correct": false
      },
      {
        "id": "D",
        "text": "C=A+D;",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_215"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 33,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 40",
    "question": "Đoạn chương trình sau mô tả mạch điện gì với data0, data1, data2, data3 tương ứng ngõ vào các FF?",
    "options": [
      {
        "id": "A",
        "text": "Thanh ghi dịch 4 bit vào song song ra song song",
        "correct": false
      },
      {
        "id": "B",
        "text": "Thanh ghi dịch 4 bit",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tất cả đều sai",
        "correct": false
      },
      {
        "id": "D",
        "text": "Bốn Flip Flop D đều chứa dữ liệu của ngõ vào D in.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_216",
    "note": "Đáp án được bổ sung do trong PDF dòng đáp án không được in đậm rõ.",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "always @(posedge clock) begin\n  data3 = din;\n  data2 = data3;\n  data1 = data2;\n  data0 = data1;\nend"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 34,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 41",
    "question": "Chọn phát biểu đúng?",
    "options": [
      {
        "id": "A",
        "text": "Câu lệnh \"assign\" thực hiện phép gán liên tục giữa biểu thức được chỉ định ở phía bên tay phải và biến loại \"net\" được chỉ định ở phía bên trái.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Câu lệnh \"assign\" thực hiện phép gán liên tục giữa biểu thức được chỉ định ở phía bên tay phải và biến loại \"reg\" được chỉ định ở phía bên trái.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Câu lệnh “assign” có thể được thực hiện trong mô hình mạch chốt, một mạch điện tuần tự.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A và C đều đúng",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_217"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 34,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 42",
    "question": "Chọn phát biểu đúng về vòng lặp “repeat”?",
    "options": [
      {
        "id": "A",
        "text": "Nó có thể được sử dụng để lặp lại việc thực thi khối chính xác hai lần",
        "correct": false
      },
      {
        "id": "B",
        "text": "Nó có thể được sử dụng để lặp lại một khối cho đến khi một điều kiện được chỉ định là đúng",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tất cả đều sai",
        "correct": true
      },
      {
        "id": "D",
        "text": "Nó có thể được sử dụng để lặp lại một khối vô thời hạn",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_218"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 34,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 43",
    "question": "Cho đoạn chương trình sau, giá trị cuối cùng của biến d là bao nhiêu?",
    "options": [
      {
        "id": "A",
        "text": "58",
        "correct": false
      },
      {
        "id": "B",
        "text": "51",
        "correct": true
      },
      {
        "id": "C",
        "text": "53",
        "correct": false
      },
      {
        "id": "D",
        "text": "40",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_219",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "integer a, b, c, d;\n\ninitial begin\n  a = 25;\n  b = 12;\n  c = 5;\n  d = 17;\n  a = b + c;\n  b = a - 15;\n  c = a + d;\n  d = c + d;\nend"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 34,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 44",
    "question": "Cấu trúc \"#5\" biểu thị điều gì trong mô phỏng?",
    "options": [
      {
        "id": "A",
        "text": "Nó chỉ định độ trễ 5 đơn vị thời gian trước khi thực hiện câu lệnh tiếp theo",
        "correct": true
      },
      {
        "id": "B",
        "text": "Nó tạm dừng thực hiện các câu lệnh theo sau thời gian 5",
        "correct": false
      },
      {
        "id": "C",
        "text": "Nó chỉ định rằng đơn vị trễ là 5 nano giây",
        "correct": false
      },
      {
        "id": "D",
        "text": "Nó lên lịch thực hiện câu lệnh tiếp theo tại thời điểm 5",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_220"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 34,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 45",
    "question": "Chọn phát biểu đúng khi tiến hành tổng hợp đoạn chương trình sau?",
    "options": [
      {
        "id": "A",
        "text": "Dịch chuyển các giá trị được lưu trong ba biến",
        "correct": false
      },
      {
        "id": "B",
        "text": "Tất cả các biến sẽ nhận được giá trị được lưu trữ trước đó trong \"y\"",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tất cả các biến sẽ nhận được giá trị được lưu trữ trước đó trong \"z\"",
        "correct": false
      },
      {
        "id": "D",
        "text": "Tất cả các biến sẽ nhận được giá trị được lưu trữ trước đó trong \"x\"",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_221",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "always @(posedge clock) begin\n  y = x;\n  z = y;\n  x = z;\nend"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 35,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 46",
    "question": "Chọn phát biểu đúng cho đoạn chương trình sau?",
    "options": [
      {
        "id": "A",
        "text": "Một mạch tổ hợp được tạo ra",
        "correct": false
      },
      {
        "id": "B",
        "text": "Một mạch tuần tự với phần tử lưu trữ kết quả sẽ được tạo ra",
        "correct": false
      },
      {
        "id": "C",
        "text": "Hệ thống tổng hợp sẽ tạo ra một đường dây cho kết quả",
        "correct": false
      },
      {
        "id": "D",
        "text": "Chỉ A và C đúng",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_222",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "module guess (data, cond, result);\n  input [7:0] data;\n  input [1:0] cond;\n  output reg result;\n\n  always @(data) begin\n    if (cond == 2'b00)\n      result = |data;\n    else\n      result = data;\n  end\nendmodule"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 35,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 47",
    "question": "Chọn phát biểu đúng cho đoạn chương trình sau:",
    "options": [
      {
        "id": "A",
        "text": "Mạch tạo ra một bộ ghép kênh 2 sang 1",
        "correct": false
      },
      {
        "id": "B",
        "text": "Một mạch chốt kích hoạt tín hiệu c sẽ được tạo cho đầu ra b",
        "correct": false
      },
      {
        "id": "C",
        "text": "Một mạch tổ hợp thuần túy sử dụng các cổng logic NOT, NOR và XNOR sẽ được triển khai",
        "correct": false
      },
      {
        "id": "D",
        "text": "Chỉ A và B đúng",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_223",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "module mydesign (a, b, c);\n  input c;\n  output reg a, b;\n\n  always @(c) begin\n    if (c == 1'b0) begin\n      b <= ~a;\n      a <= ~(c | b);\n    end else if (c == 1'b1) begin\n      a <= ~(b * c);\n    end\n  end\nendmodule"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 36,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 48",
    "question": "Với giá trị ban đầu a=1, b=2. Kết quả của đoạn chương trình sau là?",
    "options": [
      {
        "id": "A",
        "text": "Tất cả đều sai",
        "correct": false
      },
      {
        "id": "B",
        "text": "a= 2, b=1",
        "correct": false
      },
      {
        "id": "C",
        "text": "a= 1, b=2",
        "correct": false
      },
      {
        "id": "D",
        "text": "Phụ thuộc vào trạng thái của xung clock",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_224",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "always @(posedge clock)\n  a = b;\n\nalways @(posedge clock)\n  b = a;"
      }
    ]
  }
]
);
