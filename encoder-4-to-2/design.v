module encoder_4_to_2(input [3:0] in, input en, HL, output [1:0] data_out);
    reg [1:0] temp;
    always @(*)
    begin
        if (en)
        begin 
            if (in == 4'b0001) temp = 2'b00;
            else if (in == 4'b0010) temp = 2'b01;
            else if (in == 4'b0100) temp = 2'b10;
            else if (in == 4'b1000) temp = 2'b11;
            else temp = 2'bxx;
        end
        else temp = 2'b00;
    end
    assign data_out = (HL == 1'b1) ? temp : ~temp;
endmodule

