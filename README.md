# website-countdown

時空門倒數計時 - 倒數至 2025 年 12 月 21 日 20:00 (UTC+8)

## 專案簡介

這是一個靜態網站專案,展示一個時空門倒數計時器,倒數至 2025/12/21 20:00 (UTC+8 時區)。

本專案使用以下技術:
- HTML5
- JavaScript (純 JavaScript, 無框架)
- Tailwind CSS v3

## 開發環境設置

### 前置需求

- Node.js (建議 v16 或更新版本)
- npm

### 安裝步驟

1. Clone 專案
```bash
git clone https://github.com/jim60105/website-countdown.git
cd website-countdown
```

2. 安裝依賴
```bash
npm install
```

3. 建立 CSS (首次執行或修改 CSS 後執行)
```bash
npm run build:css
```

### 開發指令

- **建立 CSS**: `npm run build:css`
  - 編譯 Tailwind CSS，將 `src/css/input.css` 輸出至 `dist/output.css`
  
- **開發模式 (自動監控 CSS 變更)**: `npm run watch:css`
  - 啟動 Tailwind CSS 監控模式，檔案變更時自動重新編譯

### 如何執行

1. 建立 CSS (如果尚未建立)
```bash
npm run build:css
```

2. 在瀏覽器中開啟 `index.html`
   - 可以直接開啟檔案
   - 或使用本地伺服器 (例如 VS Code 的 Live Server 擴充功能)

## 專案結構

```
website-countdown/
├── index.html              # 主頁面
├── src/
│   ├── js/
│   │   └── main.js        # 主要 JavaScript 邏輯
│   ├── css/
│   │   └── input.css      # Tailwind CSS 輸入檔案
│   └── assets/            # 資源檔案 (圖片等)
├── dist/
│   └── output.css         # Tailwind CSS 編譯輸出
├── .gitignore
├── package.json
├── tailwind.config.js     # Tailwind CSS 配置
├── README.md
└── LICENSE                # GNU Affero General Public License v3.0
```

## 授權條款

本專案採用 [GNU Affero General Public License v3.0](LICENSE) 授權。

## 參考資源

- [Tailwind CSS 官方文件](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
