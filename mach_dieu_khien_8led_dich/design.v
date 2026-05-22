module led_controller(input clk, reset, input [1:0] sw, output reg [7:0] led);
    reg [31:0] clk_count;
    reg [31:0] max_count;
    reg clk_en;

    always @(*) begin
        case(sw)
            2'b00: max_count = 32'd50000000; // 1Hz
            2'b01: max_count = 32'd25000000; // 2Hz
            2'b10: max_count = 32'd12500000; // 4Hz
            2'b11: max_count = 32'd6250000;  // 8Hz
            default: max_count = 32'd50000000;
    end

    always @(posedge clk or posedge reset) begin
        if (reset) begin
            clk_count <= 32'd0;
            clk_en <= 1'b0;
        end
        else begin
            if (clk_count == max_count) begin
                clk_count <= 32'd0;
                clk_en <= 1'b1;
            end
            else begin
                clk_count <= clk_count + 1;
                clk_en <= 1'b0;
            end
        end
    end

    reg [3:0] step;

    always @(posedge clk or posedge reset) begin
        if (reset) begin
            step <= 4'd0;
            led <= 8'b00000000;
        end
        else if (clk_en) begin
            case(step)
                4'd0: led <= 8'b00000001;
                4'd1: led <= 8'b00000010;
                4'd2: led <= 8'b00000100;
                4'd3: led <= 8'b00001000;
                4'd4: led <= 8'b00010000;
                4'd5: led <= 8'b00100000;
                4'd6: led <= 8'b01000000;
                4'd7: led <= 8'b10000000;
                
                4'd8

                default: led <= 8'b00000000;
            endcase
            step <= step + 1;
        end
    end

endmodule