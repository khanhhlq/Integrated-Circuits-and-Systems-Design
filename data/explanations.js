window.EXPLANATION_OVERRIDES = {
  "exam01_1": {
    "focus": "Câu hỏi hỏi tài nguyên logic dùng để hiện thực hàm logic trong FPGA. Các mô đun logic FPGA dùng LUT như bảng chân trị lập trình được, thay vì cố định chỉ là mạng AND/OR.",
    "correct": "Chọn D. Mạng Look-Up Table (LUT) vì LUT có thể hiện thực nhiều hàm logic bằng cách tra bảng theo tổ hợp ngõ vào.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì chỉ AND, chỉ OR hoặc AND-OR cố định không thể mô tả tính lập trình linh hoạt của logic FPGA như LUT.",
      "B": "Sai vì chỉ AND, chỉ OR hoặc AND-OR cố định không thể mô tả tính lập trình linh hoạt của logic FPGA như LUT.",
      "C": "Sai vì chỉ AND, chỉ OR hoặc AND-OR cố định không thể mô tả tính lập trình linh hoạt của logic FPGA như LUT."
    }
  },
  "exam01_2": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn D. Cả 3 đáp án vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "exam01_3": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. Tổng trở cao vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì phương án tổng hợp này bao gồm ít nhất một ý không đúng."
    }
  },
  "exam01_4": {
    "focus": "Giá trị thập phân trong Verilog có thể viết dạng không khai báo cơ số như 15, hoặc dạng có độ rộng và cơ số như 8'd15, 4'd15 nếu độ rộng đủ biểu diễn giá trị.",
    "correct": "Chọn D. Cả 3 đều đúng vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu."
    }
  },
  "exam01_5": {
    "focus": "Hằng 4'bz1 có độ rộng 4 bit. Khi giá trị viết thiếu bit so với độ rộng, Verilog mở rộng phía trái; với hằng chứa z, các bit mở rộng phía trái là z.",
    "correct": "Chọn B. 4'bzzz1 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [
      "4'bz1 cần đủ 4 bit",
      "Mở rộng phía trái bằng z",
      "=> 4'bzzz1"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì x là không xác định; không được tự thêm x khi mở rộng một giá trị nhị phân xác định.",
      "C": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu.",
      "D": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu."
    }
  },
  "exam01_6": {
    "focus": "Hằng nhị phân có độ rộng lớn hơn số bit ghi ra sẽ được mở rộng phía trái bằng 0 nếu giá trị là số xác định 0/1.",
    "correct": "Chọn A. 8'b00000011 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì x là không xác định; không được tự thêm x khi mở rộng một giá trị nhị phân xác định.",
      "C": "Sai vì x là không xác định; không được tự thêm x khi mở rộng một giá trị nhị phân xác định.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "exam01_7": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Mô tả không hợp lệ vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "wire A, B;\nA = 1;\nB = A;\nA = 0;",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "exam01_8": {
    "focus": "Bus/vector trong Verilog đặt độ rộng trước tên tín hiệu, ví dụ wire [7:0] signal. Dạng đặt [7:0] sau tên thường là mảng các phần tử, không phải một bus vector đơn.",
    "correct": "Chọn A. wire [7:0] signal_a; vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "exam01_9": {
    "focus": "Mảng trong Verilog đặt chỉ số mảng sau tên biến. Ví dụ reg a [3:0] là 4 phần tử 1 bit; còn reg [3:0] a là một vector 4 bit.",
    "correct": "Chọn C. reg a [3:0]; vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "exam01_10": {
    "focus": "Bộ nhớ 1024 byte cần 1024 phần tử, mỗi phần tử rộng 8 bit. Trong Verilog dạng thường dùng là reg [7:0] mem [1023:0]: [7:0] là độ rộng 1 byte, [1023:0] là số phần tử.",
    "correct": "Chọn D. reg [7:0] mem [1023:0] vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp này không đúng dạng bộ nhớ Verilog đang dùng trong đề hoặc thiếu độ rộng 8 bit cho mỗi phần tử.",
      "B": "Sai vì [1024] là vector 1025 bit nếu dùng kiểu range đơn, không phải 1024 phần tử byte.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "exam01_11": {
    "focus": "Câu hỏi kiểm tra tính hợp lệ của mô tả Verilog: wire phải được drive bằng assign/primitive; reg phải được gán trong always/initial; câu lệnh thủ tục không được đặt trần ngoài procedural block.",
    "correct": "Chọn A. wire a,b; assign a=1; assign b=1; assign a=b; vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì assign liên tục không dùng để drive reg theo quy tắc Verilog cổ điển trong đề.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì wire không được gán bằng câu lệnh thủ tục trực tiếp trong always/initial."
    }
  },
  "exam01_12": {
    "focus": "Câu hỏi kiểm tra tính hợp lệ của mô tả Verilog: wire phải được drive bằng assign/primitive; reg phải được gán trong always/initial; câu lệnh thủ tục không được đặt trần ngoài procedural block.",
    "correct": "Chọn C. assign a[0:3]=b[3:0] vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "exam01_13": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. Bên trong khối always các phát biểu được xử lý tuần tự vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì wire không được gán bằng câu lệnh thủ tục trực tiếp trong always/initial."
    }
  },
  "exam01_14": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Phát biểu if hoặc case chỉ có thể đặt bên trong các procedure vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "exam01_15": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn C. always @(posedge clk) begin …end vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "B": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "exam01_16": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn D. Chưa đủ cơ sở xác định vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "exam01_17": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Gán đồng thời a=1 và b=0 vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì phương án tổng hợp này bao gồm ít nhất một ý không đúng."
    }
  },
  "exam01_18": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. wire vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "exam01_19": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. reg vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "exam01_20": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn C. FF D vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "exam01_21": {
    "focus": "Câu hỏi yêu cầu dịch thanh ghi sang phải 2 bit. Với dịch logic sang phải, hai bit cao được chèn 0, còn các bit cũ A[7:2] dịch xuống vị trí thấp hơn.",
    "correct": "Chọn A. a = {2'b00, a[7:2]}; vì A >> 2 hoặc {2'b00, A[7:2]} đều mô tả dịch phải 2 bit.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này dịch sai hướng, lấy sai lát cắt bit, dùng sai cú pháp hoặc chỉ là biểu thức chưa gán lại vào thanh ghi.",
      "C": "Sai vì phương án này dịch sai hướng, lấy sai lát cắt bit, dùng sai cú pháp hoặc chỉ là biểu thức chưa gán lại vào thanh ghi.",
      "D": "Sai vì phương án này dịch sai hướng, lấy sai lát cắt bit, dùng sai cú pháp hoặc chỉ là biểu thức chưa gán lại vào thanh ghi."
    }
  },
  "exam01_22": {
    "focus": "Bus/vector trong Verilog đặt độ rộng trước tên tín hiệu, ví dụ wire [7:0] signal. Dạng đặt [7:0] sau tên thường là mảng các phần tử, không phải một bus vector đơn.",
    "correct": "Chọn C. 16 bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "exam01_23": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. assign o = s ? i[0] : i[1]; vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module Mux(input wire [1:0] i, input wire s, output wire o);",
    "wrong": {
      "A": "Sai vì if là câu lệnh thủ tục, không đặt sau assign hoặc đứng ngoài always/initial.",
      "B": "Sai vì viết sai từ khóa assign thành asign.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "exam01_24": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. always @(i,s) if (s==1) o=i[1]; else o=i[0]; vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module Mux(input wire [1:0] i, input wire s, output reg o);",
    "wrong": {
      "B": "Sai vì viết sai từ khóa assign thành asign.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "exam01_25": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. always @(i,s) if (s) o[0]=i; else o[1]=i; vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module deMux(input wire i, input wire s, output reg [1:0] o);",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "exam01_26": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. assign o[0]=i&s; assign o[1]=i&(~s); vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module Mux(input wire i, input wire s, output wire [1:0] o);",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "exam01_27": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. and (D,A,B,C); vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module and_gate(input wire A, B, C, output wire D);",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "exam01_28": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn B. always @(posedge clk) Q = D; vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "module FFD(input wire D, clk, output reg Q);",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "C": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "exam01_29": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn C. TFF tf0(.clk(clk), .rs(rs), .q(q), .qbar(qbar)); vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "exam01_30": {
    "focus": "Câu hỏi hỏi logic trạng thái kế tiếp của thanh ghi dịch vào nối tiếp ra nối tiếp. Bit mới đưa vào ở đầu vector, các bit còn lại lấy từ thanh ghi hiện tại đã dịch phải.",
    "correct": "Chọn C. r_next = {Di, r_reg[7:1]}; vì biểu thức dùng phép nối {Inputs/Di, state_reg hoặc r_reg[7:1]} để đưa bit nối tiếp vào MSB và dịch các bit cũ sang phải.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì dùng phép OR/cộng/ngoặc tròn thay cho nối bit, lấy sai lát cắt hoặc đặt trong always cạnh clock thay vì logic next-state tổ hợp.",
      "B": "Sai vì dùng phép OR/cộng/ngoặc tròn thay cho nối bit, lấy sai lát cắt hoặc đặt trong always cạnh clock thay vì logic next-state tổ hợp.",
      "D": "Sai vì dùng phép OR/cộng/ngoặc tròn thay cho nối bit, lấy sai lát cắt hoặc đặt trong always cạnh clock thay vì logic next-state tổ hợp."
    }
  },
  "exam01_31": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn E. Không có đáp án đúng hoàn toàn vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "B": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "C": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "online1_1": {
    "focus": "Trong Verilog, Z là high impedance/tổng trở cao. Net không có driver hoặc ngõ ra tri-state không được kéo bởi mạch sẽ ở trạng thái Z.",
    "correct": "Chọn C. Khi đường ngõ ra được cách ly điện vì đó là trạng thái/giá trị đúng theo mô phỏng Verilog.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng trạng thái logic mà đề đang hỏi.",
      "B": "Sai vì không đúng trạng thái logic mà đề đang hỏi.",
      "D": "Sai vì không đúng trạng thái logic mà đề đang hỏi."
    }
  },
  "online1_2": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn C. -128 vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online1_3": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn B. Tạm dừng mô phỏng vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online1_4": {
    "focus": "Mạch tổ hợp thuần phải nhạy với mọi input ảnh hưởng đến ngõ ra. Trong Verilog hiện đại có thể dùng always @* để tránh thiếu tín hiệu trong sensitivity list.",
    "correct": "Chọn C. Có vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "online1_5": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn B. 255 vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online1_6": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn B. Chi phí thiết kế thấp hơn | C. Linh hoạt hơn vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online1_7": {
    "focus": "Cổng NOR chỉ cho ngõ ra 1 khi tất cả ngõ vào đều 0. Nếu có bất kỳ ngõ vào 1 thì OR đã bằng 1 và NOR bằng 0.",
    "correct": "Chọn A. Tất cả input bằng 0 vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "D": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án A khớp yêu cầu đề."
    }
  },
  "online1_8": {
    "focus": "Câu hỏi hỏi cách hiểu câu lệnh assign f = (a|b)&(c|d). assign mô tả quan hệ dòng dữ liệu: khi a, b, c hoặc d đổi thì f được cập nhật theo biểu thức. Đây là mô tả hành vi/dataflow của hàm f, không phải netlist structural primitive.",
    "correct": "Chọn B. Mô tả hành vi/dòng dữ liệu của hàm f vì assign đang mô tả biểu thức logic của f theo dạng dataflow.",
    "steps": [],
    "code": "assign f = (a | b) & (c | d);",
    "wrong": {
      "A": "Sai vì phương án này hoặc quá thiên về structural/netlist mức cổng, hoặc không đúng với bản chất câu lệnh assign.",
      "C": "Sai vì phương án này hoặc quá thiên về structural/netlist mức cổng, hoặc không đúng với bản chất câu lệnh assign.",
      "D": "Sai vì phương án này hoặc quá thiên về structural/netlist mức cổng, hoặc không đúng với bản chất câu lệnh assign."
    }
  },
  "online1_9": {
    "focus": "Primitive gate AND trong Verilog viết dạng and (output, input1, input2, input3). Trong biểu thức logic, phép AND theo bit là &, không phải từ khóa and.",
    "correct": "Chọn D. Tất cả input bằng 1 vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "B": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "C": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án D khớp yêu cầu đề."
    }
  },
  "online1_10": {
    "focus": "Câu hỏi kiểm tra phép cộng khi toán hạng có bit X. Trong Verilog, nếu một bit của toán hạng không xác định thì các bit kết quả phụ thuộc vào nó cũng không xác định. Với phép cộng, bit X có thể lan truyền qua carry nên kết quả không thể xác định chắc chắn.",
    "correct": "Chọn D vì kết quả đúng là xxxx.",
    "steps": [
      "A = 4'b001x",
      "B = 4'b1011",
      "A + B phụ thuộc vào x và carry",
      "=> kết quả mô phỏng là 4'bxxxx"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này giả sử x là 0 hoặc 1 cố định, trong khi x là không xác định nên phép cộng không cho ra một vector xác định.",
      "B": "Sai vì phương án này giả sử x là 0 hoặc 1 cố định, trong khi x là không xác định nên phép cộng không cho ra một vector xác định.",
      "C": "Sai vì phương án này giả sử x là 0 hoặc 1 cố định, trong khi x là không xác định nên phép cộng không cho ra một vector xác định."
    }
  },
  "online1_11": {
    "focus": "Logic Verilog cơ bản dùng bốn trạng thái 0, 1, X và Z. Các ký hiệu ngoài nhóm này không phải mức logic chuẩn của Verilog.",
    "correct": "Chọn C. U vì đó là trạng thái/giá trị đúng theo mô phỏng Verilog.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì X là không xác định, khác với Z là tổng trở cao/không có driver.",
      "B": "Sai nếu câu đang hỏi reg mặc định hoặc mức không hỗ trợ; Z chỉ là high-impedance của net/tri-state.",
      "D": "Sai vì không đúng trạng thái logic mà đề đang hỏi."
    }
  },
  "online1_12": {
    "focus": "Câu hỏi dùng toán tử lũy thừa ** trong Verilog. Cần đổi A và B sang giá trị số rồi tính A mũ B.",
    "correct": "Chọn A. 27 vì 3 mũ 3 bằng 27.",
    "steps": [
      "A = 4'b011 = 3",
      "B = 4'b0011 = 3",
      "A ** B = 3 ** 3 = 27"
    ],
    "code": "",
    "wrong": {
      "B": "Sai vì 9 không phải kết quả của phép lũy thừa đã tính.",
      "C": "Sai vì 6 không phải kết quả của phép lũy thừa đã tính.",
      "D": "Sai vì Biểu thức không hợp lệ không phải kết quả của phép lũy thừa đã tính."
    }
  },
  "online1_13": {
    "focus": "Câu hỏi kiểm tra delay trong khối initial. Các delay viết liên tiếp là delay tương đối so với thời điểm hiện tại, không phải thời điểm tuyệt đối.",
    "correct": "Chọn D. 20 vì statement 2 xảy ra ở thời điểm 20.",
    "steps": [
      "#5 x = 1'b0; thực thi tại t = 5",
      "Sau đó #15 y = 1'b1; thực thi thêm 15 đơn vị",
      "=> statement 2 chạy tại t = 5 + 15 = 20"
    ],
    "code": "initial begin\n  #5  x = 1'b0;\n  #15 y = 1'b1;\nend",
    "wrong": {
      "A": "Sai vì phương án này nhầm delay tương đối với thời điểm tuyệt đối hoặc tự gán đơn vị thời gian khi đề chưa cho timescale.",
      "B": "Sai vì phương án này nhầm delay tương đối với thời điểm tuyệt đối hoặc tự gán đơn vị thời gian khi đề chưa cho timescale.",
      "C": "Sai vì phương án này nhầm delay tương đối với thời điểm tuyệt đối hoặc tự gán đơn vị thời gian khi đề chưa cho timescale."
    }
  },
  "online1_14": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn A. Thiết kế FPGA vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online1_15": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. X vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "online1_16": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Số hex 32 bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "online1_17": {
    "focus": "Trong Verilog, Z là high impedance/tổng trở cao. Net không có driver hoặc ngõ ra tri-state không được kéo bởi mạch sẽ ở trạng thái Z.",
    "correct": "Chọn B. Z vì đó là trạng thái/giá trị đúng theo mô phỏng Verilog.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì X là không xác định, khác với Z là tổng trở cao/không có driver.",
      "C": "Sai vì U là ký hiệu thường gặp trong VHDL/std_logic, không phải mức logic cơ bản của Verilog trong đề.",
      "D": "Sai vì không đúng trạng thái logic mà đề đang hỏi."
    }
  },
  "online1_18": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn A. 100ns/110ps vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online1_19": {
    "focus": "Câu hỏi yêu cầu tính reduction NOR rồi ghép/nhân bản bit. Cần tính B = ~|A trước, sau đó lấy A[5:3] và lặp B ba lần.",
    "correct": "Chọn A vì kết quả ghép là 6'b111000.",
    "steps": [
      "A = 8'b00111001",
      "|A = 1 vì A có nhiều bit 1",
      "B = ~|A = 0",
      "A[5:3] = 111",
      "{A[5:3], 3{B}} = {111, 000} = 6'b111000"
    ],
    "code": "wire [7:0] A;\nwire B;\nassign B = ~|A;",
    "wrong": {
      "B": "Sai vì phương án này tính sai B = ~|A hoặc sai phần A[5:3]/phép lặp {3{B}}.",
      "C": "Sai vì phương án này tính sai B = ~|A hoặc sai phần A[5:3]/phép lặp {3{B}}.",
      "D": "Sai vì phương án này tính sai B = ~|A hoặc sai phần A[5:3]/phép lặp {3{B}}."
    }
  },
  "online1_20": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn C. Tạo mạch từ đặc tả đã cho vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online1_21": {
    "focus": "Câu hỏi yêu cầu tính reduction XOR rồi ghép vector. Cần tính C = ^A, sau đó ghép A[3:1], hai lần C và B[2:0].",
    "correct": "Chọn D. 00111110 vì kết quả ghép cuối là 00111110.",
    "steps": [
      "A = 5'b10011 có 3 bit 1",
      "C = ^A = 1 vì số bit 1 là lẻ",
      "A[3:1] = 001",
      "B[2:0] = 110",
      "{A[3:1], 2{C}, B[2:0]} = {001, 11, 110} = 00111110"
    ],
    "code": "wire [5:0] A, B;\nwire C;\nassign C = ^A;",
    "wrong": {
      "A": "Sai vì phương án này tính sai C = ^A hoặc sai thứ tự ghép các nhóm bit.",
      "B": "Sai vì phương án này tính sai C = ^A hoặc sai thứ tự ghép các nhóm bit.",
      "C": "Sai vì phương án này tính sai C = ^A hoặc sai thứ tự ghép các nhóm bit."
    }
  },
  "online1_22": {
    "focus": "Câu hỏi kiểm tra so sánh logic == khi có X. == có thể trả về X nếu không thể kết luận, nhưng nếu tồn tại một bit chắc chắn khác nhau thì kết quả là 0.",
    "correct": "Chọn C. 0 vì hai vector chắc chắn khác nhau ở bit cao nhất.",
    "steps": [
      "A = 4'b1xxx",
      "B = 4'b1xxx",
      "~B = 4'b0xxx",
      "So sánh A với ~B: bit MSB là 1 so với 0",
      "=> A == ~B trả về 0"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì kết quả không phải 1/X/Z: bit cao nhất đã khác nhau rõ ràng nên phép so sánh xác định là 0.",
      "B": "Sai vì kết quả không phải 1/X/Z: bit cao nhất đã khác nhau rõ ràng nên phép so sánh xác định là 0.",
      "D": "Sai vì kết quả không phải 1/X/Z: bit cao nhất đã khác nhau rõ ràng nên phép so sánh xác định là 0."
    }
  },
  "online2_1": {
    "focus": "Câu hỏi dùng toán tử lũy thừa ** trong Verilog. Cần đổi A và B sang giá trị số rồi tính A mũ B.",
    "correct": "Chọn D. 27 vì 3 mũ 3 bằng 27.",
    "steps": [
      "A = 4'b011 = 3",
      "B = 4'b0011 = 3",
      "A ** B = 3 ** 3 = 27"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì 9 không phải kết quả của phép lũy thừa đã tính.",
      "B": "Sai vì Biểu thức không hợp lệ không phải kết quả của phép lũy thừa đã tính.",
      "C": "Sai vì 6 không phải kết quả của phép lũy thừa đã tính."
    }
  },
  "online2_2": {
    "focus": "Câu hỏi kiểm tra blocking assignment trong always theo cạnh clock. Với blocking =, lệnh sau thấy ngay giá trị mới của biến đã gán ở lệnh trước.",
    "correct": "Chọn D vì không có phương án nào liệt kê a = 2, b = 2.",
    "steps": [
      "Ban đầu a = 1, b = 2",
      "a = b;  => a trở thành 2",
      "b = a;  => b lấy giá trị a mới là 2",
      "Kết quả thực tế: a = 2, b = 2"
    ],
    "code": "always @(posedge clock) begin\n  a = b;\n  b = a;\nend",
    "wrong": {
      "A": "Sai vì phương án này không phản ánh thứ tự cập nhật của blocking assignment; b không còn lấy giá trị a cũ.",
      "B": "Sai vì phương án này không phản ánh thứ tự cập nhật của blocking assignment; b không còn lấy giá trị a cũ.",
      "C": "Sai vì phương án này không phản ánh thứ tự cập nhật của blocking assignment; b không còn lấy giá trị a cũ."
    }
  },
  "online2_3": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. Số hex 32 bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "online2_4": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. Bốn D Flip-Flop đều nhận dữ liệu din vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "always @(posedge clock) begin\n  data0 <= din;\n  data1 <= din;\n  data2 <= din;\n  data3 <= din;\nend",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "online2_5": {
    "focus": "Câu hỏi yêu cầu tính reduction XOR rồi ghép vector. Cần tính C = ^A, sau đó ghép A[3:1], hai lần C và B[2:0].",
    "correct": "Chọn A. 00111110 vì kết quả ghép cuối là 00111110.",
    "steps": [
      "A = 5'b10011 có 3 bit 1",
      "C = ^A = 1 vì số bit 1 là lẻ",
      "A[3:1] = 001",
      "B[2:0] = 110",
      "{A[3:1], 2{C}, B[2:0]} = {001, 11, 110} = 00111110"
    ],
    "code": "wire [5:0] A, B;\nwire C;\nassign C = ^A;",
    "wrong": {
      "B": "Sai vì phương án này tính sai C = ^A hoặc sai thứ tự ghép các nhóm bit.",
      "C": "Sai vì phương án này tính sai C = ^A hoặc sai thứ tự ghép các nhóm bit.",
      "D": "Sai vì phương án này tính sai C = ^A hoặc sai thứ tự ghép các nhóm bit."
    }
  },
  "online2_6": {
    "focus": "Câu hỏi kiểm tra delay trong khối initial. Các delay viết liên tiếp là delay tương đối so với thời điểm hiện tại, không phải thời điểm tuyệt đối.",
    "correct": "Chọn B. 20 vì statement 2 xảy ra ở thời điểm 20.",
    "steps": [
      "#5 x = 1'b0; thực thi tại t = 5",
      "Sau đó #15 y = 1'b1; thực thi thêm 15 đơn vị",
      "=> statement 2 chạy tại t = 5 + 15 = 20"
    ],
    "code": "initial begin\n  #5  x = 1'b0;\n  #15 y = 1'b1;\nend",
    "wrong": {
      "A": "Sai vì phương án này nhầm delay tương đối với thời điểm tuyệt đối hoặc tự gán đơn vị thời gian khi đề chưa cho timescale.",
      "C": "Sai vì phương án này nhầm delay tương đối với thời điểm tuyệt đối hoặc tự gán đơn vị thời gian khi đề chưa cho timescale.",
      "D": "Sai vì phương án này nhầm delay tương đối với thời điểm tuyệt đối hoặc tự gán đơn vị thời gian khi đề chưa cho timescale."
    }
  },
  "online2_7": {
    "focus": "Khối initial chạy một lần từ thời điểm 0 trong mô phỏng/testbench; nhiều khối initial chạy song song với nhau.",
    "correct": "Chọn D. In giá trị x 15 lần vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "online2_8": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Chỉ số biến ở RHS của assign có thể tạo MUX, còn ở LHS có thể tạo decoder | B. assign có thể dùng để hiện thực cả mạch tổ hợp và tuần tự vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án A, B khớp yêu cầu đề."
    }
  },
  "online2_9": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. Mạch chốt 1 bit vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "assign d = ~(c | b);\nassign c = ~(a | d);",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "online2_10": {
    "focus": "Khối initial chạy một lần từ thời điểm 0 trong mô phỏng/testbench; nhiều khối initial chạy song song với nhau.",
    "correct": "Chọn B. Khối procedural chỉ thực thi một lần vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "online2_11": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn A. 100ns/110ps vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online2_12": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn B. Tạo mạch từ đặc tả vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online2_13": {
    "focus": "if/case là câu lệnh thủ tục, nên phải đặt trong procedural block như always hoặc initial. Bên ngoài procedural block không viết if/case trực tiếp như câu lệnh tuần tự.",
    "correct": "Chọn C. B[3:0] = D[4:1] + 1; | D. C = A + B; vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "online2_14": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn B. Trễ 5 đơn vị thời gian trước câu lệnh tiếp theo vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online2_15": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn D. always @(posedge clk or negedge clear) vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "B": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "C": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "online2_16": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn D. Không có đáp án nào vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online2_17": {
    "focus": "Mạch tổ hợp thuần phải nhạy với mọi input ảnh hưởng đến ngõ ra. Trong Verilog hiện đại có thể dùng always @* để tránh thiếu tín hiệu trong sensitivity list.",
    "correct": "Chọn B. Có vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "online2_18": {
    "focus": "Khối initial chạy một lần từ thời điểm 0 trong mô phỏng/testbench; nhiều khối initial chạy song song với nhau.",
    "correct": "Chọn C. 51 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "integer a,b,c,d;\ninitial begin\n  a=25; b=12; c=5; d=17;\n  a=b+c;\n  b=a-15;\n  c=a+d;\n  d=c+d;\nend",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "online2_19": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Tạo mạch XOR vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module mydesign(a,b);\n  input [1:0] b;\n  output reg a;\n  always @(b) begin\n    if (b==2'b00) a=1'b0;\n    else if (b==2'b11) a=1'b0;\n    else a=1'b1;\n  end\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "online2_20": {
    "focus": "Trong Verilog, Z là high impedance/tổng trở cao. Net không có driver hoặc ngõ ra tri-state không được kéo bởi mạch sẽ ở trạng thái Z.",
    "correct": "Chọn B. Z vì đó là trạng thái/giá trị đúng theo mô phỏng Verilog.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng trạng thái logic mà đề đang hỏi.",
      "C": "Sai vì U là ký hiệu thường gặp trong VHDL/std_logic, không phải mức logic cơ bản của Verilog trong đề.",
      "D": "Sai vì X là không xác định, khác với Z là tổng trở cao/không có driver."
    }
  },
  "online2_21": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn B. Gọi module nhiều lần nhưng chỉ một bản sao phần cứng được đưa vào sau tổng hợp vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "online2_22": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. X vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "online2_23": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Tạo wire cho result | D. Tạo mạch tổ hợp vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module guess(data,cont,result);\n  input [7:0] data; input [1:0] cont; output reg result;\n  always @(data) begin\n    if (cont==2'b00) result=data;\n    else result=~data;\n  end\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "online2_24": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Khối sẽ không bao giờ kết thúc vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "output reg clk1, clk2;\ninitial begin\n  clk1=1'b0; clk2=1'b1;\n  forever clk1=!clk1;\n  repeat(5) #5 clk2=~clk2;\n  #75 $finish;\nend",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "online2_25": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. assign gán liên tục giữa biểu thức RHS và biến net LHS | C. assign có thể dùng để mô hình hóa latch có hồi tiếp vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì assign liên tục không dùng để drive reg theo quy tắc Verilog cổ điển trong đề."
    }
  },
  "final2024_1": {
    "focus": "Trọng tâm là đọc đúng yêu cầu của đề, xác định khái niệm hoặc kết quả cần tính, sau đó đối chiếu từng phương án với điều kiện đó.",
    "correct": "Chọn C. Lỗi truyền hoặc lỗi xử lý dữ liệu vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì phương án tổng hợp này bao gồm ít nhất một ý không đúng.",
      "E": "Sai vì phương án tổng hợp này bao gồm ít nhất một ý không đúng."
    }
  },
  "final2024_2": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Phát biểu if hoặc case chỉ có thể đặt bên trong các procedure vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "E": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "final2024_3": {
    "focus": "FPGA thuộc nhóm PLD, có ưu điểm lập trình lại, rủi ro/chi phí ban đầu thấp và thời gian triển khai nhanh; nhược điểm là chậm/tốn diện tích/công suất hơn ASIC.",
    "correct": "Chọn B. FPGA chậm hơn 2–3 lần so với ASIC vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "E": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "final2024_4": {
    "focus": "Câu hỏi yêu cầu tính phép nối {A, B, C}. Trước hết phải tính C = A ^ B theo từng bit, sau đó ghép A, B, C theo đúng thứ tự từ trái sang phải.",
    "correct": "Chọn C vì kết quả ghép cuối cùng là 101101.",
    "steps": [
      "A = 2'b10",
      "B = 2'b11",
      "C = A ^ B = 2'b10 ^ 2'b11 = 2'b01",
      "{A, B, C} = 10 11 01 = 101101"
    ],
    "code": "wire [1:0] A, B, C;\nassign C = A ^ B;",
    "wrong": {
      "A": "Sai vì 101111 không bằng chuỗi ghép A=10, B=11, C=01.",
      "B": "Sai vì 101100 không bằng chuỗi ghép A=10, B=11, C=01.",
      "D": "Sai vì 011000 không bằng chuỗi ghép A=10, B=11, C=01.",
      "E": "Sai vì 110011 không bằng chuỗi ghép A=10, B=11, C=01."
    }
  },
  "final2024_5": {
    "focus": "Câu hỏi hỏi ý nghĩa #20 trong mô phỏng Verilog. Nếu không có timescale cụ thể, #20 chỉ chắc chắn là 20 đơn vị thời gian mô phỏng, không tự suy ra ns/ms/us.",
    "correct": "Chọn C. Xác định thời gian trễ là 20 đơn vị thời gian (time unit) vì #20 là độ trễ 20 time units.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này nhầm delay tương đối với thời điểm tuyệt đối hoặc tự gán đơn vị thời gian khi đề chưa cho timescale.",
      "B": "Sai vì phương án này nhầm delay tương đối với thời điểm tuyệt đối hoặc tự gán đơn vị thời gian khi đề chưa cho timescale.",
      "D": "Sai vì phương án này nhầm delay tương đối với thời điểm tuyệt đối hoặc tự gán đơn vị thời gian khi đề chưa cho timescale.",
      "E": "Sai vì phương án này nhầm delay tương đối với thời điểm tuyệt đối hoặc tự gán đơn vị thời gian khi đề chưa cho timescale."
    }
  },
  "final2024_6": {
    "focus": "Hằng nhị phân có độ rộng lớn hơn số bit ghi ra sẽ được mở rộng phía trái bằng 0 nếu giá trị là số xác định 0/1.",
    "correct": "Chọn A. 8'b00000010 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì x là không xác định; không được tự thêm x khi mở rộng một giá trị nhị phân xác định.",
      "C": "Sai vì x là không xác định; không được tự thêm x khi mở rộng một giá trị nhị phân xác định.",
      "D": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu.",
      "E": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án A khớp yêu cầu đề."
    }
  },
  "final2024_7": {
    "focus": "Giá trị thập phân trong Verilog có thể viết dạng không khai báo cơ số như 15, hoặc dạng có độ rộng và cơ số như 8'd15, 4'd15 nếu độ rộng đủ biểu diễn giá trị.",
    "correct": "Chọn A. 4'b0110 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "E": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án A khớp yêu cầu đề."
    }
  },
  "final2024_8": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn E. Mô tả không hợp lệ vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "wire A, B;\nA = 1;\nB = A;\nA = 0;",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "final2024_9": {
    "focus": "Câu hỏi kiểm tra khác nhau giữa == và === trong Verilog. Toán tử == là logical equality; nếu toán hạng chứa X hoặc Z thì kết quả có thể là X vì mô phỏng không thể kết luận true/false chắc chắn.",
    "correct": "Chọn E. x vì toán tử == với x/z trả về x, không trả về 1.",
    "steps": [
      "4'b1z0x == 4'b1z0x",
      "Hai vế giống ký tự, nhưng có z và x",
      "Với ==, x/z không được coi như giá trị 0/1 xác định",
      "=> kết quả là x",
      "Nếu dùng === thì mới so sánh cả x và z như giá trị cụ thể"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "B": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "C": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "D": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định."
    }
  },
  "final2024_10": {
    "focus": "Bộ nhớ 1024 byte cần 1024 phần tử, mỗi phần tử rộng 8 bit. Trong Verilog dạng thường dùng là reg [7:0] mem [1023:0]: [7:0] là độ rộng 1 byte, [1023:0] là số phần tử.",
    "correct": "Chọn D. reg [7:0] mem [1023:0] vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp này không đúng dạng bộ nhớ Verilog đang dùng trong đề hoặc thiếu độ rộng 8 bit cho mỗi phần tử.",
      "B": "Sai vì cú pháp này không đúng dạng bộ nhớ Verilog đang dùng trong đề hoặc thiếu độ rộng 8 bit cho mỗi phần tử.",
      "C": "Sai vì [1024] là vector 1025 bit nếu dùng kiểu range đơn, không phải 1024 phần tử byte.",
      "E": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "final2024_11": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn C. reg vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "B": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "E": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "final2024_12": {
    "focus": "Câu hỏi kiểm tra tính hợp lệ của mô tả Verilog: wire phải được drive bằng assign/primitive; reg phải được gán trong always/initial; câu lệnh thủ tục không được đặt trần ngoài procedural block.",
    "correct": "Chọn B. assign a = b[0:3] vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "E": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "final2024_13": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. assign o = s ? i[0] : i[1]; vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module Mux(input wire [1:0] i, input wire s, output wire o);\n  // chọn mô tả đúng cho o\nendmodule",
    "wrong": {
      "A": "Sai vì if là câu lệnh thủ tục, không đặt sau assign hoặc đứng ngoài always/initial.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "E": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "final2024_14": {
    "focus": "Câu hỏi kiểm tra non-blocking assignment <=. RHS được đọc theo giá trị cũ, còn LHS chỉ cập nhật sau khi khối hiện tại kết thúc.",
    "correct": "Chọn B vì non-blocking làm b nhận giá trị a cũ.",
    "steps": [
      "Ban đầu a = 0, b = 1",
      "a <= 1; lên lịch cập nhật a thành 1",
      "b <= a; đọc a cũ = 0",
      "Cuối bước mô phỏng: a = 1, b = 0"
    ],
    "code": "initial begin\n  a <= 1;\n  b <= a;\nend",
    "wrong": {
      "A": "Sai vì phương án này nhầm non-blocking <= với blocking = hoặc dùng giá trị mới quá sớm.",
      "C": "Sai vì phương án này nhầm non-blocking <= với blocking = hoặc dùng giá trị mới quá sớm.",
      "D": "Sai vì phương án này nhầm non-blocking <= với blocking = hoặc dùng giá trị mới quá sớm.",
      "E": "Sai vì phương án này nhầm non-blocking <= với blocking = hoặc dùng giá trị mới quá sớm."
    }
  },
  "final2024_15": {
    "focus": "Code có D = ~Q và Q được cập nhật tại cạnh clock. Mỗi cạnh clock, Q nhận giá trị đảo của chính nó nên Q đổi trạng thái sau mỗi xung clock.",
    "correct": "Chọn B vì đây là flip-flop đảo trạng thái, tạo mạch chia tần số cho 2.",
    "steps": [
      "assign D = ~Q",
      "posedge clk: Q <= D",
      "=> mỗi xung clock Q bị đảo",
      "Một chu kỳ hoàn chỉnh của Q cần 2 xung clock",
      "=> mạch chia 2 xung clk"
    ],
    "code": "always @(posedge clk or negedge reset)\nbegin\n  if(reset)\n    Q <= 1'b0;\n  else\n    Q <= D;\nend\nassign D = ~Q;\nassign Qout = Q;",
    "wrong": {
      "A": "Sai vì code không dịch bit và cũng không tạo bộ chia 3 hoặc chia 4; nó chỉ có một FF tự đảo.",
      "C": "Sai vì code không dịch bit và cũng không tạo bộ chia 3 hoặc chia 4; nó chỉ có một FF tự đảo.",
      "D": "Sai vì code không dịch bit và cũng không tạo bộ chia 3 hoặc chia 4; nó chỉ có một FF tự đảo.",
      "E": "Sai vì code không dịch bit và cũng không tạo bộ chia 3 hoặc chia 4; nó chỉ có một FF tự đảo."
    }
  },
  "final2024_16": {
    "focus": "Câu hỏi chỉ hỏi cách làm Q bắt đầu bằng 1 khi reset tích cực. Giá trị khởi tạo/reset nằm ở nhánh if(reset), không nằm ở assign Qout hay assign D.",
    "correct": "Chọn A vì đổi Q <= 1'b0 thành Q <= 1'b1 sẽ làm Q nhận 1 khi reset active.",
    "steps": [],
    "code": "always @(posedge clk or negedge reset)\nbegin\n  if(reset)\n    Q <= 1'b0;\n  else\n    Q <= D;\nend\nassign D = ~Q;\nassign Qout = Q;",
    "wrong": {
      "B": "Sai vì phương án này không thay đổi giá trị Q được nạp trong nhánh reset; nó chỉ đổi ngõ ra phụ hoặc logic D.",
      "C": "Sai vì phương án này không thay đổi giá trị Q được nạp trong nhánh reset; nó chỉ đổi ngõ ra phụ hoặc logic D.",
      "D": "Sai vì phương án này không thay đổi giá trị Q được nạp trong nhánh reset; nó chỉ đổi ngõ ra phụ hoặc logic D.",
      "E": "Sai vì phương án này không thay đổi giá trị Q được nạp trong nhánh reset; nó chỉ đổi ngõ ra phụ hoặc logic D."
    }
  },
  "final2024_17": {
    "focus": "Sensitivity list có cả posedge clk và negedge reset, nên reset được xử lý ngoài cạnh clock. Đó là reset bất đồng bộ; dữ liệu Q vẫn lấy từ D nên phần tử nền là D flip-flop.",
    "correct": "Chọn A vì code mô tả D Flip-flop với reset bất đồng bộ.",
    "steps": [],
    "code": "always @(posedge clk or negedge reset)\nbegin\n  if(reset)\n    Q <= 1'b0;\n  else\n    Q <= D;\nend\nassign D = ~Q;\nassign Qout = Q;",
    "wrong": {
      "B": "Sai vì reset không phải đồng bộ, và FF không phải TFF dù D được gán bằng ~Q ở phần code khác.",
      "C": "Sai vì reset không phải đồng bộ, và FF không phải TFF dù D được gán bằng ~Q ở phần code khác.",
      "D": "Sai vì reset không phải đồng bộ, và FF không phải TFF dù D được gán bằng ~Q ở phần code khác.",
      "E": "Sai vì reset không phải đồng bộ, và FF không phải TFF dù D được gán bằng ~Q ở phần code khác."
    }
  },
  "final2024_18": {
    "focus": "Câu hỏi yêu cầu Qout = 1 chỉ khi Q0 và Q1 đều bằng 1. Đây chính là phép AND hai tín hiệu.",
    "correct": "Chọn A vì Q1 & Q0 chỉ bằng 1 khi cả hai bit đều bằng 1.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì XOR chỉ đúng khi hai bit khác nhau, NOR đúng khi cả hai bằng 0, còn phép cộng + không phải biểu thức logic AND cần dùng.",
      "C": "Sai vì XOR chỉ đúng khi hai bit khác nhau, NOR đúng khi cả hai bằng 0, còn phép cộng + không phải biểu thức logic AND cần dùng.",
      "D": "Sai vì XOR chỉ đúng khi hai bit khác nhau, NOR đúng khi cả hai bằng 0, còn phép cộng + không phải biểu thức logic AND cần dùng.",
      "E": "Sai vì XOR chỉ đúng khi hai bit khác nhau, NOR đúng khi cả hai bằng 0, còn phép cộng + không phải biểu thức logic AND cần dùng."
    }
  },
  "final2024_19": {
    "focus": "Câu hỏi hỏi vì sao FPGA thường dùng nhiều transistor hơn ASIC cho cùng một hàm logic. Nguyên nhân chính là FPGA phải có LUT, switch định tuyến, cấu hình SRAM và phần dự phòng để có thể lập trình lại; ASIC thì nối cứng theo mạch cần thiết.",
    "correct": "Chọn C. FPGA yêu cầu dự phòng để cấu hình lại vì phần cấu hình lại/dự phòng của FPGA làm tăng số transistor trên mỗi hàm logic.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này không nêu đúng nguyên nhân chính là tài nguyên cấu hình lại của FPGA, hoặc kết hợp thêm ý sai.",
      "B": "Sai vì phương án này không nêu đúng nguyên nhân chính là tài nguyên cấu hình lại của FPGA, hoặc kết hợp thêm ý sai.",
      "D": "Sai vì phương án này không nêu đúng nguyên nhân chính là tài nguyên cấu hình lại của FPGA, hoặc kết hợp thêm ý sai.",
      "E": "Sai vì phương án này không nêu đúng nguyên nhân chính là tài nguyên cấu hình lại của FPGA, hoặc kết hợp thêm ý sai."
    }
  },
  "final2024_20": {
    "focus": "Front-end tập trung vào phần trước của thiết kế: viết mô tả phần cứng, mô phỏng/kiểm chứng chức năng và tổng hợp logic.",
    "correct": "Chọn E. Tapeout vì HDL coding, mô phỏng và tổng hợp đều thuộc nhóm Front-end.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "final2024_21": {
    "focus": "Câu hỏi kiểm tra tính hợp lệ của mô tả Verilog: wire phải được drive bằng assign/primitive; reg phải được gán trong always/initial; câu lệnh thủ tục không được đặt trần ngoài procedural block.",
    "correct": "Chọn B. reg a,b; always @* begin a<=1; b<=1; end vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì wire không được gán bằng câu lệnh thủ tục trực tiếp trong always/initial.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì wire không được gán bằng câu lệnh thủ tục trực tiếp trong always/initial.",
      "E": "Sai vì trong các lựa chọn vẫn có đáp án đúng là B. reg a,b; always @* begin a<=1; b<=1; end, nên không thể chọn 'Tất cả đều sai'."
    }
  },
  "final2024_22": {
    "focus": "CPLD có cấu trúc gồm nhiều khối SPLD/macrocell được nối với nhau bằng mạng liên kết lập trình được. Điểm quan trọng là các kết nối bên trong có thể lập trình, không phải nối cố định.",
    "correct": "Chọn D. Các SPLD được kết nối với nhau thông qua các kết nối bên trong lập trình được vì đây là mô tả đúng cấu trúc cơ bản của CPLD.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này mô tả PLA/PAL hoặc nói kết nối cố định, không đúng bản chất CPLD.",
      "B": "Sai vì phương án này mô tả PLA/PAL hoặc nói kết nối cố định, không đúng bản chất CPLD.",
      "C": "Sai vì phương án này mô tả PLA/PAL hoặc nói kết nối cố định, không đúng bản chất CPLD.",
      "E": "Sai vì phương án này mô tả PLA/PAL hoặc nói kết nối cố định, không đúng bản chất CPLD."
    }
  },
  "final2024_23": {
    "focus": "Câu hỏi yêu cầu dịch thanh ghi sang phải 2 bit. Với dịch logic sang phải, hai bit cao được chèn 0, còn các bit cũ A[7:2] dịch xuống vị trí thấp hơn.",
    "correct": "Chọn E. Câu C và D đều đúng vì A >> 2 hoặc {2'b00, A[7:2]} đều mô tả dịch phải 2 bit.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này dịch sai hướng, lấy sai lát cắt bit, dùng sai cú pháp hoặc chỉ là biểu thức chưa gán lại vào thanh ghi.",
      "B": "Sai vì phương án này dịch sai hướng, lấy sai lát cắt bit, dùng sai cú pháp hoặc chỉ là biểu thức chưa gán lại vào thanh ghi.",
      "C": "Sai vì phương án này dịch sai hướng, lấy sai lát cắt bit, dùng sai cú pháp hoặc chỉ là biểu thức chưa gán lại vào thanh ghi.",
      "D": "Sai vì phương án này dịch sai hướng, lấy sai lát cắt bit, dùng sai cú pháp hoặc chỉ là biểu thức chưa gán lại vào thanh ghi."
    }
  },
  "final2024_24": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn B. always @(posedge clk) Q = D; vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "module FFD(input wire D, clk, output reg Q);\n  // chọn mô tả đúng\nendmodule",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "C": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "E": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "final2024_25": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. 4my_identifier vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "E": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "final2024_26": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: xác định bố cục ban đầu/floorplanning trước placement-routing.",
    "correct": "Chọn B. HDL coding, simulation, synthesis, placement and routing, timing analysis and verification vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "E": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "final2024_27": {
    "focus": "Câu hỏi dùng toán tử lũy thừa ** trong Verilog. Cần đổi hai hằng nhị phân sang giá trị số rồi tính A mũ B.",
    "correct": "Chọn D vì 4 mũ 3 bằng 64.",
    "steps": [
      "A = 8'b100 = 4",
      "B = 4'b11 = 3",
      "A ** B = 4 ** 3 = 64"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì 12 không phải kết quả của phép lũy thừa đã tính.",
      "B": "Sai vì 25 không phải kết quả của phép lũy thừa đã tính.",
      "C": "Sai vì 20 không phải kết quả của phép lũy thừa đã tính.",
      "E": "Sai vì Tất cả đều sai không phải kết quả của phép lũy thừa đã tính."
    }
  },
  "final2024_28": {
    "focus": "Bus/vector trong Verilog đặt độ rộng trước tên tín hiệu, ví dụ wire [7:0] signal. Dạng đặt [7:0] sau tên thường là mảng các phần tử, không phải một bus vector đơn.",
    "correct": "Chọn D. wire [3:0] BusC; vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "E": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án D khớp yêu cầu đề."
    }
  },
  "final2024_29": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn B. assign state_next = {Inputs, state_reg[7:1]}; vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "C": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "E": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "final2024_30": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn C. always @(posedge Clk) state_reg <= state_next vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "B": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "E": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "final2024_31": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. and (F, x, y, z); vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module and_gate(input wire x, y, z, output wire F);\n  // chọn mô tả đúng cho cổng AND 3 ngõ vào\nendmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "E": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án C khớp yêu cầu đề."
    }
  },
  "final2024_32": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn D. always @(posedge clk) if (reset) y <= 0; else y <= y + 1; vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "module upcounter(input wire reset, clk, output reg [3:0] y);\n  // chọn mô tả đúng\nendmodule",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "B": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "C": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "E": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "main_1": {
    "focus": "Theo bộ câu hỏi môn học, quy trình thiết kế vi mạch trên cơ sở ASIC/FPGA được chia thành 7 tầng, đi từ mô tả HDL/mô phỏng/tổng hợp đến bố trí, đi dây, kiểm tra và tapeout.",
    "correct": "Chọn C. 7 vì tổng số tầng là 7.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_2": {
    "focus": "Theo bộ câu hỏi môn học, quy trình thiết kế vi mạch trên cơ sở ASIC/FPGA được chia thành 7 tầng, đi từ mô tả HDL/mô phỏng/tổng hợp đến bố trí, đi dây, kiểm tra và tapeout.",
    "correct": "Chọn B. 3 vì tổng số tầng là 7.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_3": {
    "focus": "Theo bộ câu hỏi môn học, quy trình thiết kế vi mạch trên cơ sở ASIC/FPGA được chia thành 7 tầng, đi từ mô tả HDL/mô phỏng/tổng hợp đến bố trí, đi dây, kiểm tra và tapeout.",
    "correct": "Chọn D. 4 vì tổng số tầng là 7.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_4": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: viết chương trình hệ thống/mô tả phần cứng, chương trình mô phỏng và thông số.",
    "correct": "Chọn A. Viết chương trình hệ thống, chương trình mô phỏng và các thông số. vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_5": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: mô phỏng và đánh giá chức năng.",
    "correct": "Chọn B. Thực hiện mô phỏng và đánh giá vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_6": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: tổng hợp logic cùng các ràng buộc.",
    "correct": "Chọn C. Tổng hợp các thành phần như: chương trình, các ràng buộc thời gian liên quan đến tốc độ xử lý, xác định vị trí các ô thành phần. vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_7": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: xác định bố cục ban đầu/floorplanning trước placement-routing.",
    "correct": "Chọn A. Xác định bố cục ban đầu trước khi phân tích các yếu tố thời gian. vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_8": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: đi dây tự động/routing.",
    "correct": "Chọn B. Đi dây tự động cho hệ thống. vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_9": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: xác định bố cục cuối cùng sau đi dây và chuẩn bị kiểm tra vật lý.",
    "correct": "Chọn D. Xác định bố cục cuối cùng sau khi đã phân tích các yếu tố thời gian. vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_10": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: tổng hợp logic cùng các ràng buộc.",
    "correct": "Chọn C. Kiểm tra các hoạt động logic và kết quả cuối cùng. vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_11": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: viết chương trình hệ thống/mô tả phần cứng, chương trình mô phỏng và thông số.",
    "correct": "Chọn B. 3 vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_12": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: tổng hợp logic cùng các ràng buộc.",
    "correct": "Chọn B. 3 vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_13": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: xác định bố cục cuối cùng sau đi dây và chuẩn bị kiểm tra vật lý.",
    "correct": "Chọn A. 2 vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_14": {
    "focus": "Câu hỏi kiểm tra đúng nhiệm vụ của từng tầng trong quy trình thiết kế. Tầng được hỏi tương ứng với bước: xác định bố cục cuối cùng sau đi dây và chuẩn bị kiểm tra vật lý.",
    "correct": "Chọn A. 2 vì phương án này mô tả đúng nhiệm vụ của tầng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_15": {
    "focus": "Tapeout là dữ liệu/kết quả cuối dùng để đưa thiết kế sang chế tạo sau khi đã hoàn tất kiểm tra.",
    "correct": "Chọn B. Là kết quả cuối cùng của quá trình thiết kế hoặc dưới dạng PCB trước khi sản xuất. vì tapeout là đầu ra cuối của quy trình thiết kế IC.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án B khớp yêu cầu đề."
    }
  },
  "main_16": {
    "focus": "Front-end tập trung vào phần trước của thiết kế: viết mô tả phần cứng, mô phỏng/kiểm chứng chức năng và tổng hợp logic.",
    "correct": "Chọn D. Cả ba phương án đều đúng. vì HDL coding, mô phỏng và tổng hợp đều thuộc nhóm Front-end.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_17": {
    "focus": "Back-end là phần triển khai vật lý sau tổng hợp: floorplan/placement, routing, timing/verification và chuẩn bị dữ liệu tapeout.",
    "correct": "Chọn D. Phương án C sai. vì placement-routing và các kiểm tra vật lý/thời gian thuộc Back-end.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "B": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_18": {
    "focus": "Trọng tâm là đọc đúng yêu cầu của đề, xác định khái niệm hoặc kết quả cần tính, sau đó đối chiếu từng phương án với điều kiện đó.",
    "correct": "Chọn D. Phương án C sai. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì phương án tổng hợp này bao gồm ít nhất một ý không đúng."
    }
  },
  "main_19": {
    "focus": "Trọng tâm là đọc đúng yêu cầu của đề, xác định khái niệm hoặc kết quả cần tính, sau đó đối chiếu từng phương án với điều kiện đó.",
    "correct": "Chọn C. Cả A, B đều đúng. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì trong các lựa chọn vẫn có đáp án đúng là C. Cả A, B đều đúng., nên không thể chọn 'Phương án C sai.'."
    }
  },
  "main_20": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn C. 1947 vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_21": {
    "focus": "Trọng tâm là đọc đúng yêu cầu của đề, xác định khái niệm hoặc kết quả cần tính, sau đó đối chiếu từng phương án với điều kiện đó.",
    "correct": "Chọn D. 1951 vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "B": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "C": "Sai vì con số này không phải giá trị/mốc đúng theo đề."
    }
  },
  "main_22": {
    "focus": "Định luật Moore nói về xu hướng số transistor trên IC tăng mạnh theo thời gian, thường hiểu là xấp xỉ tăng gấp đôi sau một khoảng thời gian nhất định, đồng thời kích thước/chi phí trên mỗi transistor giảm.",
    "correct": "Chọn D. Cả A và B đều đúng. vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_23": {
    "focus": "Intel 4004 là vi xử lý thương mại đầu tiên, thường được nêu với khoảng 2300 transistor và tốc độ khoảng 1 MHz trong tài liệu nhập môn IC.",
    "correct": "Chọn B. 2300 transistor – 1MHz. vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_24": {
    "focus": "SSI là mức tích hợp nhỏ, mốc trong bộ câu hỏi là khoảng 10 transistor/cổng logic đơn giản.",
    "correct": "Chọn A. 10 vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_25": {
    "focus": "MSI là mức tích hợp trung bình, mốc trong bộ câu hỏi là khoảng 1000 transistor.",
    "correct": "Chọn C. 1000 vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_26": {
    "focus": "LSI là mức tích hợp lớn, mốc trong bộ câu hỏi là khoảng 10.000 transistor.",
    "correct": "Chọn D. 10.000 vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_27": {
    "focus": "VLSI là mức tích hợp rất lớn, vượt mốc 10.000 transistor.",
    "correct": "Chọn D. >10.000 vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_28": {
    "focus": "Trọng tâm là đọc đúng yêu cầu của đề, xác định khái niệm hoặc kết quả cần tính, sau đó đối chiếu từng phương án với điều kiện đó.",
    "correct": "Chọn A. Silic -> Silic wafer -> Patterned Silicon Wafer -> Unpackaged Die -> Packaged Die -> Test. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_29": {
    "focus": "FPGA thuộc nhóm PLD, có ưu điểm lập trình lại, rủi ro/chi phí ban đầu thấp và thời gian triển khai nhanh; nhược điểm là chậm/tốn diện tích/công suất hơn ASIC.",
    "correct": "Chọn B. PLDs và ASIC vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_30": {
    "focus": "FPGA thuộc nhóm PLD, có ưu điểm lập trình lại, rủi ro/chi phí ban đầu thấp và thời gian triển khai nhanh; nhược điểm là chậm/tốn diện tích/công suất hơn ASIC.",
    "correct": "Chọn A. PLDs vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_31": {
    "focus": "Câu hỏi kiểm tra phân loại nền tảng lập trình được và vi mạch chuyên dụng.",
    "correct": "Chọn A. Programmable Logic Devices vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_32": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Application-Specific Integrated Circuit vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_33": {
    "focus": "FPGA thuộc nhóm PLD, có ưu điểm lập trình lại, rủi ro/chi phí ban đầu thấp và thời gian triển khai nhanh; nhược điểm là chậm/tốn diện tích/công suất hơn ASIC.",
    "correct": "Chọn C. Field Programmable Gate Array vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_34": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn A. SPLD, CPLD và FPGA vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_35": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn D. Semi – Custom và Full – Custom vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_36": {
    "focus": "FPGA thuộc nhóm PLD, có ưu điểm lập trình lại, rủi ro/chi phí ban đầu thấp và thời gian triển khai nhanh; nhược điểm là chậm/tốn diện tích/công suất hơn ASIC.",
    "correct": "Chọn C. Cả A và B đều đúng vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì trong các lựa chọn vẫn có đáp án đúng là C. Cả A và B đều đúng, nên không thể chọn 'Phương án C sai.'."
    }
  },
  "main_37": {
    "focus": "FPGA thuộc nhóm PLD, có ưu điểm lập trình lại, rủi ro/chi phí ban đầu thấp và thời gian triển khai nhanh; nhược điểm là chậm/tốn diện tích/công suất hơn ASIC.",
    "correct": "Chọn D. Cả ba phương án không sai. vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_38": {
    "focus": "ASIC tối ưu cho ứng dụng cụ thể nên nhanh, ít transistor/công suất/diện tích hơn nếu sản xuất lớn, nhưng chi phí NRE cao, thời gian chế tạo lâu và không linh hoạt.",
    "correct": "Chọn D. Cả ba phương án trên không sai. vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_39": {
    "focus": "ASIC tối ưu cho ứng dụng cụ thể nên nhanh, ít transistor/công suất/diện tích hơn nếu sản xuất lớn, nhưng chi phí NRE cao, thời gian chế tạo lâu và không linh hoạt.",
    "correct": "Chọn D. Cả ba phương án trên không thể sai. vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_40": {
    "focus": "ASIC tối ưu cho ứng dụng cụ thể nên nhanh, ít transistor/công suất/diện tích hơn nếu sản xuất lớn, nhưng chi phí NRE cao, thời gian chế tạo lâu và không linh hoạt.",
    "correct": "Chọn A. Hiệu suất cao, tiêu thụ điện năng thấp, giá thành rẻ với số lượng lớn. vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_41": {
    "focus": "FPGA thuộc nhóm PLD, có ưu điểm lập trình lại, rủi ro/chi phí ban đầu thấp và thời gian triển khai nhanh; nhược điểm là chậm/tốn diện tích/công suất hơn ASIC.",
    "correct": "Chọn B. Sẳn có, chi phí phát triển thấp, thời gian tiếp thị ngắn, khả năng cấu hình lại. vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_42": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn A. FPGA vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_43": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn A. FPGA vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_44": {
    "focus": "Câu hỏi kiểm tra phân loại nền tảng lập trình được và vi mạch chuyên dụng.",
    "correct": "Chọn A. Simple Programmable Logic Device vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_45": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn B. Complex Programmable Logic Device vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_46": {
    "focus": "PAL thường lập trình một lần bằng mảng liên kết/cầu chì; GAL dùng EEPROM nên có thể xóa và lập trình lại.",
    "correct": "Chọn A. Sử dụng một mảng các tiếp điểm (switch,...), chúng được lặp trình bằng cách tác động vào các tiếp điểm. vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_47": {
    "focus": "Câu hỏi kiểm tra phân loại nền tảng lập trình được và vi mạch chuyên dụng.",
    "correct": "Chọn B. Sử dụng các mảng EEPROM để lưu trữ các tiếp điểm này thay switch. vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_48": {
    "focus": "Trọng tâm là đọc đúng yêu cầu của đề, xác định khái niệm hoặc kết quả cần tính, sau đó đối chiếu từng phương án với điều kiện đó.",
    "correct": "Chọn B. Product of Sums vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_49": {
    "focus": "Trọng tâm là đọc đúng yêu cầu của đề, xác định khái niệm hoặc kết quả cần tính, sau đó đối chiếu từng phương án với điều kiện đó.",
    "correct": "Chọn A. Sum of Product vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_50": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn A. Minterms vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "C": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "main_51": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn B. Maxterms vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "C": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "main_52": {
    "focus": "PAL thường lập trình một lần bằng mảng liên kết/cầu chì; GAL dùng EEPROM nên có thể xóa và lập trình lại.",
    "correct": "Chọn A. PAL, GAL vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_53": {
    "focus": "PAL thường lập trình một lần bằng mảng liên kết/cầu chì; GAL dùng EEPROM nên có thể xóa và lập trình lại.",
    "correct": "Chọn A. PAL có thể lập trình nhiều lần vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_54": {
    "focus": "Theo bộ câu hỏi môn học, quy trình thiết kế vi mạch trên cơ sở ASIC/FPGA được chia thành 7 tầng, đi từ mô tả HDL/mô phỏng/tổng hợp đến bố trí, đi dây, kiểm tra và tapeout.",
    "correct": "Chọn B. 3 vì tổng số tầng là 7.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "C": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình.",
      "D": "Sai vì phương án này là nhiệm vụ của tầng khác hoặc không phải bước được hỏi trong quy trình."
    }
  },
  "main_55": {
    "focus": "PLA/PAL liên quan đến hai tầng logic AND và OR để tạo dạng SOP/POS. Với SOP, tích AND tạo các product term trước, sau đó tầng OR cộng các tích lại.",
    "correct": "Chọn C. Đầu vào đảo và không đảo -> Tầng AND -> Tầng OR vì thứ tự/cấu trúc này đúng với cách tạo hàm logic trong PLA/PAL theo đề.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì đảo sai thứ tự tầng AND/OR hoặc thiếu đầu vào đảo/không đảo cần có.",
      "B": "Sai vì đảo sai thứ tự tầng AND/OR hoặc thiếu đầu vào đảo/không đảo cần có.",
      "D": "Sai vì đảo sai thứ tự tầng AND/OR hoặc thiếu đầu vào đảo/không đảo cần có."
    }
  },
  "main_56": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn B. CPLD vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_57": {
    "focus": "Câu hỏi hỏi thành phần cơ bản được liên kết trong mảng FPGA. FPGA không được tạo trực tiếp từ SPLD/CPLD riêng lẻ; tài nguyên logic chính là các CLB nối với nhau qua mạng định tuyến lập trình được.",
    "correct": "Chọn C. CLB vì CLB là khối logic cấu hình được trong FPGA.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là loại thiết bị/khái niệm khác, không phải khối logic cơ bản được hỏi trong mảng FPGA.",
      "B": "Sai vì phương án này là loại thiết bị/khái niệm khác, không phải khối logic cơ bản được hỏi trong mảng FPGA.",
      "D": "Sai vì phương án này là loại thiết bị/khái niệm khác, không phải khối logic cơ bản được hỏi trong mảng FPGA."
    }
  },
  "main_58": {
    "focus": "Câu hỏi hỏi đúng dạng viết tắt CLB trong FPGA. CLB là khối logic cấu hình được, chứa tài nguyên logic như LUT và flip-flop.",
    "correct": "Chọn A. Configurable Logic Block vì CLB viết tắt của Configurable Logic Block.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì đây không phải cách mở rộng đúng của từ CLB trong kiến trúc FPGA.",
      "C": "Sai vì đây không phải cách mở rộng đúng của từ CLB trong kiến trúc FPGA.",
      "D": "Sai vì đây không phải cách mở rộng đúng của từ CLB trong kiến trúc FPGA."
    }
  },
  "main_59": {
    "focus": "Câu hỏi hỏi đúng dạng viết tắt LUT. LUT là bảng tra cứu dùng để hiện thực hàm logic trong FPGA.",
    "correct": "Chọn B. Look-Up Table vì LUT viết tắt của Look-Up Table.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì đây không phải cách mở rộng đúng của LUT.",
      "C": "Sai vì đây không phải cách mở rộng đúng của LUT.",
      "D": "Sai vì đây không phải cách mở rộng đúng của LUT."
    }
  },
  "main_60": {
    "focus": "FPGA thuộc nhóm PLD, có ưu điểm lập trình lại, rủi ro/chi phí ban đầu thấp và thời gian triển khai nhanh; nhược điểm là chậm/tốn diện tích/công suất hơn ASIC.",
    "correct": "Chọn C. Full – Custom vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_61": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn B. CPLD vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_62": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn C. FPGA vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_63": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn C. Gate Array ASIC vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_64": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn B. Full custom asic vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_65": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn B. Gate array asic vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_66": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn D. Mảng cổng AND lập trình và mảng cổng OR cố định dùng để tạo hàm SOP. vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "B": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "C": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "main_67": {
    "focus": "PAL thường lập trình một lần bằng mảng liên kết/cầu chì; GAL dùng EEPROM nên có thể xóa và lập trình lại.",
    "correct": "Chọn B. CPLD vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_68": {
    "focus": "Trọng tâm là đọc đúng yêu cầu của đề, xác định khái niệm hoặc kết quả cần tính, sau đó đối chiếu từng phương án với điều kiện đó.",
    "correct": "Chọn C. Tài nguyên của chip, tốc độ của chip, sức mạnh của chip, giá thành của chip. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_69": {
    "focus": "CPLD được xây từ nhiều khối SPLD/macrocell kết nối với nhau qua mạng liên kết lập trình được.",
    "correct": "Chọn A. Standard cell asic vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_70": {
    "focus": "PAL thường lập trình một lần bằng mảng liên kết/cầu chì; GAL dùng EEPROM nên có thể xóa và lập trình lại.",
    "correct": "Chọn C. FPGA vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_71": {
    "focus": "PAL thường lập trình một lần bằng mảng liên kết/cầu chì; GAL dùng EEPROM nên có thể xóa và lập trình lại.",
    "correct": "Chọn A. Tế bào logic có cấu trúc phức tạp gồm flip flop d, 1 cấu trúc pal và cấu trúc nổi dậy bên trong có khuynh hướng tập trung. vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_72": {
    "focus": "PAL thường lập trình một lần bằng mảng liên kết/cầu chì; GAL dùng EEPROM nên có thể xóa và lập trình lại.",
    "correct": "Chọn D. Cấu trúc lut sử dụng bộ nhớ rất ít so với cấu trúc pal vì các mối nối cố định. vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_73": {
    "focus": "Trọng tâm là đọc đúng yêu cầu của đề, xác định khái niệm hoặc kết quả cần tính, sau đó đối chiếu từng phương án với điều kiện đó.",
    "correct": "Chọn B. 6 transistor chuyển mạch và 6 ô nhớ sram. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_74": {
    "focus": "Khả năng lập trình của CPLD/PLD đến từ các switch/kết nối có điều khiển. Nhờ các phần tử này, đường nối bên trong có thể được cấu hình theo hàm logic cần tạo.",
    "correct": "Chọn B. Các switch có điều khiển vì switch có điều khiển là phần tử tạo khả năng lập trình.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cổng NAND/AND hoặc dây nối cố định không giải thích được khả năng cấu hình lại kết nối.",
      "C": "Sai vì cổng NAND/AND hoặc dây nối cố định không giải thích được khả năng cấu hình lại kết nối.",
      "D": "Sai vì cổng NAND/AND hoặc dây nối cố định không giải thích được khả năng cấu hình lại kết nối."
    }
  },
  "main_75": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn D. Full custom asic vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_76": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn D. Cực g nối với ô nhớ sram. vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_77": {
    "focus": "Thanh ghi dịch là chuỗi flip-flop truyền dữ liệu qua từng tầng theo clock. Nếu chỉ lấy output cuối cùng là SISO; nếu lấy đủ q[3:0] là SIPO.",
    "correct": "Chọn C. Mạch giải mã vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_78": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. Hardware Description Language vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_79": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn D. Cả A và B vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_80": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. 1983 vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "C": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "D": "Sai vì con số này không phải giá trị/mốc đúng theo đề."
    }
  },
  "main_81": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. IEEE 1364 vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_82": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Cả A, B và C vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_83": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn D. Cả A và B vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_84": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn D. Cả A, B và C vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_85": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn D. module <module_name> (<module_terminal_list>); vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_86": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. [A-Z], [a-z], [0-9], _, $ vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_87": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. $ hoặc [0-9] hoặc - vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_88": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. 5_myproject vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_89": {
    "focus": "Bộ đếm là mạch tuần tự thay đổi giá trị theo clock. Nếu các FF không dùng chung clock mà clock tầng sau lấy từ ngõ ra tầng trước thì đó là bộ đếm không đồng bộ/ripple counter.",
    "correct": "Chọn A. _$Counter_Flipflop_ vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_90": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. // vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_91": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. /*....*/ vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_92": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn D. /* Nesting /* comments */ do not work */ vì đề hỏi phương án sai/không đúng/không hợp lệ; nội dung của phương án này là điểm lệch so với quy tắc cần kiểm tra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì đây không phải phát biểu sai/không hợp lệ cần tìm trong câu hỏi.",
      "B": "Sai vì đây không phải phát biểu sai/không hợp lệ cần tìm trong câu hỏi.",
      "C": "Sai vì đây không phải phát biểu sai/không hợp lệ cần tìm trong câu hỏi."
    }
  },
  "main_93": {
    "focus": "Câu hỏi kiểm tra logic 4 trạng thái của Verilog: 0, 1, X và Z.",
    "correct": "Chọn A. 0 vì đó là trạng thái/giá trị đúng theo mô phỏng Verilog.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng trạng thái logic mà đề đang hỏi.",
      "C": "Sai vì X là không xác định, khác với Z là tổng trở cao/không có driver.",
      "D": "Sai nếu câu đang hỏi reg mặc định hoặc mức không hỗ trợ; Z chỉ là high-impedance của net/tri-state."
    }
  },
  "main_94": {
    "focus": "Câu hỏi kiểm tra logic 4 trạng thái của Verilog: 0, 1, X và Z.",
    "correct": "Chọn B. 1 vì đó là trạng thái/giá trị đúng theo mô phỏng Verilog.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng trạng thái logic mà đề đang hỏi.",
      "C": "Sai vì X là không xác định, khác với Z là tổng trở cao/không có driver.",
      "D": "Sai nếu câu đang hỏi reg mặc định hoặc mức không hỗ trợ; Z chỉ là high-impedance của net/tri-state."
    }
  },
  "main_95": {
    "focus": "Câu hỏi kiểm tra logic 4 trạng thái của Verilog: 0, 1, X và Z.",
    "correct": "Chọn C. X vì đó là trạng thái/giá trị đúng theo mô phỏng Verilog.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng trạng thái logic mà đề đang hỏi.",
      "B": "Sai vì không đúng trạng thái logic mà đề đang hỏi.",
      "D": "Sai nếu câu đang hỏi reg mặc định hoặc mức không hỗ trợ; Z chỉ là high-impedance của net/tri-state."
    }
  },
  "main_96": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn D. Z vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_97": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. <size>’<radix> <value> vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_98": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. 1010|0101 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu."
    }
  },
  "main_99": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. 011|zzz|xxx|111 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_100": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. _ vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_101": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. 12'h0724 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu.",
      "B": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_102": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. Cả A, B và C vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_103": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. 1 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_104": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. 4'b1 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì x là không xác định; không được tự thêm x khi mở rộng một giá trị nhị phân xác định.",
      "C": "Sai vì x là không xác định; không được tự thêm x khi mở rộng một giá trị nhị phân xác định.",
      "D": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu."
    }
  },
  "main_105": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. 4'b01 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu.",
      "B": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu.",
      "D": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu."
    }
  },
  "main_106": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. Cả 3 trường hợp trên vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_107": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Thập phân vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_108": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. Tên định danh không đổi vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_109": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. parameter var_timer=2'b00; vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_110": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Cả A và B đều không sai vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì phương án tổng hợp này bao gồm ít nhất một ý không đúng."
    }
  },
  "main_111": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Cả A và B đều đúng vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_112": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. type [range] signal_name{signal_name}; vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_113": {
    "focus": "Mảng trong Verilog đặt chỉ số mảng sau tên biến. Ví dụ reg a [3:0] là 4 phần tử 1 bit; còn reg [3:0] a là một vector 4 bit.",
    "correct": "Chọn A. Z vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_114": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Cả A, B và C vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_115": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn D. Cả A, B và C vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_116": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Reg vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_117": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. 3 vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "integer i;\ni = 2.9;",
    "wrong": {
      "A": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "C": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "D": "Sai vì con số này không phải giá trị/mốc đúng theo đề."
    }
  },
  "main_118": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Time vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_119": {
    "focus": "Mảng trong Verilog đặt chỉ số mảng sau tên biến. Ví dụ reg a [3:0] là 4 phần tử 1 bit; còn reg [3:0] a là một vector 4 bit.",
    "correct": "Chọn D. Tất cả các phương án trên vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_120": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Reg vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_121": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. 13 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_122": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Xuất hiện trường hợp tràn. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì phương án tổng hợp này bao gồm ít nhất một ý không đúng."
    }
  },
  "main_123": {
    "focus": "Câu hỏi kiểm tra toán tử logic trong Verilog. Với toán tử logic, mọi giá trị khác 0 được xem là true, 0 là false; nếu kết quả không xác định do x thì trả về X.",
    "correct": "Chọn A. AND hai phần tử vì kết quả logic của biểu thức đúng như các bước tính.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x.",
      "C": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x.",
      "D": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x."
    }
  },
  "main_124": {
    "focus": "Câu hỏi kiểm tra toán tử logic trong Verilog. Với toán tử logic, mọi giá trị khác 0 được xem là true, 0 là false; nếu kết quả không xác định do x thì trả về X.",
    "correct": "Chọn B. OR hai phần tử vì kết quả logic của biểu thức đúng như các bước tính.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x.",
      "C": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x.",
      "D": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x."
    }
  },
  "main_125": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Đảo bit một phần tử vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_126": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. AND lần lượt các bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_127": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. OR lần lượt các bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_128": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. XOR lần lượt các bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_129": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. XNOR lần lượt các bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_130": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. Đảo giá trị từng bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_131": {
    "focus": "Câu hỏi kiểm tra toán tử logic trong Verilog. Với toán tử logic, mọi giá trị khác 0 được xem là true, 0 là false; nếu kết quả không xác định do x thì trả về X.",
    "correct": "Chọn A. 0 vì kết quả logic của biểu thức đúng như các bước tính.",
    "steps": [
      "A=5 là true",
      "B=0 là false",
      "true && false = 0"
    ],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x.",
      "C": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x.",
      "D": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x."
    }
  },
  "main_132": {
    "focus": "Câu hỏi kiểm tra toán tử logic trong Verilog. Với toán tử logic, mọi giá trị khác 0 được xem là true, 0 là false; nếu kết quả không xác định do x thì trả về X.",
    "correct": "Chọn B. 1 vì kết quả logic của biểu thức đúng như các bước tính.",
    "steps": [
      "A=5 là true",
      "B=0 nên !B = 1",
      "true || true = 1"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x.",
      "C": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x.",
      "D": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x."
    }
  },
  "main_133": {
    "focus": "Câu hỏi kiểm tra toán tử logic trong Verilog. Với toán tử logic, mọi giá trị khác 0 được xem là true, 0 là false; nếu kết quả không xác định do x thì trả về X.",
    "correct": "Chọn C. X vì kết quả logic của biểu thức đúng như các bước tính.",
    "steps": [
      "C=x là không xác định",
      "B=0 là false",
      "x || 0 không thể kết luận true/false",
      "=> kết quả X"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x.",
      "B": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x.",
      "D": "Sai vì phương án này tính nhầm quy tắc true/false của toán tử logic hoặc xử lý sai giá trị x."
    }
  },
  "main_134": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. 0101 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_135": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. 1 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_136": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. NOR lần lượt các bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_137": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. NAND lần lượt các bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_138": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. 0010 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "a = 4'b1010;\nc = a >> 2;",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_139": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. {op1, op2, ..} vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_140": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. 101_0101 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_141": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. 010_11_1 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_142": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Không thực hiện được vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_143": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. 1111_010_101101 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_144": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn D. 1 vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_145": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. X vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì con số này không phải giá trị/mốc đúng theo đề."
    }
  },
  "main_146": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. X vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì con số này không phải giá trị/mốc đúng theo đề."
    }
  },
  "main_147": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. 0, 1, x vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_148": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. 0, 1 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_149": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. 0 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_150": {
    "focus": "Câu hỏi kiểm tra khác nhau giữa == và === trong Verilog. Toán tử == là logical equality; nếu toán hạng chứa X hoặc Z thì kết quả có thể là X vì mô phỏng không thể kết luận true/false chắc chắn.",
    "correct": "Chọn C. X vì toán tử == với x/z trả về x, không trả về 1.",
    "steps": [
      "4'b1z0x == 4'b1z0x",
      "Hai vế giống ký tự, nhưng có z và x",
      "Với ==, x/z không được coi như giá trị 0/1 xác định",
      "=> kết quả là x",
      "Nếu dùng === thì mới so sánh cả x và z như giá trị cụ thể"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "B": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "D": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định."
    }
  },
  "main_151": {
    "focus": "Câu hỏi kiểm tra khác nhau giữa == và === trong Verilog. Toán tử == là logical equality; nếu toán hạng chứa X hoặc Z thì kết quả có thể là X vì mô phỏng không thể kết luận true/false chắc chắn.",
    "correct": "Chọn D. 1 vì toán tử == với x/z trả về x, không trả về 1.",
    "steps": [
      "4'b1z0x == 4'b1z0x",
      "Hai vế giống ký tự, nhưng có z và x",
      "Với ==, x/z không được coi như giá trị 0/1 xác định",
      "=> kết quả là x",
      "Nếu dùng === thì mới so sánh cả x và z như giá trị cụ thể"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "B": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "C": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định."
    }
  },
  "main_152": {
    "focus": "Câu hỏi kiểm tra khác nhau giữa == và === trong Verilog. Toán tử == là logical equality; nếu toán hạng chứa X hoặc Z thì kết quả có thể là X vì mô phỏng không thể kết luận true/false chắc chắn.",
    "correct": "Chọn A. 0 vì toán tử == với x/z trả về x, không trả về 1.",
    "steps": [
      "4'b1z0x == 4'b1z0x",
      "Hai vế giống ký tự, nhưng có z và x",
      "Với ==, x/z không được coi như giá trị 0/1 xác định",
      "=> kết quả là x",
      "Nếu dùng === thì mới so sánh cả x và z như giá trị cụ thể"
    ],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "C": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "D": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định."
    }
  },
  "main_153": {
    "focus": "Câu hỏi hỏi cú pháp toán tử điều kiện ba ngôi trong Verilog. Cú pháp đúng là điều_kiện ? biểu_thức_khi_đúng : biểu_thức_khi_sai.",
    "correct": "Chọn B. cond_expr ? true_expr : false_expr vì có đủ dấu ? và dấu : đúng vị trí.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì thiếu dấu : hoặc đặt nhầm dấu ?/: nên không đúng cú pháp toán tử điều kiện.",
      "C": "Sai vì thiếu dấu : hoặc đặt nhầm dấu ?/: nên không đúng cú pháp toán tử điều kiện.",
      "D": "Sai vì thiếu dấu : hoặc đặt nhầm dấu ?/: nên không đúng cú pháp toán tử điều kiện."
    }
  },
  "main_154": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. MUX vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_155": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. MUX 4x1 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_156": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. X vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_157": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. 65524 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_158": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. + - ! ~ vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_159": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. Condition vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_160": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. assign #del <id> = <expr>; vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_161": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Cả A, B và C vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_162": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. Các chương trình được thực hiện tuần tự vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì phương án tổng hợp này bao gồm ít nhất một ý không đúng."
    }
  },
  "main_163": {
    "focus": "Khối initial chạy một lần từ thời điểm 0 trong mô phỏng/testbench; nhiều khối initial chạy song song với nhau.",
    "correct": "Chọn B. Bắt đầu tại thời điểm mô phỏng và kết thúc tại câu lệnh cuối cùng trong nó. vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_164": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. Bắt đầu tại thời điểm mô phỏng và lặp lại mãi mãi cho đến hết thời gian mô phỏng. vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_165": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Reg vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_166": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Bất kì sự thay đổi nào từ các biến vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_167": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Bất kì sự thay đổi nào từ A, B hoặc sel vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_168": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn B. Khi có sự thay đổi cạnh lên của xung clk vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "C": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "main_169": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. Khi tín hiệu ctrl lên mức 1 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "always\nbegin\n  wait (ctrl)\n  #10 cnt = cnt + 1;\n  #10 cnt2 = cnt2 + 2;\nend",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_170": {
    "focus": "Khối initial chạy một lần từ thời điểm 0 trong mô phỏng/testbench; nhiều khối initial chạy song song với nhau.",
    "correct": "Chọn D. 20 đơn vị thời gian vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "initial begin\n  clk = 0;\n  forever #10 clk = ~clk;\nend",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_171": {
    "focus": "Câu hỏi kiểm tra phân loại nền tảng lập trình được và vi mạch chuyên dụng.",
    "correct": "Chọn A. Trong quá trình vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_172": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Một chuỗi liên tục theo định dạng vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_173": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. Các chuỗi rời rạc theo từng khoảng thời gian vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_174": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Giá trị ở hệ bát phân vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_175": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Hệ thập phân vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_176": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. 50ns vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_177": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. C, foxtran, java. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_178": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Thực hiện tuần tự. vì đề hỏi phương án sai/không đúng/không hợp lệ; nội dung của phương án này là điểm lệch so với quy tắc cần kiểm tra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì đây không phải phát biểu sai/không hợp lệ cần tìm trong câu hỏi.",
      "B": "Sai vì đây không phải phát biểu sai/không hợp lệ cần tìm trong câu hỏi.",
      "D": "Sai vì đây không phải phát biểu sai/không hợp lệ cần tìm trong câu hỏi."
    }
  },
  "main_179": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Các thành phần nhỏ hơn, các dây dẫn kết nối các ngõ vào và các ngõ ra của các thành phần. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_180": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. Hai phần chính là khai báo entity và architecture. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_181": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. Chứa các hoạt động bên trong hoặc tổ chức của mạch điện. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_182": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Chỉ có mạch điện nào nối với tín hiệu đó thì bị kích hoạt. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_183": {
    "focus": "Hằng nhị phân Verilog dùng dạng <độ rộng>'b<giá trị>, ví dụ 4'b0110. Các cách như 0b0110 hoặc 0110b không phải cú pháp hằng Verilog chuẩn trong bộ câu hỏi này.",
    "correct": "Chọn B. Tổng số bit 1 là chẵn. vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_184": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Chứa các khai báo vào ra của mạch điện số. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_185": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. Các lệnh đồng thời. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_186": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn D. X vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_187": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn B. Ít nhất một ngõ vào bằng 1 vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án B khớp yêu cầu đề.",
      "C": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án B khớp yêu cầu đề.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_188": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. Một mô tả hành vi của hàm f vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì trong các lựa chọn vẫn có đáp án đúng là D. Một mô tả hành vi của hàm f, nên không thể chọn 'Tất cả đều sai'.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_189": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. Để tạo ra một mạch từ một đặc điểm kỹ thuật nhất định. vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_190": {
    "focus": "Mảng trong Verilog đặt chỉ số mảng sau tên biến. Ví dụ reg a [3:0] là 4 phần tử 1 bit; còn reg [3:0] a là một vector 4 bit.",
    "correct": "Chọn C. Z vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_191": {
    "focus": "Logic Verilog cơ bản dùng bốn trạng thái 0, 1, X và Z. Các ký hiệu ngoài nhóm này không phải mức logic chuẩn của Verilog.",
    "correct": "Chọn D. U vì đó là trạng thái/giá trị đúng theo mô phỏng Verilog.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng trạng thái logic mà đề đang hỏi.",
      "B": "Sai vì X là không xác định, khác với Z là tổng trở cao/không có driver.",
      "C": "Sai nếu câu đang hỏi reg mặc định hoặc mức không hỗ trợ; Z chỉ là high-impedance của net/tri-state."
    }
  },
  "main_192": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Trì hoãn mô phỏng vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì trong các lựa chọn vẫn có đáp án đúng là C. Trì hoãn mô phỏng, nên không thể chọn 'Tất cả đều sai'."
    }
  },
  "main_193": {
    "focus": "FPGA thuộc nhóm PLD, có ưu điểm lập trình lại, rủi ro/chi phí ban đầu thấp và thời gian triển khai nhanh; nhược điểm là chậm/tốn diện tích/công suất hơn ASIC.",
    "correct": "Chọn C. Cả A và D vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_194": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn C. Khi đường dây đầu ra được cách ly về điện. vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì trong các lựa chọn vẫn có đáp án đúng là C. Khi đường dây đầu ra được cách ly về điện., nên không thể chọn 'Tất cả đều sai.'.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_195": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. 100ns/110ps vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_196": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. xxxx vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì trong các lựa chọn vẫn có đáp án đúng là C. xxxx, nên không thể chọn 'Tất cả đều sai'.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_197": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. 6'b111000 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "wire [7:0] A;\nwire B;\nassign B = ~|A;",
    "wrong": {
      "A": "Sai vì trong các lựa chọn vẫn có đáp án đúng là C. 6'b111000, nên không thể chọn 'Tất cả đều sai'.",
      "B": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu.",
      "D": "Sai vì độ rộng/cơ số hoặc phần bit mở rộng không khớp với giá trị đề yêu cầu."
    }
  },
  "main_198": {
    "focus": "Hằng nhị phân Verilog dùng dạng <độ rộng>'b<giá trị>, ví dụ 4'b0110. Các cách như 0b0110 hoặc 0110b không phải cú pháp hằng Verilog chuẩn trong bộ câu hỏi này.",
    "correct": "Chọn A. 255 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_199": {
    "focus": "FPGA thuộc nhóm PLD, có ưu điểm lập trình lại, rủi ro/chi phí ban đầu thấp và thời gian triển khai nhanh; nhược điểm là chậm/tốn diện tích/công suất hơn ASIC.",
    "correct": "Chọn A. FPGA vì phương án này đúng với định nghĩa/đặc điểm của nền tảng được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "C": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt.",
      "D": "Sai vì phương án này thuộc nhóm công nghệ khác, đảo nhầm ưu/nhược điểm hoặc sai định nghĩa viết tắt."
    }
  },
  "main_200": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. Số thập lục phân 32 bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_201": {
    "focus": "Câu hỏi kiểm tra khác nhau giữa == và === trong Verilog. Toán tử == là logical equality; nếu toán hạng chứa X hoặc Z thì kết quả có thể là X vì mô phỏng không thể kết luận true/false chắc chắn.",
    "correct": "Chọn B. 0 vì toán tử == với x/z trả về x, không trả về 1.",
    "steps": [
      "4'b1z0x == 4'b1z0x",
      "Hai vế giống ký tự, nhưng có z và x",
      "Với ==, x/z không được coi như giá trị 0/1 xác định",
      "=> kết quả là x",
      "Nếu dùng === thì mới so sánh cả x và z như giá trị cụ thể"
    ],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "C": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định.",
      "D": "Sai vì phương án này đang hiểu nhầm == như === hoặc coi x/z là bit xác định."
    }
  },
  "main_202": {
    "focus": "Hằng nhị phân Verilog dùng dạng <độ rộng>'b<giá trị>, ví dụ 4'b0110. Các cách như 0b0110 hoặc 0110b không phải cú pháp hằng Verilog chuẩn trong bộ câu hỏi này.",
    "correct": "Chọn C. -128 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_203": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. 20 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_204": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. 27 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_205": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. 00111110 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì trong các lựa chọn vẫn có đáp án đúng là B. 00111110, nên không thể chọn 'Tất cả đều sai'.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_206": {
    "focus": "Primitive gate AND trong Verilog viết dạng and (output, input1, input2, input3). Trong biểu thức logic, phép AND theo bit là &, không phải từ khóa and.",
    "correct": "Chọn A. Tất cả các đầu vào đều ở mức 1. vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "D": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án A khớp yêu cầu đề."
    }
  },
  "main_207": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. Cần thiết vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì trong các lựa chọn vẫn có đáp án đúng là C. Cần thiết, nên không thể chọn 'Tất cả đều sai'."
    }
  },
  "main_208": {
    "focus": "Cổng NOR chỉ cho ngõ ra 1 khi tất cả ngõ vào đều 0. Nếu có bất kỳ ngõ vào 1 thì OR đã bằng 1 và NOR bằng 0.",
    "correct": "Chọn A. Tất cả các đầu vào đều ở mức 0. vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "D": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án A khớp yêu cầu đề."
    }
  },
  "main_209": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Một mạch tổ hợp thực hiện chức năng cổng XOR vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module mydesign (a, b);\n  input [1:0] b;\n  output reg a;\n\n  always @(b) begin\n    if (b == 2'b00)\n      a = 1'b0;\n    else if (b == 2'b11)\n      a = 1'b0;\n    else\n      a = 1'b1;\n  end\nendmodule",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_210": {
    "focus": "Khối initial chạy một lần từ thời điểm 0 trong mô phỏng/testbench; nhiều khối initial chạy song song với nhau.",
    "correct": "Chọn A. Nó được sử dụng để chỉ định một khối thủ tục chỉ được thực hiện một lần vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_211": {
    "focus": "Câu hỏi kiểm tra cấu trúc tạo hàm SOP/POS trong các mảng logic lập trình được. Với SOP, tầng AND lập trình tạo product terms, sau đó tầng OR cố định/lập trình tùy cấu trúc sẽ cộng các product terms.",
    "correct": "Chọn C. always @(posedge clk or negedge clear) vì phương án này đúng với cách tạo hàm SOP/POS mà đề đang hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "B": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi.",
      "D": "Sai vì phương án này đảo nhầm vai trò mảng AND/OR hoặc nói cả hai cố định/lập trình không đúng với cấu trúc được hỏi."
    }
  },
  "main_212": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn D. Chỉ A và C đúng vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án tổng hợp này bao gồm ít nhất một ý không đúng.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_213": {
    "focus": "Khối initial chạy một lần từ thời điểm 0 trong mô phỏng/testbench; nhiều khối initial chạy song song với nhau.",
    "correct": "Chọn C. Giá trị của x được in 15 lần vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "integer x, y;\n\ninitial begin\n  x = 15;\n  y = 10;\nend\n\ninitial\n  repeat (x) $display(\"x=%d\", x);\n\ninitial\n  while (y < 12) begin\n    y = y + 1;\n    x = x - 1;\n  end",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_214": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Các cạnh lên của xung clock xuất hiện vào các thời điểm 5, 15, 25, 35,.. vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "initial clk = 1'b0;\nalways #5 clk = ~clk;",
    "wrong": {
      "A": "Sai vì trong các lựa chọn vẫn có đáp án đúng là C. Các cạnh lên của xung clock xuất hiện vào các thời điểm 5, 15, 25, 35,.., nên không thể chọn 'Tất cả đều sai'.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_215": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. Cả A và D vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_216": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. Bốn Flip Flop D đều chứa dữ liệu của ngõ vào D in. vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "always @(posedge clock) begin\n  data3 = din;\n  data2 = data3;\n  data1 = data2;\n  data0 = data1;\nend",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì trong các lựa chọn vẫn có đáp án đúng là D. Bốn Flip Flop D đều chứa dữ liệu của ngõ vào D in., nên không thể chọn 'Tất cả đều sai'."
    }
  },
  "main_217": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Cả A và C đều đúng vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì assign liên tục không dùng để drive reg theo quy tắc Verilog cổ điển trong đề.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_218": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Tất cả đều sai vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_219": {
    "focus": "Khối initial chạy một lần từ thời điểm 0 trong mô phỏng/testbench; nhiều khối initial chạy song song với nhau.",
    "correct": "Chọn B. 51 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "integer a, b, c, d;\n\ninitial begin\n  a = 25;\n  b = 12;\n  c = 5;\n  d = 17;\n  a = b + c;\n  b = a - 15;\n  c = a + d;\n  d = c + d;\nend",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_220": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. Nó chỉ định độ trễ 5 đơn vị thời gian trước khi thực hiện câu lệnh tiếp theo vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_221": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Tất cả các biến sẽ nhận được giá trị được lưu trữ trước đó trong \"x\" vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "always @(posedge clock) begin\n  y = x;\n  z = y;\n  x = z;\nend",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án D khớp yêu cầu đề.",
      "C": "Sai vì không phải tất cả các phương án đều đúng; chỉ phương án D khớp yêu cầu đề."
    }
  },
  "main_222": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. Chỉ A và C đúng vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module guess (data, cond, result);\n  input [7:0] data;\n  input [1:0] cond;\n  output reg result;\n\n  always @(data) begin\n    if (cond == 2'b00)\n      result = |data;\n    else\n      result = data;\n  end\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_223": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. Chỉ A và B đúng vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module mydesign (a, b, c);\n  input c;\n  output reg a, b;\n\n  always @(c) begin\n    if (c == 1'b0) begin\n      b <= ~a;\n      a <= ~(c | b);\n    end else if (c == 1'b1) begin\n      a <= ~(b * c);\n    end\n  end\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_224": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Phụ thuộc vào trạng thái của xung clock vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "always @(posedge clock)\n  a = b;\n\nalways @(posedge clock)\n  b = a;",
    "wrong": {
      "A": "Sai vì trong các lựa chọn vẫn có đáp án đúng là D. Phụ thuộc vào trạng thái của xung clock, nên không thể chọn 'Tất cả đều sai'.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_225": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Mạch chốt 1 bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "assign d = ~(c | b);\nassign c = ~(a | d);",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_226": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn E. Cả B và C vì đề hỏi phương án sai/không đúng/không hợp lệ; nội dung của phương án này là điểm lệch so với quy tắc cần kiểm tra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì đây không phải phát biểu sai/không hợp lệ cần tìm trong câu hỏi.",
      "B": "Sai vì đây không phải phát biểu sai/không hợp lệ cần tìm trong câu hỏi.",
      "C": "Sai vì đây không phải phát biểu sai/không hợp lệ cần tìm trong câu hỏi.",
      "D": "Sai vì đây không phải phát biểu sai/không hợp lệ cần tìm trong câu hỏi."
    }
  },
  "main_227": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Khối sẽ không bao giờ chấm dứt vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "output reg clk1, clk2;\n\ninitial begin\n  clk1 = 1'b0;\n  clk2 = 1'b1;\n\n  forever clk1 = !clk1;\n\n  repeat (5) #5 clk2 = ~clk2;\n  #75 $finish;\nend",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "E": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_228": {
    "focus": "Câu hỏi hỏi tác giả/người phát triển Verilog theo nội dung đề. Trong bộ câu hỏi này đáp án được lấy là Moorby and Thomson.",
    "correct": "Chọn D. Moorby and Thomson vì đây là tên đúng theo đáp án của đề.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì chỉ nêu thiếu tên hoặc là tên thuộc ngữ cảnh/ngôn ngữ khác.",
      "B": "Sai vì chỉ nêu thiếu tên hoặc là tên thuộc ngữ cảnh/ngôn ngữ khác.",
      "C": "Sai vì chỉ nêu thiếu tên hoặc là tên thuộc ngữ cảnh/ngôn ngữ khác."
    }
  },
  "main_229": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Verilog vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_230": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. VHDL vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_231": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn A. VHDL vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_232": {
    "focus": "Trọng tâm là quy tắc Verilog. Dây kiểu net/wire thường được điều khiển bằng assign liên tục hoặc primitive gate; biến kiểu reg được gán trong khối thủ tục always/initial. Các khối always/initial chạy song song với nhau, nhưng câu lệnh bên trong một block begin-end chạy theo thứ tự mô phỏng.",
    "correct": "Chọn C. Verilog vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_233": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. Tên module vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module (a, b, ci, r, co);\n  input a, b, ci;\n  output r, co;\n\n  assign r  = a ^ b ^ ci;\n  assign co = a & ci + a & b + b & cin;\nendmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_234": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Bộ cộng 4 bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module Adder(A, B, R);\n  input  [3:0] A;\n  input  [3:0] B;\n  output [4:0] R;\n  wire c1, c2, c3;\n\n  FullAdder add0(.a(A[0]), .b(B[0]), .ci(1'b0), .co(c1), .r(R[0]));\n  FullAdder add1(.a(A[1]), .b(B[1]), .ci(c1),   .co(c2), .r(R[1]));\n  FullAdder add2(.a(A[2]), .b(B[2]), .ci(c2),   .co(c3), .r(R[2]));\n  FullAdder add3(.a(A[3]), .b(B[3]), .ci(c3),   .co(R[4]), .r(R[3]));\nendmodule",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_235": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. Cổng AND vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "wire A, B, Y;\nassign Y = A & B;",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_236": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. ENCODER vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module Mymodule(I, O);\n  input [3:0] I;\n  output reg [1:0] O;\n\n  always @(I) begin\n    if      (I == 4'b0001) O = 2'b00;\n    else if (I == 4'b0010) O = 2'b01;\n    else if (I == 4'b0100) O = 2'b10;\n    else if (I == 4'b1000) O = 2'b11;\n  end\nendmodule",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_237": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. DECODER vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module Mymodule(I, O);\n  input [1:0] I;\n  output reg [3:0] O;\n\n  always @(I) begin\n    if      (I == 2'b00) O = 4'b0001;\n    else if (I == 2'b01) O = 4'b0010;\n    else if (I == 2'b10) O = 4'b0100;\n    else                 O = 4'b1000;\n  end\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_238": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. 1011 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module Mymodule(I, O, EN, HL);\n  input [1:0] I;\n  input EN, HL;\n  output [3:0] O;\n  reg [3:0] temp;\n\n  always @(I, EN, HL) begin\n    if (EN == 0)\n      temp = 4'b0000;\n    else begin\n      if      (I == 2'b00) temp = 4'b0001;\n      else if (I == 2'b01) temp = 4'b0010;\n      else if (I == 2'b10) temp = 4'b0100;\n      else                 temp = 4'b1000;\n    end\n  end\n\n  assign O = (HL == 1'b1) ? temp : ~temp;\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_239": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. Không tồn tại vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module Mymodule(I, O, EN, HL);\n  input [1:0] I;\n  input EN, HL;\n  output [3:0] O;\n  reg [3:0] temp;\n\n  always @(I, EN, HL) begin\n    if (EN == 0)\n      temp = 4'b0000;\n    else begin\n      if      (I == 2'b00) temp = 4'b0001;\n      else if (I == 2'b01) temp = 4'b0010;\n      else if (I == 2'b10) temp = 4'b0100;\n      else                 temp = 4'b1000;\n    end\n  end\n\n  assign O = (HL == 1'b1) ? temp : ~temp;\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_240": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. 0000 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module Mymodule(I, O, EN, HL);\n  input [1:0] I;\n  input EN, HL;\n  output [3:0] O;\n  reg [3:0] temp;\n\n  always @(I, EN, HL) begin\n    if (EN == 0)\n      temp = 4'b0000;\n    else begin\n      if      (I == 2'b00) temp = 4'b0001;\n      else if (I == 2'b01) temp = 4'b0010;\n      else if (I == 2'b10) temp = 4'b0100;\n      else                 temp = 4'b1000;\n    end\n  end\n\n  assign O = (HL == 1'b1) ? temp : ~temp;\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_241": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. MUX vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "always @(I, sel) begin\n  if      (sel == 2'b00) O = I[0];\n  else if (sel == 2'b01) O = I[1];\n  else if (sel == 2'b10) O = I[2];\n  else                   O = I[3];\nend",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_242": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. DEMUX vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "always @(I, sel) begin\n  if      (sel == 2'b00) O = {3'b000, I};\n  else if (sel == 2'b01) O = {2'b00, I, 1'b0};\n  else if (sel == 2'b10) O = {1'b0, I, 2'b00};\n  else                   O = {I, 3'b000};\nend",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_243": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Cộng bán phần vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module MYMODULE(A, B, C, S);\n  input A, B;\n  output reg C, S;\n\n  always @(A, B) begin\n    C = A & B;\n    S = A ^ B;\n  end\nendmodule",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_244": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. Cộng toàn phần vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module FULL_ADDER(A, B, CI, S, CO);\n  input A, B, CI;\n  output CO, S;\n\n  assign S  = A ^ B ^ CI;\n  assign CO = (A & B) + (B & CI) + (A & CI);\nendmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_245": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. 1 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_246": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. 3 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_247": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. 6 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_248": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. 9 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_249": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. 10 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_250": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. 15 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_251": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. 16 vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_252": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Kiểu biến vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_253": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Từ khóa vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_254": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn C. Tên định danh vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "(1)  module F_(ADDER)(a, b, s, ci, co);\n(2)    input a, b, ci;\n(3)    output co, s\n(4)    assign s = a ^ b ^ ci;\n(5)    assign co = a & b + (b & co) + a & co;\n(6)  endmodule;\n(7)  module ADDER_4B(A, B, S);\n(8)    input wire [3:0] A;\n(9)    input [3:-1] B;\n(10)   output reg [4:0] S;\n(11)   wire c1, c2, c3;\n(12)   F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0),  .co(c1));\n(13)   F_ADDER fad1(.a(A[1]), .b(B[1]), .s(S[1]), .ci(c1), .co(c2));\n(14)   F_ADDER fad2(.a(A[2]), .ci(c2), .b(B[2]), .s(S[2]), .co(c3));\n(15)   F_ADDER ADDER_4B(.a(A[3]), .b(B[3]), .s(S[3]), .ci(c3), .co(S[4]));\n(16) Endmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_255": {
    "focus": "Trọng tâm là mạch tuần tự. Mạch tuần tự dùng flip-flop/thanh ghi để lưu trạng thái theo cạnh clock; thanh ghi dịch chuyển dữ liệu theo từng xung, còn bộ đếm thay đổi giá trị trạng thái theo quy luật.",
    "correct": "Chọn D. Cả A, B và C vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_256": {
    "focus": "Trọng tâm là mạch tuần tự. Mạch tuần tự dùng flip-flop/thanh ghi để lưu trạng thái theo cạnh clock; thanh ghi dịch chuyển dữ liệu theo từng xung, còn bộ đếm thay đổi giá trị trạng thái theo quy luật.",
    "correct": "Chọn D. Cả A, B và C vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_257": {
    "focus": "Trọng tâm là mạch tuần tự. Mạch tuần tự dùng flip-flop/thanh ghi để lưu trạng thái theo cạnh clock; thanh ghi dịch chuyển dữ liệu theo từng xung, còn bộ đếm thay đổi giá trị trạng thái theo quy luật.",
    "correct": "Chọn A. 2 vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "C": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "D": "Sai vì con số này không phải giá trị/mốc đúng theo đề."
    }
  },
  "main_258": {
    "focus": "Trọng tâm là mạch tuần tự. Mạch tuần tự dùng flip-flop/thanh ghi để lưu trạng thái theo cạnh clock; thanh ghi dịch chuyển dữ liệu theo từng xung, còn bộ đếm thay đổi giá trị trạng thái theo quy luật.",
    "correct": "Chọn C. Cả A và B đều đúng vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì phương án tổng hợp này bao gồm ít nhất một ý không đúng."
    }
  },
  "main_259": {
    "focus": "Trọng tâm là mạch tuần tự. Mạch tuần tự dùng flip-flop/thanh ghi để lưu trạng thái theo cạnh clock; thanh ghi dịch chuyển dữ liệu theo từng xung, còn bộ đếm thay đổi giá trị trạng thái theo quy luật.",
    "correct": "Chọn B. Mạch chốt SR vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_260": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. Mạch chốt SR vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module RS_LATCH(\n  input wire R, S, CLK,\n  output reg Q, Qb\n);\n\nalways @(R, S, CLK) begin\n  if ((CLK == 1) && (S == 0) && (R == 1)) begin\n    Q = 0; Qb = 1;\n  end else if ((CLK == 1) && (S == 1) && (R == 0)) begin\n    Q = 1; Qb = 0;\n  end\nend\nendmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_261": {
    "focus": "Trọng tâm là mạch tuần tự. Mạch tuần tự dùng flip-flop/thanh ghi để lưu trạng thái theo cạnh clock; thanh ghi dịch chuyển dữ liệu theo từng xung, còn bộ đếm thay đổi giá trị trạng thái theo quy luật.",
    "correct": "Chọn A. Mạch chốt D vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_262": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Mạch chốt D vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module D_L(clk, D, q);\n  input D, clk;\n  output reg q;\n\n  always @(clk, D)\n    if (clk)\n      q = D;\nendmodule",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_263": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Flip Flop D vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module DFF(clk, D, q);\n  input D, clk;\n  output reg q;\n\n  always @(posedge clk) begin\n    q = D;\n  end\nendmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_264": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn D. Flip Flop T vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module T_FF(T, Q, QB, CLK);\n  input T, CLK;\n  output reg Q, QB;\n\n  always @(posedge CLK) begin\n    if (T == 1) begin\n      Q  = ~Q;\n      QB = ~QB;\n    end\n  end\nendmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_265": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Thanh ghi dịch 4 bit vào nối tiếp ra nối tiếp vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module DFF(clk, D, q);\n  input D, clk;\n  output reg q;\n\n  always @(posedge clk) begin\n    q = D;\n  end\nendmodule\n\nmodule SRSS(in, clk, out);\n  input in, clk;\n  output reg out;\n  wire q1, q2, q3;\n\n  DFF dff1(.clk(clk), .d(in), .q(q1));\n  DFF dff2(.clk(clk), .d(q1), .q(q2));\n  DFF dff3(.clk(clk), .d(q2), .q(q3));\n  DFF dff4(.clk(clk), .d(q3), .q(out));\nendmodule",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_266": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. Thanh ghi dịch 4 bit vào nối tiếp ra song song vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module DFF(C, D, q);\n  input C, D;\n  output reg q;\n\n  always @(posedge C) begin\n    q = D;\n  end\nendmodule\n\nmodule SRSP(C, in, q);\n  input C, in;\n  output [3:0] q;\n\n  DFF D1(.C(C), .D(in),   .q(q[0]));\n  DFF D2(.C(C), .D(q[0]), .q(q[1]));\n  DFF D3(.C(C), .D(q[1]), .q(q[2]));\n  DFF D4(.C(C), .D(q[2]), .q(q[3]));\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_267": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. Mạch đếm lên xuống 4 bit có điều khiển vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module UP_COUNTER4B_RST_SP_UD(clk, rst, sp, count, ud);\n  input sp, clk, rst, ud;\n  output reg [3:0] count;\n\n  always @(posedge clk) begin\n    if (rst == 1)\n      count = 4'b0000;\n    else if (sp == 1)\n      if (ud == 1)\n        count = count + 1;\n      else\n        count = count - 1;\n    else\n      count = count;\n  end\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_268": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Mạch đếm lên không đồng bộ 3 bit vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module TFF(T, Q, QB, CLK);\n  input T, CLK;\n  output reg Q, QB;\n\n  always @(posedge CLK)\n    if (T == 1) begin\n      Q  = ~Q;\n      QB = ~QB;\n    end\nendmodule\n\nmodule COUNTER_TTF(clk, q);\n  input clk;\n  output [2:0] q;\n  wire qb1, qb2;\n\n  TFF tff1(.T(1'b1), .Q(q[0]), .QB(qb1), .CLK(clk));\n  TFF tff2(.T(1'b1), .Q(q[1]), .QB(qb2), .CLK(qb1));\n  TFF tff3(.T(1'b1), .Q(q[2]), .CLK(qb2));\nendmodule",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_269": {
    "focus": "Trọng tâm là mạch tuần tự. Mạch tuần tự dùng flip-flop/thanh ghi để lưu trạng thái theo cạnh clock; thanh ghi dịch chuyển dữ liệu theo từng xung, còn bộ đếm thay đổi giá trị trạng thái theo quy luật.",
    "correct": "Chọn A. Flip Flop T vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_270": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Sáng dịch từ trái sang phải vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "always @(posedge clk)\n  if (rst == 1)\n    led = 8'b1000_0000;\n  else if (led == 8'b0000_0000)\n    led = 8'b1000_0000;\n  else\n    led = led >> 1;",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_271": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Sáng dịch từ ngoài vào trong vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "always @(posedge clk) begin\n  if (rst == 1)\n    led = 8'b1000_0001;\n  else begin\n    if (led == 8'b0000_0000)\n      led = 8'b1000_0001;\n    else begin\n      led[3:0] = led[3:0] << 1;\n      led[7:4] = led[7:4] >> 1;\n    end\n  end\nend",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_272": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn B. Sáng dần từ trái sang phải vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "always @(posedge clk)\n  if (rst == 1)\n    led = 8'b1000_0000;\n  else if (led == 8'b1111_1111)\n    led = 8'b0000_0000;\n  else\n    led = (led >> 1) + 8'b1000_0000;",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_273": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Sáng dần từ ngoài vào trong vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "if (led == 8'b1111_1111)\n  led = 8'b0000_0000;\nelse begin\n  led[3:0] = led[3:0] << 1 + 4'b0001;\n  led[7:4] = led[7:4] >> 1 + 4'b1000;\nend",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_274": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn D. Đầu ra phụ thuộc vào trạng thái quá khứ của mạch, cũng như giá trị hiện tại của đầu vào vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_275": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn A. Xung clock vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_276": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn D. Cả A, B và C vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì hướng đếm/dịch trong code không tương ứng với phương án này."
    }
  },
  "main_277": {
    "focus": "Blocking assignment dùng dấu =. Lệnh sau chỉ chạy sau khi lệnh trước đã cập nhật xong, nên phù hợp mô tả mạch tổ hợp trong always.",
    "correct": "Chọn B. = vì đây là ký hiệu/cách dùng đúng của loại phép gán được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi.",
      "C": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi.",
      "D": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi."
    }
  },
  "main_278": {
    "focus": "Blocking assignment dùng dấu =. Lệnh sau chỉ chạy sau khi lệnh trước đã cập nhật xong, nên phù hợp mô tả mạch tổ hợp trong always.",
    "correct": "Chọn D. <= vì đây là ký hiệu/cách dùng đúng của loại phép gán được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi.",
      "B": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi.",
      "C": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi."
    }
  },
  "main_279": {
    "focus": "Blocking assignment dùng dấu =. Lệnh sau chỉ chạy sau khi lệnh trước đã cập nhật xong, nên phù hợp mô tả mạch tổ hợp trong always.",
    "correct": "Chọn A. Thực hiện theo thứ tự từ trên xuống vì đây là ký hiệu/cách dùng đúng của loại phép gán được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi.",
      "C": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi.",
      "D": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi."
    }
  },
  "main_280": {
    "focus": "Blocking assignment dùng dấu =. Lệnh sau chỉ chạy sau khi lệnh trước đã cập nhật xong, nên phù hợp mô tả mạch tổ hợp trong always.",
    "correct": "Chọn B. Thực hiện đồng thời song song với nhau vì đây là ký hiệu/cách dùng đúng của loại phép gán được hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi.",
      "C": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi.",
      "D": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi."
    }
  },
  "main_281": {
    "focus": "Blocking assignment dùng dấu =. Lệnh sau chỉ chạy sau khi lệnh trước đã cập nhật xong, nên phù hợp mô tả mạch tổ hợp trong always.",
    "correct": "Chọn A. a=b=1 vì đây là ký hiệu/cách dùng đúng của loại phép gán được hỏi.",
    "steps": [],
    "code": "a = b = 0;\na = 1;\nb = a;",
    "wrong": {
      "B": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi.",
      "C": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi.",
      "D": "Sai vì đây là toán tử so sánh/khác loại phép gán, hoặc không phù hợp loại mạch đề hỏi."
    }
  },
  "main_282": {
    "focus": "Câu hỏi kiểm tra non-blocking assignment <=. RHS được đọc theo giá trị cũ, còn LHS chỉ cập nhật sau khi khối hiện tại kết thúc.",
    "correct": "Chọn C. a=1, b=0 vì b nhận a cũ, không nhận a mới.",
    "steps": [
      "Ban đầu a = b = 0",
      "a <= 1; lên lịch cập nhật a thành 1",
      "b <= a; đọc a cũ = 0",
      "Cuối bước mô phỏng: a = 1, b = 0"
    ],
    "code": "a = b = 0;\na <= 1;\nb <= a;",
    "wrong": {
      "A": "Sai vì phương án này nhầm non-blocking <= với blocking = hoặc dùng giá trị mới quá sớm.",
      "B": "Sai vì phương án này nhầm non-blocking <= với blocking = hoặc dùng giá trị mới quá sớm.",
      "D": "Sai vì phương án này nhầm non-blocking <= với blocking = hoặc dùng giá trị mới quá sớm."
    }
  },
  "main_283": {
    "focus": "Câu hỏi kiểm tra quy tắc assign/always/wire/reg trong Verilog.",
    "correct": "Chọn A. Blocking vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_284": {
    "focus": "Trọng tâm là mạch tuần tự. Mạch tuần tự dùng flip-flop/thanh ghi để lưu trạng thái theo cạnh clock; thanh ghi dịch chuyển dữ liệu theo từng xung, còn bộ đếm thay đổi giá trị trạng thái theo quy luật.",
    "correct": "Chọn B. 3 vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "C": "Sai vì con số này không phải giá trị/mốc đúng theo đề.",
      "D": "Sai vì con số này không phải giá trị/mốc đúng theo đề."
    }
  },
  "main_285": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn A. Thanh ghi trạng thái, trạng thái logic kế tiếp, logic ngõ ra vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_286": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn A. Tập hợp các FF D được điều khiển bởi một tín hiệu xung clock vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_287": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn B. Một mạch tổ hợp dựa trên trạng thái của ngõ vào bên ngoài và trạng thái bên trong (ngõ ra thanh ghi) để xác định trạng thái tiếp theo cho thanh ghi. vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_288": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn C. Một mạch tổ hợp tạo các tín hiệu ngõ ra vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_289": {
    "focus": "FSM có hai kiểu thường gặp: Moore và Mealy. Moore: output phụ thuộc trạng thái hiện tại; Mealy: output phụ thuộc cả trạng thái hiện tại và input.",
    "correct": "Chọn A. Finite State Machine vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_290": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn A. 2 vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_291": {
    "focus": "FSM có hai kiểu thường gặp: Moore và Mealy. Moore: output phụ thuộc trạng thái hiện tại; Mealy: output phụ thuộc cả trạng thái hiện tại và input.",
    "correct": "Chọn C. Cả A và B vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_292": {
    "focus": "FSM có hai kiểu thường gặp: Moore và Mealy. Moore: output phụ thuộc trạng thái hiện tại; Mealy: output phụ thuộc cả trạng thái hiện tại và input.",
    "correct": "Chọn A. Đầu ra là một hàm của trạng thái hiện tại của các FF và trạng thái của các đầu vào chính. vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_293": {
    "focus": "Định luật Moore nói về xu hướng số transistor trên IC tăng mạnh theo thời gian, thường hiểu là xấp xỉ tăng gấp đôi sau một khoảng thời gian nhất định, đồng thời kích thước/chi phí trên mỗi transistor giảm.",
    "correct": "Chọn B. Đầu ra luôn phụ thuộc vào trạng thái hiện tại, không nhất thiết phụ thuộc vào đầu vào chính. vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_294": {
    "focus": "Trọng tâm là mạch tuần tự. Mạch tuần tự dùng flip-flop/thanh ghi để lưu trạng thái theo cạnh clock; thanh ghi dịch chuyển dữ liệu theo từng xung, còn bộ đếm thay đổi giá trị trạng thái theo quy luật.",
    "correct": "Chọn A. K = A / (2B) vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_295": {
    "focus": "Khối initial chạy một lần từ thời điểm 0 trong mô phỏng/testbench; nhiều khối initial chạy song song với nhau.",
    "correct": "Chọn B. 1 Hz vì phương án này đặt câu lệnh đúng ngữ cảnh và dùng đúng kiểu tín hiệu.",
    "steps": [],
    "code": "module CLK_XHZ(clk50m, clkout);\n  input clk50m;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (count == 25_000_000) begin\n      clkout <= ~clkout;\n      count <= 1;\n    end else\n      count <= count + 1;\nendmodule",
    "wrong": {
      "A": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "C": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu.",
      "D": "Sai vì sai ngữ cảnh gán, sai sensitivity list, hoặc dùng sai kiểu wire/reg so với yêu cầu."
    }
  },
  "main_296": {
    "focus": "Trọng tâm là mạch tuần tự. Mạch tuần tự dùng flip-flop/thanh ghi để lưu trạng thái theo cạnh clock; thanh ghi dịch chuyển dữ liệu theo từng xung, còn bộ đếm thay đổi giá trị trạng thái theo quy luật.",
    "correct": "Chọn C. 12.500.000 vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_297": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. 2 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule\n\nmodule DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule\n\nmodule DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_298": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. 2 Hz vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule\n\nmodule DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule\n\nmodule DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_299": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn C. Chương trình 2 và chương trình 3 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule\n\nmodule DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule\n\nmodule DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_300": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. Kiểu biến vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule\n\nmodule DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule\n\nmodule DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_301": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn D. Chưa thể xác định vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule\n\nmodule DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule\n\nmodule DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_302": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn B. 5 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule\n\nmodule DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule\n\nmodule DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule",
    "wrong": {
      "A": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_303": {
    "focus": "Câu hỏi kiểm tra cú pháp hằng số, vector, mảng hoặc bộ nhớ trong Verilog.",
    "correct": "Chọn A. 1 vì cú pháp/giá trị này đúng với độ rộng và cách khai báo mà đề yêu cầu.",
    "steps": [],
    "code": "module CK_DIV(clk50m, clkout, speed);\n  input clk50m, speed;\n  output reg clkout;\n  reg [24:0] count;\n\n  initial begin\n    count <= 1;\n    clkout <= 0;\n  end\n\n  always @(posedge clk50m)\n    if (speed == 0) begin\n      if (count == 25000000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end else begin\n      if (count == 12500000) begin\n        clkout <= ~clkout;\n        count <= 1;\n      end else count <= count + 1;\n    end\nendmodule\n\nmodule DEM_8BIT(clk, reset, ud, ss, OUT);\n  input clk, reset, ss, ud;\n  output [7:0] OUT;\n\n  always @(posedge clk) begin\n    if (reset == 1)\n      OUT <= 0;\n    else if (ss == 1)\n      if (ud == 1)\n        OUT <= OUT + 1;\n      else\n        OUT <= OUT - 1;\n    else\n      OUT <= OUT;\n  end\nendmodule\n\nmodule DEM_8BIT_2SPEED(clk_50M, RESET, ud, ss, SPEED, LED_8out);\n  input clk_50M, RESET, ud, ss, SPEED;\n  output reg [7:0] LED_8out;\n  wire clk_1_2Hz;\n\n  CK_DIV MD_1(.clk50m(clk_50M), .speed(SPEED), .clkout(clk_1_2Hz));\n  DEM_8BIT MD_2(.clk(clk_1_2Hz), .reset(RESET), .ud(ud), .ss(ss), .out(LED_8out));\nendmodule",
    "wrong": {
      "B": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "C": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số.",
      "D": "Sai vì cú pháp/độ rộng không đúng với cách Verilog biểu diễn vector, mảng hoặc hằng số."
    }
  },
  "main_304": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn A. Silic vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_305": {
    "focus": "Trọng tâm là VLSI/IC. Khi đánh giá vi mạch, các tiêu chí thường gặp là mức tích hợp, diện tích, tốc độ, công suất và độ tin cậy.",
    "correct": "Chọn D. IV vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_306": {
    "focus": "Trọng tâm là VLSI/IC. Khi đánh giá vi mạch, các tiêu chí thường gặp là mức tích hợp, diện tích, tốc độ, công suất và độ tin cậy.",
    "correct": "Chọn A. N vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_307": {
    "focus": "Trọng tâm là VLSI/IC. Khi đánh giá vi mạch, các tiêu chí thường gặp là mức tích hợp, diện tích, tốc độ, công suất và độ tin cậy.",
    "correct": "Chọn B. P vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_308": {
    "focus": "Trọng tâm là VLSI/IC. Khi đánh giá vi mạch, các tiêu chí thường gặp là mức tích hợp, diện tích, tốc độ, công suất và độ tin cậy.",
    "correct": "Chọn A. Electron vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_309": {
    "focus": "Trọng tâm là VLSI/IC. Khi đánh giá vi mạch, các tiêu chí thường gặp là mức tích hợp, diện tích, tốc độ, công suất và độ tin cậy.",
    "correct": "Chọn B. Lỗ trống vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_310": {
    "focus": "Trọng tâm là mạch tổ hợp. Ngõ ra của mạch tổ hợp chỉ phụ thuộc ngõ vào hiện tại, không lưu trạng thái. MUX chọn một ngõ vào theo tín hiệu chọn; DEMUX đưa một ngõ vào ra một trong nhiều ngõ ra.",
    "correct": "Chọn B. Diode vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_311": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn C. N MOS vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_312": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn A. 1 vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_313": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn D. P MOS vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_314": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn B. 0 vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_315": {
    "focus": "Trọng tâm là VLSI/IC. Khi đánh giá vi mạch, các tiêu chí thường gặp là mức tích hợp, diện tích, tốc độ, công suất và độ tin cậy.",
    "correct": "Chọn A. 0V vì phương án này khớp trực tiếp với khái niệm/kết quả mà câu hỏi yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "C": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính.",
      "D": "Sai vì nội dung phương án không khớp với trọng tâm câu hỏi hoặc kết quả cần tính."
    }
  },
  "main_316": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn C. N MOS vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_317": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn D. P MOS vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_318": {
    "focus": "Câu hỏi kiểm tra toán tử logic/bitwise và cách mô tả mạch tổ hợp trong Verilog.",
    "correct": "Chọn A. NOT vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...).",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "D": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...)."
    }
  },
  "main_319": {
    "focus": "Câu hỏi kiểm tra toán tử logic/bitwise và cách mô tả mạch tổ hợp trong Verilog.",
    "correct": "Chọn A. NOT vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...).",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "D": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...)."
    }
  },
  "main_320": {
    "focus": "Câu hỏi kiểm tra toán tử logic/bitwise và cách mô tả mạch tổ hợp trong Verilog.",
    "correct": "Chọn D. NAND 2 vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "B": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...).",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog."
    }
  },
  "main_321": {
    "focus": "Câu hỏi kiểm tra toán tử logic/bitwise và cách mô tả mạch tổ hợp trong Verilog.",
    "correct": "Chọn C. NOR 2 vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "B": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...).",
      "D": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...)."
    }
  },
  "main_322": {
    "focus": "Câu hỏi kiểm tra toán tử logic/bitwise và cách mô tả mạch tổ hợp trong Verilog.",
    "correct": "Chọn B. AND 3 vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...).",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "D": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog."
    }
  },
  "main_323": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn D. g=1, gb=0 vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_324": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn D. Z vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "B": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_325": {
    "focus": "MUX 2 sang 1 chọn một trong hai ngõ vào theo tín hiệu chọn. Với output wire nên dùng assign và toán tử điều kiện ?:; với output reg có thể dùng always @* hoặc always @(i,s) kèm if/else.",
    "correct": "Chọn B. MUX 4x1 vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "D": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog."
    }
  },
  "main_326": {
    "focus": "MUX 2 sang 1 chọn một trong hai ngõ vào theo tín hiệu chọn. Với output wire nên dùng assign và toán tử điều kiện ?:; với output reg có thể dùng always @* hoặc always @(i,s) kèm if/else.",
    "correct": "Chọn A. MUX 2x1 vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "D": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog."
    }
  },
  "main_327": {
    "focus": "MUX 2 sang 1 chọn một trong hai ngõ vào theo tín hiệu chọn. Với output wire nên dùng assign và toán tử điều kiện ?:; với output reg có thể dùng always @* hoặc always @(i,s) kèm if/else.",
    "correct": "Chọn D. D LATCH vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "B": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog."
    }
  },
  "main_328": {
    "focus": "MUX 2 sang 1 chọn một trong hai ngõ vào theo tín hiệu chọn. Với output wire nên dùng assign và toán tử điều kiện ?:; với output reg có thể dùng always @* hoặc always @(i,s) kèm if/else.",
    "correct": "Chọn D. D LATCH vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "B": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog.",
      "C": "Sai vì biểu thức chọn sai ngõ vào, sai kiểu output wire/reg hoặc sai cú pháp Verilog."
    }
  },
  "main_329": {
    "focus": "Câu hỏi kiểm tra mạch tuần tự: FF/thanh ghi cập nhật theo clock, còn logic tổ hợp tạo trạng thái kế tiếp hoặc ngõ ra.",
    "correct": "Chọn B. Bộ đệm ba trạng thái đảo vì phương án này khớp với trạng thái/cấu trúc/tần số mà code tạo ra.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "C": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code.",
      "D": "Sai vì không đúng với cạnh clock, hướng dịch/đếm, hoặc cấu trúc FF trong code."
    }
  },
  "main_330": {
    "focus": "Câu hỏi kiểm tra toán tử logic/bitwise và cách mô tả mạch tổ hợp trong Verilog.",
    "correct": "Chọn A. AND, OR, NOT vì phương án này dùng đúng toán tử/cấu trúc để mô tả mạch đề yêu cầu.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...).",
      "C": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...).",
      "D": "Sai vì trong biểu thức Verilog không dùng chữ and; dùng & hoặc primitive and(...)."
    }
  },
  "main_331": {
    "focus": "Câu hỏi kiểm tra mốc lịch sử/công nghệ trong quá trình phát triển IC và transistor.",
    "correct": "Chọn A. Cực D và S nối với 2 đầu dây dẫn cần nối. vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "C": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  },
  "main_332": {
    "focus": "VLSI là mức tích hợp rất lớn, vượt mốc 10.000 transistor.",
    "correct": "Chọn C. 4 vì đây là mốc/định nghĩa đúng theo nội dung câu hỏi.",
    "steps": [],
    "code": "",
    "wrong": {
      "A": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "B": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi.",
      "D": "Sai vì phương án này là mốc khác hoặc không đúng với định nghĩa/mốc lịch sử được hỏi."
    }
  }
};
