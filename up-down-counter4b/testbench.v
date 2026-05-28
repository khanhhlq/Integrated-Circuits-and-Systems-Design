module tb;
    reg clk = 0, rst, ss, ud;
    wire [3:0] out;
    up_down_counter4b uut(.clk(clk), .rst(rst), .ss(ss), .ud(ud), .out(out));
    always #5 clk = ~clk;
    initial begin
        rst = 1; ss = 0; #10;
        rst = 0; ss = 1; 
        ud = 1; #160;
        ud = 0; #160;
        $finish;
    end
endmodule