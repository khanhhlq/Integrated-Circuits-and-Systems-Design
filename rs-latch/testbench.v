module tb();
    reg r, s, clk;
    wire q, qb;
    rs_latch uut(.r(r), .s(s), .clk(clk), .q(q), .qb(qb));
    
    initial begin
        // Test case 1: Set state (s=1, r=0)
        r = 0; s = 1; clk = 1; #10;
        $display("Test case 1: r=0, s=1, clk=1, q=%b, qb=%b", q, qb);
        
        // Test case 2: Reset state (s=0, r=1)
        r = 1; s = 0; clk = 1; #10;
        $display("Test case 2: r=1, s=0, clk=1, q=%b, qb=%b", q, qb);
        
        // Test case 3: Hold state (s=0, r=0)
        r = 0; s = 0; clk = 1; #10;
        $display("Test case 3: r=0, s=0, clk=1, q=%b, qb=%b", q, qb);
        
        // Test case 4: Invalid state (s=1, r=1)
        r = 1; s = 1; clk = 1; #10;
        $display("Test case 4: r=1, s=1, clk=1, q=%b, qb=%b", q, qb);

        // Test case 5: Clock low (should hold state)
        r = 0; s = 1; clk = 0; #10;
        $display("Test case 5: r=0, s=1, clk=0, q=%b, qb=%b", q, qb);

        // Test case 6: Clock low with reset (should hold state)
        r = 1; s = 0; clk = 0; #10;
        $display("Test case 6: r=1, s=0, clk=0, q=%b, qb=%b", q, qb);

        // Test case 7: Clock low with hold (should hold state)
        r = 0; s = 0; clk = 0; #10;
        $display("Test case 7: r=0, s=0, clk=0, q=%b, qb=%b", q, qb);

        // Test case 8: Clock low with invalid state (should hold state)
        r = 1; s = 1; clk = 0; #10;
        $display("Test case 8: r=1, s=1, clk=0, q=%b, qb=%b", q, qb);
    end
endmodule