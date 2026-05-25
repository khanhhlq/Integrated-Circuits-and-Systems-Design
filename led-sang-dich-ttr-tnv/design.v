module led_sang_dich_ttr_tnv(input clk, reset, ss, mode, output reg [7:0] led);
    always @(posedge clk) begin
        if (reset) led = 8'b0000_0000;
        else begin
            if (ss) begin
                if (mode) begin
                    if (led == 8'b0000_0000) led = 8'b0001_1000;
                    else begin
                        led[7:4] = led[7:4] << 1;
                        led[3:0] = led[3:0] >> 1;
                    end
                end
                else begin
                    if (led == 8'b0000_0000) led = 8'b1000_0001;
                    else begin
                        led[7:4] = led[7:4] >> 1;
                        led[3:0] = led[3:0] << 1;
                    end
                end
            end
            else led = led;
        end
    end
endmodule