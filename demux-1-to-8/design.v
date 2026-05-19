module demux_1_to_8(input din, input [2:0] sel, output reg [7:0] dout);
    always @(*) begin
        dout = 8'b0; // Initialize all outputs to 0
        case (sel)
            3'b000: dout[0] = din; // Route to output 0
            3'b001: dout[1] = din; // Route to output 1
            3'b010: dout[2] = din; // Route to output 2
            3'b011: dout[3] = din; // Route to output 3
            3'b100: dout[4] = din; // Route to output 4
            3'b101: dout[5] = din; // Route to output 5
            3'b110: dout[6] = din; // Route to output 6
            3'b111: dout[7] = din; // Route to output 7
            default: dout = 8'b0;   // Default case, all outputs are 0
        endcase
    end
endmodule