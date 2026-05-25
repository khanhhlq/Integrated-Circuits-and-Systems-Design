module led_sang_dan_pst(input clk, reset, output reg [7:0] led);
    always @(posedge clk) begin
        if (reset) led = 8'b0000_0001;
        else begin
            if (led == 8'b0000_0000) led <= 8'b0000_0001;
            else if (led == 8'b1111_1111) led <= 8'b0000_0000;
            else led <= {led[6:0], 1'b1};
        end
    end
endmodule