module led_sang_dich_tsp(input clk, reset, output reg [7:0] led);
    always @(posedge clk) 
    begin
        if (reset) 
            led = 8'b0000_0001;
        else
            if (led == 8'b0000_0000)
                led = 8'b0000_0001;
            else led = led << 1;
    end
endmodule