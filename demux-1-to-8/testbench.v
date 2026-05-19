module tb();
    reg din;
    reg [2:0] sel;
    wire [7:0] dout;
    // Instantiate the demux
    demux_1_to_8 uut (.din(din), .sel(sel), .dout(dout));
    initial begin
        // Test case 1: Route to output 0
        din = 1; sel = 3'b000; #10;
        $display("Test case 1: sel=000, dout=%b", dout);
        
        // Test case 2: Route to output 1
        sel = 3'b001; #10;
        $display("Test case 2: sel=001, dout=%b", dout);
        
        // Test case 3: Route to output 2
        sel = 3'b010; #10;
        $display("Test case 3: sel=010, dout=%b", dout);
        
        // Test case 4: Route to output 3
        sel = 3'b011; #10;
        $display("Test case 4: sel=011, dout=%b", dout);
        
        // Test case 5: Route to output 4
        sel = 3'b100; #10;
        $display("Test case 5: sel=100, dout=%b", dout);
        
        // Test case 6: Route to output 5
        sel = 3'b101; #10;
        $display("Test case 6: sel=101, dout=%b", dout);
        
        // Test case 7: Route to output 6
        sel = 3'b110; #10;
        $display("Test case 7: sel=110, dout=%b", dout);
        
        // Test case 8: Route to output 7
        sel = 3'b111; #10;
        $display("Test case 8: sel=111, dout=%b", dout);
        
        // Test case with din=0 (should result in all outputs being 0)
        din = 0; sel = 3'b000; #10;
        $display("Test case with din=0: sel=000, dout=%b", dout);
    end
endmodule