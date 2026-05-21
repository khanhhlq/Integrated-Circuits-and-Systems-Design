`timescale 1ns / 1ps

module jk_flip_flop ( input j, k, clk, pre, clr, output reg q, qd);
    always @(negedge clk or negedge pre or negedge clr) begin
        if (!pre && !clr) begin
            q  <= 1'b1;
            qd <= 1'b1;
        end
        else if (!pre) begin
            q  <= 1'b1;
            qd <= 1'b0;
        end
        else if (!clr) begin
            q  <= 1'b0;
            qd <= 1'b1;
        end
        else begin
            case ({j, k})
                2'b00: begin
                    q  <= q;
                    qd <= qd;
                end
                2'b01: begin
                    q  <= 1'b0;
                    qd <= 1'b1;
                end
                2'b10: begin
                    q  <= 1'b1;
                    qd <= 1'b0;
                end
                2'b11: begin
                    q  <= ~q;
                    qd <= ~qd;
                end
            endcase
        end
    end
endmodule