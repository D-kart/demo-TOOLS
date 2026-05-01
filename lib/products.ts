// ─────────────────────────────────────────────────────────────
//  lib/products.ts  —  13款 OpenClaw 产品数据 + 匹配引擎 v2
//  纯净版：无广告，9题匹配引擎
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
    fit: ["飞书", "公司", "不想折腾", "企业协同"],
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
    fit: ["微信", "企业合规", "安全", "混合部署"],
    installUrl: "https://workbuddy.tencent.com/",
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
    fit: ["微信", "个人", "遥控电脑", "本地隐私"],
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
    fit: ["零门槛", "网页即用", "便宜", "快速上手"],
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
    fit: ["技术", "阿里云", "一键部署", "钉钉"],
    installUrl: "https://www.aliyun.com/",
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
    fit: ["长文本", "PDF", "研报", "超长上下文", "专业分析"],
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
    fit: ["性价比", "API", "专家模式", "开发者"],
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
    fit: ["本地部署", "傻瓜式", "飞书", "简单易用"],
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
    fit: ["免费", "开源", "安全", "本地", "极客", "隐私保护"],
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
    fit: ["手机", "HyperOS", "移动端", "系统集成"],
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
    fit: ["技术", "华为云", "一键部署", "信创合规"],
    installUrl: "https://www.huaweicloud.com/",
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
    fit: ["技术", "京东云", "可配置", "灵活定制"],
    installUrl: "https://www.jdcloud.com/",
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
    fit: ["小白", "上门安装", "技术支持", "零基础"],
    installUrl: "https://www.lenovo.com.cn/",
    description: "联想专属上门部署服务，0 技术门槛，小白用户救星。",
  },
]

