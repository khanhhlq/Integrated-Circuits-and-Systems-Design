module tb();
    reg d, clk;
    wire q;
    d_latch dut(d, clk, q);
    initial begin
        clk = 0;
        d = 0;
        #10 d = 1;
        #10 d = 0;
        #10 d = 1;
        #10 d = 0;
    end
    always #5 clk = ~clk;
endmodule