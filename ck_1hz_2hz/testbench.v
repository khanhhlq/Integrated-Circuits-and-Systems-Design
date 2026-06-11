`timescale 1ns / 1ps

module CK_DIV_tb;

    reg CK50M;
    reg MODE;
    wire clk;

    CK_DIV uut (
        .CK50M(CK50M),
        .MODE(MODE),
        .clk(clk)
    );

    always begin
        #10 CK50M = ~CK50M;
    end

    initial begin
        CK50M = 0;

        MODE = 0;
        #1500000000; 

        MODE = 1;
        #1100000000;
        $finish;
    end
endmodule