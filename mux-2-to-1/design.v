module mux_2_to_1(input w0, w1, sel, output f);
    assign f = sel ? w1 : w0;
endmodule