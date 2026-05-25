module led_sang_dich_tnv(input clk, reset, output reg [7:0] led);
    always @(posedge clk) begin
        if (reset) begin
            led = 8'b1000_0001;
        end
        else begin
            if (led == 8'b0000_0000) led = 8'b1000_0001;
            else begin
                led[7:4] = led[7:4] >> 1;
                led[3:0] = led[3:0] << 1;
            end
        end
    end
endmodule