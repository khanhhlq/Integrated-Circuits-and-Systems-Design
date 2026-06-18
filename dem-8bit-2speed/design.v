module DEM_8bit_2Speed(input CK50M, RESET, UD, SS, SPEED, output reg [7:0] LED8_out);
    reg [25:0] div_cnt;
    reg tick;

    parameter DIV_1HZ = 50_000_000 - 1;
    parameter DIV_5HZ = 10_000_000 - 1;

    wire [25:0] div_max;

    assign div_max = SPEED ? DIV_5HZ : DIV_1HZ;

    always @(posedge CK50M or posedge RESET)
    begin
        if(RESET)
        begin
            div_cnt <= 0;
            tick <= 0;
        end
        else
        begin
            if(div_cnt == div_max)
            begin
                div_cnt <= 0;
                tick <= 1'b1;
            end
            else
            begin
                div_cnt <= div_cnt + 1'b1;
                tick <= 1'b0;
            end
        end
    end

    always @(posedge CK50M or posedge RESET)
    begin
        if(RESET)
            LED8_out <= 8'd0;
        else if(tick && SS)
        begin
            if(!UD)
                LED8_out <= LED8_out + 1'b1;
            else
                LED8_out <= LED8_out - 1'b1;
        end
    end
endmodule