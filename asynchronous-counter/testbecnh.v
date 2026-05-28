module tb;
    reg clk = 0;
    wire [3:0] q;

    AsyncCounter_4b_TFF uut(.clk(clk), .q(q));

    always #5 clk = ~clk;
    
    initial begin
        #200;
        $finish;
    end
endmodule