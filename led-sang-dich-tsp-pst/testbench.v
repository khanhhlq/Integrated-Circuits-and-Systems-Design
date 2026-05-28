module tb;
    reg clk = 0, reset, SS, MODE;
    wire [7:0] LED;

    LED_SANG_DICH_TSP_PST uut(.clk(clk), .reset(reset), .SS(SS), .MODE(MODE), .LED(LED));

    always #5 clk = ~clk;

    initial begin        
        reset = 0;
        SS = 1; MODE = 0;
        #90;


        reset =  1; #10;

        reset = 0;
        SS = 1; MODE = 1;
        #90;

        $finish;
    end
endmodule