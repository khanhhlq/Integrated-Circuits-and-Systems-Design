module testbench;
    reg CK50M;
    reg RESET;
    reg MODE;
    reg SS;
    reg SPEED;
    wire [7:0] LED8_out;

    DICHLED_TP_8bit_2Speed uut (
        .CK50M(CK50M),
        .RESET(RESET),
        .MODE(MODE),
        .SS(SS),
        .SPEED(SPEED),
        .LED8_out(LED8_out)
    );

    // Tạo xung clock 50MHz (chu kỳ 20ns)
    always #10 CK50M = ~CK50M;

initial begin
        CK50M = 0; RESET = 1; MODE = 0; SS = 0; SPEED = 0;
        #100;
        RESET = 0;
        
        SS = 1;  
        SPEED = 0; 
        #800_000_000; 
        
        MODE = 1;  
        SPEED = 1; 
        #400_000_000; 
        
        SS = 0;
        #50_000_000;
        
        $finish;
    end
endmodule