module tb();
    reg t, clk, rst;
    wire q;

    tff uut(.t(t), .clk(clk), .rst(rst), .q(q));

    always #5 clk = ~clk;

    initial begin
        clk = 0;
        rst = 0;
        t = 0;

        #10 rst = 1;

        t = 0; #10;
        t = 1; #10;
        t = 0; #10;
        t = 1; #10;
        t = 0; #10;

        #10;
        $finish;
    end
endmodule