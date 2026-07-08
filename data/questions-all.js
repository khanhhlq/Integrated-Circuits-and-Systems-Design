window.QUESTION_BANK = [
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 3,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 1",
    "question": "Quá trình thiết kế vi mạch hiện nay trên cơ sở ASIS, FGPA gồm bao nhiêu tầng?",
    "options": [
      {
        "id": "A",
        "text": "3",
        "correct": false
      },
      {
        "id": "B",
        "text": "5",
        "correct": false
      },
      {
        "id": "C",
        "text": "7",
        "correct": true
      },
      {
        "id": "D",
        "text": "8",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_1",
    "aiNote": "Theo quy trình thiết kế vi mạch số dựa trên ASIC/FPGA, quá trình thiết kế thường được chia thành 7 tầng.\nCác tầng này đi từ mô tả yêu cầu, thiết kế/mô phỏng, tổng hợp, bố trí vật lý đến kiểm tra cuối.\nCách chia tầng giúp quản lý thiết kế từ mức ý tưởng đến mạch có thể triển khai.\nFront-End gồm 3 tầng:\n\nTầng mô tả hệ thống: xác định yêu cầu, viết chương trình hệ thống, chương trình mô phỏng và các thông số.\nTầng mô tả RTL/HDL: mô tả mạch bằng Verilog/VHDL, xây dựng module, testbench và mô phỏng chức năng.\nTầng tổng hợp logic: tổng hợp mô tả RTL thành mạch logic/gate-level, xét ràng buộc tốc độ và timing.\n\nBack-End gồm 4 tầng:\n\nTầng ánh xạ công nghệ: chuyển mạch logic sang thư viện cell hoặc tài nguyên FPGA cụ thể.\nTầng bố trí vật lý / placement: sắp xếp vị trí các cell, khối logic hoặc tài nguyên phần cứng.\nTầng nối dây / routing: tạo đường nối giữa các cell, cổng logic hoặc khối chức năng.\nTầng kiểm tra và hoàn thiện: kiểm tra timing, logic, kết quả cuối cùng; sau đó tạo bitstream với FPGA hoặc layout/tape-out với ASIC."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 3,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 2",
    "question": "Nhiệm vụ của người thiết kế (Front – End) chiếm bao nhiêu tầng trong tổng số?",
    "options": [
      {
        "id": "A",
        "text": "2",
        "correct": false
      },
      {
        "id": "B",
        "text": "3",
        "correct": true
      },
      {
        "id": "C",
        "text": "5",
        "correct": false
      },
      {
        "id": "D",
        "text": "4",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_2",
    "aiNote": "Đáp án B đúng vì: 3.\nFront-End thường gồm mô tả hệ thống, mô tả RTL/HDL và tổng hợp logic.\nVì vậy phần việc của người thiết kế chiếm 3 tầng đầu trong quy trình của đề."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 3,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 3",
    "question": "Nhiệm vụ của nhà sản xuất (Back – End) chiếm bao nhiêu tầng trong tổng số?",
    "options": [
      {
        "id": "A",
        "text": "2",
        "correct": false
      },
      {
        "id": "B",
        "text": "3",
        "correct": false
      },
      {
        "id": "C",
        "text": "5",
        "correct": false
      },
      {
        "id": "D",
        "text": "4",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_3",
    "aiNote": "Trong quy trình thiết kế vi mạch, phần Back-End thuộc nhiệm vụ của nhà sản xuất/thực hiện vật lý.\nBack-End thường gồm các tầng như: tổng hợp logic, placement, routing, kiểm tra/hoàn thiện layout.\nVì vậy nhiệm vụ Back-End chiếm 4 tầng trong tổng quy trình."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 3,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 4",
    "question": "Tầng thứ nhất có nhiệm vụ?",
    "options": [
      {
        "id": "A",
        "text": "Viết chương trình hệ thống, chương trình mô phỏng và các thông số.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Thực hiện mô phỏng và đánh giá",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tổng hợp các thành phần như: chương trình, các ràng buộc thời gian liên quan đến tốc độ xử lý, xác định vị trí các ô thành phần.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Đi dây tự động cho hệ thống.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_4",
    "aiNote": "Đáp án A đúng vì: Viết chương trình hệ thống, chương trình mô phỏng và các thông số.\nCâu hỏi thuộc quy trình thiết kế vi mạch từ mô tả, mô phỏng, tổng hợp đến bố trí và kiểm tra.\nPhương án đúng khớp với nhiệm vụ của tầng được hỏi trong quy trình."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 3,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 5",
    "question": "Tầng thứ hai có nhiệm vụ?",
    "options": [
      {
        "id": "A",
        "text": "Viết chương trình hệ thống, chương trình mô phỏng và các thông số.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Thực hiện mô phỏng và đánh giá",
        "correct": true
      },
      {
        "id": "C",
        "text": "Tổng hợp các thành phần như: chương trình, các ràng buộc thời gian liên quan đến tốc độ xử lý, xác định vị trí các ô thành phần.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Đi dây tự động cho hệ thống.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_5",
    "aiNote": "Đáp án B đúng vì: Thực hiện mô phỏng và đánh giá.\nCâu hỏi thuộc quy trình thiết kế vi mạch từ mô tả, mô phỏng, tổng hợp đến bố trí và kiểm tra.\nPhương án đúng khớp với nhiệm vụ của tầng được hỏi trong quy trình."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 3,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 6",
    "question": "Tầng thứ ba có nhiệm vụ?",
    "options": [
      {
        "id": "A",
        "text": "Viết chương trình hệ thống, chương trình mô phỏng và các thông số.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Thực hiện mô phỏng và đánh giá",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tổng hợp các thành phần như: chương trình, các ràng buộc thời gian liên quan đến tốc độ xử lý, xác định vị trí các ô thành phần.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Đi dây tự động cho hệ thống.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_6",
    "aiNote": "Đáp án C đúng vì: Tổng hợp các thành phần như: chương trình, các ràng buộc thời gian liên quan đến tốc độ xử lý, xác định vị trí các ô..\nCâu hỏi thuộc quy trình thiết kế vi mạch từ mô tả, mô phỏng, tổng hợp đến bố trí và kiểm tra.\nPhương án đúng khớp với nhiệm vụ của tầng được hỏi trong quy trình."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 3,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 7",
    "question": "Tầng thứ tư có nhiệm vụ?",
    "options": [
      {
        "id": "A",
        "text": "Xác định bố cục ban đầu trước khi phân tích các yếu tố thời gian.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Đi dây tự động cho hệ thống.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tổng hợp các thành phần như: chương trình, các ràng buộc thời gian liên quan đến tốc độ xử lý, xác định vị trí các ô thành phần.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Xác định bố cục cuối cùng sau khi đã phân tích các yếu tố thời gian.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_7",
    "aiNote": "Đáp án A đúng vì: Xác định bố cục ban đầu trước khi phân tích các yếu tố thời gian.\nCâu hỏi thuộc quy trình thiết kế vi mạch từ mô tả, mô phỏng, tổng hợp đến bố trí và kiểm tra.\nPhương án đúng khớp với nhiệm vụ của tầng được hỏi trong quy trình."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 4,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 8",
    "question": "Tầng thứ năm có nhiệm vụ?",
    "options": [
      {
        "id": "A",
        "text": "Xác định bố cục ban đầu trước khi phân tích các yếu tố thời gian.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đi dây tự động cho hệ thống.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Kiểm tra các hoạt động logic và kết quả cuối cùng.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Xác định bố cục cuối cùng sau khi đã phân tích các yếu tố thời gian.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_8",
    "aiNote": "Đáp án B đúng vì: Đi dây tự động cho hệ thống.\nCâu hỏi thuộc quy trình thiết kế vi mạch từ mô tả, mô phỏng, tổng hợp đến bố trí và kiểm tra.\nPhương án đúng khớp với nhiệm vụ của tầng được hỏi trong quy trình."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 4,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 9",
    "question": "Tầng thứ sáu có nhiệm vụ?",
    "options": [
      {
        "id": "A",
        "text": "Xác định bố cục ban đầu trước khi phân tích các yếu tố thời gian.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đi dây tự động cho hệ thống.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Kiểm tra các hoạt động logic và kết quả cuối cùng.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Xác định bố cục cuối cùng sau khi đã phân tích các yếu tố thời gian.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_9",
    "aiNote": "Tầng thứ sáu thuộc phần Back-End trong quy trình thiết kế vi mạch.\nSau khi đã bố trí ban đầu và phân tích timing, hệ thống cần xác định lại bố cục cuối cùng để đảm bảo yêu cầu thời gian.\nĐây là bước hoàn thiện vị trí/kết nối vật lý trước khi kiểm tra cuối.\nA là bố cục ban đầu, B là đi dây tự động, còn C nghiêng về bước kiểm tra sau cùng."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 4,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 10",
    "question": "Tầng thứ bảy có nhiệm vụ?",
    "options": [
      {
        "id": "A",
        "text": "Xác định bố cục ban đầu trước khi phân tích các yếu tố thời gian.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đi dây tự động cho hệ thống.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Kiểm tra các hoạt động logic và kết quả cuối cùng.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Xác định bố cục cuối cùng sau khi đã phân tích các yếu tố thời gian.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_10",
    "aiNote": "Tầng thứ bảy là tầng kiểm tra/đánh giá cuối trong quy trình thiết kế.\nNhiệm vụ của tầng này là xác nhận mạch hoạt động đúng về logic sau các bước thiết kế trước đó.\nĐồng thời kiểm tra kết quả cuối cùng trước khi triển khai/chế tạo hoặc nạp xuống FPGA.\nA và D liên quan đến bố cục, B là đi dây tự động, không phải nhiệm vụ tầng cuối."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 4,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 11",
    "question": "Tầng thứ nhất gồm mấy công đoạn:",
    "options": [
      {
        "id": "A",
        "text": "2",
        "correct": false
      },
      {
        "id": "B",
        "text": "3",
        "correct": true
      },
      {
        "id": "C",
        "text": "4",
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
    "id": "main_11",
    "aiNote": "Theo quy trình trong đề, tầng thứ nhất được chia thành 3 công đoạn.\nĐây là tầng đầu của quá trình thiết kế, thường liên quan đến việc xác định yêu cầu và mô tả ban đầu của hệ thống.\nTầng thứ nhất gồm 3 công đoạn:\nViết chương trình hệ thống.\nViết chương trình mô phỏng.\nXác định/khai báo các thông số của hệ thống."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 4,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 12",
    "question": "Tầng thứ ba gồm mấy công đoạn:",
    "options": [
      {
        "id": "A",
        "text": "2",
        "correct": false
      },
      {
        "id": "B",
        "text": "3",
        "correct": true
      },
      {
        "id": "C",
        "text": "4",
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
    "id": "main_12",
    "aiNote": "Tầng thứ ba là tầng tổng hợp trong quy trình thiết kế.\nNó gồm 3 công đoạn chính: tổng hợp chương trình/mô tả thiết kế, xử lý ràng buộc thời gian liên quan tốc độ xử lý, và xác định/sắp xếp vị trí các ô thành phần.\nVì có đủ 3 phần việc này nên chọn B. 3.\nHiểu ngắn gọn: tầng 3 biến mô tả thiết kế thành cấu trúc phần cứng có xét timing và vị trí"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 4,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 13",
    "question": "Tầng thứ sáu gồm mấy công đoạn:",
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
        "text": "1",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_13",
    "aiNote": "Đáp án A đúng vì tầng thứ sáu gồm 2 công đoạn.\nHai công đoạn đó là: kiểm tra các hoạt động logic của hệ thống và kiểm tra kết quả cuối cùng sau thiết kế/tổng hợp.\nĐây là bước thuộc giai đoạn kiểm tra, nhằm xác nhận mạch hoạt động đúng trước khi hoàn thiện.\nCác đáp án 3, 4, 1 không khớp với số công đoạn của tầng thứ sáu trong quy trình."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 4,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 14",
    "question": "Tầng thứ sáu gồm mấy công đoạn:",
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
        "text": "1",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_14",
    "aiNote": "Theo dữ liệu của đề, tầng thứ sáu trong quy trình thiết kế gồm 2 công đoạn.\nTầng này thường thuộc phần xử lý cuối của quy trình, sau các bước thiết kế và tổng hợp trước đó.\nTầng thứ sáu gồm 2 công đoạn:\nKiểm tra các hoạt động logic của hệ thống.\nKiểm tra kết quả cuối cùng sau khi thiết kế/tổng hợp."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 4,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 15",
    "question": "Ở tầng thứ bảy, sau khi kiểm tra tính logic của hệ thống, đến bước cuối cùng tổng hợp file tapeout. Định nghĩa nào sau đây là đúng với file tapeout?",
    "options": [
      {
        "id": "A",
        "text": "Là file chứa đựng các quy tắc thiết kế được quy ước trước giữa hai bên.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Là kết quả cuối cùng của quá trình thiết kế hoặc dưới dạng PCB trước khi sản xuất.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Là kết quả thu được thì các hoạt động đánh giá logic và chú thích.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả ba phương án trên.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_15",
    "aiNote": "Đáp án B đúng vì: Là kết quả cuối cùng của quá trình thiết kế hoặc dưới dạng PCB trước khi sản xuất.\nTapeout là dữ liệu/kết quả cuối cùng được chuyển sang sản xuất chip hoặc triển khai vật lý.\nNó đánh dấu việc thiết kế đã hoàn tất và sẵn sàng cho bước chế tạo/đưa ra sản phẩm."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 5,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 16",
    "question": "Các công việc được thực hiện ở bước Front – End là?",
    "options": [
      {
        "id": "A",
        "text": "Chương trình mô tả phần cứng",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mô phỏng",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tổng hợp",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả ba phương án đều đúng.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_16",
    "aiNote": "Bước Front-End tập trung vào phần thiết kế mức logic/chức năng trước khi đi vào bố trí vật lý.\nCác công việc gồm: viết chương trình mô tả phần cứng bằng Verilog/VHDL.\nSau đó thực hiện mô phỏng để kiểm tra chức năng thiết kế.\nTiếp theo là tổng hợp để chuyển mô tả HDL thành mạch logic/gate-level."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 5,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 17",
    "question": "Các công việc được thực hiện ở bước Back – End là?",
    "options": [
      {
        "id": "A",
        "text": "Sắp xếp bố cục và đi dây.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Phân tích thời gian và kiểm tra hoạt động.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A, B đều sai.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Phương án C sai.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_17",
    "aiNote": "Đáp án D đúng vì: Phương án C sai.\nBack-End tập trung vào bố trí vật lý, đi dây, phân tích timing và kiểm tra kết quả cuối.\nCác bước này diễn ra sau khi thiết kế logic đã được mô tả/tổng hợp."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 5,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 18",
    "question": "Những đặc điểm nào là hạn chế của mạch rời rạc so với mạch tích hợp?",
    "options": [
      {
        "id": "A",
        "text": "Tiêu tốn điện năng, giới hạn các ứng dụng.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Diện tích lớn, tốc độ vừa phải.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A, B đều sai.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Phương án C sai.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_18",
    "aiNote": "Mạch rời rạc dùng nhiều linh kiện riêng lẻ nên thường tốn diện tích, dây nối nhiều và tốc độ không cao bằng mạch tích hợp.\nNó cũng có thể tiêu tốn điện năng hơn và bị giới hạn khi thiết kế hệ thống lớn, phức tạp.\nVì vậy A và B đều nêu đúng hạn chế của mạch rời rạc.\nC nói “A, B đều sai” nên C sai, do đó chọn D."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 5,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 19",
    "question": "Những đặc điểm nào là ưu điểm của mạch tích hợp so với mạch rời rạc.",
    "options": [
      {
        "id": "A",
        "text": "Khả năng ứng dụng cao, tiêu thụ nguồn thấp.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Diện tích nhỏ, tốc độ xử lý cao.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A, B đều đúng.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Phương án C sai.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_19",
    "aiNote": "Đáp án C đúng vì: Cả A, B đều đúng.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 5,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 20",
    "question": "Bóng bán dẫn đầu tiên khởi đầu kỷ nguyên transistor ra đời vào năm nào?",
    "options": [
      {
        "id": "A",
        "text": "1940",
        "correct": false
      },
      {
        "id": "B",
        "text": "1945",
        "correct": false
      },
      {
        "id": "C",
        "text": "1947",
        "correct": true
      },
      {
        "id": "D",
        "text": "2003",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_20",
    "aiNote": "Đáp án C đúng vì transistor đầu tiên được công bố vào năm 1947 tại Bell Labs.\nĐây là mốc mở đầu kỷ nguyên linh kiện bán dẫn transistor.\nCác năm khác không phải mốc ra đời transistor đầu tiên."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 5,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 21",
    "question": "Bóng bán dẫn tiếp giáp đầu tiên được sản xuất hàng loạt vào năm nào?",
    "options": [
      {
        "id": "A",
        "text": "1940",
        "correct": false
      },
      {
        "id": "B",
        "text": "1945",
        "correct": false
      },
      {
        "id": "C",
        "text": "1947",
        "correct": false
      },
      {
        "id": "D",
        "text": "1951",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_21",
    "aiNote": "Bóng bán dẫn được phát minh lần đầu vào năm 1947, nhưng đó chưa phải là mốc sản xuất hàng loạt.\nBóng bán dẫn tiếp giáp sau đó được phát triển và bắt đầu được sản xuất hàng loạt vào khoảng 1951.\nVì câu hỏi hỏi “sản xuất hàng loạt”, không phải “phát minh”, nên chọn 1951."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 5,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 22",
    "question": "Phát biểu định luật Moore về sự phát triển mật độ tích hợp của transistor.",
    "options": [
      {
        "id": "A",
        "text": "Số lượng transistor được tăng lên gấp đôi mỗi 18 tháng.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Kích thước của mỗi mạch tích hợp được giảm đi phân nửa sau mỗi 18 tháng.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Số lượng transistor được tăng lên gấp đôi mỗi 2 năm.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A và B đều đúng.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_22",
    "aiNote": "Đáp án D đúng vì: Cả A và B đều đúng.\nĐịnh luật Moore thường phát biểu rằng mật độ/số transistor trên chip tăng rất nhanh theo thời gian, thường xấp xỉ gấp đôi sau khoảng 18-24 tháng.\nTrong phạm vi đề, phương án được chọn mô tả đúng xu hướng tăng mật độ tích hợp."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 6,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 23",
    "question": "Vi xử lý Intel 4004 ra đời đầu tiên vào năm 1971 với số lượng transistor và tốc độ xử lý đạt được là bao nhiêu?",
    "options": [
      {
        "id": "A",
        "text": "2300 transistor – 1GHz.",
        "correct": false
      },
      {
        "id": "B",
        "text": "2300 transistor – 1MHz.",
        "correct": true
      },
      {
        "id": "C",
        "text": "140 triệu transistor – 1MHz.",
        "correct": false
      },
      {
        "id": "D",
        "text": "2300 triệu transictor – 1MHz.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_23",
    "note": "Nhãn đáp án bị trùng trong PDF nên đã chuẩn hóa lại thứ tự A/B/C/D.",
    "aiNote": "Đáp án B đúng vì: 2300 transistor – 1MHz.\nIntel 4004 ra đời năm 1971 và thường được nêu với khoảng 2300 transistor.\nTốc độ xung nhịp nằm cỡ MHz, nên phương án 2300 transistor - 1 MHz phù hợp với dữ liệu đề."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 6,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 24",
    "question": "Công nghệ SSI với số lượng transistor là?",
    "options": [
      {
        "id": "A",
        "text": "10",
        "correct": true
      },
      {
        "id": "B",
        "text": "100",
        "correct": false
      },
      {
        "id": "C",
        "text": "1000",
        "correct": false
      },
      {
        "id": "D",
        "text": "10.000",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_24",
    "aiNote": "Đáp án A đúng vì: 10.\nSSI là Small Scale Integration, mức tích hợp nhỏ.\nTrong bảng phân loại của đề, SSI ứng với khoảng 10 transistor/cổng phần tử."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 6,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 25",
    "question": "Công nghệ MSI với số lượng transistor là?",
    "options": [
      {
        "id": "A",
        "text": "10",
        "correct": false
      },
      {
        "id": "B",
        "text": "100",
        "correct": false
      },
      {
        "id": "C",
        "text": "1000",
        "correct": true
      },
      {
        "id": "D",
        "text": "10.000",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_25",
    "aiNote": "MSI là viết tắt của Medium Scale Integration, tức công nghệ tích hợp quy mô trung bình.\nTrong phân loại mức độ tích hợp IC, MSI thường có số transistor ở mức khoảng hàng trăm đến 1000.\nSo với SSI thì MSI tích hợp nhiều phần tử hơn, nhưng vẫn thấp hơn LSI.\nVì vậy trong các lựa chọn, 1000 là đáp án phù hợp nhất."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 6,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 26",
    "question": "Công nghệ LSI với số lượng transistor là?",
    "options": [
      {
        "id": "A",
        "text": "10",
        "correct": false
      },
      {
        "id": "B",
        "text": "100",
        "correct": false
      },
      {
        "id": "C",
        "text": "1000",
        "correct": false
      },
      {
        "id": "D",
        "text": "10.000",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_26",
    "aiNote": "LSI là viết tắt của Large Scale Integration, tức công nghệ tích hợp quy mô lớn.\nTrong phân loại mức độ tích hợp, LSI thường ứng với số transistor ở mức hàng nghìn đến khoảng 10.000.\nVì vậy trong các lựa chọn đã cho, 10.000 là đáp án phù hợp nhất."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 6,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 27",
    "question": "Công nghệ VLSI với số lượng transistor là?",
    "options": [
      {
        "id": "A",
        "text": "10",
        "correct": false
      },
      {
        "id": "B",
        "text": "100",
        "correct": false
      },
      {
        "id": "C",
        "text": "10.000",
        "correct": false
      },
      {
        "id": "D",
        "text": ">10.000",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_27",
    "aiNote": "Đáp án D đúng vì: >10.000.\nCâu hỏi kiểm tra phân loại mức độ tích hợp IC theo số lượng transistor.\nVLSI là mức rất lớn nên nằm trên LSI, thường lớn hơn 10.000 transistor theo bảng của đề."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 6,
    "chapter": "CHƯƠNG 1: GIỚI THIỆU",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 28",
    "question": "Quá trình sản xuất IC bao gồm?",
    "options": [
      {
        "id": "A",
        "text": "Silic -> Silic wafer -> Patterned Silicon Wafer -> Unpackaged Die -> Packaged Die -> Test.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Silic -> Silic wafer -> Unpackaged Die -> Patterned Silicon Wafer -> Packaged Die -> Test.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Silic -> Unpackaged Die  -> Silic wafer -> Packaged Die -> Patterned Silicon Wafer -> Test.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Silic -> Unpackaged Die -> Silic wafer -> Patterned Silicon Wafer -> Packaged Die -> Test.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_28",
    "aiNote": "Đáp án A đúng vì: Silic -> Silic wafer -> Patterned Silicon Wafer -> Unpackaged Die -> Packaged Die -> Test.\nQuy trình sản xuất đi từ silicon thô, tạo wafer, tạo mẫu mạch trên wafer, tách die, đóng gói rồi kiểm tra.\nThứ tự này phản ánh đúng dòng chế tạo IC từ vật liệu đến chip hoàn chỉnh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 7,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 1",
    "question": "IC số gồm hai nền tảng lớn nào?",
    "options": [
      {
        "id": "A",
        "text": "FGPA và ASIC",
        "correct": false
      },
      {
        "id": "B",
        "text": "PLDs và ASIC",
        "correct": true
      },
      {
        "id": "C",
        "text": "PLDs và FGPA",
        "correct": false
      },
      {
        "id": "D",
        "text": "ASIC và SPLD",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_29",
    "aiNote": "IC số thường chia thành hai nền tảng lớn: ASIC và PLDs.\nASIC là vi mạch thiết kế chuyên dụng, tối ưu cho một ứng dụng cụ thể.\nPLDs là nhóm vi mạch logic lập trình được, bao gồm SPLD, CPLD, FPGA.\nA sai vì FPGA chỉ là một loại thuộc PLDs, không ngang cấp với ASIC trong phân loại lớn."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 7,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 2",
    "question": "Các thiết bị FGPA thuộc nền tảng nào?",
    "options": [
      {
        "id": "A",
        "text": "PLDs",
        "correct": true
      },
      {
        "id": "B",
        "text": "ASIC",
        "correct": false
      },
      {
        "id": "C",
        "text": "SPLD",
        "correct": false
      },
      {
        "id": "D",
        "text": "Full Custom",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_30",
    "aiNote": "Đáp án A đúng vì: PLDs.\nFPGA thuộc nhóm PLD vì người dùng có thể lập trình/cấu hình chức năng logic sau khi chế tạo.\nASIC là mạch chuyên dụng cố định nên không cùng nhóm với FPGA."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 7,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 3",
    "question": "PLD viết tắt cho?",
    "options": [
      {
        "id": "A",
        "text": "Programmable Logic Devices",
        "correct": true
      },
      {
        "id": "B",
        "text": "Polyester floor-standing enclosure",
        "correct": false
      },
      {
        "id": "C",
        "text": "Programmble Lower Divices",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả 3 đều sai",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_31",
    "aiNote": "Đáp án A đúng vì: Programmable Logic Devices.\nPLD là viết tắt của Programmable Logic Device, tức thiết bị logic lập trình được.\nTên này chỉ nhóm vi mạch có thể cấu hình logic sau khi sản xuất."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 7,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 4",
    "question": "ASIC viết tắt cho?",
    "options": [
      {
        "id": "A",
        "text": "Application-Specific Integrated Circuit",
        "correct": true
      },
      {
        "id": "B",
        "text": "Amplication – Semiconductor Integrated Circuit",
        "correct": false
      },
      {
        "id": "C",
        "text": "Access – Synthesis Intergrated Chip",
        "correct": false
      },
      {
        "id": "D",
        "text": "All Synthesis Intergrated System",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_32",
    "aiNote": "Đáp án A đúng vì: Application-Specific Integrated Circuit.\nASIC là mạch tích hợp chuyên dụng cho một ứng dụng cụ thể.\nNó tối ưu hơn FPGA nhưng kém linh hoạt vì không cấu hình lại như FPGA."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 7,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 5",
    "question": "FGPA viết tắt cho?",
    "options": [
      {
        "id": "A",
        "text": "Family Group Programmble Accessor",
        "correct": false
      },
      {
        "id": "B",
        "text": "Found Gate Process Amplication",
        "correct": false
      },
      {
        "id": "C",
        "text": "Field Programmable Gate Array",
        "correct": true
      },
      {
        "id": "D",
        "text": "Fet Gate Process Application.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_33",
    "aiNote": "Đáp án C đúng vì: Field Programmable Gate Array.\nFPGA hiện thực logic bằng tài nguyên lập trình được như LUT, CLB và mạng nối cấu hình.\nVì vậy đáp án chọn khớp với bản chất cấu trúc FPGA."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 7,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 6",
    "question": "Nền tảng các thiết bị lập trình được PLD bao gồm:",
    "options": [
      {
        "id": "A",
        "text": "SPLD, CPLD và FGPA",
        "correct": true
      },
      {
        "id": "B",
        "text": "FGPA và ASIC",
        "correct": false
      },
      {
        "id": "C",
        "text": "SPLD và CPLD",
        "correct": false
      },
      {
        "id": "D",
        "text": "Semi – Custom và Full – Custom",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_34",
    "aiNote": "Đáp án A đúng vì PLD gồm các nhóm thiết bị logic lập trình được như SPLD, CPLD và FPGA.\nSPLD là loại đơn giản, CPLD phức tạp hơn, FPGA có tài nguyên LUT/CLB lớn.\nASIC không thuộc PLD vì được chế tạo chuyên dụng, không cấu hình lại như FPGA."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 7,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 7",
    "question": "Nền tảng các mạch tích hợp với một ứng dụng cụ thể bao gồm:",
    "options": [
      {
        "id": "A",
        "text": "SPLD, CPLD và FGPA",
        "correct": false
      },
      {
        "id": "B",
        "text": "FGPA và ASIC",
        "correct": false
      },
      {
        "id": "C",
        "text": "SPLD và CPLD",
        "correct": false
      },
      {
        "id": "D",
        "text": "Semi – Custom và Full – Custom",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_35",
    "aiNote": "Đáp án D đúng vì: Semi – Custom và Full – Custom.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 8,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 8",
    "question": "Ưu điểm của FGPA là?",
    "options": [
      {
        "id": "A",
        "text": "Giá thành rẻ với số lượng nhỏ.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Rủi ro tài chính thấp hơn.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A và B đều đúng",
        "correct": true
      },
      {
        "id": "D",
        "text": "Phương án C sai.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_36",
    "aiNote": "FPGA có ưu điểm là không cần chi phí chế tạo chip riêng như ASIC, nên phù hợp với số lượng nhỏ.\nVì không phải đầu tư mặt nạ/quy trình sản xuất riêng, rủi ro tài chính thấp hơn.\nNgười thiết kế có thể nạp lại cấu hình nhiều lần để sửa lỗi hoặc nâng cấp.\nDo đó cả A và B đều là ưu điểm của FPGA."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 8,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 9",
    "question": "Nhược điểm của FGPA là?",
    "options": [
      {
        "id": "A",
        "text": "Tốc độ chậm hơn ASIC từ 2 đến 3 lần.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Tiêu thụ điện năng lớn, sử dụng nhiều transistor trên mỗi đơn vị logic.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Diện tích lớn từ 20 đến 30 lần so với ASIC.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả ba phương án không sai.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_37",
    "aiNote": "Đáp án D đúng vì: Cả ba phương án không sai.\nFPGA linh hoạt nhưng thường chậm hơn ASIC, tốn diện tích và công suất hơn do tài nguyên lập trình được.\nVì các hạn chế trong các phương án đều đúng nên chọn phương án tổng hợp."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 8,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 10",
    "question": "Ưu điểm của công nghệ ASIC là?",
    "options": [
      {
        "id": "A",
        "text": "Tốc độ xử lý nhanh, tiêu thụ điện năng nhỏ.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Giá thành rẻ nếu sản xuất với số lượng lớn.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Sử dụng ít transistor hơn trên mỗi đơn vị logic.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả ba phương án trên không sai.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_38",
    "aiNote": "Đáp án D đúng vì: Cả ba phương án trên không sai.\nASIC được thiết kế chuyên dụng nên có hiệu suất cao, tốc độ tốt và tiêu thụ công suất thấp.\nKhi sản xuất số lượng lớn, chi phí trên mỗi chip có thể rẻ hơn FPGA."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 8,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 11",
    "question": "Nhược điểm của ASIC là?",
    "options": [
      {
        "id": "A",
        "text": "Ứng dụng cố định, không thể lập trình.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Thời gian chế tạo rất lâu đến vài tháng.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Chi phí kỹ thuật và các công cụ thiết kế rất đắt.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả ba phương án trên không thể sai.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_39",
    "aiNote": "Đáp án D đúng vì: Cả ba phương án trên không thể sai.\nASIC cố định sau khi chế tạo, thời gian phát triển lâu và chi phí thiết kế/mặt nạ cao.\nVì các ý trong đáp án đều là hạn chế của ASIC nên chọn phương án tổng hợp."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 8,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 12",
    "question": "Những đặc trưng nào là của công nghệ ASIC.",
    "options": [
      {
        "id": "A",
        "text": "Hiệu suất cao, tiêu thụ điện năng thấp, giá thành rẻ với số lượng lớn.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Sẳn có, chi phí phát triển thấp, thời gian tiếp thị ngắn, khả năng cấu hình lại.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A và B đều đúng.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A và B đều sai.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_40",
    "aiNote": "Đáp án A đúng vì: Hiệu suất cao, tiêu thụ điện năng thấp, giá thành rẻ với số lượng lớn.\nASIC được thiết kế chuyên dụng nên có hiệu suất cao, tốc độ tốt và tiêu thụ công suất thấp.\nKhi sản xuất số lượng lớn, chi phí trên mỗi chip có thể rẻ hơn FPGA."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 8,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 13",
    "question": "Những đặc trưng nào là của công nghệ FGPA",
    "options": [
      {
        "id": "A",
        "text": "Hiệu suất cao, tiêu thụ điện năng thấp, giá thành rẻ với số lượng lớn.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Sẳn có, chi phí phát triển thấp, thời gian tiếp thị ngắn, khả năng cấu hình lại.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Cả A và B đều đúng.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A và B đều sai.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_41",
    "aiNote": "FPGA có ưu điểm là có sẵn, có thể nạp chương trình và kiểm thử nhanh.\nChi phí phát triển ban đầu thấp hơn ASIC vì không cần chế tạo chip riêng.\nFPGA cũng có khả năng cấu hình lại, phù hợp thử nghiệm và phát triển nhanh sản phẩm.\nĐáp án A phù hợp hơn với ASIC khi sản xuất số lượng lớn."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 9,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 14",
    "question": "Công nghệ nào không có thiết kế bố trí vật lý?",
    "options": [
      {
        "id": "A",
        "text": "FGPA",
        "correct": true
      },
      {
        "id": "B",
        "text": "ASIC",
        "correct": false
      },
      {
        "id": "C",
        "text": "SPLD",
        "correct": false
      },
      {
        "id": "D",
        "text": "CPLD",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_42",
    "aiNote": "FPGA là vi mạch đã được chế tạo sẵn cấu trúc vật lý gồm CLB, LUT, Flip-Flop và mạng nối dây lập trình được.\nNgười thiết kế chỉ cần mô tả mạch bằng HDL rồi công cụ sẽ ánh xạ vào tài nguyên có sẵn, không phải tự thiết kế layout vật lý như ASIC.\nASIC cần thiết kế bố trí vật lý như placement, routing, layout.\nSPLD/CPLD cũng có cấu trúc lập trình được nhưng trong phạm vi đề, đáp án cần chọn là FPGA."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 10,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 15",
    "question": "Công nghệ nào sau khi thiết kế được kết thúc bởi một dòng bit được dùng để cấu hình các thiết bị?",
    "options": [
      {
        "id": "A",
        "text": "FGPA",
        "correct": true
      },
      {
        "id": "B",
        "text": "ASIC",
        "correct": false
      },
      {
        "id": "C",
        "text": "SPLD",
        "correct": false
      },
      {
        "id": "D",
        "text": "CPLD",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_43",
    "aiNote": "Đáp án A đúng vì thiết kế FPGA kết thúc bằng bitstream dùng để cấu hình chip.\nBitstream quyết định LUT, FF và các kết nối lập trình bên trong FPGA.\nASIC kết thúc bằng dữ liệu layout/tapeout, không phải dòng bit cấu hình."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 10,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 16",
    "question": "SPLD viết tắt cho?",
    "options": [
      {
        "id": "A",
        "text": "Simple Programmable Logic Device",
        "correct": true
      },
      {
        "id": "B",
        "text": "Complex Programmable Logic Device",
        "correct": false
      },
      {
        "id": "C",
        "text": "Synthesis Programmable Logic Device",
        "correct": false
      },
      {
        "id": "D",
        "text": "Software Programmable Logic Device",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_44",
    "aiNote": "Đáp án A đúng vì: Simple Programmable Logic Device.\nPLD là viết tắt của Programmable Logic Device, tức thiết bị logic lập trình được.\nTên này chỉ nhóm vi mạch có thể cấu hình logic sau khi sản xuất."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 10,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 17",
    "question": "CPLD viết tắt cho?",
    "options": [
      {
        "id": "A",
        "text": "Simple Programmable Logic Device",
        "correct": false
      },
      {
        "id": "B",
        "text": "Complex Programmable Logic Device",
        "correct": true
      },
      {
        "id": "C",
        "text": "Synthesis Programmable Logic Device",
        "correct": false
      },
      {
        "id": "D",
        "text": "Software Programmable Logic Device",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_45",
    "aiNote": "CPLD là viết tắt của Complex Programmable Logic Device.\nĐây là thiết bị logic lập trình được có cấu trúc phức tạp hơn SPLD.\nCPLD thường gồm nhiều khối logic kiểu PAL/GAL liên kết với nhau bằng mạng nối dây lập trình được.\nA là SPLD, không phải CPLD."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 10,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 18",
    "question": "Các mạch tích hợp PAL có đặc điểm?",
    "options": [
      {
        "id": "A",
        "text": "Sử dụng một mảng các tiếp điểm (switch,...), chúng được lặp trình bằng cách tác động vào các tiếp điểm.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Sử dụng các mảng EEPROM để lưu trữ các tiếp điểm này thay switch.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Có khả năng lập trình và xóa để lập trình lại.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Phát triển vượt bậc hơn so với mạch PLD.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_46",
    "aiNote": "Đáp án A đúng vì: Sử dụng một mảng các tiếp điểm (switch,..), chúng được lặp trình bằng cách tác động vào các tiếp điểm.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 10,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 19",
    "question": "Các mạch tích hợp GAL có đặc điểm?",
    "options": [
      {
        "id": "A",
        "text": "Sử dụng một mảng các tiếp điểm (switch,...), chúng được lặp trình bằng cách tác động vào các tiếp điểm.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Sử dụng các mảng EEPROM để lưu trữ các tiếp điểm này thay switch.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Có khả năng lập trình và xóa để lập trình lại.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Phát triển vượt bậc hơn so với mạch PLD.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_47",
    "aiNote": "Đáp án B đúng vì: Sử dụng các mảng EEPROM để lưu trữ các tiếp điểm này thay switch.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 10,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 20",
    "question": "Phương pháp thiết lập hàm logic bằng cách nhóm các số 0 ở ngõ ra là?",
    "options": [
      {
        "id": "A",
        "text": "Sum of Product",
        "correct": false
      },
      {
        "id": "B",
        "text": "Product of Sums",
        "correct": true
      },
      {
        "id": "C",
        "text": "Multiply of Sums",
        "correct": false
      },
      {
        "id": "D",
        "text": "Sum of Multiplication",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_48",
    "aiNote": "Đáp án B đúng vì: Product of Sums.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 10,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 21",
    "question": "Phương pháp thiết lập hàm logic bằng cách nhóm các số 1 ở ngõ ra là?",
    "options": [
      {
        "id": "A",
        "text": "Sum of Product",
        "correct": true
      },
      {
        "id": "B",
        "text": "Product of Sums",
        "correct": false
      },
      {
        "id": "C",
        "text": "Multiply of Sums",
        "correct": false
      },
      {
        "id": "D",
        "text": "Sum of Multiplication",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_49",
    "aiNote": "Đáp án A đúng vì: Sum of Product.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 11,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 22",
    "question": "Trong phương pháp SOP, các phần tử được nhân lại với nhau để ngõ ra bằng 1 được gọi là?",
    "options": [
      {
        "id": "A",
        "text": "Minterms",
        "correct": true
      },
      {
        "id": "B",
        "text": "Maxterms",
        "correct": false
      },
      {
        "id": "C",
        "text": "Sumterms",
        "correct": false
      },
      {
        "id": "D",
        "text": "Parterms",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_50",
    "aiNote": "Trong phương pháp SOP (Sum of Products), hàm logic được viết dưới dạng tổng của các tích.\nMỗi tích các biến làm cho ngõ ra bằng 1 được gọi là minterm.\nNói cách khác, minterm ứng với từng tổ hợp đầu vào mà hàm nhận giá trị 1.\nMaxterm dùng trong phương pháp POS, ứng với các tổ hợp làm ngõ ra bằng 0."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 11,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 23",
    "question": "Trong phương pháp POS, các phần tử được cộng lại với nhau để ngõ ra bằng 0 được gọi là?",
    "options": [
      {
        "id": "A",
        "text": "Minterms",
        "correct": false
      },
      {
        "id": "B",
        "text": "Maxterms",
        "correct": true
      },
      {
        "id": "C",
        "text": "Product-terms",
        "correct": false
      },
      {
        "id": "D",
        "text": "Parterms",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_51",
    "aiNote": "Trong phương pháp POS (Product of Sums), hàm logic được viết dưới dạng tích của các tổng.\nCác phần tử dạng tổng được xây dựng tại những tổ hợp làm ngõ ra bằng 0 gọi là Maxterms."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 11,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 24",
    "question": "Trong nhóm vi mạch SPLD (Simple Programmable Logic Device), bao gồm:",
    "options": [
      {
        "id": "A",
        "text": "PAL, GAL",
        "correct": true
      },
      {
        "id": "B",
        "text": "FGPA, ASIC",
        "correct": false
      },
      {
        "id": "C",
        "text": "PLA, GAL",
        "correct": false
      },
      {
        "id": "D",
        "text": "FGPA, GAL",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_52",
    "aiNote": "PAL và GAL là hai loại vi mạch thuộc nhóm SPLD - thiết bị logic lập trình đơn giản.\nChúng có cấu trúc đơn giản, dùng để thực hiện các hàm logic tổ hợp hoặc tuần tự mức nhỏ.\nFPGA không thuộc SPLD mà thuộc nhóm lập trình phức tạp hơn.\nASIC không phải vi mạch lập trình được theo kiểu SPLD."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 11,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 25",
    "question": "Chọn phương án sai",
    "options": [
      {
        "id": "A",
        "text": "PAL có thể lập trình nhiều lần",
        "correct": true
      },
      {
        "id": "B",
        "text": "GAL có thể lập trình nhiều lần",
        "correct": false
      },
      {
        "id": "C",
        "text": "PAL chỉ có thể lập trình một lần",
        "correct": false
      },
      {
        "id": "D",
        "text": "Chỉ có GAL mới có thể lập trình được",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_53",
    "aiNote": "Đáp án A là phát biểu sai theo dữ liệu đề vì PAL truyền thống thường lập trình một lần.\nGAL dùng EEPROM nên có thể xóa và lập trình lại nhiều lần.\nVì vậy nói PAL có thể lập trình nhiều lần là không đúng trong phạm vi câu hỏi."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 11,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 26",
    "question": "Trong cấu trúc PLA bao gồm bao nhiêu tầng?",
    "options": [
      {
        "id": "A",
        "text": "2",
        "correct": false
      },
      {
        "id": "B",
        "text": "3",
        "correct": true
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
      "B"
    ],
    "type": "single",
    "id": "main_54",
    "aiNote": "Cấu trúc PLA thường gồm 3 tầng chính.\nTầng 1: Tầng ngõ vào/bộ đệm, tạo tín hiệu vào và tín hiệu đảo của nó.\nTầng 2: Mảng AND lập trình được, dùng để tạo các tích hay product-term.\nTầng 3: Mảng OR lập trình được, dùng để cộng các product-term tạo hàm ngõ ra."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 11,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 26",
    "question": "Các tầng trong cấu trúc PLA bao gồm?",
    "options": [
      {
        "id": "A",
        "text": "Đầu vào đảo -> Tầng AND -> Tầng OR",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đầu vào không đảo -> Tầng AND -> Tầng OR",
        "correct": false
      },
      {
        "id": "C",
        "text": "Đầu vào đảo và không đảo -> Tầng AND -> Tầng OR",
        "correct": true
      },
      {
        "id": "D",
        "text": "Đầu vào đảo và không đảo -> Tầng OR -> Tầng AND",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_55",
    "aiNote": "Đáp án C đúng vì PLA có tầng đầu vào tạo cả tín hiệu không đảo và tín hiệu đảo.\nSau đó mảng AND lập trình tạo các product-term.\nCuối cùng mảng OR lập trình cộng các product-term để tạo hàm ngõ ra."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 11,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 27",
    "question": "Tập hợp các SPLD được kết nối với nhau theo mảng có thể lập trình được gọi là?",
    "options": [
      {
        "id": "A",
        "text": "SPLDs",
        "correct": false
      },
      {
        "id": "B",
        "text": "CPLD",
        "correct": true
      },
      {
        "id": "C",
        "text": "FGPA",
        "correct": false
      },
      {
        "id": "D",
        "text": "PLA",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_56",
    "aiNote": "Đáp án B đúng vì: CPLD.\nwire/net biểu diễn đường nối phần cứng và thường nhận giá trị từ assign, cổng hoặc module.\nNó không được gán trực tiếp trong procedural block như reg."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 11,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 28",
    "question": "Trong cấu trúc của mảng lập trình được FGPA bao gồm các khối nào được liên kết với nhau?",
    "options": [
      {
        "id": "A",
        "text": "SPLD",
        "correct": false
      },
      {
        "id": "B",
        "text": "CPLD",
        "correct": false
      },
      {
        "id": "C",
        "text": "CLB",
        "correct": true
      },
      {
        "id": "D",
        "text": "LUT",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_57",
    "aiNote": "Trong FPGA, cấu trúc mảng lập trình được gồm nhiều CLB - Configurable Logic Block.\nCác CLB được liên kết với nhau thông qua hệ thống dây nối lập trình được.\nBên trong CLB thường có LUT, Flip-Flop và mạch chọn để thực hiện hàm logic.\nLUT chỉ là thành phần bên trong CLB, không phải khối liên kết chính của toàn FPGA."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 11,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 29",
    "question": "CLB viết tắt cho?",
    "options": [
      {
        "id": "A",
        "text": "Configurable Logic Block",
        "correct": true
      },
      {
        "id": "B",
        "text": "Câu Lạc Bộ",
        "correct": false
      },
      {
        "id": "C",
        "text": "Confidential Looking Binary",
        "correct": false
      },
      {
        "id": "D",
        "text": "Confuse Logic Basis",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_58",
    "aiNote": "Đáp án A đúng vì: Configurable Logic Block.\nCLB là Configurable Logic Block.\nĐây là khối logic có thể cấu hình trong FPGA, thường chứa LUT, FF và mạch chọn."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 12,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 30",
    "question": "LUT viết tắt cho?",
    "options": [
      {
        "id": "A",
        "text": "Logic Universal Time",
        "correct": false
      },
      {
        "id": "B",
        "text": "Look-Up Table",
        "correct": true
      },
      {
        "id": "C",
        "text": "Logic Unit Taken",
        "correct": false
      },
      {
        "id": "D",
        "text": "Libary Universal Transmit",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_59",
    "aiNote": "Đáp án B đúng vì: Look-Up Table.\nLUT là Look-Up Table.\nNó lưu bảng chân trị để hiện thực hàm logic theo các ngõ vào."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 12,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 31",
    "question": "Các bộ vi xử lý và bộ nhớ thường được thiết kế theo cấu trúc nào của ASIC?",
    "options": [
      {
        "id": "A",
        "text": "FGPA",
        "correct": false
      },
      {
        "id": "B",
        "text": "Semi – Custom",
        "correct": false
      },
      {
        "id": "C",
        "text": "Full – Custom",
        "correct": true
      },
      {
        "id": "D",
        "text": "CLB",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_60",
    "aiNote": "Các bộ vi xử lý và bộ nhớ thường yêu cầu tối ưu rất cao về tốc độ, diện tích và công suất.\nVì vậy chúng thường được thiết kế theo cấu trúc Full-Custom ASIC.\nỞ Full-Custom, người thiết kế can thiệp sâu đến mức transistor/layout để đạt hiệu năng tốt nhất.\nSemi-Custom dùng cell có sẵn nên kém tối ưu hơn Full-Custom."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 12,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 32",
    "question": "Hình ảnh sau thuộc cấu trúc của nhóm vi mạch nào?",
    "options": [
      {
        "id": "A",
        "text": "SPLD",
        "correct": false
      },
      {
        "id": "B",
        "text": "CPLD",
        "correct": true
      },
      {
        "id": "C",
        "text": "FGPA",
        "correct": false
      },
      {
        "id": "D",
        "text": "CLB",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_61",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Hình cấu trúc CPLD - trích đúng câu 32, trang 12",
        "caption": "Hình cấu trúc CPLD - trích đúng câu 32, trang 12"
      }
    ],
    "aiNote": "Hình vẽ có nhiều khối logic dạng LAB/SPLD được nối với nhau qua PIA — Programmable Interconnect Array.\nĐây là đặc trưng của CPLD, gồm nhiều khối logic đơn giản liên kết bằng mạng nối dây lập trình được.\nFPGA thường có cấu trúc mảng nhiều CLB và I/O block phân bố đều hơn.\nCLB chỉ là khối logic con, không phải nhóm vi mạch tổng thể."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 12,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 33",
    "question": "Hình ảnh sau thuộc cấu trúc của nhóm vi mạch nào?",
    "options": [
      {
        "id": "A",
        "text": "SPLD",
        "correct": false
      },
      {
        "id": "B",
        "text": "CPLD",
        "correct": false
      },
      {
        "id": "C",
        "text": "FGPA",
        "correct": true
      },
      {
        "id": "D",
        "text": "CLB",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_62",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Hình cấu trúc FPGA - trích đúng câu 33, trang 12",
        "caption": "Hình cấu trúc FPGA - trích đúng câu 33, trang 12"
      }
    ],
    "aiNote": "Hình cho thấy cấu trúc gồm nhiều CLB được sắp xếp dạng mảng.\nCác CLB được nối với nhau bằng hệ thống programmable interconnect.\nXung quanh còn có các khối I/O block, đúng với cấu trúc tổng quát của FPGA.\nD sai vì CLB chỉ là một khối con bên trong FPGA, không phải toàn bộ nhóm vi mạch."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 12,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 1",
    "question": "Công nghệ IC nào chỉ dùng một loại tế bào cơ bản?",
    "options": [
      {
        "id": "A",
        "text": "FGPA và CPLD",
        "correct": false
      },
      {
        "id": "B",
        "text": "Full Custom ASIC",
        "correct": false
      },
      {
        "id": "C",
        "text": "Gate Array ASIC",
        "correct": true
      },
      {
        "id": "D",
        "text": "Standard Cell ASIC",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_63",
    "aiNote": "Gate Array ASIC được chế tạo sẵn dưới dạng một mảng các tế bào cơ bản giống nhau.\nKhi thiết kế, nhà sản xuất chỉ tùy chỉnh các lớp nối dây để tạo ra mạch mong muốn.\nVì vậy công nghệ này được xem là chỉ dùng một loại tế bào cơ bản."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 12,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 2",
    "question": "Công nghệ nào chế tạo IC lớn mất nhiều thời gian nhất",
    "options": [
      {
        "id": "A",
        "text": "Gate array asic",
        "correct": false
      },
      {
        "id": "B",
        "text": "Full custom asic",
        "correct": true
      },
      {
        "id": "C",
        "text": "Fpga và cpld",
        "correct": false
      },
      {
        "id": "D",
        "text": "Standard cell asic",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_64",
    "aiNote": "Đáp án B đúng vì: Full custom asic.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 12,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 3",
    "question": "Công nghệ nào chế tạo IC có quá trình chế tạo đơn giản nhất:",
    "options": [
      {
        "id": "A",
        "text": "Full custom asic",
        "correct": false
      },
      {
        "id": "B",
        "text": "Gate array asic",
        "correct": true
      },
      {
        "id": "C",
        "text": "Fpga và cpld",
        "correct": false
      },
      {
        "id": "D",
        "text": "Standard cell asic",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_65",
    "aiNote": "Đáp án B đúng vì Gate Array ASIC có quá trình chế tạo đơn giản hơn các loại ASIC khác.\nVới Gate Array, các lớp transistor/cell cơ bản đã được chế tạo sẵn.\nKhi thiết kế, nhà sản xuất chủ yếu chỉ cần tùy chỉnh các lớp nối dây để tạo mạch mong muốn.\nFull-custom ASIC phức tạp nhất vì phải thiết kế sâu đến mức transistor/layout.\nStandard cell ASIC cũng cần placement và routing nhiều cell chuẩn nên phức tạp hơn Gate Array."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 13,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 4",
    "question": "Chọn phát biểu đúng",
    "options": [
      {
        "id": "A",
        "text": "Mảng cổng OR lập trình và mảng cổng AND cố định dùng để tạo hàm SOP.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mảng cổng OR và mảng cổng AND đều cố định dùng để tạo hàm SOP.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Mảng cổng AND và OR đều lập trình tạo hàm SOP.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mảng cổng AND lập trình và mảng cổng OR cố định dùng để tạo hàm SOP.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_66",
    "aiNote": "Trong cấu trúc PAL, hàm logic dạng SOP được tạo bằng các tích trước, rồi cộng các tích lại.\nVì vậy cần mảng AND lập trình được để tạo các product-term theo yêu cầu.\nSau đó các product-term được đưa qua mảng OR cố định để tạo ngõ ra.\nC sai vì AND và OR đều lập trình là đặc trưng của PLA, không phải cấu trúc đang hỏi."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 13,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 5",
    "question": "Tế bào logic của thiết bị nào sử dụng cấu trúc PAL:",
    "options": [
      {
        "id": "A",
        "text": "FPGA",
        "correct": false
      },
      {
        "id": "B",
        "text": "CPLD",
        "correct": true
      },
      {
        "id": "C",
        "text": "PLA",
        "correct": false
      },
      {
        "id": "D",
        "text": "PROM",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_67",
    "aiNote": "Trong CPLD, các khối/tế bào logic thường được xây dựng dựa trên cấu trúc kiểu PAL.\nCấu trúc PAL gồm mảng AND lập trình được và mảng OR cố định, phù hợp để tạo các hàm logic.\nFPGA thường dùng LUT, không phải cấu trúc PAL làm tế bào logic chính.\nPLA và PROM là các loại vi mạch khác, không phải thiết bị có tế bào logic kiểu PAL như CPLD."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 13,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 6",
    "question": "Để đánh giá các công nghệ chế tạo IC thì ta xem xét mối tương quan giữa các thông số:",
    "options": [
      {
        "id": "A",
        "text": "Tài nguyên của chip, số chân của chip, tốc độ của chip, giá thành của chip.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Số chân của chip, tốc độ của chip, giá thành của chip, tài nguyên của chip.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tài nguyên của chip, tốc độ của chip, sức mạnh của chip, giá thành của chip.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Tài nguyên của chip, tốc độ của chip, sức mạnh của chip, số chân của chip.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_68",
    "aiNote": "Đáp án C đúng vì: Tài nguyên của chip, tốc độ của chip, sức mạnh của chip, giá thành của chip.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 13,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 7",
    "question": "Công nghệ nào chế tạo IC ở cấp độ cổng",
    "options": [
      {
        "id": "A",
        "text": "Standard cell asic",
        "correct": true
      },
      {
        "id": "B",
        "text": "Full custom asic",
        "correct": false
      },
      {
        "id": "C",
        "text": "Gate array asic",
        "correct": false
      },
      {
        "id": "D",
        "text": "Fpga và cpld",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_69",
    "aiNote": "Đáp án A đúng vì: Standard cell asic.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 13,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 8",
    "question": "Tế bào logic của thiết bị nào sử dụng cấu trúc LUT:",
    "options": [
      {
        "id": "A",
        "text": "PLA",
        "correct": false
      },
      {
        "id": "B",
        "text": "CPLD",
        "correct": false
      },
      {
        "id": "C",
        "text": "FPGA",
        "correct": true
      },
      {
        "id": "D",
        "text": "PAL",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_70",
    "aiNote": "Đáp án C đúng vì: FPGA.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 13,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 9",
    "question": "Trong CPLD thì",
    "options": [
      {
        "id": "A",
        "text": "Tế bào logic có cấu trúc phức tạp gồm flip flop d, 1 cấu trúc pal và cấu trúc nổi dậy bên trong có khuynh hướng tập trung.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Tế bào logic có cấu trúc phức tạp gồm flip flop d, 1 cấu trúc pal và cấu trúc nối dây bên trong có khuynh hướng phân tán và khá linh hoạt.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tế bào logic có cấu trúc đơn giản gồm flip flop d, 1 cấu trúc pal và cấu trúc nổi dậy bên trong có khuynh hướng tập trung.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Tế bào logic có cấu trúc đơn giản gồm flip flop d, 1 cấu trúc pal và cấu trúc nối dây bên trong có khuynh hướng phân tán và khá linh hoạt.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_71",
    "aiNote": "Trong CPLD, tế bào logic thường có cấu trúc phức tạp hơn SPLD, gồm phần logic kiểu PAL và có thể kèm D Flip-Flop để lưu trạng thái.\nHệ thống nối dây bên trong của CPLD thường có khuynh hướng tập trung, giúp thời gian truyền tín hiệu dễ dự đoán hơn.\nCác đáp án B và D sai vì mô tả kiểu nối dây phân tán, linh hoạt, đặc trưng gần với FPGA hơn."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 13,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 10",
    "question": "Khi so sánh 2 cấu trúc LUT và PAL với 3 ngõ vào thì",
    "options": [
      {
        "id": "A",
        "text": "Cấu trúc lut sử dụng bộ nhớ bằng với cấu trúc pal vì có cùng số mối nối.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Cấu trúc lut sử dụng bộ nhớ nhiều hơn so với cấu trúc pal vì có nhiều mối nối.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cấu trúc lut sử dụng bộ nhớ ít hơn so với cấu trúc pal vì có ít mối nối.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cấu trúc lut sử dụng bộ nhớ rất ít so với cấu trúc pal vì các mối nối cố định.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_72",
    "aiNote": "Đáp án D đúng theo phạm vi đề vì LUT 3 ngõ vào dùng bảng nhớ nhỏ để lưu 8 giá trị đầu ra.\nCấu trúc PAL cần các mối nối lập trình trong mảng AND/OR để tạo tích và tổng.\nVì vậy đề xem LUT dùng ít tài nguyên nối lập trình hơn PAL ở ví dụ 3 ngõ vào.\nCần kiểm tra lại đáp án nếu so sánh theo số transistor thực tế."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 14,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 11",
    "question": "Một đường ngang và một đường dọc của cấu trúc nối dây bên trong có thể lập trình nối tùy ý nhờ:",
    "options": [
      {
        "id": "A",
        "text": "7 transistor chuyển mạch và 7 ô nhớ sram.",
        "correct": false
      },
      {
        "id": "B",
        "text": "6 transistor chuyển mạch và 6 ô nhớ sram.",
        "correct": true
      },
      {
        "id": "C",
        "text": "4 transistor chuyển mạch và 4 ô nhớ sram.",
        "correct": false
      },
      {
        "id": "D",
        "text": "5 transistor chuyển mạch và 5 ô nhớ sram.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_73",
    "aiNote": "Đáp án B đúng theo cấu trúc nối dây lập trình trong tài liệu của đề.\nMột điểm giao giữa đường ngang và đường dọc cần các transistor switch và ô SRAM điều khiển trạng thái nối/ngắt.\nỞ trường hợp này số phần tử được nêu là 6 transistor chuyển mạch và 6 ô nhớ SRAM."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 14,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 12",
    "question": "Khả năng lập trình của thiết bị CLPD là do sử dụng:",
    "options": [
      {
        "id": "A",
        "text": "Các cổng nand",
        "correct": false
      },
      {
        "id": "B",
        "text": "Các switch có điều khiển",
        "correct": true
      },
      {
        "id": "C",
        "text": "Các dây dẫn nối cố định",
        "correct": false
      },
      {
        "id": "D",
        "text": "Các cổng and",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_74",
    "aiNote": "Đáp án B đúng vì khả năng lập trình của CPLD đến từ các switch/kết nối có điều khiển.\nCác switch này quyết định đường tín hiệu nào được nối giữa các khối logic.\nNếu chỉ là dây cố định thì thiết bị sẽ không còn khả năng lập trình linh hoạt."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 14,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 13",
    "question": "Công nghệ nào chế tạo IC ở cấp độ transistor:",
    "options": [
      {
        "id": "A",
        "text": "Standard cell asic",
        "correct": false
      },
      {
        "id": "B",
        "text": "Gate array asic",
        "correct": false
      },
      {
        "id": "C",
        "text": "Fpga và cpld",
        "correct": false
      },
      {
        "id": "D",
        "text": "Full custom asic",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_75",
    "aiNote": "Đáp án D đúng vì: Full custom asic.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 14,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 14",
    "question": "Transistor dùng để lập trình nối dậy thì:",
    "options": [
      {
        "id": "A",
        "text": "Cực d nối với ô nhớ sram.",
        "correct": false
      },
      {
        "id": "B",
        "text": "Cực s nối với ô nhớ sram.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cực d và d đều nối với ô nhớ sram.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cực g nối với ô nhớ sram.",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_76",
    "aiNote": "Trong FPGA/CPLD, transistor dùng để lập trình nối dây thường hoạt động như một công tắc điều khiển.\nÔ nhớ SRAM lưu bit cấu hình để quyết định transistor đó dẫn hay ngắt.\nMuốn điều khiển transistor dẫn/ngắt thì tín hiệu SRAM phải đưa vào cực G - Gate.\nCực D và S là đường dẫn tín hiệu, không phải chân điều khiển chính."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 14,
    "chapter": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 15",
    "question": "Mạch nào là mạch tổ hợp:",
    "options": [
      {
        "id": "A",
        "text": "Flip flop d",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mạch đếm nhị phân 4 bit",
        "correct": false
      },
      {
        "id": "C",
        "text": "Mạch giải mã",
        "correct": true
      },
      {
        "id": "D",
        "text": "Thanh ghi dịch",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_77",
    "aiNote": "Mạch tổ hợp là mạch có ngõ ra phụ thuộc trực tiếp vào giá trị ngõ vào hiện tại, không cần phần tử nhớ.\nMạch giải mã nhận mã nhị phân ở ngõ vào và tạo tín hiệu ngõ ra tương ứng, nên là mạch tổ hợp.\nFlip-Flop D, mạch đếm 4 bit và thanh ghi dịch đều có phần tử nhớ, hoạt động theo clock nên là mạch tuần tự."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 15,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 1",
    "question": "HDL viết tắt cho?",
    "options": [
      {
        "id": "A",
        "text": "Hardware Description Language",
        "correct": true
      },
      {
        "id": "B",
        "text": "High Data Leisure",
        "correct": false
      },
      {
        "id": "C",
        "text": "Hotel Dentination Love",
        "correct": false
      },
      {
        "id": "D",
        "text": "Hidro Detori Long",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_78",
    "aiNote": "Đáp án A đúng vì: Hardware Description Language.\nHDL là Hardware Description Language.\nĐây là ngôn ngữ dùng để mô tả, mô phỏng và tổng hợp phần cứng số."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 15,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 2",
    "question": "Hai ngôn ngữ mô tả phần cứng phổ biến hiện nay là?",
    "options": [
      {
        "id": "A",
        "text": "Verilog HDL",
        "correct": false
      },
      {
        "id": "B",
        "text": "VHDL",
        "correct": false
      },
      {
        "id": "C",
        "text": "CCS",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A và B",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_79",
    "aiNote": "Hai ngôn ngữ mô tả phần cứng phổ biến nhất hiện nay là Verilog HDL và VHDL.\nCả hai đều dùng để mô tả, mô phỏng và tổng hợp mạch số.\nVerilog thường có cú pháp gần giống C, còn VHDL có cú pháp chặt chẽ hơn.\nCCS không phải ngôn ngữ mô tả phần cứng phổ biến trong phạm vi câu hỏi này."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 15,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 3",
    "question": "Verilog HDL và VHDL phát triển vào năm nào?",
    "options": [
      {
        "id": "A",
        "text": "1983",
        "correct": true
      },
      {
        "id": "B",
        "text": "1938",
        "correct": false
      },
      {
        "id": "C",
        "text": "1893",
        "correct": false
      },
      {
        "id": "D",
        "text": "1839",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_80",
    "aiNote": "Theo phạm vi kiến thức của đề, Verilog HDL và VHDL được xem là phát triển vào năm 1983.\nĐây là giai đoạn các ngôn ngữ mô tả phần cứng bắt đầu được xây dựng để mô tả, mô phỏng và thiết kế mạch số.\nCác mốc 1938, 1893, 1839 đều không phù hợp vì quá sớm so với sự phát triển của công nghệ IC và HDL."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 15,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 4",
    "question": "Verilog HDL và VHDL phát triển theo tiêu chuẩn nào?",
    "options": [
      {
        "id": "A",
        "text": "ISO",
        "correct": false
      },
      {
        "id": "B",
        "text": "IEEE 741",
        "correct": false
      },
      {
        "id": "C",
        "text": "IEEE 1364",
        "correct": true
      },
      {
        "id": "D",
        "text": "ANSI",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_81",
    "note": "Đáp án được bổ sung do trong PDF dòng đáp án không được in đậm rõ.",
    "aiNote": "IEEE 1364 là tiêu chuẩn dùng cho Verilog HDL.\nTrong phạm vi câu hỏi này, đề đang lấy Verilog HDL làm trọng tâm nên đáp án C được xem là đúng.\nCác đáp án ISO, ANSI và IEEE 741 không phải tiêu chuẩn chính của Verilog HDL trong câu hỏi này."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 15,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 5",
    "question": "Ba cấp độ trong Verilog bao gồm?",
    "options": [
      {
        "id": "A",
        "text": "Mô hình hành vi",
        "correct": false
      },
      {
        "id": "B",
        "text": "RTL (Register Transfer Level)",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cổng logic",
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
    "id": "main_82",
    "aiNote": "Trong Verilog, mạch số có thể được mô tả ở nhiều cấp độ khác nhau.\nMô hình hành vi mô tả mạch theo hoạt động/chức năng.\nRTL mô tả quá trình truyền dữ liệu giữa các thanh ghi và logic xử lý.\nCổng logic mô tả mạch bằng các cổng cơ bản như AND, OR, NOT,...\nVì cả A, B và C đều là cấp độ mô tả trong Verilog nên chọn D."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 15,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 6",
    "question": "Hai phương pháp thiết kế dựa trên ngôn ngữ Verilog bao gồm?",
    "options": [
      {
        "id": "A",
        "text": "Top – Down",
        "correct": false
      },
      {
        "id": "B",
        "text": "Bottom – Up",
        "correct": false
      },
      {
        "id": "C",
        "text": "Top – Bottom",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A và B",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_83",
    "aiNote": "Trong thiết kế bằng Verilog, có hai phương pháp chính là Top-Down và Bottom-Up.\nTop-Down: thiết kế từ hệ thống lớn, sau đó chia nhỏ thành các module con.\nBottom-Up: thiết kế các module nhỏ trước, rồi ghép lại thành hệ thống lớn.\nCả hai phương pháp đều được dùng trong thiết kế và tổng hợp hệ thống số."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 15,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 7",
    "question": "Module được định nghĩa?",
    "options": [
      {
        "id": "A",
        "text": "Là khối xây dựng cơ bản trong Verilog",
        "correct": false
      },
      {
        "id": "B",
        "text": "Là một phần tử hoặc một tập hợp các khối nhỏ hơn",
        "correct": false
      },
      {
        "id": "C",
        "text": "Chức năng trung gian cho các khối cấp cao",
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
    "id": "main_84",
    "note": "Nhãn đáp án bị trùng trong PDF nên đã chuẩn hóa lại thứ tự A/B/C/D.",
    "aiNote": "Trong Verilog, module là khối xây dựng cơ bản để mô tả mạch số.\nMột module có thể là một phần tử riêng lẻ hoặc gồm nhiều module/khối nhỏ hơn bên trong.\nModule cũng giúp kết nối và tổ chức các khối con thành hệ thống cấp cao hơn.\nVì cả A, B và C đều mô tả đúng vai trò của module nên chọn D."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 15,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 8",
    "question": "Cấu trúc khai bào tên một module là?",
    "options": [
      {
        "id": "A",
        "text": "module <module_name> {<module_terminal_list>};",
        "correct": false
      },
      {
        "id": "B",
        "text": "module <module_name> (<module_terminal_list>)",
        "correct": false
      },
      {
        "id": "C",
        "text": "module <module_name> [<module_terminal_list>];",
        "correct": false
      },
      {
        "id": "D",
        "text": "module <module_name> (<module_terminal_list>);",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_85",
    "aiNote": "Đáp án D đúng vì: module <module_name> (<module_terminal_list>);.\nCú pháp khai báo module gồm từ khóa module, tên module, danh sách cổng trong ngoặc và dấu chấm phẩy.\nSau đó mới khai báo input/output và phần thân module."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 16,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 9",
    "question": "Các kí tự được cho phép trong việc định danh người dùng là?",
    "options": [
      {
        "id": "A",
        "text": "[A-Z], [a-z], [0-9], _, $",
        "correct": true
      },
      {
        "id": "B",
        "text": "[A-Z], [a-z], [0-9]",
        "correct": false
      },
      {
        "id": "C",
        "text": "[A-Z], [a-z]",
        "correct": false
      },
      {
        "id": "D",
        "text": "[a-z]",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_86",
    "aiNote": "Trong Verilog, tên định danh có thể dùng chữ cái hoa, chữ cái thường, chữ số, dấu gạch dưới _ và ký hiệu $.\nTuy nhiên, định danh không được bắt đầu bằng chữ số.\nVí dụ hợp lệ: data_1, clk$test, A_count.\nVì vậy đáp án đầy đủ nhất là A."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 16,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 10",
    "question": "Việc định danh người dùng không cho phép các tên bắt đầu bởi",
    "options": [
      {
        "id": "A",
        "text": "$ hoặc [0-9] hoặc -",
        "correct": true
      },
      {
        "id": "B",
        "text": "$ hoặc [0-9] hoặc _",
        "correct": false
      },
      {
        "id": "C",
        "text": "- hoặc [0-9] hoặc _",
        "correct": false
      },
      {
        "id": "D",
        "text": "_ hoặc [0-9] hoặc =",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_87",
    "aiNote": "Đáp án A đúng vì định danh Verilog không được bắt đầu bằng chữ số hoặc dấu trừ.\nTheo phạm vi đề, tên người dùng cũng không bắt đầu bằng ký hiệu $.\nDấu _ có thể đứng đầu định danh nên các phương án chứa _ ở đầu không phải lỗi."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 16,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 11",
    "question": "Định danh nào sau đây không được cho phép?",
    "options": [
      {
        "id": "A",
        "text": "_myproject",
        "correct": false
      },
      {
        "id": "B",
        "text": "_Myproject$",
        "correct": false
      },
      {
        "id": "C",
        "text": "5_myproject",
        "correct": true
      },
      {
        "id": "D",
        "text": "My$project",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_88",
    "aiNote": "Trong Verilog, định danh có thể chứa chữ cái, chữ số, dấu _ và ký hiệu $.\nTuy nhiên, định danh không được bắt đầu bằng chữ số.\n5_myproject bắt đầu bằng số 5, nên không hợp lệ.\nCác lựa chọn A, B, D đều bắt đầu bằng chữ cái hoặc _, nên được cho phép."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 16,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 12",
    "question": "Định danh nào sau đây được cho phép?",
    "options": [
      {
        "id": "A",
        "text": "_$Counter_Flipflop_",
        "correct": true
      },
      {
        "id": "B",
        "text": "–Counter_FF_$",
        "correct": false
      },
      {
        "id": "C",
        "text": "Counter-FF",
        "correct": false
      },
      {
        "id": "D",
        "text": "C3ounter_5$-",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_89",
    "aiNote": "Đáp án A đúng vì _$Counter_Flipflop_ chỉ dùng ký tự cho phép như _, $, chữ cái.\nCác lựa chọn khác chứa dấu gạch ngang hoặc ký tự lạ nên không hợp lệ.\nTrong Verilog, định danh thông thường không được chứa dấu - vì dễ bị hiểu là phép trừ."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 16,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 13",
    "question": "Khi chú thích một chuỗi trên cùng một hàng cho dùng dấu?",
    "options": [
      {
        "id": "A",
        "text": "/*....*/",
        "correct": false
      },
      {
        "id": "B",
        "text": "//",
        "correct": true
      },
      {
        "id": "C",
        "text": "\\\\",
        "correct": false
      },
      {
        "id": "D",
        "text": "/* *\\",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_90",
    "aiNote": "Đáp án B đúng vì // dùng để chú thích một dòng trong Verilog.\nMọi nội dung sau // trên cùng dòng sẽ bị trình biên dịch bỏ qua.\n/* ... */ dùng cho chú thích nhiều dòng hoặc một đoạn khối."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 16,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 14",
    "question": "Khi chú thích nhiều đoạn, ta sử dụng dấu?",
    "options": [
      {
        "id": "A",
        "text": "/*....*/",
        "correct": true
      },
      {
        "id": "B",
        "text": "//",
        "correct": false
      },
      {
        "id": "C",
        "text": "\\\\",
        "correct": false
      },
      {
        "id": "D",
        "text": "/* *\\",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_91",
    "aiNote": "Đáp án A đúng vì /* ... */ dùng để chú thích một khối nhiều dòng.\nNội dung nằm giữa dấu mở /* và dấu đóng */ sẽ không được biên dịch.\nDấu // chỉ có tác dụng đến hết dòng hiện tại."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 16,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 15",
    "question": "Dòng chú thích nào sau đây không hợp lệ với thông tin chú thích : “Nesting commenta do not work”.",
    "options": [
      {
        "id": "A",
        "text": "/* Nesting /* comments */ do NOT work /",
        "correct": false
      },
      {
        "id": "B",
        "text": "*/ Nesting /* comments */ do NOT work */",
        "correct": false
      },
      {
        "id": "C",
        "text": "/ Nesting /* comments */ do NOT work //",
        "correct": false
      },
      {
        "id": "D",
        "text": "/* Nesting /* comments */ do NOT work */",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_92",
    "aiNote": "Đáp án D không hợp lệ vì Verilog không hỗ trợ chú thích lồng nhau.\nCụm /* Nesting /* comments */ do not work */ sẽ bị đóng ở dấu */ đầu tiên.\nPhần còn lại có thể trở thành mã không hợp lệ."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 16",
    "question": "Mức logic thấp đại diện bởi?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": true
      },
      {
        "id": "B",
        "text": "1",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "Z",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_93",
    "aiNote": "Trong mạch số/Verilog, mức logic thấp được biểu diễn bằng 0.\nMức logic cao được biểu diễn bằng 1.\nX là trạng thái không xác định, còn Z là trạng thái tổng trở cao/thả nổi.\nVì vậy mức logic thấp đại diện bởi 0."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 17",
    "question": "Mức logic cao đại diện bởi?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "1",
        "correct": true
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "Z",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_94",
    "aiNote": "Trong mạch số/Verilog, mức logic cao được biểu diễn bằng 1.\nMức logic thấp được biểu diễn bằng 0.\nX là trạng thái không xác định, còn Z là trạng thái trở kháng cao/thả nổi.\nVì vậy mức logic cao đại diện bởi 1."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 18",
    "question": "Mức logic không rõ ràng được đại diện bởi?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "1",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": true
      },
      {
        "id": "D",
        "text": "Z",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_95",
    "aiNote": "Đáp án C đúng vì trong Verilog, X biểu diễn giá trị không xác định hoặc mức logic không rõ ràng.\nGiá trị này thường xuất hiện khi tín hiệu chưa được khởi tạo, bị xung đột driver hoặc kết quả phép toán không xác định.\n0 và 1 là hai mức logic xác định.\nZ là trạng thái tổng trở cao, không phải mức logic không rõ ràng."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 19",
    "question": "Trạng thái trở kháng cao (hở mạch) được đại diện bởi?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "1",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "Z",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_96",
    "aiNote": "Trong Verilog, trạng thái trở kháng cao hay hở mạch được ký hiệu là Z.\nZ nghĩa là tín hiệu đang bị thả nổi, không được kéo lên 1 hoặc kéo xuống 0.\nTrạng thái này thường gặp ở bus dùng tri-state hoặc net không có driver.\nX là không xác định, còn 0 và 1 là hai mức logic bình thường."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 20",
    "question": "Cú pháp xác định một giá trị số bao gồm?",
    "options": [
      {
        "id": "A",
        "text": "<size><radix> <value>",
        "correct": false
      },
      {
        "id": "B",
        "text": "<size>’<radix> <value>",
        "correct": true
      },
      {
        "id": "C",
        "text": "<size>’<radix>’ <value>",
        "correct": false
      },
      {
        "id": "D",
        "text": "<size>;<radix>; <value>",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_97",
    "aiNote": "Trong Verilog, một hằng số thường được viết theo dạng: <size>'<radix><value>.\nVí dụ: 8'b10101010 nghĩa là số nhị phân 8 bit.\nTrong đó 8 là kích thước, 'b là cơ số nhị phân, 10101010 là giá trị.\nCác đáp án khác sai vì thiếu dấu nháy ' hoặc dùng sai ký hiệu phân cách."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 21",
    "question": "8’h a5 tương ứng giá trị nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "1010|0101",
        "correct": true
      },
      {
        "id": "B",
        "text": "A5F",
        "correct": false
      },
      {
        "id": "C",
        "text": "1010.0101",
        "correct": false
      },
      {
        "id": "D",
        "text": "1’b10100101",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_98",
    "note": "Đáp án được bổ sung do trong PDF dòng đáp án không được in đậm rõ.",
    "aiNote": "Đáp án A đúng vì 8'ha5 là số hex 8 bit gồm hai chữ số A và 5.\nA tương ứng 1010, còn 5 tương ứng 0101.\nGhép lại được 1010_0101."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 22",
    "question": "12’o 3xz7 tương ứng giá trị nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "6’b 00110111",
        "correct": false
      },
      {
        "id": "B",
        "text": "011|zzz|xxx|111",
        "correct": true
      },
      {
        "id": "C",
        "text": "37",
        "correct": false
      },
      {
        "id": "D",
        "text": "0011|0111",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_99",
    "aiNote": "Đáp án B đúng vì mỗi chữ số bát phân biểu diễn 3 bit.\nTrong 12'o3xz7: 3 = 011, x mở rộng thành xxx, z mở rộng thành zzz, 7 = 111.\nDo đó dạng bit là 011|xxx|zzz|111; đề sắp thứ tự x/z theo đáp án đã cho cần kiểm tra lại nếu khác ký tự gốc.\nCần kiểm tra lại đáp án."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 23",
    "question": "Giữa các chữ số có thể liên kết với nhau bởi dấu?",
    "options": [
      {
        "id": "A",
        "text": "-",
        "correct": false
      },
      {
        "id": "B",
        "text": "_",
        "correct": true
      },
      {
        "id": "C",
        "text": "=",
        "correct": false
      },
      {
        "id": "D",
        "text": ".",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_100",
    "aiNote": "Đáp án B đúng vì Verilog cho phép dùng dấu gạch dưới _ để tách nhóm chữ số cho dễ đọc.\nDấu _ không làm thay đổi giá trị của hằng số.\nCác dấu như -, = hoặc . không dùng để nối nhóm chữ số trong hằng số Verilog."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 24",
    "question": "Giá trị nào sau đây không cùng biểu diễn một con số?",
    "options": [
      {
        "id": "A",
        "text": "12’b 000_111_010_100",
        "correct": false
      },
      {
        "id": "B",
        "text": "12’b 0001_1101_0100",
        "correct": false
      },
      {
        "id": "C",
        "text": "12’o 07_24",
        "correct": false
      },
      {
        "id": "D",
        "text": "12’h 0724",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_101",
    "aiNote": "Đáp án D đúng vì 12'h0724 không cùng giá trị với các biểu diễn còn lại.\nA = 12'b000_111_010_100 = 0001_1101_0100 = 0x1D4.\nB = 12'b0001_1101_0100 cũng bằng 0x1D4.\nC = 12'o7_24 = octal 724 = 0x1D4.\nD = 12'h0724 = 0x724, khác 0x1D4 nên là đáp án không cùng biểu diễn một số."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 25",
    "question": "Ta mở rộng phạm vi các bit bằng cách lặp lại giá trị MSB mà không ảnh hưởng đến việc xử lý khi MSB là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
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
    "id": "main_102",
    "aiNote": "Đáp án D đúng vì mở rộng bằng cách lặp lại MSB là sign/strength extension theo bit cao nhất.\nNếu MSB là 0, X hoặc Z thì các bit thêm vào lặp lại đúng giá trị đó.\nDo đó phép mở rộng không làm thay đổi ý nghĩa biểu diễn ban đầu theo quy tắc đề."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 26",
    "question": "Ta mở rộng phạm vi các bit bằng cách thêm các số 0 trước MSB mà không ảnh hưởng đến việc xử lý khi MSB là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "1",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_103",
    "aiNote": "Đáp án D đúng vì khi xét biểu diễn nhị phân không dấu, bit có nghĩa cao nhất MSB của một số khác 0 là 1.\nViệc thêm các số 0 ở bên trái MSB chỉ mở rộng độ rộng bit, không làm thay đổi giá trị số.\nVí dụ 101 và 000101 đều biểu diễn cùng một giá trị nếu xem là số không dấu.\nX và Z không phải giá trị logic xác định, còn 0 không phải bit có nghĩa cao nhất của một số khác 0 trong cách hiểu của câu hỏi."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 17,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 27",
    "question": "Giá trị nào sau đây không đồng biểu diễn:",
    "options": [
      {
        "id": "A",
        "text": "4’b 1",
        "correct": true
      },
      {
        "id": "B",
        "text": "4’b xxx1",
        "correct": false
      },
      {
        "id": "C",
        "text": "4’bxx_x1",
        "correct": false
      },
      {
        "id": "D",
        "text": "4’b x_1",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_104",
    "aiNote": "Đáp án A đúng vì 4'b1 được mở rộng thành 4'b0001.\nCác dạng còn lại chứa x ở các bit bên trái, ví dụ xxx1, nên không cùng giá trị xác định với 0001.\nVì vậy 4'b1 không đồng biểu diễn với các giá trị có X."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 18,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 28",
    "question": "Giá trị nào sau đây không đồng biểu diễn:",
    "options": [
      {
        "id": "A",
        "text": "4’b 1x",
        "correct": false
      },
      {
        "id": "B",
        "text": "4’b 0_1x",
        "correct": false
      },
      {
        "id": "C",
        "text": "4’b 01",
        "correct": true
      },
      {
        "id": "D",
        "text": "4’b 001x",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_105",
    "aiNote": "Đáp án C đúng vì 4'b01 được mở rộng thành 4'b0001.\nCác lựa chọn 4'b1x, 4'b0_1x và 4'b001x đều có bit thấp là x nên cùng nhóm biểu diễn có trạng thái không xác định.\nDo đó 4'b01 không đồng biểu diễn với nhóm có x ở bit cuối."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 18,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 29",
    "question": "Nếu số lượng bit (size) được lược bỏ đi thì việc xác định số bit phụ thuộc vào?",
    "options": [
      {
        "id": "A",
        "text": "Từ giá trị của nó",
        "correct": false
      },
      {
        "id": "B",
        "text": "Số bit trong mô phỏng",
        "correct": false
      },
      {
        "id": "C",
        "text": "Số bit cụ thể của máy",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả 3 trường hợp trên",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_106",
    "aiNote": "Trong Verilog, nếu phần size không được ghi rõ, số bit của hằng số sẽ được xác định ngầm.\nViệc xác định này có thể phụ thuộc vào giá trị cần biểu diễn, quy tắc của mô phỏng, và cách công cụ/máy xử lý số không khai báo size.\nVí dụ thay vì viết 4'b0110, nếu bỏ 4 thì công cụ sẽ tự suy ra độ rộng phù hợp.\nVì vậy theo phạm vi đề, chọn D. Cả 3 trường hợp trên."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 18,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 30",
    "question": "Nếu cơ số (radix) được bỏ qua thì giá trị mặc định của số đó được giả định ở hệ?",
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
        "text": "Thập phân",
        "correct": true
      },
      {
        "id": "D",
        "text": "Thập lục phân",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_107",
    "aiNote": "Đáp án C đúng vì khi bỏ qua cơ số trong số Verilog, giá trị mặc định được hiểu là thập phân.\nVí dụ 123 được hiểu là số decimal 123, không phải nhị phân hay hex.\nMuốn chỉ cơ số khác phải viết dạng 'b, 'o, 'h hoặc có size kèm radix."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 18,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 31",
    "question": "Tham số được liên kết với?",
    "options": [
      {
        "id": "A",
        "text": "Tên định danh thay đổi tùy giá trị",
        "correct": false
      },
      {
        "id": "B",
        "text": "Tên định danh không đổi",
        "correct": true
      },
      {
        "id": "C",
        "text": "Tên định danh có thể thay đổi hoặc không",
        "correct": false
      },
      {
        "id": "D",
        "text": "Tên định danh luôn phải thay đổi.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_108",
    "aiNote": "Trong Verilog, tham số thường được khai báo bằng parameter.\nNó là một hằng số có tên, dùng để đặt giá trị cố định cho module như độ rộng bus, hệ số đếm,...\nSau khi được khai báo hoặc truyền giá trị khi khởi tạo module, tham số không thay đổi trong quá trình mô phỏng/thực thi.\nVì vậy tham số được liên kết với tên định danh không đổi."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 18,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 32",
    "question": "Cú pháp khai báo tham số nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "parameter n=4",
        "correct": false
      },
      {
        "id": "B",
        "text": "parapen myname=verilog;",
        "correct": false
      },
      {
        "id": "C",
        "text": "parameter var_timer=2’b00;",
        "correct": true
      },
      {
        "id": "D",
        "text": "paracitamol headache=2;",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_109",
    "aiNote": "Đáp án C đúng vì cú pháp khai báo tham số là parameter tên = giá_trị;.\nparameter var_timer=2'b00; dùng đúng từ khóa parameter và gán một hằng nhị phân.\nCác lựa chọn khác sai từ khóa hoặc thiếu dấu chấm phẩy."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 18,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 33",
    "question": "Tín hiệu trong Verilog được định nghĩa?",
    "options": [
      {
        "id": "A",
        "text": "Dây vật lý",
        "correct": false
      },
      {
        "id": "B",
        "text": "Biến không cần lưu trữ",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A và B đều không sai",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cả A và B đều không đúng",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_110",
    "aiNote": "Đáp án C đúng vì tín hiệu Verilog có thể hiểu vừa là kết nối phần cứng vừa là đối tượng lưu/biểu diễn giá trị trong mô phỏng.\nNet như wire biểu diễn dây nối, còn variable như reg biểu diễn biến nhận gán thủ tục.\nVì vậy cả hai cách mô tả trong A và B đều không sai."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 18,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 34",
    "question": "Tín hiệu có thể được biểu diễn bởi?",
    "options": [
      {
        "id": "A",
        "text": "Một mạng lưới (a net)",
        "correct": false
      },
      {
        "id": "B",
        "text": "Một biến (a variable)",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A và B đều đúng",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cả A và B đều sai",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_111",
    "note": "Nhãn đáp án bị trùng trong PDF nên đã chuẩn hóa lại thứ tự A/B/C/D.",
    "aiNote": "Đáp án C đúng vì tín hiệu trong Verilog có thể là net hoặc variable.\nNet đại diện dây/kết nối như wire, còn variable đại diện đối tượng nhận gán trong procedural block như reg.\nHai nhóm này có cách gán và sử dụng khác nhau."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 18,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 35",
    "question": "Một tín hiệu (net, variable) có thể được khai báo theo cú pháp?",
    "options": [
      {
        "id": "A",
        "text": "type signal_name{signal_name};",
        "correct": false
      },
      {
        "id": "B",
        "text": "type (range) signal_name{signal_name};",
        "correct": false
      },
      {
        "id": "C",
        "text": "type [range] signal_name{signal_name};",
        "correct": true
      },
      {
        "id": "D",
        "text": "type {range} signal_name{signal_name};",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_112",
    "aiNote": "Đáp án C đúng vì: type [range] signal_name{signal_name};.\nwire/net biểu diễn đường nối phần cứng và thường nhận giá trị từ assign, cổng hoặc module.\nNó không được gán trực tiếp trong procedural block như reg."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 19,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 36",
    "question": "Khi không được kết nối, các đường dây mang mức logic điều khiển nào?",
    "options": [
      {
        "id": "A",
        "text": "Z",
        "correct": true
      },
      {
        "id": "B",
        "text": "0",
        "correct": false
      },
      {
        "id": "C",
        "text": "U",
        "correct": false
      },
      {
        "id": "D",
        "text": "X",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_113",
    "note": "Nhãn đáp án bị trùng trong PDF nên đã chuẩn hóa lại thứ tự A/B/C/D.",
    "aiNote": "Trong Verilog/mạch số, đường dây không được kết nối hoặc không có nguồn điều khiển thường ở trạng thái high impedance, ký hiệu là Z.\nZ nghĩa là đường dây đang “thả nổi”, không bị kéo lên 1 hay kéo xuống 0."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 19,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 37",
    "question": "Các loại đường dây (nets) bao gồm?",
    "options": [
      {
        "id": "A",
        "text": "Wire",
        "correct": false
      },
      {
        "id": "B",
        "text": "Wand/Wor",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tri",
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
    "id": "main_114",
    "aiNote": "Đáp án D đúng vì: Cả A, B và C.\nwire/net biểu diễn đường nối phần cứng và thường nhận giá trị từ assign, cổng hoặc module.\nNó không được gán trực tiếp trong procedural block như reg."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 19,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 38",
    "question": "Thanh ghi được định nghĩa là?",
    "options": [
      {
        "id": "A",
        "text": "Một biến có thể chứa giá trị",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không đại diện cho phần cứng",
        "correct": false
      },
      {
        "id": "C",
        "text": "Phần cứng có thể được thực hiện bởi thanh ghi",
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
    "id": "main_115",
    "aiNote": "Đáp án D đúng vì: Cả A, B và C.\nTín hiệu được gán trong always/initial phải là reg trong Verilog truyền thống.\nreg là biến lưu giá trị mô phỏng và có thể tổng hợp thành FF, latch hoặc logic tùy cách mô tả."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 19,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 39",
    "question": "Kiểu dữ liệu của thanh ghi là?",
    "options": [
      {
        "id": "A",
        "text": "Wire",
        "correct": false
      },
      {
        "id": "B",
        "text": "Bus",
        "correct": false
      },
      {
        "id": "C",
        "text": "Reg",
        "correct": true
      },
      {
        "id": "D",
        "text": "Tri",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_116",
    "aiNote": "Trong Verilog, thanh ghi thường được khai báo bằng kiểu dữ liệu reg.\nreg dùng để lưu giá trị trong các khối thủ tục như always hoặc initial.\nVí dụ: reg [7:0] count; mô tả một thanh ghi 8 bit.\nwire là dây nối, tri là dây ba trạng thái, còn bus không phải kiểu dữ liệu chính thức."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 19,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 40",
    "question": "Cho khai báo: integer i; kết quả thu được khi thực hiện lệnh gán i=2,9 là?",
    "options": [
      {
        "id": "A",
        "text": "2.9",
        "correct": false
      },
      {
        "id": "B",
        "text": "3",
        "correct": true
      },
      {
        "id": "C",
        "text": "2",
        "correct": false
      },
      {
        "id": "D",
        "text": "00101001",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_117",
    "aiNote": "Đáp án B đúng theo cách làm tròn khi gán số thực 2.9 cho biến integer trong phạm vi đề.\ninteger chỉ lưu số nguyên, nên phần thập phân không được giữ nguyên như kiểu real.\nKết quả được làm tròn thành 3 theo đáp án đề.\nCần kiểm tra lại đáp án vì một số công cụ có thể xử lý ép kiểu khác nhau."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 19,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 41",
    "question": "Một kiểu dữ liệu đặc biệt dùng để đo thời gian mô phỏng là?",
    "options": [
      {
        "id": "A",
        "text": "Wire",
        "correct": false
      },
      {
        "id": "B",
        "text": "Real",
        "correct": false
      },
      {
        "id": "C",
        "text": "Float",
        "correct": false
      },
      {
        "id": "D",
        "text": "Time",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_118",
    "note": "Nhãn đáp án bị trùng trong PDF nên đã chuẩn hóa lại thứ tự A/B/C/D.",
    "aiNote": "Trong Verilog, time là kiểu dữ liệu đặc biệt dùng để lưu thời gian mô phỏng.\nNó thường dùng chung với các lệnh hệ thống như $time, $display, $monitor để quan sát thời điểm xảy ra sự kiện.\nwire dùng cho dây tín hiệu, real dùng cho số thực, còn float không phải kiểu dữ liệu chuẩn trong Verilog.\nVì vậy kiểu dùng để đo/lưu thời gian mô phỏng là time."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 19,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 42",
    "question": "Các đặc trưng nào cần lưu ý khi sử dụng mảng?",
    "options": [
      {
        "id": "A",
        "text": "Truy xuất các trường mảng con hoặc toàn bộ mảng cùng một lúc",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không cung cấp mảng đa chiều",
        "correct": false
      },
      {
        "id": "C",
        "text": "Không thể hoạt động với kiểu số thực",
        "correct": false
      },
      {
        "id": "D",
        "text": "Tất cả các phương án trên",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_119",
    "aiNote": "Đáp án D đúng vì khi dùng mảng cần chú ý khả năng truy xuất phần tử/trường, giới hạn kiểu dữ liệu và số chiều được hỗ trợ theo chuẩn đang dùng.\nTrong Verilog truyền thống, mảng có một số hạn chế so với SystemVerilog.\nVì các ý A, B, C đều là điểm cần lưu ý theo đề nên chọn D."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 19,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 43",
    "question": "Chuỗi được khai báo với kiểu?",
    "options": [
      {
        "id": "A",
        "text": "Reg",
        "correct": true
      },
      {
        "id": "B",
        "text": "Wire",
        "correct": false
      },
      {
        "id": "C",
        "text": "Bus",
        "correct": false
      },
      {
        "id": "D",
        "text": "Array",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_120",
    "note": "Nhãn đáp án bị trùng trong PDF nên đã chuẩn hóa lại thứ tự A/B/C/D.",
    "aiNote": "Đáp án A đúng vì chuỗi trong Verilog thường được lưu bằng reg vector.\nMỗi ký tự chiếm 8 bit ASCII, nên cần khai báo reg đủ rộng để chứa toàn bộ chuỗi.\nwire/bus/array không phải kiểu thường dùng trực tiếp để khai báo string trong phạm vi đề."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 19,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 43",
    "question": "Xác định số kí tự tối đa mà khai báo chuỗi sau chứa được:",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "reg [8*13:1] string_val;"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "10",
        "correct": false
      },
      {
        "id": "B",
        "text": "8",
        "correct": false
      },
      {
        "id": "C",
        "text": "13",
        "correct": true
      },
      {
        "id": "D",
        "text": "8*13",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_121",
    "note": "Đáp án được bổ sung do trong PDF dòng đáp án không được in đậm rõ.",
    "aiNote": "Trong Verilog, mỗi ký tự trong chuỗi thường được lưu bằng 8 bit theo mã ASCII.\nKhai báo reg [8*13:1] string_val; tạo ra tổng cộng 8 × 13 = 104 bit.\nVì mỗi ký tự cần 8 bit nên số ký tự tối đa lưu được là 104 / 8 = 13 ký tự."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 19,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 44",
    "question": "Khi string_val = “I am overflowed”; trường hợp nào sau đây xảy ra?",
    "options": [
      {
        "id": "A",
        "text": "Chuỗi lưu giá trị bình thường",
        "correct": false
      },
      {
        "id": "B",
        "text": "MS bytes được thay thế bởi 0.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Xuất hiện trường hợp tràn.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cả A, B và C đều đúng.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_122",
    "aiNote": "Chuỗi \"I am overflowed\" có số ký tự nhiều hơn dung lượng mà string_val có thể lưu.\nTrong Verilog, mỗi ký tự cần 8 bit, nên nếu thanh ghi không đủ số bit thì chuỗi bị vượt quá khả năng lưu trữ.\nTrường hợp này gọi là tràn dữ liệu chuỗi.\nA sai vì không thể lưu bình thường nếu độ rộng thanh ghi không đủ."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 20,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 45",
    "question": "Toán tử && với chức năng?",
    "options": [
      {
        "id": "A",
        "text": "AND hai phần tử",
        "correct": true
      },
      {
        "id": "B",
        "text": "OR hai phần tử",
        "correct": false
      },
      {
        "id": "C",
        "text": "AND lần lượt các bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "OR lần lượt các bit",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_123",
    "aiNote": "Trong Verilog, toán tử && là toán tử AND logic giữa hai biểu thức/toán hạng.\nNó không AND từng bit, mà xét mỗi toán hạng là đúng hay sai.\nNếu cả hai toán hạng đều khác 0 thì kết quả là 1, ngược lại là 0.\nC sai vì AND từng bit là toán tử &, không phải &&."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 20,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 46",
    "question": "Toán tử || với chức năng?",
    "options": [
      {
        "id": "A",
        "text": "AND hai phần tử",
        "correct": false
      },
      {
        "id": "B",
        "text": "OR hai phần tử",
        "correct": true
      },
      {
        "id": "C",
        "text": "AND lần lượt các bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "OR lần lượt các bit",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_124",
    "aiNote": "Đáp án B đúng vì: OR hai phần tử.\nToán tử || là OR logic, xét mỗi toán hạng theo đúng/sai.\nNếu có X tham gia và kết quả không thể xác định chắc chắn thì kết quả có thể là X."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 20,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 47",
    "question": "Toán tử ! với chức năng?",
    "options": [
      {
        "id": "A",
        "text": "Đảo bit một phần tử",
        "correct": true
      },
      {
        "id": "B",
        "text": "OR hai phần tử",
        "correct": false
      },
      {
        "id": "C",
        "text": "AND lần lượt các bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "OR lần lượt các bit",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_125",
    "aiNote": "Đáp án A đúng vì: Đảo bit một phần tử.\nToán tử ! là NOT logic, đảo giá trị đúng/sai của toàn biểu thức.\nNó khác với ~ là đảo từng bit."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 20,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 48",
    "question": "Toán tử & với chức năng?",
    "options": [
      {
        "id": "A",
        "text": "AND hai phần tử",
        "correct": false
      },
      {
        "id": "B",
        "text": "OR hai phần tử",
        "correct": false
      },
      {
        "id": "C",
        "text": "AND lần lượt các bit",
        "correct": true
      },
      {
        "id": "D",
        "text": "OR lần lượt các bit",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_126",
    "aiNote": "Đáp án C đúng vì: AND lần lượt các bit.\nToán tử & là AND theo từng bit khi dùng giữa hai vector.\nNếu dùng một toán hạng, nó là reduction AND."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 20,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 49",
    "question": "Toán tử | với chức năng?",
    "options": [
      {
        "id": "A",
        "text": "AND hai phần tử",
        "correct": false
      },
      {
        "id": "B",
        "text": "OR hai phần tử",
        "correct": false
      },
      {
        "id": "C",
        "text": "AND lần lượt các bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "OR lần lượt các bit",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_127",
    "aiNote": "Đáp án D đúng vì: OR lần lượt các bit.\nToán tử | là OR theo từng bit khi dùng giữa hai vector.\nNếu dùng một toán hạng, nó là reduction OR."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 20,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 50",
    "question": "Toán tử ^ với chức năng?",
    "options": [
      {
        "id": "A",
        "text": "AND hai phần tử",
        "correct": false
      },
      {
        "id": "B",
        "text": "OR hai phần tử",
        "correct": false
      },
      {
        "id": "C",
        "text": "AND lần lượt các bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "XOR lần lượt các bit",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_128",
    "aiNote": "Trong Verilog, toán tử ^ là toán tử XOR theo từng bit.\nNếu hai toán hạng là nhiều bit, nó sẽ XOR từng cặp bit tương ứng.\nVí dụ: 4'b1010 ^ 4'b1100 = 4'b0110.\nA và B sai vì đó là toán tử AND/OR, còn C sai vì AND từng bit là toán tử &."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 20,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 51",
    "question": "Toán tử ~^ với chức năng?",
    "options": [
      {
        "id": "A",
        "text": "AND hai phần tử",
        "correct": false
      },
      {
        "id": "B",
        "text": "OR hai phần tử",
        "correct": false
      },
      {
        "id": "C",
        "text": "XOR lần lượt các bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "XNOR lần lượt các bit",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_129",
    "aiNote": "Đáp án D đúng vì: XNOR lần lượt các bit.\n~^ hoặc ^~ là XNOR theo từng bit.\nKết quả bằng 1 tại bit mà hai toán hạng giống nhau."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 21,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 52",
    "question": "Toán tử ~ với chức năng?",
    "options": [
      {
        "id": "A",
        "text": "AND hai phần tử",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đảo giá trị từng bit",
        "correct": true
      },
      {
        "id": "C",
        "text": "AND lần lượt các bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "OR lần lượt các bit",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_130",
    "aiNote": "Trong Verilog, toán tử ~ là toán tử NOT theo bit.\nNó sẽ đảo từng bit của toán hạng: 0 thành 1, 1 thành 0.\nVí dụ: ~4'b1010 = 4'b0101.\nA và C là phép AND, D là phép OR nên không đúng với toán tử ~."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 21,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 53",
    "question": "Cho A=5, B=0, C=x. Giá trị của phép tính A&&B là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": true
      },
      {
        "id": "B",
        "text": "1",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "Z",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_131",
    "aiNote": "Trong Verilog, && là phép AND logic, chỉ xét mỗi toán hạng là đúng hay sai.\nA = 5 là giá trị khác 0 nên được xem là logic 1.\nB = 0 được xem là logic 0.\nVì vậy A && B = 1 && 0 = 0."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 21,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 54",
    "question": "Cho A=5, B=0, C=x. Giá trị của phép tính A || !B là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "1",
        "correct": true
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "Z",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_132",
    "aiNote": "Trong Verilog, || là phép OR logic, còn ! là phép NOT logic.\nA = 5 là giá trị khác 0 nên được xem là logic 1.\nB = 0 nên !B = 1.\nVì vậy A || !B = 1 || 1 = 1."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 21,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 55",
    "question": "Cho A=5, B=0, C=x. Giá trị của phép tính C||B là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "1",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": true
      },
      {
        "id": "D",
        "text": "Z",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_133",
    "aiNote": "Đáp án C đúng vì: X.\nToán tử || là OR logic, xét mỗi toán hạng theo đúng/sai.\nNếu có X tham gia và kết quả không thể xác định chắc chắn thì kết quả có thể là X."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 21,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 56",
    "question": "Cho a=4’b 1010. Giá trị của phép tính ~a là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "1",
        "correct": false
      },
      {
        "id": "C",
        "text": "0101",
        "correct": true
      },
      {
        "id": "D",
        "text": "0011",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_134",
    "aiNote": "Đáp án C đúng vì ~ là toán tử đảo từng bit.\nVới a=4'b1010, đảo từng bit sẽ được 0101.\nĐây không phải NOT logic, nên kết quả không chỉ là 0 hoặc 1."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 21,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 57",
    "question": "Cho a=4’b 1010. Giá trị của phép tính c=|a là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "1",
        "correct": true
      },
      {
        "id": "C",
        "text": "0101",
        "correct": false
      },
      {
        "id": "D",
        "text": "0011",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_135",
    "aiNote": "Đáp án B đúng vì |a là reduction OR trên tất cả bit của a.\na=4'b1010 có ít nhất một bit bằng 1 nên OR rút gọn cho kết quả 1.\nNếu tất cả bit đều 0 thì kết quả mới là 0."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 21,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 58",
    "question": "Toán tử ~| với chức năng?",
    "options": [
      {
        "id": "A",
        "text": "NOR lần lượt các bit",
        "correct": true
      },
      {
        "id": "B",
        "text": "NAND lần lượt các bit",
        "correct": false
      },
      {
        "id": "C",
        "text": "XNOR lần lượt các bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "XOR lần lượt các bit",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_136",
    "aiNote": "Đáp án A đúng vì: NOR lần lượt các bit.\n~| là phép NOR reduction/theo bit tùy ngữ cảnh.\nNó là phủ định của OR, nên chỉ bằng 1 khi tất cả bit/ngõ vào đều bằng 0."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 21,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 59",
    "question": "Toán tử ~& với chức năng?",
    "options": [
      {
        "id": "A",
        "text": "NOR lần lượt các bit",
        "correct": false
      },
      {
        "id": "B",
        "text": "NAND lần lượt các bit",
        "correct": true
      },
      {
        "id": "C",
        "text": "XNOR lần lượt các bit",
        "correct": false
      },
      {
        "id": "D",
        "text": "XOR lần lượt các bit",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_137",
    "aiNote": "Đáp án B đúng vì: NAND lần lượt các bit.\n~& là phép NAND reduction/theo bit tùy ngữ cảnh.\nNó là phủ định của phép AND, nên chỉ bằng 0 khi toàn bộ điều kiện AND bằng 1."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 21,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 60",
    "question": "Cho a=4’b 1010. Kết quả của phép tính c=a>>2 là?",
    "options": [
      {
        "id": "A",
        "text": "0010",
        "correct": true
      },
      {
        "id": "B",
        "text": "1000",
        "correct": false
      },
      {
        "id": "C",
        "text": "10",
        "correct": false
      },
      {
        "id": "D",
        "text": "01",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_138",
    "aiNote": "Đáp án A đúng vì: 0010.\nToán tử >> dịch các bit sang phải.\nCác bit thấp bị bỏ, còn phía bên trái được điền 0 với số không dấu."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 21,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 61",
    "question": "Để nối chuỗi các số lại với nhau thành một số duy nhất, ta thực hiện theo cú pháp?",
    "options": [
      {
        "id": "A",
        "text": "{op1, op2, ..}",
        "correct": true
      },
      {
        "id": "B",
        "text": "(op1, op2,..)",
        "correct": false
      },
      {
        "id": "C",
        "text": "[op1;op2;..]",
        "correct": false
      },
      {
        "id": "D",
        "text": "{op1;op2;...}",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_139",
    "aiNote": "Đáp án A đúng vì toán tử nối chuỗi trong Verilog dùng cặp ngoặc nhọn { }.\nCác toán hạng được đặt theo thứ tự từ trái sang phải: {op1, op2, ...}.\nDấu ngoặc tròn hoặc ngoặc vuông không phải cú pháp nối bit."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 62",
    "question": "Cho a=1’b 1, b=3’b 010, c=3’b 101. Kết quả của catx sau khi nối chuỗi catx={a, b, c}; là?",
    "options": [
      {
        "id": "A",
        "text": "101_0101",
        "correct": true
      },
      {
        "id": "B",
        "text": "101_010_1",
        "correct": false
      },
      {
        "id": "C",
        "text": "133",
        "correct": false
      },
      {
        "id": "D",
        "text": "0001_0010_0101",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_140",
    "aiNote": "Trong Verilog, toán tử {} dùng để nối chuỗi bit theo thứ tự từ trái sang phải.\nTa có a = 1'b1, b = 3'b010, c = 3'b101.\nVậy catx = {a, b, c} = 1_010_101, viết gộp lại là 101_0101."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 63",
    "question": "Cho a=1’b 1, b=3’b 010, c=3’b 101. Kết quả của caty sau khi nối chuỗi caty={b, 2’b 11, a}; là?",
    "options": [
      {
        "id": "A",
        "text": "010_01_1",
        "correct": false
      },
      {
        "id": "B",
        "text": "010_11_1",
        "correct": true
      },
      {
        "id": "C",
        "text": "0010_0011_0001",
        "correct": false
      },
      {
        "id": "D",
        "text": "101_11_1",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_141",
    "aiNote": "Trong Verilog, toán tử {} dùng để nối chuỗi bit theo đúng thứ tự từ trái sang phải.\nTa có b = 3'b010, 2'b11 là 2 bit 11, và a = 1'b1.\nVì vậy caty = {b, 2'b11, a} = 010_11_1."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 64",
    "question": "Cho a=1’b 1, b=3’b 010, c=3’b 101. Kết quả của catz sau khi nối chuỗi catz={b, 1}; là?",
    "options": [
      {
        "id": "A",
        "text": "Không thực hiện được",
        "correct": true
      },
      {
        "id": "B",
        "text": "010_1",
        "correct": false
      },
      {
        "id": "C",
        "text": "010_0001",
        "correct": false
      },
      {
        "id": "D",
        "text": "0010_0001",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_142",
    "aiNote": "Đáp án A đúng vì phép nối {b, 1} dùng hằng 1 không khai báo độ rộng.\nHằng không định cỡ có thể làm độ rộng nối không như mong muốn hoặc không hợp lệ theo yêu cầu đề.\nNên viết rõ 1'b1 nếu muốn nối thêm đúng 1 bit."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 65",
    "question": "Cho a=1’b 1, b=3’b 010, c=3’b 101. Kết quả của catr sau khi nối chuỗi catr={4{a}, b, 2{c}}; là?",
    "options": [
      {
        "id": "A",
        "text": "1_010_101",
        "correct": false
      },
      {
        "id": "B",
        "text": "0100_010_1010",
        "correct": false
      },
      {
        "id": "C",
        "text": "0010_0011_0001",
        "correct": false
      },
      {
        "id": "D",
        "text": "1111_010_101101",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_143",
    "aiNote": "Đáp án D đúng vì {4{a}} lặp bit a bốn lần thành 1111.\nSau đó nối b=010 và {2{c}} = 101101.\nGhép theo thứ tự được 1111_010_101101."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 66",
    "question": "Kết quả trả về của phép tính 1>0 là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "1",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_144",
    "aiNote": "Đáp án D đúng vì 1 lớn hơn 0 là mệnh đề đúng.\nTrong Verilog, phép so sánh quan hệ trả về 1 nếu đúng và 0 nếu sai.\nKhông có X/Z vì cả hai toán hạng đều xác định."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 67",
    "question": "Kết quả trả về của phép tính ‘b1x1 <= 0 là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": true
      },
      {
        "id": "D",
        "text": "1",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_145",
    "aiNote": "Đáp án C đúng vì biểu thức bên trái chứa bit x nên kết quả so sánh quan hệ không xác định.\nKhi không thể kết luận chắc chắn true/false, Verilog trả về X.\nVì vậy kết quả không phải 0 hay 1."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 68",
    "question": "Kết quả trả về của phép tính 10 < z là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": true
      },
      {
        "id": "D",
        "text": "1",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_146",
    "aiNote": "Trong Verilog, phép so sánh quan hệ như < sẽ trả về 1 nếu đúng, 0 nếu sai.\nTuy nhiên nếu một toán hạng có giá trị z hoặc x, kết quả so sánh không thể xác định chắc chắn.\nVì vậy biểu thức 10 < z cho kết quả là X.\nZ là trạng thái tổng trở cao, không phải kết quả hợp lệ của phép so sánh quan hệ."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 69",
    "question": "Kết quả trả về của các phép logic == và != bao gồm?",
    "options": [
      {
        "id": "A",
        "text": "0, 1",
        "correct": false
      },
      {
        "id": "B",
        "text": "0, 1, x",
        "correct": true
      },
      {
        "id": "C",
        "text": "0, 1, z",
        "correct": false
      },
      {
        "id": "D",
        "text": "Z, x",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_147",
    "aiNote": "Đáp án B đúng vì: 0, 1, x.\n== là so sánh logic nên nếu gặp X/Z ở vị trí ảnh hưởng kết quả có thể trả về X.\n=== và !== là so sánh case equality, xét cả X và Z như giá trị cụ thể."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 70",
    "question": "Kết quả trả về của các phép logic bit === và !== bao gồm?",
    "options": [
      {
        "id": "A",
        "text": "0, 1",
        "correct": true
      },
      {
        "id": "B",
        "text": "0, 1, x",
        "correct": false
      },
      {
        "id": "C",
        "text": "0, 1, z",
        "correct": false
      },
      {
        "id": "D",
        "text": "Z, x",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_148",
    "aiNote": "Trong Verilog, === và !== là phép so sánh case equality/case inequality.\nChúng so sánh cả các giá trị đặc biệt như x và z như một giá trị cụ thể.\nVì vậy kết quả trả về chỉ là đúng hoặc sai, tương ứng 1 hoặc 0.\nKhác với == và !=, kết quả có thể bị x nếu toán hạng chứa giá trị không xác định."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 71",
    "question": "Kết quả trả về của phép tính 4’b 1001 == 4’b 1101 là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": true
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "1",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_149",
    "aiNote": "Đáp án A đúng vì: 0.\n== là so sánh logic nên nếu gặp X/Z ở vị trí ảnh hưởng kết quả có thể trả về X.\n=== và !== là so sánh case equality, xét cả X và Z như giá trị cụ thể."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 72",
    "question": "Kết quả trả về của phép tính 4’b 1z0x == 4’b 1z0x là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": true
      },
      {
        "id": "D",
        "text": "1",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_150",
    "aiNote": "Đáp án C đúng vì: X.\n== là so sánh logic nên nếu gặp X/Z ở vị trí ảnh hưởng kết quả có thể trả về X.\n=== và !== là so sánh case equality, xét cả X và Z như giá trị cụ thể."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 73",
    "question": "Kết quả trả về của phép tính 4’b 1z0x === 4’b 1z0x là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "1",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_151",
    "aiNote": "Đáp án D đúng vì: 1.\n== là so sánh logic nên nếu gặp X/Z ở vị trí ảnh hưởng kết quả có thể trả về X.\n=== và !== là so sánh case equality, xét cả X và Z như giá trị cụ thể."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 74",
    "question": "Kết quả trả về của phép tính 4’b 1z0x !== 4’b 1z0x là?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": true
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "1",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_152",
    "aiNote": "Đáp án A đúng vì: 0.\n== là so sánh logic nên nếu gặp X/Z ở vị trí ảnh hưởng kết quả có thể trả về X.\n=== và !== là so sánh case equality, xét cả X và Z như giá trị cụ thể."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 22,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 75",
    "question": "Cấu trúc của một câu lệnh điều kiện bao gồm?",
    "options": [
      {
        "id": "A",
        "text": "cond_expr ? true_expr | false_expr",
        "correct": false
      },
      {
        "id": "B",
        "text": "cond_expr ? true_expr : false_expr",
        "correct": true
      },
      {
        "id": "C",
        "text": "cond_expr : true_expr : false_expr",
        "correct": false
      },
      {
        "id": "D",
        "text": "cond_expr : true_expr :?false_expr",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_153",
    "aiNote": "Đáp án B đúng vì toán tử điều kiện có dạng cond_expr ? true_expr : false_expr.\nNếu điều kiện đúng thì lấy true_expr, nếu sai thì lấy false_expr.\nĐây là cú pháp thường dùng để mô tả MUX trong mạch tổ hợp."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 23,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 76",
    "question": "Câu lệnh sau có thể miêu tả mạch tổ hợp đơn giản nào?",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "Y = (sel == 1'b1) ? A : B;"
      }
    ],
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
        "text": "LATCH",
        "correct": false
      },
      {
        "id": "D",
        "text": "FLIPFLOP",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_154",
    "aiNote": "Đáp án A đúng vì biểu thức điều kiện chọn A khi sel=1 và chọn B khi sel=0.\nĐó chính là hành vi của mạch đa hợp MUX 2 sang 1.\nDEMUX là tách một ngõ vào ra nhiều ngõ ra, còn latch/FF là phần tử nhớ."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 23,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 77",
    "question": "Câu lệnh sau có thể miêu tả mạch tổ hợp đơn giản nào?",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "Y = (sel == 2'b00) ? A :\n    (sel == 2'b01) ? B :\n    (sel == 2'b10) ? C : D;"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "ENCODER",
        "correct": false
      },
      {
        "id": "B",
        "text": "DEMUX 1x8",
        "correct": false
      },
      {
        "id": "C",
        "text": "MUX 4x1",
        "correct": true
      },
      {
        "id": "D",
        "text": "LATCH",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_155",
    "aiNote": "Biểu thức dùng toán tử điều kiện ?: để chọn ngõ ra Y theo giá trị của sel.\nNếu sel = 00 thì chọn A, sel = 01 chọn B, sel = 10 chọn C, còn lại chọn D.\nNhư vậy có 4 ngõ vào dữ liệu A, B, C, D và 1 ngõ ra Y.\nĐây chính là mạch MUX 4x1."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 23,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 78",
    "question": "Trong một phép tính, nếu tồn tại một toán hạng nào là x thì kết quả thu được luôn là?",
    "options": [
      {
        "id": "A",
        "text": "Không thực hiện được",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
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
    "id": "main_156",
    "aiNote": "Trong Verilog, x biểu diễn giá trị không xác định.\nKhi một phép tính có toán hạng là x, kết quả thường bị lan truyền trạng thái không xác định.\nVì vậy kết quả thu được được xem là X.\nZ là tổng trở cao, còn U không phải giá trị logic chuẩn trong Verilog."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 23,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 79",
    "question": "Giá trị được lưu trữ trong thanh ghi sau là gì khi thực hiện các câu lệnh?",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "reg [15:0] regA;\nregA = -4'd12;"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "12",
        "correct": false
      },
      {
        "id": "B",
        "text": "1100",
        "correct": false
      },
      {
        "id": "C",
        "text": "1_1100",
        "correct": false
      },
      {
        "id": "D",
        "text": "65524",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_157",
    "aiNote": "Đáp án D đúng vì -4'd12 là số âm được biểu diễn trong độ rộng 4 bit rồi gán sang regA 16 bit.\nGiá trị -12 trong 16 bit bù 2 tương ứng 65536 - 12 = 65524.\nDo đó regA lưu dạng nhị phân của số 65524."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 23,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 80",
    "question": "Phép toán có thứ tự ưu tiên cao nhất là?",
    "options": [
      {
        "id": "A",
        "text": "+ - * /",
        "correct": false
      },
      {
        "id": "B",
        "text": "+ - ! ~",
        "correct": true
      },
      {
        "id": "C",
        "text": "+ -",
        "correct": false
      },
      {
        "id": "D",
        "text": "* /",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_158",
    "aiNote": "Đáp án B đúng theo bảng ưu tiên trong đề vì các toán tử unary như +, -, !, ~ có mức ưu tiên cao.\nChúng được thực hiện trước các phép toán hai toán hạng như nhân, chia, cộng, trừ.\nVì vậy nhóm + - ! ~ ở đây là nhóm ưu tiên cao nhất."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 23,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 81",
    "question": "Câu lệnh có thứ tự ưu tiên thấp nhất là?",
    "options": [
      {
        "id": "A",
        "text": "Assign",
        "correct": false
      },
      {
        "id": "B",
        "text": "Condition",
        "correct": true
      },
      {
        "id": "C",
        "text": "While",
        "correct": false
      },
      {
        "id": "D",
        "text": "For",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_159",
    "aiNote": "Trong Verilog, toán tử điều kiện ?: có độ ưu tiên rất thấp trong biểu thức.\nNó thường được thực hiện sau các phép toán như logic, so sánh, cộng trừ,...\nVì vậy khi dùng toán tử điều kiện, nên đặt ngoặc để tránh hiểu sai thứ tự thực hiện.\nwhile và for là câu lệnh lặp, không phải toán tử ưu tiên trong biểu thức như ?:."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 23,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 82",
    "question": "Cú pháp thực hiện câu lệnh gán liên tục là?",
    "options": [
      {
        "id": "A",
        "text": "assign #del <id> = <expr>;",
        "correct": true
      },
      {
        "id": "B",
        "text": "assign #del <id> == <expr>;",
        "correct": false
      },
      {
        "id": "C",
        "text": "=assign #del <id> = <expr>;",
        "correct": false
      },
      {
        "id": "D",
        "text": "?assign #del <id> = <expr>;",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_160",
    "aiNote": "Trong Verilog, câu lệnh gán liên tục dùng từ khóa assign.\nCú pháp đúng là gán giá trị biểu thức <expr> cho tín hiệu <id> bằng dấu =.\nPhần #del là độ trễ tùy chọn nếu muốn mô tả trễ lan truyền.\nB sai vì == là toán tử so sánh, không phải toán tử gán."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 23,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 83",
    "question": "Đặc điểm của câu lệnh gán assign là?",
    "options": [
      {
        "id": "A",
        "text": "Công việc được thực hiện liên tục",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không theo thứ tự",
        "correct": false
      },
      {
        "id": "C",
        "text": "Được thực hiện song song với nhau",
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
    "id": "main_161",
    "aiNote": "Đáp án D đúng vì câu lệnh assign trong Verilog là phép gán liên tục.\nBiểu thức bên phải được theo dõi liên tục; khi tín hiệu đầu vào thay đổi thì vế trái tự cập nhật.\nCác câu lệnh assign hoạt động song song với nhau, không thực hiện tuần tự như lệnh trong always/initial.\nVì vậy assign có tính liên tục, không theo thứ tự và được thực hiện song song."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 23,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 84",
    "question": "Quy trình được hiểu như thế nào trong Verilog?",
    "options": [
      {
        "id": "A",
        "text": "Các chương trình được thực hiện tuần tự",
        "correct": true
      },
      {
        "id": "B",
        "text": "Các chương trình được thực hiện theo thứ tự",
        "correct": false
      },
      {
        "id": "C",
        "text": "Các chương trình trong cặp lệnh begin end",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A, B và C đều sai",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_162",
    "aiNote": "Đáp án A đúng vì procedural block trong Verilog thực hiện các câu lệnh theo trình tự.\nCác lệnh trong initial/always chạy tuần tự bên trong block, dù các block khác nhau có thể chạy song song.\nDo đó quy trình ở đây được hiểu là chuỗi lệnh thực hiện tuần tự."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 24,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 85",
    "question": "Câu lệnh Initial mô tả các công việc được thực hiện như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "Thực hiện một cách tuần tự",
        "correct": false
      },
      {
        "id": "B",
        "text": "Bắt đầu tại thời điểm mô phỏng và kết thúc tại câu lệnh cuối cùng trong nó.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Bắt đầu tại thời điểm mô phỏng và lặp lại mãi mãi",
        "correct": false
      },
      {
        "id": "D",
        "text": "Thực hiện một cách có thứ tự và lặp lại cho đến khi ngừng mô phỏng.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_163",
    "aiNote": "Đáp án B đúng vì: Bắt đầu tại thời điểm mô phỏng và kết thúc tại câu lệnh cuối cùng trong nó.\ninitial là khối thủ tục chạy một lần khi mô phỏng bắt đầu.\nNó thường dùng trong testbench để khởi tạo tín hiệu, tạo kích thích hoặc kết thúc mô phỏng."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 24,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 86",
    "question": "Câu lệnh always mô tả công việc được thực hiện như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "Thực hiện một cách tuần tự",
        "correct": false
      },
      {
        "id": "B",
        "text": "Bắt đầu tại thời điểm mô phỏng và kết thúc tại câu lệnh cuối cùng trong nó.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Bắt đầu tại thời điểm mô phỏng và lặp lại mãi mãi cho đến hết thời gian mô phỏng.",
        "correct": true
      },
      {
        "id": "D",
        "text": "Thực hiện một cách có thứ tự và lặp lại cho đến khi ngừng mô phỏng.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_164",
    "aiNote": "Trong Verilog, khối always bắt đầu chạy từ thời điểm mô phỏng bắt đầu.\nSau khi thực hiện xong các câu lệnh bên trong, nó sẽ tự động lặp lại liên tục.\nQuá trình này kéo dài cho đến khi mô phỏng kết thúc.\nĐáp án B sai vì mô tả giống khối initial, chỉ chạy một lần rồi dừng."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 24,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 86",
    "question": "Kiểu dữ liệu phải khai báo trong mô hình always là?",
    "options": [
      {
        "id": "A",
        "text": "Reg",
        "correct": true
      },
      {
        "id": "B",
        "text": "Wire",
        "correct": false
      },
      {
        "id": "C",
        "text": "Time",
        "correct": false
      },
      {
        "id": "D",
        "text": "Bus",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_165",
    "aiNote": "Đáp án A đúng vì: Reg.\nKhối always là procedural block; các lệnh bên trong chạy theo sự kiện trong sensitivity list.\nCách chọn sự kiện quyết định mạch là tổ hợp, FF cạnh lên/cạnh xuống hay reset bất đồng bộ."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 24,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 86",
    "question": "Các công việc đặt dưới lệnh always @* được thực hiện khi nào?",
    "options": [
      {
        "id": "A",
        "text": "Bất kì sự thay đổi nào từ các biến",
        "correct": true
      },
      {
        "id": "B",
        "text": "Khi có sự thay đổi cạnh lên của xung clk",
        "correct": false
      },
      {
        "id": "C",
        "text": "Khi có sự thay đổi cạnh xuống của xung clk",
        "correct": false
      },
      {
        "id": "D",
        "text": "Không thể thực hiện do không có danh sách các trạng thái thay đổi.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_166",
    "aiNote": "Trong Verilog, always @* tự động tạo danh sách nhạy từ các tín hiệu được dùng bên trong khối lệnh.\nKhối này thường dùng để mô tả mạch tổ hợp.\nKhi có sự thay đổi ở bất kỳ tín hiệu liên quan nào, khối always @* sẽ được thực hiện lại.\nB và C sai vì đó là mô tả mạch tuần tự theo cạnh clock, không phải always @*."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 24,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 87",
    "question": "Chương trình trong khối lệnh đặt dưới always @(A,B,sel) sẽ được thực hiện tuần tự khi nào?",
    "options": [
      {
        "id": "A",
        "text": "Bất kì sự thay đổi nào từ A, B hoặc sel",
        "correct": true
      },
      {
        "id": "B",
        "text": "Khi có sự thay đổi cạnh lên của xung clk",
        "correct": false
      },
      {
        "id": "C",
        "text": "Khi có sự thay đổi cạnh xuống của xung clk",
        "correct": false
      },
      {
        "id": "D",
        "text": "Luôn được thực thi",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_167",
    "aiNote": "Đáp án A đúng vì: Bất kì sự thay đổi nào từ A, B hoặc sel.\nKhối always là procedural block; các lệnh bên trong chạy theo sự kiện trong sensitivity list.\nCách chọn sự kiện quyết định mạch là tổ hợp, FF cạnh lên/cạnh xuống hay reset bất đồng bộ."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 24,
    "chapter": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 88",
    "question": "Chương trình trong khối lệnh đặt dưới always @(posedge clk) sẽ được thực hiện tuần tự khi nào?",
    "options": [
      {
        "id": "A",
        "text": "Bất kì sự thay đổi nào từ A, B hoặc sel",
        "correct": false
      },
      {
        "id": "B",
        "text": "Khi có sự thay đổi cạnh lên của xung clk",
        "correct": true
      },
      {
        "id": "C",
        "text": "Khi có sự thay đổi cạnh xuống của xung clk",
        "correct": false
      },
      {
        "id": "D",
        "text": "Luôn được thực thi",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_168",
    "aiNote": "Đáp án B đúng vì: Khi có sự thay đổi cạnh lên của xung clk.\nposedge clk biểu diễn sự kiện cạnh lên của clock.\nKhối always dùng sự kiện này thường mô tả Flip-Flop hoặc mạch tuần tự đồng bộ."
  },
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
    ],
    "aiNote": "Đáp án B đúng vì: Khi tín hiệu ctrl lên mức 1.\nKhối always là procedural block; các lệnh bên trong chạy theo sự kiện trong sensitivity list.\nCách chọn sự kiện quyết định mạch là tổ hợp, FF cạnh lên/cạnh xuống hay reset bất đồng bộ."
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
    ],
    "aiNote": "Ban đầu clk = 0, sau đó lệnh forever #10 clk = ~clk; làm clock đảo trạng thái sau mỗi 10 đơn vị thời gian.\nMột chu kỳ clock đầy đủ gồm 2 lần đảo: từ 0 → 1 rồi từ 1 → 0.\nVì vậy chu kỳ là 10 + 10 = 20 đơn vị thời gian.\nKhông chọn B vì đề không khai báo timescale, nên chưa thể khẳng định đơn vị là ns."
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
    "id": "main_171",
    "aiNote": "Các lệnh hệ thống như $display, $monitor, $stop, $finish thường được viết trong các khối procedure như initial hoặc always.\nChúng dùng để phục vụ mô phỏng, in kết quả, theo dõi tín hiệu hoặc điều khiển quá trình mô phỏng.\nKhông đặt trực tiếp như một câu lệnh độc lập ngoài procedure trong module.\nVì vậy đáp án đúng là A. Trong quá trình."
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
    "id": "main_172",
    "aiNote": "Trong Verilog, $display(\"..\", arg2, arg3, ..); dùng để in ra màn hình mô phỏng theo chuỗi định dạng đã viết trong dấu \" \".\nCác biến arg2, arg3,... sẽ được chèn vào chuỗi theo các ký hiệu như %b, %d, %h, %s.\nSau khi in xong, $display tự xuống dòng."
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
    "id": "main_173",
    "aiNote": "Đáp án B đúng vì $monitor tự động in lại mỗi khi một đối số trong danh sách thay đổi.\nNó tạo các dòng/chuỗi quan sát rời rạc theo thời điểm thay đổi trong mô phỏng.\nKhác với $display, $monitor tiếp tục theo dõi sau khi được gọi."
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
    "note": "Nhãn đáp án bị trùng trong PDF nên đã chuẩn hóa lại thứ tự A/B/C/D.",
    "aiNote": "Đáp án A đúng vì định dạng %o dùng để in giá trị ở hệ bát phân.\nTrong $display hoặc $monitor, mỗi mã định dạng quy định cách hiển thị dữ liệu.\nVí dụ %b là nhị phân, %d là thập phân, %h là thập lục phân."
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
    "id": "main_175",
    "aiNote": "Đáp án C đúng vì %f dùng để in số thực dạng dấu phẩy động ở hệ thập phân.\nNó thường áp dụng cho kiểu real hoặc giá trị thực trong mô phỏng.\nKhông dùng %f để in nhị phân, bát phân hay thập lục phân."
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
    "id": "main_176",
    "aiNote": "Khai báo `timescale 10ns/1ns nghĩa là 1 đơn vị thời gian mô phỏng = 10 ns.\nCâu lệnh #5 a = b; sẽ trì hoãn 5 đơn vị thời gian trước khi thực hiện.\nVậy thời gian trì hoãn là 5 × 10 ns = 50 ns.\nPhần 1ns là độ chính xác thời gian, không phải đơn vị tính chính của #5."
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
    "id": "main_177",
    "aiNote": "Đáp án B đúng vì các ngôn ngữ truyền thống như C, Fortran, Java là ngôn ngữ lập trình tuần tự.\nChúng được dùng để viết phần mềm, không mô tả trực tiếp cấu trúc phần cứng song song như HDL.\nVerilog/VHDL mới là ngôn ngữ mô tả phần cứng chuyên dụng."
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
    "id": "main_178",
    "aiNote": "Đáp án C đúng vì ngôn ngữ truyền thống thực thi theo luồng lệnh tuần tự.\nMạch số thực tế hoạt động song song, nhiều khối logic cập nhật đồng thời.\nVì vậy cần HDL để mô tả tính song song và cấu trúc phần cứng."
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
    "id": "main_179",
    "aiNote": "Một hệ thống số thường được tạo từ nhiều thành phần nhỏ hơn như cổng logic, thanh ghi, bộ đếm, MUX,...\nCác thành phần này được liên kết với nhau bằng dây dẫn/tín hiệu.\nDây dẫn dùng để nối ngõ ra của khối này đến ngõ vào của khối khác.\nVì vậy hệ thống số không chỉ có dây, không chỉ có I/O, mà gồm khối chức năng + kết nối + ngõ vào/ngõ ra."
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
    "id": "main_180",
    "aiNote": "Đáp án A đúng vì: Hai phần chính là khai báo entity và architecture.\nMột thiết kế VHDL cơ bản gồm entity và architecture.\nEntity khai báo giao tiếp vào/ra, còn architecture mô tả hoạt động/cấu trúc bên trong."
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
    "id": "main_181",
    "aiNote": "Đáp án B đúng vì: Chứa các hoạt động bên trong hoặc tổ chức của mạch điện.\nArchitecture mô tả phần bên trong của mạch: hành vi, cấu trúc hoặc các liên kết logic.\nEntity chỉ khai báo giao tiếp ngoài của mạch."
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
    "id": "main_182",
    "aiNote": "Đáp án C đúng vì trong mạch số, khi một tín hiệu thay đổi thì chỉ các khối/logic phụ thuộc vào tín hiệu đó được kích hoạt.\nCác phần mạch không liên quan không cần thay đổi.\nĐây là cách mô phỏng theo sự kiện trong HDL."
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
    "id": "main_183",
    "aiNote": "Đáp án B đúng theo phạm vi đề vì số nhị phân có parity chẵn khi tổng số bit 1 là chẵn.\nĐây là khái niệm chẵn/lẻ theo số lượng bit 1, không phải giá trị số chia hết cho 2.\nCần phân biệt với số nguyên chẵn trong hệ nhị phân thường có bit LSB bằng 0."
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
    "id": "main_184",
    "aiNote": "Trong VHDL, entity dùng để mô tả phần giao tiếp bên ngoài của mạch.\nNó khai báo tên mạch và các cổng input/output thông qua phần port.\nCác hoạt động bên trong của mạch được mô tả trong architecture, không phải entity.\nA sai vì process nằm trong architecture; D cũng là vai trò của architecture."
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
    "id": "main_185",
    "aiNote": "Đáp án A đúng vì: Các lệnh đồng thời.\nArchitecture mô tả phần bên trong của mạch: hành vi, cấu trúc hoặc các liên kết logic.\nEntity chỉ khai báo giao tiếp ngoài của mạch."
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
    "id": "main_186",
    "aiNote": "Trong Verilog, nếu thanh ghi reg chưa được gán giá trị khởi tạo thì giá trị mặc định là X.\nX biểu diễn trạng thái không xác định.\nĐiều này thường xảy ra ở đầu mô phỏng nếu chưa có initial, reset hoặc phép gán ban đầu.\nZ là tổng trở cao, còn 0 chỉ có khi được gán/reset rõ ràng."
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
    "id": "main_187",
    "aiNote": "Đáp án B đúng vì: Ít nhất một ngõ vào bằng 1.\nCổng OR cho ngõ ra bằng 1 khi có ít nhất một ngõ vào bằng 1.\nChỉ khi tất cả ngõ vào bằng 0 thì OR mới cho ra 0."
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
    "id": "main_188",
    "aiNote": "Câu lệnh assign là dạng gán liên tục, dùng để mô tả mạch tổ hợp theo kiểu dataflow/hành vi.\nBiểu thức (a|b)&(c|d) mô tả cách tín hiệu đầu vào được xử lý để tạo ra f.\nDù khi tổng hợp có thể tạo ra 2 cổng OR và 1 cổng AND, code không khai báo trực tiếp các cổng đó nên không phải mô tả cấu trúc/netlist mức cổng."
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
    "id": "main_189",
    "aiNote": "Đáp án A đúng vì: Để tạo ra một mạch từ một đặc điểm kỹ thuật nhất định.\nSynthesis là quá trình chuyển đặc tả/mô tả HDL thành cấu trúc mạch phần cứng.\nNó khác với mô phỏng, vì mô phỏng chỉ kiểm tra hành vi còn tổng hợp tạo netlist logic."
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
    "id": "main_190",
    "aiNote": "Đáp án C đúng vì: Z.\nNet không có nguồn điều khiển sẽ ở trạng thái trở kháng cao Z.\nZ biểu thị đường dây bị thả nổi, không bị kéo lên 1 hoặc kéo xuống 0."
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
    "id": "main_191",
    "aiNote": "Đáp án D đúng vì Verilog chuẩn hỗ trợ 4 giá trị logic chính: 0, 1, X và Z.\nU là trạng thái thường gặp trong VHDL/std_logic, không phải mức logic chuẩn của Verilog.\nVì vậy U là mức không được hỗ trợ trong câu hỏi này."
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
    "id": "main_192",
    "aiNote": "Trong phạm vi đề này, $stop được hiểu là lệnh làm dừng/tạm ngắt quá trình mô phỏng tại thời điểm gặp lệnh.\nSau khi $stop, simulator không chạy tiếp ngay mà chờ người dùng thao tác tiếp tục hoặc kiểm tra trạng thái.\nVì vậy đề quy về ý trì hoãn/tạm dừng mô phỏng nên chọn C."
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
    "id": "main_193",
    "aiNote": "Đáp án C đúng vì: Cả A và D.\nFPGA có chi phí phát triển ban đầu thấp và có thể cấu hình lại nên linh hoạt hơn ASIC.\nTuy nhiên FPGA thường không nhanh và tối ưu bằng ASIC khi sản xuất số lượng lớn."
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
    "id": "main_194",
    "aiNote": "Đáp án C đúng vì trạng thái tri-state nghĩa là ngõ ra được cách ly điện khỏi đường bus.\nKhi đó ngõ ra ở trạng thái Z, không kéo bus lên 1 hay xuống 0.\nNó không phải mức điện áp nằm giữa 0 và 1."
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
    "id": "main_195",
    "aiNote": "Trong Verilog, thang thời gian thường có dạng: `timescale <time_unit>/<time_precision>.\nCác giá trị hợp lệ thường là 1, 10, 100 kèm đơn vị như ns, ps,...\n110ps không phải giá trị chuẩn hợp lệ cho phần độ chính xác thời gian.\nCác đáp án B, C, D đều dùng giá trị hợp lệ như 10ns, 1ps, 100ps."
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
    "id": "main_196",
    "aiNote": "Đáp án C đúng theo phạm vi đề vì phép cộng có bit X ở toán hạng làm lan truyền trạng thái không xác định.\nKhi carry và các bit kết quả bị ảnh hưởng bởi X, kết quả có thể trở thành xxxx.\nCần kiểm tra lại đáp án vì một số phép tính bit có thể xác định được một phần tùy công cụ/mô hình."
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
    ],
    "aiNote": "Đáp án C đúng vì kết quả là 6'b111000.\nA = 8'b00111001, đánh số bit từ A[7] đến A[0] nên A[5:3] = 111.\nB = ~|A là phép NOR rút gọn: vì A có ít nhất một bit 1 nên |A = 1, do đó B = 0.\n{3{B}} nghĩa là lặp B 3 lần, nên được 000.\nVậy {A[5:3], {3{B}}} = {111, 000} = 6'b111000."
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
    "id": "main_198",
    "aiNote": "Đáp án A đúng vì số không dấu 8 bit có dải từ 0 đến 2^8 - 1.\n2^8 = 256 giá trị khác nhau, nên giá trị lớn nhất là 255.\nSố 256 cần 9 bit để biểu diễn."
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
    "id": "main_199",
    "aiNote": "Đáp án A đúng vì FPGA cho phép nạp lại cấu hình nhanh mà không cần chế tạo chip riêng.\nNhờ không phải tapeout/mask như ASIC, vòng lặp thiết kế - kiểm thử ngắn hơn.\nFull custom và standard cell thường mất thời gian chế tạo/kiểm chứng lâu hơn."
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
    "id": "main_200",
    "aiNote": "Đáp án D đúng vì: Số thập lục phân 32 bit.\nHằng hex không ghi độ rộng được xem là hằng không định cỡ.\nTheo phạm vi đề, hằng không định cỡ thường được lấy theo độ rộng mặc định 32 bit."
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
    "id": "main_201",
    "aiNote": "Toán tử === là phép so sánh case equality trong Verilog.\nNó so sánh cả các bit đặc biệt như x và z như những giá trị cụ thể.\nA = 4'b1xxz, B = 4'b1xxx: ba bit đầu giống nhau là 1xx, nhưng bit cuối z khác x.\nVì không giống hoàn toàn từng bit nên A === B trả về 0."
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
    "id": "main_202",
    "aiNote": "Đáp án C đúng vì số bù 2 8 bit có dải từ -2^7 đến 2^7 - 1.\nDo đó dải là -128 đến +127.\nSố âm nhỏ nhất biểu diễn được là -128."
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
    ],
    "aiNote": "Đáp án B đúng vì delay trong initial là delay tương đối.\nSau #5, câu lệnh 1 chạy ở thời điểm 5; sau đó #15 nữa, câu lệnh 2 chạy ở thời điểm 20.\nVì vậy không phải thời điểm 15 tính từ đầu mô phỏng."
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
    "id": "main_204",
    "aiNote": "Trong Verilog, toán tử ** là phép lũy thừa.\nA = 4'b011 tương đương nhị phân 0011, tức giá trị thập phân 3.\nB = 4'b0011 cũng tương đương giá trị 3.\nVì vậy A ** B = 3 ** 3 = 27."
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
    ],
    "aiNote": "Đáp án B đúng vì ^A là reduction XOR của A=10011, có 3 bit 1 nên C=1.\nA[3:1] = 001, {2{C}} = 11 và B[2:0] = 110.\nGhép lại được 00111110."
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
    "id": "main_206",
    "aiNote": "Cổng AND chỉ cho đầu ra bằng 1 khi toàn bộ các đầu vào đều bằng 1.\nVới cổng AND 4 ngõ vào, nếu chỉ cần một ngõ vào bằng 0 thì đầu ra sẽ bằng 0.\nB là đặc trưng gần với cổng OR, không phải AND.\nC và D đều làm đầu ra AND bằng 0."
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
    "id": "main_207",
    "aiNote": "Đáp án C đúng vì: Cần thiết.\nMạch tổ hợp thuần phải nhạy với mọi tín hiệu đầu vào ảnh hưởng đến ngõ ra.\nNếu thiếu input trong sensitivity list, mô phỏng có thể không cập nhật đúng và dễ suy ra latch ngoài ý muốn."
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
    "id": "main_208",
    "aiNote": "Cổng NOR là cổng OR rồi đảo ngõ ra.\nVới NOR 4 đầu vào, ngõ ra chỉ bằng 1 khi tất cả các đầu vào đều bằng 0.\nNếu chỉ cần một đầu vào bằng 1, cổng OR đã ra 1, sau khi đảo sẽ thành 0."
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
    ],
    "aiNote": "Đoạn code dùng always @(b) và mọi nhánh if/else đều gán giá trị cho a, nên đây là mạch tổ hợp, không tạo latch.\nKhi b = 00 hoặc b = 11 thì a = 0.\nKhi b = 01 hoặc b = 10 thì a = 1.\nĐây đúng với bảng chân trị của cổng XOR giữa hai bit b[1] và b[0]."
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
    "id": "main_210",
    "aiNote": "Đáp án A đúng vì: Nó được sử dụng để chỉ định một khối thủ tục chỉ được thực hiện một lần.\ninitial là khối thủ tục chạy một lần khi mô phỏng bắt đầu.\nNó thường dùng trong testbench để khởi tạo tín hiệu, tạo kích thích hoặc kết thúc mô phỏng."
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
    "id": "main_211",
    "aiNote": "Đáp án C đúng vì: always @(posedge clk or negedge clear).\nposedge clk biểu diễn sự kiện cạnh lên của clock.\nKhối always dùng sự kiện này thường mô tả Flip-Flop hoặc mạch tuần tự đồng bộ."
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
    "id": "main_212",
    "aiNote": "Đáp án D đúng vì theo đề chỉ A và C đúng.\nassign là phép gán liên tục, chủ yếu tạo logic tổ hợp nhưng có thể mô hình hóa hồi tiếp/latch trong một số trường hợp.\nChỉ số biến ở RHS thường tạo MUX, còn ghi chọn ở LHS có thể tạo decoder/logic chọn ghi.\nB sai vì toán tử điều kiện không phải lúc nào cũng bắt buộc tạo MUX vật lý riêng."
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
    ],
    "aiNote": "Khối initial đầu tiên gán x = 15, y = 10.\nLệnh repeat(x) lấy giá trị x = 15 để xác định số lần lặp.\nVì vậy $display(\"x=%d\", x); được thực hiện 15 lần.\nKhối while có thể làm thay đổi giá trị x, nhưng trong phạm vi đề, số lần lặp đã được xác định theo x ban đầu là 15."
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
    ],
    "aiNote": "Ban đầu clk = 0.\nCâu lệnh always #5 clk = ~clk; làm clock đảo trạng thái sau mỗi 5 đơn vị thời gian.\nTại thời điểm 5: clk đổi từ 0 → 1, đây là cạnh lên.\nTại 10: 1 → 0 là cạnh xuống; tại 15: 0 → 1 lại là cạnh lên."
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
    "id": "main_215",
    "aiNote": "Đáp án B đúng vì các câu được phép là A và D.\nA: B[3:0] = D[4:1] + 1; hợp lệ vì B là biến kiểu reg, nên có thể được gán trong khối procedural như always/initial. Dù D là wire, nó vẫn có thể được đọc ở vế phải.\nD: C = A + D; hợp lệ vì C là integer, cũng là kiểu biến có thể nhận gán trong procedural block.\nC sai vì D là wire, mà wire không được gán trực tiếp bằng lệnh procedural như D = A + B;.\nMuốn gán cho wire phải dùng assign hoặc nối từ output của module/cổng."
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
    ],
    "aiNote": "Trong khối always @(posedge clock), chương trình dùng phép gán blocking =.\nVì vậy các lệnh được thực hiện theo thứ tự từ trên xuống trong cùng một cạnh clock.\nSau data3 = din, các dòng sau lấy ngay giá trị mới của data3, nên data2, data1, data0 đều nhận din."
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
    "id": "main_217",
    "aiNote": "Đáp án D đúng vì A và C đều đúng theo phạm vi đề.\nassign gán liên tục từ biểu thức RHS sang net ở LHS như wire.\nNếu dùng hồi tiếp bằng assign, có thể mô hình hóa mạch chốt/latch.\nB sai vì assign không gán trực tiếp cho reg trong Verilog truyền thống."
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
    "id": "main_218",
    "aiNote": "Đáp án C đúng vì: Tất cả đều sai.\nrepeat(n) lặp một khối lệnh đúng n lần, với n là biểu thức số lần lặp.\nNó không phải vòng lặp vô hạn và cũng không lặp đến khi điều kiện đúng như while."
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
    ],
    "aiNote": "Đáp án B đúng theo tính toán tuần tự trong initial block.\nSau a=b+c thì a=17; sau b=a-15 thì b=2.\nSau c=a+d thì c=34; cuối cùng d=c+d=34+17=51.\nCần kiểm tra lại đáp án vì đáp án B trong lựa chọn là 51 nếu dữ liệu gốc sắp xếp như đề."
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
    "id": "main_220",
    "aiNote": "Đáp án A đúng vì: Nó chỉ định độ trễ 5 đơn vị thời gian trước khi thực hiện câu lệnh tiếp theo.\n#5 là delay 5 đơn vị thời gian trước khi thực hiện câu lệnh kế tiếp.\nĐây là thời gian trễ tương đối trong mô phỏng, không nhất thiết luôn là 5 ns."
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
    ],
    "aiNote": "Đáp án D đúng vì: Tất cả các biến sẽ nhận được giá trị được lưu trữ trước đó trong \"x\".\nposedge clk biểu diễn sự kiện cạnh lên của clock.\nKhối always dùng sự kiện này thường mô tả Flip-Flop hoặc mạch tuần tự đồng bộ."
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
    ],
    "aiNote": "Đoạn code tạo mạch tổ hợp vì result được gán trong cả nhánh if và else, nên không cần phần tử nhớ.\nDù khai báo output reg result, khi tổng hợp không nhất thiết tạo thanh ghi; reg chỉ là kiểu biến dùng trong always.\nPhần cứng thực tế tạo ra logic tổ hợp và một đường tín hiệu cho result.\nB sai vì không tạo mạch tuần tự hay phần tử lưu trữ."
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
    ],
    "aiNote": "Đáp án D đúng theo dữ liệu đề vì các lệnh <= trong cùng always cập nhật không chặn, nên dùng giá trị cũ ở vế phải.\nĐoạn code có hồi tiếp giữa a và b nên hành vi phụ thuộc trạng thái trước đó.\nCâu này cần dựa vào đầy đủ lựa chọn/giá trị ban đầu để kết luận chắc chắn.\nCần kiểm tra lại đáp án."
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
    ],
    "aiNote": "Hai khối always @(posedge clock) chạy song song khi có cạnh lên clock.\nCả hai đều dùng phép gán chặn =, nên giá trị cập nhật ngay trong khối đang chạy.\nNếu khối a = b chạy trước thì kết quả có thể khác so với khi khối b = a chạy trước.\nVì vậy đoạn code tạo race condition, kết quả không xác định cố định là a=2,b=1 hay a=1,b=2."
  },
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
    ],
    "aiNote": "Đáp án C đúng vì hai phép gán NOR có hồi tiếp chéo tạo phần tử nhớ 1 bit.\nCấu trúc này tương đương một latch SR dùng cổng NOR.\nKhông phải mạch tổ hợp thuần vì ngõ ra quay lại ảnh hưởng ngõ vào logic."
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
    "id": "main_226",
    "aiNote": "Đáp án B và D là các phát biểu sai về module Verilog.\nMỗi lần khởi tạo module sẽ tạo một phần cứng tương ứng sau tổng hợp, không dùng chung một bản sao duy nhất.\nVerilog cũng cho phép khởi tạo nhiều instance của cùng một module."
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
    ],
    "aiNote": "Đáp án C đúng vì câu lệnh forever không có delay nên lặp vô hạn ngay tại thời điểm mô phỏng hiện tại.\nCác câu lệnh repeat và #75 $finish phía sau không có cơ hội thực thi.\nVì vậy khối initial không bao giờ kết thúc."
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
    "id": "main_228",
    "aiNote": "Verilog được phát triển tại Gateway Design Automation bởi Phil Moorby và nhóm phát triển ban đầu.\nTrong phạm vi đáp án của đề, tên được ghép là Moorby and Thomson, nên chọn D.\nA sai vì chỉ nêu Moorby, chưa đầy đủ theo cách đề yêu cầu.\nB và C không đúng vì không phải cặp người phát triển Verilog."
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
    "id": "main_229",
    "aiNote": "Đáp án C đúng theo phạm vi đề vì Verilog được dùng phổ biến trong công nghiệp thiết kế số tại Mỹ.\nVerilog có cú pháp gần C nên dễ tiếp cận với nhiều kỹ sư phần cứng.\nVHDL thường được nhắc là phổ biến hơn ở châu Âu trong các tài liệu cơ bản."
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
    "id": "main_230",
    "aiNote": "Đáp án A đúng vì VHDL thường được xem là phổ biến hơn ở châu Âu trong các tài liệu nhập môn.\nVHDL có cú pháp chặt chẽ, phù hợp môi trường yêu cầu mô tả rõ kiểu dữ liệu.\nVerilog thường được nêu là phổ biến hơn tại Mỹ."
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
    "id": "main_231",
    "aiNote": "Đáp án A đúng theo phạm vi đề vì VHDL có hệ kiểu dữ liệu và cấu trúc mô tả chặt chẽ, phong phú.\nĐiều này giúp mô tả thiết kế theo nhiều mức trừu tượng khác nhau.\nTuy nhiên trong thực tế, mức linh hoạt có thể phụ thuộc công cụ và phong cách thiết kế.\nCần kiểm tra lại đáp án nếu so sánh theo SystemVerilog hiện đại."
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
    "id": "main_232",
    "aiNote": "Đáp án C đúng theo phạm vi đề vì Verilog hỗ trợ mô tả mức cổng/switch và gần với biểu diễn phần cứng mức thấp.\nCác primitive và mô hình transistor/switch giúp mô tả gần cấp bóng bán dẫn hơn.\nVHDL thường mạnh ở mô tả kiểu dữ liệu và mức hệ thống."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án C đúng vì đoạn code có lỗi ở phần định danh/tên tín hiệu.\nHeader module thiếu tên module, và biểu thức dùng cin trong khi cổng khai báo là ci.\nĐây là lỗi làm chương trình không biên dịch đúng.\nCần kiểm tra lại đáp án nếu lựa chọn gốc phân loại lỗi khác."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì chương trình ghép nhiều FullAdder để cộng hai bus 4 bit.\nCác tín hiệu c1, c2, c3 truyền carry từ bit thấp lên bit cao.\nNgõ ra R rộng 5 bit để chứa tổng 4 bit kèm carry cuối."
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
    ],
    "aiNote": "Đáp án C đúng vì assign Y = A & B mô tả trực tiếp cổng AND hai ngõ vào.\nY chỉ bằng 1 khi cả A và B đều bằng 1.\nĐây là mạch tổ hợp đơn giản, không có phần tử nhớ."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Mạch có ngõ vào I rộng 4 bit và ngõ ra O rộng 2 bit.\nKhi chỉ một bit của I bằng 1, code mã hóa vị trí bit đó thành giá trị nhị phân ở O.\nVí dụ I = 0001 thì O = 00, I = 1000 thì O = 11.\nĐây là đặc trưng của encoder 4 sang 2."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án B đúng vì code dùng input 2 bit để kích một trong bốn bit ngõ ra.\nVới I lần lượt 00, 01, 10, 11 thì O lần lượt là 0001, 0010, 0100, 1000.\nĐó là mạch giải mã 2 sang 4."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án C đúng theo dữ liệu đề cho trường hợp EN=1, HL=0 và I=2'b10.\nEN cho phép mạch hoạt động, I=10 chọn một nhánh trong bộ giải mã/điều khiển.\nDo thiếu đầy đủ đoạn code trong câu hỏi rút gọn, nên cần đối chiếu lại bảng gán temp của đề gốc.\nCần kiểm tra lại đáp án."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Trong module chỉ có ngõ ra được khai báo là O, còn temp là biến trung gian bên trong.\nCâu hỏi lại yêu cầu xác định ngõ ra tempt, nhưng tín hiệu này không được khai báo trong chương trình.\nVì vậy ngõ ra tempt là không tồn tại."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án C đúng vì khi EN=0, chương trình đi vào nhánh if đầu tiên.\nKhi đó temp được gán bằng 4'b0000, không phụ thuộc vào giá trị của I.\nDòng assign O = (HL == 1'b1) ? temp : ~temp; chọn temp khi HL=1.\nVì HL=1 nên O = temp = 4'b0000.\nDo đó ngõ ra là 0000."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì code chọn một bit trong I tùy theo sel.\nNếu sel=00 chọn I[0], sel=01 chọn I[1], sel=10 chọn I[2], còn lại chọn I[3].\nĐây là hành vi của mạch MUX 4 sang 1."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đoạn code dùng sel để quyết định đưa tín hiệu I ra vị trí nào trong bus O.\nNếu sel = 00 thì I nằm ở bit thấp nhất, nếu sel = 01, 10, 11 thì I lần lượt được dịch sang các vị trí cao hơn.\nCác bit còn lại được gán 0, nghĩa là chỉ một đường ra nhận dữ liệu tại một thời điểm.\nĐây là đặc trưng của DEMUX: một ngõ vào, nhiều ngõ ra, chọn ngõ ra bằng tín hiệu chọn."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Mạch cộng bán phần có 2 ngõ vào là A, B và 2 ngõ ra là S và C.\nTrong code, S = A ^ B chính là bit tổng của phép cộng 1 bit.\nC = A & B chính là bit nhớ/carry khi cả A và B đều bằng 1.\nKhông phải cộng toàn phần vì không có ngõ vào nhớ Cin."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án B đúng vì module tạo bộ cộng toàn phần 1 bit.\nS = A ^ B ^ CI là bit tổng, còn CO là carry theo biểu thức đa số của A, B, CI.\nĐây là cấu trúc chuẩn của Full Adder."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì dòng (1) có lỗi định danh module.\nTên module F_(ADDER) chứa dấu ngoặc, không phải định danh Verilog hợp lệ.\nTên module nên viết dạng F_ADDER hoặc một định danh hợp lệ khác."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Dòng 3 viết: output co, s nhưng thiếu dấu chấm phẩy ; ở cuối câu lệnh.\nTrong Verilog, mỗi khai báo như input, output, wire, assign phải kết thúc bằng ;.\nDòng đúng phải là: output co, s;.\nDòng 2 và 4 hợp lệ về cú pháp."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì dòng 6 viết `endmodule;` có dấu chấm phẩy ở cuối.\nTrong Verilog, từ khóa kết thúc module phải viết là `endmodule`, không thêm dấu `;`.\nDòng 7 khai báo module mới là hợp lệ, dòng 8 khai báo input wire hợp lệ, dòng 11 khai báo wire cũng hợp lệ.\nVì vậy lỗi nằm ở dòng 6."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án B đúng vì dòng 9 khai báo input [3:-1] B; có chỉ số bit âm -1.\nTrong phạm vi bài học, bus/vector thường phải khai báo bằng chỉ số không âm, ví dụ [3:0].\nNếu B là bus 4 bit giống A thì nên sửa thành input [3:0] B;.\nDòng 8 khai báo input wire [3:0] A hợp lệ, dòng 11 khai báo wire hợp lệ, dòng 12 là gọi module và nối cổng hợp lệ."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì dòng được hỏi có lỗi theo phân loại của đáp án đề.\nCác lỗi thường gặp trong đoạn này là sai định danh module, sai tên tín hiệu hoặc sai cú pháp khai báo.\nDo câu phụ thuộc số dòng của đoạn code dài, cần kiểm tra lại đáp án với đề gốc."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án D đúng vì dòng 15 là dòng có lỗi trong các lựa chọn 12, 13, 14, 15.\nỞ dòng 15, tên instance được đặt là ADDER_4B, trùng với tên module ADDER_4B đang được định nghĩa ở dòng 7.\nTrong phạm vi đề, đây được xem là lỗi tên định danh/ngữ nghĩa vì gây nhầm lẫn giữa tên module và tên instance.\nNên sửa thành một tên instance khác, ví dụ: F_ADDER fad3(...);"
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Trong Verilog, từ khóa kết thúc module phải viết đúng là endmodule bằng chữ thường.\nVerilog phân biệt chữ hoa và chữ thường, nên Endmodule không được hiểu là từ khóa hợp lệ.\nDòng 2 và dòng 8 là khai báo input hợp lệ.\nDòng 12 là cách gọi module và nối cổng, không phải lỗi chính trong các lựa chọn."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì dòng 10 khai báo output reg [4:0] S nhưng S còn được điều khiển bởi các module con qua cổng output.\nTín hiệu nhận từ instance/continuous connection nên nên là wire, không phải reg.\nVì vậy lỗi chính là kiểu biến."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án D đúng vì dòng 16 dùng Endmodule thay vì từ khóa chuẩn endmodule.\nVerilog phân biệt chữ hoa và chữ thường nên Endmodule không được nhận là từ khóa hợp lệ.\nVì vậy lỗi thuộc nhóm từ khóa."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án C đúng vì dòng 15 đặt tên instance là ADDER_4B trùng với tên module đang định nghĩa.\nViệc dùng tên gây nhầm lẫn/không hợp lệ theo quy ước định danh trong đề.\nNên đặt tên instance khác, ví dụ fad3."
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
    "id": "main_255",
    "aiNote": "Mạch chốt Latch là mạch nhớ mức, thường hoạt động theo tín hiệu cho phép chứ không cần cạnh clock nên có thể xem là không đồng bộ.\nKhi latch đang được cho phép, đầu ra có thể thay đổi gần như ngay sau khi đầu vào thay đổi.\nSự thay đổi này chỉ bị ảnh hưởng bởi độ trễ lan truyền của cổng logic, thường rất nhỏ.\nVì A, B và C đều đúng nên chọn D."
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
    "id": "main_256",
    "aiNote": "Đáp án D đúng vì: Cả A, B và C.\nD Flip-Flop lấy mẫu D tại cạnh tác động của clock và lưu vào Q.\nMô tả đúng cần dùng always @(posedge clk) với Q là reg/logic."
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
    "note": "Nhãn đáp án bị trùng trong PDF nên đã chuẩn hóa lại thứ tự A/B/C/D.",
    "aiNote": "Trong Verilog, có 2 cách nối dây giữa các module khi gọi module con.\nCách 1: nối theo thứ tự cổng (ordered/positional port mapping), ví dụ: DFF D1(clk, d, q);.\nCách 2: nối theo tên cổng (named port mapping), ví dụ: DFF D1(.clk(clk), .D(d), .q(q));.\nNối theo tên cổng rõ ràng hơn và ít bị sai khi thứ tự cổng thay đổi."
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
    "id": "main_258",
    "aiNote": "Đáp án C đúng vì khi khởi tạo module có hai cách nối cổng phổ biến.\nNối theo tên dùng .port(signal), không phụ thuộc thứ tự cổng.\nNối theo vị trí dùng danh sách tín hiệu theo đúng thứ tự khai báo trong module.\nVì cả A và B đều đúng nên chọn C."
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
        "src": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAEYAakDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKa0oDbQCT7UqPvXcFPPSgBaKMn0NGT6GgAooyfQ0ZPoaACikJP92kSQOSAOnWgB1FFFADZJViBL5wBX5v/ABY/4Oqf+CT/AMF/ifr3wj8b694/TWPDeqz6fqa23gtpIxNExV9rCT5hkHBxX6OXZyGQtwYzn2/zzX84H/BGP9jv9mz9tH/guB+094C/aY+FGmeLdJ0xdWvbKy1NCyRT/wBqxp5gwRztdh+NAH6An/g76/4I6Dr4k+I3/hDP/wDHaP8AiL7/AOCOf/Qy/Eb/AMIV/wD47X0If+CCX/BJAnLfsUeEyT1Pkv8A/FUf8OEf+CR//Rk/hP8A78v/APFUAfPf/EX3/wAEc/8AoZfiN/4Qr/8Ax2gf8HfX/BHMnA8S/EX/AMIZ/wD47X0J/wAOEf8Agkf/ANGT+E/+/L//ABVB/wCCCP8AwSQxx+xR4THv5L//ABVAHE/B/wD4OY/+COHxf+yW6/tS/wDCL3V4u6O08aaBd6btXJAJldDDg47SGvsP4P8A7RXwJ/aB0JfE3wQ+Lnh7xXYP0utC1aK5UfXYxxXxn8fv+DaD/gk58ebdGvvgbc+HZ7ezW2trjwxqstsYolLFVC5K9WPbvXwN+0X/AMGwH7Z/7C2p3n7Qv/BI/wDa28QTXWnj7T/wiV5cm0vZQvOyORD5U/HGx1BOOpzQB++yzIz7BnOM06vx1/4I6/8ABx54g+JnxRg/YU/4KceFT4I+KNpMNOsfEN/GbWHUblTgQXEbgCCc9iDtftg9f2Hil83JAGB3BzmgB9FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBx/x08LfFDxr8Lta8M/Bj4kJ4R8TXdr5ek+I5dOS8SxlJHzmGT5ZO/X1r5RT9jn/gsiUB/wCHs2k9Of8Ai0unf/E19ulQTnn8DQo2jGaAPiP/AIY4/wCCyP8A0lm0n/w0unf/ABNH/DHH/BZH/pLNpP8A4aXTv/ia+3aKAPiL/hjj/gsj/wBJZtJ/8NLp3/xNH/DHH/BZH/pLNpP/AIaXTv8A4mvt2igD4i/4Y4/4LHnhv+Csmkken/CpNOP/ALLUNp+xj/wWZjklaf8A4K26U+6QmP8A4tLpx2r6fdr7jIBGDQPrQB8R/wDDG/8AwWS/6S0aX/4aTTv/AImj/hjf/gsl/wBJaNL/APDSad/8TX25RQB8QT/scf8ABY8xMG/4Ky6UcKTz8I9O/wDia/M//g2E0vxVov8AwW8/aZ0nxz4lXWdZt/D+pR6nqyWqwC7nGrwB5RGvCbjk7RwM1/QVdRqyMx67DX4Gf8G4P/KfL9q7/sHav/6eYKAP34ooooAKKKKAAjIxmojax7i2cE9SFH/66loIyMUAflp/wcVf8EOPCP7d3wf1H9qf9n3wwtl8afCWn+fFLYL5beIbWEbjbybcbplVSY368BScYxd/4Nl/+Cq3iH9uf9l2X4CfG/U5p/iR8LoYtP1K6vW/0jULJfkhmkz8zSKF2OTySuTyTX6dzKrxlGGQ3GK/ny8H6Gv/AATB/wCDsSPwZ4Qujpng74y3zvPaqNsJbUo5JQgHA4u04HQeZgDpgA/oPRiwyRilpqdW5PXv9BTqACiiigAooooAKKKKACiiigApsjlMYFOpkoUkZ69qAPkr9of/AILkf8E0f2WPjTrPwA+Nv7RVnpHifQPLGq2P2WSQQMyBghZQRuAYZHY1xp/4ORv+CPQOD+1hY57j+z5v/ia/J7/g7Q/4J9aN8Av2w/C3/BQLSfCjX/hT4i38Vv4007cyR/2hAFJBZeUE0K5JH8SE554/QL4Af8G4v/BDn9pD4J+Fvjz4A+Cerz6N4s0O31OwceLLk7UlQNsOD95SSpHYqaAPX/8AiJH/AOCPP/R2Nj/4L5v/AImj/iJH/wCCPP8A0djY/wDgvm/+JrkB/wAGq/8AwRp/6INrP/hV3P8AjS/8Qq//AARp/wCiDa1/4Vdz/jQB32gf8HE3/BH/AMQ3Atof2xdDtiTgNeW80a5+uyvfvgV+3p+xn+01Otl8Bv2mfBnii6YZWy0zXYmnYeoiYhz+VfGHiP8A4NN/+COOu2xgtvhV4r04lcebp/i+YMPf51YfpXzJ+0h/wZofDW0t28UfsL/tZ+I/Cut24L2lj4oAniZxyoFxBskjOcc4OPQ0AfuGJRlRkc9Pen1/OZ8Ov+CkP/Bc3/ggd41tPhV/wUC+F+q/Ev4XwzCK11a+uDeDyQQA1pqS5J458ubkZAwtftF/wT5/4Krfsef8FKvh1H43/Zy+JdtPqEUKtrHha/Ii1LTXPVZYSckDn51ypxkE0AfSNFRwzNL1THqM9KkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBlx/qm/3D/KvwK/4Nwf8AlPl+1f8A9g7V/wD08w1++tx/qm/3D/KvwK/4Nwf+U+X7V/8A2DtX/wDTzDQB+/FFFFABRRRQAUUUUAI+OCT0r+e7/g5OtfFk/wDwXX/Zit/g5qdhZ+MpLvQV0e8voTJDFenV4xA86J8zRhsFgOqg1/QfOxVM7sYOSa/nw8O67D/wVC/4OwIfF3g2E6l4P+C9+y3FyvzQ7tNR494PTm7YY9fLyKAP0zT4Y/8ABf8AA4/ai/Z6JxznwTqHB/76/wA/hS/8Kx/4OAP+joP2ef8AwitQ/wDiq+2rfABA9f8AGpKAPiH/AIVj/wAHAH/R0H7PP/hFah/8VR/wrH/g4A/6Og/Z5/8ACK1D/wCKr7eooA+If+FY/wDBwB/0dB+zz/4RWof/ABVH/Csf+DgD/o6D9nn/AMIrUP8A4qvt6igD4h/4Vj/wcAf9HQfs8/8AhFah/wDFUf8ACsf+DgD/AKOg/Z5/8IrUP/iq+3qKAPiH/hWP/BwB/wBHQfs8/wDhFah/8VR/wrH/AIOAP+joP2ef/CK1D/4qvt6igD4h/wCFY/8ABwB/0dB+zz/4RWof/FUH4Yf8F/z1/ag/Z5/8IrUP/iq+3qKAPyW/4Ko/8E+f+Cyn7Z37Ffi/4V/HP42fA3XtM0+xbW7XT9C8J30F9LcWimVUgkYkK742c8fPUf8AwaGftdXfxs/YB1T4AeIdUM2pfDXXGtrdJHyy2c+ZIx9A24Cv1mvraK7ge3mjDLJGUYHuCCMfSvwE/wCCHdtP+xl/wcb/AB//AGMPDUnleGdch1aa1tQcKpinjuYQq9sJPIv0UUAf0Ar0pabENsYGe1OoAKQopxx0paKAOe+JPwt+HXxa8GX3gL4neDtP1zRb+Ex3mm6nbLLFKp45VhjPvX4Y/wDBTn/g3g+Ov7Dvj2+/4KEf8EbvHeq6NcaCH1LV/AFjO/2uCJDukezIP7+PBJMDDoDtJ4B/e+o57eGSJo5EUqwwytyCPxoA/Oz/AIIJf8FufDv/AAU9+FFx8Nvio9vpHxh8IWyr4i0ojaNThB2/a4U4PXh1H3W9jX6KxsWHJ7V/P3/wXn/4J7fE/wD4JV/tQaH/AMFlP+CfNrNo1hDrqSeNNM09cQWV1I2C7oMD7NOTscHgMR0yK/Vz9iH/AIKu/szftcfsJW37b1z4603w3o2mWOPG8N/chBod5Go82F+4GeU/vBhQB9VUV8Q6f/wXy/Yflv4dS1zTviJo/hG7uRDZ/ELV/AF9b6HLnAWT7SyYEZPRzx719oeGfEWi+LdAtPE/hzVYL7T7+3SeyvbWQPHPEwBV1YcEEHINAF6iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAbKGKEKcH1r4N8O/8FY/2u/it418a6P+zp/wTP1vxpong3xfeeHp9ei8dWVqtxcW7BXIjlUMvUfnX3pXxP8A8EUwP+EV+O3H/NwniL/0YlAB/wAPAf8Agpz/ANId9f8A/Dl6b/hR/wAPAf8Agpz/ANId9f8A/Dl6b/hX2xRQB8STft+f8FOJIn3f8EfdfUBD0+JWm+h56fSvzL/4Nhdb1/xL/wAFvf2mdf8AFXhV9D1K88P6lLfaPJcrM1lK2rwFoi68OVPG4dcV/QXcf6tv90/yr+av/gkf+3j+yl+wD/wW1/aZ+JX7WnxRh8J6LrE2radp99LYXFwJbn+1o5Nm2BHI+VCc4HSgD+liivg1P+DmL/gioVBP7adhnHP/ABTOp/8AyPS/8RMX/BFP/o9Sw/8ACa1P/wCR6APvGivg7/iJi/4Ip/8AR6lh/wCE1qf/AMj0H/g5h/4IqEEL+2rYAkcH/hGtT/8AkegD7xpJCQhIr8/fih/wc1/8Eb/hZ4dt/EE37TV1rL3loLiw0/Q/C1/NPNGSyg4aFVU5Uj52HSvgX9qv/g6a/ap/bT1K5/Z6/wCCR37KPihLrVT9lg8UajY/atTYPxuit4d0duf9p3cjrlelAH1//wAHCn/Bbjwl+wJ8FtT/AGbvgL4uW9+NXi/TzbabDp8gkk8PwSgqbt8E7ZSpIjXrn5scc1f+DYf/AIJZeIv2Jf2YLr9o3436VLH8Q/irFFf3NvfR/wCkWNg2XijkLfMHfdvYHn5hnmvNP+CNv/BuP4p+HnxNh/b1/wCCpXiFfGnxSvbj+0NL8L6hN9si0q4b5lnupGJE9wD0UHy0OBliM1+xtoAqeWFChRgLjoPSgCVMAYHaloooAKKKKACiiigAooooAKKMj1ooAKKKKAGvwc47ce1fz/eHA+h/8Hntnb6NbC0jvjfC9WF+JQdBuXJbHXLKpwe4HpX9AExCrvJHAPX8/wClfgF/wTKuLb9p3/g67+Mvxo0I/wBoaP4Rt9ZWHUG+ZYZEENmoB9STOv0U0Afv+oAGBS02I5jB559RyKdQAUUUUAFFFIxAByaAOX+Nfw4+Gfxb+E3iH4ZfGLQbHUvC2uaTPZ69ZaiqmGW1eMiQNu4AC5OT0xntX8sv/BNzwL8EtI/4LPzfsPeE/jNd+IP2eb/4nl3s7mU/2drclm0jWInU/JJiT5AT98Dvmv0p/wCDnn/grZ4j8CeFLT/gmL+yBq89/wDEf4gyR2niiTRWLXFnZysFWyj28iWcnacchMj+KvVv+CZn/Bu38CvgX/wTsPwP/aL0NpPiN40NtrPijxNpcmy+0S/QB7eO0nAyjW5PUcM+T0xQB+kXij4f/D7xN4DvPh74p8J6XdeHbrTntLvSbqzRrV7dk2mMoRt24JGO1flx/wAEx/2tP20vgf8AB7xX8EP2av2Fda+Lfw18I/EnW9M8BeLIfGdpZx/2dHctst0WcbnSNiyKw4wAB0r227/4Jhf8FHfFejP8F/iR/wAFddfvvhs6fZri303wLb2viC7s8AeTLqIlI5XhmSIMc9cmvsf9nn4C/DP9mT4P6J8EfhB4cj0rw/oNoILG0Q5Pqzux5Z2OWZjySSaAPlz/AIeA/wDBTn/pDvr/AP4cvTf8KP8Ah4D/AMFOf+kO+v8A/hy9N/wr7YooA+J/+HgP/BTn/pDvr/8A4cvTf8K/KL/guz/wU4/4Le+FP2ifBdr4f8BfEj4E6JcwRJ4a0Pwrr3njVtRLniaa1XbdMcYFs+Rgcqc5r+jWvhn/AILQwQy+O/2PvNhVv+Mv/C4+ZQeDDeZH6CgDmP2d/wDgoH/wV2m+BnhGb4o/8Eo9b1rxE3h+2bWdVTxxYWQvJzGN0vkMMwljyUPIJxXa/wDDwH/gpz/0h31//wAOXpv+FfbGB6UUAfE//DwH/gpz/wBId9f/APDl6b/hR/w8B/4Kc/8ASHfX/wDw5em/4V9sUUAfE/8Aw8B/4Kc/9Id9f/8ADl6b/hR/w8B/4Kc/9Id9f/8ADl6b/hX2xRQAUUUUAFFFFABRRRQAV8T/APBFP/kVfjt/2cJ4i/8ARiV9sV8T/wDBFP8A5FX47f8AZwniL/0YlAH2xRRRQAyVd4KEHBHWvhH4jf8ABt7/AMEn/i54+1n4n+OPgBPc6xr2pTX2p3H9rzL5k0jlnbGRjJJr7xooA/PT/iF5/wCCO3/Ruc//AIOp/wD4qj/iF5/4I7f9G5z/APg6n/8Aiq/QuigD89P+IXn/AII7f9G5z/8Ag6n/APiqqap/wazf8EetUtPsw+Ad/atnPm2mvTK30zmv0WooA/P34d/8GzH/AASJ+H2oQag37OkmsvbjEK65q01wq85xgnBAJPB9a+wPgP8Asrfs6/syaOdB+AfwX8PeE7V/9YmjaXHCz8fxMo3N+JNehUUAFFFFABRRRQAUUUUAFFFFABTZAChB/QU6huh+lAHxr+3j+3p+1j8Bv2wvhd+yR+yb+zj4a8e618Q/CutawR4h8RvpogXT2gDgPgr92YHkZOMCsz/hpb/gub1/4dt/DD/w7Q/+N1V/aa/5T3fsu/8AZI/Hv/uPr7noA+Iv+Glv+C5v/SNz4Yf+HaH/AMbo/wCGl/8Agub/ANI3Phh/4dof/G6+3abIcDJ6DrQB+Z37bP8AwUm/4K/fsl/sweMfj78YP2DvhnoGhaHpD/aNUh+J/wBoeJ5f3UeyIIDK291wo5NeE/8ABnP+zNquk/AT4i/to+N4JJdX8f8AiE2kF9cJ880MLM0rZPXdK5J964H/AIO/P27YfFup+BP+CYPww8SwHUNU1W21bxqgulRIix2WUErEgJy5lO4gABScZr9Nf+CfniT9hr9iX9jrwD+zP4f/AGrfhgD4Y0CCDUZo/HGnD7ReFd08h/fc5kLfgBQB9YpkKAevelrzMftpfscjgftY/DT/AMLvT/8A49R/w2n+xz/0dj8NP/C70/8A+PUAemUEgEAkc9K8j1/9v39hjwvatea7+2L8MIEVdxz46sGbH+6spJ/KvmH9p/8A4OR/+CUX7NekzTxftDW3jPU1VjFpXg2FrpmcdFL4CD8SaAPvh2Uo3zDjqQelflj/AMFpP+DkP4H/ALDNhq37OP7MEkPjr4xXEL2qrp8glstAmbCK07qT5swzkQpnnG4jpXxT8Tv+CvH/AAWP/wCC5niO8/Z//wCCaHwY1T4f/D+4la11jxPalhKYieRNfMNsAweY4vn98V9zf8Ejv+Daf9nb9hLUrT4+ftGyw/Ez4sMRcDUdVTzbHSZm5ZoI3z5kuf8Alq+T6AdSAeRf8G+H/BF/4j6d42n/AOCp3/BQy1utU+Jvih31DwxpOuxl59NEvzG8lVxlZmBwgxlFPTNfszAJBnzOufTFEcflsAseAFxx0HtUlABRRRQAUUUUAFfDf/BZ7/ke/wBj7/s8Dwt/6JvK+5K+G/8Ags9/yPf7H3/Z4Hhb/wBE3lAH3JRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXxP/wRT/5FX47f9nCeIv8A0YlfbFfE/wDwRT/5FX47f9nCeIv/AEYlAH2xRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABQ3Q/Sihuh+lAHwx+01/ynu/Zd/7JH49/9x9fc9fDH7TX/Ke79l3/ALJH49/9x9fc9ABTZFLdBkY5FOooA/Jz/goF/wAGqHwU/b0/a68X/tY6x+1P4r8O3fi26jubjSbbTYLiOCVY1Q7Hc52/KSF6DOBwK8cb/gyX+A7nd/w3H40X2/sK1/x4r9xqKAPw4/4glPgR/wBHzeNP/BDa/wCNH/EEp8CP+j5vGn/ghtf8a/ceigD8SdC/4Mm/2XIbhZPE37Z3j67jDZMVvpNmm4ehY5I/CvpD9mv/AINUv+CS3wB1mLxL4o+GWs/EO+iA2J401czWisP4vs8YRW+jlx7V+k1FAGB8PPhn4B+E/hez8DfDLwRpXh7RNPhEVjpOiWMdtbQIOgSONQqj2AxW+c5GPxoooAKKKKACiiigAooooAK+G/8Ags9/yPf7H3/Z4Hhb/wBE3lfclfDf/BZ7/ke/2Pv+zwPC3/om8oA+5KKKKACiiigAooooAKKKKACiiigAooooAK+J/wDgin/yKvx2/wCzhPEX/oxK+2K+J/8Agin/AMir8dv+zhPEX/oxKAPtiiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkY4U0tB6UAfAX7Zfj7wL8O/+C6v7LfiH4g+M9K0Gxf4V+OrdbzWdQjtYTM508JHvkIUs3YZyTX3tZ6lZahax31hcxzwSoHimhcMjqehDDgj8a84/aM/Yv8A2Uf2utMttK/aa/Z78I+N0sUddOm8RaHFcT2YfG7yZmHmQ5wM7GXoK+Z7n/gg5+z38OLmTV/2Mv2jfjR8DbpnLx2ngX4jXj6bu6jfZ3TyJKuQPlY49qAPuQy4AJU8+nP8qVWDEgdq+HU+AX/Bbf4HJu+HX7a3gL4u2MPKWXxH8Grpt7IB2NxY7UHHfyzUh/4KA/8ABSD4MjZ+0d/wTB1fVrWL/Xav8LfEUOpIR3YQSbHx+tAH2/RXxt4W/wCC6/7BcuoRaF8Ztf8AE/ws1Nztaz+JHhO70wB842iV02N9QSK+k/hZ+0l+z/8AHDTV1b4O/Gnwt4ngZA27Q9et7kgHplUclfxAoA7aioxMWXcFBHbDdaUTZOCtAD6KKKACiiigAopGYKMmk8we3TnmgB1FZPijx14P8E6XLrfjDxRpulWcK7pbrU7+O3iQepdyAB9a+cPin/wWg/4Ju/CnUm8PXP7SukeItYBITRfBSSaxdSH0VLVX3H6GgD6kLbTyp+oFIZRnAB/KviB/+CtHxy+LR+z/ALJ3/BNP4r+Jkl4g1bxXZpoNm2ehJuDvA+q0jJ/wXY+N6eXDP8G/gxYy8b2iuNevo19cZjiVvf5h7UAfb5nAGdpr4D/4LI/Ev4c6j8aP2RPh9p/j7RZ/EEH7Wvhi5l0OHVImu0iWO7VpGhDbwoZ0G7GMsK1m/wCCPPxZ+M6mX9tP/gqD8cvHEE4zd+HvCuup4Z0uQd43hsFXzE7fMd2Opr1b9nT/AIJC/wDBN/8AZY8QWfjb4O/sneF4PEdhKs1n4p1mB9U1SGZTkSx3V60ssT55yjLzQB9J0UUUAFFFFABRRRQBBc3YtY2nmljSNB8zSNtA981APEvh8jP9uWY/7el/xrn/AI0/B/wf8e/hhrHwj8fC6Oka5a/Z746ffPbzBMg/LIhDIeOoNfLo/wCCEP7BwGDD48/Dx9qP/wAdoA+w/wDhJPD/AP0HLL/wKX/Gj/hJPD//AEHLL/wKX/Gvjz/hxD+wb/zx8e/+F9qP/wAco/4cQ/sG/wDPHx7/AOF9qP8A8coA+w/+Ek8P/wDQcsv/AAKX/Gj/AISTw/8A9Byy/wDApf8AGvjz/hxD+wb/AM8fHv8A4X2o/wDxyj/hxD+wb/zx8e/+F9qP/wAcoA+p/iV8avhd8IvAGsfE/wCIXjfTtO0TQdPlvdUvpblSsMMalmbA5OAOgr84/wDg3h/4KF/sr/tFeI/jd8H/AIZfETz/ABFefFDWfFdhpd3ZSwSXekzyoEuYy4AYA4DKPmXcuQAQT618Sf8Ag3w/YG+IXgLV/BFy3juFNUsJLYzt43vpfL3LjdseQq2OuGGDjmvlT/g2i/4JEfCr9l/40/Fz9pwePtT13XPDfi3VvAmhxTxLFFBawzRl52C53SvtUdcKAcDJoA/ZSN2ck4GOxp1IFC9KWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApGUMMGlooAQKBn3pBGoJYcE9TjrTqKAMfxV8PvAvjmxk0zxr4P0zV7eZNksGpWMcysvoQ4NfNHxX/AOCJf/BNP4p3766P2bbDwtqxJZNZ8B3c2jXMbH+JTasi59ypr6tdyvQdvSszxD4t8NeEbF9W8WeI7DTLWNf3l1qF6kMafVnIAoA+J5/+CT37VfwcJuP2OP8Agqx8VfD8cY/caF8Q44fE1gcdATOFnx2wJBxTYfiH/wAF9vgINvij4E/Bf476VCPmufCniKbw3q0oHX9xdg24JHOBI3PSvR/jL/wWh/4Jp/BHUG0HxB+1NoOtauhIXQ/B/mazeyEcYWK0VyxzxxXnKf8ABX/49fGYGD9i3/glP8ZPGsUh222v+Mo7fwvpbk9G8y6LS4HUgxqfpQBcsP8Agtx4b+Hckenftl/sPfG/4QXAYLPf6h4Ll1jTAe+y60/zS4/2vLA969k+Dv8AwVI/YA+PLrbfDP8Aas8IXV0xANhd6mtrcof7rRTbXU+xANeJyeEv+C8X7Q8DQeK/HPwP+BukXKkSWWkaTdeJ9SjjPVXMrRQbv9pCR7VwWvf8G3X7P3x38V2vxE/bX/aB8Y/E3WbdhIrQQWujWyP6qlnGrbf95mPvQB9r/E79tT9k/wCDOnnVfij+0V4M0OAJu3ah4ggQlfUDdk/gK+ffEv8AwXd/YtmvW0H4B+HfiP8AF7VicQ2Xw1+H97eRynttuZUjgP4SGvNfiX/wbEf8E4vFXiGy8c+AB4v8HeINOAFhqmm6810IiBwfKuhIjfTFdTon7GH/AAV1/Zl05LL9mf8Abk+HvjTSYABb+HPib8PFsndV6BrywYHp6RCgCxN+2R/wWZ+PZ8j9nT/gmXoPw60+biHxB8bfHkccig/xGxsQ8ykf3WyPemJ+wr/wVo+Op879pv8A4KkJ4Rs5uJtA+C3guGy2r3T7Xds8jf7wRDT5f+Cg/wDwVC+AyeV+1N/wSW1bxFZQ/wDHx4i+B3i+31dGHd1srjy5gO/L59q2fA3/AAXr/wCCeWtaknhr4teNPEnwp1hnCNpnxT8J3ejlXP8ACJZU8p/+AuRQA3wj/wAEGf2Dk1OPxH8cLbxr8W9XRt76j8TfG17qQd+58ouseP8AZIIr6Y+Ff7Ln7OPwO0xNG+DvwN8KeGbZAAsWiaDb24/HYgyfc1a+Gf7QPwQ+M+mpq3wi+LvhrxJbyRh1k0XWoLj5fUhGJX8RXW+acjEi4IyDng0AOECKMKSPT2pfLUDAJ/wpUJK5P8sUtACFFPBzx05paKKACiiigAooooAKKKKADH+c0YHpRRQAYHoKMD0FFFABgegowPQUUUAIUVhgqK+KP+CKY/4pb47H/q4TxF/6MSvtivif/gin/wAir8dv+zhPEX/oxKAPtiiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACg9OKKR+VPNADHdhwrAHoN3QmvLvjh+29+yL+zVbyzfHn9pLwZ4WeAZltdV1+BLgDv+5DGQ/gtfIX/BTP4Y6l+1R/wVJ/Z6/Y68X/GT4g6B8PvE/wAPvF2q+JtC8E+MLnSV1WazazMInMDDzEHmONrZ4JxjNe8fAf8A4I5/8Eyf2c7iLUfhv+xn4KfU4WDprfiLTf7Xvg/dxcXxldGJGcqRQB5/ef8ABdn9lbxjMdO/Za+HHxK+MVzuKxTeBPBNzLZuf+vqVUiH4sKgb9rj/gr58afk+CP/AAT70LwNZzf6rU/ij4sUSKD0Y29qGYH2Jr7ZsNK0rSoFtNL023tokUBI4IVRVA6AADip9if3R+VAHw+37Gv/AAVp+N7eZ8e/+ClNl4Js5s+dpHwl8GQwui/3PtN35j/8CXaauaD/AMEIv2KNRv08QftDax8QvjBqanc9z8SvHt5exb+5ECOkYH+yQwr7UCqOigfhSgAdBQB5v8HP2Qf2WPgBp66d8FP2efB/heJcADRvD8EDcdyyoCT75r0cKoGAOnSlAA4AooAb5aDoooMUZ6oPrTqKAE2J/do8tAdwXB7470tFACBVHIFYXjj4Y/Dj4k6Y+j/EPwFo+u2siFHt9X06O4Vl9MOp4reooA+RfiX/AMEOv+CaHjzUH8Q6R+zvF4L1dnLprHw81S50WeN/74Fq6xlvdkNcwf8AgmF+2J8Gj5n7J3/BVD4k2VvH/qNC+Jlrb+IrUjsrSyIs2Og4YcV9wkAjBAoIB6igD4eT4gf8FzPgiceK/g98Jvi/YRffufDGpzaNeygd/Kn3xg+26nL/AMFldR+GDeR+1t+wb8Zfh+FP7/U7Twy2s2KDu3m2e8hR6kCvt4qp5Kj8qSSGGZSk0SuCMEMuQaAPm/4Jf8Fdf+CcH7QVymm/Dr9r3wb/AGgzbH0vWNUXT7lJDx5Zjudh3Z7DJzX0TZapZajax32nXkdxBKu6KeFwyOPUEcGvLPjt+wl+xf8AtMwvB8fP2WfAfiyRlKre6x4ZtpLqIf7E+wSxn3Vga+CP2q/2Bfgz/wAEy/2hP2aviR+w94s8f+ArXxt+0boXhjxR4P0vx9qEmh3+nXInkmje0lkZWz5SjB4wSMUAfqnRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXxP8A8EU/+RV+O3/ZwniL/wBGJX2xXxP/AMEU/wDkVfjt/wBnCeIv/RiUAfbFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFDdD9KKG6H6UAfDH7TXH/AAXu/ZdA/wCiR+Pv/cfX3PXwx+01/wAp7v2Xf+yR+Pf/AHH19z0AFFFR3HQDH4dqAJKK+cvjN/wVm/4Ju/s3/E7Ufgv8c/2w/BnhjxTpXl/2joWqX7Ce23oHUMApAJVgcZ71zB/4Lqf8EggSP+HgXw9yOv8AxMn/APiKAPrSivkv/h+p/wAEgv8ApIH8PP8AwZP/APEUf8P1P+CQX/SQP4ef+DJ//iKAPrSivl3w7/wWn/4JSeLbhbPQf28vh3NI3ADa2I/1cCvcvhb8e/gb8bLU3nwf+MHhfxQiKGkOga7b3ZjB/vCJ2K/jQB2FFJuX1FKCD0NABRRRQAUUUUAFFFFABXw3/wAFnv8Ake/2Pv8As8Dwt/6JvK+5K+G/+Cz3/I9/sff9ngeFv/RN5QB9yUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV8T/wDBFP8A5FX47f8AZwniL/0YlfbFfE//AART/wCRV+O3/ZwniL/0YlAH2xRRRQAUUjOqDLHp1qo/iLQY3Mcms2qsDhladQR9eaALlFUv+Ej8Pf8AQds//ApP8aX/AISPw9/0HbL/AMCk/wAaALlFU/8AhI/D3/Qdsv8AwKT/ABpkninwzCMy+IrFQem67Qf1oAv0VTtfEOg38ghsNZtZ3PRYZ1c/oatedFkDeMnpQA6ikV1b7ppaACiiigAooooAKKKKACkb7p+lLSOodSpGc0AfDH7TTKf+C937LpB/5pH49z/5IV90Z7V8Rf8ABQH9kv8Ab68ZftzfCP8AbN/YiT4Z3N18PfB2vaLe6b8RNUvLeOY6i1v8yfZoZD8qw+o5qIa9/wAHEfOfhv8Asr/+FRrf/wAi0AfcVMnQyJtAzXxB/b3/AAcRf9E2/ZX/APCo1v8A+RaP7e/4OIv+ibfsr/8AhUa3/wDItAH4+f8AB2D/AME8tK/Z4/bj0D9tkadd3Xgn4qX0Y8UwwNtaHUIVQTor4IQzRDeCQcMGIHavt74L/wDBqF/wR1+PPwl8OfGfwF4z+Jl1o3ifRrfUtNmXxRbnMUsYcA4t+ozgj1Bqz/wV4/ZL/wCC2f7c/wCw34s+F/x4+FX7Osml6LB/wkEEnhXxBq0mppLaK0m21EtsEMjoHTDEA766X/g0h/a6ufjx/wAE6ZPgr4i1Uz6r8M9aewjR3JcWUp8yIYPQAlgBQBB/xBzf8EpT08RfE7/wpoP/AJHpf+IOb/glL/0MXxP/APCmg/8Akev1eQBUCjsMUtAH5GeI/wDgzW/4JmahamLw58Q/iVp02MLNJrFvPg+uPJWvBviv/wAGgnxy+BV2PiJ/wT3/AG6tZ07XLLMlnHqEkmnXAYcgLPbONvIHOK/eykYZUj29cUAfz3fCr/guR/wV/wD+CPnjmx+Bf/BW34Iax408LeYIbDxncwAXkkY4yl5GPLusAA4fEnqT1r9nf2Gv+Chv7Kn/AAUK+GcXxP8A2avijY6xGiL/AGppLSBL7TpCCfLmhPzJ3wcEHHBr0P41fAX4QftE+AL74XfG/wCHGk+J9A1KExXmm6vaJLG6nPI3DKsM8MDke1fgz/wUJ/4IUftk/wDBI34vXX/BQv8A4I8+PNa/4RzRy95q/hW2ume+0y3DBpIyh4vrTA5Qjeo5wdu4AH9C4YE4Bpa+E/8AgiN/wWe+GH/BVP4KmLWFttE+KPhm3SLxh4bRiokPT7VAp5MTEdOqk4NfdYdWOAc0ALRRRQAUUUUAFfDf/BZ7/ke/2Pv+zwPC3/om8r7kr4b/AOCz3/I9/sff9ngeFv8A0TeUAfclFFFABRRRQAUUUUAFFFFABRRRQAUUUUAISFGTXxP/AMEU2U+FvjsAQf8AjITxF/6MSvteQ7Uzk/hX5i/sq/FP9uz9hvxV8XPAMP8AwTY8c+M7DxB8W9Y17Ste0nVrOOGe2uHUoQHfPRaAP08or4k/4eV/tz/9IgviZ/4PrD/4uj/h5X+3P/0iC+Jn/g+sP/i6APtW7DFGKtgbD0r+Wn4Efshftl/8FXP+Cqnx9/Z5+Ff7auseBR4U1jVNUSe/vryeFoVvxAIUSKVduPMBHbiv2+n/AOClf7c/lH/jUJ8Sxwf+Y9YHt/10r8zv+DYTxDrHiz/gt7+0z4m8Q+F7jRL6+8P6lPd6RdurS2cjavATExXglTwcelAG83/Bp9/wU1Y7j/wVwUZ9LfVP/kik/wCIT3/gpr/0lwX/AMB9T/8Akiv3yooA/A3/AIhPf+Cmv/SXBf8AwH1P/wCSKgvv+DSn/gpDqoWPVP8AgrFDMg/ha21T/wCSK/fmigD8D/Ef/Brv/wAFYvhXpWm+Jf2Z/wDgpvp/9u6fYKl1a3WparYJcTBmJdJQZuSCowVUcda4J/8Ago9/wcX/APBFDxFHZ/tvfCO4+JXgOOcK+ralGb20ePuYdRt+Y2wekmecZWv6LTnHB5rH8Z+BvCfxC8M3vg7x54estX0nUIGhvtO1C2WWGeMjBVlYEEYoA+bP+CY//BXz9kn/AIKkfDX/AIS74IeJvsHiKxgU+I/BGqyKuoaa5wOQOJYyeFkXIb2IIr6pSRZM7a/nx/4LI/8ABIT4u/8ABIj4rQ/8FXf+CU2q3vh3Q9Eu0n8UeG7FmkXSQ7BWYIf9ZZuSA8bcLn06frX/AMEh/wDgpT4D/wCCn/7IGifHfQPs1p4ht4ksvGWiQyZNhqCKN4APPlt95c9jjtQB9S0UisG6dqWgAooooAKKKKACiiigAooooAKKKKAINQs4NQtZbK5jDRzQvG6noVYYI/WvwE/4ILw3X7FX/Bwj+0H+wlo0hTw5q0OqXFjbg4SMwTxzwqq+0Vwy59I6/oAc9sZ6Z5r+f7wk8vhL/g86t7HQrVrJNXF8l+in/XBtDuJCT7Fo0P4UAf0BIMKBS0inIz/KloAKKKKAA5I4qC7s4b21ktbuGOSOVCkkbrkMpGCDnqKnpGGVxj86AP55P+C1H7DvxY/4Ij/toeGv+Ctn7AkEun+E9R10DxXotpGVtbO6kbLwSqvH2e4GQAeFf8K/Zj9i7/go7+zn+2L+xrpX7anh/wAZ2Gj+HJtM87xH/ad4sY0S4jUefBO7EBShzyeoII6ivTP2hfgX8Lf2kvgx4j+CPxr8O22q+GfEemSWmrW1yAFERX/WBj91kPzKw5BUHtX8wH/BODwf4U8M/wDBXDUf+CV1h+0HL4i+AOq/E5/7QtY7ki0117He1uj4ODuYCN8cPtweMUAfvjof/Bez/gl3r3jOLwhb/tBXFvDc3X2ez8R33hfUINGuZM4Hl37wi3cE5AIfBIr6+0rVdN1zTodX0e9iubW5iWS3uIJA6SowyrKQcEEcg1xXi/8AZ5+B/jb4W3PwZ8V/CzQrrwtc2DWkmhSaZGLcQlNu0LjC4HcYIr82P+CbX7cf7WPwP+E3in4AfCX9ifxx8YfBXgP4iaxong3xnpes26xyadDORHBunfc/lZKbhkYUDtQB+slFfEf/AA8r/boHX/gkD8S/w17T/wD4uj/h5Z+3R/0iA+Jn/g+0/wD+OUAfblfDf/BZ4geOv2P2JwF/a/8ACxJPA/1N5Vj/AIeWft0f9IgPiZ/4PtP/APjlfkh/wcCf8Flf29NO/aM+FfhPU/2ZLr4UQeAPEFl428OWHimCK7nvdVty6xTeZGxRolDsvlg5ycmgD+kkyqDtINOr88P2fP8AgrD+3z8Sfgl4V8f6z/wSW8f3t5rGhW11cXmn6vZxQTu6BjJGkjhlVjyAwyAa7P8A4eWft0f9IgPiZ/4PtP8A/jlAH25RXxH/AMPLP26P+kQHxM/8H2n/APxyj/h5Z+3R/wBIgPiZ/wCD7T//AI5QB9uUV8R/8PLP26P+kQHxM/8AB9p//wAco/4eWft0f9IgPiZ/4PtP/wDjlAH25RRRQAUUUUAFFFFACMocYNIsYVt2cnGCSKdRQAUUUUAR3ShomDAEbScEV+Bf/BuDj/h/l+1eAOP7O1f/ANPMNfvrcf6pv9w/yr8Cv+DcH/lPl+1f/wBg7V//AE8w0AfvxRRRQAUUUUAFI6b125paKAMfxx4H8K/ETwXqvw+8caJbano2t2MtlqmnXkYeK5glUpJG6nghlJGPevwD/wCCOE3iD/gkl/wcB/EL/gmrqt3KPCHj66uV8MJPJkNGEe6snOereSrxk/3kNf0JTAMuCSOe1fz2f8HCHiSz/Zd/4OCf2c/2kdB0y+muVl0S61W30q2M11dQx6gIZIokXmR2hd0Vc/MWA70Af0JRY5I74P6Y/pT6+H4v+C7PwCILH9k39ornn/kkVz07fx+lP/4fsfAL/o039ov/AMNDc/8AxdAH27RXxF/w/Y+AX/Rpv7Rf/hobn/4uj/h+x8Av+jTf2i//AA0Nz/8AF0AfbtFfEX/D9j4Bf9Gm/tF/+Ghuf/i6P+H7HwC/6NN/aL/8NDc//F0AfbtFfEX/AA/Y+AX/AEab+0X/AOGhuf8A4uj/AIfsfAL/AKNN/aL/APDQ3P8A8XQB9u0V8Rf8P2PgF/0ab+0X/wCGhuf/AIuj/h+x8Av+jTf2i/8Aw0Nz/wDF0AfbtFfEX/D9j4Bf9Gm/tF/+Ghuf/i6P+H7HwC/6NN/aL/8ADQ3P/wAXQB9tTNt6qCMHJPQV+AH/AATtmt/2lf8Ag7U+LPxY01jqOm+DbbWRBfg7kikjjhsgAe3LzKPoa+6/2l/+Dh39n74T/AbxZ4+H7NHxz065sNCuTptzr/wzns7P7WyFYFlmd9satKUUnsCT2r5e/wCDOb9nLWj8M/ir+3B49ikn1fxz4h+w2+oXC/vJ1RmlmfPfdK5zjvQB+269OlLSJ93FLQAUUUHgcUAFI5wpNRmdl+8g+oP8/wDJr88P+CyP/BwZ+zZ/wTe8Ian8K/h3q8HjL4x39m0Wh+GtNPmwadKwws97ICBGqnJEQy74AwASQAeR/wDBzR/wWB1b9mr4UR/sGfss67NN8V/iLEtnqEmjylrnSbCU7GRNnzLPNnYvcAkjB2kQf8Etf+Dbn4YfDP8A4J8y6H+0WLzS/jH41mtNcfxbpThNR8JXMP7y1jtpP4WjY7pOztwc4FeY/wDBvZ/wSF+Lvxo+Mtx/wV9/4KRWd1qvi3XLptR8C6VraZdJHORqEkbD5cdIkP3RzjpX7hiIAY3H6mgD4J1P9jX/AILNeN/DUnwH8b/8FF/Cln4RliNre+MPD/gloPEt3ZkFSvmGQxRylSQZFUHJyADX1v8Asu/s1/Cv9kf4IaH8Afg5orWWh6DbeXD5sheW4kJ3STyueXkdyWZj1JNegbBnJ5pQMUAGPTijB9TRRQAYPqa5H4jfAP4H/GG807Uvi38HvC3im40e4FxpFx4i8P2169jKDkPC0yMY291xXXUUARR2cUSLHGoVFACoFGFA6AenapcH1NFFABg+powfU0UUAGD6mjB9TRRQAUVzPxe+L/w4+A/w91T4r/F3xjaaB4c0W3M+q6tfkiK2j6bmIBOPwr5yX/gup/wSM2jd+3n4F6d7qb/43QB9Z0V8m/8AD9X/AIJF/wDR+ngT/wACpv8A43R/w/V/4JF/9H6eBP8AwKm/+N0AfWVFfJv/AA/V/wCCRf8A0fp4E/8AAqb/AON0f8P1f+CRf/R+ngT/AMCpv/jdAH1lRXyb/wAP1f8AgkX/ANH6eBP/AAKm/wDjdH/D9X/gkX/0fp4E/wDAqb/43QB9ZUV8m/8AD9X/AIJF/wDR+ngT/wACpv8A43R/w/V/4JF/9H6eBP8AwKm/+N0AfV9x/qm/3D/KvwK/4Nwf+U+X7V//AGDtX/8ATzDX6hT/APBdL/gka8bBf29PAn3SAPtUvUg/9M6/Kv8A4NkPF/hj4gf8Fx/2nfHHgvWodS0nVtC1O707ULfPl3EL6vAyuuQDggg0Af0FUUUUAFFFFABRRQTgZoAZcMyx5Q85/wA/59M1/P5/wUGv4P22P+Drr4NfBLRZxdWXw21TS5tQkg+byXs92pOrY6fMkSn/AHxX6+/8FNv+Ch/wm/4Jr/sp69+0P8Sr6GS9t4Gt/DGheaBNquoMCIoUHUjPzM3ZVNfl9/wavfshfE74zfGD4kf8Fff2jdKeTV/HepXieGry7jIMzTzGS5njz0QHEakcALgdKAP3HhG1cU+mxkEkg96dQAUUUUAFFFFABRRRQAUUUUAFNkZhwvUg06o7hsYBHXNAH4b/APB33+3He6n4f8Cf8EyfhTqn2rXvFmqQap4rs7NiXWLeI7O2YDu8jF8dwgOMEV+oH/BNn4AfC79hv9iX4ffs0af4t0UXPh/QIRrMseoRYlv3UPO+d3P7wsAfQCvz+/4KP/8ABrFrn7e/7bPjH9rmx/bCm0OPxTdQTw6ZdaU80lmyRIm1JAwwgK/KB0HFePH/AIMzPicOD/wUU1D6f2dP/wDHKAP3XHj3wOOnjPSf/BjF/wDFUf8ACfeB/wDoc9J/8GMX/wAVX4Uf8QZvxN/6SKah/wCC6f8A+OUf8QZvxN/6SKah/wCC6f8A+OUAfuTrPxj+EvhyA3PiH4o+HbGNRlnu9agjAH/AmFfNn7VH/Bcv/gl/+yFos198TP2sfDOo3yRlotE8KXq6pdzHsFW3LAZ6ZJAr81tL/wCDMLVLuQJ43/b/ANXuoDwUt9Mckj/gb4r3j9nf/gz9/wCCbXwp1mHX/jH4o8XfEZo2DfYNRvRZWshzk71g+dx/wMUAfKH7QX/BwD/wUv8A+CuHj+4/ZY/4JFfs6a54a0a6YwXXiPy/N1Bojx5k84/c2KYOcAlh/ePSvrD/AIJPf8Gx/wALP2afENt+0r+3p4ji+KnxUupDdy2t2xm03TJzyWzJ811KDn944C56AdT+lnwC/Zm/Z/8A2XfAtv8ADT9nr4R6F4R0S2QLHYaLYrEG4xudh80jHuzEk9ya7sIq9BigCO0s7WxgS2s7dIoo0CRxxqFVFHQADgCpaKKACiiigAooooAKKKKACiiigAooooAKKKKAK2r6No/iDTZtG17Sra9tLhNs9rdwLJHIvoysCCPrXOf8KG+B3/RG/Cv/AIT9t/8AEV1lFAHKf8KH+B//AERzwr/4T9t/8RR/wof4H/8ARHPCv/hP23/xFdXRQByn/Ch/gf8A9Ec8K/8AhP23/wARR/wof4H/APRHPCv/AIT9t/8AEV1dFAHKf8KH+B//AERzwr/4T9t/8RR/wof4H/8ARHPCv/hP23/xFdXRQByn/Ch/gf8A9Ec8K/8AhP23/wARR/wof4H/APRHPCv/AIT9t/8AEV1dFAHIz/Aj4ICJgPg74W+43/Mv23p/uV+Fn/BuAukaB/wXi/aptovs9nbR6bq0cMS7Y0QDWIcKBwAPYV+/00cjoRGwBK4Ga/B34x/8GmP7bPiz9pjx3+0F8Iv2/fDXhFvGPiG8vhDY2GoRzpBNMZBE7xsA2Mj2yKAP3ZGvaMRn+2LX/wACF/xo/t3Rv+gxa/8AgSn+Nfgkf+DUT/gqgT/ylnsh7b9W/wDi6P8AiFD/AOCqH/SWmy/761b/AOLoA/e3+3dG/wCgxa/+BKf40HXtFAydYtf/AAJT/GvwS/4hQ/8Agqh/0lpsv++tW/8Ai6qa1/wal/8ABW23hDeHf+CqejXcm7lL3UdZt1x9VEh/SgD97tX8aeEdBsn1LW/FWn2cCqS09zepGij1yzYr4e/4KAf8HEf/AATs/YW0PUNMX4uWfjvxpFERZ+EfCNwLqQy/wrNKuY4V9STnjoa+BdK/4NOf+CkHxYXTtD/ab/4Kj6ZDpFjbLCbfw9BqWoM6BmOMTvbqSdx+Y5PTg19c/sT/APBqj/wTf/ZU1OHxj8SLPVfir4hhmEsV54wdfs0TjutvEFQ885bcfegD89Pgb+xr/wAFA/8Ag5s/a2sf2rv2z7PVPA/wL0aXbpVjEGiie2DAm1sEflnkwPMuDn2PCgf0O/CP4WeAPgn8OdF+EXwv8N2+keHfDumQ2GkaXariO3giUIqjuTgck8k5JOSa1/DnhvRPCWkW/h7w1pNtYWFpEsVrZ2cIjjiQDAVVHCgegq/gelAAAB0GKKKKACiiigAooooAKKKKACiiigAowM5xRRQAm1QMADHpSgADAGKKKACiiigAAA6Ck2r/AHR+VLRQAYHoOOlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z",
        "alt": "Sơ đồ mạch chốt SR đầy đủ",
        "caption": "Sơ đồ mạch chốt SR dùng cho câu này - trang 43"
      }
    ],
    "aiNote": "Đáp án B đúng theo dữ liệu đề: sơ đồ là mạch chốt SR.\nMạch chốt SR có hai tín hiệu Set/Reset và có khả năng lưu trạng thái.\nVì câu này phụ thuộc hình ảnh sơ đồ gốc nên cần đối chiếu lại hình.\nCần kiểm tra lại đáp án."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án B đúng vì: Mạch chốt SR.\nwire/net biểu diễn đường nối phần cứng và thường nhận giá trị từ assign, cổng hoặc module.\nNó không được gán trực tiếp trong procedural block như reg."
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
    ],
    "aiNote": "Đáp án A đúng vì sơ đồ là mạch chốt D.\nTín hiệu D được đưa trực tiếp tạo nhánh S và đi qua cổng NOT để tạo nhánh R, nên S và R luôn bổ sung nhau.\nHai cổng NAND hồi tiếp chéo bên phải có nhiệm vụ lưu trạng thái ngõ ra Q và Q̅.\nKhi tín hiệu cho phép/clock ở mức tác động, Q nhận theo D; khi không cho phép, mạch giữ giá trị cũ.\nKhông chọn chốt SR vì S và R không độc lập; không chọn Flip-Flop vì mạch chốt D nhạy theo mức, không kích theo cạnh."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì: Mạch chốt D.\nTín hiệu được gán trong always/initial phải là reg trong Verilog truyền thống.\nreg là biến lưu giá trị mô phỏng và có thể tổng hợp thành FF, latch hoặc logic tùy cách mô tả."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Trong code, khối always @(posedge clk) cho biết mạch chỉ hoạt động khi có cạnh lên của xung clock, nên đây là mạch Flip-Flop chứ không phải mạch chốt.\nBên trong khối always, lệnh q = D; làm cho ngõ ra q nhận giá trị của ngõ vào D tại thời điểm cạnh lên clock xuất hiện.\nĐây đúng với nguyên lý hoạt động của Flip-Flop D: lưu 1 bit dữ liệu từ ngõ vào D theo xung clock."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án D đúng vì: Flip Flop T.\nTín hiệu được gán trong always/initial phải là reg trong Verilog truyền thống.\nreg là biến lưu giá trị mô phỏng và có thể tổng hợp thành FF, latch hoặc logic tùy cách mô tả."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì: Thanh ghi dịch 4 bit vào nối tiếp ra nối tiếp.\nwire/net biểu diễn đường nối phần cứng và thường nhận giá trị từ assign, cổng hoặc module.\nNó không được gán trực tiếp trong procedural block như reg."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Mỗi module DFF là một Flip-Flop D, lấy dữ liệu tại cạnh lên của clock C.\nTín hiệu in đi vào FF đầu tiên, sau đó dữ liệu lần lượt truyền qua q[0] → q[1] → q[2] → q[3].\nVì dữ liệu đi vào nối tiếp từng bit qua một đường in, nhưng lấy ra được đủ 4 bit tại q[3:0], nên là vào nối tiếp ra song song."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "count có độ rộng [3:0] nên đây là mạch đếm 4 bit.\nKhi rst = 1, bộ đếm được reset về 0000.\nKhi sp = 1, mạch mới cho phép đếm; nếu ud = 1 thì count = count + 1, ngược lại count = count - 1.\nVì chiều đếm phụ thuộc tín hiệu điều khiển ud, nên đây là mạch đếm lên/xuống có điều khiển."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì: Mạch đếm lên không đồng bộ 3 bit.\nwire/net biểu diễn đường nối phần cứng và thường nhận giá trị từ assign, cổng hoặc module.\nNó không được gán trực tiếp trong procedural block như reg."
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
    ],
    "aiNote": "Đáp án A đúng theo dữ liệu đề: sơ đồ là Flip-Flop T.\nFlip-Flop T giữ trạng thái khi T=0 và đảo trạng thái khi T=1 tại cạnh clock.\nVì câu này phụ thuộc hình ảnh sơ đồ gốc nên cần đối chiếu lại hình.\nCần kiểm tra lại đáp án."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Khi rst = 1, LED được đặt ban đầu là 8'b1000_0000, tức bit sáng nằm ở vị trí bên trái.\nMỗi cạnh lên của clk, lệnh led = led >> 1 dịch bit 1 sang phải một vị trí.\nKhi LED dịch hết thành 0000_0000, code đặt lại về 1000_0000 để lặp lại.\nVì vậy LED sáng theo kiểu dịch từ trái sang phải."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì: Sáng dịch từ ngoài vào trong.\nposedge clk biểu diễn sự kiện cạnh lên của clock.\nKhối always dùng sự kiện này thường mô tả Flip-Flop hoặc mạch tuần tự đồng bộ."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Khi rst = 1, LED bắt đầu ở trạng thái 1000_0000, tức chỉ sáng LED bên trái.\nMỗi xung clock, lệnh (led >> 1) dịch các bit sáng sang phải, rồi cộng 8'b1000_0000 để giữ LED bên trái luôn sáng thêm.\nChuỗi trạng thái sẽ dạng: 1000_0000 → 1100_0000 → 1110_0000 → ... → 1111_1111.\nKhi đạt 1111_1111, code reset về 0000_0000 rồi lặp lại."
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
    "note": "Đã bổ sung khung code chữ trong câu hỏi để người học dễ đọc; không hiển thị lại ảnh code gốc để tránh rối mắt.",
    "aiNote": "Đáp án A đúng vì: Sáng dần từ ngoài vào trong.\nKhi hằng Verilog có khai báo độ rộng lớn hơn số chữ số được viết, các bit còn thiếu bên trái được thêm 0.\nVì vậy biểu diễn đầy đủ phải đủ số bit đã khai báo."
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
    "id": "main_274",
    "aiNote": "Đáp án D đúng vì: Đầu ra phụ thuộc vào trạng thái quá khứ của mạch, cũng như giá trị hiện tại của đầu vào.\nMạch tuần tự có phần tử nhớ nên ngõ ra phụ thuộc cả trạng thái trước đó và đầu vào hiện tại.\nVới mạch đồng bộ, trạng thái thường cập nhật theo cạnh clock."
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
    "id": "main_275",
    "aiNote": "Đáp án A đúng vì: Xung clock.\nMạch tuần tự có phần tử nhớ nên ngõ ra phụ thuộc cả trạng thái trước đó và đầu vào hiện tại.\nVới mạch đồng bộ, trạng thái thường cập nhật theo cạnh clock."
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
    "id": "main_276",
    "aiNote": "Đáp án D đúng vì: Cả A, B và C.\nMạch tuần tự có phần tử nhớ nên ngõ ra phụ thuộc cả trạng thái trước đó và đầu vào hiện tại.\nVới mạch đồng bộ, trạng thái thường cập nhật theo cạnh clock."
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
    "id": "main_277",
    "aiNote": "Đáp án B đúng vì: =.\nBlocking assignment dùng dấu = và thực hiện tuần tự, lệnh sau chờ lệnh trước cập nhật xong.\nNon-blocking assignment dùng <= và cập nhật đồng thời ở cuối bước thời gian, thường dùng cho mạch tuần tự."
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
    "id": "main_278",
    "aiNote": "Đáp án D đúng vì: <=.\nBlocking assignment dùng dấu = và thực hiện tuần tự, lệnh sau chờ lệnh trước cập nhật xong.\nNon-blocking assignment dùng <= và cập nhật đồng thời ở cuối bước thời gian, thường dùng cho mạch tuần tự."
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
    "id": "main_279",
    "aiNote": "Trong Verilog, phép gán chặn Blocking = được thực hiện ngay tại dòng lệnh đó.\nLệnh phía sau chỉ chạy sau khi lệnh phía trước đã hoàn thành.\nVì vậy các câu lệnh blocking trong cùng khối always/initial được hiểu là thực hiện tuần tự từ trên xuống.\nKhác với non-blocking <=, các lệnh không được cập nhật đồng thời."
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
    "id": "main_280",
    "aiNote": "Trong Verilog, phép gán không chặn <= thường dùng trong mạch tuần tự như Flip-Flop.\nCác vế phải được đọc tại cùng một thời điểm, sau đó các vế trái mới được cập nhật đồng thời.\nVì vậy nhiều lệnh <= trong cùng khối always không làm thay đổi ngay giá trị cho dòng lệnh kế tiếp.\nĐây là lý do <= phù hợp để mô tả các FF hoạt động song song theo cạnh clock."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 49,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 8",
    "question": "Kết quả của a và b khi thực hiện đoạn lệnh sau?",
    "options": [
      {
        "id": "A",
        "text": "a=b=1",
        "correct": true
      },
      {
        "id": "B",
        "text": "a=b=0",
        "correct": false
      },
      {
        "id": "C",
        "text": "a=1, b=0",
        "correct": false
      },
      {
        "id": "D",
        "text": "a=0, b=1",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_281",
    "aiNote": "Đáp án A đúng vì phép gán chặn = cập nhật ngay theo thứ tự lệnh.\nBan đầu a=b=0, sau đó a=1.\nLệnh b=a đọc giá trị a đã cập nhật là 1, nên cuối cùng a=b=1.",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "a = b = 0;\na = 1;\nb = a;"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 50,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 9",
    "question": "Kết quả của a và b khi thực hiện a = b = 0; a<=1; b<=a",
    "options": [
      {
        "id": "A",
        "text": "a=b=1",
        "correct": false
      },
      {
        "id": "B",
        "text": "a=b=0",
        "correct": false
      },
      {
        "id": "C",
        "text": "a=1, b=0",
        "correct": true
      },
      {
        "id": "D",
        "text": "a=0, b=1",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_282",
    "aiNote": "Đáp án C đúng vì phép gán không chặn <= lấy mẫu vế phải trước rồi cập nhật sau.\nBan đầu a=b=0; lệnh a<=1 đặt lịch cho a thành 1.\nLệnh b<=a vẫn đọc a cũ bằng 0, nên cuối bước thời gian a=1, b=0."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 50,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 10",
    "question": "Phép gán nào đảm bảo được tính logic cho các mạch tổ hợp?",
    "options": [
      {
        "id": "A",
        "text": "Blocking",
        "correct": true
      },
      {
        "id": "B",
        "text": "Non – Blocking",
        "correct": false
      },
      {
        "id": "C",
        "text": "Assign",
        "correct": false
      },
      {
        "id": "D",
        "text": "Reg",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_283",
    "aiNote": "Đáp án A đúng vì: Blocking.\nMạch tích hợp có ưu điểm diện tích nhỏ, tốc độ cao, độ tin cậy tốt và tiêu thụ công suất thấp hơn mạch rời rạc.\nDo nhiều phần tử được tích hợp trên cùng chip nên giảm dây nối và ký sinh."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 50,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 11",
    "question": "Cấu trúc mạch tuần tự đồng bộ bao gồm bao nhiêu khối?",
    "options": [
      {
        "id": "A",
        "text": "2",
        "correct": false
      },
      {
        "id": "B",
        "text": "3",
        "correct": true
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
      "B"
    ],
    "type": "single",
    "id": "main_284",
    "aiNote": "Mạch tuần tự đồng bộ thường gồm 3 khối chính: khối logic tổ hợp, khối nhớ và khối điều khiển xung clock.\nKhối logic tổ hợp dùng để tạo trạng thái kế tiếp và ngõ ra.\nKhối nhớ thường là các Flip-Flop, dùng để lưu trạng thái hiện tại.\nXung clock giúp các trạng thái thay đổi đồng bộ theo cùng một thời điểm."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 50,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 12",
    "question": "Các khối trong cấu trúc mạch tuần tự đồng bộ là?",
    "options": [
      {
        "id": "A",
        "text": "Thanh ghi trạng thái, trạng thái logic kế tiếp, logic ngõ ra",
        "correct": true
      },
      {
        "id": "B",
        "text": "Logic ngõ vào, xử lý, logic ngõ ra",
        "correct": false
      },
      {
        "id": "C",
        "text": "Trạng thái quá khứ, trạng thái hiện tại, trạng thái tương lai",
        "correct": false
      },
      {
        "id": "D",
        "text": "Logic quá khứ, xử lý, ngõ ra",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_285",
    "aiNote": "Mạch tuần tự đồng bộ thường gồm 3 khối chính: thanh ghi trạng thái, logic trạng thái kế tiếp và logic ngõ ra.\nThanh ghi trạng thái lưu trạng thái hiện tại bằng các Flip-Flop.\nLogic trạng thái kế tiếp tính trạng thái mới dựa trên ngõ vào và trạng thái hiện tại.\nLogic ngõ ra tạo tín hiệu đầu ra của mạch."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 50,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 13",
    "question": "Cấu trúc của thanh ghi trạng thái là?",
    "options": [
      {
        "id": "A",
        "text": "Tập hợp các FF D được điều khiển bởi một tín hiệu xung clock",
        "correct": true
      },
      {
        "id": "B",
        "text": "Một mạch tổ hợp dựa trên trạng thái của ngõ vào bên ngoài và trạng thái bên trong (ngõ ra thanh ghi) để xác định trạng thái tiếp theo cho thanh ghi.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Một mạch tổ hợp tạo các tín hiệu ngõ ra",
        "correct": false
      },
      {
        "id": "D",
        "text": "Một tập hợp các FF JK chốt dữ liệu ở ngõ vào bên ngoài và cho kết quả cuối cùng ở ngõ ra.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_286",
    "aiNote": "Thanh ghi trạng thái dùng để lưu trạng thái hiện tại của mạch tuần tự.\nNó thường gồm nhiều Flip-Flop D cùng được điều khiển bởi một xung clock chung."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 50,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 14",
    "question": "Mạch logic tạo trạng thái kế tiếp là?",
    "options": [
      {
        "id": "A",
        "text": "Tập hợp các FF D được điều khiển bởi một tín hiệu xung clock",
        "correct": false
      },
      {
        "id": "B",
        "text": "Một mạch tổ hợp dựa trên trạng thái của ngõ vào bên ngoài và trạng thái bên trong (ngõ ra thanh ghi) để xác định trạng thái tiếp theo cho thanh ghi.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Một mạch tổ hợp tạo các tín hiệu ngõ ra",
        "correct": false
      },
      {
        "id": "D",
        "text": "Một tập hợp các FF JK chốt dữ liệu ở ngõ vào bên ngoài và cho kết quả cuối cùng ở ngõ ra.",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_287",
    "aiNote": "Trong mạch tuần tự đồng bộ, trạng thái kế tiếp được tạo bởi mạch logic tổ hợp.\nMạch này dựa vào ngõ vào bên ngoài và trạng thái hiện tại đang lưu trong thanh ghi.\nTừ đó nó tính ra trạng thái mới để đưa vào các Flip-Flop ở cạnh clock tiếp theo.\nA chỉ mô tả khối nhớ, C chỉ mô tả logic tạo ngõ ra, không phải logic trạng thái kế tiếp."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 50,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 15",
    "question": "Mạch logic ngõ ra là?",
    "options": [
      {
        "id": "A",
        "text": "Tập hợp các FF D được điều khiển bởi một tín hiệu xung clock",
        "correct": false
      },
      {
        "id": "B",
        "text": "Một mạch tổ hợp dựa trên trạng thái của ngõ vào bên ngoài và trạng thái bên trong (ngõ ra thanh ghi) để xác định trạng thái tiếp theo cho thanh ghi.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Một mạch tổ hợp tạo các tín hiệu ngõ ra",
        "correct": true
      },
      {
        "id": "D",
        "text": "Một tập hợp các FF JK chốt dữ liệu ở ngõ vào bên ngoài và cho kết quả cuối cùng ở ngõ ra.",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_288",
    "aiNote": "Trong mạch tuần tự đồng bộ, mạch logic ngõ ra có nhiệm vụ tạo tín hiệu đầu ra của hệ thống.\nNó thường là mạch tổ hợp, nhận thông tin từ trạng thái hiện tại và/hoặc ngõ vào để tạo ngõ ra.\nA là thanh ghi trạng thái, không phải logic ngõ ra.\nB là mạch logic trạng thái kế tiếp, không phải mạch tạo ngõ ra."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 50,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 16",
    "question": "FSM viết tắt cho?",
    "options": [
      {
        "id": "A",
        "text": "Finite State Machine",
        "correct": true
      },
      {
        "id": "B",
        "text": "Final Show MGI",
        "correct": false
      },
      {
        "id": "C",
        "text": "Foundation Similiar Machine",
        "correct": false
      },
      {
        "id": "D",
        "text": "Fixed Syntax Masssge",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_289",
    "aiNote": "Đáp án A đúng vì: Finite State Machine.\nFSM là viết tắt của Finite State Machine, tức máy trạng thái hữu hạn.\nNó mô tả hệ thống có số trạng thái xác định và chuyển trạng thái theo input/clock."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 51,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 17",
    "question": "Có mấy loại máy trạng thái?",
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
    "id": "main_290",
    "aiNote": "Đáp án A đúng vì: 2.\nMáy trạng thái hữu hạn thường chia thành hai loại chính: Moore và Mealy.\nMoore có output phụ thuộc trạng thái, còn Mealy phụ thuộc cả trạng thái và input."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 51,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 18",
    "question": "Các máy trạng thái bao gồm?",
    "options": [
      {
        "id": "A",
        "text": "Moore",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mealy",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A và B",
        "correct": true
      },
      {
        "id": "D",
        "text": "Moocgan",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_291",
    "aiNote": "Đáp án C đúng vì: Cả A và B.\nMáy trạng thái hữu hạn thường chia thành hai loại chính: Moore và Mealy.\nMoore có output phụ thuộc trạng thái, còn Mealy phụ thuộc cả trạng thái và input."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 51,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 19",
    "question": "Máy trạng thái Mealy là?",
    "options": [
      {
        "id": "A",
        "text": "Đầu ra là một hàm của trạng thái hiện tại của các FF và trạng thái của các đầu vào chính.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Đầu ra luôn phụ thuộc vào trạng thái hiện tại, không nhất thiết phụ thuộc vào đầu vào chính.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả A và B đều đúng",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A và B đều sai",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_292",
    "aiNote": "Máy trạng thái Mealy có ngõ ra phụ thuộc vào trạng thái hiện tại và ngõ vào hiện tại.\nNói cách khác: Output = f(Current State, Input).\nVì vậy khi ngõ vào thay đổi, ngõ ra của Mealy có thể thay đổi ngay mà không cần chờ trạng thái mới.\nB mô tả gần với máy Moore, nơi ngõ ra chủ yếu phụ thuộc vào trạng thái hiện tại."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 51,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 20",
    "question": "Máy trạng thái Moore là?",
    "options": [
      {
        "id": "A",
        "text": "Đầu ra là một hàm của trạng thái hiện tại của các FF và trạng thái của các đầu vào chính",
        "correct": false
      },
      {
        "id": "B",
        "text": "Đầu ra luôn phụ thuộc vào trạng thái hiện tại, không nhất thiết phụ thuộc vào đầu vào chính.",
        "correct": true
      },
      {
        "id": "C",
        "text": "Cả A và B đều đúng",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả A và B đều sai",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_293",
    "aiNote": "Đáp án B đúng vì: Đầu ra luôn phụ thuộc vào trạng thái hiện tại, không nhất thiết phụ thuộc vào đầu vào chính.\nĐịnh luật Moore thường phát biểu rằng mật độ/số transistor trên chip tăng rất nhanh theo thời gian, thường xấp xỉ gấp đôi sau khoảng 18-24 tháng.\nTrong phạm vi đề, phương án được chọn mô tả đúng xu hướng tăng mật độ tích hợp."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 51,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 1",
    "question": "Trong mạch chia tần số, giả sử đầu vào có tần số là A, đầu ra có tần số là B. Với A lớn gấp bội lần",
    "options": [
      {
        "id": "A",
        "text": "K = A / (2B)",
        "correct": true
      },
      {
        "id": "B",
        "text": "K = A / B",
        "correct": false
      },
      {
        "id": "C",
        "text": "K = B / A",
        "correct": false
      },
      {
        "id": "D",
        "text": "K = B / (2A)",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_294",
    "note": "Đáp án được bổ sung do trong PDF dòng đáp án không được in đậm rõ.",
    "aiNote": "Trong mạch chia tần số kiểu đếm rồi đảo trạng thái ngõ ra, mỗi lần đếm đủ K xung vào thì ngõ ra đổi trạng thái một lần.\nMột chu kỳ đầy đủ của ngõ ra cần 2 lần đổi trạng thái, nên cần tổng cộng 2K xung vào.\nDo đó tần số ngõ ra là: B = A / (2K).\nSuy ra K = A / (2B)."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 51,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 2",
    "question": "Với tần số xung vào là 50MHz, xác định tần số ngõ ra bộ chia xung được mô tả sau đây?",
    "options": [
      {
        "id": "A",
        "text": "10 MHz",
        "correct": false
      },
      {
        "id": "B",
        "text": "1 Hz",
        "correct": true
      },
      {
        "id": "C",
        "text": "1 KHz",
        "correct": false
      },
      {
        "id": "D",
        "text": "10 Hz",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_295",
    "note": "Đáp án được bổ sung do trong PDF dòng đáp án không được in đậm rõ. Đã bổ sung khung code chữ bên dưới câu hỏi để người học dễ đọc; ảnh gốc vẫn giữ để đối chiếu.",
    "codeBlocks": [
      {
        "title": "Đoạn code trong ảnh được gõ lại để dễ đọc",
        "code": "module CLK_XHZ(clk50m, clkout);\n  input clk50m;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (count == 25_000_000) begin\n      clkout <= ~clkout;\n      count <= 1;\n    end else\n      count <= count + 1;\nendmodule"
      }
    ],
    "aiNote": "Clock vào là 50 MHz, tức có 50.000.000 xung/giây.\nTrong code, clkout đảo trạng thái mỗi khi count = 25.000.000, tức sau 0,5 giây.\nMột chu kỳ đầy đủ của clkout cần 2 lần đảo trạng thái.\nVậy chu kỳ ngõ ra là 1 giây, suy ra tần số là 1 Hz."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 52,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 3",
    "question": "Tính toán hệ số chia tần được so sánh trong mạch đếm nếu muốn chia xung từ 50 MHz còn 2 Hz?",
    "options": [
      {
        "id": "A",
        "text": "50.000.000",
        "correct": false
      },
      {
        "id": "B",
        "text": "25.000.000",
        "correct": false
      },
      {
        "id": "C",
        "text": "12.500.000",
        "correct": true
      },
      {
        "id": "D",
        "text": "12.000.000",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_296",
    "aiNote": "Đáp án C đúng vì: 12.500.000.\nMuốn tạo xung 2 Hz từ clock 50 MHz và đảo ngõ ra mỗi nửa chu kỳ thì cần đếm 50 MHz/(2*2).\nKết quả là 12.500.000 xung clock cho mỗi lần đảo."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 53,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 4",
    "question": "Sơ đồ khối của hệ thống trên bao gồm mấy module ?",
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
        "text": "1",
        "correct": false
      },
      {
        "id": "D",
        "text": "4",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_297",
    "codeBlocks": [
      {
        "title": "Module CK_DIV trong ảnh",
        "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT trong ảnh",
        "code": "module DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT_2SPEED trong ảnh",
        "code": "module DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ bên dưới câu hỏi để người học dễ đọc; ảnh gốc vẫn giữ để đối chiếu.",
    "aiNote": "Đáp án A đúng vì hệ thống tổng thể instantiate hai module con: CK_DIV và DEM_8BIT.\nModule DEM_8BIT_2SPEED chỉ là module top dùng để kết nối hai khối đó.\nVì vậy sơ đồ khối bên trong hệ thống gồm 2 module chính."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 53,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 5",
    "question": "Khi speed=1, xác định xung nhịp đếm cho các trạng thái của bộ đếm?",
    "options": [
      {
        "id": "A",
        "text": "1 Hz",
        "correct": false
      },
      {
        "id": "B",
        "text": "50 MHz",
        "correct": false
      },
      {
        "id": "C",
        "text": "2 Hz",
        "correct": true
      },
      {
        "id": "D",
        "text": "Chưa đủ dữ kiện",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_298",
    "codeBlocks": [
      {
        "title": "Module CK_DIV trong ảnh",
        "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT trong ảnh",
        "code": "module DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT_2SPEED trong ảnh",
        "code": "module DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ bên dưới câu hỏi để người học dễ đọc; ảnh gốc vẫn giữ để đối chiếu.",
    "aiNote": "Khi speed = 1, code dùng nhánh đếm đến 12.500.000 rồi đảo trạng thái clkout.\nClock vào là 50 MHz, tức 50.000.000 xung/giây.\nMỗi lần đảo clkout mất 12.500.000 / 50.000.000 = 0,25 s.\nMột chu kỳ đầy đủ cần 2 lần đảo, nên chu kỳ là 0,5 s, tương ứng 2 Hz."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 53,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 6",
    "question": "Chương trình nào tồn tại lỗi cú pháp/ngữ nghĩa trong các chương trình trên?",
    "options": [
      {
        "id": "A",
        "text": "Chương trình 1 và chương trình 2",
        "correct": false
      },
      {
        "id": "B",
        "text": "Chương trình 1 và chương trình 3",
        "correct": false
      },
      {
        "id": "C",
        "text": "Chương trình 2 và chương trình 3",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cả ba chương trình đều tồn tại lỗi",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_299",
    "note": "Đáp án được bổ sung do trong PDF dòng đáp án không được in đậm rõ. Đã bổ sung khung code chữ bên dưới câu hỏi để người học dễ đọc; ảnh gốc vẫn giữ để đối chiếu.",
    "codeBlocks": [
      {
        "title": "Module CK_DIV trong ảnh",
        "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT trong ảnh",
        "code": "module DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT_2SPEED trong ảnh",
        "code": "module DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule"
      }
    ],
    "aiNote": "Đáp án C đúng vì chương trình 2 và 3 có lỗi theo đoạn code.\nỞ chương trình 2, OUT khai báo output wire nhưng lại được gán trong always nên phải là reg.\nỞ chương trình 3, tên cổng .out không khớp với OUT nếu Verilog phân biệt hoa/thường.\nDo đó hai chương trình này cần sửa."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 53,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 7",
    "question": "Lỗi tồn tại ở chương trình là gì?",
    "options": [
      {
        "id": "A",
        "text": "Kiểu biến",
        "correct": true
      },
      {
        "id": "B",
        "text": "Cú pháp",
        "correct": false
      },
      {
        "id": "C",
        "text": "Định danh",
        "correct": false
      },
      {
        "id": "D",
        "text": "Ngữ nghĩa",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_300",
    "codeBlocks": [
      {
        "title": "Module CK_DIV trong ảnh",
        "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT trong ảnh",
        "code": "module DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT_2SPEED trong ảnh",
        "code": "module DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ bên dưới câu hỏi để người học dễ đọc; ảnh gốc vẫn giữ để đối chiếu.",
    "aiNote": "Trong module DEM_8BIT, tín hiệu OUT được gán giá trị bên trong khối always.\nVới Verilog, tín hiệu được gán trong always phải khai báo kiểu reg.\nNhưng code lại khai báo: output [7:0] OUT; nên bị lỗi kiểu biến.\nCần sửa thành: output reg [7:0] OUT;"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 53,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 8",
    "question": "Khi rst =0, xác định xung nhịp đếm cho các trạng thái của bộ đếm?",
    "options": [
      {
        "id": "A",
        "text": "1 Hz",
        "correct": false
      },
      {
        "id": "B",
        "text": "50 MHz",
        "correct": false
      },
      {
        "id": "C",
        "text": "2 Hz",
        "correct": false
      },
      {
        "id": "D",
        "text": "Chưa thể xác định",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_301",
    "codeBlocks": [
      {
        "title": "Module CK_DIV trong ảnh",
        "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT trong ảnh",
        "code": "module DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT_2SPEED trong ảnh",
        "code": "module DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ bên dưới câu hỏi để người học dễ đọc; ảnh gốc vẫn giữ để đối chiếu.",
    "aiNote": "rst = 0 chỉ cho biết bộ đếm không bị reset, nên có thể tiếp tục đếm nếu ss = 1.\nTuy nhiên xung nhịp đếm thực tế của DEM_8BIT là clk_1_2Hz lấy từ module CK_DIV.\nTần số clk_1_2Hz phụ thuộc vào tín hiệu SPEED: SPEED=0 thì 1 Hz, SPEED=1 thì 2 Hz.\nĐề chỉ cho rst = 0 mà không cho SPEED, nên chưa xác định được xung nhịp đếm."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 53,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 9",
    "question": "Số ngõ vào hoàn chỉnh của module tổng thể sau khi tổng hợp là?",
    "options": [
      {
        "id": "A",
        "text": "4",
        "correct": false
      },
      {
        "id": "B",
        "text": "5",
        "correct": true
      },
      {
        "id": "C",
        "text": "6",
        "correct": false
      },
      {
        "id": "D",
        "text": "7",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_302",
    "codeBlocks": [
      {
        "title": "Module CK_DIV trong ảnh",
        "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT trong ảnh",
        "code": "module DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT_2SPEED trong ảnh",
        "code": "module DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ bên dưới câu hỏi để người học dễ đọc; ảnh gốc vẫn giữ để đối chiếu.",
    "aiNote": "Đáp án B đúng vì module tổng thể có các ngõ vào clk_50M, RESET, ud, ss và SPEED.\nĐó là 5 tín hiệu vào điều khiển toàn hệ thống.\nLED_8out là ngõ ra nên không tính vào số ngõ vào."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 53,
    "chapter": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "section": "II. NHẬN DẠNG MODULE VÀ XÁC ĐỊNH LOGIC MẠCH",
    "question_no": "Câu 10",
    "question": "Số ngõ ra hoàn chỉnh của module tổng thể sau khi tổng hợp là?",
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
        "text": "3",
        "correct": false
      },
      {
        "id": "D",
        "text": "4",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_303",
    "codeBlocks": [
      {
        "title": "Module CK_DIV trong ảnh",
        "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT trong ảnh",
        "code": "module DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule"
      },
      {
        "title": "Module DEM_8BIT_2SPEED trong ảnh",
        "code": "module DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule"
      }
    ],
    "note": "Đã bổ sung khung code chữ bên dưới câu hỏi để người học dễ đọc; ảnh gốc vẫn giữ để đối chiếu.",
    "aiNote": "Module tổng thể là DEM_8BIT_2SPEED.\nTrong phần khai báo cổng, module này chỉ có một ngõ ra là LED_8out.\nLED_8out có dạng [7:0], tức là một bus 8 bit, nhưng vẫn được tính là một ngõ ra hoàn chỉnh.\nTín hiệu clk_1_2Hz chỉ là dây nội bộ, không phải ngõ ra của module tổng thể."
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 1",
    "question": "Các Transistor được chế tạo từ loại vật liệu nào?",
    "options": [
      {
        "id": "A",
        "text": "Silic",
        "correct": true
      },
      {
        "id": "B",
        "text": "Wonfram",
        "correct": false
      },
      {
        "id": "C",
        "text": "Neon",
        "correct": false
      },
      {
        "id": "D",
        "text": "Plastic",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_304"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 2",
    "question": "Silicon thuộc loại vật liệu nhóm mấy?",
    "options": [
      {
        "id": "A",
        "text": "I",
        "correct": false
      },
      {
        "id": "B",
        "text": "II",
        "correct": false
      },
      {
        "id": "C",
        "text": "III",
        "correct": false
      },
      {
        "id": "D",
        "text": "IV",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_305"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 3",
    "question": "Khi thêm các nguyên tố phụ nhóm V vào Silicon ta được bán dẫn loại?",
    "options": [
      {
        "id": "A",
        "text": "N",
        "correct": true
      },
      {
        "id": "B",
        "text": "P",
        "correct": false
      },
      {
        "id": "C",
        "text": "Pnp",
        "correct": false
      },
      {
        "id": "D",
        "text": "Npn",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_306"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 4",
    "question": "Khi thêm các nguyên tố phụ nhóm III vào Silicon ta được bán dẫn loại?",
    "options": [
      {
        "id": "A",
        "text": "N",
        "correct": false
      },
      {
        "id": "B",
        "text": "P",
        "correct": true
      },
      {
        "id": "C",
        "text": "Pnp",
        "correct": false
      },
      {
        "id": "D",
        "text": "Npn",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_307"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 5",
    "question": "Hạt tải điện trong bán dẫn loại N chủ yếu là?",
    "options": [
      {
        "id": "A",
        "text": "Electron",
        "correct": true
      },
      {
        "id": "B",
        "text": "Lỗ trống",
        "correct": false
      },
      {
        "id": "C",
        "text": "Ion âm",
        "correct": false
      },
      {
        "id": "D",
        "text": "Ion dương",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_308"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 6",
    "question": "Hạt tải điện trong bán dẫn loại P chủ yếu là?",
    "options": [
      {
        "id": "A",
        "text": "Electron",
        "correct": false
      },
      {
        "id": "B",
        "text": "Lỗ trống",
        "correct": true
      },
      {
        "id": "C",
        "text": "Ion âm",
        "correct": false
      },
      {
        "id": "D",
        "text": "Ion dương",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_309"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 7",
    "question": "Tiêp giáp giữa bán dẫn loại P và N tạo thành?",
    "options": [
      {
        "id": "A",
        "text": "Transisor",
        "correct": false
      },
      {
        "id": "B",
        "text": "Diode",
        "correct": true
      },
      {
        "id": "C",
        "text": "Flipflop",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cổng logic",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_310"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 8",
    "question": "Đây là cấu tạo và kí hiệu của Transistor nào?",
    "options": [
      {
        "id": "A",
        "text": "BJT",
        "correct": false
      },
      {
        "id": "B",
        "text": "FET",
        "correct": false
      },
      {
        "id": "C",
        "text": "N MOS",
        "correct": true
      },
      {
        "id": "D",
        "text": "P MOS",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_311",
    "images": [
      {
        "src": "data:image/jpeg;base64,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78/DQ7hlN01YwrSbP67ILhTyVupNLBNjh7nyakEddJCymI7sPD4xECXF25c5+/mlrW73imX5HR6pXfSGuvd0u1+gv8d8ius0ndyNx18Zlad27BwbPG6iO3Xzw/xO482e6ZZUXOoucvYvikuVRUtrZqx94x500k7fayuf3u5ePQ4nfp4rydO867RdBkl1yfNezxUXXIqiIW6kNmyG001PTULJHvY3aSre90jnP3e7lxPBgDRsS6YYrnaPmDFnzvPxK4zV1rraqe92yrt9YzvaSqifBNHyLeTHAhw3BBG4J6hQMNddaR/ozX7522X6wvr1+Navgy3753WX6wrV5SRk2/COzBpvp1cbJW2KwzQSWON8VpiqrnV1cFuD28ZDTQzSvjhc4dHOY1rnbncncrz6PsiaV0FTaZYcfqxHaLoy9W2jfeq99HQ1jJRM2WCndOYojzG5DGgEEgggkHwPX41q+DLfvndZfrCevxrV8GW/fO6y/WFTRJdu0Vw603S23KltHdVtuuldeaWXymY93V1geKmXYv2PMSyeaQWt5eaBsNvRwvTXHdO23huO28WuK7V8t0q4Y5ZHROqZNjI9rHOLY+RG5DA0EknbckmI/X41q+DLfvndZfrCevxrV8GW/fO6y/WE00Oc/bbb/wBl/TnIsju1+ls9bbLrd28bnPYrzXWoXAbbf3Q2lmjbN06HvA7ceK92xaI4RjF0xe4WmwQW2oxi3zWq0Cle+OOkppiwyxiMO4HkY2HdwJ6dCNzvGvr8a1fBlv3zusv1hPX41q+DLfvndZfrCkRUVBOawaKvnr8a1fBlv3zusv1hPX41q+DLfvndZfrCosEfQoR7Mn7qa0/nCr/otGvKOu2tJHuZr8P/AMusv1hex2Xcfy202fO7rmOMSYfcsiyyrvMVpmrYKuSKB8NOxvKSBzmEkxO6AoJsREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFpeY6u49gtvtdddIr6+nuRa2nNtxy43B2524h7aeCR0RO42Dw3dbkx4kY143AcNxyBB/SD1CD6REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF1Ltd6Gw22ouFzrae3UFOwyTVVXK2KKJv75z3EAD4yV20QR1a+0Zpfe7ljdvoM+x+srck702eCGvjc6vEcj43GIA+cOccjQR0cWkDfZZufaI0zs16Nqrs5sdLWCs9T3d7WNEbKr/AOHdJvwbL/qy4O+JSIiDWso1LxPCrrZ7Xfsjtlpud4qY6S3UNXVMZPWSvcGsZFGTyeS4gdB+VeTh+u2neoOWXPGMZzax37ILaC6rt1vro5pogCGuOzT1DXEAkb7EgHYre0QaLlWumn2D3KroMgzC02iooww1fldS1jKTkAWCZ582IuBBAeQSCNt91qXaJpdMs4wfHafO81OMWia6UdzttRSXgUE1ZMxwMTGH20jXcxu1o38CNiARM6INdzDULHMBjpHZBeKa2OrHuZTRSuJlqHNG7hHG3dz+I6niDsOp2WhZ/wBq7TPAtIr1qK7KLferBbXvp2utVQyd1TVtYHClj4kgydRuP8nqXbBrtpfRBGehGt1i1l0sseS016s9VXvtNJWXiC31TXst88kDZJI3+cSzieY2cdxxO/gu9j2venWWZDTWK0ZpZq+7VbHSUlLFVt5VjG+2dBv0maPEmPkFvyINRyDV3CMUyOnx+85bZbZfJ4Zalluqq6OOfuYonSySuYTu1jY2OcXnYADxXbwHUXGNU8civ+IX2hyKzSyPibW2+YSxl7Ts5u48CD6D8XvrY0QeHl+cY/gNrZccjvFHZqOSVsEctZKGd7K72sbAer3n0NaCT6Aqeaa5fZsn+ybXOTGMqq8hsc+nE1VLTyXSaqio6w3ONksbYpHHycgMZvEA3bffYbq76IKd6wtsN01YqctqtfafEctsVzgo7LaIroW2OmEe5dR3FvRr5anm7nyLXsDow0O4bvs5k+puLYLLZ6bJshtVir7tPFSUVJVVjGyVU8jgxscLTs6QlzgOg+M7LaEQaJjOu+nWaZtcMPsObWO8ZPbw51TaqKujlnjDTs/zQevEkB22/E9Dst7REFPOzhSz2bt69pOzC6XS4W+joLC6ljulwmrHQCWmMr2tdK5zg3m9xDd9hvsNgAFtt0yjT+y9p605ja9UrZRyXGKbGb3Y6q6k0NTUbB0DodyYm1jJI2RuYCHOa8+Dm7PssiCDs4s2Y5f2lbNY7jaq+o0h+1eaokq6C4PpWeq/lAHCoEb2vkaIQODTu3d7nbEtBbG/ZfyHIbD2sNddLqa83PItO8cZb6y3S3WrkrJLXUVELXvpGzyFz3M85+zXOPER7ePLe3KICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k=",
        "alt": "Cấu tạo và kí hiệu nMOS dùng cho câu này - trang 55",
        "caption": "Cấu tạo và kí hiệu nMOS dùng cho câu này - trang 55"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 9",
    "question": "Mức logic cấp vào cực gate của n MOS để transistor dẫn là?",
    "options": [
      {
        "id": "A",
        "text": "1",
        "correct": true
      },
      {
        "id": "B",
        "text": "0",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "Z",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_312"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 10",
    "question": "Đây là cấu tạo và kí hiệu của Transistor nào?",
    "options": [
      {
        "id": "A",
        "text": "BJT",
        "correct": false
      },
      {
        "id": "B",
        "text": "FET",
        "correct": false
      },
      {
        "id": "C",
        "text": "N MOS",
        "correct": false
      },
      {
        "id": "D",
        "text": "P MOS",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_313",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Cấu tạo và kí hiệu pMOS dùng cho câu này - trang 55",
        "caption": "Cấu tạo và kí hiệu pMOS dùng cho câu này - trang 55"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 9",
    "question": "Mức logic cấp vào cực gate của p MOS để transistor dẫn là?",
    "options": [
      {
        "id": "A",
        "text": "1",
        "correct": false
      },
      {
        "id": "B",
        "text": "0",
        "correct": true
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "Z",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_314"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 55,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "I. KIẾN THỨC CƠ BẢN",
    "question_no": "Câu 10",
    "question": "Nguồn cung cấp VSS cho CMOS là ?",
    "options": [
      {
        "id": "A",
        "text": "0V",
        "correct": true
      },
      {
        "id": "B",
        "text": "5V",
        "correct": false
      },
      {
        "id": "C",
        "text": "3,3V",
        "correct": false
      },
      {
        "id": "D",
        "text": "0V – 5V",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_315"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 56,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 1",
    "question": "Hình bên mô tả hoạt động của transistor nào?",
    "options": [
      {
        "id": "A",
        "text": "BJT",
        "correct": false
      },
      {
        "id": "B",
        "text": "FET",
        "correct": false
      },
      {
        "id": "C",
        "text": "N MOS",
        "correct": true
      },
      {
        "id": "D",
        "text": "P MOS",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_316",
    "images": [
      {
        "src": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADDAWMDASIAAhEBAxEB/8QAHQABAAIDAQEBAQAAAAAAAAAAAAEIAgYHBQQDCf/EAEUQAAEDBAEDAgQCBwQEDwAAAAEAAgMEBQYRBwgSIRMxFCJBUQlhFRYXIzKBoTdCdbMZcbXSJSYoMzY4Q2VzdoKFsrTU/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAC0RAQEAAQIDBgUEAwAAAAAAAAABEQIhEjFBUWFxgZHBAzKhsdEjQuHwInKS/9oADAMBAAIRAxEAPwD+qaIiAiKC4A6QSigOBTfjaCUUdwQOB9kEovHy3L7LgmO3C/ZDc6az2a3wunqq2rf2RxMHuSf6Ae5JAHlcj4x64OEuYswocWxTN2V9/ro3S0lHU22sozUNaCT6bp4WNedAnQJOgfsUm+0OW9d0REQEREBERAREQEREBERAREQEREBERAREQEUbCjuG9IMkUdw3pO4IJRR3D7psa2glF8F8v1uxmzV12utbDb7ZQwvqKmrqHhscMbAS57ifYAAna83Ac/sPKGH2rKcZr/0nYrpD69HV+lJF6rNkb7JGtcPI+oCmRsKKNqVQREQEREBERAREQFWXqx6iMpwDMuPuMeNaWgquRM2rHRw1FzjdLT22kjAMtS9jSC4gEkDevkd4PgGzSqN1V8T5fQdQ3FXOeHWOfKm4kyehvdkoXN+NkopWuaZKdjiPUe0SSnsB2T2gfVYvzaZeWd/r74XfFxzxs8XI+SefuGuoXibDMqyjHcwxDLrhNA670NkNDVAxwue+GSP1JGt8mNzXNO/ldtXOmLzTv9Pt9TtPb3+2/ptUR5d5br+Wepjpq9DBspxayQX+ukFRlVu+AmqJhSH5Y4HO9Xta3uJe5rR8w1vyr3ywtqIHxPG2PaWuH3BC3M34ct55rnn9TuxPdUKQdche/wBOThLs92h36S2R9P5rtXAP7ZP0Rdf2xvw99z+Ib8AcP+I9H0e35vU9bz3d3trxpcQk/Ca6dZZXSOx67lzjs/8ADM/+8u3dPvTDgXTFZrra8DoKqhpLnO2pqW1VW+oLntb2jRcfA19E08sVvVz2V9/Enmkym7cEcaVMr247mOYwQ3aGNxb68Mb4v3ZI+n70n/W1p+i3brYxWz4vxjhWZW63U1JdsHyWzTWmSCIMMET6yGnkgboeI3RyaLB4+Vv2Cx69eF8r5HxvA8swW3NvGU4FkMF+htnqCN9ZCwgyRsJ8d+2MIH10QPOlqPIXL9X1cVGG4BieA5lQUrMit1zyesyOyyW6C3UtLMJ3wufJ4dM50bWhje7fk+w2s6ccuvFL9t/uau3pw2ee/wBeS6bfYKVA8AKVpJyEREUREQEREBERAREQEREBERAREQEREGJ91VI5zzTzpyxn9DxplOO4ZguH1oszbjcbO64z3K5Mja+oj16rAyNjntYXDz4Ogfpaw73pVGwq/X3pSz3kqxXPjvMMsxvJ8kqMms15xK1m4s3VMj9annaxwdC5kjHac4dpB3saXPe6vK+ux+3znv8Aw/Hog6iOUOYuT+YcY5Npbdbq7EKiio2UNth7Y4pSJmyua87c9jzEHt7ifDh5Puu/c4/tN/Uxo4mdjTcq+KZs5X6/wfoad3/8z83fvt19Pfaqb+H1dr5kPU31Q3TIrUbLdprtQCa3GVkxpdfEBsTnsJa5zWBgJaSCQfKtjznwJiHUZhIxTNqSorbMKplZ6VNUvgd6jA4NPc0718x8Lprzw6bOslNN/U19ktcB/wCXMSdycIAf+5q1uLm7nGbSb/8ACG+/CRfpD4Du+H+I7B6vp93ns7+7W/OtbVTv9Ev06aA/V67+P++Z/wDeVssWxqhw7GLRYLax8dutdHDQ0zJHl7hFEwMYC4+Se1o8n3V2wm+XFOrbgmDmfALyMgyO6xYrbLXU1rsdtrxTRVtXGxz45KiUfO9jdDUYLR3AOO9DWHQEAOjjir/CG/8Azeus8qUc9fxjl1LSwyVNTPaKuOKGJhe+R5heGta0eSSdAALmvRFYLrinSnxrZ73bKuz3WktYjqKGvgfBPA7vce17HAOafPsQFz05nFPD3au80+fs7mFKgf1UrUQREVBERAREQEREBce544Gq+VrnjeQY/md0wfMMbkklt1fRgT0snf298dVTOIbNGewDW2kfQrsKKWZWXCv+DdPWW1fI9jznlXPafOLxjsdQyx0Nrs7bbR0L52hk0xAe90r3MAaO4gNBdoEnY7+FKKzaYZxvkRERWLgCVBYCs0UwCIioIiICIiAiIgIiICIiAiIgIiICIiAiIgwPnfuq/ZPwVyda8zv944z5Xhxi13+pFbW2a+2Nt1igqCxrHyU7zKx0YcGNJjO293cRrelYRFnG+Tucf6eenKzcAUWQT011uGR5Jk1cbnfL7cy0S1tQdkkMYA2NgLnaaPbfuV15pWSLecpJgREUVDgCCD7KNAeFkigxA8lZIioIiICIiAiIgIiICIiAo2FK/PvAHuoM97Urm2Ac+Y1yRybnuCWmOvbe8Lkporm6phayFxna5zPScHEu8NO9ga/NdJSXMl7TuERFQREQEREBERAREQEREBERAREQEREBERAREQEREBQhOlr+f5tb+OMHyDK7s2Z1ssdBPcaptOwPkMUTC9/aCQC7TTobClsm9N7tGwE6UrzMcvtPlGP2y8UbZG0lwpoquESjteGPYHN2N+DojYXpD2V5bJLndKIiKIiICIiAiIgIiICIiAiIgg+Aqk4Nk3KvULzDywy3chTYBgmIXh+P26ns1ro6ipq6uKNrpZJpKmKX5A5zflaGlwOtt1s22PkKpGIYny5098zcpz2PA28hYBmF1dkFEbZeKWkrKGskja2VssdS+NpY57fdriQGggOJLRn92/ZfXb+S5xt2z0aD0B0WUW/qu6nqbM6qluGSxVNpZVVtHB6MVQAycRyiPZ7O+PscWjwCSFfZU+6MuKOWsW515wznlHHaWxPzCW3z0HwdwhqouyNsw9Idju4emx0bCXNb3EEjY8q4K1Pk0S9JC/Pqs7RERAREQEREBERAREQEREBERAREQEREBERAREQERQ72KDkPVpzZP089PmX55R00VZcLZAxtHBPv03TyyshjLtEEtDpA4gEEgEbG1XLl7EOdK/osyPLLxyk65X6vxmorbzjklnomWwUklO50sMDo4mzskZE52nmVwc5v8IB8WR6qeFT1D8BZdgUVXHQ1l0p2mkqZgfTjqIpGyxd2vIaXsaCQCQCTorgGXHqRyDpXreLxxPE/Mp7LJY6rInZBQi3zw+kYzJE0y+sZZGbHa9jGtc7ZdpYszp1Trt6f3m3puNWm9Oq0/Dn9keEa8bsdD/8AXYtyHstZ41tVVYuOsXtlfF6FbRWulpp4i4O7JGRNa4bBIOiD5BI+xIWzAaC7a99ds73D4cxpkSiIsOgiIgIiICIiAiIgIiICIiAtYyzMW4tdsUo3UpqTfrsbWHh/b6J+FqKjvI0e7xT9uvH8W9+NHZ1zLl5wGVcSbIGssP8Asq4oOmaAUqAQVKAigkBQXge50EGSLHvGk7wgyRY9w+6F4H1QZIsQ8E+6yQEREBERAREQEREBERAREQEREBERBi4ePt+a+W1XGju9BBW0FTBW0VQwSw1FNIJI5GEbDmuHggj6j3X1n2XKulIg9NPGOjsfq9ReR/4TUHVe0fZSiICIiAiIgIiICIiAiIgIiICIiAq3ZRT0mdZbnl2yHka44q/j24CooqSjfTRQ2uP4Jj210rJI3Om9QSzt289haHsaAQ8myK0rlLjWj5CxquhihoqbIo4S+03iekZNJQVTCHwSt2N6bI1ji0e+iPqg+nia/wB3yvjDD73kFG23X652ajrbhRsaWtgqJIWPlYAfIDXOcNHz48rbFpnFmfDPsflkqqX9GZBbJzbr1ay7uNHWsaxz2B395ha9j2P/AL0cjHeN6G5oMXKvXU51F3jjTKsG45wW30F05JzeqdDbxdHP+DoKdgJlqpwz5nNaAdNBG+1x38ujYVyoryzRTYj+KdxJkV6aW2O+Y9UWi2VT/LG1jWz90e/7pIkZ/r9Qfyxd9enTev4u30am2nVq7J+HUbvx11MYlaaq92jmOw5tdoYzKzGrviUNFRVBA36bJ4ZfVjPuAXFw3rehsrS+VetO6VvQXXcz4RHT2rJqeSlpamhrYhO2iq/io4KiJzTru13OLSdbBadeVceeeOKGSSQiONjS5znHQAH1P2X8h7xbKqX8ObqFyZrHMx/Js+Nws5PhslObhAz1Gj7EtI/9K1P8uKXu+8mPP2Zm2rTe/wBrfovZiuDc/wCTYtZ7v+3WyUxuFFDV+l+oUbvTL2B3b3fGDet63r+QX59RWcck8WYPxRZrTltvdluRZbRY7X5BLZWuhMc0c5dI2kMumkFjPHf9D58rluC9GPMVzwnH6yn6rMxoKeot9PLHSR25pbCx0TSGA+v7NBA3+S2Pr6xG7XbAuDMao8mqrXe5s+tNFHkcUfdPFN8NUt+IDe4bdv5td3v9Vr4m3xJpnLikx5uctum3uv2dH/ZZz9o656sn3/6AR/8A7F3mhjmhoqeOpmFTUNja2WZrOwSOA8uDdnWz51s6VSMc6NuYLRf7ZX1fVRmF0pKWpinmoJrc0MqGNeC6Nx9c6DgCN6+vsVb0eAE6NRKIijQiIgIiICIiAiIgIiICIiAoPgKVB8hBrHIGX1WI2eCS3WabILvW1LaOhtkMzIfXlLXOPdI/5WMaxkj3O8ntYdNc7TToPTLW1+M4TbuNMjoRbctxG00MdVFHUCoiqad7XshqY36BLXOgmaQQC10bh5Ba52+ch4fWZdZII7TeHWC+UNSytt9z+HFQyGZoc0h8Rc31I3MfJG5oc0lrz2ua7ThonTTT3HL8JtnJ2TVVJX5bltro5p30NK6mp6Smaxz4qaFjpJHBrXSyvc4uJc6Rx8Dta0OyBwd7HalQBoKUBFC8TKc2sGD2t1zyO9W7H7a09rqy6VcdNCD9AXvIH9VLZOZze4i1/FM/xrO6B9djWQWvIqJp7XVFprY6qMH7d0biF91RklrpLtT2qe40kNzqWl8NFJOxs0rRvZawnZA0fIH0KvJJc8npIvlr7lS2ujmq6yoipKWFhklnneGMY0e5c4+APzX7xSsniZJG9skb2hzXtOw4H2IP1RWaIiAiIgIiICIiAsX67TvRH5rJQfZBxfk7LsY6fc3p+QL/AFsdlx/Io2Wa818z9QQzQxyy0k7x77I9aEuGy4vpx7NGts4S5pxzn/AocyxOaaosNTVVNNTzzxGJ0ohldEX9p8gOLC4b0dEbAOwKzfiBdA1V1VUNFkOJ3p1uzK3gsFHc6uY2+si1rtDduEMg8acxuneQ76Obsf4Z/HuVcSdPVxwnMrZLab5YsirKZ8EhDmua5sUrXxvHh7HCXYcCR7/YoLYne/yXMefuA8d6hsJ/V++yVVBU01RHW2y8214jrbZVMILJoH6Pa4a0fuD99EdPIB9wnaPsFLMnJUrJOjDkHkDGjiuX9SGY3bEpGejNQ0lsoqOpni9iyWpa0vkBHg92wd+QV0jl3pYxrk7pxdw3R1M2M42yCkp4JKKNr3xMp5Y5GjTvDiTGASfJ2T7rtvaPsE0PsqnXLy8Zsrcbx212iOQzR0FLFStkcNFwYwNBP5nW/wCa07mDhyi5dqMHlrLjPbziuR0uRwiFjXCeSFsjRE7fs0+ofI8+Aui6TQS73N8TGJhDR4/NZKPZSiiIiAiIgIiICIiAiIgIiICIiAiKD7FAK5V0pf8AVp4x/wDL1F/lNWudXHVK3pLwq15XX4nW5LZaqsFBPLQ1TI30srml0Zc1w8tcGvGx7EAH+ILkX4cPVcedcEt2G2vC7hb7fhtopaOvv1VVRmB83Z2sjYwDuJd2Pd+Qb50SNhdZFDfZSgwlcGRucfYDaohw309471r5LdecOU5qzKLRPdK2hxjFZ53Nt1FQwTOgY9zGkFz3ujc4+Q0k7Id41e+Zgkhe0+xGlSDpq53w7pYr7rwFyXc24ZcrPd66aw3K7t9CguVtnnfUQyNqD8jXD1HNIcQNt0CXbAzp+e57Nvfzwas8Mx27/wB8WsdUPEtn6CorXzpwxbBj7aWuht2S42yeR1Bc6GU68scT2Pa/s7S3QHdvXgg6H1tV+R5J1ocP5Rx6PiMgoMNfktrp3NLvjBAaip9AgEE+qxrmaB3866R1scp2bq4x+2cD8NXmhzfI7xcYKm7VdqmE9DbKCI97ppahu4/4/SGmkn3GtloP05lYoMX/ABL+n+y0w3TW/CKmkjJ+rWQ1bR/QJp4tr33H/P5W4mf9d/WezaeQ+oKy9TP4dvIWa2Zvwz5serKe4UDn9z6GrZH+8hcTretgg6G2uafG1abjL+zfFP8ACaT/ACWL+fPXtjty6YY+RL/jNlc/jXlGyS2u+UtGGhlvvXY8QVYZ4DWyNPa4geSCT8xbv+g3Gf8AZvin+E0n+SxTRvxavDbs2pZwzTp8fZsqIi2giIgIiICIiAuZU2U5jlFzzH9CPsdFSWOvdbqaCvglmkrXtp4pXOfI2VggBdKWD5ZNBvf52Gjpq4jzLx/YanOeP6t1A6Ka+ZF8FdW01TNTxXKEW+rkDKqON7WTgOp4h+9a75W9v8JIIdG4uzVnJPG2J5dHTGijv9ppLq2mc7vMInhZIGF2hvXdrehvX0W0L56Gigt1LDS0sEdLSwRtiighYGsjY0aa1oHgAAAAD2X0ICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIOK9ZHHeKcq9OuWY1mN6jx211ccRhujx3GnqmytdTlrBsvJkDW9jQXPDi1vkhc5/DP4wtnE3TPSWeGuhq8gnrpa6+xMjdG+lqpGs7YXteA4FsLYfJGnb7m7a4Fd55Ro7023We8WK0frBcLJcW1/6IbOyGSrjMUsMjI3yEMEgZM57e9zWucxrS5oJcNP4OrZ+Ub7X8ui21tgtWRWegobXbK90PxElNE6eb4qYRPkaHPdVOa1neS1rNnReWgOze6lQ0aClBB9itO5G4kwzly0ttuaYva8nomnuZHcqVk3pn7scRth/NpC3JFLM8xpHGnC2CcO0lRT4TiNnxeOo165ttGyF82t9ve8DufrZ13E62vXrMFxy4ZXRZRU4/a6nJaGJ1PS3mWijfWU8bt9zI5i3vY09ztgEA9x+62BFd0w8bJsVs+ZWWos+QWihvtoqQ1s9vuVMyop5gCCA+N4LXAEA+R7ja9OkpYaGlhpqeJkFPCxsccUbQ1rGgaDQB4AA8aC/ZFMYUREVBERAREQEREBcw5dk/wCNvEg+v62n/ZVwXT1X7K+rqzWvL75YMdwHOORKjHqn4a61eLWlk9PRT9oc6Lvllj75GtcCWxhx+bXupmZwYd/a7uKyWhcL824lz5hzMmw24mvtvquppmyxOhmpp2674ZWOALXt2Nj28ggkEFb6tWWbVJZd4IiKKIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIoKDF7i0ey5X0ou301cZflj1F/ktW4cjch4/xRhV1yzKrlHaLBbIxLVVkrXODASGt0GglxLnNAAGySAq+Yb1f4VgWP4vbZ+N8+wLAJvhrbZ8gvdo1bwx4DYA94mfLG122hrpGjewSQpLnaHKLU7QeViHdzQsh7JukuUoiKqIiICIiAiIgIiICIiAiIgg+yodacFs+R868t33ifnW88XZVRXqQ5FjV5paaqt8s7I2h1S2mke0mF4/7Te992iNAK+S0jK+DeN87uhueS8f4tkNyOt1l1stNVTHQ0PnkYT4191Mb5XphxroW6hsh59xXMP0/b7I1+N3uSzw3jG2PZb7mGeTLE1xcRvwfBIIePb2VnF8FjsFsxm2w26z26ktNvhGoqShgbDFGPs1jQAP5Bfet25YkwIiLLQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKCdBSiDiPWdPhMHTRmx5FpLrV4a+mjjr22RjX1kYdMwMkjDiBtkhY7Z8Dt8gjYVWrnkeU9LnBNlzXBeeLZypgIdRsteJ5hQwz1NTG97GiKnq4pBJ6rARqMtIZ2HwO0hf0OqqSCuppaephjqKeVpZJFK0OY9p8EEHwQfstEtXT1xXY7yy723jTD7fdo3iRlfS2Glina4HYcJGxhwP57WZMXPgvSSt6j32b/ov1Hsmh9lK0zJiYEREUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==",
        "alt": "Hoạt động nMOS: g=0 OFF, g=1 ON - trang 56",
        "caption": "Hoạt động nMOS: g=0 OFF, g=1 ON - trang 56"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 56,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 2",
    "question": "Hình bên mô tả hoạt động của transistor nào?",
    "options": [
      {
        "id": "A",
        "text": "BJT",
        "correct": false
      },
      {
        "id": "B",
        "text": "FET",
        "correct": false
      },
      {
        "id": "C",
        "text": "N MOS",
        "correct": false
      },
      {
        "id": "D",
        "text": "P MOS",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_317",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Hoạt động pMOS: g=0 ON, g=1 OFF - trang 56",
        "caption": "Hoạt động pMOS: g=0 ON, g=1 OFF - trang 56"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 56,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 3",
    "question": "Mạch điện trên thực hiện chức năng của cổng logic nào?",
    "options": [
      {
        "id": "A",
        "text": "NOT",
        "correct": true
      },
      {
        "id": "B",
        "text": "AND 2",
        "correct": false
      },
      {
        "id": "C",
        "text": "OR 2",
        "correct": false
      },
      {
        "id": "D",
        "text": "NAND 2",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_318",
    "images": [
      {
        "src": "data:image/jpeg;base64,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fUUDLFTVnLbaoShwL5otvScOffv72Rn7zqFixRMhjZHGxscbAGtY0bBoHcAFyREBERAREQEREBERAREQEREBERAREQEREBERARFRXFbSa3Nx+w3bQ2ptcl9ttW+Sus92cBFcadzNuzHNsNw7Y787D6neBC9UXz/sPlV4cAyWHD9eNM77pzkkIEVVWUrfOKUv32MrWHZ/ZHvBYZencXd63W071RxLVmxMvWHZFbsktjtv9Yt1S2UMJG/K8A7sd/ZcAR6kEqREQEREBERAREQEREBERAREQEREBERAXm5Djdoy6z1Fpvtror1aqjl7ahuNOyeCXlcHN5mPBadnNaRuOhAPgvSRB5tgxu0YnbY7dZLVRWa3xkllJb6dkETSe/ZjAAP2L0kRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAWCQFla8cZmoes2B4hYotEsRZlGS3WtdTTySUxmZRRBhIkO7msbu7YbyHbv6HwCtuIm049euPnRWmyiktldYzjF7dVRXeOOSmLQwnd4k3bsD13K1b4tMb4X9OsndW6PZTkVq1PqWF1HadKq/t6WSUn0Wvc0uEPd8CJ4IHXsz03tfH/ACdmo3EzkFJmnFLnFVU18UYjpMZx+SGMUse+5Y+RrDGzcgBwiBJ7+03W42iHC3pjw7W6WmwPFaWzyzHmmrnl1RVSnbbrNIXP5f7IIaNzsOpQVP5ODJdYcn0Pq59YILtHXxXB0Vplv1P2NdLRhjdjKCA93p84D3jdwG+5GxW164tby+PTwHqXJAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFjYb7+KyiDjyNHgPWvOtWQUF5rrvSUdWypqbTVNoq6NnfBMYYpwx3ymOaJ/j0eF6aq3R/8ArB1u/TCn/wAgtCC0kREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH4VdbBQQumqZo6eFnwpJXBrR4dSfzj9q6Ay2xkf0zb/3qP61V/FPZqDIsLxe1XSkhuFsrsuslPVUdSwSRTxurY92Paejmn1Hou/707Rf4q8Q+Zaf7CCwfbZY/xzb/AN6Z9ae2yx/jm3/vTPrVfe9O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",
        "alt": "Sơ đồ CMOS inverter dùng cho câu này - trang 56",
        "caption": "Sơ đồ CMOS inverter dùng cho câu này - trang 56"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 56,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 4",
    "question": "Mặt cắt tiết diện trên mô tả mạch cổng?",
    "options": [
      {
        "id": "A",
        "text": "NOT",
        "correct": true
      },
      {
        "id": "B",
        "text": "AND 2",
        "correct": false
      },
      {
        "id": "C",
        "text": "OR 2",
        "correct": false
      },
      {
        "id": "D",
        "text": "NAND 2",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_319",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Mặt cắt tiết diện CMOS inverter dùng cho câu này - trang 56",
        "caption": "Mặt cắt tiết diện CMOS inverter dùng cho câu này - trang 56"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 56,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 5",
    "question": "Mạch điện trên thực hiện chức năng của cổng logic nào?",
    "options": [
      {
        "id": "A",
        "text": "NOT",
        "correct": false
      },
      {
        "id": "B",
        "text": "AND 2",
        "correct": false
      },
      {
        "id": "C",
        "text": "OR 2",
        "correct": false
      },
      {
        "id": "D",
        "text": "NAND 2",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_320",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Mạch CMOS dùng cho câu này - trang 56",
        "caption": "Mạch CMOS dùng cho câu này - trang 56"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 56,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 6",
    "question": "Mạch điện trên thực hiện chức năng của cổng logic nào?",
    "options": [
      {
        "id": "A",
        "text": "NOT",
        "correct": false
      },
      {
        "id": "B",
        "text": "AND 2",
        "correct": false
      },
      {
        "id": "C",
        "text": "NOR 2",
        "correct": true
      },
      {
        "id": "D",
        "text": "NAND 2",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_321",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Mạch CMOS dùng cho câu này - trang 56",
        "caption": "Mạch CMOS dùng cho câu này - trang 56"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 56,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 7",
    "question": "Mạch điện trên thực hiện chức năng của cổng logic nào?",
    "options": [
      {
        "id": "A",
        "text": "NAND 3",
        "correct": false
      },
      {
        "id": "B",
        "text": "AND 3",
        "correct": true
      },
      {
        "id": "C",
        "text": "NOR 3",
        "correct": false
      },
      {
        "id": "D",
        "text": "OR 3",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_322",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Mạch CMOS dùng cho câu này - trang 56",
        "caption": "Mạch CMOS dùng cho câu này - trang 56"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 57,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 8",
    "question": "Mức logic để transistor sau dẫn là?",
    "options": [
      {
        "id": "A",
        "text": "g=0, gb=1",
        "correct": false
      },
      {
        "id": "B",
        "text": "g=0, gb=0",
        "correct": false
      },
      {
        "id": "C",
        "text": "g=1, gb=1",
        "correct": false
      },
      {
        "id": "D",
        "text": "g=1, gb=0",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_323",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Transistor truyền dùng cho câu này - trang 57",
        "caption": "Transistor truyền dùng cho câu này - trang 57"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 57,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 9",
    "question": "Xác định trạng thái logic của bộ đếm sau khi EN=0.",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "1",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "Z",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_324",
    "note": "Đáp án được bổ sung do trong PDF dòng đáp án không được in đậm rõ.",
    "images": [
      {
        "src": "data:image/jpeg;base64,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a683m7vpryERF1wUnhf2kz386i/TqJVik8L+0me/nUX6dRIKxFOZzyFYeOLTHcL9Wupo5pRT08EEElRU1Up2RFDBE10kryAT0saToE60CVJXer5B5DfT0ljhfx5YJWiSe91vlTXdw9QynpXNkiiJHrJMS5vceTs7aFjlmeY/g7KL58usFBLXS+RR07iXT1cut+XDE0F8rtAnpYCde5RzLxyByBey200n7B4nA/pfcLvSNmulxH4qaHrLaZn9dQ1zydgwtADjU45xvYMYuj7tTUklVe5IBTSXe4zyVVY6LYJZ5shc5rC4A9DSG793ZU6CRw/i6x4Zda+8QNqrlf7gA2qvN1qX1VVIwdxG1zjqKIHZEUYZGCSQ0EkquREBERAREQEREBERAREQEREBERAREQEREBZpeMQziovGR09kvFuxy2Xiviq3XiJpqbhFGKWCF7IoZI/JZJuElsjzK0dQ3GfRaWiCRx3izHMcvMd7bRuuWSNgNMb7dJDVVxjOi5glfssY4gEsZ0s36NGgq5EQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k=",
        "alt": "Bộ đệm ba trạng thái dùng cho câu này - trang 57",
        "caption": "Bộ đệm ba trạng thái dùng cho câu này - trang 57"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 57,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 10",
    "question": "Mạch điện sau mô tả mạch logic nào?",
    "options": [
      {
        "id": "A",
        "text": "MUX 2x1",
        "correct": false
      },
      {
        "id": "B",
        "text": "MUX 4x1",
        "correct": true
      },
      {
        "id": "C",
        "text": "BUFFER",
        "correct": false
      },
      {
        "id": "D",
        "text": "D LATCH",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_325",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Mạch MUX 4-1 dùng cho câu này - trang 57",
        "caption": "Mạch MUX 4-1 dùng cho câu này - trang 57"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 57,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 11",
    "question": "Mạch điện hình bên mô tả mạch logic nào?",
    "options": [
      {
        "id": "A",
        "text": "MUX 2x1",
        "correct": true
      },
      {
        "id": "B",
        "text": "MUX 4x1",
        "correct": false
      },
      {
        "id": "C",
        "text": "BUFFER",
        "correct": false
      },
      {
        "id": "D",
        "text": "D LATCH",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_326",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Mạch MUX 2-1 dùng cho câu này - trang 57",
        "caption": "Mạch MUX 2-1 dùng cho câu này - trang 57"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 57,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 12",
    "question": "Mạch đi ện dưới dây mô tả mạch logic nào?",
    "options": [
      {
        "id": "A",
        "text": "MUX 2x1",
        "correct": false
      },
      {
        "id": "B",
        "text": "D Flip Flop",
        "correct": false
      },
      {
        "id": "C",
        "text": "BUFFER",
        "correct": false
      },
      {
        "id": "D",
        "text": "D LATCH",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_327",
    "images": [
      {
        "src": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAFNAd4DASIAAhEBAxEB/8QAHQABAQACAgMBAAAAAAAAAAAAAAcBAgYIAwQFCf/EAF4QAAEDAgMEAgoLCgoIBAcAAAABAgMEBQYHEQgSITETURQVN0FWYXGVs9MJFhgiMlR0dYGT1BcjNkJSdpGSsrQnM1NXYmNyc5SWJCU1VWahotImOENkNGWCg4Sjwf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAArEQEBAAIABQIFAwUAAAAAAAAAAQIRAxIhMUFhcSJRgZGhEyOxMkJywcL/2gAMAwEAAhEDEQA/AP1TAPlYnxJSYRsdRdq6GvnpYFYj47ZbqivqF3noxN2CnY+V/Fya7rV0TVy6IiqgfVBxh+Y1mjxPZLA5l2bcrzSurKRFstZ0KRtbvO6WboujgcifiSuY7VUTTVUReSTStgifI5HK1jVcqMarnaJ1ImqqviTiBuDiOGM0bNi68VNsoaLEUFTTqqPfdMM3K3wLpr8Gaop2Rv5fiuXvdaH3u3dP0Nxl6Os3aB6smTsKbecqMa9eiTc1mTRyJrHvIq6tRd5qogfQBwXDectgxXe1tVFb8VwVSKqdJcsH3ehp+C6fx89KyP8A6j6GYOZdkyxtkNwvrLt2JI9WdJa7LW3LcXrkSlhkWNvH4TkRPGByoHBsAZ0YXzPrKimw868VHQM33z1lgr6KnXxNmngZG539FrlXxHnxnmzZMB3GChuVDiapmmZvtdZsK3S6RImunvpKWnkY1fE5UUDmQPlV+JKS24dde5oa99G2Fs6xU9uqJqrdXTREpmMWZXceLUZvJx1RNFOOYOzisOOrotvttBiqmnRqv37zhG7WyHRP62qpo2a+Le1A5wD4OM8aW/AdobcrlT3app3SthRlms1ZdJ95UVUVYaWKSRG8F1du7qcNV4prwmPaTwlI9rEtGPkVyoib2XWIUT6VWh0QCqAAAAAAODyZxWGLE/aB1Bipa7f6PpW4RuzqTX5UlN0Onj39PGc4AAAAAAAAAAAAAAAAAAAAAAABwrGWbtiwJcGUdyoMUVMzk1R1mwndbpHyReMlLTSMTnyVevqUDmoJzZs+8M36vho6a2Y0illcjWurcC3uljRV/Kklo2tanjVUOVY1xnbMv8OVV9vHZva6m3elW3W6or5k3nI1FSGnjfI5NVTVUauicV0RFUD7gPFTVDauminYj2slYj2pLG6N6Iqapq1yIrV8Soip3zhmMM4rDga59gXGgxVUz6a79nwjdrnFyRf42lppGd9OG919Sgc4BwXC+c1gxfcY6Kht+K4JpOTrpg+72+JPLJUUrGJ9KnOgAPhYvxnb8D21K64092qYFXTcs9nq7nL9VSxSP7/PdPDgvH1sx7SS1Nspb1Sxxro5t6sVdanrz5MqoYnLy7yL3utAORg43jbH9sy/o6epulLe6qOd6sa2yWGuur0VPymUkMrmpx5uREPl3zOKw4etFuuVVQYqlp69quhZQ4Ru1XO1E1/jYYaZ0kK8OUjW97rQDnAJzjfaDwNlzcsJ23EFwuFHc8VMqX2e3x2WunqapKdjXzJ0UULnsVrXtXdejV48EXRdOQ4OzEsmPXVnaZ1fNHSq1JJqm2VVLE5XJqiRySxtbJp39xXbvJdFA5KDw1lUyhpJqiRsjo4mLI5IYnSvVETVd1jUVzl6kRFVe8hwrDmc+H8U3vtVR2/FkNVvK3pLjg670NPqi6fx89KyPTx73j5Ac7B6F9vVPh20VVyqo6uWnpmb72UNHNVzKmunvIYWvkevia1VPj4SzFtWNbXV3C30l9p4KX+MZd8PV9tmdwVfeRVMEb5OS/Aave60A5ODgeD87ML47urbdaG35atVej2V2GrlRNhVnNJXT07Gxr1I9U3vxdT1sa7QWBcvcdUODb3dauPE1bQrc4LdR2msrHupUkWN0qrBE9rWo5F11VNERVXROIFFB8DCGN7VjqjqKu0LWvpoZVhWWst1RSNkVE11j6aNnSN4/DZq3XVNdUU++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHW/PTJDMHMTaKyix/Ym4ajtGX81fKlNcLjUR1Ff2XFHHImjKZzY9xI+HF2uvHQ7HMVysarkRHacURdURfKbAAAAAAAHW7E+SOYV22x8N5u0jMMph+z2Oawdr5rlUJVTRySPes+qUyta5N5v3vVU96vv+PDsiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrvIZU1cvBSD1Lpe6Gx2+evuNVDQUVOxZJaipkSOONqc1c5V0RDrhe/ZLNnGwXh9tqMx4Jp2O3HyUluq6iFF8UjIla5PG1VIPtj3a77SO1Xg3Z4o6+ot+FmMbcr92M9WunZ8LdVU7yIi8F7524wxsqZSYRwxHYbfl7h5Lc2JInsmt8cjpeGmsjnIqvVetdSY7uPP4q5amXJe/lzPL3NLCebGHIr9g+/UOIbTLwSpoZkejXfkuTm1ya8WuRFTqPQhzuwRUZnzZdx3+B+NIYOypLQjH9I2LRF3tdN3TRyd/vnWbKbY3xRs8bWlfiXLqqorflFeqPW5WKWoejop13tOij0VNEciKiqvBHuanDQ4JYtV9l+xB+bbPQwmsbM88ZPMt9ejGW8ccr8tfmv0M14nB8w878EZUXGx0GLL/BZau9z9i26KZj3LUS6om63davHVyc9OZzY/PP2T52uauzunLTErPSRGd/Hjje1sjeumV+UtfoYkrV8XfJtPtJZa0+ZbcvfbVSzYzV26tnpopZpWrpro7caqN0Tnqqad8687Xe17d7ViGmyZyai7e5q3dOhlqIFRY7TGqe+e53JHonH+j5VRDnmyDsc2fZtsM1yr5kv2P7snS3a/TpvSPe7irGKvFG6/p75cd27vb+XO3U9a7Ko5FTUyaNTgiGycg37sgAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMKuiGirxXTmbqaKiEqPzsnlbgL2WyKoun3qnv8AZljo5X8Ec9Y1RGovl4H6Jb6HWPbO2R6naEttnxBhW6Nw/mJhyTp7VcVXda7RdejcqcURVTn3iQ0Gd+2hha2JYbnktbsQXeNqRNvcFc1sL9OCPcjVVvjX3yfQZwv7cxy7z8rlN588vS6+jthinaEwNg7NKxZd3a7pT4qvcPT0VGjFd0jdXJxVOS6sd+g6g2FdPZfb+vJPa2z0MJzPZa2Qscw5v1+d+eNxprjmDVRrFQ2ykcj4LaxU3dEVNW6o33qI1VREVVVVVThWdOSe0FhnbYvOb2V2DbZiChqLbFQxPuFzp4Wu+9Ma/wB46RrkVFZ1FwnJxcMsu+st/WdGb8eGcx7dNfebfoZqh+a/svFHdLjiLJWksk/Y14nu8kdHNvbu5Mqxox2ve0XQojcx9uvXuR4R01/31TeuPPtabP8AmrnvX5CXqkw/SvulguMNfiCFldCxlKusavRiuem+iK13wdeRLjvLC+NxuZcsy9qhmb2xDijZQwZhnOjAl7rcQZh4dndW4lmle56V7HrrI5ree6mqoqd9q6947+bOGflh2isrbTi2yyprOxGVdKq+/pp0T37HJ4l/SUqqoIrhRS0lVEyenmjWOWKRNWvaqaKip1KinRbKvZgzT2WNqW7V2XdpZfMm8RSJLW0jrhDE+hcq82se9FcrfEi6pp30OsyuWVwy7Xt6ens5Waxmc7zv6u+aL+g2TkaNRUbx4G6cjLcZAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYXkaqniNzG8nWBroq940Vqqi6IeXVDJNDxqinAc08X3LCVXgaK39E1t3xJT2up6Rm9rC+KZztOpdY28fKUIkuff+0sq/z1o/3epL2RWE10MG4IrTj1DTVORuBpNNdDKcjIAAAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADC8lIXh3aFv11hrq+bLe8VFihrqmkiuFqkZVvekMro1csLV30+Cq8i6kk2Z+5tVfPdz/e5APfsO0NgK+ViUS3tlruS86C6xupZ2+Vr0TQotLX01dEktNURVES8nxPRzV+lD0L7hi0Yoo3Ul6tNFdqVecNdTsmZ+hyKhPKrZrwnFKs9glu+DqrmkthuMkTG+SF6vhT6sCsaoSbPtf9Y5V/nrR/u9SeL2mZs4X42bG1qxVTN+DS4loHQTO8tTAqp+iE4NmjifMOsq8EOvuWFybBZcR090q6/DtRHc4FhZFM125G3SocusjdE6EDsvqhkmeHtojLvEdwjt0eJ6S3Xd/BLVeN6grderoJkY//AKSkxyMkYjmORzV5K1dUA3BjVNeY1QDIMbydY5gZAAAGFVE5roZAAAAAAAAAAAAAAAAAAAAAAAAAAGN5OsBvIY3k6z166up7bSTVVVMynpoWLJJLK5GtY1E1VVVeCIicTpvjf2UrK6xYlqbJha0YjzEq6dVbJLhuiSSFqoui6Oe5u8njbqnjM78Q8bd0gAaAAAAAAAAAAAYG8i986+bbm01W7KeU1FjCgs8F7nnukVv7GqHua1EeyR29qn9j/mRKl2utqGqpIayLZslmpZGI9ro6n4TVTVFT3/UZl5t68dP9rZrW/LvhqnWNU6zqPkHt8WzM3Hv3Psb4VrsuMdafeqC4r97qF6mO6/Fx1O2ceip1IpvVY3N6eYGqLpohsRoAAAAAAAAJLszdzep+e7n+9yFaJJszdzip+e7n+9yAVrVBqhrqh61TcaWgkhZU1MMD5ndHE2WRGrI7qai818SBNvb1MnjTibpyJLtXycRYVs2L7e+gvtoobzQvTR1NcKZk8bvK16KhOH7MmFLY9ZMJ1V7wDMnFjcM3SampWr8jVVpl+mJSvAokC4Yzgwt/szGFmxnSt/8AQxJbEpqp6fKKVWRp9Qo+7LinDabuLssrxSMb8Ouw7UR3Slb1r/6U36IlK+aqgHF8D5hWHMe1y3Cw1clVBDK6nmjmppaeWGRObHxyNa9q+JUOUM+ChJckGo3FOaKNRET2xycETT8RpW05AZAAHxcXYrtOCbFV3q+V8VttlI3fmqJvgtT6EVVXxIcHbtM5bon4QP4//Lqr1R6u1Ixr8n7m1yIqLPTpovV0rSotttJpxpIfq0AnPumct/CCTzdVeqHumct/CCTzdVeqKP2to/ikP1aDtbR/FIfq0AnHumct/CCTzdVeqHumct/CCTzdVeqKP2to/ikP1aDtbR/FIfq0AnHumct/CCTzdVeqHumct/CCTzdVeqKP2to/ikP1aDtbR/FIfq0AnHumct/CCTzdVeqHumct/CCTzdVeqKP2to/ikP1aDtbR/FIfq0AnHumct/CCTzdVeqHumct/CCTzdVeqKP2to/ikP1aDtbR/FIfq0AnHumct/CCTzdVeqHumct/CCTzdVeqKP2to/ikP1aDtbR/FIfq0AnHumct/CCTzdVeqHumct/CCTzdVeqKP2to/ikP1aDtbR/FIfq0AnHumct/CCTzdVeqHumct/CCTzdVeqKP2to/ikP1aDtbR/FIfq0AnHumct/CCTzdVeqHumct/CCTzdVeqKP2to/ikP1aDtbR/FIfq0AnHumct/CCTzdVeqOV4MzAsOYVFPV2GudXQQv6KRywSRbrtNdNHtav0ofc7W0fxSH6tDaKnjp2q2KNsaLzRrUQDo/7KVmLdqLAuDMtLHWPoqzHV2bQVE0SqjkgRzEVvkVXpr/ZOzWQuSOF8hMu7ZhrDNsp7fFFCzsieNiJLUy6e+fI7m5VXXiqnUj2VSzVFgrcnMx0ifJbMOX5q1ytTXca58bmr/wBD/wDkd3rNjW0XXBNPieGsiks8lGlZ2Ux28xI93eVdU6kM8Oz9LK3vu7/GjPfPjPGun3u3JwAaAAAAAAAAAAAdEPZj/wDyv2VP+JqX0Ux3KwEv/gixfI4v2EOmnsx/DZfsq/8AE1L6KY7l4BRHYJseqcOwov2EM8LXLxP8v+YnE/r4ftf5dHvZXcJU1iwzgTM63xpSYisd5hjbWRJuyPjc5PeqviU70YJvDsQ4OsV1kREfXUEFS5PG+Nrv/wCnQb2SvHtJm3irL/IvCs8d4xJX3eOor6eleki00bVTRJNPgrzXRe8d/MN2WOwYatVpRd6OipYqVqpw1RjEbr/yNcOftWz59PtN/lc9c83311+/R9VJ4tf41n6yG3ZEX8qz9ZCX1OzVgGsq5p5qG7LJK9ZHq3ENxaiqq6roiVGieRDT3MWXnxC8f5juX2gCp9kRfyrP1kHZEX8qz9ZCWe5iy8+IXj/Mdy+0D3MWXn+77x/mO5faAKn2RF/Ks/WQdkRfyrP1kJYmzFl6iadgXfRf+I7l9oHuYsvPiF4/zHcvtAFT7Ii/lWfrIOyIv5Vn6yEs9zFl58QvH+Y7l9oHuYsvPiF4/wAx3L7QBUlqIv5Vn6yEo2ZlR2W1SqLqnbu58U+VyHl9zFl58QvH+ZLl9oPn7KVsp7LlOtDSteymp7xcoo0kkdI5ESrkTi5yqq+VVUl6jl2buaVpyawBdMW3plRJb6Bm8+OkiWSR6rwRrWpzVVPzJxvnDmrm1td5C3/FlkrMG4NuN/idYbNUPVsr42yxo6WVvW5HJprw010P1jqqOCvjSOohjnj1R25KxHN1TkuinRHbn/8AOXstfPL/AE1OYx6cfC3zTLrws56V31byTTqPInI17yeQ2TkdEnZkABQAASXJL8Kc0fzjk/YaVlORJskvwpzR/OOT9hpWU5AZAAEl2ou4/c/7+n9K0rRJdqLuP3P+/p/StK0AMap1njl58tTrJlBhTHc2Ga7E2FsaVE9dPdq3prJiVzqqimRszkRrJE++QLommqb7U/IA7QAkloz9orbcqey4+tdRl/e5npHC65OR1vq395IKxv3tyr3mOVkn9ArETkemqcUXiigbgAAAAAAAAAAAAAAAAAAAAOJZk5dWLNfBlzwtiWhbX2i4xLFNE/mmvJyL3lReKKdJ6HZA2isgGVVmyhzHtl4wVK53QWbEsSyLA1fxePDT6foP0FBnlXYADSAAAAAAAAAAAju1Hs0Yf2qcvaXCGJLlc7XQQV7Lg2a1PjbKr2MexEXfY5NNJF72vBDrq32J3BzY0idmtmU+BE3ejddIN1U6tOh5HevTUaJ1GZJN68rba6/bPWxNljs11UtxwxbJqu/TNVkl5ucvT1KtXmiLwRuv9FE1L4xUXgqHl0QaIbtuXdiYyMInE2AI0AAAAAAAAEl2Z+5tU/Pdz/e5CtEl2Zu5tU/Pdz/e5AKyqIdGttLCd8vm1xs0XC22avuFvt93e+sq6WlfLFTNWaBUWR7UVGJoirqqpyO8xhWoveM6+PHP5XZeuOWPzmmvUbJyMgsQABVAABJckvwpzR/OOT9hpWU5EmyS/CnNH845P2GlZTkBkAASXai7j9z/AL+n9K0rRJdqLuP3P+/p/StK0BqvNCUbMqfwazfO1f6dxV15oSjZl7ms3ztX+ncBSL7ZKDEVtnt9zoqe4UM7FZLTVUbXxyNXmitVFRUJSuTt+y6RZ8sMQLbqJvvlwret6qtjv6MPHpKbqRI3bia6qxSzmNAJRZs+qOiuUVox1a58BXp67jVrnpJQVDv6mqREaviR6Mcv5KlThkbK1HMcj2KmqK3iioelfrFbsRW+ShulFBX0cqK18NRGj2r9CkrflHiDLt76jLW+rSUaLvOw3eFdNQu8UTvhQ+Rq6dYFmBKLHnvRQXKGzY2ts+CL49d1ja5daSoX+qnT3q+RdCpQSsmaj43pIxybzXNXVFTrQDygAAAAAAAAAAAAAAAA4ljelxZV0dOmE6+2UNSj16V1zhfI1ze8iI1eC8yZ3rEeYmGpFZdsf4BtsnDSOrY+N36FfqTfgXkAFAAAAAAAAAAAAAAAAAAAAAAAAAAACS7M3c2qfnu5/vchWiS7M3c2qfnu5/vcgFaAAAAAAAAAAElyS/CnNH845P2GlZTkda8DZnVmEcf5oUcGBMU4jb7YHv7Ks8VK+L4Dfe6yTxrr9H0nOkz5uenclx//AIag+1gVsEk+7zcv5pcf/wCGoPtY+7zcv5pcf/4ag+1gZ2ou4/c/7+n9K0rR1pzpzDxDmDgGssttyoxxHWTSxOa6phoWsRGvRy8UqlXknUc6bnxctO5Nj9f/AMeg+1gVpeaEo2Ze5rN87V/p3Hjdnxc9dfuTY+5fF6D7WeDZPrn3LKVKp9JPQOludc9aaqREkj1ndwdoqpr5FUCyAADGmo0TqMgD5mIMP2zEtsloLtQU1xopU9/BVRtexfoUlj8o8SZeSvqctsQdFR/CXDV+kfNRP8UUvGSH/rTqRCzGN1OpAJVYM+qGK6U9jxrbanAuIZnbkUF007Gqnf8At6hFWOTr3UXeROaIVBkrJWo5jkc1eStXVFPTxDh+14otFRbLzbqW626oTdlpayFssb08bXIqKRHGGGKnZ/tMt8wpjijsdiiXR2HMX1Lpre9e9HTzarNC5eSNTpW95IwKVmHmfbcvIqCKogrLndbi9YaG1W2BZqmpeiKq7rU5IiIqq5dEROKqcUdmtmDRM7Krso7sygb76Tsa5Uc07GdfRNlVXL1tbqvUcS2aMYSZ0Y4xbju8WSqsV0pmQWmktdya5JaOFEc572I5rV3Jl3XIqtaqoxNUTkdi38GrpwUDj+BcdWnMTD8F5s0z5aV73xPZNG6KWGVjla+OSNyI5j2uRUVrkRUVF1ORnXm74qflLtD32Cz4avOI6TEVnprpV26wxxOdT1bJZYXVD2yyRtTpGMjbwXVVicq8zla583PTuTY//wANQfbAK2CDYs2qvaVQxVt1yozDgo3yNidO2joHNjc5URN7/TOHFUPuJnzcl0/glx/pz17GoNP3sCugkn3ebl/NLj//AA1B9rH3ebl/NLj/APw1B9rArYJJ93m5fzS4/wD8NQfazmOB8Z1GM6KoqKjDV6ww6GTo0p72yBskiaa7zeilkTTyqi+ICB7eu0pc8gstbfQ4Wa2XG+KKtLZaGaarG5dEdIid9U3monjd4iY5Y+xh4WxHY4L7nHeLzjfGVe1J6p0tY5sMDnJqrGpxXhrz4eQ457IenY+1bs6VVf8A7G7Y7iK/4HS9K36O+w/Q+NU3Wqmm7prqY4c3w7xL3ts+xnbOJMJ4m/fb2AAbAAAAAAAAAAAAAAAAAAAAAAAAAAACS7M3c2qfnu5/vchWVJLsz9zep+e7n+9yAVsGBr3yDIMc0MlAAAAABJckk/8AFOaP5xyfsNKwiJohJ8kvwpzR/OOT9hpWU5ANEGiGQBjdTqG6hkAaqnFCUbMiaZazaf72r/TuKuvNCUbMvc1m+dq/07gKyAAANXrpp4z4eKcaWbBdtfcL5dKe20jE1V870br4kTmq+QD7j10046d4+FizGtkwPa3XG/XWmtVGnBH1EiN3l/JanNzl7yIiqveJu/MXG2ZyLHgay9pLM7h7Y7/Grd5vXBT/AAneJzven2sI5FWS0XRL1fZ6jGGJNONzvC9Isa99Io/gxpy0RE4AfFdmJjjM5ViwNZfa9ZncPbJiSFUe9OuCl4KvidIqeNin2MI5F2SyXdl+vNRVYuxS1NEu97ckr4deaQs03IW+KNEQpqManeM7qdQEexnaL7l5mE/HWG7VUX633KnZS32zUjmpO5I0XoZ4UdoiubvOarVVNUcvfRDLtpWw1EfR0NhxRcbivvWW+K0SMkc/8nefusTTvqrtOHNSwaJ1GNxvUBMMpMJXlL1fcbYqhbSYjvvRwst7H77bfQxK5YKfeT4Tvfve53fdI7TgiFQ0QI1E5IZAku1CifcirvldJ6dhWFRE04Eo2oe5FXfK6T07CsLzQBog0QyAMaIY3E6jYAdcttjZlftL5Wx0NsqGW/FtmnS4Watdw3Jk5sVeaI7RPIqIp1yte3Zi3AeBavAOdOX+MLFiWGldQJiDDlKsyTcN1JWLpoju/qir5D9GNxOo9eptdHWoiVFLDUInFEljR2n6TEx1uTtWty6t7x7QANsgAAAAAAAAAAAAAAAAAAAGrl0TUDYGiOVXJ1G4AAAYXkSTZoXTLaq+e7n+9yFbVdEVSO7OdSlLlVcJ3Jo2O73R6+RKqVTOV1LVk30fDz922Mttna601mxDX1NfiGobvss9pp1qKhG/lORODU8qpqe7s+7YuXO0pJW0eFLnLFeqJN+ptFxhWCqjbrpvbjvhJrwVU104anW32OKzw5l5nZxZs3uNlff6i9voKSqmbvOghaq6oxV+DyTkeLbSttNkvtiZE5mWGFlvrbvc+1F3dAm6lXE5zG+/ROa7r3pqvi6kNYzVwxy75a/PZnLrzcv9u/x3foOnEyaIvBEN05Eh36sgAqgAAkuSX4U5o/nHJ+w0rKciTZJfhTmj+ccn7DSspyAyAAAAA1XmhKNmXuazfO1f6dxVnLo4h2R+MrLgjKGpud/u1LaKBl3rkWarkRiOXp3aNbrzVe8iaqveAuL10VD4eK8aWTA1nmu2ILvSWa2wpq+prJWxsTXlxVSbyZkY3zNcsWAbAlitD+HtnxTA9iKn5VPRI5sknlkWJPE5D7OD8hrHZrxDiG/1VXjfFsK70d6vzmyup3f+2hREip05prGxHKnNzgPjLmNjfND73gSwusVkfwTE2JoHQo9PyqekXSV/iV+41dUVFU+1hPIiyWq5svN/qKnGeJGrvds7yqSJE7+piT3kSJ3tE3v6SlL3E6jKNRvIDG4nUZRqJyQyAAAAAAAAAJNtQ9yKu+V0np2FYXmhJ9qHuRV3yuk9OwrC80AyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGHcjJhyaoBHs4J73c8wcvsLWvENbh2luqV81VUW9GJK/oY4txurkXRPvjl4Hs/cTv386eK/rIv+0xmEn8PmU/ye8ejpytASb7id+/nTxX9ZF/2j7id+/nTxX9ZF/wBpWQBJnZJX7Rf4U8V/WRf9p8bZmtUsOSdbb31UtZN2yukK1E6or3qtTKmrtO+XFU1QkmzQxFy1qvHe7n+9yGcpvGxZdXbrJ7FbVpbbTm1huo0juFvxNKskLvhI1yu0XQ9X2R13tkzt2dMK0ipJcKnEjJ+jb8JrGvjTXye+/wCRy/NHZGzGwZnTcs0ciMUW+xXS9Inbay3aNXU1S78tNOGvf4nvZGbJGN3ZzpnBnZiWjxNjClhdBa7fbo1bS0CLqiuTXv6KumnXr3jeNuWXDyvjW/eM5bxmevO9fV3ARDdORhGIhsQk0AAKAACS5JfhTmj+ccn7DSspyJNkl+FOaP5xyfsNKynIDIAAAADSRdNCWYI2bsE4OvVTeGUU11uMlTLUxTXSZ1R2Ksjlc5sLXKqRpqv4qIVVWoqhrUbyA1SNqIiImiJyRDZrUbyMgAAAAAAAAAAAAAAk21D3Iq75XSenYVheaEn2oe5FXfK6T07CsLzQDIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYXkZMLyAk2Yfd9yn+T3j0dOVokuYfd9yn+T3j0dOVoAAABJdmbubVPz3c/wB7kK0STZn7m1V893P97kArO4nlXxmOjTxjf0RdUMJJr1ER5AccxVmLhjA8aPxBiC2WVF+C2uq2ROf4mtVdVXxIhweXaQs1yesWFcPYlxlNyRbbbHQw69fS1KxMVPG1VKqsK5TVZdE4kjW+Zx4oT/QMP4awVTu4tnu9VLc50TxwxdC1q/8A3HIZTJXEOIlR+Lcz8TXGNedDY5WWaBP7L6ZrZ/0zKBQcU47w9gagWuxHfbbYaJOdRcquOnjT/wCp6ohwBdpfD1397hG0Yhx09fgS2K1SupX+SrkRlP8A/sPt4U2fcusG17bjbcI2xLsnO61UCVNa7+1USb0i/S4oCRIiaJqieICXZG2PEFv9t13xFZ1sFTfLvJXQ26WojmlijVqIm+6Nzmby6cmuVPGVNvFDXo/GbImiAZAAAAAAAAAAAAAAAAAAAAAAABJtqHuRV3yuk9OwrC80JPtQ9yKu+V0np2FYXmgGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwvIyYXkBJsw+77lP8AJ7x6OnK0SXMPu+5T/J7x6OnK0AAAGFXRFU6y5M5sT4Wwzc8P0mDcSXq8U97uW+ymotyButVIqK6VyoiIqKi6oinZpeKGqRogEiW7ZxYp/wDhLPh/BlM78e4VDq6dE8SM3WovlRQ3I+8YgXexbmLiG7tXi6mt0qW2D+yqQ7u83+1zK9uIFYigcEwtkVgTBsnS2vDNBFUqur6iSJJJXr1uc7VVXxnOI6aOFiMjY1jE5NamiJ5DygDTo0XmZRiImiKbADCJoZAAAAAAAAAAAAAAAAAAA1e5WpwPDU1kVHC6WeRkMbE1c+RyNRqeNVA8zlVE1Q9eruEFvppairmipqeJN58sr0Y1qdaqvBCVV+fLsU1c1sy2s0mMqyNyxyXNruitdO5Oe/ULwcqclazecnUa0OSFbi6pjuGZN8fiWZq77LNSIsFthX+xzlVOty6L+SBz/BuYOHswaWqqcOXWnu9NSVDqWeWmdvNZK1EVW6+RU5dZyIjuz/baW1X7M+loqeKkpYcSyNjhhYjGNToIuCInBCxAAABJtqHuRV3yuk9OwrC80JPtQ9yKu+V0np2FYXmgGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwvIyYXkBJsw+77lP8nvHo6crRJcw+77lP8nvHo6crQAAAAAAAAAAAAAAAAAAAAAAAAAAAAaudu948VRWRUkMk072wwxtV75JHI1rWpzVVXkgHmcqpyPDPVx00L5pXtjiY1XOe9yNRqJzVVXgiEoumfKYirJLXlzZZca17HKyS4Nf0Frp163VKovSeSJHa8tUPDBkbXY7lZWZoXx+KNFR7LBStWmtEK89FhRVWbTrlV/i0A8lfn6mKauW2ZZ2SXHdbG7clukcvQWemd39+sVFR6p+TC2RyLzROZpS5F1mNpm1uaN/dip2u82wUTXUtni8Sxaq+o8ayuVq80Y0rFFbae20sVNSQx01NE1GMhhajWNanJEROR7KN0Xn9AHr0NtprZSQ0tHBFS0sLUZFBAxGMY1OSNanBE8SHsbuhsYXkBJ8j/wAKc1fznk9DEVkkmSD9MT5qr3vbPJ6GIrHSIi6d8DcGiP1VE6zcCTbUPcirvldJ6dhWF5oSfah7kVd8rpPTsKwvNAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAABhy6IZMKmqaASXMJ2ufuU/ye8ejpytk0zTy3xDinEmFMQYYvdHaLpYlqm6V9Ks8U0c7GNVNEcioqLGi6+NT0Pa9nN4XYX80y+sArQJL7Xs5vC7C/mmX1g9r2c3hdhfzTL6wCtAkvtezm8LsL+aZfWD2vZzeF2F/NMvrAK0CS+17Obwuwv5pl9YPa9nN4XYX80y+sArQJL7Xs5vC7C/mmX1g9r2c3hdhfzTL6wCtAkvtezm8LsL+aZfWD2vZzeF2F/NMvrAK0CS+17Obwuwv5pl9YPa9nN4XYX80y+sArQJL7Xs5vC7C/mmX1g9r2c3hdhfzTL6wCsK7ReRlF1Qk/tdzk3V1xbhje1TT/AFTLp6QwmHc5tPwuwv5pl9YBWVXRQi6knTD2c2vHF2F/NMvrDHtezm8LsL+aZfWAVhzt08VTWw0cD5p5GQxMTefJI5GtanWqqSt2Hc5vC7DH0WmX1hL7zhDH0WLH1GblJXY8ws6VOw4cHRSJSwJ3uyaRus0i+Nqub1ogFNu+e6X2vltWX1nmxjco1VktWxejt9Mv9ZOvBdPyW8VPFS5I3HHE7K7My+PxBuuSRlhot6C2QqnFEVicZVTreU3DtLQUloporZQJbaBjU6KmbTLT9GmnLo1RN3yaH0matReCgetb7RSWmkipaKmipKaJNGRQMRjWp4kQ9tjN0yi697QyAAAA1cuiamxq9NWgdXMKZhXinzJzKwhg2jgrsTVWIpaieorNexrdB0MSJLLpxVVXg1qcVXxFCky+zUoYErKTM5lwuMekiUVfZ4WUkru+xys9+1q9acU4HycgMN1VnzazvrKyx3C3SXC/wzQ11XSvjhrYUgRGrC9yIj0au8iq1V0VS5qipxRF8gHB8rcyHY3juNvulCtmxTZ5ux7nbHO3ujdpqyRjvxo3p75rurhzRTnqrohCcXYaxxW7QtTccGvgssC4bpoa643OhklpqlyVNQscbFRURZGIrldoqqiSM15ofd9ruc3hdhfzTL6wDG1A/XKKu4cVq6T07Csb6Kqd4iGJsqczce26O0YgxdYVs76mGWobRWyRkrmsejtGqr9EVdC3JGqacvKB5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=",
        "alt": "Mạch D latch dùng cho câu này - trang 57",
        "caption": "Mạch D latch dùng cho câu này - trang 57"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 57,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 13",
    "question": "Mạch điện dưới dây mô tả mạch logic nào?",
    "options": [
      {
        "id": "A",
        "text": "MUX 2x1",
        "correct": false
      },
      {
        "id": "B",
        "text": "D Flip Flop",
        "correct": false
      },
      {
        "id": "C",
        "text": "BUFFER",
        "correct": false
      },
      {
        "id": "D",
        "text": "D LATCH",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "main_328",
    "images": [
      {
        "src": "data:image/jpeg;base64,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REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBY3JMjtmH49c77eayK3Wi200lXV1cx2ZDExpc95+AAErJLlTwodRcqbgh1CNtLwXGhZUuj9sIDWwB/6j0B+AlBm9I9VdT+JyxjNMWfaNOtPKqWRtmfd7ZJcbrdImPLfGHsE0UdPG4g8rfxjiBvuARvsVkzzU+w68WHCMtoLHcMZudorqynyezxS05nqYXwbQSU73ydi4MfI7cSPDx1HLyuCznCsyij4ZNJm27kNEMUtfZlm2x/2LHuTt5999/h3Umy00M0kMkkTJJIXF0b3NBLCQQS0+Y7Ejp5iUH6rRNb8gyXENLMmyHFai1Q3SzW2puLY7xRyVMM/YxOk7MiOaIt5i3bm3O2/cVva0PX33CdR/m3cvssiCFOHXVDXTiA0Dx7UikvGntuq7zFNLDZJsergxpjmki5XVIryRuY99xEdt+4rZuG/iYruIm0ZxY5LTBhOpOF3I2i9W6p3uFLDNzPa2WMtdEZI39lKAN2kFp6kbF0IcDNDrZNwP4KcEvGC0zHUtYLfHfbbWPew+Nz79pJHPsTzcxBEewG24PXf9PBsXyzWTK9XcIyChudFrlHdnXPMKi4zxzR3F5e4CWndG1oEQdISGkdO3BDnA+SEjcGXEBqXr/d9RPwuOK0VBiOQT492NltlTHLVSRb80vaSVTwwb8vk8rvP1HepC4h83z/A/wOmw2rxtkN5yCgsVRFfLZUVDohUSOaZmPiqYt+Xp5Bb16+UFBfg0/Jr+IyM9Ht1LuW7fOOv/APhU5cTPWk0yaPbHPbNsPTtK4n/MCf1II54qte9U9Csv0jtNjq8Qr6bOcgp8dlluFkqi+jkkdEzt2hla0Pbu9x5DsRsBzHvW85lJxBYnb6a52264FlsMNXB47bKfGa6jqX0plaJnQO9UJgZGsLnBpb128/cYP8JWyvkzPhjZa5qenubtRKIUs1ZE6WFkvaRcjpGNc0uaHbEtDmkjcAjvU743YtY4NbbDXZdfsduuIR2avidDjtrqKEMq3S0pjdMJaibn8hsobsW7eV0O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PyKSWSvvclOIYoe1k7SVsMe5ILn9XPJ3IAADRuD1GiDmDh+0Z1zwjiQ1OynPtRm5Lp7eDN6iWQVUsogLp2vhc2JzQyn7OIOjLWEhxdud9gV0dkE12p7VO+x0dFX3MD8VBcKt9LC4/wCNIyKQj9TCsiiD528F3BNrtwg5hll8a3TvKfV+kbTmE3+vpOwe2QvD9/U9/MOpHL083UKWdJ+Bmpi4h7jrtq1kNJlufzyiSgt1sp3RWy1crBHH2fOS+UsYAGlwbsd3EF2zh1yiAvnrrlwR62ancYth1utUmBUMFjqrdPT2msvVa504pXBxD3todm85Dh0B2BHevoUiDmXXrHuJfVfTS84njNs04wiW7076Oqursnr66ZkDxyyCIC2xBji0kcx32BO2x2I2G56eamT674Zdobfic2m+KW+eloKOW71LK81UrGReOFgpHRhzIRLE2Pn7ppDz9dhPKIOa+PXhrvvFRouzDcegscd1jroa+lud6rpqdtG9h2cWtjglL+aN8jSN27bg9dlkuCjSvVHQzRy34DqPV47d2WXmitdyslfUTPdTlxc2GVktPHtybkNcHHyeUbDl3PQSIOAeOHgh1c4pNZ8Xy6wVGFWe2Y7TMp4IrldqszVJbO6XmcGUZDNwWjlBdt16ld32Sa5z2yF93pKShuBH42CiqnVMTT/iyOjjLv1sC96IOIMr4FMq0p4j5NbNALvZ7bcK90pvOI38yRUNWyUgzNilia4sD3APDS3ZrwCDy7ME6dtrhqDRi2Vtnx3SykmHJV3agvT7zcGtPthTRmmiijeRuBJI5/LuD2bttlNaIOP/AAgfCtqLxW4FjeG4jPjVvt9quLLi+5X66VLZ5XNgfEGdnHSvH/OOJcX9dh069JAwHTPUrD+FC36bS2/FZ8mt+PDH4ahl6qRRyAU7oRM5xo+dp9oeQMPe7yhsN+gEQcQ+Du4OtTuD2fMKPKJ8SvNryF9JJ4zaLnVGanMImG3ZyUjQ8O7Ufnt25fPv07eREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQ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pugqipum6CqIqboKoiICwGfNLsHyIDqTbqkAD/JOWfVrm7oObtGtU77nukGC2jTS0vcYrDQxVGXX2hkZaqYtp4w5sTC6OSsfuNvxZbENjzSgt5HSJjWgtoor1S5DlFdWZ7ldM7tILtfi17KN/ppKZoENN6OZjBJt0c93epNYNh3bfArkFB3dVVEQEREBERAREQFQqqoUGq6S+5XhnyLRfUMW1rVNJfcrwz5FovqGLa0BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFQnZOZBVRhxR0k9fwz6t0tLDJU1M+IXeOKGJpc+Rxo5QGtA6kkkDYelSbzBUcd+70IER3jb8QV6tBCcwQXIrS/4Cqg7oKrQ9fPcL1G+bdx+yyLfFoevnuF6jfNu4/ZZEGw4R+Rdg+T6f6tqzROywuEfkXYPk+n+rasw92zST3KXjuK8w323HxJzf1Lj658aGZay5XfcY4ccHpcyksUxp7nlWSVJpbRBLuQI42tIknJ2d1aR0G4BBBWFvXFPr/w100F+1709xu44I+dlPUX/AaiR0lvLzs0ywzPJe3fYbjlHcNySAZLvVvBZrcnd23zAfEq7965o1z4spMC9Y2uxCmt9/seo99pbeKyp52mOmn5CJYwCPK2f3OHwELpUdy1q6376+GZlLpUuAVR3Lmbje4pb7wt49hdwsdot94kvt8jtczLgZA2ONzHO5m8hHXyfP0Upa4cQGFcO2DyZTnF2Fut4d2UMUbe0nqpT3RxRjq53+YDqSAN1jc6er301q7kSNzJvvsoR4aNUdRNZrNW5flGK0eGYnXv58dts3aG6y02/kz1O55Gcw6taBvsd99ti6b/ADrdlndJd9lUREUREQEREBERAREQEREBERAVCqqhQarpL7leGfItF9QxbWtU0l9yvDPkWi+oYtrQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVD1VVQ9yDy3R1Y22VTre2F9eInmnbUvLYnSbHlDyASG77bkAnbzFRHeMt1bx2jdV3WHTW10zTsZ6291cMf/adTgKRs+zCh0+wi/ZPczy2+zUM9fPt38kbC8gfCQF8+OE7h9Zx011z1711dPklFW1s9NjmMPneyhpKeN5aTytI3aHAtA6AljnO5i7pmbytk8u62TGdV8+HXVhz3VHKGvdZ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cf0hB+ni2uH84af/AEGu/jLLaM4NeMDxq5wZBXUVwu9yu9bdqh9thfFTsM8zpAxjXvc7YAjqT19AWJ8U1v8A510//Zld/wCoW/4yy8ssdKMhloJ7yA7xiS2RPjpyeY7cjXuc4eTy77k9d0GXREQEREBERBQjfz7K0s3Hf/Wr0QRLctA6Wy19RdtOrvNp5eZnmaaCghE1prHk9XVFA4iMkn20kRilO/WRW0euYw6qitOqFB+B1eXiGO/bF1irnno0x1XUQOd0AiqOR3Nu1pk25jLRbv5yrJqeKoidFKxskbgWuY8AtIPeCPOgujlbKxr2EOa4bhwO4I9IV2/XuUY5Boz4tVR3PAb1JgF3jaQ6KhpmS2us677VNH5LXdf+cjdFLsAO026Lw0Wst0wiqgoNVLPS4tHI4RQ5TR1YkstRITs1j3v5ZKWRx7mzNDCSGtke4gEJdVHN5grI5mysD2Oa9hG4c07gq8FBHHDmwO0IwTf+aafv6/mBSMWbjvUdcOXuEYJ8kU//AJApHQUA2VURAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQUIBIPoTZVRBGHFEP8Agz6t/NG7/YpVI1vG9BTH/wB03/QFHXFF/Jn1b+aN3+xyqRrd/e+m/wAk3/QEH77KgYB6VciAiIgIiICIiAiIgIiILeUbr8ayhp66kmpqmGOoppWGOSKVocxzSNiCD0II8xXoRBFlr0PjwO4eMaf32rxKhIPNjjm+NWXmPXeOmcQ6n9PLTyRM87muXmm1ur8BqXw6m44/GKEOIZk9tkdX2ZzfM6aUMbJSnbvMzGxjuErlLfKNtlQtDgQRuD0O/nQRtw1VMVXoFgM0ErJoJLNTPjkjdzNe0sBBB84I6qS1+FHRU9upYqWkgjpaaFoZHDCwMYxo6ANaOgA9AX7oCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiINO1lw6t1E0gznFbbLBBcb7Yq62U0tU5zYmSzU742F5aCQ0Fw3IBO2+wK2yliMFLDG4guYwNO3d0C/VEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z",
        "alt": "Mạch D latch/FF dùng cho câu này - trang 57",
        "caption": "Mạch D latch/FF dùng cho câu này - trang 57"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 57,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 14",
    "question": "Mạch điện dưới dây mô tả mạch logic nào?",
    "options": [
      {
        "id": "A",
        "text": "Bộ đệm ba trạng thái không đảo",
        "correct": false
      },
      {
        "id": "B",
        "text": "Bộ đệm ba trạng thái đảo",
        "correct": true
      },
      {
        "id": "C",
        "text": "Cổng NOT",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cổng BUFFER",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "main_329",
    "note": "Đáp án được bổ sung do trong PDF dòng đáp án không được in đậm rõ.",
    "images": [
      {
        "src": "data:image/jpeg;base64,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",
        "alt": "Mạch bộ đệm ba trạng thái đảo dùng cho câu này - trang 57",
        "caption": "Mạch bộ đệm ba trạng thái đảo dùng cho câu này - trang 57"
      }
    ]
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 57,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 15",
    "question": "Trong kỹ thuật số, các cổng logic cơ bản nhất là?",
    "options": [
      {
        "id": "A",
        "text": "AND, OR, NOT",
        "correct": true
      },
      {
        "id": "B",
        "text": "AND, OR, NAND, NOR, NOT",
        "correct": false
      },
      {
        "id": "C",
        "text": "AND, OR, NAND, NOR, EXOR, EXNOR, NOT",
        "correct": false
      },
      {
        "id": "D",
        "text": "NAND, NOR",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_330"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 58,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 16",
    "question": "Transistor dùng để lập trình nối dây thì?",
    "options": [
      {
        "id": "A",
        "text": "Cực D và S nối với 2 đầu dây dẫn cần nối.",
        "correct": true
      },
      {
        "id": "B",
        "text": "Cực S và G nối với 2 đầu dây dẫn cần nối.",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cực D và G nối với 2 đầu dây dẫn cần nối.",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cực S, G và D nối với 2 đầu dây dẫn cần nối.",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "main_331"
  },
  {
    "source": "Tổng hợp câu hỏi trắc nghiệm",
    "source_file": "TỔNG HỢP CÂU HỎI TRẮC NGHIỆM(1).pdf",
    "page": 58,
    "chapter": "CHƯƠNG 8: MẠCH TÍCH HỢP CỠ RẤT LỚN (VLSI)",
    "section": "II. KIẾN THỨC VẬN DỤNG",
    "question_no": "Câu 17",
    "question": "Để thực hiện mạch MUX 2 sang 1 với công nghệ VLSI ta chỉ cần sử dụng mấy transisor?",
    "options": [
      {
        "id": "A",
        "text": "1",
        "correct": false
      },
      {
        "id": "B",
        "text": "3",
        "correct": false
      },
      {
        "id": "C",
        "text": "4",
        "correct": true
      },
      {
        "id": "D",
        "text": "6",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "main_332"
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 3,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 1",
    "question": "Một hậu quả tiềm tàng của việc khả năng chống nhiễu không đủ trong các mạch kỹ thuật số là gì?",
    "options": [
      {
        "id": "A",
        "text": "Giảm mức tiêu thụ điện năng",
        "correct": false
      },
      {
        "id": "B",
        "text": "Tăng độ tin cậy",
        "correct": false
      },
      {
        "id": "C",
        "text": "Lỗi truyền hoặc lỗi xử lý dữ liệu",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cải thiện hiệu suất",
        "correct": false
      },
      {
        "id": "E",
        "text": "Cả 2 ý A và C đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "final2024_1",
    "aiNote": "Đáp án C đúng vì: Lỗi truyền hoặc lỗi xử lý dữ liệu.\nNếu khả năng chống nhiễu kém, mức logic có thể bị đọc sai hoặc chuyển trạng thái ngoài ý muốn.\nHậu quả trực tiếp là lỗi truyền dữ liệu hoặc lỗi xử lý dữ liệu."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 3,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 2",
    "question": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Phát biểu if hoặc case chỉ có thể đặt bên trong các procedure",
        "correct": true
      },
      {
        "id": "B",
        "text": "Phát biểu if hoặc case có thể đặt bên trong hoặc bên ngoài procedure",
        "correct": false
      },
      {
        "id": "C",
        "text": "Phát biểu if đặt bên ngoài procedure thì các phép gán tín hiệu phải dùng assign",
        "correct": false
      },
      {
        "id": "D",
        "text": "Trong phát biểu if hoặc case có thể dùng phép gán assign",
        "correct": false
      },
      {
        "id": "E",
        "text": "Cả 4 đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "final2024_2",
    "aiNote": "Trong Verilog, if và case là câu lệnh tuần tự/procedural statement.\nVì vậy chúng thường được đặt trong các khối procedure như always hoặc initial.\nBên ngoài procedure chỉ dùng các lệnh dạng song song như assign, khai báo module, wire, reg,...\nKhông dùng assign bên trong if/case procedural; trong đó thường dùng = hoặc <=.\nBạn chưa cung cấp đáp án đã chọn nên chưa thể đánh giá đúng/sai lựa chọn của bạn."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 3,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 3",
    "question": "Đặc điểm chung của FPGA so với ASIC về tốc độ là gì?",
    "options": [
      {
        "id": "A",
        "text": "FPGA thường nhanh hơn ASIC",
        "correct": false
      },
      {
        "id": "B",
        "text": "FPGA chậm hơn 2–3 lần so với ASIC",
        "correct": true
      },
      {
        "id": "C",
        "text": "FPGA và ASIC có hiệu suất tốc độ tương tự",
        "correct": false
      },
      {
        "id": "D",
        "text": "FPGA chậm hơn 5–7 lần so với ASIC",
        "correct": false
      },
      {
        "id": "E",
        "text": "Các phát biểu trên đều sai",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "final2024_3",
    "aiNote": "Đáp án B đúng vì: FPGA chậm hơn 2–3 lần so với ASIC.\nFPGA dùng LUT và mạng nối lập trình được nên đường tín hiệu thường dài và kém tối ưu hơn ASIC.\nVì vậy FPGA thường chậm hơn ASIC trong cùng chức năng."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 3,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 4",
    "question": "Cho đoạn mô tả Verilog sau. Giả sử A = 2'b10 và B = 2'b11, cho biết giá trị của {A, B, C}.",
    "options": [
      {
        "id": "A",
        "text": "101111",
        "correct": false
      },
      {
        "id": "B",
        "text": "101100",
        "correct": false
      },
      {
        "id": "C",
        "text": "101101",
        "correct": true
      },
      {
        "id": "D",
        "text": "011000",
        "correct": false
      },
      {
        "id": "E",
        "text": "110011",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "final2024_4",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "wire [1:0] A, B, C;\nassign C = A ^ B;"
      }
    ],
    "aiNote": "Đáp án C đúng vì C = A ^ B = 2'b10 ^ 2'b11 = 2'b01.\nPhép nối {A,B,C} ghép lần lượt A=10, B=11, C=01.\nDo đó kết quả là 101101."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 3,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 5",
    "question": "Thành phần #20 biểu diễn gì trong mô phỏng?",
    "options": [
      {
        "id": "A",
        "text": "Xác định thời gian bắt đầu mô phỏng là 10",
        "correct": false
      },
      {
        "id": "B",
        "text": "Xác định thời gian trễ là 10 ns",
        "correct": false
      },
      {
        "id": "C",
        "text": "Xác định thời gian trễ là 20 đơn vị thời gian (time unit)",
        "correct": true
      },
      {
        "id": "D",
        "text": "Xác định chu kỳ xung clock là 10 ns",
        "correct": false
      },
      {
        "id": "E",
        "text": "Xác định độ rộng xung clock là 10 ns",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "final2024_5",
    "aiNote": "Đáp án C đúng vì: Xác định thời gian trễ là 20 đơn vị thời gian (time unit).\n#20 là độ trễ mô phỏng 20 đơn vị thời gian theo `timescale đang dùng.\nNó không tự mặc định là ns nếu chưa xét time unit."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 3,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 6",
    "question": "Trong ngôn ngữ Verilog, giá trị 8'b10 có thể được biểu diễn như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "8'b00000010",
        "correct": true
      },
      {
        "id": "B",
        "text": "8'bxxxxxx10",
        "correct": false
      },
      {
        "id": "C",
        "text": "8'bxxxx_xx10",
        "correct": false
      },
      {
        "id": "D",
        "text": "2'b10",
        "correct": false
      },
      {
        "id": "E",
        "text": "Tất cả đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "final2024_6",
    "aiNote": "Đáp án A đúng vì 8'b10 là hằng nhị phân có độ rộng 8 bit.\nHai bit thấp là 10, các bit còn thiếu bên trái được thêm 0.\nDo đó dạng đầy đủ là 8'b00000010."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 3,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 7",
    "question": "Trong ngôn ngữ Verilog, giá trị thập phân 6 được biểu diễn dưới dạng nhị phân như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "4'b0110",
        "correct": true
      },
      {
        "id": "B",
        "text": "0b0110",
        "correct": false
      },
      {
        "id": "C",
        "text": "0110b",
        "correct": false
      },
      {
        "id": "D",
        "text": "110b",
        "correct": false
      },
      {
        "id": "E",
        "text": "Tất cả đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "final2024_7",
    "aiNote": "Trong Verilog, số nhị phân được viết theo dạng: <số_bit>'b<giá_trị>.\nGiá trị thập phân 6 đổi sang nhị phân là 0110 nếu biểu diễn bằng 4 bit.\nVì vậy cách viết đúng trong Verilog là 4'b0110.\nCác dạng 0b0110, 0110b, 110b không phải cú pháp chuẩn của Verilog."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 3,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 8",
    "question": "Cho đoạn code mô tả sau. Giá trị của B tại thời điểm kết thúc đoạn code là gì?",
    "options": [
      {
        "id": "A",
        "text": "1",
        "correct": false
      },
      {
        "id": "B",
        "text": "0",
        "correct": false
      },
      {
        "id": "C",
        "text": "x",
        "correct": false
      },
      {
        "id": "D",
        "text": "z",
        "correct": false
      },
      {
        "id": "E",
        "text": "Mô tả không hợp lệ",
        "correct": true
      }
    ],
    "answers": [
      "E"
    ],
    "type": "single",
    "id": "final2024_8",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "wire A, B;\nA = 1;\nB = A;\nA = 0;"
      }
    ],
    "aiNote": "Đáp án E đúng vì đoạn mô tả không hợp lệ.\nA và B được khai báo wire nhưng lại bị gán trực tiếp bằng câu lệnh thủ tục A=1, B=A ngoài assign/always.\nwire cần được gán bằng assign liên tục hoặc điều khiển bởi cổng/module, nên không thể kết luận B theo đoạn code này."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 4,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 9",
    "question": "Mô tả (4'b1z0x == 4'b1z0x) trả về kết quả gì?",
    "options": [
      {
        "id": "A",
        "text": "true",
        "correct": false
      },
      {
        "id": "B",
        "text": "false",
        "correct": false
      },
      {
        "id": "C",
        "text": "1",
        "correct": false
      },
      {
        "id": "D",
        "text": "0",
        "correct": false
      },
      {
        "id": "E",
        "text": "x",
        "correct": true
      }
    ],
    "answers": [
      "E"
    ],
    "type": "single",
    "id": "final2024_9",
    "aiNote": "Trong Verilog, toán tử == là phép so sánh logic thông thường.\nNếu toán hạng có chứa x hoặc z, kết quả so sánh có thể trở thành x vì không xác định chắc đúng hay sai.\nBiểu thức 4'b1z0x == 4'b1z0x nhìn giống nhau, nhưng == không so sánh chắc chắn được các bit x, z.\nMuốn so sánh cả x, z như giá trị cụ thể thì phải dùng ===."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 4,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 10",
    "question": "Mô tả bộ nhớ dung lượng 1024 byte có thể được thực hiện như sau?",
    "options": [
      {
        "id": "A",
        "text": "Byte [1024] mem",
        "correct": false
      },
      {
        "id": "B",
        "text": "Byte mem [1024]",
        "correct": false
      },
      {
        "id": "C",
        "text": "Reg [1024] mem",
        "correct": false
      },
      {
        "id": "D",
        "text": "reg [7:0] mem [1023:0]",
        "correct": true
      },
      {
        "id": "E",
        "text": "reg [1023:0] mem [7:0]",
        "correct": false
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "final2024_10",
    "aiNote": "Đáp án D đúng vì 1024 byte nghĩa là 1024 ô nhớ, mỗi ô rộng 8 bit.\nTrong Verilog, reg [7:0] mem [1023:0] là mảng 1024 phần tử 8 bit.\nCác lựa chọn khác sai cú pháp hoặc đảo nhầm độ rộng phần tử với số phần tử."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 4,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 11",
    "question": "Trong câu lệnh mô tả mạch always @(posedge clk) r_reg = r_next; tín hiệu r_reg phải có kiểu gì?",
    "options": [
      {
        "id": "A",
        "text": "wire",
        "correct": false
      },
      {
        "id": "B",
        "text": "net",
        "correct": false
      },
      {
        "id": "C",
        "text": "reg",
        "correct": true
      },
      {
        "id": "D",
        "text": "reg hoặc wire đều được",
        "correct": false
      },
      {
        "id": "E",
        "text": "kiểu bộ nhớ",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "final2024_11",
    "aiNote": "Đáp án C đúng vì: reg.\nTín hiệu được gán trong always/initial phải là reg trong Verilog truyền thống.\nreg là biến lưu giá trị mô phỏng và có thể tổng hợp thành FF, latch hoặc logic tùy cách mô tả."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 4,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 12",
    "question": "Trong ngôn ngữ Verilog, mô tả nào sau đây không hợp lệ? Cho trước wire [3:0] a; wire [3:0] b;",
    "options": [
      {
        "id": "A",
        "text": "assign a = b",
        "correct": false
      },
      {
        "id": "B",
        "text": "assign a = b[0:3]",
        "correct": true
      },
      {
        "id": "C",
        "text": "assign a[0:3] = b[3:0]",
        "correct": false
      },
      {
        "id": "D",
        "text": "assign a[3:0] = b[0:3]",
        "correct": false
      },
      {
        "id": "E",
        "text": "Cả 4 đều hợp lệ",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "final2024_12",
    "aiNote": "Đáp án B, C và D không hợp lệ vì dùng part-select ngược chiều khai báo [3:0].\nVới wire [3:0], range hợp lệ theo kiểu chọn phần thông thường là [3:0], không phải [0:3].\nA hợp lệ vì gán toàn bộ vector a = b."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 4,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 13",
    "question": "Mô tả tiếp theo nào sau đây đúng cho mạch đa hợp 2 sang 1?",
    "options": [
      {
        "id": "A",
        "text": "assign if (s==1) o = i[0]; else o = i[1];",
        "correct": false
      },
      {
        "id": "B",
        "text": "assign o = i[0]^s + i[1]&s;",
        "correct": false
      },
      {
        "id": "C",
        "text": "o = i[0]^s + i[1]&s;",
        "correct": false
      },
      {
        "id": "D",
        "text": "assign o = s ? i[0] : i[1];",
        "correct": true
      },
      {
        "id": "E",
        "text": "o = s ? i[0] : i[1];",
        "correct": false
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "final2024_13",
    "codeBlocks": [
      {
        "title": "Module đã cho",
        "code": "module Mux(input wire [1:0] i, input wire s, output wire o);\n  // chọn mô tả đúng cho o\nendmodule"
      }
    ],
    "aiNote": "Đáp án D đúng vì: assign o = s ? i[0] : i[1];.\nwire/net biểu diễn đường nối phần cứng và thường nhận giá trị từ assign, cổng hoặc module.\nNó không được gán trực tiếp trong procedural block như reg."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 4,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 14",
    "question": "Cho đoạn code Verilog sau. Giả sử giá trị khởi tạo a = 0, b = 1, cho biết giá trị của a và b sau khi thực thi.",
    "options": [
      {
        "id": "A",
        "text": "a = 0, b = 0",
        "correct": false
      },
      {
        "id": "B",
        "text": "a = 1, b = 0",
        "correct": true
      },
      {
        "id": "C",
        "text": "a = 1, b = 1",
        "correct": false
      },
      {
        "id": "D",
        "text": "a = 0, b = 1",
        "correct": false
      },
      {
        "id": "E",
        "text": "Mô tả không hợp lệ",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "final2024_14",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "initial begin\n  a <= 1;\n  b <= a;\nend"
      }
    ],
    "aiNote": "Trong Verilog, phép gán không chặn <= sẽ đọc giá trị vế phải trước, rồi cập nhật vế trái sau.\nBan đầu a = 0, b = 1.\nLệnh a <= 1 làm a được cập nhật thành 1 sau khi khối kết thúc.\nLệnh b <= a lấy giá trị a cũ = 0, nên b trở thành 0."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 4,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 15",
    "question": "Chương trình code sau thực hiện mạch gì?",
    "options": [
      {
        "id": "A",
        "text": "Mạch dịch trái 1 bit",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mạch chia 2 xung clk",
        "correct": true
      },
      {
        "id": "C",
        "text": "Mạch chia 4 xung clk",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mạch chia 3 xung clk",
        "correct": false
      },
      {
        "id": "E",
        "text": "Tất cả đều sai",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "final2024_15",
    "codeBlocks": [
      {
        "title": "Đoạn code dùng cho câu 15–18",
        "code": "always @(posedge clk or negedge reset)\nbegin\n  if(reset)\n    Q <= 1'b0;\n  else\n    Q <= D;\nend\nassign D = ~Q;\nassign Qout = Q;"
      }
    ],
    "aiNote": "Đáp án B đúng vì D được gán bằng ~Q nên mỗi cạnh clock Q sẽ đảo trạng thái.\nMột D Flip-Flop có D=~Q tạo mạch chia tần số 2.\nReset đưa Q về 0 trước khi bắt đầu đếm/đảo trạng thái."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 5,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 16",
    "question": "Cách nào có thể thay đổi code để bắt đầu Q = 1 thay vì bằng 0 khi reset tích cực?",
    "options": [
      {
        "id": "A",
        "text": "Thay đổi Q <= 1'b0; thành Q <= 1'b1 trong khối always",
        "correct": true
      },
      {
        "id": "B",
        "text": "Thay đổi assign Qout = Q; thành assign Qout = ~Q;",
        "correct": false
      },
      {
        "id": "C",
        "text": "Thay đổi assign D = ~Q; thành assign D = Q;",
        "correct": false
      },
      {
        "id": "D",
        "text": "Thêm Q = 1'b1; trong khối initial",
        "correct": false
      },
      {
        "id": "E",
        "text": "Tất cả đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "final2024_16",
    "codeBlocks": [
      {
        "title": "Đoạn code dùng cho câu 15–18",
        "code": "always @(posedge clk or negedge reset)\nbegin\n  if(reset)\n    Q <= 1'b0;\n  else\n    Q <= D;\nend\nassign D = ~Q;\nassign Qout = Q;"
      }
    ],
    "aiNote": "Đáp án A đúng vì giá trị reset của Q nằm trực tiếp ở câu Q <= 1'b0.\nMuốn Q bắt đầu bằng 1 khi reset tác động thì đổi dòng đó thành Q <= 1'b1.\nĐổi Qout hoặc D không thay đổi trạng thái reset bên trong của Q."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 5,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 17",
    "question": "Mô tả nào sau đây đúng cho chương trình code trên?",
    "options": [
      {
        "id": "A",
        "text": "D Flip-flop với reset bất đồng bộ",
        "correct": true
      },
      {
        "id": "B",
        "text": "D Flip-flop với reset đồng bộ",
        "correct": false
      },
      {
        "id": "C",
        "text": "T flip-flop với reset bất đồng bộ",
        "correct": false
      },
      {
        "id": "D",
        "text": "T flip-flop với reset đồng bộ",
        "correct": false
      },
      {
        "id": "E",
        "text": "Tất cả đều sai",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "final2024_17",
    "codeBlocks": [
      {
        "title": "Đoạn code dùng cho câu 15–18",
        "code": "always @(posedge clk or negedge reset)\nbegin\n  if(reset)\n    Q <= 1'b0;\n  else\n    Q <= D;\nend\nassign D = ~Q;\nassign Qout = Q;"
      }
    ],
    "aiNote": "Đáp án A đúng vì always có cả posedge clk và cạnh reset trong sensitivity list.\nReset được kiểm tra bên trong khối always nên là reset bất đồng bộ theo cấu trúc đề cho.\nQ nhận D ở cạnh clock, vì vậy phần tử chính là D Flip-Flop."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 5,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 18",
    "question": "Để viết Verilog mà Qout đạt mức cao chỉ khi cả Q0 và Q1 cao, phép gán Qout nên thực hiện như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "assign Qout = Q1 & Q0;",
        "correct": true
      },
      {
        "id": "B",
        "text": "assign Qout = Q1 ^ Q0;",
        "correct": false
      },
      {
        "id": "C",
        "text": "assign Qout = Q1 ~| Q0",
        "correct": false
      },
      {
        "id": "D",
        "text": "assign Qout = Q1 + Q0;",
        "correct": false
      },
      {
        "id": "E",
        "text": "Tất cả đều sai",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "final2024_18",
    "aiNote": "Đáp án A đúng vì Qout chỉ lên 1 khi Q1=1 và Q0=1 là phép AND logic theo bit.\nBiểu thức assign Qout = Q1 & Q0; mô tả đúng điều kiện đó.\nXOR chỉ lên 1 khi hai bit khác nhau, còn OR/+ không diễn tả điều kiện 'cả hai cùng cao'."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 5,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 19",
    "question": "Tại sao FPGA có xu hướng sử dụng nhiều transistor hơn cho mỗi hàm logic so với ASIC?",
    "options": [
      {
        "id": "A",
        "text": "FPGA hiệu quả hơn trong việc sử dụng số transistor",
        "correct": false
      },
      {
        "id": "B",
        "text": "ASIC được tối ưu hóa để giảm số lượng transistor",
        "correct": false
      },
      {
        "id": "C",
        "text": "FPGA yêu cầu dự phòng để cấu hình lại",
        "correct": true
      },
      {
        "id": "D",
        "text": "ASIC có mật độ bóng bán dẫn cao hơn",
        "correct": false
      },
      {
        "id": "E",
        "text": "Câu A và C đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "final2024_19",
    "aiNote": "Đáp án C đúng vì: FPGA yêu cầu dự phòng để cấu hình lại.\nFPGA cần SRAM cấu hình, switch lập trình và tài nguyên dự phòng để tái cấu hình.\nNhững phần phụ trợ này làm số transistor cho mỗi hàm logic nhiều hơn ASIC."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 5,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 20",
    "question": "Trong thiết kế vi mạch, task nào sau đây không thuộc nhóm Front-end của quy trình thiết kế?",
    "options": [
      {
        "id": "A",
        "text": "Static timing analysis",
        "correct": false
      },
      {
        "id": "B",
        "text": "RTL coding",
        "correct": false
      },
      {
        "id": "C",
        "text": "Gate level simulation",
        "correct": false
      },
      {
        "id": "D",
        "text": "Power estimation",
        "correct": false
      },
      {
        "id": "E",
        "text": "Tapeout",
        "correct": true
      }
    ],
    "answers": [
      "E"
    ],
    "type": "single",
    "id": "final2024_20",
    "aiNote": "Đáp án E đúng vì: Tapeout.\nCâu hỏi thuộc quy trình thiết kế vi mạch từ mô tả, mô phỏng, tổng hợp đến bố trí và kiểm tra.\nPhương án đúng khớp với nhiệm vụ của tầng được hỏi trong quy trình."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 5,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 21",
    "question": "Thiết kế nào dưới đây hợp lệ?",
    "options": [
      {
        "id": "A",
        "text": "wire a, b;\nassign a = 1;\nassign b = 1;\nassign a = b;",
        "correct": false
      },
      {
        "id": "B",
        "text": "reg a, b;\nalways @* begin\n  a <= 1;\n  b <= 1;\nend",
        "correct": true
      },
      {
        "id": "C",
        "text": "reg a, b;\na = 1;\nb = 1;\na = b;",
        "correct": false
      },
      {
        "id": "D",
        "text": "wire a, b;\na = 1;\nb = 1;\nassign a = b;",
        "correct": false
      },
      {
        "id": "E",
        "text": "Tất cả đều sai",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "final2024_21",
    "aiNote": "Trong Verilog, biến kiểu reg được phép gán giá trị bên trong khối thủ tục như always.\nĐoạn B có reg a,b; always @* begin a <= 1; b <= 1; end nên hợp lệ về mặt mô tả."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 5,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 22",
    "question": "Cấu trúc cơ bản của một CPLD là gì?",
    "options": [
      {
        "id": "A",
        "text": "Các SPLD được kết nối với nhau cố định",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mảng cổng AND lập trình được và mảng cổng OR lập trình được",
        "correct": false
      },
      {
        "id": "C",
        "text": "Mảng cổng OR cố định theo sau là mảng cổng AND lập trình được",
        "correct": false
      },
      {
        "id": "D",
        "text": "Các SPLD được kết nối với nhau thông qua các kết nối bên trong lập trình được",
        "correct": true
      },
      {
        "id": "E",
        "text": "Mảng cổng OR lập trình được theo sau là mảng cổng AND lập trình được",
        "correct": false
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "final2024_22",
    "aiNote": "Đáp án D đúng vì CPLD thường gồm nhiều khối SPLD/PAL-like được nối với nhau.\nCác khối này liên kết qua mạng kết nối bên trong lập trình được.\nNó khác PLA đơn lẻ chỉ gồm mảng AND/OR lập trình."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 5,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 23",
    "question": "Câu lệnh nào sau đây cho phép dữ liệu trong thanh ghi dịch sang phải 2 bit? Cho reg [7:0] A;",
    "options": [
      {
        "id": "A",
        "text": "A = {A[5:0], 2'b00};",
        "correct": false
      },
      {
        "id": "B",
        "text": "A = {A[1:0], A[7:2]};",
        "correct": false
      },
      {
        "id": "C",
        "text": "A = A >> 2;",
        "correct": false
      },
      {
        "id": "D",
        "text": "A = {2'b00, A[7:2]};",
        "correct": false
      },
      {
        "id": "E",
        "text": "Câu C và D đều đúng",
        "correct": true
      }
    ],
    "answers": [
      "E"
    ],
    "type": "single",
    "id": "final2024_23",
    "aiNote": "Đáp án E đúng vì cả C và D đều mô tả dịch phải 2 bit.\nA >> 2 dịch các bit sang phải và thêm 0 ở bên trái với kiểu không dấu.\n{2'b00, A[7:2]} cũng tạo đúng kết quả sau khi dịch phải 2 bit."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 5,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 24",
    "question": "Mô tả nào sau đây đúng cho Flip-Flop D?",
    "options": [
      {
        "id": "A",
        "text": "if (posedge clk) Q = D;",
        "correct": false
      },
      {
        "id": "B",
        "text": "always @(posedge clk) Q = D;",
        "correct": true
      },
      {
        "id": "C",
        "text": "always @(clk) Q = D;",
        "correct": false
      },
      {
        "id": "D",
        "text": "always @(clk) Q <= D;",
        "correct": false
      },
      {
        "id": "E",
        "text": "Tất cả các ý trên đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "final2024_24",
    "codeBlocks": [
      {
        "title": "Module đã cho",
        "code": "module FFD(input wire D, clk, output reg Q);\n  // chọn mô tả đúng\nendmodule"
      }
    ],
    "aiNote": "Đáp án B đúng vì: always @(posedge clk) Q = D;.\nwire/net biểu diễn đường nối phần cứng và thường nhận giá trị từ assign, cổng hoặc module.\nNó không được gán trực tiếp trong procedural block như reg."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 5,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 25",
    "question": "Trong Verilog, cách đặt tên tín hiệu nào sau đây là sai?",
    "options": [
      {
        "id": "A",
        "text": "myidentifier",
        "correct": false
      },
      {
        "id": "B",
        "text": "_myidentifier$",
        "correct": false
      },
      {
        "id": "C",
        "text": "m$_y_identifier",
        "correct": false
      },
      {
        "id": "D",
        "text": "4my_identifier",
        "correct": true
      },
      {
        "id": "E",
        "text": "My_Identifier$",
        "correct": false
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "final2024_25",
    "aiNote": "Trong Verilog, tên định danh có thể chứa chữ cái, chữ số, dấu _ và ký hiệu $.\nTuy nhiên, tên định danh không được bắt đầu bằng chữ số.\n4my_identifier bắt đầu bằng số 4 nên là cách đặt tên sai.\nCác tên còn lại bắt đầu bằng chữ cái hoặc _, nên hợp lệ trong Verilog."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 6,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 26",
    "question": "Quá trình thiết kế vi mạch số gồm 5 bước, theo trình tự là gì?",
    "options": [
      {
        "id": "A",
        "text": "HDL coding, simulation, synthesis, timing analysis and verification, placement and routing",
        "correct": false
      },
      {
        "id": "B",
        "text": "HDL coding, simulation, synthesis, placement and routing, timing analysis and verification",
        "correct": true
      },
      {
        "id": "C",
        "text": "HDL coding, synthesis, simulation, timing analysis and verification, placement and routing",
        "correct": false
      },
      {
        "id": "D",
        "text": "HDL coding, synthesis, timing analysis and verification, simulation, placement and routing",
        "correct": false
      },
      {
        "id": "E",
        "text": "Simulation, HDL coding, synthesis, timing analysis and verification, placement and routing",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "final2024_26",
    "aiNote": "Quy trình thiết kế vi mạch số thường bắt đầu bằng HDL coding, tức viết mô tả mạch bằng Verilog/VHDL.\nSau đó simulation để kiểm tra chức năng trước khi tổng hợp.\nTiếp theo là synthesis, chuyển HDL thành mạch logic/gate-level.\nSau tổng hợp mới đến placement and routing, rồi cuối cùng timing analysis and verification để kiểm tra timing và xác nhận thiết kế."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 6,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 27",
    "question": "Nếu A = 8'b100 và B = 4'b11, kết quả của phép toán A ** B là gì?",
    "options": [
      {
        "id": "A",
        "text": "12",
        "correct": false
      },
      {
        "id": "B",
        "text": "25",
        "correct": false
      },
      {
        "id": "C",
        "text": "20",
        "correct": false
      },
      {
        "id": "D",
        "text": "64",
        "correct": true
      },
      {
        "id": "E",
        "text": "Tất cả đều sai",
        "correct": false
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "final2024_27",
    "aiNote": "Đáp án D đúng vì: 64.\nToán tử ** là phép lũy thừa trong Verilog.\nCần đổi các toán hạng nhị phân sang giá trị thập phân rồi tính cơ số mũ."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 6,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 28",
    "question": "Biểu diễn bus tín hiệu trong ngôn ngữ Verilog nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "wire BusC [3:0];",
        "correct": false
      },
      {
        "id": "B",
        "text": "wire [4] BusC;",
        "correct": false
      },
      {
        "id": "C",
        "text": "wire BusC [4];",
        "correct": false
      },
      {
        "id": "D",
        "text": "wire [3:0] BusC;",
        "correct": true
      },
      {
        "id": "E",
        "text": "Tất cả đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "final2024_28",
    "aiNote": "Trong Verilog, bus/vector tín hiệu được khai báo bằng cách đặt độ rộng bit trước tên tín hiệu.\nwire [3:0] BusC; nghĩa là BusC là bus 4 bit gồm các bit từ BusC[3] đến BusC[0].\nA và C giống khai báo mảng wire, không phải bus vector kiểu thông dụng; B sai vì [4] không phải cú pháp khai báo bus đúng."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 6,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 29",
    "question": "Thiết kế khối cập nhật trạng thái tiếp theo (Next State Logic) cho mạch ghi dịch vào nối tiếp ra nối tiếp.",
    "options": [
      {
        "id": "A",
        "text": "assign state_next = (Inputs, state_reg[6:0])",
        "correct": false
      },
      {
        "id": "B",
        "text": "assign state_next = {Inputs, state_reg[7:1]}",
        "correct": true
      },
      {
        "id": "C",
        "text": "always (posedge Clk) state_next = {Inputs, state_reg[7:1]}",
        "correct": false
      },
      {
        "id": "D",
        "text": "always (posedge Clk) state_next = (Inputs, state_reg[7:1])",
        "correct": false
      },
      {
        "id": "E",
        "text": "always (posedge Clk) state_next = (Inputs >> 1)",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "final2024_29",
    "images": [
      {
        "src": "data:image/png;base64,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",
        "caption": "Sơ đồ mạch ghi dịch vào nối tiếp ra nối tiếp dùng cho câu 29–30"
      }
    ],
    "aiNote": "Đáp án B đúng vì khối Next State Logic là logic tổ hợp nên dùng assign để tạo state_next từ input nối tiếp và trạng thái hiện tại.\nCú pháp nối vector đúng là dùng ngoặc nhọn: {Inputs, state_reg[7:1]}.\nA và D dùng ngoặc tròn nên không phải phép nối vector đúng.\nC và E dùng dạng always thiếu ký tự @ và cũng không phù hợp với khối cập nhật trạng thái kế tiếp theo đề."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 6,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 30",
    "question": "Thiết kế khối đồng bộ cho mạch ghi dịch vào nối tiếp ra nối tiếp.",
    "options": [
      {
        "id": "A",
        "text": "assign state_reg=state_next",
        "correct": false
      },
      {
        "id": "B",
        "text": "always (posedge Clk) state_reg=state_next",
        "correct": false
      },
      {
        "id": "C",
        "text": "always @(posedge Clk) state_reg=state_next",
        "correct": true
      },
      {
        "id": "D",
        "text": "always @(posedge Clk) if (reset) state_reg=state_next",
        "correct": false
      },
      {
        "id": "E",
        "text": "always (posedge Clk, reset) if (reset) state_reg=state_next",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "final2024_30",
    "images": [
      {
        "src": "data:image/png;base64,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",
        "caption": "Sơ đồ mạch ghi dịch vào nối tiếp ra nối tiếp dùng cho câu 29–30"
      }
    ],
    "aiNote": "Đáp án C đúng vì khối đồng bộ phải cập nhật state_reg tại cạnh lên của clock bằng dạng always @(posedge Clk).\nA là gán liên tục nên không mô tả thanh ghi đồng bộ.\nB và E thiếu ký tự @ trong event control nên không đúng cú pháp Verilog.\nD chỉ cập nhật khi reset=1 nên không phải khối đồng bộ cập nhật trạng thái bình thường.\nTrong thiết kế thực tế thường ưu tiên dùng <= cho thanh ghi, nhưng theo các lựa chọn trong đề thì C là đáp án đúng."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 6,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 31",
    "question": "Mô tả Verilog nào sau đây đúng cho cổng AND 3 ngõ vào?",
    "options": [
      {
        "id": "A",
        "text": "assign and (F, x, y, z);",
        "correct": false
      },
      {
        "id": "B",
        "text": "always @(x, y, z) F = x and y and z;",
        "correct": false
      },
      {
        "id": "C",
        "text": "and (F, x, y, z);",
        "correct": true
      },
      {
        "id": "D",
        "text": "F = x and y and z;",
        "correct": false
      },
      {
        "id": "E",
        "text": "Tất cả 4 câu đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "final2024_31",
    "codeBlocks": [
      {
        "title": "Module đã cho",
        "code": "module and_gate(input wire x, y, z, output wire F);\n  // chọn mô tả đúng cho cổng AND 3 ngõ vào\nendmodule"
      }
    ],
    "aiNote": "Đáp án C đúng vì: and (F, x, y, z);.\nwire/net biểu diễn đường nối phần cứng và thường nhận giá trị từ assign, cổng hoặc module.\nNó không được gán trực tiếp trong procedural block như reg."
  },
  {
    "source": "Đề thi cuối học kỳ 2 năm học 2023–2024",
    "source_file": "de-thi-cuoi-hoc-ky-2-icsd336764-thiet-ke-ht-va-vmth.pdf",
    "page": 7,
    "chapter": "ĐỀ THI CUỐI KỲ 2 ICSD336764",
    "section": "Đề số 1 - 2023-2024",
    "question_no": "Câu 32",
    "question": "Thiết kế mạch đếm lên 4 bit với tín hiệu ngõ vào reset đồng bộ.",
    "options": [
      {
        "id": "A",
        "text": "always @(posedge clk, posedge reset)\n  if (reset) y <= 0;\n  else y <= y + 1;",
        "correct": false
      },
      {
        "id": "B",
        "text": "always @(posedge clk, reset)\n  if (reset) y <= 0;\n  else y <= y + 1;",
        "correct": false
      },
      {
        "id": "C",
        "text": "always @(clk, reset)\n  if (reset) y <= 0;\n  else y <= y + 1;",
        "correct": false
      },
      {
        "id": "D",
        "text": "always @(posedge clk)\n  if (reset) y <= 0;\n  else y <= y + 1;",
        "correct": true
      },
      {
        "id": "E",
        "text": "always @(clk)\n  y = y + 1;",
        "correct": false
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "final2024_32",
    "codeBlocks": [
      {
        "title": "Module đã cho",
        "code": "module upcounter(input wire reset, clk, output reg [3:0] y);\n  // chọn mô tả đúng\nendmodule"
      }
    ],
    "aiNote": "Đáp án D đúng vì reset đồng bộ chỉ được kiểm tra tại cạnh clock.\nSensitivity list chỉ cần posedge clk; khi có cạnh clock, nếu reset=1 thì y về 0, ngược lại y tăng 1.\nNếu đưa reset vào sensitivity list thì đó là dạng reset bất đồng bộ."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 1",
    "question": "Các mô đun logic trong FPGA sử dụng gì?",
    "options": [
      {
        "id": "A",
        "text": "Mạng cổng AND",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mạng cổng OR",
        "correct": false
      },
      {
        "id": "C",
        "text": "Mạng cổng AND theo sau là mạng cổng OR",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mạng Look-Up",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "exam01_1",
    "aiNote": "Đáp án D đúng vì các khối logic chính trong FPGA thường dùng LUT để hiện thực hàm logic.\nLUT lưu bảng chân trị của hàm, nên có thể cấu hình lại theo thiết kế.\nMạng AND/OR là cách mô tả gần với PAL/PLA hơn, không phải cấu trúc logic chính của FPGA."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 2",
    "question": "FPGA cho phép cấu hình các hàm chức năng sử dụng các mô hình sau.",
    "options": [
      {
        "id": "A",
        "text": "CPLD",
        "correct": false
      },
      {
        "id": "B",
        "text": "SPLD",
        "correct": false
      },
      {
        "id": "C",
        "text": "LUT",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả 3 đáp án",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "exam01_2",
    "aiNote": "Đáp án D là đáp án theo dữ liệu đề vì chọn cả SPLD, CPLD và LUT.\nTuy nhiên về bản chất, FPGA hiện thực hàm chức năng chủ yếu bằng LUT trong các CLB.\nSPLD và CPLD là các họ PLD khác, không phải mô hình cấu hình bên trong FPGA.\nCần kiểm tra lại đáp án."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 3",
    "question": "Trong ngôn ngữ Verilog, Z đại diện cho giá trị gì?",
    "options": [
      {
        "id": "A",
        "text": "Tổng trở cao",
        "correct": true
      },
      {
        "id": "B",
        "text": "Giá trị chưa biết",
        "correct": false
      },
      {
        "id": "C",
        "text": "Giá trị chưa khởi tạo",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả 3 đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "exam01_3",
    "aiNote": "Trong Verilog, giá trị Z biểu diễn trạng thái high impedance hay tổng trở cao.\nTrạng thái này thường xuất hiện khi đường tín hiệu bị thả nổi hoặc không được điều khiển.\nX mới là giá trị chưa biết/không xác định.\nGiá trị chưa khởi tạo thường có thể xuất hiện dưới dạng X, không phải Z."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 4",
    "question": "Biểu diễn giá trị thập phân trong Verilog.",
    "options": [
      {
        "id": "A",
        "text": "8'd15",
        "correct": false
      },
      {
        "id": "B",
        "text": "15",
        "correct": false
      },
      {
        "id": "C",
        "text": "4'd15",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả 3 đều đúng",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "exam01_4",
    "aiNote": "Trong Verilog, giá trị thập phân có thể viết trực tiếp như 15, đây là số thập phân không khai báo kích thước.\nCũng có thể viết dạng có kích thước và cơ số như 8'd15, nghĩa là số thập phân 15 biểu diễn bằng 8 bit.\n4'd15 cũng hợp lệ vì 15 biểu diễn vừa đủ trong 4 bit là 1111.\nVì cả 8'd15, 15, và 4'd15 đều là cách biểu diễn giá trị thập phân hợp lệ nên chọn D."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 5",
    "question": "Trong Verilog giá trị 4'bz1 có thể được biểu diễn như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "4'bxxz1",
        "correct": false
      },
      {
        "id": "B",
        "text": "4'bzzz1",
        "correct": true
      },
      {
        "id": "C",
        "text": "2'bz1",
        "correct": false
      },
      {
        "id": "D",
        "text": "1'b1",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "exam01_5",
    "aiNote": "Đáp án B đúng vì hằng 4'bz1 có độ rộng 4 bit nhưng chỉ ghi 2 ký tự z1.\nKhi bit cao nhất được ghi là z, phần mở rộng bên trái cũng được điền bằng z.\nVì vậy giá trị tương đương là 4'bzzz1."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 6",
    "question": "Trong Verilog giá trị 8'b11 có thể được biểu diễn như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "8'b00000011",
        "correct": true
      },
      {
        "id": "B",
        "text": "8'bxxxx_xx11",
        "correct": false
      },
      {
        "id": "C",
        "text": "8b'xxxxxx11",
        "correct": false
      },
      {
        "id": "D",
        "text": "2;b11",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "exam01_6",
    "aiNote": "Đáp án A đúng vì 8'b11 là hằng nhị phân có độ rộng 8 bit.\nGiá trị 11 chỉ chiếm 2 bit thấp, nên các bit còn thiếu bên trái được thêm 0.\nDo đó biểu diễn đầy đủ là 8'b00000011."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 7",
    "question": "Cho đoạn code sau. Giá trị của B tại thời điểm kết thúc đoạn code là gì?",
    "options": [
      {
        "id": "A",
        "text": "1",
        "correct": false
      },
      {
        "id": "B",
        "text": "0",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": false
      },
      {
        "id": "D",
        "text": "Mô tả không hợp lệ",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "exam01_7",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "wire A, B;\nA = 1;\nB = A;\nA = 0;"
      }
    ],
    "aiNote": "Trong Verilog, wire là kiểu dây nối, không được gán trực tiếp bằng các câu lệnh như A = 1;.\nMuốn gán cho wire phải dùng câu lệnh gán liên tục assign, ví dụ assign A = 1'b1;.\nNgoài ra các câu lệnh gán tuần tự như trên phải đặt trong initial hoặc always và thường dùng với kiểu reg.\nVì đoạn code sai cách mô tả nên không thể xác định hợp lệ giá trị cuối của B."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 8",
    "question": "Biểu diễn bus tín hiệu trong Verilog.",
    "options": [
      {
        "id": "A",
        "text": "wire [7:0] signal_a;",
        "correct": true
      },
      {
        "id": "B",
        "text": "wire signal_a [7:0];",
        "correct": false
      },
      {
        "id": "C",
        "text": "reg [7:0] signal_a;",
        "correct": false
      },
      {
        "id": "D",
        "text": "reg signal_a [7:0];",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "exam01_8",
    "aiNote": "Đây là cách khai báo bus tín hiệu 8 bit trong Verilog với kiểu wire.\nCú pháp đúng đặt độ rộng bus trước tên tín hiệu: [7:0] signal_a.\nB là dạng mảng wire, không phải cách biểu diễn bus tín hiệu theo đề.\nC tuy cũng là vector 8 bit nhưng là kiểu reg, còn câu hỏi đang hỏi bus tín hiệu kiểu dây wire."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 9",
    "question": "Trong Verilog, khai báo mảng 4 phần tử được thực hiện như sau:",
    "options": [
      {
        "id": "A",
        "text": "reg [3:0] a;",
        "correct": false
      },
      {
        "id": "B",
        "text": "wire a [3:0];",
        "correct": false
      },
      {
        "id": "C",
        "text": "reg a [3:0];",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cả 3 đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_9",
    "aiNote": "Đáp án C đúng vì reg a [3:0]; khai báo một mảng gồm 4 phần tử, mỗi phần tử là reg 1 bit.\nreg [3:0] a; là một vector 4 bit, không phải mảng 4 phần tử.\nCâu hỏi đang hỏi mảng, nên cần dùng cú pháp có chỉ số mảng sau tên biến."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 10",
    "question": "Mô tả bộ nhớ 1024 byte có thể được thực hiện như sau:",
    "options": [
      {
        "id": "A",
        "text": "byte [1024] mem",
        "correct": false
      },
      {
        "id": "B",
        "text": "reg [1024] mem",
        "correct": false
      },
      {
        "id": "C",
        "text": "reg [1023:0] mem [7:0]",
        "correct": false
      },
      {
        "id": "D",
        "text": "reg [7:0] mem [1023:0]",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "exam01_10",
    "aiNote": "Bộ nhớ 1024 byte nghĩa là có 1024 ô nhớ, mỗi ô rộng 8 bit.\nTrong Verilog, reg [7:0] mem [1023:0] mô tả mảng gồm 1024 phần tử, mỗi phần tử là 8 bit.\nBạn chọn B. reg [1024] mem là sai vì đây chỉ là một thanh ghi/vector rộng khoảng 1025 bit, không phải bộ nhớ gồm 1024 byte.\nC sai vì mô tả 8 phần tử, mỗi phần tử rộng 1024 bit, bị đảo cấu trúc bộ nhớ."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 11",
    "question": "Thiết kế nào dưới đây hợp lệ?",
    "options": [
      {
        "id": "A",
        "text": "wire a, b;\nassign a = 1;\nassign b = 1;\nassign a = b;",
        "correct": true
      },
      {
        "id": "B",
        "text": "reg a, b;\nassign a = 1;\nassign b = 1;\nassign a = b;",
        "correct": false
      },
      {
        "id": "C",
        "text": "reg a, b;\na = 1;\nb = 1;\na = b;",
        "correct": false
      },
      {
        "id": "D",
        "text": "wire a, b;\na = 1;\nb = 1;\nassign a = 1;",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "exam01_11",
    "aiNote": "Đáp án A hợp lệ về cú pháp vì wire có thể được điều khiển bằng các câu lệnh assign liên tục.\nCác phương án dùng reg với assign liên tục hoặc gán trực tiếp ngoài procedural block đều không đúng cách.\nLưu ý A có nhiều driver cho a nên khi mô phỏng có thể gây xung đột giá trị; câu này chủ yếu xét tính hợp lệ cú pháp.\nCần kiểm tra lại đáp án nếu đề xét ngữ nghĩa nhiều driver."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 12",
    "question": "Trong Verilog mô tả nào sau đây không hợp lệ với wire [3:0] a; wire [3:0] b;",
    "options": [
      {
        "id": "A",
        "text": "assign a=b",
        "correct": false
      },
      {
        "id": "B",
        "text": "assign a=b[3:0]",
        "correct": false
      },
      {
        "id": "C",
        "text": "assign a[0:3]=b[3:0]",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cả 3 đều hợp lệ",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_12",
    "aiNote": "Đáp án C không hợp lệ vì a được khai báo [3:0] nhưng lại chọn part-select a[0:3] ngược chiều khai báo.\nTrong Verilog part-select thông thường phải dùng cùng chiều với range đã khai báo, tức a[3:0].\nA và B đều gán toàn bộ vector 4 bit hợp lệ."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 13",
    "question": "Phát biểu nào sau đây đúng nhất?",
    "options": [
      {
        "id": "A",
        "text": "Các khối always được thực thi tuần tự",
        "correct": false
      },
      {
        "id": "B",
        "text": "Bên trong các khối always, các phát biểu được xử lý đồng thời",
        "correct": false
      },
      {
        "id": "C",
        "text": "Bên trong khối always các phát biểu được xử lý tuần tự",
        "correct": true
      },
      {
        "id": "D",
        "text": "Tín hiệu wire có thể được cập nhật bên trong khối always",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_13",
    "aiNote": "Đáp án C đúng vì bên trong một khối always, các câu lệnh procedural được thực hiện theo thứ tự viết.\nCác khối always khác nhau chạy đồng thời với nhau, không phải tuần tự.\nwire không được cập nhật trực tiếp trong always, thường phải dùng reg/logic cho gán procedural."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 14",
    "question": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Phát biểu if hoặc case chỉ có thể đặt bên trong các procedure",
        "correct": true
      },
      {
        "id": "B",
        "text": "Phát biểu if hoặc case có thể đặt bên trong hoặc bên ngoài procedure",
        "correct": false
      },
      {
        "id": "C",
        "text": "Phát biểu if đặt bên ngoài procedure thì các phép gán tín hiệu phải dùng assign",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả 3 đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "exam01_14",
    "aiNote": "Đáp án A đúng vì if và case là câu lệnh procedural trong Verilog.\nChúng phải đặt bên trong always, initial, task hoặc function.\nNgoài procedural block chỉ dùng được continuous assign, instance module hoặc generate phù hợp."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 15",
    "question": "Mô tả nào cho biết các lệnh trong khối always thực thi khi có cạnh lên clk?",
    "options": [
      {
        "id": "A",
        "text": "always (posedge clk) begin ..end",
        "correct": false
      },
      {
        "id": "B",
        "text": "always (negedge clk) begin …end",
        "correct": false
      },
      {
        "id": "C",
        "text": "always @(posedge clk) begin …end",
        "correct": true
      },
      {
        "id": "D",
        "text": "always @(negedge clk) begin …end",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_15",
    "aiNote": "Đáp án C đúng vì cú pháp bắt sự kiện cạnh lên là always @(posedge clk).\nKý hiệu @ dùng để khai báo sensitivity/event control cho khối always.\nnegedge là cạnh xuống, còn thiếu @ thì không đúng cú pháp always chuẩn."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 16",
    "question": "Trong Verilog #20 tương ứng với thời gian delay là gì?",
    "options": [
      {
        "id": "A",
        "text": "20 ms",
        "correct": false
      },
      {
        "id": "B",
        "text": "20 ns",
        "correct": false
      },
      {
        "id": "C",
        "text": "20 us",
        "correct": false
      },
      {
        "id": "D",
        "text": "Chưa đủ cơ sở xác định",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "exam01_16",
    "aiNote": "Trong Verilog, #20 nghĩa là trì hoãn 20 đơn vị thời gian mô phỏng.\nĐơn vị cụ thể là ns, us hay ms phụ thuộc vào khai báo `timescale của chương trình.\nVí dụ nếu `timescale 1ns/1ps thì #20 là 20 ns.\nNếu không có timescale, ta chưa xác định được đơn vị thời gian cụ thể."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 17",
    "question": "Trong Verilog hai câu lệnh a<=1; b<=0 dùng để mô tả gì?",
    "options": [
      {
        "id": "A",
        "text": "Trả về giá trị so sánh",
        "correct": false
      },
      {
        "id": "B",
        "text": "Gán tuần tự a=1 và b=0",
        "correct": false
      },
      {
        "id": "C",
        "text": "Gán đồng thời a=1 và b=0",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cả 3 đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_17",
    "aiNote": "Đáp án C đúng vì <= là phép gán không chặn trong Verilog.\nTrong cùng một bước thời gian, vế phải được lấy mẫu trước rồi các vế trái cập nhật đồng thời.\nDo đó a<=1 và b<=0 mô tả cập nhật song song, thường dùng cho mạch tuần tự."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 18",
    "question": "Trong câu lệnh assign r_reg = 4'b0101, r_reg phải có kiểu dữ liệu gì?",
    "options": [
      {
        "id": "A",
        "text": "reg",
        "correct": false
      },
      {
        "id": "B",
        "text": "wire",
        "correct": true
      },
      {
        "id": "C",
        "text": "có thể reg hoặc wire",
        "correct": false
      },
      {
        "id": "D",
        "text": "real",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "exam01_18",
    "aiNote": "Trong Verilog, câu lệnh assign là phép gán liên tục dùng để mô tả mạch tổ hợp.\nVế trái của assign phải là kiểu net, thường dùng nhất là wire.\nKiểu reg thường được gán bên trong khối always hoặc initial, không dùng trực tiếp với assign trong Verilog chuẩn.\nVì vậy r_reg trong assign r_reg = 4'b0101; nên khai báo là wire."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 19",
    "question": "Trong câu lệnh always @(rs, clk) a = a + 1, a phải có kiểu dữ liệu gì?",
    "options": [
      {
        "id": "A",
        "text": "reg",
        "correct": true
      },
      {
        "id": "B",
        "text": "wire",
        "correct": false
      },
      {
        "id": "C",
        "text": "có thể reg hoặc wire",
        "correct": false
      },
      {
        "id": "D",
        "text": "real",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "exam01_19",
    "aiNote": "Đáp án A đúng vì a được gán bên trong khối always.\nTín hiệu nhận gán procedural trong Verilog phải khai báo kiểu reg.\nwire chỉ dùng cho gán liên tục bằng assign hoặc kết nối module/cổng."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 20",
    "question": "Trong thiết kế mạch tuần tự đồng bộ, sử dụng flip-flop nào để đồng bộ dữ liệu?",
    "options": [
      {
        "id": "A",
        "text": "FF JK",
        "correct": false
      },
      {
        "id": "B",
        "text": "FF RS",
        "correct": false
      },
      {
        "id": "C",
        "text": "FF D",
        "correct": true
      },
      {
        "id": "D",
        "text": "FF T",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_20",
    "aiNote": "Trong mạch tuần tự đồng bộ, Flip-Flop D thường được dùng để lưu và đồng bộ dữ liệu theo xung clock.\nTại cạnh kích hoạt của clock, ngõ ra Q nhận giá trị từ ngõ vào D.\nVì chỉ có một ngõ dữ liệu D nên FF D dễ dùng để thiết kế thanh ghi, bộ đếm, FSM.\nFF JK, RS, T cũng là phần tử nhớ nhưng không thuận tiện bằng FF D trong thiết kế đồng bộ."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 21",
    "question": "Câu lệnh nào cho phép dữ liệu trong thanh ghi dịch sang phải 2 bit với reg [7:0] a?",
    "options": [
      {
        "id": "A",
        "text": "a = {2'b00, a[7:2]};",
        "correct": true
      },
      {
        "id": "B",
        "text": "a = {2'b00, a[5:0]};",
        "correct": false
      },
      {
        "id": "C",
        "text": "a = (2'b00, a[7;2]);",
        "correct": false
      },
      {
        "id": "D",
        "text": "a >> 2;",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "exam01_21",
    "aiNote": "Dịch phải 2 bit nghĩa là bỏ 2 bit thấp nhất a[1:0], các bit còn lại a[7:2] dịch xuống phải.\nHai bit cao mới được chèn thêm 00, nên kết quả là {2'b00, a[7:2]}.\nBạn chọn C là sai vì cú pháp không hợp lệ: dùng () thay vì {} và viết sai chỉ số a[7;2].\nD chỉ là biểu thức dịch phải, chưa gán lại vào a, nên không phải câu lệnh lưu kết quả vào thanh ghi."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 22",
    "question": "Trong mô tả reg [3:0] a, b, c = {a, a, b, a}, c phải có độ rộng bus là bao nhiêu?",
    "options": [
      {
        "id": "A",
        "text": "4 bit",
        "correct": false
      },
      {
        "id": "B",
        "text": "8 bit",
        "correct": false
      },
      {
        "id": "C",
        "text": "16 bit",
        "correct": true
      },
      {
        "id": "D",
        "text": "Phép gán không hợp lệ đối với kiểu reg",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_22",
    "aiNote": "Đáp án C đúng vì {a, a, b, a} là phép nối 4 vector.\nMỗi biến a hoặc b rộng 4 bit, nên tổng độ rộng là 4 + 4 + 4 + 4 = 16 bit.\nVì vậy c phải có độ rộng 16 bit nếu muốn lưu đủ kết quả nối."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 23",
    "question": "Mô tả nào đúng cho mạch đa hợp 2 sang 1 với output wire o?",
    "options": [
      {
        "id": "A",
        "text": "if (s==1) o=i[0]; else o=i[1];",
        "correct": false
      },
      {
        "id": "B",
        "text": "asign o = i[0]^s + i[1]&s;",
        "correct": false
      },
      {
        "id": "C",
        "text": "assign o = s ? i[0] : i[1];",
        "correct": true
      },
      {
        "id": "D",
        "text": "o = s ? i[0] : i[1];",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_23",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "module Mux(input wire [1:0] i, input wire s, output wire o);"
      }
    ],
    "aiNote": "Đáp án C đúng vì output o là wire nên phải gán bằng assign liên tục.\nToán tử điều kiện s ? i[0] : i[1] mô tả MUX 2:1: s quyết định chọn một trong hai ngõ vào.\nCác phương án gán trực tiếp hoặc dùng if ngoài always không hợp lệ với wire."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 24",
    "question": "Mô tả nào gần đúng cho mạch đa hợp 2 sang 1 với output reg o?",
    "options": [
      {
        "id": "A",
        "text": "always @(i,s) if (s==1) o=i[1]; else o=i[0];",
        "correct": true
      },
      {
        "id": "B",
        "text": "asign o = i[0]&s + i[1]&(~s);",
        "correct": false
      },
      {
        "id": "C",
        "text": "assign o = s ? i[0] : i[1];",
        "correct": false
      },
      {
        "id": "D",
        "text": "o = s ? i[0] : i[1];",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "exam01_24",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "module Mux(input wire [1:0] i, input wire s, output reg o);"
      }
    ],
    "aiNote": "Vì o được khai báo là output reg, nên phải gán trong khối thủ tục như always.\nPhương án A dùng always @(i,s) và chọn ngõ ra theo tín hiệu chọn s.\nNếu s = 1 thì o = i[1], nếu s = 0 thì o = i[0], đúng chức năng MUX 2 sang 1.\nB sai vì viết sai từ khóa assign thành asign.\nC sai vì dùng assign cho biến kiểu reg; D sai vì câu lệnh gán không nằm trong always/initial."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 25",
    "question": "Mô tả nào gần đúng cho mạch giải đa hợp 1 sang 2 với output reg [1:0] o?",
    "options": [
      {
        "id": "A",
        "text": "always @(i,s) o=(i[0]&s)|(i[1]&(~s));",
        "correct": false
      },
      {
        "id": "B",
        "text": "always @(i,s) if (s) o[0]=i; else o[1]=i;",
        "correct": true
      },
      {
        "id": "C",
        "text": "assign o[0]=i&s; assign o[0]=i; else o[1]=i;",
        "correct": false
      },
      {
        "id": "D",
        "text": "Cả 3 đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "exam01_25",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "module deMux(input wire i, input wire s, output reg [1:0] o);"
      }
    ],
    "aiNote": "Mạch DEMUX 1 sang 2 dùng tín hiệu chọn s để đưa ngõ vào i ra một trong hai ngõ ra o[0] hoặc o[1].\nPhương án B dùng if (s) ... else ... nên gần đúng với cách điều khiển chọn ngõ ra của DEMUX.\nA sai vì i chỉ là 1 bit nhưng lại dùng i[0], i[1].\nC sai cú pháp và gán trùng o[0]."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 26",
    "question": "Mô tả nào tiếp theo sau đây đúng cho mạch giải đa hợp 1 sang 2 với output wire [1:0] o?",
    "options": [
      {
        "id": "A",
        "text": "always @(i,s) o=(i[0]&s)/(i[1]&(~s));",
        "correct": false
      },
      {
        "id": "B",
        "text": "always @(i,s) if (s) o[0]=i; else o[1]=i;",
        "correct": false
      },
      {
        "id": "C",
        "text": "assign o[0]=i&s; assign o[1]=i&(~s);",
        "correct": true
      },
      {
        "id": "D",
        "text": "Cả 3 đều đúng",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_26",
    "codeBlocks": [
      {
        "title": "Module đã cho",
        "code": "module Mux(input wire i, input wire s, output wire [1:0] o);"
      }
    ],
    "aiNote": "Đáp án C đúng vì đề khai báo ngõ ra o là output wire [1:0], nên có thể dùng continuous assignment bằng assign.\nMạch giải đa hợp 1 sang 2 đưa input i ra một trong hai ngõ o[0] hoặc o[1] theo tín hiệu chọn s.\nC dùng assign để tạo hai nhánh: o[0] = i & s và o[1] = i & (~s).\nB sai trong ngữ cảnh output wire vì gán trong always cần output reg/logic, còn A sai cú pháp và dùng phép chia không phù hợp."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 27",
    "question": "Mô tả nào đúng cho cổng AND 3 ngõ vào?",
    "options": [
      {
        "id": "A",
        "text": "D=A and B and C;",
        "correct": false
      },
      {
        "id": "B",
        "text": "always @(A,B,C) D = A and B and C;",
        "correct": false
      },
      {
        "id": "C",
        "text": "assign and (D,A,B,C);",
        "correct": false
      },
      {
        "id": "D",
        "text": "and (D,A,B,C);",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "exam01_27",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "module and_gate(input wire A, B, C, output wire D);"
      }
    ],
    "aiNote": "Đáp án D đúng vì Verilog hỗ trợ primitive gate theo dạng and(out, in1, in2, in3).\nỞ đây and(D,A,B,C) tạo cổng AND 3 ngõ vào và đưa kết quả ra D.\nassign and(...) sai cú pháp, còn từ khóa and không dùng như toán tử chữ trong biểu thức."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 28",
    "question": "Mô tả nào đúng cho Flip-Flop D?",
    "options": [
      {
        "id": "A",
        "text": "if (posedge, clk) Q = D;",
        "correct": false
      },
      {
        "id": "B",
        "text": "always @(posedge clk) Q = D;",
        "correct": true
      },
      {
        "id": "C",
        "text": "always @(clk) Q = D;",
        "correct": false
      },
      {
        "id": "D",
        "text": "always @(clk) Q <= D;",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "exam01_28",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "module FFD(input wire D, clk, output reg Q);"
      }
    ],
    "aiNote": "Đáp án B đúng vì D Flip-Flop lấy mẫu D tại cạnh lên clock với always @(posedge clk).\nQ là output reg nên có thể được gán trong always.\nTrong thiết kế tuần tự nên ưu tiên <=, nhưng đáp án B vẫn đúng về dạng mô tả FF theo đề."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 29",
    "question": "Cài đặt module TFF trong Verilog có thể thực hiện như thế nào?",
    "options": [
      {
        "id": "A",
        "text": "TFF tf0(.Clk(clk), .rs(rs), .q(q), .qbar(qbar));",
        "correct": false
      },
      {
        "id": "B",
        "text": "TFF tf0 Port map(.clk(clk), .rs(rs), .q(q), .qbar(qbar));",
        "correct": false
      },
      {
        "id": "C",
        "text": "TFF tf0(.clk(clk), .rs(rs), .q(q), .qbar(qbar));",
        "correct": true
      },
      {
        "id": "D",
        "text": "tf0 TFF(.clk(clk), .rs(rs), .q(q), .qbar(qbar));",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_29",
    "aiNote": "Đáp án C đúng vì cú pháp khởi tạo module trong Verilog là: TênModule tên_instance(.port(signal), ...).\nTên cổng phải khớp đúng chữ hoa/thường với module gốc, nên .clk khác .Clk nếu module khai báo clk.\nPort map là cú pháp VHDL, không phải Verilog."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 30",
    "question": "Thiết kế thanh ghi dịch vào nối tiếp ra nối tiếp: r_next cập nhật từ r_reg; Di là ngõ vào nối tiếp. Mô tả nào đúng?",
    "options": [
      {
        "id": "A",
        "text": "r_next = (r_reg >> 1) | Di;",
        "correct": false
      },
      {
        "id": "B",
        "text": "r_next = (r_reg >> 1) + Di;",
        "correct": false
      },
      {
        "id": "C",
        "text": "r_next = {Di, r_reg[7:1]};",
        "correct": true
      },
      {
        "id": "D",
        "text": "r_next = (Di, r_reg[6:0]);",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "exam01_30",
    "aiNote": "Đáp án C đúng vì {Di, r_reg[7:1]} đưa bit nối tiếp Di vào bit cao nhất.\nCác bit cũ r_reg[7:1] được dịch sang phải một vị trí.\nDùng | hoặc + với Di không tạo đúng cấu trúc thanh ghi dịch."
  },
  {
    "source": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "source_file": "1.pdf",
    "page": null,
    "chapter": "ĐỀ THI CUỐI KỲ 32 CÂU/60 PHÚT - Đề bổ sung",
    "section": "Đề bổ sung",
    "question_no": "Câu 31",
    "question": "Thiết kế mạch đếm lên 2 bit với reset đồng bộ. Mô tả nào đúng?",
    "options": [
      {
        "id": "A",
        "text": "always @(posedge clk or posedge reset)\n  if (reset) q <= 0;\n  else q <= q + 1;",
        "correct": false
      },
      {
        "id": "B",
        "text": "always @(posedge clk, reset)\n  if (reset) q <= 0;\n  else q <= q + 1;",
        "correct": false
      },
      {
        "id": "C",
        "text": "always (posedge clk, posedge reset)\n  if (reset) q <= 0;\n  else q <= q + 1;",
        "correct": false
      },
      {
        "id": "D",
        "text": "always (posedge clk, reset)\n  if (reset) q <= 0;\n  else q <= q + 1;",
        "correct": false
      },
      {
        "id": "E",
        "text": "Không có đáp án đúng hoàn toàn",
        "correct": true
      }
    ],
    "answers": [
      "E"
    ],
    "type": "single",
    "id": "exam01_31",
    "aiNote": "Reset đồng bộ nghĩa là reset chỉ được kiểm tra tại cạnh clock, nên danh sách nhạy chỉ nên có posedge clk.\nMô tả đúng phải là: always @(posedge clk) if (reset) q <= 0; else q <= q + 1;\nA và B đưa reset vào sensitivity list nên là reset bất đồng bộ/không đúng chuẩn reset đồng bộ.\nC và D còn sai cú pháp vì thiếu ký hiệu @ sau always.\nVì vậy không có lựa chọn nào đúng hoàn toàn."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 1",
    "question": "Trạng thái ngõ ra ba trạng thái (tri-state) là gì?",
    "options": [
      {
        "id": "A",
        "text": "Trạng thái thứ ba trong hệ logic tam phân",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "C",
        "text": "Khi đường ngõ ra được cách ly điện",
        "correct": true
      },
      {
        "id": "D",
        "text": "Khi điện áp nằm giữa logic 0 và logic 1",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online1_1",
    "aiNote": "Ngõ ra tri-state có 3 trạng thái: 0, 1 và Z.\nTrạng thái thứ ba Z là trạng thái tổng trở cao, nghĩa là ngõ ra gần như bị cách ly điện khỏi mạch.\nKhi đó tín hiệu không kéo lên 1 cũng không kéo xuống 0.\nA sai vì đây không phải hệ logic tam phân; D sai vì không phải mức điện áp nằm giữa 0 và 1."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 2",
    "question": "Số âm nhỏ nhất biểu diễn được bằng bù 2 8-bit là bao nhiêu?",
    "options": [
      {
        "id": "A",
        "text": "-255",
        "correct": false
      },
      {
        "id": "B",
        "text": "-256",
        "correct": false
      },
      {
        "id": "C",
        "text": "-128",
        "correct": true
      },
      {
        "id": "D",
        "text": "-127",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online1_2",
    "aiNote": "Với số bù 2 8-bit, miền giá trị biểu diễn được là từ -2⁷ đến 2⁷ - 1.\nTức là từ -128 đến +127.\nDo đó số âm nhỏ nhất biểu diễn được là -128.\nA và B sai vì vượt ngoài phạm vi 8-bit bù 2, D sai vì chưa phải giá trị âm nhỏ nhất."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 3",
    "question": "System task $stop dùng để làm gì?",
    "options": [
      {
        "id": "A",
        "text": "Kết thúc mô phỏng",
        "correct": false
      },
      {
        "id": "B",
        "text": "Tạm dừng mô phỏng",
        "correct": true
      },
      {
        "id": "C",
        "text": "Thoát trình mô phỏng",
        "correct": false
      },
      {
        "id": "D",
        "text": "Không có đáp án nào",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online1_3",
    "aiNote": "Đáp án B đúng vì $stop dùng để tạm dừng mô phỏng.\nKhi gặp $stop, simulator dừng lại để người dùng kiểm tra trạng thái hoặc tiếp tục chạy.\nMuốn kết thúc mô phỏng thường dùng $finish."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 4",
    "question": "Trong mạch tổ hợp thuần, có cần đưa tất cả input vào sensitivity list không?",
    "options": [
      {
        "id": "A",
        "text": "Phụ thuộc phong cách viết code",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không",
        "correct": false
      },
      {
        "id": "C",
        "text": "Có",
        "correct": true
      },
      {
        "id": "D",
        "text": "Không có đáp án nào",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online1_4",
    "aiNote": "Đáp án C đúng vì: Có.\nMạch tổ hợp thuần phải nhạy với mọi tín hiệu đầu vào ảnh hưởng đến ngõ ra.\nNếu thiếu input trong sensitivity list, mô phỏng có thể không cập nhật đúng và dễ suy ra latch ngoài ý muốn."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 5",
    "question": "Số lớn nhất biểu diễn được bằng nhị phân không dấu 8-bit là bao nhiêu?",
    "options": [
      {
        "id": "A",
        "text": "128",
        "correct": false
      },
      {
        "id": "B",
        "text": "255",
        "correct": true
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
      "B"
    ],
    "type": "single",
    "id": "online1_5",
    "aiNote": "Đáp án B đúng vì số nhị phân không dấu 8 bit có 2^8 giá trị khác nhau.\nDải giá trị là từ 0 đến 2^8 - 1.\nVì vậy giá trị lớn nhất là 255, không phải 256 vì 256 cần 9 bit để biểu diễn."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 6",
    "question": "Ưu điểm của thiết kế FPGA so với ASIC là gì?",
    "options": [
      {
        "id": "A",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "B",
        "text": "Chi phí thiết kế thấp hơn",
        "correct": true
      },
      {
        "id": "C",
        "text": "Linh hoạt hơn",
        "correct": true
      },
      {
        "id": "D",
        "text": "Nhanh hơn",
        "correct": false
      }
    ],
    "answers": [
      "B",
      "C"
    ],
    "type": "multi",
    "id": "online1_6",
    "aiNote": "Các đáp án B, C đúng vì: B: Chi phí thiết kế thấp hơn; C: Linh hoạt hơn.\nFPGA có chi phí phát triển ban đầu thấp và có thể cấu hình lại nên linh hoạt hơn ASIC.\nTuy nhiên FPGA thường không nhanh và tối ưu bằng ASIC khi sản xuất số lượng lớn."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 7",
    "question": "Ngõ ra cổng NOR 4 ngõ vào bằng 1 khi nào?",
    "options": [
      {
        "id": "A",
        "text": "Tất cả input bằng 0",
        "correct": true
      },
      {
        "id": "B",
        "text": "Ít nhất một input bằng 0",
        "correct": false
      },
      {
        "id": "C",
        "text": "Ít nhất một input bằng 1",
        "correct": false
      },
      {
        "id": "D",
        "text": "Tất cả input bằng 1",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "online1_7",
    "aiNote": "Cổng NOR là cổng OR có đảo ngõ ra.\nCổng OR chỉ bằng 0 khi tất cả input đều bằng 0.\nSau khi đảo, NOR sẽ cho ngõ ra bằng 1 trong trường hợp đó.\nNếu chỉ cần một input bằng 1 thì OR = 1, nên NOR = 0."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 8",
    "question": "Câu lệnh assign f = (a|b)&(c|d); biểu thị điều gì?",
    "options": [
      {
        "id": "A",
        "text": "Mô tả cấu trúc hàm f",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mô tả hành vi/dòng dữ liệu của hàm f",
        "correct": true
      },
      {
        "id": "C",
        "text": "Netlist mức cổng gồm hai OR và một AND",
        "correct": false
      },
      {
        "id": "D",
        "text": "Không có đáp án nào",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online1_8",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "assign f = (a | b) & (c | d);"
      }
    ],
    "aiNote": "Câu lệnh assign là gán liên tục, thường dùng để mô tả mạch tổ hợp theo kiểu dataflow.\nBiểu thức (a | b) & (c | d) cho biết dữ liệu từ các tín hiệu a, b, c, d được xử lý để tạo ra f."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 9",
    "question": "Ngõ ra cổng AND 4 ngõ vào bằng 1 khi nào?",
    "options": [
      {
        "id": "A",
        "text": "Ít nhất một input bằng 1",
        "correct": false
      },
      {
        "id": "B",
        "text": "Ít nhất một input bằng 0",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tất cả input bằng 0",
        "correct": false
      },
      {
        "id": "D",
        "text": "Tất cả input bằng 1",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "online1_9",
    "aiNote": "Đáp án D đúng vì: Tất cả input bằng 1.\nPrimitive cổng trong Verilog có dạng and(output, input1, input2, ..).\nCổng AND chỉ cho ngõ ra bằng 1 khi tất cả ngõ vào đều bằng 1."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 10",
    "question": "Nếu A=4'b001x và B=4'b1011, kết quả A+B là gì?",
    "options": [
      {
        "id": "A",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "B",
        "text": "1100",
        "correct": false
      },
      {
        "id": "C",
        "text": "110x",
        "correct": false
      },
      {
        "id": "D",
        "text": "xxxx",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "online1_10",
    "aiNote": "Trong Verilog, phép cộng + là phép toán số học.\nNếu trong toán hạng có bit x thì giá trị toán hạng không xác định hoàn toàn.\nVới A = 4'b001x, không biết bit cuối là 0 hay 1 nên kết quả cộng với B = 4'b1011 không xác định chắc chắn.\nDo đó phép cộng trả về toàn bộ kết quả dạng xxxx."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 11",
    "question": "Mức logic nào không được Verilog hỗ trợ?",
    "options": [
      {
        "id": "A",
        "text": "X",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": false
      },
      {
        "id": "C",
        "text": "U",
        "correct": true
      },
      {
        "id": "D",
        "text": "Không có đáp án nào",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online1_11",
    "aiNote": "Trong Verilog, các mức logic cơ bản được hỗ trợ là 0, 1, X, Z.\nX biểu diễn giá trị không xác định, còn Z biểu diễn trạng thái tổng trở cao.\nU không phải là mức logic chuẩn trong Verilog.\nU thường gặp trong VHDL, dùng để chỉ giá trị chưa khởi tạo."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 12",
    "question": "Nếu A=4'b011 và B=4'b0011, kết quả A**B là gì?",
    "options": [
      {
        "id": "A",
        "text": "27",
        "correct": true
      },
      {
        "id": "B",
        "text": "9",
        "correct": false
      },
      {
        "id": "C",
        "text": "6",
        "correct": false
      },
      {
        "id": "D",
        "text": "Biểu thức không hợp lệ",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "online1_12",
    "aiNote": "Trong Verilog, toán tử ** là toán tử lũy thừa.\nA = 4'b011 được hiểu là giá trị nhị phân 0011, tức là 3.\nB = 4'b0011 cũng có giá trị là 3.\nVì vậy A ** B = 3 ** 3 = 27."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 13",
    "question": "Trong đoạn code sau, statement 2 thực thi tại thời điểm nào?",
    "options": [
      {
        "id": "A",
        "text": "15",
        "correct": false
      },
      {
        "id": "B",
        "text": "5",
        "correct": false
      },
      {
        "id": "C",
        "text": "Thời điểm hiện tại",
        "correct": false
      },
      {
        "id": "D",
        "text": "20",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "online1_13",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "initial begin\n  #5  x = 1'b0;\n  #15 y = 1'b1;\nend"
      }
    ],
    "aiNote": "Đáp án D đúng vì các delay trong một initial block là delay tương đối nối tiếp nhau.\nCâu lệnh 1 chạy sau #5, rồi câu lệnh 2 chạy thêm #15 nữa.\nVì vậy thời điểm của statement 2 là 5 + 15 = 20."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 14",
    "question": "Thiết kế nào có thời gian quay vòng ngắn nhất?",
    "options": [
      {
        "id": "A",
        "text": "Thiết kế FPGA",
        "correct": true
      },
      {
        "id": "B",
        "text": "Thiết kế standard cell",
        "correct": false
      },
      {
        "id": "C",
        "text": "Thiết kế full custom",
        "correct": false
      },
      {
        "id": "D",
        "text": "Thiết kế gate array",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "online1_14",
    "aiNote": "Đáp án A đúng vì FPGA có thể nạp cấu hình trực tiếp sau khi tổng hợp và place-route.\nKhông cần chế tạo mask/chip riêng như ASIC, standard cell hay full-custom.\nDo đó thời gian quay vòng thiết kế và kiểm thử thường ngắn nhất."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 15",
    "question": "Giá trị mặc định của reg là gì?",
    "options": [
      {
        "id": "A",
        "text": "Z",
        "correct": false
      },
      {
        "id": "B",
        "text": "U",
        "correct": false
      },
      {
        "id": "C",
        "text": "X",
        "correct": true
      },
      {
        "id": "D",
        "text": "0",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online1_15",
    "aiNote": "Đáp án C đúng vì: X.\nTrong mô phỏng Verilog, biến reg chưa khởi tạo có giá trị X.\nX biểu thị trạng thái chưa xác định, không phải 0, 1 hay Z."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 16",
    "question": "Trong Verilog, 'h1234 là gì?",
    "options": [
      {
        "id": "A",
        "text": "Số hex 32 bit",
        "correct": true
      },
      {
        "id": "B",
        "text": "Số hex 4 bit",
        "correct": false
      },
      {
        "id": "C",
        "text": "Ký hiệu không hợp lệ",
        "correct": false
      },
      {
        "id": "D",
        "text": "Số hex 16 bit",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "online1_16",
    "aiNote": "Đáp án A đúng vì: Số hex 32 bit.\nHằng hex không ghi độ rộng được xem là hằng không định cỡ.\nTheo phạm vi đề, hằng không định cỡ thường được lấy theo độ rộng mặc định 32 bit."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 17",
    "question": "Nếu một net không có driver, nó nhận giá trị nào?",
    "options": [
      {
        "id": "A",
        "text": "X",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": true
      },
      {
        "id": "C",
        "text": "U",
        "correct": false
      },
      {
        "id": "D",
        "text": "0",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online1_17",
    "aiNote": "Đáp án B đúng vì: Z.\nNet không có nguồn điều khiển sẽ ở trạng thái trở kháng cao Z.\nZ biểu thị đường dây bị thả nổi, không bị kéo lên 1 hoặc kéo xuống 0."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 18",
    "question": "Khai báo timescale nào không đúng?",
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
    "id": "online1_18",
    "aiNote": "Trong Verilog, timescale có dạng: `timescale <time_unit>/<time_precision>.\nCác giá trị hợp lệ thường là 1, 10, 100 nhân với đơn vị như s, ms, us, ns, ps, fs.\n110ps không phải giá trị chuẩn hợp lệ cho time precision.\nCác lựa chọn B, C, D đều dùng giá trị hợp lệ như 10ns, 1ps, 100ps."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 19",
    "question": "Với A=8'b00111001 trong code, giá trị {A[5:3],3{B}} là gì?",
    "options": [
      {
        "id": "A",
        "text": "6'b111000",
        "correct": true
      },
      {
        "id": "B",
        "text": "6'b011000",
        "correct": false
      },
      {
        "id": "C",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "D",
        "text": "6'b111111",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "online1_19",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "wire [7:0] A;\nwire B;\nassign B = ~|A;"
      }
    ],
    "aiNote": "Với A = 8'b00111001, lấy A[5:3] ta được 3 bit là 111.\nB = ~|A là phép NOR rút gọn: vì trong A có bit 1 nên |A = 1, do đó B = 0.\n3{B} nghĩa là lặp B 3 lần, nên được 000.\nVì vậy {A[5:3], 3{B}} = {111, 000} = 6'b111000."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 20",
    "question": "Synthesis nghĩa là gì?",
    "options": [
      {
        "id": "A",
        "text": "Kiểm tra hoạt động đúng của mạch",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tạo mạch từ đặc tả đã cho",
        "correct": true
      },
      {
        "id": "D",
        "text": "Kiểm tra đặc tả đúng không",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online1_20",
    "aiNote": "Đáp án C đúng vì: Tạo mạch từ đặc tả đã cho.\nSynthesis là quá trình chuyển đặc tả/mô tả HDL thành cấu trúc mạch phần cứng.\nNó khác với mô phỏng, vì mô phỏng chỉ kiểm tra hành vi còn tổng hợp tạo netlist logic."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 21",
    "question": "Với A=5'b10011, B=5'b01110 và C=^A, giá trị {A[3:1],2{C},B[2:0]} là gì?",
    "options": [
      {
        "id": "A",
        "text": "00100110",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "C",
        "text": "01111110",
        "correct": false
      },
      {
        "id": "D",
        "text": "00111110",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "online1_21",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "wire [5:0] A, B;\nwire C;\nassign C = ^A;"
      }
    ],
    "aiNote": "Đáp án D đúng vì ^A là reduction XOR của A=10011, có 3 bit 1 nên C=1.\nA[3:1] = 001, {2{C}} = 11 và B[2:0] = 110.\nNối lại được 00111110."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 1(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 1 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 22",
    "question": "Nếu A=4'b1xxx và B=4'b1xxx, biểu thức A == ~B trả về gì?",
    "options": [
      {
        "id": "A",
        "text": "1",
        "correct": false
      },
      {
        "id": "B",
        "text": "X",
        "correct": false
      },
      {
        "id": "C",
        "text": "0",
        "correct": true
      },
      {
        "id": "D",
        "text": "Z",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online1_22",
    "aiNote": "Đáp án C đúng vì ~B với B=1xxx sẽ có bit MSB bằng 0.\nA có bit MSB bằng 1, nên A == ~B chắc chắn sai ngay ở bit cao nhất.\nVì có một bit xác định khác nhau nên kết quả so sánh là 0, không phải X."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 1",
    "question": "Nếu A=4'b011 và B=4'b0011, kết quả A**B là gì?",
    "options": [
      {
        "id": "A",
        "text": "9",
        "correct": false
      },
      {
        "id": "B",
        "text": "Biểu thức không hợp lệ",
        "correct": false
      },
      {
        "id": "C",
        "text": "6",
        "correct": false
      },
      {
        "id": "D",
        "text": "27",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "online2_1",
    "aiNote": "Đáp án D đúng vì toán tử ** là lũy thừa.\nA=4'b011 tương đương 3 và B=4'b0011 cũng tương đương 3.\nDo đó A**B = 3^3 = 27."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 2",
    "question": "Ban đầu a=1, b=2. Sau cạnh lên clock với blocking assignment, a và b là gì?",
    "options": [
      {
        "id": "A",
        "text": "a=2, b=1",
        "correct": false
      },
      {
        "id": "B",
        "text": "a=1, b=2",
        "correct": false
      },
      {
        "id": "C",
        "text": "Cả a và b có cùng giá trị 0 hoặc 1",
        "correct": false
      },
      {
        "id": "D",
        "text": "Không có đáp án nào",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "online2_2",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "always @(posedge clock) begin\n  a = b;\n  b = a;\nend"
      }
    ],
    "aiNote": "Với blocking assignment =, các lệnh chạy tuần tự từ trên xuống.\nBan đầu a = 1, b = 2; lệnh a = b; làm a nhận giá trị 2.\nNgay sau đó, lệnh b = a; lấy giá trị mới của a, nên b cũng bằng 2.\nKết quả cuối là a = 2, b = 2, nhưng không có lựa chọn nào ghi vậy."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 3",
    "question": "Trong Verilog, 'h1234 là gì?",
    "options": [
      {
        "id": "A",
        "text": "Số hex 16 bit",
        "correct": false
      },
      {
        "id": "B",
        "text": "Số hex 32 bit",
        "correct": true
      },
      {
        "id": "C",
        "text": "Ký hiệu không hợp lệ",
        "correct": false
      },
      {
        "id": "D",
        "text": "Số hex 4 bit",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online2_3",
    "aiNote": "Đáp án B đúng vì 'h1234 là hằng thập lục phân không khai báo độ rộng.\nTrong Verilog, hằng số không khai báo size thường được xử lý theo độ rộng mặc định tối thiểu/word, thường là 32 bit theo đề.\nMỗi chữ số hex có 4 bit, nhưng do không ghi size nên đề chọn 32 bit."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 4",
    "question": "Đoạn code tạo ra phần tử nào?",
    "options": [
      {
        "id": "A",
        "text": "Thanh ghi PIPO 4 bit",
        "correct": false
      },
      {
        "id": "B",
        "text": "Thanh ghi dịch 4 bit",
        "correct": false
      },
      {
        "id": "C",
        "text": "Bốn D Flip-Flop đều nhận dữ liệu din",
        "correct": true
      },
      {
        "id": "D",
        "text": "Không có đáp án nào",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online2_4",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "always @(posedge clock) begin\n  data0 <= din;\n  data1 <= din;\n  data2 <= din;\n  data3 <= din;\nend"
      }
    ],
    "aiNote": "Đáp án C đúng vì cả data0, data1, data2, data3 đều nhận trực tiếp din tại cùng cạnh lên clock.\nKhông có chuỗi data1 <= data0, data2 <= data1 nên đây không phải thanh ghi dịch.\nKết quả là bốn D Flip-Flop song song cùng lấy mẫu một tín hiệu din."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 5",
    "question": "Với A=5'b10011, B=5'b01110 và C=^A, giá trị {A[3:1],2{C},B[2:0]} là gì?",
    "options": [
      {
        "id": "A",
        "text": "00111110",
        "correct": true
      },
      {
        "id": "B",
        "text": "00100110",
        "correct": false
      },
      {
        "id": "C",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "D",
        "text": "01111110",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "online2_5",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "wire [5:0] A, B;\nwire C;\nassign C = ^A;"
      }
    ],
    "aiNote": "Đáp án A đúng vì ^A là reduction XOR của A=10011, có 3 bit 1 nên C=1.\nA[3:1] = 001, {2{C}} = 11 và B[2:0] = 110.\nNối lại được 00111110."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 6",
    "question": "Trong đoạn code, statement 2 thực thi ở thời điểm nào?",
    "options": [
      {
        "id": "A",
        "text": "5",
        "correct": false
      },
      {
        "id": "B",
        "text": "20",
        "correct": true
      },
      {
        "id": "C",
        "text": "15",
        "correct": false
      },
      {
        "id": "D",
        "text": "Thời điểm hiện tại",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online2_6",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "initial begin\n  #5  x = 1'b0;\n  #15 y = 1'b1;\nend"
      }
    ],
    "aiNote": "Trong Verilog, các lệnh delay # trong cùng khối initial được tính nối tiếp nhau.\nLệnh 1 #5 x = 1'b0; thực thi tại thời điểm 5.\nSau đó mới bắt đầu tính tiếp #15 cho statement 2.\nVì vậy statement 2 y = 1'b1 thực thi tại thời điểm 5 + 15 = 20."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 7",
    "question": "Phát biểu nào đúng với đoạn code nhiều khối initial?",
    "options": [
      {
        "id": "A",
        "text": "Luôn hiển thị 15 là giá trị x",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không thể xác định số lần in x",
        "correct": false
      },
      {
        "id": "C",
        "text": "In giá trị x 13 lần",
        "correct": false
      },
      {
        "id": "D",
        "text": "In giá trị x 15 lần",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "online2_7",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "integer x, y;\n\ninitial begin\n  x = 15;\n  y = 10;\nend\n\ninitial\n  repeat (x) $display(\"x=%d\", x);\n\ninitial\n  while (y < 12) begin\n    y = y + 1;\n    x = x - 1;\n  end"
      }
    ],
    "aiNote": "Đáp án D đúng theo cách hiểu repeat(x) lấy số lần lặp là giá trị x lúc bắt đầu, tức 15.\nBa khối initial chạy song song, nhưng repeat đã xác định số vòng lặp theo x ban đầu.\nVì vậy lệnh $display được thực hiện 15 lần; giá trị in ra có thể phụ thuộc thứ tự mô phỏng."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 8",
    "question": "Các phát biểu nào đúng?",
    "options": [
      {
        "id": "A",
        "text": "Chỉ số biến ở RHS của assign có thể tạo MUX, còn ở LHS có thể tạo decoder",
        "correct": true
      },
      {
        "id": "B",
        "text": "assign có thể dùng để hiện thực cả mạch tổ hợp và tuần tự",
        "correct": true
      },
      {
        "id": "C",
        "text": "Toán tử điều kiện trong assign luôn tạo MUX",
        "correct": false
      },
      {
        "id": "D",
        "text": "Tất cả",
        "correct": false
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "type": "multi",
    "id": "online2_8",
    "aiNote": "Đáp án A và B đúng theo phạm vi đề.\nChỉ số biến ở RHS có thể được tổng hợp thành MUX, còn chọn vị trí ở LHS có thể giống mạch giải mã/ghi chọn.\nassign là gán liên tục, thường dùng cho mạch tổ hợp và cũng có thể mô hình hóa latch nếu có hồi tiếp.\nC sai vì toán tử điều kiện không phải lúc nào cũng nhất thiết tạo MUX vật lý riêng."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 9",
    "question": "Đoạn code sau hiện thực mạch gì?",
    "options": [
      {
        "id": "A",
        "text": "Mạch so sánh 2 bit",
        "correct": false
      },
      {
        "id": "B",
        "text": "Mạch phân biệt 2 bit",
        "correct": false
      },
      {
        "id": "C",
        "text": "Mạch chốt 1 bit",
        "correct": true
      },
      {
        "id": "D",
        "text": "Hai cổng NOR nối tầng",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online2_9",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "assign d = ~(c | b);\nassign c = ~(a | d);"
      }
    ],
    "aiNote": "Đáp án C đúng vì hai cổng NOR được mắc hồi tiếp chéo với nhau.\nCấu trúc hồi tiếp d = ~(c|b) và c = ~(a|d) tạo phần tử nhớ 1 bit kiểu latch SR.\nKhông phải mạch so sánh vì có vòng hồi tiếp lưu trạng thái."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 10",
    "question": "Mục đích của khối initial trong testbench Verilog là gì?",
    "options": [
      {
        "id": "A",
        "text": "Nhiều initial chạy tuần tự",
        "correct": false
      },
      {
        "id": "B",
        "text": "Khối procedural chỉ thực thi một lần",
        "correct": true
      },
      {
        "id": "C",
        "text": "Dùng cho tổng hợp",
        "correct": false
      },
      {
        "id": "D",
        "text": "always chạy thì initial khởi tạo lại",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online2_10",
    "aiNote": "Đáp án B đúng vì: Khối procedural chỉ thực thi một lần.\ninitial là khối thủ tục chạy một lần khi mô phỏng bắt đầu.\nNó thường dùng trong testbench để khởi tạo tín hiệu, tạo kích thích hoặc kết thúc mô phỏng."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 11",
    "question": "Khai báo timescale nào không đúng?",
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
        "text": "100ns/100ps",
        "correct": false
      },
      {
        "id": "D",
        "text": "1ns/1ps",
        "correct": false
      }
    ],
    "answers": [
      "A"
    ],
    "type": "single",
    "id": "online2_11",
    "aiNote": "Trong Verilog, khai báo timescale có dạng: `timescale <time_unit>/<time_precision>.\nGiá trị thời gian hợp lệ thường chỉ được dùng theo các mức 1, 10, 100 với đơn vị s, ms, us, ns, ps, fs.\n110ps không phải giá trị chuẩn hợp lệ cho phần time precision.\nCác đáp án B, C, D đều dùng giá trị hợp lệ như 10ns, 100ns, 1ns, 1ps, 100ps."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 12",
    "question": "Synthesis nghĩa là gì?",
    "options": [
      {
        "id": "A",
        "text": "Kiểm tra đặc tả",
        "correct": false
      },
      {
        "id": "B",
        "text": "Tạo mạch từ đặc tả",
        "correct": true
      },
      {
        "id": "C",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "D",
        "text": "Kiểm tra hoạt động mạch",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online2_12",
    "aiNote": "Đáp án B đúng vì: Tạo mạch từ đặc tả.\nSynthesis là quá trình chuyển đặc tả/mô tả HDL thành cấu trúc mạch phần cứng.\nNó khác với mô phỏng, vì mô phỏng chỉ kiểm tra hành vi còn tổng hợp tạo netlist logic."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 13",
    "question": "Nếu A, B, C và D lần lượt là các biến reg, reg, integer và wire, mỗi biến có kích thước [7:0], những phát biểu nào được phép trong procedural block?",
    "options": [
      {
        "id": "A",
        "text": "D = C + 1;",
        "correct": false
      },
      {
        "id": "B",
        "text": "D = A + B;",
        "correct": false
      },
      {
        "id": "C",
        "text": "B[3:0] = D[4:1] + 1;",
        "correct": true
      },
      {
        "id": "D",
        "text": "C = A + D;",
        "correct": true
      }
    ],
    "answers": [
      "C",
      "D"
    ],
    "type": "multi",
    "id": "online2_13",
    "aiNote": "Đáp án C và D đúng vì trong procedural block chỉ được gán trực tiếp cho các biến procedural như reg/integer/logic.\nC đúng vì vế trái là B[3:0], mà B là biến kiểu reg nên có thể nhận gán trong always/initial.\nD đúng vì vế trái là C, mà C là integer nên cũng có thể nhận gán trong procedural block; D là wire nhưng chỉ được đọc ở vế phải.\nA và B sai vì đều gán trực tiếp vào D; nếu D là wire thì không được gán trong procedural block, mà phải dùng assign hoặc nối qua cổng module."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 14",
    "question": "Cấu trúc #5 biểu thị điều gì trong mô phỏng?",
    "options": [
      {
        "id": "A",
        "text": "Chạy câu lệnh tiếp theo tại thời điểm 5",
        "correct": false
      },
      {
        "id": "B",
        "text": "Trễ 5 đơn vị thời gian trước câu lệnh tiếp theo",
        "correct": true
      },
      {
        "id": "C",
        "text": "Tạm dừng lệnh sau thời điểm 5",
        "correct": false
      },
      {
        "id": "D",
        "text": "Đơn vị delay là 5 ns",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online2_14",
    "aiNote": "Đáp án B đúng vì: Trễ 5 đơn vị thời gian trước câu lệnh tiếp theo.\n#5 là delay 5 đơn vị thời gian trước khi thực hiện câu lệnh kế tiếp.\nĐây là thời gian trễ tương đối trong mô phỏng, không nhất thiết luôn là 5 ns."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 15",
    "question": "Reset bất đồng bộ active low, đếm theo cạnh lên clk, dùng biểu thức sự kiện nào?",
    "options": [
      {
        "id": "A",
        "text": "always @(posedge clk)",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "C",
        "text": "always @(negedge clear)",
        "correct": false
      },
      {
        "id": "D",
        "text": "always @(posedge clk or negedge clear)",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "online2_15",
    "aiNote": "Đáp án D đúng vì: always @(posedge clk or negedge clear).\nposedge clk biểu diễn sự kiện cạnh lên của clock.\nKhối always dùng sự kiện này thường mô tả Flip-Flop hoặc mạch tuần tự đồng bộ."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 16",
    "question": "Phát biểu nào đúng về vòng lặp repeat?",
    "options": [
      {
        "id": "A",
        "text": "Lặp vô hạn",
        "correct": false
      },
      {
        "id": "B",
        "text": "Lặp chính xác hai lần",
        "correct": false
      },
      {
        "id": "C",
        "text": "Lặp đến khi điều kiện đúng",
        "correct": false
      },
      {
        "id": "D",
        "text": "Không có đáp án nào",
        "correct": true
      }
    ],
    "answers": [
      "D"
    ],
    "type": "single",
    "id": "online2_16",
    "aiNote": "Đáp án D đúng vì: Không có đáp án nào.\nrepeat(n) lặp một khối lệnh đúng n lần, với n là biểu thức số lần lặp.\nNó không phải vòng lặp vô hạn và cũng không lặp đến khi điều kiện đúng như while."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 17",
    "question": "Trong mạch tổ hợp thuần, có cần liệt kê tất cả input trong sensitivity list không?",
    "options": [
      {
        "id": "A",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "B",
        "text": "Có",
        "correct": true
      },
      {
        "id": "C",
        "text": "Không",
        "correct": false
      },
      {
        "id": "D",
        "text": "Phụ thuộc phong cách",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online2_17",
    "aiNote": "Đáp án B đúng vì: Có.\nMạch tổ hợp thuần phải nhạy với mọi tín hiệu đầu vào ảnh hưởng đến ngõ ra.\nNếu thiếu input trong sensitivity list, mô phỏng có thể không cập nhật đúng và dễ suy ra latch ngoài ý muốn."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 18",
    "question": "Với đoạn code sau, giá trị cuối của d là bao nhiêu?",
    "options": [
      {
        "id": "A",
        "text": "53",
        "correct": false
      },
      {
        "id": "B",
        "text": "40",
        "correct": false
      },
      {
        "id": "C",
        "text": "51",
        "correct": true
      },
      {
        "id": "D",
        "text": "58",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online2_18",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "integer a,b,c,d;\ninitial begin\n  a=25; b=12; c=5; d=17;\n  a=b+c;\n  b=a-15;\n  c=a+d;\n  d=c+d;\nend"
      }
    ],
    "aiNote": "Đáp án C đúng theo tính toán tuần tự trong initial block.\nBan đầu a=25, b=12, c=5, d=17; sau đó a=b+c=17, b=a-15=2.\nTiếp theo c=a+d=34 và d=c+d=34+17=51."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 19",
    "question": "Phát biểu nào đúng với module sau?",
    "options": [
      {
        "id": "A",
        "text": "Công cụ tổng hợp báo lỗi",
        "correct": false
      },
      {
        "id": "B",
        "text": "Tạo mạch AND",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tạo mạch XOR",
        "correct": true
      },
      {
        "id": "D",
        "text": "Tạo latch cho a",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online2_19",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "module mydesign(a,b);\n  input [1:0] b;\n  output reg a;\n  always @(b) begin\n    if (b==2'b00) a=1'b0;\n    else if (b==2'b11) a=1'b0;\n    else a=1'b1;\n  end\nendmodule"
      }
    ],
    "aiNote": "Module xét 2 bit của b: nếu b = 00 hoặc b = 11 thì a = 0.\nNếu b = 01 hoặc b = 10 thì a = 1.\nĐây chính là bảng chân trị của cổng XOR giữa b[1] và b[0].\nKhông tạo latch vì mọi nhánh if/else đều gán giá trị cho a."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 20",
    "question": "Nếu một net không có driver, nó nhận giá trị nào?",
    "options": [
      {
        "id": "A",
        "text": "0",
        "correct": false
      },
      {
        "id": "B",
        "text": "Z",
        "correct": true
      },
      {
        "id": "C",
        "text": "U",
        "correct": false
      },
      {
        "id": "D",
        "text": "X",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online2_20",
    "aiNote": "Trong Verilog, net như wire cần có nguồn điều khiển, gọi là driver.\nNếu một net không có driver nào điều khiển, nó sẽ ở trạng thái high impedance, ký hiệu là Z.\nZ nghĩa là đường dây bị thả nổi, không bị kéo lên 1 hay kéo xuống 0.\nX là không xác định, còn U không phải giá trị logic chuẩn của Verilog."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 21",
    "question": "Phát biểu nào là sai đối với module Verilog?",
    "options": [
      {
        "id": "A",
        "text": "Khởi tạo X 4 lần tạo 4 bản sao",
        "correct": false
      },
      {
        "id": "B",
        "text": "Gọi module nhiều lần nhưng chỉ một bản sao phần cứng được đưa vào sau tổng hợp",
        "correct": true
      },
      {
        "id": "C",
        "text": "Module không thể chứa định nghĩa module khác",
        "correct": true
      },
      {
        "id": "D",
        "text": "Không thể khởi tạo nhiều hơn một module",
        "correct": false
      }
    ],
    "answers": [
      "B",
      "C"
    ],
    "type": "multi",
    "id": "online2_21",
    "aiNote": "Đáp án B và D là các phát biểu sai.\nTrong Verilog, mỗi lần instantiate module sẽ tạo một bản sao phần cứng riêng sau tổng hợp.\nMột module cũng có thể được khởi tạo nhiều lần; vì vậy nói chỉ có một bản sao hoặc không thể khởi tạo nhiều module là sai."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 22",
    "question": "Giá trị mặc định của reg là gì?",
    "options": [
      {
        "id": "A",
        "text": "Z",
        "correct": false
      },
      {
        "id": "B",
        "text": "X",
        "correct": true
      },
      {
        "id": "C",
        "text": "0",
        "correct": false
      },
      {
        "id": "D",
        "text": "U",
        "correct": false
      }
    ],
    "answers": [
      "B"
    ],
    "type": "single",
    "id": "online2_22",
    "aiNote": "Trong Verilog, biến kiểu reg nếu chưa được gán giá trị ban đầu thì mặc định là X.\nX biểu diễn trạng thái không xác định.\nTrạng thái này thường xuất hiện ở đầu mô phỏng nếu chưa có initial, reset hoặc phép gán.\nZ là tổng trở cao, 0 chỉ có khi được gán rõ ràng, còn U không phải mức logic chuẩn của Verilog."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 23",
    "question": "Khi module sau tổng hợp, phát biểu nào đúng?",
    "options": [
      {
        "id": "A",
        "text": "Tạo mạch tuần tự có phần tử lưu trữ cho result",
        "correct": false
      },
      {
        "id": "B",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "C",
        "text": "Tạo wire cho result",
        "correct": true
      },
      {
        "id": "D",
        "text": "Tạo mạch tổ hợp",
        "correct": true
      }
    ],
    "answers": [
      "C",
      "D"
    ],
    "type": "multi",
    "id": "online2_23",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "module guess(data,cont,result);\n  input [7:0] data; input [1:0] cont; output reg result;\n  always @(data) begin\n    if (cont==2'b00) result=data;\n    else result=~data;\n  end\nendmodule"
      }
    ],
    "aiNote": "Đáp án C và D đúng vì output khai báo reg chỉ là biến nhận gán trong always, không bắt buộc tạo thanh ghi phần cứng.\nLogic if/else không dùng cạnh clock nên về bản chất là mạch tổ hợp.\nTuy nhiên sensitivity list thiếu cont và result chỉ rộng 1 bit trong khi data rộng 8 bit.\nCần kiểm tra lại đáp án."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 24",
    "question": "Phát biểu nào đúng với khối code sau?",
    "options": [
      {
        "id": "A",
        "text": "clk2 không bao giờ đổi khỏi trạng thái ban đầu",
        "correct": false
      },
      {
        "id": "B",
        "text": "clk1 đổi vô hạn cho đến thời điểm 75",
        "correct": false
      },
      {
        "id": "C",
        "text": "Khối sẽ không bao giờ kết thúc",
        "correct": true
      },
      {
        "id": "D",
        "text": "clk2 đổi 50 lần",
        "correct": false
      }
    ],
    "answers": [
      "C"
    ],
    "type": "single",
    "id": "online2_24",
    "codeBlocks": [
      {
        "title": "Đoạn code trong đề",
        "code": "output reg clk1, clk2;\ninitial begin\n  clk1=1'b0; clk2=1'b1;\n  forever clk1=!clk1;\n  repeat(5) #5 clk2=~clk2;\n  #75 $finish;\nend"
      }
    ],
    "aiNote": "Đáp án C đúng vì lệnh forever clk1=!clk1; không có delay nên tạo vòng lặp vô hạn tại cùng thời điểm mô phỏng.\nCác câu lệnh phía sau forever không bao giờ được thực thi.\nVì vậy khối initial sẽ không đi tới repeat hay $finish."
  },
  {
    "source": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "source_file": "KIỂM TRA ONLINE LẦN 2(2).pdf",
    "page": null,
    "chapter": "KIỂM TRA ONLINE LẦN 2 - đã dịch tiếng Việt",
    "section": "Đề bổ sung",
    "question_no": "Câu 25",
    "question": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Không có đáp án nào",
        "correct": false
      },
      {
        "id": "B",
        "text": "assign gán liên tục giữa biểu thức RHS và biến net LHS",
        "correct": true
      },
      {
        "id": "C",
        "text": "assign có thể dùng để mô hình hóa latch có hồi tiếp",
        "correct": true
      },
      {
        "id": "D",
        "text": "assign gán liên tục vào biến reg LHS",
        "correct": false
      }
    ],
    "answers": [
      "B",
      "C"
    ],
    "type": "multi",
    "id": "online2_25",
    "aiNote": "Đáp án B và C đúng.\nassign là phép gán liên tục, vế trái thường là net như wire và luôn bám theo biểu thức vế phải.\nNếu tạo hồi tiếp bằng assign, nó có thể mô hình hóa latch/hành vi lưu trạng thái; assign không gán trực tiếp cho reg."
  }
];
