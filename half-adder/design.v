module half_adder (input a, b, output s, cout);
    assign s = a ^ b; // Sum is the XOR of a and b
    assign cout = a & b; // Carry out is the AND of a and b
endmodule