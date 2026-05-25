module tb;
    reg clk = 0, reset, ss, mode;
    wire [7:0] led;
    
    led_sang_dan_tsp_pst uut(.clk(clk), .reset(reset), .ss(ss), .mode(mode), .led(led));

    always #5 clk = ~clk;
    
    initial begin
        reset = 1; 
        #10;
        
        reset = 0; ss = 1; mode = 1;
        #90;

        reset = 1; 
        #10;

        reset = 0; ss = 1; mode = 0;
        #90;

        reset = 1; 
        #10;

        $finish;
    end
endmodule