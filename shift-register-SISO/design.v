module dff(input d, clk, output reg q);
    always @(posedge clk) begin
        q <= d;
    end
endmodule

module SISO(input in, clk, output out);
    wire q1, q2, q3;
    dff 
    ff1(.d(in), .clk(clk), .q(q1)),
	ff2(.d(q1), .clk(clk), .q(q2)),
    ff3(.d(q2), .clk(clk), .q(q3)),
    ff4(.d(q3), .clk(clk), .q(out));
endmodule