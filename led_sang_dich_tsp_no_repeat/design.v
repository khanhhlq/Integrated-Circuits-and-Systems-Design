module dich_8_led_tsp(input clk, reset, output reg [7:0] led);
    always @(posedge clk) 
        if (reset)
            led <= 8'b1000_0000;
        else 
            led <= led >> 1;
endmodule
