module tb();
    reg clk = 0;
    wire [3:0] q;

    synchronous_counter uut(.clk(clk), .q(q));

    always #5 clk = ~clk;
    
    initial begin
        #180;    
        $finish;
    end
endmodule