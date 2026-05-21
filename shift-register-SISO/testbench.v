`timescale 1ns / 1ps

module tb();
    reg in;
    reg clk;
    wire [3:0] q;

    SISO uut (.in(in), .clk(clk), .q(q));

    always #5 clk = ~clk;

    initial begin
        clk = 0;
        in = 0;
        #12;

        in = 1; #10;
        in = 0; #10;
        in = 1; #10;
        in = 1; #10;
        in = 1; #10;
        in = 0; #10;
        in = 0; #10;
        in = 0; #40;
    end
endmodule