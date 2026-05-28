module up_counter8b_ss(input clk, rst, ss, output reg [7:0] out);
    always @(posedge clk) begin
        if (rst) out <= 8'b0000_0000;
        else begin
            if (ss) out <= out + 8'b0000_0001;
            else out <= out;
        end
    end
endmodule