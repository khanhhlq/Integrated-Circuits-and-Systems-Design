module rs_latch(input r, s, clk, output reg q, qb);
    always @(r, s, clk)
    begin
        if (clk) begin
            if (r == 0 && s == 1) begin
                q <= 1;
                qb <= 0;
            end 
            else if (r == 1 && s == 0) begin
                q <= 0;
                qb <= 1;
            end 
            else if (r == 0 && s == 0) begin
                q <= q; // Hold state
                qb <= qb; // Hold state
            end 
            else begin
                q <= 1'bx; // Invalid state
                qb <= 1'bx; // Invalid state
            end
        end
        else begin
            q <= q; // Hold state when clock is low
            qb <= qb; // Hold state when clock is low
        end
    end
endmodule