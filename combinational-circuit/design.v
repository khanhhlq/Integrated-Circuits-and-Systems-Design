module combinational_circuit (input A, B, C, D, output F);
    wire AB, CD, O;

    assign AB = A & B;
    assign CD = C & D;
    assign O = AB | CD;
    assign F = ~O;
endmodule