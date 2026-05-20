`timescale 1ns / 1ps

module tb();
    reg j, k, clk, pre, clr;
    wire q, qd;

    jk_flip_flop uut (
        .j(j), .k(k), .clk(clk), .pre(pre), .clr(clr), .q(q), .qd(qd)
    );

    initial begin
        // --- CÁC TRƯỜNG HỢP BẤT ĐỒNG BỘ ---
        // Dòng 1: Cả hai chân reset/preset đều tích cực
        j = 1'bx; k = 1'bx; clk = 1'bx; pre = 0; clr = 0; #10; 

        // Dòng 2: Preset bất đồng bộ (Q=1, QD=0)
        pre = 0; clr = 1; #10; 
        
        // Dòng 3: Clear bất đồng bộ (Q=0, QD=1)
        pre = 1; clr = 0; #10; 
        
        // Dòng 4: Chế độ tĩnh khi CLK = 0 (Giữ nguyên trạng thái)
        pre = 1; clr = 1; clk = 0; #10; 

        // --- CÁC TRƯỜNG HỢP ĐỒNG BỘ (Bắt đầu chuỗi xung) ---
        // Đưa clock lên 1 trước để chuẩn bị cho chu kỳ đầu tiên
        clk = 1; #5;

        // Dòng 5: Giữ nguyên trạng thái (J=0, K=0)
        j = 0; k = 0; #5;  // Cài đặt dữ liệu trước
        clk = 0;      #5;  // SƯỜN XUỐNG 1: Mạch nhận lệnh giữ nguyên
        clk = 1;           // Đưa clock lên lại mức cao

        // Dòng 6: Reset (J=0, K=1)
        j = 0; k = 1; #5;  // Cài đặt dữ liệu trước
        clk = 0;      #5;  // SƯỜN XUỐNG 2: Mạch Reset về 0
        clk = 1; 

        // Dòng 7: Set (J=1, K=0)
        j = 1; k = 0; #5;  // Cài đặt dữ liệu trước
        clk = 0;      #5;  // SƯỜN XUỐNG 3: Mạch Set lên 1
        clk = 1; 

        // Dòng 8: Đảo trạng thái (J=1, K=1)
        j = 1; k = 1; #5;  // Cài đặt dữ liệu trước
        clk = 0;      #5;  // SƯỜN XUỐNG 4: Mạch lật trạng thái (Toggle)
        
        #10; // Chờ một chút ở cuối để nhìn rõ kết quả chu kỳ cuối cùng
    end
    
endmodule