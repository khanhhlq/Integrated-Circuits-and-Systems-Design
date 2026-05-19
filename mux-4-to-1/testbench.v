module tb;
    reg [3:0] in;
    reg [1:0] sel;
    reg en, HL;
    wire data_out;
    mux_4_to_1 mux(.in(in), .sel(sel), .en(en), .HL(HL), .data_out(data_out));

    initial begin
        // Test case 1: HL=1, en=1
        in = 4'b1010; sel = 2'b00; en = 1; HL = 1;
        #10; // Wait for 10 time units
        $display("Test case 1: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);

        // Test case 2: HL=1, en=1
        in = 4'b1010; sel = 2'b01; en = 1; HL = 1;
        #10;    
        $display("Test case 2: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);

        // Test case 3: HL=1, en=1
        in = 4'b1010; sel = 2'b10; en = 1; HL = 1;
        #10;
        $display("Test case 3: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);

         // Test case 4: HL=1, en=1
        in = 4'b1010; sel = 2'b11; en = 1; HL = 1;
        #10;
        $display("Test case 4: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);

        //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 

        // Test case 5: HL=0, en=1
        in = 4'b1010; sel = 2'b00; en = 1; HL = 0;
        #10;
        $display("Test case 5: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);

        // Test case 6: HL=0, en=1
        in = 4'b1010; sel = 2'b01; en = 1; HL = 0;
        #10;
        $display("Test case 6: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);

        // Test case 7: HL=0, en=1
        in = 4'b1010; sel = 2'b10; en = 1; HL = 0;
        #10;
        $display("Test case 7: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);

        // Test case 8: HL=0, en=1
        in = 4'b1010; sel = 2'b11; en = 1; HL = 0;
        #10;
        $display("Test case 8: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);

        //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
        
        // Test case 9: en=0
        in = 4'b1010; sel = 2'b00; en = 0; HL = 0;
        #10;
        $display("Test case 9: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);
        
        // Test case 10: en=0
        in = 4'b1010; sel = 2'b01; en = 0; HL = 0;
        #10;
        $display("Test case 10: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);

        // Test case 11: en=0
        in = 4'b1010; sel = 2'b10; en = 0; HL = 0;
        #10;
        $display("Test case 11: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);             
        
        // Test case 12: en=0
        in = 4'b1010; sel = 2'b11; en = 0; HL = 0;
        #10;
        $display("Test case 12: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);
        
        //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
        
        // Test case 13: en=0
        in = 4'b1010; sel = 2'b00; en = 0; HL = 1;
        #10;
        $display("Test case 9: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);
        
        // Test case 14: en=0
        in = 4'b1010; sel = 2'b01; en = 0; HL = 1;
        #10;
        $display("Test case 10: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);

        // Test case 15: en=0
        in = 4'b1010; sel = 2'b10; en = 0; HL = 1;
        #10;
        $display("Test case 11: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);             
        
        // Test case 156: en=0
        in = 4'b1010; sel = 2'b11; en = 0; HL = 1;
        #10;
        $display("Test case 12: in=%b, sel=%b, en=%b, HL=%b => data_out=%b", in, sel, en, HL, data_out);
    end
endmodule