module tff (input clk, rst, t, output reg q);
    always @ (posedge clk) begin
    if (!rst)
        q <= 0;
    else
    	if (t)
      		q <= ~q;
    	else
      		q <= q;
    end
endmodule

module synchronous_counter (input clk, rst, output [3:0] q);
    tff
	ff1(.clk(clk), .rst(rst), .t(1'b1), .q(q[0])),
    ff2(.clk(clk), .rst(rst), .t(q[0]), .q(q[1])),
    ff3(.clk(clk), .rst(rst), .t(q[0] & q[1]), .q(q[2])),
    ff4(.clk(clk), .rst(rst), .t(q[0] & q[1] & q[2]), .q(q[3]));
endmodule