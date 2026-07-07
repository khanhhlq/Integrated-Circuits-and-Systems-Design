window.THEORY_NOTES = [
  {
    "id": "chapter-1",
    "chapterValue": "CHƯƠNG 1: GIỚI THIỆU",
    "title": "Chương 1: Quy trình thiết kế vi mạch số",
    "shortTitle": "Chương 1",
    "subtitle": "Ôn chi tiết các tầng thiết kế, Front-end/Back-end, tổng hợp, bố trí, đi dây, kiểm tra và tapeout.",
    "badges": [
      "Quy trình thiết kế",
      "Front-end",
      "Back-end",
      "Synthesis",
      "Timing"
    ],
    "sections": [
      {
        "title": "1. Bức tranh tổng quát quy trình thiết kế",
        "items": [
          "Thiết kế vi mạch số thường đi từ ý tưởng/chức năng → mô tả phần cứng → mô phỏng → tổng hợp logic → thiết kế vật lý → kiểm tra → tapeout.",
          "Front-end tập trung vào mô tả chức năng, RTL coding, testbench, simulation, synthesis, kiểm tra logic/timing/power ở mức thiết kế.",
          "Back-end/Physical Design tập trung vào floorplan, placement, clock tree synthesis, routing, static timing analysis, DRC/LVS và chuẩn bị tapeout.",
          "Trong các câu trắc nghiệm, cần phân biệt rõ: mô phỏng dùng để kiểm tra hành vi; tổng hợp dùng để chuyển mô tả thành phần cứng; đi dây là giai đoạn vật lý.",
          "Tapeout là bước cuối khi dữ liệu layout đã hoàn chỉnh và gửi đi chế tạo, không thuộc nhóm Front-end."
        ]
      },
      {
        "title": "2. Nhiệm vụ các tầng hay gặp trong đề",
        "items": [
          "Tầng thứ nhất: viết chương trình hệ thống, chương trình mô phỏng và khai báo/thông số thiết kế. Đây là bước mô tả ban đầu.",
          "Tầng thứ hai: thực hiện mô phỏng và đánh giá. Mục tiêu là kiểm tra chức năng, phát hiện lỗi trước khi tổng hợp.",
          "Tầng thứ ba: tổng hợp các thành phần như chương trình, các ràng buộc thời gian, xác định vị trí sơ bộ các ô thành phần.",
          "Tầng thứ tư: xác định bố cục ban đầu trước khi phân tích các yếu tố thời gian; liên quan tới floorplanning/placement ban đầu.",
          "Tầng thứ năm: đi dây tự động cho hệ thống, tức routing các kết nối giữa các cell/khối.",
          "Tầng thứ sáu: gồm 2 công đoạn kiểm tra, thường là kiểm tra hoạt động logic và kiểm tra kết quả cuối cùng sau thiết kế/tổng hợp."
        ]
      },
      {
        "title": "3. Front-end cần nhớ",
        "items": [
          "RTL coding là viết mô tả phần cứng bằng Verilog/VHDL ở mức thanh ghi truyền dữ liệu.",
          "Simulation dùng testbench để kiểm tra thiết kế có chạy đúng chức năng không.",
          "Synthesis biến RTL thành netlist gồm các cổng/cell phần cứng.",
          "Gate-level simulation kiểm tra netlist sau tổng hợp có còn đúng chức năng không.",
          "Power estimation và static timing analysis có thể xuất hiện trong giai đoạn kiểm tra thiết kế, nhưng tapeout không phải Front-end."
        ]
      },
      {
        "title": "4. Back-end/Physical Design cần nhớ",
        "items": [
          "Floorplan xác định bố cục khối lớn, vùng đặt cell, vị trí I/O và macro.",
          "Placement đặt các standard cell vào vị trí cụ thể.",
          "Clock Tree Synthesis tạo mạng clock để clock đến các FF với skew hợp lý.",
          "Routing đi dây kết nối các cell/khối theo netlist.",
          "DRC kiểm tra luật thiết kế vật lý; LVS kiểm tra layout có khớp schematic/netlist không.",
          "Tapeout là xuất dữ liệu cuối cùng để chế tạo chip."
        ]
      },
      {
        "title": "5. Các cặp khái niệm dễ nhầm",
        "items": [
          "Simulation khác synthesis: simulation kiểm tra hành vi, synthesis tạo cấu trúc phần cứng.",
          "Placement khác routing: placement đặt vị trí cell, routing nối dây giữa các cell.",
          "Front-end khác Back-end: Front-end thiên về RTL/chức năng; Back-end thiên về layout/vật lý.",
          "Static timing analysis kiểm tra đường thời gian có đạt yêu cầu clock không, không phải mô phỏng dạng waveform.",
          "Gate-level simulation dùng netlist cổng, khác RTL simulation dùng mã RTL."
        ]
      },
      {
        "title": "6. Cách nhận diện câu hỏi theo từ khóa",
        "items": [
          "Gặp từ `mô phỏng`, `đánh giá` → thường liên quan tầng 2.",
          "Gặp từ `tổng hợp`, `ràng buộc thời gian`, `vị trí ô thành phần` → thường liên quan tầng 3.",
          "Gặp từ `bố cục ban đầu`, `floorplan` → liên quan tầng 4.",
          "Gặp từ `đi dây`, `routing` → liên quan tầng 5.",
          "Gặp từ `kiểm tra cuối cùng`, `logic check` → liên quan tầng 6.",
          "Gặp từ `tapeout` → nghĩ đến Back-end cuối quy trình."
        ]
      },
      {
        "title": "7. Mẹo làm bài chương 1",
        "items": [
          "Đọc kỹ câu hỏi hỏi `tầng thứ mấy` hay hỏi `task thuộc nhóm nào`.",
          "Nếu đáp án nói `đi dây tự động` thì gần như không phải tầng đầu.",
          "Nếu đáp án nói `viết chương trình hệ thống/chương trình mô phỏng/thông số` thì là tầng đầu tiên.",
          "Nếu câu hỏi hỏi task không thuộc Front-end, đáp án thường là `Tapeout`.",
          "Nếu có câu dài mô tả `tổng hợp các thành phần như chương trình, ràng buộc thời gian...` thì nhớ đây là tầng tổng hợp/tầng 3."
        ]
      }
    ],
    "examples": [
      {
        "title": "Ví dụ 1: Tầng thứ hai",
        "body": "Hỏi `Tầng thứ hai có nhiệm vụ?` → chọn `Thực hiện mô phỏng và đánh giá`, vì sau mô tả ban đầu phải kiểm tra chức năng."
      },
      {
        "title": "Ví dụ 2: Tầng thứ ba",
        "body": "Hỏi `Tầng thứ ba có nhiệm vụ?` → chọn nội dung liên quan tổng hợp các thành phần, ràng buộc thời gian và vị trí ô thành phần."
      },
      {
        "title": "Ví dụ 3: Tapeout",
        "body": "Hỏi task nào không thuộc Front-end → chọn `Tapeout`, vì đây là bước cuối Back-end/Physical Design."
      },
      {
        "title": "Ví dụ 4: Tầng thứ sáu",
        "body": "Nếu hỏi `Tầng thứ sáu gồm mấy công đoạn?` → nhớ gồm 2 công đoạn kiểm tra."
      }
    ]
  },
  {
    "id": "chapter-2",
    "chapterValue": "CHƯƠNG 2: CÁC NỀN TẢNG LẬP TRÌNH ĐƯỢC",
    "title": "Chương 2: PLD, FPGA, ASIC, LUT và công nghệ chế tạo IC",
    "shortTitle": "Chương 2",
    "subtitle": "Ôn sâu SPLD/CPLD/FPGA, PAL/PLA/GAL, LUT, ASIC Full-Custom/Semi-Custom/Standard Cell/Gate Array.",
    "badges": [
      "SPLD",
      "CPLD",
      "FPGA",
      "LUT",
      "ASIC",
      "PAL/PLA/GAL"
    ],
    "sections": [
      {
        "title": "1. Nhóm logic lập trình được",
        "items": [
          "PLD là thiết bị logic lập trình được, cho phép người thiết kế cấu hình mạch logic sau khi sản xuất.",
          "SPLD là Simple Programmable Logic Device, cấu trúc đơn giản, quy mô nhỏ.",
          "CPLD là Complex Programmable Logic Device, có thể xem như tập hợp nhiều khối SPLD/PAL/GAL liên kết bằng mạng nối lập trình được.",
          "FPGA là Field Programmable Gate Array, gồm nhiều khối logic cấu hình được như CLB/LUT, I/O block và programmable interconnect.",
          "CLB chỉ là một khối con bên trong FPGA, không phải toàn bộ FPGA."
        ]
      },
      {
        "title": "2. SPLD, CPLD, FPGA khác nhau thế nào",
        "items": [
          "SPLD: nhỏ, ít tài nguyên, phù hợp hàm logic đơn giản.",
          "CPLD: nhiều khối logic hơn SPLD, liên kết bằng mạng nối lập trình; thường có timing dễ dự đoán hơn FPGA.",
          "FPGA: tài nguyên lớn, nhiều CLB/LUT, có khả năng hiện thực hệ thống số phức tạp.",
          "Nếu hình có nhiều CLB dạng mảng, I/O block bao quanh và programmable interconnect ở giữa → đó là FPGA.",
          "Nếu câu hỏi nói `tập hợp các SPLD được kết nối với nhau theo mảng lập trình` → đáp án là CPLD."
        ]
      },
      {
        "title": "3. PAL, PLA, GAL",
        "items": [
          "PLA thường có cả mảng AND và mảng OR lập trình được.",
          "PAL thường có mảng AND lập trình được, mảng OR cố định.",
          "GAL là Generic Array Logic, phiên bản cải tiến của PAL.",
          "GAL dùng EEPROM để lưu cấu hình các điểm nối/lập trình, nên có thể xóa và lập trình lại.",
          "Nếu hỏi đặc điểm GAL, ưu tiên chọn đáp án nói dùng EEPROM thay cho switch/cầu chì lập trình một lần."
        ]
      },
      {
        "title": "4. LUT trong FPGA",
        "items": [
          "LUT là Look-Up Table, dùng bảng chân trị để hiện thực hàm logic tổ hợp.",
          "LUT n ngõ vào cần lưu `2^n` giá trị đầu ra.",
          "LUT 3 ngõ vào cần `2^3 = 8` giá trị.",
          "FPGA dùng tế bào logic có cấu trúc LUT; PLA/PAL dùng mảng AND/OR, CPLD thường dựa trên khối PAL/GAL.",
          "Khi so sánh LUT với PAL, LUT dùng bộ nhớ/bảng tra cho hàm logic, còn PAL dùng các mối nối lập trình trong mảng AND/OR."
        ]
      },
      {
        "title": "5. Programmable interconnect",
        "items": [
          "Programmable interconnect là mạng nối lập trình được giữa các khối logic.",
          "Trong FPGA, các đường ngang/dọc và switch box cho phép cấu hình đường đi của tín hiệu.",
          "Các transistor chuyển mạch đóng/ngắt kết nối theo bit cấu hình.",
          "Các ô SRAM thường lưu bit điều khiển transistor chuyển mạch.",
          "Với cấu trúc trong đề, một điểm nối có thể cần 6 transistor chuyển mạch và 6 ô nhớ SRAM."
        ]
      },
      {
        "title": "6. ASIC và phân loại",
        "items": [
          "ASIC là Application-Specific Integrated Circuit, mạch tích hợp cho ứng dụng cụ thể.",
          "Hai nền tảng ASIC chuyên dụng thường gặp: Full-Custom và Semi-Custom.",
          "Full-Custom thiết kế sâu ở mức transistor/layout, tối ưu cao nhất nhưng tốn thời gian nhất.",
          "Semi-Custom dùng thư viện/cấu trúc có sẵn để rút ngắn thời gian thiết kế.",
          "Standard Cell ASIC là dạng Semi-Custom, dùng cell/cổng chuẩn trong thư viện.",
          "Gate Array ASIC có phần tử cơ bản chế tạo sẵn, chủ yếu tùy chỉnh lớp nối dây."
        ]
      },
      {
        "title": "7. Standard Cell, Gate Array, Full Custom",
        "items": [
          "Standard Cell ASIC thiết kế ở cấp độ cell/cổng chuẩn như AND, OR, FF, MUX; các cell được đặt và nối dây.",
          "Gate Array ASIC thường có quá trình chế tạo đơn giản hơn vì nền transistor/cell đã có sẵn, chỉ tùy chỉnh kết nối.",
          "Full Custom ASIC tốn nhiều thời gian vì phải thiết kế thủ công từng transistor/layout và tối ưu chi tiết.",
          "Nếu hỏi công nghệ chế tạo IC cấp độ cổng → chọn Standard Cell ASIC.",
          "Nếu hỏi công nghệ chế tạo IC đơn giản nhất trong các loại ASIC → chọn Gate Array ASIC.",
          "Nếu hỏi công nghệ chế tạo IC lớn mất nhiều thời gian nhất → chọn Full Custom ASIC."
        ]
      },
      {
        "title": "8. Đánh giá công nghệ IC",
        "items": [
          "Các thông số hay dùng để đánh giá công nghệ IC: tài nguyên chip, tốc độ chip, sức mạnh/hiệu năng và giá thành.",
          "Nhiều tài nguyên, tốc độ cao, hiệu năng cao thường đi kèm chi phí lớn.",
          "Công nghệ rẻ hoặc đơn giản thường bị hạn chế về tài nguyên hoặc hiệu năng.",
          "Mạch tích hợp có ưu điểm chung: diện tích nhỏ, tốc độ cao, độ tin cậy tốt, giảm dây nối/ký sinh so với mạch rời.",
          "Nhưng không phải câu nào cũng hỏi ưu điểm IC; nhiều câu hỏi đang hỏi phân loại công nghệ hoặc cấu trúc."
        ]
      },
      {
        "title": "9. Nhận diện đáp án nhanh",
        "items": [
          "Hỏi `tế bào logic sử dụng LUT` → FPGA.",
          "Hỏi `tập hợp SPLD kết nối với nhau` → CPLD.",
          "Hỏi `mảng AND/OR lập trình` → PLA/PAL tùy mức lập trình.",
          "Hỏi `dùng EEPROM để lưu cấu hình` → GAL.",
          "Hỏi `Full-Custom và Semi-Custom` → nhóm ASIC cho ứng dụng cụ thể.",
          "Hỏi `Standard Cell ASIC` → nghĩ đến thiết kế từ thư viện cell/cổng chuẩn."
        ]
      },
      {
        "title": "10. Các bẫy thường gặp",
        "items": [
          "Không nhầm FPGA với CLB: CLB là khối bên trong FPGA.",
          "Không nhầm SPLD với CPLD: CPLD phức tạp hơn và gồm nhiều khối kiểu SPLD.",
          "Không dùng giải thích ưu điểm IC chung cho mọi câu hỏi về công nghệ chế tạo.",
          "Gate Array không phải Full-Custom: Gate Array chỉ tùy chỉnh nhiều ở lớp nối dây.",
          "CPLD và FPGA đều lập trình được nhưng cấu trúc khác nhau."
        ]
      }
    ],
    "examples": [
      {
        "title": "Ví dụ 1: LUT 3 ngõ vào",
        "body": "LUT 3 ngõ vào cần lưu `2^3 = 8` giá trị đầu ra trong bảng chân trị."
      },
      {
        "title": "Ví dụ 2: FPGA",
        "body": "Hình có CLB dạng mảng + I/O block + programmable interconnect → chọn FPGA, không chọn CLB vì CLB chỉ là khối con."
      },
      {
        "title": "Ví dụ 3: GAL",
        "body": "GAL dùng EEPROM để lưu cấu hình nên có thể xóa và lập trình lại nhiều lần."
      },
      {
        "title": "Ví dụ 4: ASIC",
        "body": "Full-Custom tối ưu nhất nhưng mất thời gian nhất; Gate Array đơn giản hơn; Standard Cell là thiết kế mức cell/cổng chuẩn."
      },
      {
        "title": "Ví dụ 5: POS/SOP",
        "body": "Nhóm các số 0 ở ngõ ra → Product of Sums/POS; nhóm các số 1 → Sum of Products/SOP."
      }
    ]
  },
  {
    "id": "chapter-3",
    "chapterValue": "CHƯƠNG 3: NGÔN NGỮ VERILOG",
    "title": "Chương 3: Ngôn ngữ Verilog",
    "shortTitle": "Chương 3",
    "subtitle": "Ôn cực kỹ cú pháp Verilog, net/reg, assign, always/initial, số, toán tử, blocking/non-blocking, module và lỗi thường gặp.",
    "badges": [
      "Verilog",
      "assign",
      "always",
      "reg/wire",
      "blocking",
      "non-blocking"
    ],
    "sections": [
      {
        "title": "1. Module và khai báo cổng",
        "items": [
          "Một module Verilog thường có dạng `module ten_module(port_list); ... endmodule`.",
          "`endmodule` không có dấu chấm phẩy ở cuối. Viết `endmodule;` là lỗi trong phạm vi đề.",
          "Các cổng có thể khai báo là `input`, `output`, `inout`; có thể kèm kiểu `wire`, `reg` tùy ngữ cảnh.",
          "Module không được định nghĩa lồng bên trong module khác theo Verilog chuẩn; module nên định nghĩa độc lập.",
          "Instantiate/gọi module nhiều lần sẽ tạo nhiều instance phần cứng tương ứng, không phải chỉ một bản sao."
        ]
      },
      {
        "title": "2. Net, variable, wire, reg, integer",
        "items": [
          "`wire` là net, biểu diễn đường nối phần cứng, thường nhận giá trị từ `assign`, cổng primitive hoặc output module.",
          "`reg` là biến procedural, được phép gán trong `always` hoặc `initial`; tên reg không luôn đồng nghĩa tạo thanh ghi vật lý.",
          "`integer` cũng là kiểu biến có thể gán trong procedural block.",
          "Trong Verilog truyền thống, vế trái của lệnh gán trong `always/initial` phải là `reg/integer` hoặc kiểu biến tương tự, không phải `wire`.",
          "Muốn gán liên tục cho `wire`, dùng `assign` hoặc primitive/module connection."
        ]
      },
      {
        "title": "3. Cú pháp khai báo tín hiệu",
        "items": [
          "Cú pháp cơ bản: `type [range] signal_name;`.",
          "`type` có thể là `wire`, `reg`, `integer`...",
          "`[range]` xác định độ rộng vector/bus, ví dụ `wire [3:0] a;` là bus 4 bit.",
          "Dấu ngoặc vuông `[]` dùng cho range; không dùng ngoặc tròn `()` hoặc ngoặc nhọn `{}` để khai báo độ rộng.",
          "Với bộ nhớ 1024 byte, khai báo đúng là `reg [7:0] mem [1023:0];`: 1024 phần tử, mỗi phần tử 8 bit."
        ]
      },
      {
        "title": "4. Assign và continuous assignment",
        "items": [
          "`assign` là phép gán liên tục, dùng cho mô tả dataflow.",
          "Vế trái của `assign` thường là net/wire; vế phải là biểu thức logic.",
          "Các lệnh `assign` hoạt động đồng thời, không thực hiện tuần tự như lệnh procedural trong `always`.",
          "Nếu đầu vào trong biểu thức thay đổi, giá trị ngõ ra được cập nhật liên tục.",
          "Câu văn chứa chữ assign không phải lúc nào cũng là code; khi học lý thuyết cần hiểu bản chất là continuous assignment."
        ]
      },
      {
        "title": "5. Procedural block: always và initial",
        "items": [
          "`initial` chạy một lần khi mô phỏng bắt đầu, thường dùng trong testbench để khởi tạo tín hiệu, tạo kích thích hoặc kết thúc mô phỏng.",
          "`always` lặp lại theo sensitivity list, dùng để mô tả mạch tổ hợp hoặc tuần tự.",
          "Bên trong cùng một khối `always`, các câu lệnh procedural được xử lý tuần tự theo thứ tự viết.",
          "Các khối `always` khác nhau chạy song song/concurrent với nhau.",
          "`if` và `case` là câu lệnh procedural, chỉ đặt bên trong procedure như `always`, `initial`, `task`, `function`."
        ]
      },
      {
        "title": "6. Blocking `=` và non-blocking `<=`",
        "items": [
          "Blocking assignment dùng dấu `=`, thực hiện tuần tự: lệnh sau chờ lệnh trước cập nhật xong.",
          "Non-blocking assignment dùng dấu `<=`, các cập nhật thường xảy ra đồng thời ở cuối bước thời gian/cạnh clock.",
          "Mạch tổ hợp trong `always @*` thường dùng blocking `=`.",
          "Mạch tuần tự/flip-flop trong `always @(posedge clk)` thường dùng non-blocking `<=`.",
          "Nếu trong cùng một khối dùng `y = x; z = y; x = z;`, do blocking nên các giá trị truyền tuần tự ngay trong khối."
        ]
      },
      {
        "title": "7. Số và hằng trong Verilog",
        "items": [
          "Dạng số thường là `<width>'<base><value>`, ví dụ `4'b1010`, `8'hFF`, `12'o724`.",
          "Base phổ biến: `b` nhị phân, `o` bát phân, `d` thập phân, `h` thập lục phân.",
          "Nếu không ghi width, hằng không định cỡ thường được xem theo độ rộng mặc định 32 bit trong phạm vi đề.",
          "`'h1234` là số thập lục phân không khai báo kích thước, theo đề thường xem là 32 bit.",
          "Dấu `_` có thể dùng để phân nhóm chữ số cho dễ đọc, không làm đổi giá trị."
        ]
      },
      {
        "title": "8. Toán tử hay gặp",
        "items": [
          "`|a` là reduction OR: OR tất cả bit của a, trả về 1 bit.",
          "`~|a` là reduction NOR: nếu a có ít nhất một bit 1 thì `|a=1`, do đó `~|a=0`.",
          "`{a,b}` là phép nối bit/concatenation.",
          "`{3{B}}` là replication: lặp lại B 3 lần.",
          "`**` là phép lũy thừa, ví dụ `4 ** 3 = 64`.",
          "Toán tử điều kiện `s ? x : y` giống mux 2:1: nếu s đúng chọn x, ngược lại chọn y."
        ]
      },
      {
        "title": "9. X, Z và các loại net",
        "items": [
          "`X` biểu diễn giá trị không xác định hoặc mức logic không rõ ràng.",
          "`Z` biểu diễn trạng thái tổng trở cao, thường dùng với bus ba trạng thái.",
          "Các loại net gồm `wire`, `wand/wor`, `tri`.",
          "`wand`/`wor` là wired-AND/wired-OR, dùng khi nhiều nguồn cùng điều khiển một net với quy tắc phân giải.",
          "`tri` là net ba trạng thái, có thể ở trạng thái Z."
        ]
      },
      {
        "title": "10. Part-select, range và bit-width",
        "items": [
          "Nếu khai báo `wire [3:0] b;` thì part-select thông thường theo phạm vi đề dùng cùng chiều `[3:0]`, không đảo thành `[0:3]`.",
          "Gán toàn bộ vector `assign a = b;` là hợp lệ khi độ rộng phù hợp.",
          "Phép nối `{a,a,b,a}` với a,b đều 4 bit có tổng độ rộng `4 + 4 + 4 + 4 = 16 bit`.",
          "Để chứa 16 bit cần khai báo như `reg [15:0] c;`.",
          "Khi tăng độ rộng bằng zero-extension, cần hiểu rõ số không dấu/số dương và MSB."
        ]
      },
      {
        "title": "11. Comment trong Verilog",
        "items": [
          "`// comment` là chú thích một dòng.",
          "`/* comment */` là chú thích nhiều dòng.",
          "Verilog không hỗ trợ chú thích lồng nhau kiểu `/* ... /* ... */ ... */`.",
          "Vì vậy dòng chứa nested block comment có thể kết thúc comment sớm và làm phần còn lại thành code lỗi.",
          "Trong câu hỏi về `Nesting comments do not work`, chú ý từng dấu `/`, `*` và `*/`."
        ]
      },
      {
        "title": "12. Module primitive và mô tả cổng",
        "items": [
          "Cổng primitive AND viết dạng `and (output, input1, input2, ...);`.",
          "Với cổng AND 3 ngõ vào x,y,z và ngõ ra F, mô tả primitive đúng là `and (F, x, y, z);`.",
          "Không viết `assign and(F,x,y,z);`.",
          "Biểu thức `F = x and y and z;` không đúng cú pháp Verilog chuẩn; thường dùng `assign F = x & y & z;` hoặc primitive.",
          "Cổng AND 4 ngõ vào chỉ ra 1 khi tất cả input đều bằng 1."
        ]
      },
      {
        "title": "13. Latch, mux và lỗi suy luận phần cứng",
        "items": [
          "Nếu `always` không có clock và gán đầy đủ tất cả nhánh, thường tổng hợp thành mạch tổ hợp.",
          "Nếu trong mạch tổ hợp có nhánh không gán cho output, công cụ có thể suy ra latch để giữ giá trị cũ.",
          "`output reg` chỉ là kiểu biến được gán trong `always`, không có nghĩa chắc chắn tạo thanh ghi.",
          "Mux 2:1 có thể mô tả bằng `assign o = s ? i[0] : i[1];` nếu o là wire.",
          "Nếu output khai báo `reg`, mô tả trong `always @(...)` là phù hợp theo Verilog truyền thống."
        ]
      },
      {
        "title": "14. VHDL, Verilog và SystemVerilog",
        "items": [
          "VHDL được xem là linh hoạt/chặt chẽ hơn trong phạm vi đề vì có hệ kiểu dữ liệu mạnh và cấu trúc mô tả phong phú.",
          "Verilog thường ngắn gọn, dễ viết và gần với mô tả mạch số hơn.",
          "SystemVerilog mở rộng Verilog, có thêm `logic`, cấu trúc kiểm chứng và nhiều tính năng mới.",
          "C và C++ không phải HDL chuyên dùng theo cách VHDL/Verilog, dù có thể dùng trong mô hình mức cao/HLS.",
          "Khi đề hỏi HDL linh hoạt hơn theo phạm vi học, chọn VHDL nếu dữ liệu đề quy định vậy."
        ]
      }
    ],
    "examples": [
      {
        "title": "Ví dụ 1: Reduction OR",
        "body": "Với `a = 4'b1010`, `|a = 1` vì trong a có ít nhất một bit 1."
      },
      {
        "title": "Ví dụ 2: Concatenation",
        "body": "Nếu `a` và `b` đều 4 bit thì `{a, a, b, a}` rộng 16 bit, nên `c` cần `reg [15:0] c`."
      },
      {
        "title": "Ví dụ 3: Non-blocking",
        "body": "Phép gán không chặn là `<=`, thường dùng trong `always @(posedge clk)` cho mạch tuần tự."
      },
      {
        "title": "Ví dụ 4: Demux với output reg",
        "body": "Nếu đề cho `output reg [1:0] o` thì mô tả bằng `always @(i,s)` hợp lý hơn `assign` trong Verilog truyền thống."
      },
      {
        "title": "Ví dụ 5: Module lồng nhau",
        "body": "Một module không nên định nghĩa trực tiếp bên trong một module khác; muốn dùng lại thì instantiate module đã định nghĩa độc lập."
      },
      {
        "title": "Ví dụ 6: Blocking tuần tự",
        "body": "Trong `always`, nếu dùng `=`, các lệnh chạy theo thứ tự. `y=x; z=y; x=z;` sẽ truyền giá trị theo các lệnh vừa cập nhật."
      }
    ]
  },
  {
    "id": "chapter-4",
    "chapterValue": "CHƯƠNG 4: MẠCH TỔ HỢP",
    "title": "Chương 4: Mạch tổ hợp, module và nhận biết lỗi",
    "shortTitle": "Chương 4",
    "subtitle": "Ôn decoder, encoder, mux/demux, module con, lỗi khai báo/nối cổng và phân tích code tổ hợp.",
    "badges": [
      "Combinational",
      "MUX",
      "Decoder",
      "Module",
      "Debug"
    ],
    "sections": [
      {
        "title": "1. Mạch tổ hợp là gì",
        "items": [
          "Mạch tổ hợp có ngõ ra phụ thuộc trực tiếp vào các ngõ vào hiện tại.",
          "Mạch tổ hợp không có phần tử nhớ, không cần clock để lưu trạng thái.",
          "Các ví dụ: cổng logic, mux, demux, encoder, decoder, adder, comparator.",
          "Trong Verilog, mạch tổ hợp thường mô tả bằng `assign` hoặc `always @*`/`always @(...)` với gán đầy đủ các nhánh.",
          "Nếu thiếu gán ở một nhánh, công cụ có thể suy ra latch, khi đó không còn là tổ hợp thuần."
        ]
      },
      {
        "title": "2. MUX và toán tử điều kiện",
        "items": [
          "MUX chọn một trong nhiều ngõ vào đưa ra ngõ ra dựa trên tín hiệu chọn.",
          "Biểu thức `Y = (sel == 1'b1) ? A : B;` mô tả MUX 2:1.",
          "Biểu thức nhiều tầng như `sel==2'b00 ? A : sel==2'b01 ? B : ...` mô tả MUX nhiều ngõ vào.",
          "MUX 4x1 cần 2 bit chọn để chọn 1 trong 4 ngõ A, B, C, D.",
          "Nếu câu hỏi có dạng chọn A/B/C/D theo `sel`, thường đáp án là MUX."
        ]
      },
      {
        "title": "3. Decoder và ngõ ra one-hot",
        "items": [
          "Decoder chuyển mã nhị phân ở ngõ vào thành một ngõ ra được kích hoạt trong nhiều ngõ ra.",
          "Nếu `I=00` tạo `0001`, `I=01` tạo `0010`, `I=10` tạo `0100`, còn lại `1000` thì đó là decoder 2 sang 4.",
          "Tín hiệu enable có thể vô hiệu hóa decoder, ví dụ EN=0 đưa output về `0000`.",
          "Nếu có thêm tín hiệu đảo như `HL`, ngõ ra có thể là `temp` hoặc `~temp`.",
          "Khi phân tích code decoder, đi theo thứ tự: xét EN trước, rồi xét I, cuối cùng xét phép đảo/assign output."
        ]
      },
      {
        "title": "4. Encoder, demux và các cổng cơ bản",
        "items": [
          "Encoder mã hóa nhiều ngõ vào thành mã nhị phân.",
          "Demux đưa một ngõ vào sang một trong nhiều ngõ ra theo tín hiệu chọn.",
          "Cổng AND n ngõ vào chỉ ra 1 khi tất cả ngõ vào đều bằng 1.",
          "Cổng OR chỉ cần ít nhất một ngõ vào bằng 1 để ra 1.",
          "Cổng NOT đảo tín hiệu; NAND/NOR/XOR/XNOR là các biến thể thường gặp."
        ]
      },
      {
        "title": "5. Phân tích code `temp`/`O` trong đề",
        "items": [
          "Nếu `EN=0` thì thường chương trình gán `temp = 4'b0000` và không cần xét I.",
          "Nếu `EN=1` thì xét giá trị I để gán `temp` theo từng nhánh.",
          "Nếu `HL=1`, ngõ ra O chọn `temp`; nếu `HL=0`, ngõ ra O chọn `~temp`.",
          "Ví dụ `I=2'b10` cho `temp=0100`; nếu `HL=0` thì `O=~0100=1011`.",
          "Cần phân biệt biến nội bộ `temp` với ngõ ra `O`; đề có thể viết nhầm `tempt`."
        ]
      },
      {
        "title": "6. Gọi module con và nối cổng",
        "items": [
          "Gọi module con/instantiate dạng `F_ADDER fad0(.a(A[0]), .b(B[0]), .s(S[0]), .ci(0), .co(c1));`.",
          "Tên module là loại phần cứng được gọi; tên instance là bản sao cụ thể.",
          "Không nên đặt tên instance trùng tên module vì gây nhầm lẫn/không đúng quy ước trong phạm vi đề.",
          "Khi output của module con điều khiển tín hiệu bên ngoài, tín hiệu đó thường nên là net/wire.",
          "Nếu khai báo `output reg` nhưng lại được module con/continuous connection điều khiển, có thể bị xem là lỗi trong Verilog truyền thống."
        ]
      },
      {
        "title": "7. Lỗi cú pháp/ngữ nghĩa hay gặp",
        "items": [
          "`endmodule` không có dấu `;`; dòng `endmodule;` bị xem là lỗi trong phạm vi đề.",
          "Khai báo bus có chỉ số âm như `[3:-1]` thường bị xem là sai trong phạm vi học cơ bản.",
          "Tên module có ký tự không hợp lệ hoặc sai định danh có thể gây lỗi.",
          "Cổng output cần kết thúc bằng dấu `;` khi khai báo từng dòng.",
          "Nếu một dòng option hỏi số dòng lỗi, phải đối chiếu chính xác số dòng trong code hiển thị."
        ]
      },
      {
        "title": "8. Output reg hay wire trong mạch tổ hợp",
        "items": [
          "`output reg` được dùng khi output được gán trong `always`.",
          "`output wire` hoặc `output` phù hợp khi output được điều khiển bởi `assign` hoặc output module con.",
          "Nếu dùng `assign o = ...`, o nên là wire/net.",
          "Nếu dùng `always @(*) o = ...`, o có thể khai báo `reg` trong Verilog truyền thống.",
          "Trong SystemVerilog, `logic` giúp giảm nhầm lẫn nhưng đề Verilog cơ bản thường phân biệt reg/wire."
        ]
      },
      {
        "title": "9. Mẹo xử lý câu hỏi lỗi dòng",
        "items": [
          "Đầu tiên đọc các lựa chọn là số dòng nào, chỉ cần kiểm tra các dòng được hỏi.",
          "Kiểm tra dấu câu `;`, dấu phẩy, ngoặc và kết thúc module.",
          "Kiểm tra khai báo port có đúng chiều/range không.",
          "Kiểm tra tín hiệu được gán bởi module con là wire hay reg.",
          "Không kết luận lỗi ở dòng khác nếu câu hỏi chỉ đưa các lựa chọn cụ thể."
        ]
      }
    ],
    "examples": [
      {
        "title": "Ví dụ 1: Decoder",
        "body": "EN=1, I=`2'b10` → `temp=4'b0100`. Nếu HL=0 thì O=`~temp=1011`."
      },
      {
        "title": "Ví dụ 2: MUX",
        "body": "`Y = (sel==1'b1) ? A : B;` là MUX 2:1 vì sel chọn A hoặc B."
      },
      {
        "title": "Ví dụ 3: endmodule",
        "body": "Dòng `endmodule;` sai vì `endmodule` là từ khóa kết thúc module, không thêm dấu chấm phẩy."
      },
      {
        "title": "Ví dụ 4: Output từ module con",
        "body": "Nếu `S[0]` được nối vào `.s(S[0])` của module con, S nên là net/wire chứ không nên là reg trong Verilog truyền thống."
      },
      {
        "title": "Ví dụ 5: Demux",
        "body": "Nếu output khai báo `reg [1:0] o`, mô tả bằng `always @(i,s)` và gán `o[0]`/`o[1]` theo s là hợp lý trong phạm vi đề."
      }
    ]
  },
  {
    "id": "chapter-5",
    "chapterValue": "CHƯƠNG 5: MẠCH TUẦN TỰ",
    "title": "Chương 5: Mạch tuần tự, latch, flip-flop, thanh ghi dịch và LED",
    "shortTitle": "Chương 5",
    "subtitle": "Ôn SR/D latch, D/T/JK/SR flip-flop, shift register, counter, LED shift và nhận diện mạch từ sơ đồ/code.",
    "badges": [
      "Latch",
      "Flip-Flop",
      "Shift register",
      "Counter",
      "LED"
    ],
    "sections": [
      {
        "title": "1. Mạch tuần tự là gì",
        "items": [
          "Mạch tuần tự có phần tử nhớ, ngõ ra phụ thuộc vào ngõ vào hiện tại và trạng thái trước đó.",
          "Các phần tử nhớ phổ biến: latch, flip-flop, register, counter.",
          "Mạch tuần tự đồng bộ cập nhật trạng thái theo clock.",
          "Latch thường nhạy mức; flip-flop thường nhạy cạnh clock.",
          "Khi đọc code, dấu hiệu mạch tuần tự là `posedge/negedge clk`, giữ trạng thái hoặc thiếu nhánh gán tạo latch."
        ]
      },
      {
        "title": "2. Latch D",
        "items": [
          "D latch có ngõ vào D, tín hiệu cho phép/enable/clock mức và ngõ ra Q.",
          "Khi enable/clk ở mức tác động, Q nhận D.",
          "Khi enable/clk không tác động, Q giữ giá trị cũ.",
          "Code kiểu `always @(clk, D) if (clk) q = D;` mô tả D latch vì nhạy mức clk.",
          "D latch không phải D flip-flop vì không có `posedge clk` hoặc `negedge clk`."
        ]
      },
      {
        "title": "3. Latch SR",
        "items": [
          "SR latch có hai tín hiệu Set và Reset.",
          "Khi S=1, R=0 → set, Q=1.",
          "Khi R=1, S=0 → reset, Q=0.",
          "Khi không kích hoạt, mạch giữ trạng thái trước đó.",
          "Nếu code có điều kiện CLK=1 và xét S/R để gán Q/Qb, thường là chốt SR có enable."
        ]
      },
      {
        "title": "4. Flip-Flop D",
        "items": [
          "D flip-flop lấy mẫu D tại cạnh tác động của clock và lưu vào Q.",
          "Code mô tả cạnh lên thường là `always @(posedge clk) Q <= D;`.",
          "Nếu đề dùng blocking `Q = D` trong lựa chọn, vẫn có thể chọn nếu đó là đáp án đúng nhất về sự kiện cạnh clock.",
          "`always @(clk)` không phải mô tả cạnh clock chuẩn vì kích hoạt cả khi clk đổi 0→1 và 1→0.",
          "D flip-flop khác latch D ở điểm flip-flop nhạy cạnh, latch nhạy mức."
        ]
      },
      {
        "title": "5. Flip-Flop T",
        "items": [
          "T flip-flop giữ trạng thái khi T=0 và đảo trạng thái khi T=1.",
          "Có thể xây T flip-flop từ D flip-flop bằng logic `D = Q xor T`.",
          "Sơ đồ có D FF và hồi tiếp Q/~Q qua logic chọn theo T thường là T flip-flop.",
          "Trong code TFF, nếu `T==1` thì `Q = ~Q`, `QB = ~QB` nghĩa là ngõ ra đảo khi có cạnh clock.",
          "Mạch nối nhiều TFF có T=1 có thể tạo bộ đếm."
        ]
      },
      {
        "title": "6. Flip-Flop SR và JK",
        "items": [
          "SR flip-flop có set/reset theo cạnh clock hoặc điều kiện clock tùy mô tả.",
          "JK flip-flop mở rộng SR, tránh trạng thái cấm bằng chế độ toggle khi J=K=1.",
          "Nếu lựa chọn có JK nhưng code chỉ có S/R hoặc D, không chọn JK.",
          "Nếu sơ đồ có hai ngõ S/R độc lập, cân nhắc chốt SR hoặc FF SR tùy có clock cạnh hay không.",
          "Nếu sơ đồ là latch mức, không gọi là flip-flop kích cạnh."
        ]
      },
      {
        "title": "7. Thanh ghi dịch",
        "items": [
          "Thanh ghi dịch gồm nhiều flip-flop mắc nối tiếp.",
          "SISO là vào nối tiếp ra nối tiếp: dữ liệu đi qua từng FF và ra một đường out.",
          "SIPO là vào nối tiếp ra song song: dữ liệu vào một đường nhưng lấy nhiều ngõ ra song song.",
          "PISO là vào song song ra nối tiếp; PIPO là vào song song ra song song.",
          "Nếu code có 4 DFF nối `in → q1 → q2 → q3 → out`, đó là thanh ghi dịch 4 bit SISO."
        ]
      },
      {
        "title": "8. Bộ đếm không đồng bộ/ripple",
        "items": [
          "Bộ đếm không đồng bộ có các FF không dùng chung một clock chính.",
          "FF đầu nhận clock ngoài, FF sau nhận clock từ ngõ ra của FF trước.",
          "Cấu trúc này gọi là ripple counter vì trạng thái lan truyền qua từng tầng.",
          "Nếu T=1 ở các TFF thì mỗi FF toggle khi nhận cạnh clock.",
          "Tùy lấy clock từ Q hay Qb, bộ đếm có thể là đếm lên hoặc đếm xuống theo quy ước đề."
        ]
      },
      {
        "title": "9. LED shift/dịch sáng",
        "items": [
          "Nếu nửa phải `led[3:0]` dịch trái và nửa trái `led[7:4]` dịch phải, hiệu ứng thường là sáng dịch từ ngoài vào trong hoặc ngược lại tùy giá trị khởi tạo.",
          "Nếu gán lại `led = 8'b1000_0001`, hai LED ngoài cùng sáng trước.",
          "Chuỗi `1000_0001 → 0100_0010 → 0010_0100 → 0001_1000` biểu diễn sáng dịch từ ngoài vào trong.",
          "Nếu dùng cộng thêm `4'b0001` và `4'b1000`, có thể là hiệu ứng sáng dần/lấp dần từ ngoài vào trong.",
          "Khi phân tích LED, hãy viết vài trạng thái liên tiếp để nhìn hướng dịch."
        ]
      },
      {
        "title": "10. Phân biệt latch và flip-flop qua code",
        "items": [
          "`always @(clk, D) if (clk) q = D;` → latch D nhạy mức.",
          "`always @(posedge clk) q <= D;` → flip-flop D cạnh lên.",
          "Nếu có `if` thiếu `else` trong mạch tổ hợp, có thể tạo latch.",
          "Nếu có clock cạnh trong sensitivity list, thường là flip-flop/tuần tự.",
          "Nếu không có clock và gán đầy đủ nhánh, thường là tổ hợp."
        ]
      },
      {
        "title": "11. Mẹo đọc sơ đồ mạch tuần tự",
        "items": [
          "Nhìn bên phải có khối D/Q hoặc Q/Qb để nhận ra flip-flop/latch.",
          "Nếu có hồi tiếp Q về logic đầu vào, mạch có nhớ hoặc tạo FF đặc biệt.",
          "Nếu S/R được tạo từ D và `~D`, có thể là mạch chốt D xây từ chốt SR.",
          "Nếu T điều khiển logic chọn giữa giữ Q và đảo Q, đó là T flip-flop.",
          "Nếu nhiều FF mắc nối tiếp, nghĩ tới thanh ghi dịch hoặc bộ đếm."
        ]
      }
    ],
    "examples": [
      {
        "title": "Ví dụ 1: D latch",
        "body": "`always @(clk, D) if (clk) q = D;` → q nhận D khi clk=1, giữ khi clk=0, nên là mạch chốt D."
      },
      {
        "title": "Ví dụ 2: T flip-flop",
        "body": "Nếu T=0 giữ trạng thái, T=1 đảo trạng thái tại cạnh clock → đó là đặc trưng của T flip-flop."
      },
      {
        "title": "Ví dụ 3: SISO",
        "body": "Bốn DFF nối `in → q1 → q2 → q3 → out` là thanh ghi dịch 4 bit vào nối tiếp ra nối tiếp."
      },
      {
        "title": "Ví dụ 4: Ripple counter",
        "body": "FF thứ hai lấy clock từ output FF thứ nhất, FF thứ ba lấy clock từ output FF thứ hai → không đồng bộ/ripple counter."
      },
      {
        "title": "Ví dụ 5: LED ngoài vào trong",
        "body": "Nếu LED đi theo chuỗi `1000_0001 → 0100_0010 → 0010_0100 → 0001_1000` thì sáng dịch từ ngoài vào trong."
      }
    ]
  },
  {
    "id": "chapter-6",
    "chapterValue": "CHƯƠNG 6: MẠCH TUẦN TỰ ĐỒNG BỘ",
    "title": "Chương 6: Mạch tuần tự đồng bộ, reset, counter và FSM",
    "shortTitle": "Chương 6",
    "subtitle": "Ôn clock, reset đồng bộ/bất đồng bộ, counter, Mealy/Moore, non-blocking và cách viết always chuẩn.",
    "badges": [
      "Clock",
      "Reset",
      "Counter",
      "FSM",
      "Mealy/Moore"
    ],
    "sections": [
      {
        "title": "1. Mạch tuần tự đồng bộ",
        "items": [
          "Mạch tuần tự đồng bộ cập nhật trạng thái tại cạnh clock.",
          "Clock điều khiển thời điểm flip-flop/thanh ghi nhận dữ liệu mới.",
          "Ngõ ra/trạng thái có thể phụ thuộc trạng thái trước đó và ngõ vào hiện tại.",
          "Tín hiệu dùng để điều khiển mạch tuần tự đồng bộ là xung clock.",
          "Các tín hiệu sin, tam giác, Dirac không phải tín hiệu đồng bộ cho mạch số theo đề."
        ]
      },
      {
        "title": "2. Reset đồng bộ",
        "items": [
          "Reset đồng bộ chỉ được kiểm tra tại cạnh clock.",
          "Sensitivity list chỉ có clock, ví dụ `always @(posedge clk)`.",
          "Bên trong khối always mới kiểm tra `if (reset)` rồi gán trạng thái về 0.",
          "Ví dụ bộ đếm lên reset đồng bộ: `always @(posedge clk) if (reset) y <= 0; else y <= y + 1;`.",
          "Nếu đưa `posedge reset` hoặc `negedge reset` vào sensitivity list thì đó là reset bất đồng bộ, không phải đồng bộ."
        ]
      },
      {
        "title": "3. Reset bất đồng bộ active low",
        "items": [
          "Reset bất đồng bộ tác động ngay khi reset đổi trạng thái, không cần chờ clock.",
          "Active low nghĩa là reset có hiệu lực khi tín hiệu ở mức 0.",
          "Do active low, sensitivity list dùng `negedge clear` hoặc `negedge reset`.",
          "Nếu đếm cạnh lên clock và clear active low bất đồng bộ, viết `always @(posedge clk or negedge clear)`.",
          "Trong khối always, thường viết `if (!clear) q <= 0; else q <= q + 1;`."
        ]
      },
      {
        "title": "4. Counter",
        "items": [
          "Bộ đếm lên tăng giá trị sau mỗi cạnh clock: `q <= q + 1`.",
          "Bộ đếm xuống giảm giá trị: `q <= q - 1`.",
          "Bộ đếm n bit có trạng thái từ 0 đến `2^n - 1` nếu đếm nhị phân đầy đủ.",
          "Reset đưa bộ đếm về trạng thái ban đầu, thường là 0.",
          "Dùng non-blocking `<=` trong counter để cập nhật đồng thời các bit tại cạnh clock."
        ]
      },
      {
        "title": "5. Blocking và non-blocking trong mạch đồng bộ",
        "items": [
          "Blocking `=` thực hiện tuần tự, dễ tạo sai lệch khi mô tả nhiều thanh ghi trong cùng clock.",
          "Non-blocking `<=` lên lịch cập nhật đồng thời, phù hợp mô tả nhiều FF chạy cùng cạnh clock.",
          "Trong mạch tuần tự đồng bộ, quy tắc an toàn là dùng `<=`.",
          "Phép gán không chặn Non-Blocking là `<=`, không phải `=`, `==` hay `=>`.",
          "`==` là so sánh bằng; `=` là blocking assignment; `=>` không phải phép gán non-blocking."
        ]
      },
      {
        "title": "6. FSM: Mealy và Moore",
        "items": [
          "Máy trạng thái hữu hạn FSM gồm trạng thái hiện tại, logic trạng thái kế tiếp và logic ngõ ra.",
          "Máy Mealy có ngõ ra phụ thuộc vào trạng thái hiện tại và đầu vào hiện tại: `Output = f(Current State, Input)`.",
          "Vì phụ thuộc input, ngõ ra Mealy có thể thay đổi ngay khi input thay đổi.",
          "Máy Moore có ngõ ra phụ thuộc chủ yếu vào trạng thái hiện tại: `Output = f(Current State)`.",
          "Mealy thường phản ứng nhanh hơn nhưng ngõ ra dễ nhạy với nhiễu/glitch đầu vào; Moore thường ổn định hơn."
        ]
      },
      {
        "title": "7. Sensitivity list trong mạch đồng bộ",
        "items": [
          "`always @(posedge clk)` mô tả logic tuần tự cạnh lên clock.",
          "`always @(posedge clk or negedge reset)` mô tả clock cạnh lên kèm reset bất đồng bộ active low.",
          "Nếu reset đồng bộ thì không đặt reset trong sensitivity list.",
          "Nếu reset bất đồng bộ active high thì dùng `posedge reset`.",
          "Nếu reset bất đồng bộ active low thì dùng `negedge reset`."
        ]
      },
      {
        "title": "8. Dạng code chuẩn nên nhớ",
        "items": [
          "D FF: `always @(posedge clk) q <= d;`.",
          "Counter reset đồng bộ: `always @(posedge clk) if (reset) q <= 0; else q <= q + 1;`.",
          "Counter reset bất đồng bộ active low: `always @(posedge clk or negedge clear) if (!clear) q <= 0; else q <= q + 1;`.",
          "Mạch tổ hợp kế tiếp trạng thái thường viết trong `always @*`.",
          "Thanh ghi trạng thái hiện tại thường viết trong `always @(posedge clk...)`."
        ]
      },
      {
        "title": "9. Các lỗi hay gặp trong câu hỏi reset/counter",
        "items": [
          "Nhầm reset đồng bộ với reset bất đồng bộ do đưa reset vào sensitivity list.",
          "Nhầm active low với active high: active low phải kiểm tra mức 0 hoặc dùng cạnh xuống trong reset bất đồng bộ.",
          "Chọn `always @(negedge clear)` mà thiếu clock thì không thể mô tả bộ đếm theo clock.",
          "Chọn `always @(posedge clk)` mà đề yêu cầu reset bất đồng bộ thì thiếu reset trong sensitivity list.",
          "Dùng `=` trong mạch tuần tự không phải lúc nào sai trong đề, nhưng chuẩn thiết kế khuyến nghị `<=`."
        ]
      }
    ],
    "examples": [
      {
        "title": "Ví dụ 1: Reset bất đồng bộ active low",
        "body": "Đề hỏi reset bất đồng bộ active low, đếm cạnh lên clk → chọn `always @(posedge clk or negedge clear)`."
      },
      {
        "title": "Ví dụ 2: Reset đồng bộ",
        "body": "Đề hỏi reset đồng bộ → chỉ để `posedge clk` trong sensitivity list, reset được kiểm tra bên trong `if`."
      },
      {
        "title": "Ví dụ 3: Non-blocking",
        "body": "Hỏi phép gán không chặn → chọn `<=`."
      },
      {
        "title": "Ví dụ 4: Mealy",
        "body": "Máy Mealy có ngõ ra phụ thuộc cả trạng thái hiện tại và input hiện tại."
      },
      {
        "title": "Ví dụ 5: Counter",
        "body": "Mạch đếm lên 4 bit reset đồng bộ: `always @(posedge clk) if (reset) y <= 0; else y <= y + 1;`."
      }
    ]
  }
];
