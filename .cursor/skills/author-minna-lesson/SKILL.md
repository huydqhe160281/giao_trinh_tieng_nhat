---
name: author-minna-lesson
description: >-
  Author or rewrite Minna no Nihongo N5 lesson notes and kana pages for this
  Docusaurus site in the project markdown format (furigana, tables, Minato
  links). Use when adding/editing docs under docs/, generating a lesson from
  YouTube/Minato/Minna, filling stubs, or when the user asks to soạn bài / giáo án.
---

# Author Minna / kana lesson

## Before writing

1. Read a nearby finished lesson as style reference (`docs/bai-02-chi-thi-tu.md` or `bai-01`).
2. Read `.cursor/rules/lesson-markdown.mdc` conventions.
3. Look up `playlist-map.json` for the correct `videoId` and note if the **sidebar title** was corrected vs filename (e.g. bài 11 = lượng từ, bài 20 = 普通形).

## Workflow — new / rewrite Minna lesson

Copy checklist:

```
- [ ] Frontmatter sidebar_label + sidebar_position
- [ ] H1 + YouTube source link (list=PLbBhikLbVlB0GaIO_rfgGtkTqSS70lS_k)
- [ ] Mục tiêu + grammar sections + ví dụ VI|JP
- [ ] All kanji have （ひらがな） readings
- [ ] Tổng kết + luyện tập
- [ ] sidebars.ts / intro.md updated if new file
- [ ] npm run build
```

### Content source priority

1. Minato video for that lesson (transcript/subs) → structure into notes (not dump)
2. Correct Japanese orthography (fix ASR)
3. Align with Minna no Nihongo I grammar for that lesson number when video is unclear

### Template

See [template.md](template.md).

## Workflow — kana pages

Files under `docs/kana/`. Charts as markdown tables; keep beginner tone; link between hiragana → tenten → youon → luyện đọc.

## Quality bar

- Substantial (~180+ lines for a full Minna lesson), not a stub
- No romaji as kanji reading
- No `Đang soạn` when claiming done
