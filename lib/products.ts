// ─────────────────────────────────────────────────────────────
//  lib/products.ts  —  13款 OpenClaw 产品数据 + 匹配引擎
// ─────────────────────────────────────────────────────────────

export type Product = {
  id: string
  name: string
  company: string
  deploy: string
  model: string
  im: string
  price: string
  opensource: boolean
  local: boolean | string
  fit: string[]
  installUrl: string
  vpsRec?: string          // 推荐云厂商（导流用）
  sponsor?: boolean        // 是否为赞助商席位
  description: string
}

export const PRODUCTS: Product[] = [
  {
    id: "arkclaw",
    name: "ArkClaw",
    company: "字节火山引擎",
    deploy: "云端",
    model: "Doubao-Seed-2.0",
    im: "飞书/企微/钉钉",
    price: "¥9.9起 Pro¥49/月",
    opensource: false,
    local: false,
    fit: ["飞书", "公司", "不想折腾"],
    installUrl: "https://www.volcengine.com/",
    description: "字节旗舰级 Agent，无缝融入飞书生态，企业协同首选。",
  },
  {
    id: "workbuddy",
    name: "WorkBuddy",
    company: "腾讯云 CodeBuddy",
    deploy: "混合",
    model: "混元/Kimi/GLM",
    im: "全平台",
    price: "免费",
    opensource: false,
    local: true,
    fit: ["微信", "企业合规", "安全"],
    installUrl: "https://workbuddy.tencent.com/",
    sponsor: true,
    description: "腾讯云混合部署方案，微信生态深度整合，数据合规无忧。",
  },
  {
    id: "qclaw",
    name: "QClaw",
    company: "腾讯电脑管家",
    deploy: "本地",
    model: "Kimi/混元/GLM",
    im: "微信/QQ",
    price: "内测免费",
    opensource: false,
    local: true,
    fit: ["微信", "个人", "遥控电脑"],
    installUrl: "https://guanjia.qq.com/",
    description: "本地运行，手机远程操控电脑，微信/QQ无缝唤起。",
  },
  {
    id: "duclaw",
    name: "DuClaw",
    company: "百度智能云",
    deploy: "云端",
    model: "文心多模型",
    im: "App",
    price: "¥9.9/月",
    opensource: false,
    local: false,
    fit: ["零门槛", "网页即用", "便宜"],
    installUrl: "https://cloud.baidu.com/",
    description: "网页即开即用，文心大模型加持，零门槛最低价入口。",
  },
  {
    id: "jvsclaw",
    name: "JVS Claw",
    company: "阿里云",
    deploy: "一键部署",
    model: "通义 Qwen3.5",
    im: "钉钉",
    price: "服务器费+按量",
    opensource: false,
    local: false,
    fit: ["技术", "阿里云", "一键部署"],
    installUrl: "https://www.aliyun.com/",
    vpsRec: "阿里云 ECS",
    description: "阿里云一键部署，通义大模型，钉钉生态无缝对接。",
  },
  {
    id: "kimiclaw",
    name: "Kimi Claw",
    company: "月之暗面",
    deploy: "云端",
    model: "Kimi K2.5",
    im: "飞书/企微",
    price: "¥199/月",
    opensource: false,
    local: false,
    fit: ["长文本", "PDF", "研报"],
    installUrl: "https://kimi.moonshot.cn/",
    description: "超长上下文之王，处理 PDF 研报一把抓，专业用户最爱。",
  },
  {
    id: "maxclaw",
    name: "MaxClaw",
    company: "MiniMax",
    deploy: "云端",
    model: "M2.5",
    im: "飞书/钉钉",
    price: "¥39/月",
    opensource: false,
    local: false,
    fit: ["性价比", "API", "专家模式"],
    installUrl: "https://www.minimax.chat/",
    description: "MiniMax 旗舰 Agent，性价比极高，API 开放度强。",
  },
  {
    id: "autoclaw",
    name: "AutoClaw 澳龙",
    company: "智谱 AI",
    deploy: "本地",
    model: "Pony-Alpha-2",
    im: "飞书",
    price: "免费额度",
    opensource: false,
    local: true,
    fit: ["本地部署", "傻瓜式", "飞书"],
    installUrl: "https://zhipuai.cn/",
    description: "智谱旗舰本地 Agent，傻瓜式安装，飞书原生集成。",
  },
  {
    id: "lobsterai",
    name: "LobsterAI 有道龙虾",
    company: "网易有道",
    deploy: "本地",
    model: "自研多模型",
    im: "全平台",
    price: "完全免费",
    opensource: true,
    local: true,
    fit: ["免费", "开源", "安全", "本地"],
    installUrl: "https://ai.youdao.com/",
    description: "完全开源免费，本地隐私保护，全平台 IM 支持，极客首选。",
  },
  {
    id: "miclaw",
    name: "MiClaw",
    company: "小米",
    deploy: "手机系统",
    model: "未公开",
    im: "系统原生",
    price: "封测中",
    opensource: false,
    local: "手机",
    fit: ["手机", "HyperOS"],
    installUrl: "https://www.mi.com/",
    description: "深度融入小米 HyperOS，系统级权限，手机用户专属。",
  },
  {
    id: "huawei",
    name: "华为云部署",
    company: "华为云",
    deploy: "一键部署",
    model: "盘古",
    im: "可配置",
    price: "服务器费",
    opensource: false,
    local: false,
    fit: ["技术", "华为云"],
    installUrl: "https://www.huaweicloud.com/",
    vpsRec: "华为云 ECS",
    description: "华为盘古大模型，信创合规，一键部署 Agent 服务。",
  },
  {
    id: "jdcloud",
    name: "京东云部署",
    company: "京东云",
    deploy: "一键部署",
    model: "可配置",
    im: "可配置",
    price: "服务器费",
    opensource: false,
    local: false,
    fit: ["技术", "京东云"],
    installUrl: "https://www.jdcloud.com/",
    vpsRec: "京东云 VM",
    description: "京东云自研算力，可自由配置模型与 IM，技术团队优选。",
  },
  {
    id: "lenovo",
    name: "联想百应",
    company: "联想",
    deploy: "远程",
    model: "可配置",
    im: "可配置",
    price: "部署服务费",
    opensource: false,
    local: true,
    fit: ["小白", "上门安装"],
    installUrl: "https://www.lenovo.com.cn/",
    description: "联想专属上门部署服务，0 技术门槛，小白用户救星。",
  },
]

