module tb();
    reg clk = 0;
    wire [2:0] q;

    asynchronous_counter dut(.clk(clk), .q(q));

    always #5 clk = ~clk;
    
    initial begin
        #100;
        $finish;
    end
endmodule