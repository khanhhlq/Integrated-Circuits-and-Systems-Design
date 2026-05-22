module jk_flip_flop(input j, k, clk, output reg q, output qd);
    assign qd = ~q;

    initial begin
        q = 1'b0;
    end   
     
    always @(posedge clk) begin
        case({j, k})
            2'b00: q <= q; 
            2'b01: q <= 1'b0;
            2'b10: q <= 1'b1;
            2'b11: q <= ~q; 
        endcase
    end
endmodule


module ripple_counter(input clk, output [3:0] q);
    wire clk1, clk2, clk3;

    jk_flip_flop ff0(.j(1'b1), .k(1'b1), .clk(clk), .q(q[0]), .qd(clk1)); 
    jk_flip_flop ff1(.j(1'b1), .k(1'b1), .clk(clk1), .q(q[1]), .qd(clk2)); 
    jk_flip_flop ff2(.j(1'b1), .k(1'b1), .clk(clk2), .q(q[2]), .qd(clk3)); 
    jk_flip_flop ff3(.j(1'b1), .k(1'b1), .clk(clk3), .q(q[3]), .qd());     
endmodule