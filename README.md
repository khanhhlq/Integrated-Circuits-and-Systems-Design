# 🚀 DSDS333564 - Digital System Design (Thiết kế Hệ thống Số)

Repository này lưu trữ toàn bộ mã nguồn, tài liệu và các bài tập thực hành trong suốt quá trình học tập môn **Thiết kế Hệ thống Số (Mã học phần: DSDS333564)**. 

---

## 📂 Cấu trúc Thư mục

Các bài tập và mạch thiết kế được phân loại chi tiết theo từng module:

### 1. Mạch Tổ hợp (Combinational Circuits)
* **`half-adder` / `full-adder`**: Mạch cộng bán phần và toàn phần.
* **`mux-2-to-1` / `mux-4-to-1`**: Bộ chọn kênh Multiplexer.
* **`demux-1-to-8`**: Bộ phân kênh Demultiplexer.
* **`decoder-2-to-4` / `decoder-for-7-seg-led`**: Bộ giải mã và mạch hiển thị LED 7 đoạn.
* **`encoder-4-to-2`**: Bộ mã hóa.

### 2. Mạch Tuần tự & Flip-Flop (Sequential Circuits)
* **`rs-latch` / `d-latch`**: Các loại mạch chốt (Latch).
* **`jk-flip-flop` / `t-flip-flop`**: Các loại Flip-Flop cơ bản.
* **`counter` / `asynchronous-counter` / `synchronous-counter`**: Các loại bộ đếm đồng bộ và bất đồng bộ.
* **`8-bit-up-down-counter` / `up-counter-8b-ss` / `up-down-counter4b`**: Bộ đếm tiến/lùi 8-bit và 4-bit.

### 3. Thanh ghi Dịch & Ứng dụng LED (Shift Registers & LEDs)
* **`shift-register-SISO` / `shift-register-SIPO`**: Các loại thanh ghi dịch.
* **Các module LED**: `led-sang-dan-pst`, `led-sang-dich-pst`, `led-sang-dan-tsp-pst`... (Các bài tập hiệu ứng quét LED).
* **`dem-8bit-1hz` / `dem-8bit-2speed`**: Mạch đếm tích hợp chia xung nhịp (Clock Divider).

---

## 🛠️ Công cụ Học tập
* **Ngôn ngữ:** Verilog / VHDL.
* **Phần mềm mô phỏng:** ModelSim, Vivado hoặc các công cụ thiết kế mạch số tương đương.
* **Hỗ trợ giao diện:** Các file tài liệu, giao diện web minh họa (`index.html`, `style.css`, `js`).

---

## 📥 Hướng dẫn Sử dụng

1. **Clone repository về máy:**
   ```bash
   git clone [https://github.com/khanhhlq/DSDS333564.git](https://github.com/khanhhlq/DSDS333564.git)
