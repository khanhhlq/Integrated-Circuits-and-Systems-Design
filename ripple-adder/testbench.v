`timescale 1ns / 1ps

module tb_adder();
    reg [3:0] th_A;
    reg [3:0] th_B;
    wire [4:0] th_R;

    adder uut (
        .A(th_A), 
        .B(th_B), 
        .R(th_R)
    );

    initial begin
        $display("Thời gian\t A \t B \t| Tổng R (5-bit)");
        $display("-------------------------------------------");
        
        // --- Trường hợp 1: Cộng hai số nhỏ không có số nhớ ---
        th_A = 4'd2;   th_B = 4'd3;
        #10; // Đợi 10ns để mạch ăn tín hiệu và xử lý
        $strobe("%0dns\t\t %d \t %d \t| %d (Nhị phân: %b)", $time, th_A, th_B, th_R, th_R);

        // --- Trường hợp 2: Cộng ra kết quả biên (15) ---
        th_A = 4'd7;   th_B = 4'd8;
        #10;
        $strobe("%0dns\t\t %d \t %d \t| %d (Nhị phân: %b)", $time, th_A, th_B, th_R, th_R);

        // --- Trường hợp 3: Cộng hai số lớn gây tràn 4-bit ---
        th_A = 4'd15;  th_B = 4'd1;
        #10;
        $strobe("%0dns\t\t %d \t %d \t| %d (Nhị phân: %b)", $time, th_A, th_B, th_R, th_R);

        // --- Trường hợp 4: Cộng hai số lớn nhất có thể ---
        th_A = 4'd15;  th_B = 4'd15;
        #10;
        $strobe("%0dns\t\t %d \t %d \t| %d (Nhị phân: %b)", $time, th_A, th_B, th_R, th_R);

        // --- Trường hợp 5: Thử nghiệm với giá trị bằng 0 ---
        th_A = 4'd0;   th_B = 4'd0;
        #10;
        $strobe("%0dns\t\t %d \t %d \t| %d (Nhị phân: %b)", $time, th_A, th_B, th_R, th_R);

        #5;
        $finish;
    end
      
endmodule