module tb;
    reg A, B, C, D;
    wire F;

    combinational_circuit uut (.A(A), .B(B), .C(C), .D(D), .F(F));
    initial begin
        $monitor("A=%b B=%b C=%b D=%b F=%b", A, B, C, D, F);
        
        A = 0; B = 0; C = 0; D = 0;
        #10 A = 0; B = 0; C = 0; D = 1;
        #10 A = 0; B = 0; C = 1; D = 0;
        #10 A = 0; B = 0; C = 1; D = 1;
        #10 A = 0; B = 1; C = 0; D = 0;
        #10 A = 0; B = 1; C = 0; D = 1;
        #10 A = 0; B = 1; C = 1; D = 0;
        #10 A = 0; B = 1; C = 1; D = 1;
        #10 A = 1; B = 0; C = 0; D = 0;
        #10 A = 1; B = 0; C = 0; D = 1;
        #10 A = 1; B = 0; C = 1; D = 0;
        #10 A = 1; B = 0; C = 1; D = 1;
        #10 A = 1; B = 1; C = 0; D = 0;
        #10 A = 1; B = 1; C = 0; D = 1;
        #10 A = 1; B = 1; C = 1; D = 0;
        #10 A = 1; B = 1; C = 1; D = 1;
    end
endmodule