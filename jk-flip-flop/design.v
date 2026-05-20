module jk_flip_flop(input clk, j, k, pre, clr, output q, qb);
    reg q, qb;
    always @(posedge clk or posedge pre or posedge clr) begin
        if (pre) begin
            q <= 1;
            qb <= 0;
        end else if (clr) begin
            q <= 0;
            qb <= 1;
        end else begin
            case ({j, k})
                2'b00: begin
                    q <= q; // No change
                    qb <= qb; // No change
                end
                2'b01: begin
                    q <= 0; // Reset
                    qb <= 1; // Reset
                end
                2'b10: begin
                    q <= 1; // Set
                    qb <= 0; // Set
                end
                2'b11: begin
                    q <= ~q; // Toggle
                    qb <= ~qb; // Toggle
                end
            endcase
        end
    end
endmodule