module tb;
    reg in1, in2, cin;
    wire sum, cout;

    full_adder fa(.in1(in1), .in2(in2), .cin(cin), .sum(sum), .cout(cout));

    initial begin
        // Test case 1: 0 + 0 + 0
        in1 = 0; in2 = 0; cin = 0;
        #10; // Wait for 10 time units
        $display("Test case 1: in1=%b, in2=%b, cin=%b => sum=%b, cout=%b", in1, in2, cin, sum, cout);

        // Test case 2: 0 + 0 + 1
        in1 = 0; in2 = 0; cin = 1;
        #10;
        $display("Test case 2: in1=%b, in2=%b, cin=%b => sum=%b, cout=%b", in1, in2, cin, sum, cout);

        // Test case 3: 0 + 1 + 0
        in1 = 0; in2 = 1; cin = 0;
        #10;
        $display("Test case 3: in1=%b, in2=%b, cin=%b => sum=%b, cout=%b", in1, in2, cin, sum, cout);

        // Test case 4: 0 + 1 + 1
        in1 = 0; in2 = 1; cin = 1;
        #10;
        $display("Test case 4: in1=%b, in2=%b, cin=%b => sum=%b, cout=%b", in1, in2, cin, sum, cout);

        // Test case 5: 1 + 0 + 0
        in1 = 1; in2 = 0; cin = 0;
        #10;
        $display("Test case 5: in1=%b, in2=%b, cin=%b => sum=%b, cout=%b", in1, in2, cin, sum, cout);

        // Test case 6: 1 + 0 + 1
        in1 = 1; in2 = 0; cin = 1;
        #10;
        $display("Test case 6: in1=%b, in2=%b, cin=%b => sum=%b, cout=%b", in1, in2, cin, sum, cout);

        // Test case 7: 1 + 1 + 0
        in1 = 1; in2 = 1; cin = 0;          
        #10;
        $display("Test case 7: in1=%b, in2=%b, cin=%b => sum=%b, cout=%b", in1, in2, cin, sum, cout);
        
        // Test case 8: 1 + 1 + 1
        in1 = 1; in2 = 1; cin = 1;
        #10;
        $display("Test case 8: in1=%b, in2=%b, cin=%b => sum=%b, cout=%b", in1, in2, cin, sum, cout);
    end
endmodule