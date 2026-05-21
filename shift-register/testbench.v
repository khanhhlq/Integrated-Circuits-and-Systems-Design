
module tb();
    reg in;
    reg clk;
    wire q1, q2, q3, q4;

    SISO uut (
        .in(in),
        .clk(clk),
        .q1(q1),
        .q2(q2),
        .q3(q3),
        .q4(q4)
    );

    always #5 clk = ~clk;


    initial begin
        clk = 0;
        in = 0;
        #12;

        in = 1; #10;
        in = 0; #10;
        in = 1; #10;
        in = 1; #10;
        in = 1; #10;
        in = 0; #10;
        in = 0; #10;
        in = 0; #40;
    end

endmodule