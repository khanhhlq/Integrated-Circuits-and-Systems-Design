module tb();
    reg j, k, clk, pre, clr;
    wire q, qd;

    jk_flip_flop uut (.j(j), .k(k), .clk(clk),.pre(pre),.clr(clr),.q(q),.qd(qd));

    initial begin
        j = 1'bx; k = 1'bx; clk = 1'bx; 
        pre = 0; clr = 0; 
        #10; 

        pre = 1; clr = 1; #1; 
        pre = 0; clr = 1; 
        #9; 
        
        pre = 1; clr = 1; #1;
        pre = 1; clr = 0; 
        #9; 
        
        pre = 1; clr = 1; clk = 0; 
        #10; 

        clk = 1; #5;

        j = 0; k = 0; #5;
        clk = 0;      #5;
        clk = 1;

        j = 0; k = 1; #5;
        clk = 0;      #5;
        clk = 1; 

        j = 1; k = 0; #5;
        clk = 0;      #5;
        clk = 1; 

        j = 1; k = 1; #5;
        clk = 0;      #5;
        clk = 1; #5;
        
        j = 1; k = 1; #5;
        clk = 0;      #5;

        #10;
        $display("Mo phong thanh cong va hoan tat!");
        $finish;
    end
    
endmodule