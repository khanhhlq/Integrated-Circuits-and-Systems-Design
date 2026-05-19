module tb;
    reg [1:0] in;
    reg en, HL; 
    wire[3:0] data_out;
    decoder_2_to_4 dut(in, en, HL, data_out);
    initial begin
        $monitor("in = %b, en = %b, HL = %b, data_out = %b", in, en, HL, data_out);
        
        in = 2'b00; en = 0; HL = 0; #10;
        in = 2'b01; en = 0; HL = 0; #10;
        in = 2'b10; en = 0; HL = 0; #10;
        in = 2'b11; en = 0; HL = 0; #10;

        in = 2'b00; en = 0; HL = 1; #10;
        in = 2'b01; en = 0; HL = 1; #10;
        in = 2'b10; en = 0; HL = 1; #10;
        in = 2'b11; en = 0; HL = 1; #10;

        in = 2'b00; en = 1; HL = 0; #10;
        in = 2'b01; en = 1; HL = 0; #10;
        in = 2'b10; en = 1; HL = 0; #10;
        in = 2'b11; en = 1; HL = 0; #10;

        in = 2'b00; en = 1; HL = 1; #10;
        in = 2'b01; en = 1; HL = 1; #10;
        in = 2'b10; en = 1; HL = 1; #10;
        in = 2'b11; en = 1; HL = 1; #10;
        
    end
endmodule