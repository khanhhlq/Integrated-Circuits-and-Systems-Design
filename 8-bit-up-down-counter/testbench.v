`timescale 1ns / 1ps

module CounterUD_tb;

    reg clk;
    reg reset;
    reg ud;
    wire [7:0] q;

    CounterUD uut (
        .clk(clk),
        .reset(reset),
        .ud(ud),
        .q(q)
    );

    always begin
        #5 clk = ~clk;
    end

    initial begin
        clk = 0;
        reset = 0;
        ud = 1;

        #2;
        reset = 1;
        #10;
        reset = 0;

        #150; 

        #5;
        ud = 0;
        
        #200;

        #3;
        reset = 1;
        #10;
        reset = 0;
        ud = 1;

        #50;
        $finish;
    end

endmodule