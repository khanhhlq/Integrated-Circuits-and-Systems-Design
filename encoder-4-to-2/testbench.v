module tb;
    reg [3:0] in;
    reg en, HL;
    wire [1:0] data_out;
    encoder_4_to_2 uut(in, en, HL, data_out);

    initial begin
        in = 4'b0000; en = 0; HL = 0;
        #10 in = 4'b0001; en = 1; HL = 1;
        #10 in = 4'b0010; en = 1; HL = 1;
        #10 in = 4'b0100; en = 1; HL = 1;
        #10 in = 4'b1000; en = 1; HL = 1;
        #10 in = 4'b0000; en = 0; HL = 0;
        #10 in = 4'b0001; en = 1; HL = 0;
        #10 in = 4'b0010; en = 1; HL = 0;
        #10 in = 4'b0100; en = 1; HL = 0;
        #10 in = 4'b1000; en = 1; HL = 0;
        #10;
    end
endmodule