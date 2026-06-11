module CK_DIV (input CK50M, MODE, output reg clk);

    reg [24:0] cnt;
    reg [24:0] max_count;

    initial begin
        cnt <= 1;
        clk <= 0;
    end

    always @(*) begin
        case (MODE)
            1'b0: max_count = 25000000; 
            1'b1: max_count = 12500000;
            default: max_count = 25000000;
        endcase
    end

    always @(posedge CK50M) begin
        if (cnt >= max_count) begin
            clk <= ~clk;
            cnt <= 1;
        end else begin
            cnt <= cnt + 1;
        end
    end

endmodule