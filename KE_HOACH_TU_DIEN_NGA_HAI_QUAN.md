# KẾ HOẠCH XÂY DỰNG ỨNG DỤNG
# **TỪ ĐIỂN TIẾNG NGA KỸ THUẬT HẢI QUÂN**
### Hỗ trợ học viên Quân chủng Hải quân học tiếng Nga trình độ TRKI I

---

**Chủ nhiệm đề án:** Khổng Thu Hiền — Giáo viên Bộ môn Tiếng Nga
**Đơn vị:** Trung tâm Nhiệt đới Việt - Nga
**Đối tượng thụ hưởng:** Học viên Quân chủng Hải quân
**Thời gian đào tạo:** 01 năm (TRKI I — Уровень B1)
**Nền tảng:** Web + Mobile (đa nền tảng)
**Phiên bản kế hoạch:** 1.0

---

## MỤC LỤC

1. [Tổng quan dự án](#1-tổng-quan-dự-án)
2. [Phân tích đối tượng người dùng](#2-phân-tích-đối-tượng-người-dùng)
3. [Mục tiêu và phạm vi](#3-mục-tiêu-và-phạm-vi)
4. [Tính năng chi tiết của ứng dụng](#4-tính-năng-chi-tiết-của-ứng-dụng)
5. [Kiến trúc kỹ thuật](#5-kiến-trúc-kỹ-thuật)
6. [Cấu trúc dữ liệu từ điển](#6-cấu-trúc-dữ-liệu-từ-điển)
7. [Kế hoạch xây dựng nội dung chuyên ngành](#7-kế-hoạch-xây-dựng-nội-dung-chuyên-ngành)
8. [Lộ trình triển khai 12 tháng](#8-lộ-trình-triển-khai-12-tháng)
9. [Nguồn lực, công cụ và chi phí](#9-nguồn-lực-công-cụ-và-chi-phí)
10. [Tiêu chí đánh giá và kế hoạch duy trì](#10-tiêu-chí-đánh-giá-và-kế-hoạch-duy-trì)
11. [Phụ lục](#11-phụ-lục)

---

## 1. TỔNG QUAN DỰ ÁN

### 1.1. Bối cảnh và sự cần thiết

Học viên Quân chủng Hải quân khi tham gia đào tạo tại Trung tâm Nhiệt đới Việt - Nga phải đạt chuẩn TRKI I (tương đương B1 theo khung CEFR) sau 01 năm học, đồng thời làm chủ được hệ thống thuật ngữ tiếng Nga chuyên ngành hải quân (tàu chiến, vũ khí, hàng hải, thông tin liên lạc, thủy văn...) — là khối từ vựng **không có trong các từ điển Nga - Việt phổ thông**, cũng không được phủ trong giáo trình TRKI chuẩn.

Việc xây dựng một ứng dụng từ điển chuyên ngành hải quân, tích hợp trực tiếp với chương trình TRKI I, sẽ giải quyết đồng thời ba khó khăn: (1) thiếu tài nguyên tra cứu chuyên ngành; (2) thiếu công cụ luyện tập tự học ngoài giờ lên lớp; (3) thiếu cơ chế ôn tập có hệ thống theo lộ trình TRKI.

### 1.2. Tầm nhìn sản phẩm

Trở thành **công cụ học tập cốt lõi** đồng hành cùng học viên Hải quân trong toàn bộ 01 năm đào tạo tại Trung tâm, đồng thời là **cơ sở dữ liệu thuật ngữ chuẩn** để mở rộng cho các khóa sau và chia sẻ liên đơn vị.

### 1.3. Giá trị mang lại

- **Với học viên:** Rút ngắn 30–40% thời gian tra cứu, tăng khả năng ghi nhớ từ vựng chuyên ngành, chủ động ôn luyện mọi lúc mọi nơi (web tại thư viện, mobile ngoài giờ).
- **Với giảng viên:** Có công cụ kiểm tra, giao bài, theo dõi tiến độ học từ vựng của từng học viên.
- **Với Trung tâm:** Xây dựng được kho học liệu số đặc thù, không phụ thuộc vào tài liệu nước ngoài.

---

## 2. PHÂN TÍCH ĐỐI TƯỢNG NGƯỜI DÙNG

### 2.1. Người dùng chính — Học viên Hải quân

| Đặc điểm | Mô tả |
|---|---|
| Độ tuổi | 20–35 tuổi |
| Trình độ đầu vào | A1–A2 (cơ bản) |
| Trình độ đầu ra mục tiêu | TRKI I (B1) + chuyên ngành |
| Thiết bị sử dụng | Smartphone cá nhân (ngoài giờ), máy tính PC (tại phòng học) |
| Thời gian tự học | ~2 giờ/ngày ngoài giờ chính khóa |
| Đặc thù quân sự | Cần tính năng hoạt động **offline** (khi không có mạng), giao diện nghiêm túc, không quảng cáo |

### 2.2. Người dùng phụ — Giảng viên Bộ môn Tiếng Nga

- Quản trị nội dung: thêm/sửa/xóa từ vựng, đính kèm audio, ngữ cảnh.
- Thiết kế bài học, bài kiểm tra theo tuần/tháng.
- Theo dõi tiến độ học của học viên, xuất báo cáo.

### 2.3. Người dùng quản trị — Admin hệ thống

- Quản lý tài khoản học viên theo khóa/đại đội.
- Sao lưu dữ liệu, phân quyền, thống kê hệ thống.

---

## 3. MỤC TIÊU VÀ PHẠM VI

### 3.1. Mục tiêu định tính

1. Trang bị cho học viên công cụ tra cứu và học tập thuật ngữ hải quân tiếng Nga đầy đủ, chuẩn xác, có ngữ cảnh.
2. Tích hợp chặt chẽ với chương trình TRKI I để vừa phục vụ thi chuẩn, vừa phục vụ công tác chuyên môn.
3. Hỗ trợ đa phương thức học: tra cứu, flashcard, quiz, luyện câu, luyện dịch, nghe phát âm.

### 3.2. Mục tiêu định lượng (KPI)

| Chỉ tiêu | Mục tiêu |
|---|---|
| Số mục từ chuyên ngành hải quân | ≥ 3.000 mục từ |
| Số mục từ TRKI I (tích hợp) | ≥ 2.300 mục từ |
| Số chủ đề từ vựng | 15–20 chủ đề chính |
| Số bài quiz theo chủ đề | ≥ 100 bài |
| Số câu ví dụ có audio | ≥ 5.000 câu |
| Tỷ lệ học viên sử dụng hàng tuần | ≥ 80% |
| Thời gian load ứng dụng (mobile) | < 3 giây |

### 3.3. Phạm vi (Trong / Ngoài)

**TRONG phạm vi:**
- Từ điển Nga → Việt và Việt → Nga (chuyên ngành Hải quân + TRKI I).
- Phát âm chuẩn (audio + phiên âm IPA).
- Flashcard theo thuật toán lặp lại ngắt quãng (SRS — Spaced Repetition).
- Quiz trắc nghiệm, điền khuyết, ghép cặp.
- Dịch câu chuyên ngành + ghi chú ngữ pháp TRKI I.
- Chế độ offline cho mobile.
- Đồng bộ tiến độ học giữa web và mobile.

**NGOÀI phạm vi (bản 1.0):**
- Nhận dạng giọng nói để chấm phát âm (đề xuất bản 2.0).
- Chatbot AI hội thoại (đề xuất bản 2.0).
- Module thi TRKI chính thức (chỉ luyện tập, không cấp chứng chỉ).

---

## 4. TÍNH NĂNG CHI TIẾT CỦA ỨNG DỤNG

### 4.1. Nhóm tính năng TRA CỨU (ưu tiên cao nhất)

#### F1. Tìm kiếm song ngữ Nga ↔ Việt

- Nhập từ tiếng Nga (có hỗ trợ bàn phím Cyrillic ảo) hoặc tiếng Việt.
- Hỗ trợ **tìm kiếm gần đúng (fuzzy search)** — học viên gõ sai chính tả vẫn gợi ý đúng.
- Hỗ trợ **tìm theo gốc từ (lemma)** — gõ `корабли` vẫn tra được `корабль`.
- Lịch sử tra cứu, từ yêu thích (bookmark).

#### F2. Trang chi tiết mục từ

Mỗi mục từ hiển thị đầy đủ:

| Thành phần | Ví dụ minh họa |
|---|---|
| Từ tiếng Nga + trọng âm | **корабл`ь** |
| Phiên âm IPA | [kɐˈrablʲ] |
| Nút phát âm (audio) | 🔊 (giọng nam + nữ) |
| Từ loại + biến cách | Danh từ giống đực, cách 2: корабля |
| Nghĩa tiếng Việt | tàu (chiến, biển) |
| Thuộc chủ đề | Phương tiện hải quân |
| Cấp độ TRKI | B1 / Chuyên ngành |
| Câu ví dụ (3–5 câu) | Có audio + dịch tiếng Việt |
| Từ đồng nghĩa / liên quan | судно, военный корабль |
| Ghi chú ngữ pháp | Quy tắc biến cách đặc biệt |

#### F3. Bàn phím Cyrillic ảo

Học viên có thể gõ tiếng Nga ngay cả khi thiết bị không cài bàn phím Nga — đặc biệt quan trọng với học viên mới.

---

### 4.2. Nhóm tính năng HỌC THEO CHỦ ĐỀ (ưu tiên cao)

#### F4. Cây chủ đề từ vựng (Topic Tree)

Tổ chức từ vựng theo cấu trúc phân cấp 2 tầng:

```
📂 Chủ đề chuyên ngành Hải quân
   ├── 01. Tàu chiến & phương tiện (Корабли и суда)
   ├── 02. Vũ khí trên tàu (Вооружение)
   ├── 03. Hàng hải & điều hướng (Навигация)
   ├── 04. Radar, sonar, thông tin (Радар, ГАС, связь)
   ├── 05. Thủy văn & khí tượng biển (Гидрометеорология)
   ├── 06. Cấp bậc & chức vụ (Звания и должности)
   ├── 07. Điều lệnh & khẩu lệnh (Команды)
   ├── 08. Kỹ thuật & bảo dưỡng (Техника и ремонт)
   ├── 09. Cảng, căn cứ, hậu cần (Базы и логистика)
   ├── 10. An toàn & cứu hộ trên biển (Безопасность)
   └── ...

📂 Chủ đề TRKI I (B1)
   ├── Семья и дом
   ├── Работа и профессия
   ├── Здоровье
   └── ...
```

#### F5. Flashcard với thuật toán SRS

- Áp dụng thuật toán **SM-2 (SuperMemo)** hoặc tương tự để lặp lại từ khó đúng thời điểm sắp quên.
- Học viên tự đánh giá: "Dễ / Bình thường / Khó / Quên hoàn toàn" → hệ thống tự động lên lịch ôn lại.
- Hiển thị 2 chiều: Nga → Việt và Việt → Nga.
- Biểu đồ tiến độ theo ngày/tuần.

#### F6. Bộ câu hỏi luyện tập (Quiz)

Bốn dạng bài chính:

1. **Trắc nghiệm 4 đáp án** — chọn nghĩa đúng.
2. **Điền khuyết** — điền từ vào câu chuyên ngành.
3. **Ghép cặp** — nối từ Nga với nghĩa Việt.
4. **Nghe và chọn** — nghe phát âm, chọn từ đúng.

Mỗi quiz có bảng xếp hạng (leaderboard) trong nội bộ đại đội để tạo động lực thi đua.

---

### 4.3. Nhóm tính năng DỊCH & NGỮ PHÁP (ưu tiên cao)

#### F7. Dịch câu chuyên ngành

- Học viên nhập một câu tiếng Nga (hoặc Việt) → nhận bản dịch + chú giải từ vựng chuyên ngành có trong câu.
- Nếu câu vượt ngoài cơ sở dữ liệu, hệ thống gọi API dịch máy (Yandex Translate / DeepL) **có gắn cảnh báo "bản dịch tham khảo"**.
- Cho phép giảng viên duyệt lại bản dịch và đưa vào kho câu mẫu chuẩn.

#### F8. Tra cứu ngữ pháp TRKI I

Mục lục ngữ pháp tích hợp theo chương trình TRKI I:

- 6 cách của danh từ, tính từ, đại từ (Падежи).
- Thể hoàn thành / chưa hoàn thành của động từ (Виды глагола).
- Động từ chuyển động (Глаголы движения).
- Tính động từ, trạng động từ (Причастия, деепричастия — mức cơ bản).
- Câu phức — liên từ phổ biến.

Mỗi điểm ngữ pháp có: **Giải thích ngắn (tiếng Việt) + Bảng minh họa + 5–10 câu ví dụ có audio + Bài tập nhỏ.**

---

### 4.4. Nhóm tính năng NGHE & PHÁT ÂM

#### F9. Phát âm chuẩn

- Audio gốc do giảng viên bản ngữ thu (đối với từ chuyên ngành Hải quân).
- Audio TTS (Text-to-Speech) cao cấp của **Yandex SpeechKit** cho các câu ví dụ và thuật ngữ mở rộng.
- Cho phép nghe chậm (0.75x) / bình thường / nhanh (1.25x).

#### F10. Thư viện nghe chuyên ngành

- Bộ các đoạn hội thoại ngắn (1–3 phút) theo ngữ cảnh hải quân: hội thoại trên tàu, báo cáo vị trí, thông tin liên lạc...
- Có transcript song ngữ + đánh dấu từ khóa.

---

### 4.5. Nhóm tính năng QUẢN LÝ HỌC TẬP

#### F11. Hồ sơ học tập cá nhân

Mỗi học viên có dashboard hiển thị:

- Số từ đã học / đã thuộc / chưa thuộc.
- Streak (số ngày học liên tục).
- Biểu đồ thời gian học trong 30 ngày.
- Huy hiệu thành tích (gamification) — tạo động lực quân sự kiểu "chiến sĩ giỏi".

#### F12. Cổng giảng viên (Teacher Portal)

- Giao bài tuần (từ vựng cần học + quiz).
- Xem báo cáo tiến độ từng học viên / đại đội.
- Xuất báo cáo PDF hoặc Excel.
- Thêm từ mới vào từ điển (có quy trình duyệt nội bộ).

#### F13. Cổng quản trị (Admin Portal)

- Quản lý tài khoản theo khóa đào tạo.
- Sao lưu dữ liệu định kỳ.
- Phân quyền: Học viên / Giảng viên / Quản trị.

---

### 4.6. Nhóm tính năng HẠ TẦNG

#### F14. Chế độ Offline (mobile)

- Tải về gói dữ liệu chủ đề để học khi không có mạng — phù hợp với điều kiện dã ngoại, trực ban.
- Đồng bộ khi có kết nối trở lại.

#### F15. Đồng bộ đa thiết bị

- Đăng nhập trên web và mobile cùng tài khoản → tiến độ học, flashcard, bookmark tự đồng bộ.

#### F16. Bảo mật & phân quyền

- Đăng nhập bằng tài khoản do Trung tâm cấp (không mở đăng ký tự do).
- Mã hóa dữ liệu học viên (HTTPS, JWT, bcrypt).
- Nhật ký truy cập (audit log) — phù hợp quy định quân sự.

---

## 5. KIẾN TRÚC KỸ THUẬT

### 5.1. Sơ đồ tổng thể

```
┌────────────────────┐       ┌────────────────────┐
│   WEB APP (React)  │       │  MOBILE APP        │
│   Trình duyệt PC   │       │  (React Native     │
│                    │       │   hoặc Flutter)    │
└─────────┬──────────┘       └─────────┬──────────┘
          │                            │
          │        HTTPS / REST        │
          └─────────────┬──────────────┘
                        │
            ┌───────────▼────────────┐
            │   BACKEND API          │
            │   (Node.js + Express   │
            │    hoặc Python FastAPI)│
            └───────────┬────────────┘
                        │
       ┌────────────────┼───────────────┬─────────────────┐
       │                │               │                 │
┌──────▼─────┐  ┌──────▼──────┐  ┌─────▼─────┐   ┌───────▼──────┐
│ PostgreSQL │  │  Redis cache│  │ File/S3   │   │  TTS API     │
│ (từ điển,  │  │  (tra cứu   │  │ (audio,   │   │  (Yandex     │
│  user,SRS) │  │   nhanh)    │  │  hình ảnh)│   │  SpeechKit)  │
└────────────┘  └─────────────┘  └───────────┘   └──────────────┘
```

### 5.2. Lựa chọn công nghệ khuyến nghị

| Tầng | Công nghệ | Lý do chọn |
|---|---|---|
| **Frontend Web** | React + TypeScript + TailwindCSS | Hệ sinh thái lớn, nhiều kỹ sư Việt Nam thành thạo |
| **Frontend Mobile** | React Native (hoặc Flutter) | Chia sẻ tối đa code với web; 1 codebase cho iOS + Android |
| **Backend** | Node.js + Express + TypeScript | Ngôn ngữ thống nhất với frontend, triển khai nhanh |
| **Cơ sở dữ liệu** | PostgreSQL | Hỗ trợ full-text search tiếng Nga rất tốt (cấu hình `russian` dictionary) |
| **Cache** | Redis | Tăng tốc tra cứu từ phổ biến |
| **Lưu trữ file** | MinIO (on-premise) hoặc AWS S3 | Lưu audio, hình ảnh minh họa |
| **TTS** | Yandex SpeechKit | Giọng Nga chuẩn, tự nhiên nhất hiện nay |
| **Tìm kiếm** | PostgreSQL FTS hoặc Meilisearch | Fuzzy search, hỗ trợ tiếng Nga |
| **CI/CD** | GitLab CI + Docker | Triển khai nội bộ an toàn |
| **Hạ tầng** | Máy chủ nội bộ Trung tâm (on-premise) | Phù hợp yêu cầu bảo mật quân sự |

### 5.3. Phương án thay thế (nếu thiếu nhân lực lập trình)

Nếu chưa có đội phát triển riêng, có thể bắt đầu với **nền tảng no-code/low-code** để có MVP nhanh (2–3 tháng):

- **Glide Apps** hoặc **AppSheet** (Google) — tạo mobile app từ Google Sheet.
- **Bubble.io** — tạo web app kéo-thả.
- Sau đó mới nâng cấp lên bản native khi có ngân sách.

---

## 6. CẤU TRÚC DỮ LIỆU TỪ ĐIỂN

### 6.1. Schema mục từ (Entry)

```json
{
  "id": "nav_0001",
  "russian": "корабль",
  "russian_stressed": "кор`абль",
  "ipa": "[kɐˈrablʲ]",
  "part_of_speech": "noun",
  "gender": "masculine",
  "declension_type": "2nd",
  "declensions": {
    "nominative_sg": "корабль",
    "genitive_sg": "корабля",
    "dative_sg": "кораблю",
    "accusative_sg": "корабль",
    "instrumental_sg": "кораблём",
    "prepositional_sg": "корабле",
    "nominative_pl": "корабли",
    "genitive_pl": "кораблей"
  },
  "vietnamese": ["tàu", "tàu chiến", "con tàu"],
  "domain": "naval",
  "topic_id": "naval_01_ships",
  "trki_level": "specialized",
  "frequency_rank": 125,
  "audio": {
    "male": "audio/nav_0001_m.mp3",
    "female": "audio/nav_0001_f.mp3"
  },
  "examples": [
    {
      "ru": "Военный корабль вошёл в порт.",
      "vi": "Tàu chiến đã vào cảng.",
      "audio": "audio/nav_0001_ex1.mp3"
    }
  ],
  "synonyms": ["судно", "военное судно"],
  "related_terms": ["флот", "эскадра", "капитан"],
  "grammar_notes": "Từ chỉ phương tiện không có sinh mệnh — cách 4 giống cách 1.",
  "image": "img/nav_0001.jpg",
  "created_by": "teacher_id_03",
  "verified": true,
  "updated_at": "2026-05-01T10:00:00Z"
}
```

### 6.2. Schema tiến độ học viên (User Progress)

```json
{
  "user_id": "nav_student_0425",
  "entry_id": "nav_0001",
  "srs": {
    "easiness": 2.5,
    "interval_days": 6,
    "repetitions": 3,
    "next_review": "2026-05-15",
    "last_result": "good"
  },
  "quiz_stats": {
    "attempts": 12,
    "correct": 10,
    "accuracy": 0.83
  },
  "bookmarked": true
}
```

### 6.3. Các bảng cốt lõi (PostgreSQL)

1. `entries` — mục từ từ điển.
2. `topics` — cây chủ đề.
3. `examples` — câu ví dụ.
4. `users` — tài khoản (học viên, giảng viên, admin).
5. `user_progress` — tiến độ học từng mục từ (SRS).
6. `quizzes` / `quiz_questions` / `quiz_attempts` — hệ thống bài quiz.
7. `grammar_topics` — các bài ngữ pháp TRKI I.
8. `audio_files` — metadata file audio.
9. `audit_log` — nhật ký truy cập (yêu cầu quân sự).

---

## 7. KẾ HOẠCH XÂY DỰNG NỘI DUNG CHUYÊN NGÀNH

Đây là phần **công sức lớn nhất** và quyết định chất lượng sản phẩm — vì nguồn từ vựng phải xây dựng mới hoàn toàn.

### 7.1. Nguồn tài liệu để trích xuất từ vựng

| Loại nguồn | Ví dụ | Ghi chú |
|---|---|---|
| Giáo trình tiếng Nga quân sự Nga | Курс военного перевода (Е.Г. Пыриков) | Nguồn gốc Liên bang Nga |
| Điều lệnh Hải quân Liên bang Nga | Корабельный устав ВМФ РФ | Thuật ngữ chuẩn |
| Từ điển thuật ngữ quân sự Nga-Anh | Military Russian-English Dictionary | Đối chiếu chéo |
| Tài liệu kỹ thuật tàu (do Trung tâm có) | Hướng dẫn sử dụng thiết bị | Nguồn nội bộ quan trọng |
| Báo chí chuyên ngành Nga | Tạp chí "Морской сборник" | Từ vựng cập nhật |
| Từ điển Nga-Việt hàng hải (nếu có) | Các từ điển đã xuất bản trong nước | Đối chiếu, bổ sung |

### 7.2. Quy trình xây dựng mục từ

```
Bước 1: Giảng viên trích xuất từ khóa từ nguồn tài liệu
   ↓
Bước 2: Nhập vào bảng Excel theo template chuẩn
   ↓
Bước 3: Đối chiếu bản dịch Nga → Việt (chuyên gia ngôn ngữ)
   ↓
Bước 4: Bổ sung ngữ cảnh, ví dụ (chuyên gia hải quân duyệt kỹ thuật)
   ↓
Bước 5: Thu âm / sinh audio TTS
   ↓
Bước 6: Nhập vào cơ sở dữ liệu, đánh dấu "đã duyệt"
   ↓
Bước 7: Kiểm thử với nhóm học viên thử nghiệm
```

### 7.3. Mục tiêu nội dung theo quý

| Quý | Số chủ đề hoàn thành | Số mục từ mới | Số câu ví dụ |
|---|---|---|---|
| Q1 | 3 chủ đề (tàu, vũ khí, hàng hải) | 800 | 1.500 |
| Q2 | 3 chủ đề (radar, thủy văn, cấp bậc) | 800 | 1.500 |
| Q3 | 3 chủ đề (điều lệnh, kỹ thuật, căn cứ) | 800 | 1.500 |
| Q4 | Còn lại + bổ sung TRKI I | 600 + 2.300 TRKI | 500 + 1.000 TRKI |
| **Tổng** | **~15 chủ đề** | **~5.300 mục từ** | **~6.000 câu** |

---

## 8. LỘ TRÌNH TRIỂN KHAI 12 THÁNG

Hai luồng công việc chạy **song song**: (A) Xây dựng nội dung — chủ trì bởi Bộ môn Tiếng Nga, (B) Phát triển phần mềm — chủ trì bởi đội kỹ thuật.

### 8.1. Giai đoạn 1 — Chuẩn bị và MVP (Tháng 1–3)

**Mục tiêu:** Có phiên bản MVP chạy được với ~500 mục từ thử nghiệm.

| Tuần | Công việc chính | Kết quả |
|---|---|---|
| T1–T2 | Khảo sát yêu cầu chi tiết, duyệt kế hoạch | Đề cương được phê duyệt |
| T3–T4 | Thiết kế CSDL, wireframe UI/UX | File thiết kế hoàn chỉnh |
| T5–T8 | Dựng khung backend + DB + API cơ bản | API tra cứu từ hoạt động |
| T9–T10 | Dựng web app (tra cứu + chi tiết từ) | Web chạy được nội bộ |
| T11–T12 | Nhập 500 mục từ chủ đề "Tàu chiến" | MVP demo nội bộ |

### 8.2. Giai đoạn 2 — Phát triển tính năng học tập (Tháng 4–6)

**Mục tiêu:** Bổ sung flashcard, quiz, quản lý tiến độ; mobile app sơ khởi.

| Tuần | Công việc chính | Kết quả |
|---|---|---|
| T13–T14 | Module flashcard + SRS | Flashcard hoạt động |
| T15–T16 | Module quiz 4 dạng bài | Quiz hoạt động |
| T17–T20 | Phát triển mobile app cơ bản | App Android chạy được |
| T21–T24 | Module phát âm + audio TTS | Audio tích hợp |

### 8.3. Giai đoạn 3 — Hoàn thiện & thử nghiệm (Tháng 7–9)

**Mục tiêu:** Hoàn thiện các tính năng còn lại, thử nghiệm với 1 đại đội.

| Tuần | Công việc chính | Kết quả |
|---|---|---|
| T25–T26 | Module dịch câu + ngữ pháp TRKI I | Hoàn chỉnh tính năng |
| T27–T28 | Cổng giảng viên + Cổng admin | Teacher/Admin portal |
| T29–T30 | Chế độ offline mobile | Offline hoạt động |
| T31–T32 | iOS build + kiểm thử tích hợp | App iOS sẵn sàng |
| T33–T36 | **Thử nghiệm thực tế 1 đại đội** | Báo cáo phản hồi |

### 8.4. Giai đoạn 4 — Hoàn thiện & triển khai chính thức (Tháng 10–12)

**Mục tiêu:** Xử lý phản hồi, ra mắt chính thức toàn Quân chủng.

| Tuần | Công việc chính | Kết quả |
|---|---|---|
| T37–T40 | Sửa lỗi, tối ưu hiệu năng theo feedback | Version ổn định |
| T41–T44 | Hoàn thiện nội dung toàn bộ 15 chủ đề | Đủ 5.000+ mục từ |
| T45–T46 | Tập huấn giảng viên và quản trị | Đội ngũ vận hành sẵn sàng |
| T47–T48 | **Ra mắt chính thức + bàn giao** | Sản phẩm hoạt động toàn diện |

### 8.5. Biểu đồ Gantt tóm tắt

```
Tháng:              1  2  3  4  5  6  7  8  9  10 11 12
Chuẩn bị & thiết kế █  █
Backend + DB           █  █  █
Web app                    █  █  █  █
Mobile app                       █  █  █  █  █
Nội dung từ vựng       █  █  █  █  █  █  █  █  █  █  █
Thử nghiệm                                   █  █
Hoàn thiện & ra mắt                                █  █  █
```

---

## 9. NGUỒN LỰC, CÔNG CỤ VÀ CHI PHÍ

### 9.1. Nhân lực tối thiểu

| Vai trò | Số lượng | Nhiệm vụ | Thời gian tham gia |
|---|---|---|---|
| Chủ nhiệm đề án | 1 | Điều phối chung, duyệt nội dung ngôn ngữ | Toàn dự án |
| Giảng viên biên soạn từ vựng | 2–3 | Trích xuất, dịch, duyệt mục từ | Toàn dự án |
| Chuyên gia Hải quân (cố vấn) | 1–2 | Duyệt độ chính xác kỹ thuật | Theo quý |
| Lập trình viên backend | 1 | Xây dựng API, CSDL | T1–T12 |
| Lập trình viên frontend web | 1 | Xây dựng web app | T5–T12 |
| Lập trình viên mobile | 1 | Xây dựng mobile app | T13–T12 |
| Designer UI/UX | 0.5 (bán thời gian) | Thiết kế giao diện | T3–T8 |
| Kỹ sư âm thanh / phát thanh viên | 0.5 | Thu âm mẫu | T11–T36 |
| Quản trị viên hệ thống | 1 | Vận hành máy chủ, bảo mật | T10 trở đi |

### 9.2. Công cụ phần mềm

| Mục đích | Công cụ đề xuất | Chi phí |
|---|---|---|
| Quản lý dự án | Trello / Jira / GitLab Issues | Miễn phí |
| Thiết kế UI/UX | Figma | Miễn phí (Education) |
| Lập trình | VS Code / JetBrains | Miễn phí |
| Kiểm soát mã nguồn | GitLab (self-hosted) | Miễn phí |
| Giao tiếp nội bộ | Rocket.Chat (self-hosted) | Miễn phí |
| TTS tiếng Nga | Yandex SpeechKit | ~200 USD/năm |
| Thu âm | Audacity + Micro USB chất lượng | Chi phí thiết bị |

### 9.3. Hạ tầng

- **Máy chủ**: 1 máy chủ nội bộ (Ubuntu Server, CPU 8 core, RAM 32GB, SSD 500GB) — triển khai backend + DB + file storage.
- **Máy chủ dự phòng**: 1 máy tương tự cho backup + staging.
- **Chứng chỉ SSL nội bộ**: Let's Encrypt (nếu có domain), hoặc self-signed cho nội bộ.

### 9.4. Dự trù chi phí tham khảo

| Hạng mục | Chi phí ước tính (VNĐ) |
|---|---|
| Phần cứng máy chủ (2 máy) | 150–200 triệu |
| Phần mềm bản quyền, API TTS, dịch máy (1 năm) | 20–30 triệu |
| Thiết bị thu âm (micro, phòng cách âm nhỏ) | 30–50 triệu |
| Nhân lực (nếu thuê ngoài) | 500–800 triệu |
| Tập huấn, tài liệu | 20–30 triệu |
| Dự phòng (10%) | 80–100 triệu |
| **TỔNG (tham khảo)** | **~800 triệu – 1,2 tỷ VNĐ** |

*Lưu ý: Nếu sử dụng hoàn toàn nhân lực nội bộ Trung tâm (giảng viên biên soạn, kỹ sư CNTT của đơn vị), chi phí có thể giảm 50–60%.*

---

## 10. TIÊU CHÍ ĐÁNH GIÁ VÀ KẾ HOẠCH DUY TRÌ

### 10.1. Tiêu chí đánh giá sản phẩm

**Về chất lượng nội dung:**
- 100% mục từ chuyên ngành được giảng viên chủ nhiệm duyệt.
- ≥ 95% mục từ có ít nhất 2 câu ví dụ.
- 100% mục từ có audio phát âm.

**Về chất lượng kỹ thuật:**
- Thời gian tra cứu < 500ms cho 95% yêu cầu.
- Thời gian load app mobile < 3 giây.
- Uptime server ≥ 99%.
- Không có lỗi bảo mật nghiêm trọng (đánh giá bởi kiểm thử xâm nhập).

**Về hiệu quả học tập:**
- Khảo sát định lượng: ≥ 80% học viên thấy ứng dụng hữu ích.
- Kết quả thi TRKI I của khóa sử dụng app cao hơn khóa trước 10% trở lên.
- Số lượng từ chuyên ngành học viên nhớ được sau 1 năm ≥ 1.500 từ.

### 10.2. Kế hoạch duy trì sau bàn giao

- **Hàng tuần**: Giảng viên bổ sung từ mới (nếu có), duyệt báo cáo tiến độ học viên.
- **Hàng tháng**: Sao lưu dữ liệu, rà soát nhật ký bảo mật, cập nhật nội dung ngữ pháp.
- **Hàng quý**: Thu thập phản hồi học viên, ra bản cập nhật tính năng nhỏ.
- **Hàng năm**: Đánh giá tổng thể, lên kế hoạch bản 2.0 (thêm AI hội thoại, chấm phát âm...).

### 10.3. Kế hoạch mở rộng (Bản 2.0)

- **Tháng thứ 13–18**: Nhận dạng giọng nói để chấm phát âm học viên.
- **Tháng thứ 18–24**: Chatbot AI luyện hội thoại chủ đề hải quân.
- **Tháng thứ 24+**: Mở rộng sang các chuyên ngành quân sự khác (Không quân, Lục quân, Phòng không — Không quân) để dùng chung toàn quân.

---

## 11. PHỤ LỤC

### 11.1. Danh mục 15 chủ đề chuyên ngành Hải quân (đề xuất)

1. **Корабли и суда** — Tàu chiến & tàu thuyền
2. **Вооружение корабля** — Vũ khí trên tàu
3. **Навигация и кораблевождение** — Hàng hải & điều khiển tàu
4. **Радар, ГАС, связь** — Radar, sonar, thông tin liên lạc
5. **Гидрометеорология** — Thủy văn & khí tượng biển
6. **Воинские звания и должности** — Cấp bậc & chức vụ
7. **Команды и приказы** — Điều lệnh & khẩu lệnh
8. **Техника и ремонт** — Kỹ thuật & bảo dưỡng
9. **Базы, порты, тыл** — Căn cứ, cảng, hậu cần
10. **Безопасность и спасение** — An toàn & cứu hộ trên biển
11. **Оружие массового поражения (защита)** — Phòng chống vũ khí hủy diệt hàng loạt
12. **Подводные лодки** — Tàu ngầm
13. **Морская пехота** — Hải quân đánh bộ
14. **Морская авиация** — Không quân Hải quân
15. **Международное морское право** — Luật biển quốc tế

### 11.2. Mẫu Excel để biên soạn mục từ

| STT | Từ Nga | Trọng âm | IPA | Từ loại | Giống | Nghĩa VN | Chủ đề | TRKI | Ví dụ Nga | Dịch VN | Ghi chú |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | корабль | кор`абль | [kɐˈrablʲ] | danh từ | đực | tàu chiến | 01 | CN | Военный корабль вошёл в порт. | Tàu chiến đã vào cảng. | Biến cách 2 |
| ... | ... | | | | | | | | | | |

### 11.3. Tham chiếu chuẩn

- **TRKI I** — Элементарный, Базовый, Первый сертификационный уровень. Russia State Testing System. Xem: [fsrki.com](https://fsrki.com)
- **CEFR B1** — Common European Framework of Reference for Languages.
- **Điều lệnh Hải quân LB Nga** — Корабельный устав Военно-Морского Флота РФ.
- **Tiêu chuẩn bảo mật quân sự Việt Nam** — Áp dụng theo quy định hiện hành của Bộ Quốc phòng.

### 11.4. Rủi ro và biện pháp giảm thiểu

| Rủi ro | Mức độ | Biện pháp |
|---|---|---|
| Thiếu nhân lực lập trình | Cao | Thuê ngoài hoặc phối hợp với đơn vị CNTT quân đội |
| Nội dung từ vựng trễ tiến độ | Trung bình | Thuê thêm cộng tác viên biên soạn; dùng AI hỗ trợ dịch sơ bộ |
| Chất lượng dịch không chính xác | Cao | Quy trình duyệt 2 vòng (ngôn ngữ + kỹ thuật) |
| Vấn đề bảo mật | Cao | Kiểm thử xâm nhập trước khi triển khai; triển khai on-premise |
| Học viên ít dùng | Trung bình | Tích hợp vào điểm giữa kỳ; gamification; thi đua đại đội |

---

## LỜI KẾT

Ứng dụng Từ điển tiếng Nga kỹ thuật Hải quân không chỉ là một công cụ học tập — mà là **nền móng cho việc số hóa toàn bộ kho thuật ngữ chuyên ngành quân sự** của Trung tâm Nhiệt đới Việt - Nga. Một khi hoàn thành giai đoạn 1, mô hình này có thể nhân rộng sang các ngôn ngữ và chuyên ngành khác, tạo ra hệ sinh thái học liệu số đặc thù phục vụ lâu dài cho Quân đội nhân dân Việt Nam.

Kế hoạch này là bản khởi đầu — đề nghị được điều chỉnh, bổ sung theo thực tế nguồn lực và yêu cầu chuyên môn trong quá trình triển khai.

---

*Tài liệu được chuẩn bị để phục vụ việc xây dựng đề cương chi tiết dự án.*
*Mọi góp ý xin gửi về: Bộ môn Tiếng Nga — Trung tâm Nhiệt đới Việt - Nga.*
