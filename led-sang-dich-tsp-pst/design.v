module led_sang_dich_tsp_pst(input clk, reset, ss, mode, output reg [7:0] led); 
    initial begin
        led = 8'b0000_0000;
    end
    always @(posedge clk) begin
        if (reset) led = 8'b0000_0000;
        else begin
            if(ss) begin
                if (mode == 0) begin // tsp
                    if (led == 8'b0000_0000) led = 8'b1000_0000;
                    else led = led >> 1;
                end 
                     else begin // pst
                        if (led == 8'b0000_0000) led = 8'b0000_0001;
                        else led = led << 1;
                    end
                end
            else led = led;   
        end
    end
endmodule