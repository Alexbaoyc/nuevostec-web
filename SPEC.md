# SPEC.md - 成都瑞纳致一网络科技有限公司官网

## 1. Concept & Vision

**Slogan**: "链接全球，智启未来"  
**Core Mission**: 帮助中国企业出海、企业上云、洞察全球贸易机遇

科技感十足、简约现代的单页/多页混合官网。以深色主题为基调，搭配蓝色/青色渐变光效，传递专业、可信赖、国际化的企业形象。整体体验流畅，数据可视化有冲击力，交互克制但精准。

---

## 2. Design Language

### 色彩系统
```
Primary:     #0A0F1E (深空蓝黑)
Secondary:   #1E2A4A (藏青)
Accent:      #00D4FF (科技青)
Accent2:     #6366F1 (靛蓝紫)
Success:     #10B981 (翠绿)
Text-Primary: #F0F6FF
Text-Secondary: #94A3B8
Border:      rgba(255,255,255,0.08)
```

### 字体
- **标题**: Inter / Noto Sans SC (中文)
- **正文**: Inter / Noto Sans SC
- **数字/代码**: JetBrains Mono

### 布局节奏
- 全屏 Hero (100vh) → 板块卡片 (60vh) → 数据大屏 (80vh)
- 大量留白，呼吸感强
- 玻璃态毛玻璃效果 (backdrop-blur)

### 动效
- 滚动触发的淡入上移 (ScrollReveal)
- 卡片悬停微光效 + 边框光晕
- 数字计数动画
- 地图热力图呼吸效果

---

## 3. Layout & Structure

```
/ (首页)
├── NavBar (固定顶部，滚动后背景模糊)
├── HeroSection (全屏动态背景 + 公司名 + slogan)
├── BusinessOverview (三大业务板块卡片导航)
├── [板块1] 企业出海
│   ├── Hero: 封面 + 简介
│   ├── GITEX 展会专区
│   ├── CES 展会专区
│   └── 新兴市场引导 (拉美/非洲)
├── [板块2] 企业上云
│   ├── AI 数字员工介绍
│   ├── 功能优势展示
│   └── 国别服务细节
├── [板块3] 全球贸易热点图
│   ├── 实时数据大屏
│   ├── 商品指数图表
│   └── 留资表单对话框
└── Footer (联系方式 + 版权)
```

---

## 4. Features & Interactions

### 导航
- 固定顶部，滚动后背景毛玻璃
- 点击锚点平滑滚动
- 移动端汉堡菜单

### 三大板块
- 卡片悬停：边框光晕 + 微上移
- 点击进入子页面或展开详情

### 企业出海
- 展会卡片：图片 + 名称 + 时间 + 地点 + 简介
- 新兴市场：地图热力图 + 国家标签

### 企业上云
- AI 数字员工角色卡片
- 对比表格（传统 vs 我们的服务）
- 国别选择器（不同国家细节输入）

### 全球贸易热点图
- Leaflet 世界地图，热力图展示贸易热度
- **波罗的海航运指数 (BDI)** 实时数值 + 涨跌幅 + 迷你趋势图（每3秒模拟刷新）
- **Canvas 数据流动画** — 粒子在贸易节点间流光传输，模拟全球信息实时流动
- ECharts 商品指数折线图/柱状图
- 固定留资栏目（国家 + 感兴趣类目 + 联系方式）

### 留资表单
- 字段：姓名 / 公司 / 邮箱 / 电话 / 感兴趣类目 / 留言
- 提交后显示成功提示
- 表单验证完整

---

## 5. Component Inventory

| 组件 | 状态 |
|------|------|
| NavBar | default / scrolled(毛玻璃) / mobile-open |
| HeroSection | 动态粒子/渐变背景 |
| BusinessCard | default / hover(光晕+上移) |
| EventCard | default / hover / loading |
| WorldMap | 热力图 + 国家标注 |
| TradeChart | 折线图 / 柱状图 / 饼图 |
| BDICard | 实时数值 + 涨跌幅 + 迷你趋势图 |
| DataFlowCanvas | Canvas粒子流光动画 |
| LeadForm | default / validating / submitting / success / error |
| Footer | 静态 |

---

## 6. Technical Approach

### 框架 & 构建
- **Nuxt 3** (静态生成 SSG，部署 Vercel 免费)
- **TailwindCSS v4** (样式)
- **Leaflet.js** (地图)
- **ECharts** (数据可视化)
- **Axios** (API 请求)

### 免费数据 API
- **World Bank API** — 各国 GDP、贸易量、经商容易度
- **UN Comtrade** — 贸易流向数据
- **CoinGecko** — 大宗商品价格指数（可选）
- **REST Countries** — 国家基础信息
- **Baltic Exchange** — BDI 波罗的海航运指数（模拟数据展示）

### 部署
- **Vercel** (nuevostec.com)
- CI/CD 自动构建发布

### Git 规范
- 分支: main / dev
- 每完成一个板块 commit 一次
- 提交信息: `[feat]`, `[fix]`, `[design]`, `[content]`, `[deploy]`

---

## 7. Content Data

### 公司信息
- 中文名: 成都瑞纳致一网络科技有限公司
- 英文名: Chengdu Nuevos TEC Company
- 域名: nuevostec.com
- 业务: 企业出海 / 企业上云 / 全球贸易洞察

### 展会数据 (待填充)
- **GITEX** — 迪拜，10月
- **CES** — 拉斯维加斯，1月
- **LATAM新兴市场** — 巴西、墨西哥、尼日利亚、肯尼亚等

### 贸易数据 (免费API)
- 国家 GDP / 贸易额热力图
- 大宗商品价格指数
