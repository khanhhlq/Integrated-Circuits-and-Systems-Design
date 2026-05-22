module tb();
    reg in, clk = 0;
    wire out;
    SISO uut(.in(in), .clk(clk), .out(out));
    always #5 clk = ~clk;
    initial begin
        in = 1; #10;
        in = 0; #10;
        in = 1; #10;
        in = 1; #10;
        in = 1; #10;
        in = 0; #10;
        in = 0; #10;
        in = 0; #10;
        $finish;
    end
endmodule