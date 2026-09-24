---
name: author-minna-lesson
description: >-
  Author or rewrite Minna N5 / kana lesson notes from a YouTube video or
  playlist into Docusaurus markdown (furigana, tables, Minato link). Use when
  the user pastes a watch/playlist URL, gives a video ID, asks to soạn bài from
  Minato/YouTube, or edit docs/ from video content.
---

# Author Minna / kana lesson

## Input (bắt buộc hiểu cái này trước)

Người dùng **bình thường đưa video hoặc playlist**. Chấp nhận một trong các dạng:

| Input | Ví dụ | Việc agent làm |
|-------|--------|----------------|
| **1 video** | `https://www.youtube.com/watch?v=VIDEO_ID` | Soạn **đúng 1 bài** từ video đó |
| **Video + list** | `...watch?v=ID&list=PLbBhikLbVlB0GaIO_rfgGtkTqSS70lS_k` | Soạn bài của `v=`; list chỉ để gắn link nguồn / xác định series |
| **Playlist** | `https://www.youtube.com/playlist?list=...` | Liệt kê video → hỏi hoặc soạn theo phạm vi user nói (vd. bài 2–5, cả playlist) |
| **Số bài + series đã biết** | “soạn bài 8 Minato” | Tra `playlist-map.json` lấy `videoId` rồi xử lý như 1 video |
| **Kana (không video)** | “thêm trang tenten” | Workflow kana bên dưới — không bắt buộc YouTube |

Default playlist Minna 1 ngữ pháp:

`https://www.youtube.com/playlist?list=PLbBhikLbVlB0GaIO_rfgGtkTqSS70lS_k`

Map sẵn: `playlist-map.json` (`id` ↔ `videoId` ↔ `file`).

### Lấy nội dung từ video

1. Fetch / phụ đề (WebFetch watch URL, hoặc yt-dlp auto-sub `vi`/`ja`)  
2. Tóm thành giáo án có cấu trúc — **không** dán transcript thô  
3. Sửa tiếng Nhật cho đúng (ASR hay sai)  
4. Gắn link nguồn đúng `v=` (+ `list=` nếu có)

Nếu không lấy được transcript: vẫn soạn theo ngữ pháp Minna đúng số bài + **bắt buộc** giữ link video user đưa.

## Before writing

1. Xác định input thuộc loại nào (bảng trên).  
2. Đọc lesson mẫu: `docs/bai-02-chi-thi-tu.md` hoặc `bai-01`.  
3. Đọc `.cursor/rules/lesson-markdown.mdc`.  
4. Với Minna: đối chiếu `playlist-map.json` — **tiêu đề theo nội dung video** (vd. bài 11 = lượng từ, bài 20 = 普通形), không bám tên file cũ nếu lệch.

## Workflow — 1 video → 1 file `docs/bai-XX-….md`

```
- [ ] Resolve VIDEO_ID (+ list nếu có)
- [ ] Lấy transcript/subs hoặc fallback Minna
- [ ] Frontmatter sidebar_label + sidebar_position
- [ ] H1 + block Nguồn YouTube
- [ ] Mục tiêu + ngữ pháp + bảng VI|JP
- [ ] Mọi Hán có （ひらがな） / stem động từ
- [ ] Tổng kết + luyện tập
- [ ] Cập nhật sidebars.ts / intro.md / playlist-map.json nếu cần
- [ ] npm run build
```

Template: [template.md](template.md).

## Workflow — playlist

1. Lấy danh sách `index | videoId | title`.  
2. Nếu user không nói phạm vi → hỏi nhanh (cả list / vài bài / chỉ bài đang mở).  
3. Soạn lần lượt từng video như workflow 1 video (có thể song song nhiều bài).

## Workflow — kana

`docs/kana/` — bảng markdown, giọng sơ cấp; không bắt buộc video.

## Quality bar

- Bài Minna đầy đủ (~180+ dòng), không stub `Đang soạn`  
- Không dùng romaji làm cách đọc Hán  
- Link nguồn = đúng video input
