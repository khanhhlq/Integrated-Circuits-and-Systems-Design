module Counter
    #(parameter N = 8)
    (
        input wire clk, 
        input wire reset,  
        output wire [N-1:0] q
    );

    reg [N-1:0] r_reg;
    wire [N-1:0] r_next;

    always @(posedge clk or posedge reset) begin
        if (reset) begin
            r_reg <= 0;
        end else begin
            r_reg <= r_next;
        end
    end 

    assign r_next = r_reg + 1;
    assign q = r_reg;
endmodule