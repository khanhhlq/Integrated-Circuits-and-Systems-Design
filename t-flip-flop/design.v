module t_flip_flop(input t, clk, rst, output reg q, qb);
    initial begin
        q = 0;
        qb = 1;
    end
    always @(posedge clk or posedge rst)
    begin
        if (rst) begin
            q <= 0;
            qb <= 1;
        end
        else begin
          if (t) begin
            q <= ~q;
            qb <= ~qb;
          end
        end
    end
endmodule
