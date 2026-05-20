module tb();
    reg [3:0] in;
    wire [6:0] seg;

    decoder_for_7_seg_led uut(.in(in), .seg(seg));

    initial begin
        // Test case 1: Input 0
        in = 4'b0000; #10;
        $display("Test case 1: in=0000, seg=%b", seg);
        
        // Test case 2: Input 1
        in = 4'b0001; #10;
        $display("Test case 2: in=0001, seg=%b", seg);
        
        // Test case 3: Input 2
        in = 4'b0010; #10;
        $display("Test case 3: in=0010, seg=%b", seg);
        
        // Test case 4: Input 3
        in = 4'b0011; #10;
        $display("Test case 4: in=0011, seg=%b", seg);
        
        // Test case 5: Input 4
        in = 4'b0100; #10;
        $display("Test case 5: in=0100, seg=%b", seg);
        
        // Test case 6: Input 5
        in = 4'b0101; #10;
        $display("Test case 6: in=0101, seg=%b", seg);
        
        // Test case 7: Input 6
        in = 4'b0110; #10;
        $display("Test case 7: in=0110, seg=%b", seg);
        
        // Test case 8: Input 7
        in = 4'b0111; #10;
        $display("Test case 8: in=0111, seg=%b", seg);
        
        // Test case 9: Input 8
        in = 4'b1000; #10;
        $display("Test case 9: in=1000, seg=%b", seg);
        // Test case 10: Input 9
        in = 4'b1001; #10;
        $display("Test case 10: in=1001, seg=%b", seg);

        // Test case 11: Invalid input (should result in blank)
        in = 4'b1010; #10;  
        $display("Test case 11: in=1010, seg=%b", seg);

        // Test case 12: Invalid input (should result in blank)
        in = 4'b1011; #10;
        $display("Test case 12: in=1011, seg=%b", seg);

        // Test case 13: Invalid input (should result in blank)
        in = 4'b1100; #10;
        $display("Test case 13: in=1100, seg=%b", seg);

        // Test case 14: Invalid input (should result in blank)
        in = 4'b1101; #10;

        $display("Test case 14: in=1101, seg=%b", seg);
        // Test case 15: Invalid input (should result in blank)
        in = 4'b1110; #10;  

        $display("Test case 15: in=1110, seg=%b", seg);
        // Test case 16: Invalid input (should result in blank)
        in = 4'b1111; #10;
        
        $display("Test case 16: in=1111, seg=%b", seg);
    end
endmodule