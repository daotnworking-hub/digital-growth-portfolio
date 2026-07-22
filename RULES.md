# PORTFOLIO WIREFRAME FRAMEWORK & RULES — v3 (FIRE & LIGHTNING)

Tài liệu này quy định **toàn bộ tiêu chuẩn kiến trúc, hình khối, khoảng cách, bảng màu và dữ liệu** cho dự án `digital-growth-portfolio`. Bất kỳ lập trình viên hoặc AI Agent nào làm việc trên repository này đều **PHẢI TUÂN THỦ NGHIÊM NGẶT** các quy tắc dưới đây.

---

## 1. QUY TẮC "KHÔNG GIAN ĐỂ THỞ" (BREATHING ROOM RULES)

> **Nguyên tắc cốt lõi:** *"Các ô và các khối nội dung tuyệt đối không được để sát rạt nhau. Phải luôn dành không gian thở rộng rãi để tạo cảm giác chuyên nghiệp, sang trọng và dễ theo dõi."*

### 1.1 Chuẩn mực Spacing (Tailwind classes bắt buộc)
* **Khoảng cách giữa các Section lớn (Section Padding):** `py-40 sm:py-56` (160px → 224px theo chiều dọc).
* **Khoảng cách giữa các khối (Section Margin):** `my-16 sm:my-32` (64px → 128px).
* **Padding bên trong Card (`.fl-card` / `.glass-mirror`):** Tối thiểu `p-8 sm:p-12 md:p-16` tùy kích thước khối.
* **Khoảng cách giữa Tiêu đề Section và Nội dung (Header to Body Gap):** `mb-20 sm:mb-28`.
* **Gap giữa các ô Grid:** Tối thiểu `gap-8 sm:gap-12 md:gap-14`.

---

## 2. QUY TẮC HÌNH KHỐI & KHUNG XƯƠNG (SHAPES & LAYOUT)

### 2.1 Điểm neo Theming duy nhất (`.card-base` / `.glass-mirror`)
* Mọi khối nội dung trên trang (Skills, Experience slides, Dashboard cards, Project items) phải được bọc trong class `.glass-mirror` kết hợp `.fl-card`.
* **Tráng gương mờ (Glassmorphism Mirror):** `background: rgba(23, 11, 59, 0.55)`, `backdrop-filter: blur(20px)`, `border: 1px solid rgba(255, 255, 255, 0.15)`, bo góc lớn `border-radius: 20px sm:24px`.
* **Hiệu ứng tia sáng quét qua (`::before`):** Khi rê chuột (`hover`), một vệt sáng chéo (`transform: skewX(-25deg)`) quét từ trái sang phải thẻ card trong `0.75s`.

### 2.2 Viền lửa-sét xoay tròn (`.fl-card`)
* Tất cả card phải kế thừa từ `.fl-card`. Khi hover, viền chìm (`::after`) sẽ hiện lên và thực hiện animation `conic-gradient` xoay tròn 360 độ (`from var(--fl-angle)`) với chu kỳ `2.5s`.
* Màu viền xoay chuyển động tuần hoàn: `--fl-fire-1` (cam magma) → `--fl-fire-2` (vàng ember) → `--fl-bolt-1` (cyan điện) → `--fl-bolt-2` (tím spark).

---

## 3. BẢNG MÀU & TYPOGRAPHY "LỬA & SÉT" (FIRE & LIGHTNING)

### 3.1 Namespaced Color Tokens (`index.css`)
Cấm tuyệt đối hardcode mã màu HEX/RGB trực tiếp vào component JSX. Sử dụng hệ thống biến CSS hoặc class tương ứng:
* `--fl-fire-1: #FF5A1F` (Magma Orange — Nút CTA, điểm nhấn chính, viền gradient).
* `--fl-fire-2: #FFB020` (Ember Gold — Số liệu thống kê, tàn lửa bay, gạch chân).
* `--fl-bolt-1: #7CF5FF` (Electric Cyan — Hiệu ứng tia sét, hover kinetic, viền card).
* `--fl-bolt-2: #8B7BFF` (Violet Spark — Góc gradient, quầng sáng bolt thở).
* `--fl-bg: #0B0806` (Charcoal Ember Base — Nền tối ấm cho Footer & nền tầng sâu).

### 3.2 Typography Phân cấp
* **Display Font (Hero H1):** `Bebas Neue` (áp dụng qua class `.fl-display`), viết hoa toàn bộ, `letter-spacing: 0.04em`.
* **Section Heading (H2, H3):** `Cabinet Grotesk` hoặc `Outfit`, `font-weight: 800-900`.
* **Body & Description:** `Inter`, `font-weight: 300-500`, line-height `1.6`.
* **Monospace Stats (`.fl-mono`):** `JetBrains Mono` dành riêng cho các số liệu đếm đập (Impact Stats, KPIs, ROAS calculator).

