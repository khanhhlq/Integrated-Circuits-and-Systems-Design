module tb;
    reg clk = 0, rst, ss;
    wire [7:0] out;
    up_counter8b_ss uut(.clk(clk), .rst(rst), .ss(ss), .out(out));

    always #5 clk = ~clk;

    initial begin
        rst = 1; ss = 0; #10;
        rst = 0; ss = 1;
        #3000;
        $finish;
    end
endmodule