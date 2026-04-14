# 🦞 选龙虾 — OpenClaw 互动选型平台

> 全球首个 OpenClaw (AI Agent) 互动选型与分发平台。通过 5 道生活化提问，为用户精准匹配最适合的 OpenClaw 产品。

**[👉 在线体验](https://openclaw-selector-3wvm1ht8o-d-karts-projects.vercel.app)** · **[提交产品](mailto:dev@workbuddy.ai)** · **[加入讨论](https://github.com/D-kart/demo-TOOLS/discussions)**

---

## ✨ 功能特性

### 🧩 智能选型引擎
- **5 道生活化提问** — 在哪用？装哪里？预算多少？在乎什么？谁来用？
- **13+ 款产品画像匹配** — 基于标签权重计算匹配度，输出 Top 3 推荐
- **详细对比表格** — 支持按价格、部署方式、开源等维度横向比较

### 📦 产品覆盖
| 分类 | 代表产品 |
|------|---------|
| 互联网大厂 | 字节 ArkClaw、腾讯 WorkBuddy / QClaw、百度 DuClaw、阿里 JVS Claw |
| AI Native | 月之暗面 Kimi Claw、MiniMax MaxClaw、智谱 AutoClaw |
| 手机/硬件 | 小米 MiClaw、网易 LobsterAI |
| 云厂商 | 华为云部署、京东云部署 |

### 🎨 设计风格
Newsprint 报纸风格 — 高对比黑白排版，极限字体层级，报纸网格布局，致敬经典新闻美学。

---

## 🛠️ 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 15 + React 19 |
| 样式 | Tailwind CSS v4 |
| 语言 | TypeScript |
| 图标 | lucide-react |
| 字体 | Playfair Display · Lora · JetBrains Mono |
| 部署 | Vercel |

---

## 🚀 本地运行

```bash
# 克隆仓库
git clone https://github.com/D-kart/demo-TOOLS.git
cd demo-TOOLS

# 安装依赖
npm install

# 开发模式
npm run dev
# 访问 http://localhost:3010

# 生产构建
npm run build
npm start
```

---

## 📁 项目结构

```
openclaw-v2/
├── app/
│   ├── layout.tsx          # 根布局（字体、全局样式）
│   ├── page.tsx            # 首页入口
│   └── globals.css         # Tailwind + Newsprint 设计系统
├── components/
│   ├── Header.tsx          # 报纸风导航头
│   ├── Ticker.tsx          # 快讯走马灯
│   ├── Hero.tsx            # 主标题区（8/4 非对称）
│   ├── Quiz.tsx            # 答题器（5 题 + 匹配引擎）
│   ├── ResultsPanel.tsx    # Top 3 推荐结果
│   ├── AllProducts.tsx     # 全部产品目录
│   ├── AdSlot.tsx          # VPS 导流广告位
│   ├── ReportSection.tsx   # 行业报告版块
│   └── Footer.tsx          # 页脚
├── lib/
│   └── products.ts         # 13+ 款产品数据 + 匹配算法
├── package.json
└── README.md
```

---

## 💰 商业模式

本项目探索以下变现路径：

| 模式 | 说明 |
|------|------|
| **VPS 导流** | 为阿里云、腾讯云、华为云等云厂商导流 |
| **赞助席** | 结果页黄金位置支持赞助展示 |
| **插屏广告** | 答题间隙精准推送高端云服务 |
| **行业报告** | 周期性发布《OpenClaw 行业热度与用户偏好报告》 |

---

## 🔄 更新日志

### v1.0.0 — Newsprint 报纸风格版
- 全新 Newsprint 设计系统
- 5 题生活化答题器
- 13+ 款产品匹配引擎
- Top 3 推荐 + 完整对比表格
- VPS 导流广告位
- 行业报告版块
- 全响应式适配

---

## 🤝 贡献

欢迎提交 Issue 或 Pull Request！

- 发现产品信息有误？→ [提交 Issue](https://github.com/D-kart/demo-TOOLS/issues)
- 想加入新的 OpenClaw 产品？→ [联系作者](mailto:dev@workbuddy.ai)

---

## 📄 License

MIT License · © 2026 D-kart
