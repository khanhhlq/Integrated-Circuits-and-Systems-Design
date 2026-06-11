module CK_DIV (
    input clk50m, 
    output reg clkout
);
    reg [24:0] cnt;

    initial begin
        cnt <= 1;
        clkout <= 0;
    end

    always @(posedge clk50m) begin
        if (cnt == 25000000) begin
            clkout <= ~clkout;
            cnt <= 1;
        end else begin
            cnt <= cnt + 1;
        end
    end
endmodule

module DEM_8bit (
    input clk, reset, UD, SS, 
    output reg [7:0] LED8_out
);
    always @(posedge clk or posedge reset) begin
        if (reset) begin
            LED8_out <= 8'b0;
        end else begin
            if (SS) begin
                if (UD) 
                    LED8_out <= LED8_out + 1;
                else 
                    LED8_out <= LED8_out - 1;
            end
        end
    end
endmodule

module DEM_8bit_1Hz (
    input clk, reset, UD, SS, 
    output [7:0] LED8_out
);
    wire clk_1hz;

    CK_DIV IC1 (
        .clk50m(clk), 
        .clkout(clk_1hz)
    );
    
    DEM_8bit IC2 (
        .clk(clk_1hz), 
        .reset(reset), 
        .UD(UD), 
        .SS(SS), 
        .LED8_out(LED8_out)
    );
endmodule