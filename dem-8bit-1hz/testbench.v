`timescale 1ns / 1ps

module tb;

    reg clk;
    reg reset;
    reg UD;
    reg SS;
    wire [7:0] LED8_out;

    DEM_8bit_1Hz uut (
        .clk(clk), 
        .reset(reset), 
        .UD(UD), 
        .SS(SS), 
        .LED8_out(LED8_out)
    );

    always begin
        #10 clk = ~clk;
    end

    initial begin
        clk = 0;
        reset = 0;
        UD = 0;
        SS = 0;

        #100;
        reset = 1;
        #100;
        reset = 0;
        #100;

        SS = 1;
        UD = 1;
        #3000000000; 

        SS = 0;
        #1000000000; 

        SS = 1;
        UD = 0;
        #2000000000; 

        $finish;
    end

endmodule