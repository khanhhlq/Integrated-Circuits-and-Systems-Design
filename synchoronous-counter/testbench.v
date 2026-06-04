module tb();
    reg clk, rst;
    wire [3:0] q;

    synchronous_counter uut(.clk(clk), .rst(rst), .q(q));

    always #5 clk = ~clk;
    
    initial begin
        clk = 0;
        rst = 0;
        #10 rst = 1;
        #180;    
        $finish;
    end
endmodule