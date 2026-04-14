"use client"

import { ArrowRight, FileText, Zap, TrendingUp } from "lucide-react"

export default function Hero() {
  return (
    <section className="newsprint-texture border-b-4 border-[#111111] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* 12-col asymmetric grid: 8/4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-[#111111]">

          {/* ── Left: Main headline ─────────────────── */}
          <div className="lg:col-span-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#111111] py-12 pr-0 lg:pr-10">

            {/* Kicker label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#CC0000] text-[#F9F9F7] font-mono text-[10px] uppercase tracking-widest px-2 py-1">
                特别报道
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
                2026年4月14日 · 全球独家
              </span>
            </div>

            {/* Big headline */}
            <h1 className="font-serif font-black text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-tighter mb-6 text-[#111111]">
              你的AI<br />
              <span className="text-[#CC0000]">龙虾</span><br />
              在哪里？
            </h1>

            {/* Deck copy */}
            <p className="font-body text-base lg:text-lg leading-relaxed text-[#404040] max-w-xl mb-8 drop-cap">
              全球首个 OpenClaw AI Agent 选型平台。3分钟，5道生活化问答，从13款主流产品中为你精准匹配最合适的龙虾——无论你是普通用户、企业团队还是极客开发者。
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#quiz"
                className="group inline-flex items-center gap-3 bg-[#111111] text-[#F9F9F7] px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-[#CC0000] transition-colors duration-200 min-h-[48px]"
              >
                开始选型
                <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#all-products"
                className="inline-flex items-center gap-3 border-2 border-[#111111] text-[#111111] px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-[#111111] hover:text-[#F9F9F7] transition-colors duration-200 min-h-[48px]"
              >
                浏览全部产品
              </a>
            </div>
          </div>

          {/* ── Right: Stats sidebar ─────────────────── */}
          <div className="lg:col-span-4 py-12 pl-0 lg:pl-8">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-6 border-b border-[#E5E5E0] pb-3">
              数据速览 / Market Data
            </div>

            {/* Stat items */}
            {[
              { num: "13", label: "款产品收录", sub: "覆盖云端·本地·手机" },
              { num: "3", label: "分钟完成选型", sub: "5道生活化问答" },
              { num: "67%", label: "用户倾向本地", sub: "数据安全首要考量" },
              { num: "¥0", label: "最低使用成本", sub: "多款产品完全免费" },
            ].map((stat, i) => (
              <div key={i} className="border-b border-[#E5E5E0] py-4 last:border-b-0">
                <div className="font-serif font-black text-3xl lg:text-4xl text-[#111111] leading-none">
                  {stat.num}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#111111] mt-1">
                  {stat.label}
                </div>
                <div className="font-mono text-[10px] text-[#737373] mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}

            {/* Feature badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: <Zap size={10} strokeWidth={1.5} />, label: "即时匹配" },
                { icon: <FileText size={10} strokeWidth={1.5} />, label: "行业报告" },
                { icon: <TrendingUp size={10} strokeWidth={1.5} />, label: "热度追踪" },
              ].map((b, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 border border-[#111111] px-2 py-1 font-mono text-[10px] uppercase tracking-widest">
                  {b.icon} {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom stripe: 3 editorial pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-[#111111]">
          {[
            {
              icon: "🎯",
              title: "精准匹配",
              desc: "根据 IM 偏好、部署方式、预算与场景，计算每款产品的匹配度分数。",
            },
            {
              icon: "🚀",
              title: "一键安装",
              desc: "跳转优化后的安装引导页，含 VPS 推荐与 SaaS 注册直通车。",
              border: true,
            },
            {
              icon: "📊",
              title: "数据报告",
              desc: "定期发布《OpenClaw 行业热度与用户偏好报告》，洞察市场趋势。",
              border: true,
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`p-6 md:p-8 ${p.border ? "md:border-l-2 border-t-2 md:border-t-0 border-[#111111]" : "border-t-2 md:border-t-0 border-[#111111]"} hover:bg-[#F5F5F5] transition-colors duration-200`}
            >
              <div className="text-2xl mb-3">{p.icon}</div>
              <h3 className="font-serif font-bold text-lg mb-2">{p.title}</h3>
              <p className="font-body text-sm text-[#525252] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
