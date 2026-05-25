module led_sang_dan_tsp_pst(input clk, reset, ss, mode, output reg [7:0] led);
    always @(posedge clk) begin
        if (reset) led <= 8'b0000_0000;
        else begin
            if (ss) begin
                if(mode) begin
                    if (led == 8'b0000_0000) led <= 8'b1000_0000;
                    else if (led == 8'b1111_1111) led <= 8'b0000_0000;
                    else led <= {1'b1, led[7:1]};
                end
                else begin
                    if (led == 8'b0000_0000) led <= 8'b0000_0001;
                    else if (led == 8'b1111_1111) led <= 8'b0000_0000;
                    else led <= {led[6:0], 1'b1};
                end
            end
            else led <= led;
        end
    end
endmodule