# 時空門倒數計時 | Time Portal Countdown

一個使用純 JavaScript、HTML 和 Tailwind CSS 建立的倒數計時網站,倒數至 2025 年 12 月 21 日晚上 8 點 (UTC+8)。

## 🌟 特色功能

- 🎨 科幻風格的時空門視覺設計
- ⏱️ 精確的倒數計時器,支援跨時區顯示
- 📱 完全響應式設計,支援所有裝置
- ♿ 完整的無障礙功能支援
- 🎭 流暢的動畫效果
- 🚀 高效能優化
- 🌐 跨瀏覽器相容

## 🛠️ 技術堆疊

- **HTML5**: 語意化標籤
- **Tailwind CSS**: 實用優先的 CSS 框架
- **Vanilla JavaScript**: 純 JavaScript,無需框架
- **CSS Animations**: 純 CSS 動畫效果

## 📋 系統需求

- 現代瀏覽器 (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- 啟用 JavaScript

## 🚀 快速開始

### 使用 CDN (開發/展示)

直接開啟 `index.html` 檔案即可,無需建置步驟。

### 使用 Tailwind CLI (生產環境)

1. 安裝相依套件:
```bash
npm install
```

2. 建置 CSS:
```bash
npm run build:css
```

3. 開發模式 (watch mode):
```bash
npm run dev
```

4. 開啟 `index.html` 在瀏覽器中查看。

## 📁 專案結構

```
website-countdown/
├── index.html              # 主要 HTML 檔案
├── src/
│   ├── js/
│   │   └── main.js         # JavaScript 邏輯
│   ├── css/
│   │   └── input.css       # Tailwind CSS 輸入
│   └── assets/             # 圖片資源
├── dist/
│   └── output.css          # 編譯後的 CSS
├── package.json            # NPM 套件設定
├── tailwind.config.js      # Tailwind 設定
├── .gitignore
├── .editorconfig
├── LICENSE
├── README.md
├── TESTING.md              # 測試檢查清單
└── CHANGELOG.md            # 版本更新日誌
```

## 🎯 目標時間

**2025 年 12 月 21 日 20:00:00 (UTC+8 / 台北時區)**

無論您在世界的哪個角落,倒數計時都會正確顯示到這個特定的時間點。

## 🌐 部署

### GitHub Pages

1. 推送程式碼到 GitHub repository
2. 前往 Settings > Pages
3. 選擇 branch 為 `master` 或 `main`
4. 點擊 Save

### Cloudflare Pages

1. 連接 GitHub repository
2. 建置設定:
   - Build command: `npm run build:css`
   - Build output directory: `/`
3. 部署

### Netlify

1. 連接 GitHub repository
2. 建置設定:
   - Build command: `npm run build:css`
   - Publish directory: `/`
3. 部署

## 🧪 測試

### 本地測試

```bash
# 使用 Python 啟動本地伺服器
python -m http.server 8000

# 或使用 Node.js
npx http-server

# 然後在瀏覽器開啟 http://localhost:8000
```

### 效能測試

使用 Lighthouse 進行效能審查:
1. 開啟 Chrome DevTools
2. 切換到 Lighthouse 標籤
3. 執行審查

更多測試項目請參考 [TESTING.md](TESTING.md)

## 📝 授權

本專案採用 [GNU Affero General Public License v3.0](LICENSE)。

## 👤 作者

jim60105

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request!

## 📮 聯絡方式

- GitHub: [@jim60105](https://github.com/jim60105)
- Email: jim60105@gmail.com

---

Made with ❤️ and ⚡ by jim60105
