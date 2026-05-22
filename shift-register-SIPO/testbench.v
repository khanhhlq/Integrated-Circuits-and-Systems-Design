module tb();
    reg in, clk = 0;
    wire [3:0] q;

    SIPO sipo(.in(in), .clk(clk), .q(q));

    always #5 clk = ~clk;

    initial begin
        #10 in = 1;
        #10 in = 0;
        #10 in = 1;
        #10 in = 0;
        #10 in = 1;
        #10 in = 0;
        $finish;
    end
endmodule
