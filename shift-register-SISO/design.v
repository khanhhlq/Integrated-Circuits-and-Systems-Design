`timescale 1ns / 1ps

module SISO(input in, clk, output [3:0] q);
    reg [3:0] shift_reg;

    initial begin
        shift_reg = 4'b0000;
    end

    always @(posedge clk) begin
        shift_reg <= {in, shift_reg[3:1]};
    end

    assign q = shift_reg;
endmodule