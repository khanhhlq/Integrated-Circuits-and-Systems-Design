module tb();
    reg j, k, pre, clr, clk = 0;
    wire q, qd;

    jk_flip_flop uut (.j(j), .k(k), .clk(clk), .pre(pre), .clr(clr), .q(q), .qd(qd));

    always #5 clk = ~clk;

    initial begin
        pre = 0; clr = 0; #10;
        pre = 0; clr = 1; #10;
        pre = 1; clr = 0; #10; 
        pre = 1; clr = 1; #10; 

        j = 0; k = 0; #10;
        j = 0; k = 1; #10;
        j = 1; k = 0; #10; 
        j = 1; k = 1; #10; 

        $finish;
    end
endmodule