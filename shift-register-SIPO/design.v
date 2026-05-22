module dff(input d, clk, output reg q);
    always @(posedge clk) begin
        q <= d;
    end
endmodule

module SIPO(input in, clk, output [3:0] q);
    dff 
    dff0(in, clk, q[0]),
    dff1(q[0], clk, q[1]),
    dff2(q[1], clk, q[2]),
    dff3(q[2], clk, q[3]);
endmodule
