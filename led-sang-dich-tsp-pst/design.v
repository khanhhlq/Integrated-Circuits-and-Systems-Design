module LED_SANG_DICH_TSP_PST(input clk, reset, SS, MODE, output reg [7:0] LED); 
    initial begin
        LED = 8'b0000_0000;
    end
    always @(posedge clk) begin
        if (reset) LED = 8'b0000_0000;
        else begin
            if(SS) begin
                if (MODE == 0) begin // tsp
                    if (LED == 8'b0000_0000) LED = 8'b1000_0000;
                    else LED = LED >> 1;
                end 
                     else begin // pst
                        if (LED == 8'b0000_0000) LED = 8'b0000_0001;
                        else LED = LED << 1;
                    end
                end
            else LED = LED;   
        end
    end
endmodule