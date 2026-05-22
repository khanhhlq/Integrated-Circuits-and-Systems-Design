module t_flip_flop(input t, clk, output reg q, output qd);
    assign qd = ~q;

    initial begin
        q = 1'b0;
    end    

    always @(posedge clk) begin
        if (t)
            q <= ~q;
        else
            q <= q;
    end
endmodule

module asynchronous_counter(input clk, output [2:0] q);
    wire clk1, clk2;

    t_flip_flop tff0(.t(1'b1), .clk(clk), .q(q[0]), .qd(clk1));
    t_flip_flop tff1(.t(1'b1), .clk(clk1), .q(q[1]), .qd(clk2));
    t_flip_flop tff2(.t(1'b1), .clk(clk2), .q(q[2]), .qd());
endmodule