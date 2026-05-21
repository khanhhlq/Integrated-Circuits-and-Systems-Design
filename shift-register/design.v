
module DFF (
    input wire d,
    input wire clk,
    output reg q
);

    always @(posedge clk) begin
        q <= d;
    end

endmodule

module SISO (
    input wire in,
    input wire clk,
    output wire q1,
    output wire q2,
    output wire q3,
    output wire q4
);

    DFF ff1 (.d(in), .clk(clk), .q(q1));
    DFF ff2 (.d(q1), .clk(clk), .q(q2));
    DFF ff3 (.d(q2), .clk(clk), .q(q3));
    DFF ff4 (.d(q3), .clk(clk), .q(q4));

endmodule