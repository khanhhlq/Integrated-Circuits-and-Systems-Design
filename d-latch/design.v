module d_latch(input d, clk, output reg q);
    always @ (posedge clk or d) begin    
        q <= d;
    end 
endmodule