module full_adder(input a, b, ci, output r, co);
    assign r = a ^ b ^ ci;
    assign co = (a & b) | (b & ci) | (a & ci);
endmodule

module adder(A, B, R);
    input [3:0] A, B;
    output [4:0] R;
    wire c1, c2, c3;

    full_adder
    add0 (.a(A[0]), .b(B[0]), .ci(0), .co(c1), .r(R[0])),
    add1 (.a(A[1]), .b(B[1]), .ci(c1), .co(c2), .r(R[1])),
    add2 (.a(A[2]), .b(B[2]), .ci(c2), .co(c3), .r(R[2])),
    add3 (.a(A[3]), .b(B[3]), .ci(c3), .co(R[4]), .r(R[3]));
endmodule
