module tb();
    reg t, clk, rst;
    wire q, qb;

    t_flip_flop uut(.t(t), .clk(clk), .rst(rst), .q(q), .qb(qb));

    initial begin
        clk = 0;
        rst = 1;
        forever #5 clk = ~clk; // Clock with a period of 10 time units
    end

    initial begin
        // Test sequence
        #7 rst = 0;
        t = 0; #10; // Initial state
        t = 1; #10; // Toggle
        t = 0; #10; // No toggle
        t = 1; #10; // Toggle
        t = 0; #10; // No toggle
    end
endmodule