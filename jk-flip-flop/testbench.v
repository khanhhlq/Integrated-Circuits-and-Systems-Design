`timescale 1ns / 1ps

module tb();
    // Khai báo các biến kích thích (Inputs của UUT phải là reg)
    reg j, k, clk, pre, clr;
    // Khai báo các biến quan sát (Outputs của UUT phải là wire)
    wire q, qd;

    // Kết nối với linh kiện cần kiểm thử (UUT)
    jk_flip_flop uut (
        .j(j), 
        .k(k), 
        .clk(clk),
        .pre(pre),
        .clr(clr),
        .q(q),
        .qd(qd)
    );

    // Khối chạy các trường hợp kiểm thử (Test Cases)
    initial begin
        // Kích hoạt bộ giám sát hiển thị kết quả trực tiếp ở màn hình Console
        $monitor("Time=%0dns | PRE=%b CLR=%b | CLK=%b | J=%b K=%b | Q=%b QD=%b", 
                 $time, pre, clr, clk, j, k, q, qd);

        // ============================================================
        // I. KIỂM THỬ CÁC TRẠNG THÁI BẤT ĐỒNG BỘ (Không phụ thuộc Clock)
        // ============================================================
        
        // --- DÒNG 1: pre = 0, clr = 0 (Các chân còn lại là don't care 'x') ---
        j = 1'bx; k = 1'bx; clk = 1'bx; pre = 0; clr = 0; 
        #10; 

        // --- DÒNG 2: pre = 0, clr = 1 ---
        pre = 0; clr = 1; 
        #10; 
        
        // --- DÒNG 3: pre = 1, clr = 0 ---
        pre = 1; clr = 0; 
        #10; 
        
        // --- DÒNG 4: Trạng thái tĩnh (pre = 1, clr = 1, clk = 0) ---
        pre = 1; clr = 1; clk = 0; 
        #10; 

        // ============================================================
        // II. KIỂM THỬ CÁC TRẠNG THÁI ĐỒNG BỘ (Kích hoạt bằng sườn xuống)
        // ============================================================
        // Đưa clock lên 1 trước để chuẩn bị tạo các cạnh xuống kế tiếp
        clk = 1; #5;

        // --- DÒNG 5: Giữ nguyên trạng thái (j = 0, k = 0) ---
        j = 0; k = 0; #5;  // Cài đặt dữ liệu j, k vững vàng trước khi clock hạ
        clk = 0;      #5;  // SƯỜN XUỐNG 1: Mạch nhận lệnh và giữ nguyên (Q=0, QD=1 từ dòng 3)
        clk = 1;           // Đưa clock lên cao lại

        // --- DÒNG 6: Reset trạng thái (j = 0, k = 1) ---
        j = 0; k = 1; #5;
        clk = 0;      #5;  // SƯỜN XUỐNG 2: Ép mạch Reset (Q=0, QD=1)
        clk = 1; 

        // --- DÒNG 7: Set trạng thái (j = 1, k = 0) ---
        j = 1; k = 0; #5;
        clk = 0;      #5;  // SƯỜN XUỐNG 3: Mạch ăn lệnh Set (Q=1, QD=0)
        clk = 1; 

        // --- DÒNG 8: Đảo trạng thái (j = 1, k = 1) ---
        j = 1; k = 1; #5;
        clk = 0;      #5;  // SƯỜN XUỐNG 4: Mạch lật trạng thái từ (1,0) sang (0,1)
        clk = 1; #5;
        
        j = 1; k = 1; #5;
        clk = 0;      #5;  // SƯỜN XUỐNG 5: Mạch tiếp tục lật từ (0,1) sang (1,0)

        // Dừng mô phỏng
        #10;
        $display("Mo phong thanh cong va hoan tat!");
    end
    
endmodule