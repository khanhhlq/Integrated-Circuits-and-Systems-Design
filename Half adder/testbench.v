`timescale 1ns/1ps

module tb_top;
    reg a, b;
    wire s, c_out;
    half_adder ha ( .a(a), .b(b), .s(s), .cout(c_out));
    initial begin
        // Test case 1
        a = 0; b = 0;
        #10;

        // Test case 2
        a = 0; b = 1;
        #10;

        // Test case 3
        a = 1; b = 0;
        #10;

        // Test case 4
        a = 1; b = 1;
        #10;

        $finish;
    end

endmodule