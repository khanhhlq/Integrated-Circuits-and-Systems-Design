module tb;
    reg clk = 0, reset, ss, mode; 
    wire [7:0] led;

    always #5 clk = ~clk;

    led_sang_dich_ttr_tnv uut(.clk(clk), .reset(reset), .ss(ss), .mode(mode), .led(led));

    initial begin
        reset = 1; #10;

        reset = 0;
        ss = 1; mode = 1;
        #40;

        reset = 1; #10;

        reset = 0;
        ss = 1; mode = 0;
        #40;

        reset = 1; 
        #10;

        $finish;
    end
endmodule