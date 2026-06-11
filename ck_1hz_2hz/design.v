module CK_DIV (
    input wire CK50M,
    input wire MODE, // Chỉ làm mode 0 và 1 nên cần 1-bit
    output reg clk
);

    reg [24:0] cnt;
    reg [24:0] max_count;

    // Khởi tạo trạng thái ban đầu
    initial begin
        cnt <= 1;
        clk <= 0;
    end

    // Khối tổ hợp chọn ngưỡng đếm dựa theo MODE
    always @(*) begin
        case (MODE)
            1'b0: max_count = 25000000; // Ngưỡng cho 1 Hz
            1'b1: max_count = 12500000; // Ngưỡng cho 2 Hz
            default: max_count = 25000000;
        endcase
    end

    // Khối tuần tự thực hiện đếm và đảo xung
    always @(posedge CK50M) begin
        if (cnt >= max_count) begin
            clk <= ~clk;
            cnt <= 1;
        end else begin
            cnt <= cnt + 1;
        end
    end

endmodule