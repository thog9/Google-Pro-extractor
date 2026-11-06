# Google Pro Extractor 🎯

Tiện ích Chrome hỗ trợ xử lý các mã ưu đãi Google AI Pro (2TB / 5TB) trong luồng thanh toán Google Play.

> Hoạt động trên Google One — cộng dồn tới **24 tháng** AI Pro với giá **$0.00**.

---

## ✨ Tính năng

- ✅ Kích hoạt một click các offer token miễn phí của AI Pro (`12 tháng` + `6 tháng × 3`)
- ✅ 4 lựa chọn gói — **Gói 1 → Gói 3** + **Gói dự phòng**
- ✅ Trạng thái kích hoạt hiển thị trực tiếp ngay dưới phần chọn gói
- ✅ Cảnh báo giá lúc thanh toán — banner xanh/đỏ ngay trong popup Play checkout
- ✅ 3 ngôn ngữ giao diện — **Tiếng Việt, English, 中文** (đổi trong một click)
- ✅ Chế độ Tối / Sáng (nhớ lựa chọn của bạn)
- ✅ Hướng dẫn từng bước dạng gập gọn (5 bước, bấm mới mở)
- ✅ Giao diện phong cách THOG — tối giản, không rối

---

## 🛠️ Cài đặt

> Không cần Chrome Web Store — cài thủ công bằng chế độ nhà phát triển.

1. **Tải hoặc clone repo:**
   ```sh
   git clone https://github.com/thog9/Google-Pro-extractor.git
   ```

2. **Mở trang tiện ích của Chrome:**
   ```
   chrome://extensions/
   ```

3. **Bật Chế độ nhà phát triển** (công tắc góc trên bên phải)

4. **Bấm "Load unpacked"** → chọn thư mục vừa clone

5. Biểu tượng **Thog · Google AI Pro Injector** sẽ xuất hiện trên thanh công cụ ✅

---

## 🚀 Cách sử dụng

### Bước 1 — Kiểm tra tài khoản

Mở [one.google.com/plans](https://one.google.com/plans), kiểm tra **email góc trên bên trái** là tài khoản bạn muốn dùng.

### Bước 2 — Chọn gói

Mở tiện ích → chọn **Gói 1 · 12 tháng** → **tải lại trang plans**.

Badge ở **góc dưới bên phải của trang** sẽ hiện trạng thái kích hoạt.

### Bước 3 — Thanh toán

Đảm bảo Google One đang chọn **chu kỳ thanh toán Năm (Annual)** cho AI Pro — token chỉ áp dụng cho hạn mức theo năm.

Bấm **Get discount** trên thẻ AI Pro → cửa sổ Play checkout mở ra → đối chiếu điều khoản ưu đãi và **giá cuối cùng phải là $0.00** → đăng ký.

> 💡 Sau khi cộng dồn tháng, checkout có thể hiện **ngày gia hạn trong tương lai** — đó là thời hạn đã cộng dồn, không phải bị trừ tiền hôm nay. Luôn kiểm tra kỹ số tiền là $0.00.

### Bước 4 — Cộng dồn gói tiếp theo

Quay lại tiện ích → chuyển sang **Gói 2** (6 tháng SS) → tải lại trang → đăng ký tiếp. Lặp lại với **Gói 3** để đạt **24 tháng**.

### Bước 5 — Quản lý thanh toán

Xong xuôi, mở [play.google.com/store/account/subscriptions](https://play.google.com/store/account/subscriptions) → xem đăng ký → **tắt tự động gia hạn**.

> 💡 "Google Play" ở đây chỉ là hệ thống thanh toán — popup checkout hiện ngay trên PC, không cần điện thoại hay app Play Store.

> 💡 Hướng dẫn đầy đủ nằm sẵn trong tiện ích — bấm **HƯỚNG DẪN SỬ DỤNG** để mở từng bước.

---

## 📁 Cấu trúc file

```
Google-Pro-extractor/
├── manifest.json        # Cấu hình tiện ích (Manifest V3)
├── popup.html           # Giao diện tiện ích (phong cách THOG)
├── popup.js             # Logic popup: chọn gói, đa ngôn ngữ (VI/EN/ZH), trạng thái
├── style.css            # Kiểu dáng, hỗ trợ theme tối/sáng
├── relay.js             # Content script — chuyển config & ngôn ngữ vào trang
├── injector.js          # Script main-world — tiêm offer token vào request thanh toán
├── guard.js             # Banner cảnh báo giá trong iframe Play checkout
└── guard-lang.js        # Chuyển ngôn ngữ đã chọn sang guard.js
```

---

## 🔍 Nguyên lý hoạt động

1. **Chọn gói** — popup lưu gói bạn chọn vào `chrome.storage`
2. **Tiêm token** — `injector.js` (main world) can thiệp request checkout Play trên `one.google.com`, thay subscription item bằng offer token của gói đang chọn
3. **Trạng thái** — badge trên trang báo ngược qua `relay.js`, popup luôn hiển thị trạng thái kích hoạt chính xác
4. **Cảnh báo giá** — `guard.js` đọc điều khoản thật của trang checkout và hiện banner:
   - 🟢 **Xanh** — xác nhận dùng thử miễn phí, đăng ký an toàn (vẫn tự kiểm tra $0.00)
   - 🔴 **Đỏ** — phát hiện tính phí, ĐỪNG đăng ký — đổi gói rồi thử lại

---

## ⚠️ Lưu ý

- **KHÔNG dùng tài khoản Google chính.** Công cụ can thiệp giá checkout và Google có thể flag tài khoản.
- **YouTube Premium add-on chỉ bán ở 6 quốc gia** — 🇺🇸 🇨🇦 🇧🇷 🇫🇷 🇩🇪 🇯🇵. Nếu gặp lỗi *"Không mua được YouTube Premium Individual Add On"*, hãy đổi quốc gia thanh toán Google Play sang **Mỹ** rồi thử lại.
- Luôn xác nhận **giá cuối cùng trên trang thanh toán là $0.00** trước khi đăng ký — dựa vào điều khoản chính thức, đừng chỉ tin màu banner.
- Tiện ích chỉ can thiệp request thanh toán trong **trình duyệt của chính bạn** — offer token đóng gói sẵn trong code, không gửi dữ liệu đi đâu cả.
- Sử dụng có trách nhiệm và chỉ dùng cho tài khoản của bạn.

---

## 📨 Liên hệ

Kết nối với chúng tôi để được hỗ trợ hoặc cập nhật:

- **Telegram**: [thog099](https://t.me/thog099)
- **Kênh**: [CHANNEL](https://t.me/thogairdrops)
- **Nhóm**: [GROUP CHAT](https://t.me/thogchats)
- **X**: [Thog](https://x.com/thog099)

---

## ☕ Ủng hộ chúng tôi

Thích mấy công cụ này? Mời chúng tôi một ly cà phê nhé!

🔗 BUYMECAFE: [BUY ME CAFE](https://buymecafe.vercel.app/)

🔗 WEBSITE: [MUA SCRIPTS](https://thogtoolhub.com/)
