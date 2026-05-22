module t_flip_flop(input clk, input t, output reg q);
    initial begin
        q = 0;
    end

    always @(posedge clk) begin
        if (t) begin
            q <= ~q;
        end
        else begin
            q <= q;
        end
    end
endmodule

module synchronous_counter (input clk, output [3:0] q);
    t_flip_flop ff1(.clk(clk), .t(1'b1), .q(q[0]));
    t_flip_flop ff2(.clk(clk), .t(q[0]), .q(q[1]));
    t_flip_flop ff3(.clk(clk), .t(q[0] & q[1]), .q(q[2]));
    t_flip_flop ff4(.clk(clk), .t(q[0] & q[1] & q[2]), .q(q[3]));
endmodule