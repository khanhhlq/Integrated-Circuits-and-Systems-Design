module CK_1HZ (clk50m, clk1hz);
input clk50m;
output reg clk1hz;

reg [24:0] cnt;

initial
    begin
        cnt <= 1;  clk1hz <= 0;
    end
always @ (posedge clk50m)
    if (cnt == 25000000)
        begin
            clk1hz <= ~clk1hz;
            cnt <= 1;
        end
    else       cnt <= cnt + 1;
endmodule