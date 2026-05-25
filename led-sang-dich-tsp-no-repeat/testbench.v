module tb();
    reg clk = 0, reset;
    wire [7:0] led;

    dich_8_led_tsp uut(.clk(clk), .reset(reset), .led(led));

    always #5 clk = ~clk;
    initial begin
        reset = 1; 
        #20;
        reset = 0;
        #500;
        $finish;
    end
endmodule