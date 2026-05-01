"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="newsprint-texture border-b-4 border-[#111111] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Grid: 8/4 on lg, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Left: Main headline */}
          <div className="lg:col-span-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#111111] py-8 sm:py-10 lg:py-12 pr-0 lg:pr-10">

            {/* Kicker */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="bg-[#CC0000] text-[#F9F9F7] font-mono text-[9px] sm:text-[10px] uppercase tracking-widest px-2 py-1">
                特别报道
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#737373]">
                2026 Edition · 全球独家
              </span>
            </div>

            {/* Big headline */}
            <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.92] sm:leading-[0.9] tracking-tighter mb-4 sm:mb-6 lg:mb-8 text-[#111111]">
              你的AI<br />
              <span className="text-[#CC0000]">龙虾</span><br />
              在哪里？
            </h1>

            {/* Deck copy */}
            <p className="font-body text-sm sm:text-base lg:text-lg leading-relaxed text-[#404040] max-w-xl mb-6 sm:mb-8 drop-cap">
              全球首个 OpenClaw AI Agent 选型平台。回答 9 道精选问题，从 13 款主流产品中精准匹配最适合你的龙虾——无论普通用户、企业团队还是极客开发者。
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <a
                href="#quiz"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#111111] text-[#F9F9F7] px-6 sm:px-8 py-3 sm:py-4 font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-[#CC0000] transition-colors duration-200 min-h-[48px]"
              >
                开始选型
                <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#all-products"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-[#111111] text-[#111111] px-6 sm:px-8 py-3 sm:py-4 font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-[#111111] hover:text-[#F9F9F7] transition-colors duration-200 min-h-[48px]"
              >
                浏览全部产品
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-4 py-6 sm:py-8 lg:py-12 pl-0 lg:pl-8">
            <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#737373] mb-4 sm:mb-6 border-b border-[#E5E5E0] pb-3">
              数据速览 · Market Data
            </div>

            {[
              { num: "13", label: "款产品收录", sub: "云端·本地·手机·VPS" },
              { num: "9", label: "道精选问题", sub: "全面覆盖使用场景" },
              { num: "67%", label: "用户选本地", sub: "数据安全优先" },
              { num: "¥0", label: "最低使用成本", sub: "多款完全免费" },
            ].map((stat, i) => (
              <div key={i} className="border-b border-[#E5E5E0] py-3 sm:py-4 last:border-b-0">
                <div className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#111111] leading-none">
                  {stat.num}
                </div>
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#111111] mt-1">
                  {stat.label}
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] text-[#737373] mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}

            {/* Feature badges */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
              {["精准匹配", "免费使用", "纯净无广告"].map((tag) => (
                <span key={tag}
                  className="border border-[#111111] px-2 sm:px-3 py-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#111111]"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-[#111111]">
          {[
            {
              icon: "🎯",
              title: "精准匹配",
              desc: "9道精选问题，覆盖IM偏好、部署方式、预算与场景，匹配度实时计算。",
            },
            {
              icon: "🚀",
              title: "纯净体验",
              desc: "无广告、无弹窗、无赞助席，专注帮助你找到最合适的Agent工具。",
            },
            {
              icon: "📱",
              title: "丝滑手机",
              desc: "全面移动端优化，手机上回答问题、查看结果一样流畅舒适。",
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`
                p-5 sm:p-6 md:p-8
                ${i < 2 ? "md:border-r-2 border-[#111111] border-b-2 md:border-b-0" : "border-b-0 md:border-b-0"}
                ${i < 2 ? "border-b-2 md:border-b-0" : ""}
                hover:bg-[#F5F5F5] transition-colors duration-150
              `}
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{p.icon}</div>
              <h3 className="font-serif font-bold text-base sm:text-lg mb-1 sm:mb-2">{p.title}</h3>
              <p className="font-body text-xs sm:text-sm text-[#525252] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
