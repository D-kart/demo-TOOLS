"use client"

import { ArrowRight, ExternalLink } from "lucide-react"

type Props =
  | { type: "interstitial"; onContinue: () => void; nextQuestion: string }
  | { type: "result-banner" }
  | { type: "sidebar" }

// VPS partner data — these are the revenue-driving links
const VPS_PARTNERS = [
  {
    name: "阿里云 ECS",
    desc: "新用户首单 9.9 元，OpenClaw 一键部署模板已上架",
    badge: "限时特惠",
    url: "https://www.aliyun.com/",
    highlight: true,
  },
  {
    name: "腾讯云轻量",
    desc: "月付 45 元起，WorkBuddy 官方推荐配置，合规认证",
    badge: "官方推荐",
    url: "https://cloud.tencent.com/",
    highlight: false,
  },
  {
    name: "华为云 ECS",
    desc: "盘古模型原生支持，信创环境一键拉起",
    badge: "信创合规",
    url: "https://www.huaweicloud.com/",
    highlight: false,
  },
]

export default function AdSlot(props: Props) {

  if (props.type === "interstitial") {
    return (
      <div className="max-w-2xl">
        {/* Ad label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="border border-[#404040] text-[#737373] font-mono text-[10px] uppercase tracking-widest px-2 py-1">
            广告 / Ad
          </span>
          <span className="font-mono text-[10px] text-[#737373]">赞助商精选内容</span>
        </div>

        <div className="border-2 border-[#404040] overflow-hidden mb-8">
          {/* Ad header */}
          <div className="bg-[#1a1a1a] border-b-2 border-[#404040] px-6 py-4">
            <div className="flex items-center justify-between">
              <span className="font-serif font-black text-xl text-[#F9F9F7]">部署你的龙虾</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">Sponsor</span>
            </div>
            <p className="font-body text-sm text-[#A3A3A3] mt-1">
              选好了产品，下一步就是部署上线。以下云厂商提供 OpenClaw 专属优惠：
            </p>
          </div>

          {/* VPS cards */}
          <div className="divide-y divide-[#2a2a2a]">
            {VPS_PARTNERS.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-4 hover:bg-[#1a1a1a] transition-colors group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-sm text-[#F9F9F7] font-bold">{p.name}</span>
                    <span className={`font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 ${p.highlight ? "bg-[#CC0000] text-[#F9F9F7]" : "border border-[#404040] text-[#737373]"}`}>
                      {p.badge}
                    </span>
                  </div>
                  <p className="font-body text-xs text-[#737373]">{p.desc}</p>
                </div>
                <ExternalLink size={14} strokeWidth={1.5} className="text-[#404040] group-hover:text-[#CC0000] transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Continue button */}
        <button
          onClick={props.onContinue}
          className="inline-flex items-center gap-3 bg-[#F9F9F7] text-[#111111] px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-[#CC0000] hover:text-[#F9F9F7] transition-colors duration-200 min-h-[48px]"
        >
          继续答题 · {props.nextQuestion}
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
      </div>
    )
  }

  if (props.type === "result-banner") {
    return (
      <div className="border-2 border-[#404040] ad-slot p-6 mb-2">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="border border-[#404040] text-[#737373] font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5">
                赞助席 · Sponsored
              </span>
              <span className="font-mono text-[9px] text-[#737373]">广告</span>
            </div>
            <h4 className="font-serif font-bold text-xl text-[#F9F9F7] mb-1">
              🚀 准备好部署你的 OpenClaw 了吗？
            </h4>
            <p className="font-body text-sm text-[#A3A3A3]">
              阿里云 · 腾讯云 · 华为云提供 OpenClaw 专属部署包，新用户首单低至 ¥9.9，一键拉起、自动配置。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://www.aliyun.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#CC0000] text-[#F9F9F7] px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#F9F9F7] hover:text-[#111111] transition-colors min-h-[44px]"
            >
              阿里云 ¥9.9 <ExternalLink size={12} strokeWidth={1.5} />
            </a>
            <a
              href="https://cloud.tencent.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#404040] text-[#A3A3A3] px-6 py-3 font-mono text-xs uppercase tracking-widest hover:border-[#F9F9F7] hover:text-[#F9F9F7] transition-colors min-h-[44px]"
            >
              腾讯云 <ExternalLink size={12} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    )
  }

  if (props.type === "sidebar") {
    return (
      <div className="border-2 border-[#404040] ad-slot p-4">
        <div className="font-mono text-[9px] uppercase tracking-widest text-[#737373] mb-3 border-b border-[#2a2a2a] pb-2">
          推广 · Sponsored
        </div>
        <p className="font-body text-xs text-[#A3A3A3] leading-relaxed mb-4">
          用阿里云 ECS 一键部署 JVS Claw，通义大模型加持，新用户 ¥9.9 起。
        </p>
        <a
          href="https://www.aliyun.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#CC0000] font-mono text-xs uppercase tracking-widest hover:underline"
        >
          立即查看 <ArrowRight size={10} strokeWidth={1.5} />
        </a>
      </div>
    )
  }

  return null
}
