module led_sang_dich_ttr(input clk, reset, output reg [7:0] led);
    always @(posedge clk) begin
        if (reset)
            led = 8'b0001_1000;
        else begin
            if (led == 8'b0000_0000)
                    led = 8'b0001_1000;
                else
                    begin
                        led[7:4] = led[7:4] << 1;
                        led[3:0] = led[3:0] >> 1;        
                    end
        end
    end   
endmodule