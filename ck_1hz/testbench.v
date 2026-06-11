`timescale 1ns / 1ps

module CK_1HZ_tb;

    reg clk50m;
    wire clk1hz;

    CK_1HZ uut (
        .clk50m(clk50m),
        .clk1hz(clk1hz)
    );

    always begin
        #10 clk50m = ~clk50m;
    end

    initial begin
        clk50m = 0;
        #100000000;
        $finish;
    end

endmodule