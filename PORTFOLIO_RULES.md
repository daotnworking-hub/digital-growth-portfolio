# PORTFOLIO WIREFRAME FRAMEWORK & RULES — v3 (FIRE & LIGHTNING)

Tài liệu này quy định **toàn bộ tiêu chuẩn kiến trúc, hình khối, khoảng cách, bảng màu và dữ liệu** cho dự án `digital-growth-portfolio`. Bất kỳ lập trình viên hoặc AI Agent nào làm việc trên repository này đều **PHẢI TUÂN THỦ NGHIÊM NGẶT** các quy tắc dưới đây.

*(Xem chi tiết đầy đủ tại file [RULES.md](./RULES.md) trong thư mục gốc của repository).*

---

## 1. QUY TẮC "KHÔNG GIAN ĐỂ THỞ" (BREATHING ROOM RULES)
* **Section Padding:** `py-40 sm:py-56` (160px → 224px).
* **Section Margin:** `my-16 sm:my-32` (64px → 128px).
* **Card Padding (`.fl-card` / `.glass-mirror`):** `p-8 sm:p-12 md:p-16`.
* **Header to Body Gap:** `mb-20 sm:mb-28`.
* **Grid Gap:** `gap-8 sm:gap-12 md:gap-14`.

## 2. QUY TẮC HÌNH KHỐI (`.card-base` / `.glass-mirror`) & VIÈN (`.fl-card`)
* Bo góc 20px-24px, kính mờ (`rgba(23, 11, 59, 0.55)`), bóng sâu.
* Viền xoay chuyển động `conic-gradient` 360 độ (`2.5s/vòng`) qua 4 màu: `--fl-fire-1` → `--fl-fire-2` → `--fl-bolt-1` → `--fl-bolt-2`.

## 3. BẢNG MÀU & TYPOGRAPHY
* **Magma Orange:** `--fl-fire-1: #FF5A1F`
* **Ember Gold:** `--fl-fire-2: #FFB020`
* **Electric Cyan:** `--fl-bolt-1: #7CF5FF`
* **Violet Spark:** `--fl-bolt-2: #8B7BFF`
* **Display Font:** `Bebas Neue` (Hero H1).
* **Monospace Stats:** `JetBrains Mono` (`.fl-mono`).

## 4. QUY ĐỊNH DATA THỰC CHIẾN (NON-HALLUCINATION)
* Cấm bịa đặt số liệu.
* **Lady House:** Ngân sách **150 Tr/tháng**, Doanh thu **500 Tr/tháng**, ROAS **~3.33x+**, CVR **68.5%**, AOV **1.736M VNĐ**.
* Phải hiển thị hệ thống đối soát Telesale thực tế (Leads, SĐT hợp lệ, Show-up, Khách chốt).
* **VMGE & WiiMob:** TOEIC 635, Photoshop (PTS), Premiere Pro, CapCut, Booking KOLs/KOCs.
