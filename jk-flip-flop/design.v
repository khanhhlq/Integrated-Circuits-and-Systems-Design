`timescale 1ns / 1ps

module jk_flip_flop (
    input wire j,
    input wire k,
    input wire clk,
    input wire pre,
    input wire clr,
    output reg q,
    output reg qd
);

    // Khối xử lý tích cực theo sườn xuống của Clock và các chân điều khiển bất đồng bộ
    always @(negedge clk or negedge pre or negedge clr) begin
        if (!pre) begin
            // Khi PRE = 0 (Bất đồng bộ): Ép Q lên 1 ngay lập tức không đợi Clock
            q <= 1'b1;
            // Nếu CLR cũng bằng 0 thì QD = 1 (Dòng 1), ngược lại nếu CLR = 1 thì QD = 0 (Dòng 2)
            qd <= (!clr) ? 1'b1 : 1'b0; 
        end
        else if (!clr) begin
            // Khi PRE = 1 và CLR = 0 (Bất đồng bộ - Dòng 3): Ép Q về 0, QD lên 1
            q  <= 1'b0;
            qd <= 1'b1;
        end
        else begin
            // Khi cả PRE = 1 và CLR = 1: Mạch hoạt động đồng bộ tại sườn xuống (negedge clk)
            // Tự động bao hàm cả việc giữ nguyên trạng thái khi CLK không có sườn tác động (Dòng 4)
            case ({j, k})
                2'b00: begin
                    // Dòng 5: Giữ nguyên trạng thái cũ (Qo, QDo)
                    q  <= q;
                    qd <= qd;
                end
                2'b01: begin
                    // Dòng 6: Lệnh Reset (Q = 0, QD = 1)
                    q  <= 1'b0;
                    qd <= 1'b1;
                end
                2'b10: begin
                    // Dòng 7: Lệnh Set (Q = 1, QD = 0)
                    q  <= 1'b1;
                    qd <= 1'b0;
                end
                2'b11: begin
                    // Dòng 8: Lệnh Đảo trạng thái (Toggle)
                    q  <= ~q;
                    qd <= ~qd;
                end
            endcase
        end
    end

endmodule