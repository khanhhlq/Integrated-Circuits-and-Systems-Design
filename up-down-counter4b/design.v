module up_down_counter4b(input clk, rst, ss, ud, output reg [3:0] out);
    always @(posedge clk) begin
        if (rst) out = 0;
        else begin
            if (ss) begin
                if (ud) out = out + 1;
                else out = out - 1;    
            end
            else out = out;
        end
    end
endmodule