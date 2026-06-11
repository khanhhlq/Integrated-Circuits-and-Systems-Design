module Counter_tb;

    parameter N = 8; 
    reg clk;
    reg reset;
    wire [N-1:0] q;

    Counter #(.N(N)) uut (
        .clk(clk),
        .reset(reset),
        .q(q)
    );

    always begin
        #5 clk = ~clk; 
    end

    initial begin
        clk = 0;
        reset = 0;
        
        #5;
        reset = 1;
        #10;
        reset = 0;
        
        #300;

        $finish; 
    end
endmodule