---

## 4. HỆ THỐNG HIỆU ỨNG ĐỘNG (INTERACTION & KINETIC FX)

### 4.1 Fracture Line (`FractureLineSVG.jsx`)
* **Mô tả:** Đường tia sét nứt nẻ zigzag nối liền giữa **tất cả** các section lớn trên website.
* **Hành vi:** Sử dụng `IntersectionObserver` và `stroke-dashoffset`. Đường sét ban đầu ẩn, khi người dùng cuộn tới đâu, đường sét tự động **vẽ nứt ra tới đó** (`draw-on-scroll` trong 1.6s).
* **Vị trí bắt buộc:** Giữa Hero ↔ Stats ↔ Skills ↔ Experience ↔ Dashboards ↔ Projects ↔ Footer.

### 4.2 Tàn lửa bay (`Ember Particles ≤ 12`)
* Chỉ sử dụng **CSS pure (`@keyframes fl-ember-rise`)**, tuyệt đối **không** dùng thư viện JS nặng nề cho tàn lửa.
* Tối đa 12 hạt tàn lửa vàng (`--fl-fire-2`) bay lên từ đáy Hero Section, mỗi hạt có `dur`, `delay`, và `drift` ngẫu nhiên.

### 4.3 Dòng điện giật (`Stats Jolt Counter`)
* Khi số liệu ở phần Stats (`CountUp`) đếm xong tới con số đích, phải kích hoạt class `.fl-jolt-active` để tạo hiệu ứng **rung giật chớp nhoáng 0.28s** như dòng điện chạy qua.

### 4.4 Tia sét lướt nút (`.fl-btn-bolt`)
* Các nút CTA chính (`btn-neon-pink`, `btn-glass`) phải gắn class `.fl-btn-bolt`.
* Khi rê chuột (`hover`), một vệt tia sét chéo chạy lướt ngang nút **1 lần duy nhất trong 0.48s** (không lặp đi lặp lại gây rối mắt).

---

## 5. QUY TẮC DỮ LIỆU THỰC CHIẾN (DATA INTEGRATION RULES)

> **CẢNH BÁO:** *"Nghiêm cấm tự bịa đặt (hallucinate) số liệu hay dự án ảo. Mọi số liệu và dự án phải lấy trực tiếp từ quá trình làm việc thực tế của Trần Ngọc Đạo tại Lady House, VMGE, Acaci Labs và WiiMob Studio."*

### 5.1 Các chỉ số KPI bắt buộc phải hiển thị chuẩn xác
1. **Quản trị Ads & Doanh thu (Lady House):**
   * Ngân sách quản lý: **150 Triệu VNĐ/tháng**.
   * Doanh thu đem về: **500 Triệu VNĐ/tháng**.
   * Chỉ số ROAS duy trì: **~3.33x+**.
   * Các chỉ số đối soát: `CTR`, `CPC`, `CTA`, `CVR (68.5%)`, `AOV (1.736M VNĐ)`.
2. **Hệ thống Quản trị Telesale & Báo cáo Tự động (Lady House):**
   * Phải hiển thị các giao diện/dashboard đối soát thực tế: *Quản trị đội ngũ telesale, Training telesale, Báo cáo hiệu suất telesale (Số Leads, SĐT hợp lệ, Tỷ lệ Show-up, Khách chốt đơn, Lịch hẹn).*
3. **Kỹ năng Media Production:**
   * Adobe Photoshop (PTS), Premiere Pro, CapCut (sản xuất Video Shorts/Banner game cho Siêu Rồng Thần Huyền Thoại, Pirate Legends...).
   * Kỹ năng ngoại ngữ: **TOEIC 635 (Anh - Việt song ngữ)**.

---

## 6. QUY ĐỊNH BẢO TRÌ & MỞ RỘNG (MAINTENANCE)
* Không được phá vỡ cấu trúc responsive (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:flex-row`).
* Khi thêm mới dự án vào mảng `caseStudies` hay `dashboards`, phải đảm bảo đầy đủ metadata: `title`, `category`, `metrics`, `roas`, và hình ảnh/gallery rõ nét.
* Luôn tuân thủ tiêu chí **Accessibility**: Màn hình phải hoạt động tốt trên chế độ `prefers-reduced-motion` (tự động tắt animation phức tạp nếu OS người dùng yêu cầu giảm chuyển động).
