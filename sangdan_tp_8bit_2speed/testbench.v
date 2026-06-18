`timescale 1ns / 1ps

module tb_SANGDAN;
    reg CK50M, RESET, MODE, SS, SPEED;
    wire [7:0] LED8_out;

    SANGDAN_TP_8bit_2Speed uut (
        .CK50M(CK50M), .RESET(RESET), .MODE(MODE), 
        .SS(SS), .SPEED(SPEED), .LED8_out(LED8_out)
    );

    always #10 CK50M = ~CK50M;

    initial begin
        CK50M = 0; RESET = 1; MODE = 0; SS = 0; SPEED = 0;
        #100 RESET = 0; SS = 1;

        // 1Hz: 8 bước * 1 giây/bước = 8 giây
        MODE = 0; SPEED = 0; #8000000000; 
        MODE = 1; SPEED = 0; #8000000000; 

        // 2Hz: 8 bước * 0.5 giây/bước = 4 giây
        MODE = 0; SPEED = 1; #4000000000;  
        MODE = 1; SPEED = 1; #4000000000;

        SS = 0;
        #20000000;
        $finish;
    end
endmodule