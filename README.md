# Giáo án Minna N5

Site Docusaurus: bảng chữ cái (hiragana/katakana/tenten) + 25 bài Minna no Nihongo I.

## Chạy local

```bash
npm install
npm start
```

Mở http://localhost:3000

## Deploy Vercel

1. Đẩy repo lên GitHub/GitLab.
2. Vercel → **Add New Project** → chọn repo.
3. Cấu hình (root = repo, không cần Root Directory con):
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Node.js:** 20.x
4. Deploy → dùng link `*.vercel.app` mọi nơi.

Tuỳ chọn env: `SITE_URL=https://ten-mien-cua-ban.vercel.app`

## Cấu trúc

```
japan_learn/
├── docs/                 ← kana + 25 bài Minna
├── src/
├── static/
├── docusaurus.config.ts
├── sidebars.ts
├── package.json
└── vercel.json
```
