module DICHLED_TP_8bit_2Speed (
    input CK50M,
    input RESET,
    input MODE,
    input SS,
    input SPEED,
    output reg [7:0] LED8_out
);
    reg [24:0] count;
    reg clk_led;
    wire [24:0] max_count = (SPEED == 0) ? 25_000_00 : 12_500_00;

    always @(posedge CK50M or posedge RESET) begin
        if (RESET) begin
            count <= 0;
            clk_led <= 0;
        end else if (count >= max_count - 1) begin
            count <= 0;
            clk_led <= ~clk_led;
        end else begin
            count <= count + 1;
        end
    end

    always @(posedge clk_led or posedge RESET) begin
        if (RESET) begin
            LED8_out <= 8'b0000_0001;
        end else if (SS) begin
            if (MODE == 0) 
                LED8_out <= {LED8_out[6:0], LED8_out[7]};
            else     
                LED8_out <= {LED8_out[0], LED8_out[7:1]};
        end
    end
endmodule