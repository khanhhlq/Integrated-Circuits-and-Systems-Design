`timescale 1ns / 1ps

module tb;
    reg CK50M, RESET, UD, SS, SPEED;
    wire [7:0] LED8_out;


    DEM_8bit_2Speed #(.DIV_1HZ(500000 - 1), .DIV_5HZ(66666 - 1)) uut(.CK50M(CK50M), .RESET(RESET), .UD(UD), .SS(SS), .SPEED(SPEED), .LED8_out(LED8_out));

    always begin
        #10 CK50M = ~CK50M;
    end

    initial begin
        CK50M = 0;
        RESET = 1;
        UD = 0;
        SS = 0;
        SPEED = 0;

        #100;
        RESET = 0;

        SS = 1;
        SPEED = 1;
        UD = 0;

        #8000000; 

        SPEED = 0;
        UD = 1;

        #32000000; 
        $finish;
    end
      
endmodule