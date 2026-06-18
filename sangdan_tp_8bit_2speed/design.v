module SANGDAN_TP_8bit_2Speed (input wire CK50M, RESET, MODE, SS, SPEED, output reg [7:0] LED8_out);
    reg [24:0] cnt;
    reg clk_div;
    wire [24:0] max_cnt;

    assign max_cnt = (SPEED == 0) ? 25_000_000 : 12_500_000;

    always @(posedge CK50M or posedge RESET) begin
        if (RESET) begin
            cnt <= 1;
            clk_div <= 0;
        end else begin
            if (cnt == max_cnt) begin
                clk_div <= ~clk_div;
                cnt <= 1;
            end else begin
                cnt <= cnt + 1;
            end
        end
    end

    always @(posedge clk_div or posedge RESET) begin
        if (RESET) begin
            LED8_out <= 8'b00000000;
        end else if (SS) begin
            if (MODE == 0) begin
                if (LED8_out == 8'hFF) LED8_out <= 8'b00000001;
                else LED8_out <= (LED8_out << 1) | 8'b00000001;
            end else begin
                if (LED8_out == 8'hFF) LED8_out <= 8'b10000000;
                else LED8_out <= (LED8_out >> 1) | 8'b10000000;
            end
        end
    end
endmodule