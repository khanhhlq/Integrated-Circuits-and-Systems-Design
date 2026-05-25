module tb;
    reg clk = 0, reset;
    wire [7:0] led;
    
    dich8led_tsp_repeat uut(.clk(clk), .reset(reset), .led(led));
    always #5 clk = ~clk;
    initial begin
        reset = 1; 
        #15;
        reset = 0;
        #100;
        $finish;
    end
endmodule