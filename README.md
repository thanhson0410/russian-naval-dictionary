# Từ Điển Tiếng Nga Kỹ Thuật Hải Quân

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://khongthuhi en.github.io/russian-naval-dictionary)

> Ứng dụng từ điển chuyên ngành hải quân phục vụ học viên Quân chủng Hải quân học tiếng Nga chuẩn **TRKI I (B1)**.
>
> **Chủ nhiệm đề án:** Khổng Thu Hiền — Giáo viên Bộ môn Tiếng Nga, Trung tâm Nhiệt đới Việt - Nga

## Tính năng

- 🔍 **Tra cứu** song ngữ Nga ↔ Việt với fuzzy search + bàn phím Cyrillic ảo
- 📂 **15 chủ đề** hải quân chuyên ngành + TRKI I
- 📖 **Chi tiết từ**: IPA, biến cách, câu ví dụ, phát âm (Web Speech API)
- 🃏 **Flashcard** theo thuật toán SRS (lật thẻ, đánh giá Dễ/TB/Khó)
- ✅ **Quiz** trắc nghiệm 4 đáp án + ghép cặp Nga-Việt
- 📖 **Ngữ pháp TRKI I**: 6 cách, động từ chuyển động, thể động từ

## Cấu trúc

```
├── index.html          # Trang chính
├── css/
│   ├── base.css        # Biến CSS, reset, layout chung
│   └── components.css  # Từng component (search, flashcard, quiz...)
├── js/
│   ├── data.js         # Dữ liệu từ điển (DICTIONARY, TOPICS, GRAMMAR)
│   ├── app.js          # Core app + Home + Topic + Grammar views
│   ├── search.js       # Module tra cứu + bàn phím Cyrillic
│   ├── flashcard.js    # Module flashcard SRS
│   └── quiz.js         # Module quiz (MCQ + ghép cặp)
└── README.md
```

## Deploy GitHub Pages

1. Fork hoặc clone repo này
2. Vào **Settings → Pages → Branch: main / folder: /**
3. Truy cập: `https://<username>.github.io/<repo-name>`

## Bổ sung từ vựng

Chỉnh sửa mảng `DICTIONARY` trong `js/data.js` theo mẫu schema trong kế hoạch.
