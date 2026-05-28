module T_FF (input t, clk, output reg q, output qd);
    assign qd = ~q;

    initial begin
        q = 1'b0;
    end    

    always @(posedge clk) begin
        if (t) q <= ~q;
        else q <= q;
    end
endmodule

module AsyncCounter_4b_TFF(input clk, output [3:0] q);
    wire clk1, clk2, clk3;

    T_FF tff0(.t(1'b1), .clk(clk), .q(q[0]), .qd(clk1));
    T_FF tff1(.t(1'b1), .clk(clk1), .q(q[1]), .qd(clk2));
    T_FF tff2(.t(1'b1), .clk(clk2), .q(q[2]), .qd(clk3));
    T_FF tff3(.t(1'b1), .clk(clk3), .q(q[3]), .qd());
endmodule
