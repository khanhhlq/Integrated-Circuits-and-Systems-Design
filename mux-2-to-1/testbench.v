module tb();
    reg w0, w1, sel;
    wire f;

    mux_2_to_1 uut (.w0(w0), .w1(w1), .sel(sel), .f(f));
    initial begin
        $monitor("w0=%b w1=%b sel=%b f=%b", w0, w1, sel, f);

        w0 = 0; w1 = 0; sel = 0;
        #10 w0 = 0; w1 = 0; sel = 1;
        #10 w0 = 0; w1 = 1; sel = 0;
        #10 w0 = 0; w1 = 1; sel = 1;
        #10 w0 = 1; w1 = 0; sel = 0;
        #10 w0 = 1; w1 = 0; sel = 1;
        #10 w0 = 1; w1 = 1; sel = 0;
        #10 w0 = 1; w1 = 1; sel = 1;    
    end
endmodule