// ─── 9道精选题目 ──────────────────────────────────────────────────
export type Question = {
  id: string
  text: string
  emoji: string
  options: { label: string; value: string; tags: string[] }[]
}

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    text: "你平时用哪个 IM 软件办公沟通？",
    emoji: "💬",
    options: [
      { label: "飞书（字节跳动）", value: "feishu", tags: ["飞书", "企业协同"] },
      { label: "微信 / 企业微信", value: "wechat", tags: ["微信", "企业合规"] },
      { label: "钉钉（阿里巴巴）", value: "dingtalk", tags: ["钉钉", "阿里云"] },
      { label: "不用 IM 或全平台", value: "none", tags: ["全平台"] },
    ],
  },
  {
    id: "q2",
    text: "你希望 Agent 部署在哪里？",
    emoji: "🏠",
    options: [
      { label: "云端，开箱即用", value: "cloud", tags: ["不想折腾", "零门槛", "网页即用", "快速上手"] },
      { label: "本地电脑，数据不出门", value: "local", tags: ["本地隐私", "安全", "本地", "隐私保护"] },
      { label: "手机系统，随身携带", value: "mobile", tags: ["手机", "HyperOS", "移动端"] },
      { label: "自己服务器，完全可控", value: "server", tags: ["技术", "一键部署", "可配置", "灵活定制"] },
    ],
  },
  {
    id: "q3",
    text: "你的预算是多少？",
    emoji: "💰",
    options: [
      { label: "必须完全免费", value: "free", tags: ["免费", "开源", "极客"] },
      { label: "10 元以内可以接受", value: "cheap", tags: ["便宜", "零门槛"] },
      { label: "几十元到一百多，值就行", value: "mid", tags: ["性价比", "API", "专家模式"] },
      { label: "不差钱，要最专业的", value: "premium", tags: ["长文本", "PDF", "研报", "专业分析"] },
    ],
  },
  {
    id: "q4",
    text: "你最核心的使用场景是什么？",
    emoji: "🎯",
    options: [
      { label: "处理长文档 / PDF / 研报分析", value: "docs", tags: ["长文本", "PDF", "研报", "专业分析"] },
      { label: "个人效率 / 日常问答 / 写作", value: "personal", tags: ["个人", "快速上手"] },
      { label: "企业协同 / 团队管理 / 合规", value: "enterprise", tags: ["企业合规", "企业协同", "安全"] },
      { label: "开发调用 / API 集成 / 技术调试", value: "dev", tags: ["技术", "API", "开发者", "可配置"] },
    ],
  },
  {
    id: "q5",
    text: "你最在乎哪个维度？",
    emoji: "⚖️",
    options: [
      { label: "操作简单，5分钟上手", value: "easy", tags: ["傻瓜式", "零门槛", "快速上手", "简单易用"] },
      { label: "数据安全，完全私有化", value: "privacy", tags: ["安全", "本地隐私", "隐私保护", "本地"] },
      { label: "开源可控，代码在手", value: "opensource", tags: ["开源", "极客", "可配置"] },
      { label: "便宜好用，性价比优先", value: "budget", tags: ["性价比", "便宜", "零门槛"] },
    ],
  },
  {
    id: "q6",
    text: "你使用 Agent 的频率大概是？",
    emoji: "📊",
    options: [
      { label: "每天多次，离不开", value: "daily", tags: ["性价比", "API", "专家模式"] },
      { label: "偶尔用，一周几次", value: "weekly", tags: ["零门槛", "网页即用"] },
      { label: "有项目才用", value: "project", tags: ["长文本", "PDF", "研报"] },
      { label: "刚接触，想试试", value: "new", tags: ["傻瓜式", "小白", "零基础", "简单易用"] },
    ],
  },
  {
    id: "q7",
    text: "你需要处理的最大文档大概是？",
    emoji: "📄",
    options: [
      { label: "几百 KB 的短文", value: "short", tags: ["零门槛", "网页即用", "快速上手"] },
      { label: "几 MB 的报告或合同", value: "medium", tags: ["性价比", "长文本"] },
      { label: "几十 MB 的 PDF 研报", value: "long", tags: ["长文本", "PDF", "研报", "专业分析"] },
      { label: "不太处理文档", value: "none", tags: ["个人", "企业协同"] },
    ],
  },
  {
    id: "q8",
    text: "你是自己用还是带着别人一起用？",
    emoji: "👥",
    options: [
      { label: "就我自己用", value: "solo", tags: ["个人", "免费", "极客"] },
      { label: "小团队（2-10人）", value: "small_team", tags: ["公司", "企业协同", "性价比"] },
      { label: "部门 / 公司整体用", value: "org", tags: ["企业合规", "安全", "企业协同", "管理员"] },
      { label: "我帮别人选，推荐给他", value: "refer", tags: ["开源", "免费", "傻瓜式"] },
    ],
  },
  {
    id: "q9",
    text: "你对 Agent 的期待是什么？",
    emoji: "🚀",
    options: [
      { label: "提高效率，解放双手", value: "efficiency", tags: ["性价比", "API", "专家模式"] },
      { label: "安全可控，数据不外传", value: "security", tags: ["安全", "本地隐私", "隐私保护"] },
      { label: "专业分析，辅助决策", value: "analysis", tags: ["长文本", "PDF", "研报", "专业分析"] },
      { label: "省钱省心，够用就行", value: "simple", tags: ["零门槛", "便宜", "傻瓜式", "简单易用"] },
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
  const normalizedTags = selectedTags.map(t => t.toLowerCase())

  const results: MatchResult[] = PRODUCTS.map(p => {
    // 精确标签匹配
    const exactMatches = p.fit.filter(f =>
      normalizedTags.some(t =>
        f.toLowerCase().includes(t) || t.includes(f.toLowerCase())
      )
    )

    // 语义扩展匹配（同类词）
    const semanticGroups: Record<string, string[]> = {
      "免费": ["开源", "内测免费", "完全免费"],
      "安全": ["本地隐私", "隐私保护", "企业合规"],
      "简单": ["零门槛", "傻瓜式", "快速上手", "简单易用"],
      "个人": ["免费", "极客"],
      "公司": ["企业合规", "企业协同", "管理员"],
      "技术": ["开发者", "API", "可配置", "灵活定制"],
      "长文本": ["PDF", "研报", "专业分析"],
    }

    const semanticMatches = p.fit.filter(f =>
      normalizedTags.some(t =>
        Object.entries(semanticGroups).some(([key, synonyms]) =>
          (synonyms.includes(f) || f.includes(key)) &&
          (t === key || synonyms.includes(t))
        )
      )
    )

    const allMatched = [...new Set([...exactMatches, ...semanticMatches])]
    const score = allMatched.length > 0
      ? Math.round((allMatched.length / Math.max(p.fit.length, 1)) * 100)
      : 0

    return { product: p, score, matchedTags: allMatched }
  })

  return results
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
}