// ─── 答题题目 ──────────────────────────────────────────────────
export type Question = {
  id: string
  text: string
  emoji: string
  options: { label: string; value: string; tags: string[] }[]
}

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    text: "你平时在哪里干活、聊天？",
    emoji: "💬",
    options: [
      { label: "飞书（字节系）", value: "feishu", tags: ["飞书"] },
      { label: "微信 / QQ", value: "wechat", tags: ["微信", "个人"] },
      { label: "钉钉（阿里系）", value: "dingtalk", tags: ["阿里云", "一键部署"] },
      { label: "全平台都有", value: "all", tags: ["全平台"] },
    ],
  },
  {
    id: "q2",
    text: "你想把 Agent 装在哪里？",
    emoji: "🖥️",
    options: [
      { label: "不想折腾，云端直接用", value: "cloud", tags: ["不想折腾", "零门槛", "网页即用"] },
      { label: "本地电脑，数据不出门", value: "local", tags: ["本地部署", "安全", "本地"] },
      { label: "手机系统，随时随地", value: "mobile", tags: ["手机", "HyperOS"] },
      { label: "自己服务器一键部署", value: "server", tags: ["技术", "一键部署"] },
    ],
  },
  {
    id: "q3",
    text: "你的预算是？",
    emoji: "💰",
    options: [
      { label: "完全免费才用", value: "free", tags: ["免费", "开源", "内测免费"] },
      { label: "10 元以内可以接受", value: "cheap", tags: ["便宜", "零门槛"] },
      { label: "几十到百元，值就行", value: "mid", tags: ["性价比", "API"] },
      { label: "不差钱，要最好的", value: "premium", tags: ["长文本", "PDF", "研报"] },
    ],
  },
  {
    id: "q4",
    text: "你最在乎什么？",
    emoji: "🎯",
    options: [
      { label: "开箱即用，傻瓜操作", value: "easy", tags: ["傻瓜式", "小白", "上门安装", "不想折腾"] },
      { label: "数据安全，本地隐私", value: "privacy", tags: ["安全", "企业合规", "本地"] },
      { label: "开源可控，极客自由", value: "opensource", tags: ["开源", "免费", "API"] },
      { label: "长文档 / 研报分析", value: "docs", tags: ["长文本", "PDF", "研报"] },
    ],
  },
  {
    id: "q5",
    text: "你是个人用还是公司用？",
    emoji: "👥",
    options: [
      { label: "就我自己用", value: "personal", tags: ["个人", "免费"] },
      { label: "小团队（< 20 人）", value: "team", tags: ["公司", "性价比"] },
      { label: "企业（合规要求）", value: "enterprise", tags: ["企业合规", "安全", "公司"] },
      { label: "技术团队，要 API", value: "dev", tags: ["技术", "API", "开源"] },
    ],
  },
]

// ─── 匹配引擎 ──────────────────────────────────────────────────
export type MatchResult = {
  product: Product
  score: number
  matchedTags: string[]
}

export function matchProducts(selectedTags: string[]): MatchResult[] {
  const tagSet = new Set(selectedTags.map(t => t.toLowerCase()))

  const results: MatchResult[] = PRODUCTS.map(p => {
    const matched = p.fit.filter(f => {
      const fl = f.toLowerCase()
      return [...tagSet].some(t => fl.includes(t) || t.includes(fl))
    })
    const score = matched.length > 0
      ? Math.round((matched.length / Math.max(p.fit.length, selectedTags.length)) * 100)
      : 0
    return { product: p, score, matchedTags: matched }
  })

  // 赞助商加权 +5（最多10分），但不改变排名逻辑，在结果中标注
  return results
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      // 同分时赞助商优先
      if (a.product.sponsor && !b.product.sponsor) return -1
      if (!a.product.sponsor && b.product.sponsor) return 1
      return 0
    })
}
