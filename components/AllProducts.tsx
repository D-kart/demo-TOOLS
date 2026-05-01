"use client"

import { ExternalLink } from "lucide-react"
import { PRODUCTS } from "@/lib/products"

export default function AllProducts() {
  return (
    <section id="all-products" className="border-b-4 border-[#111111]">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:py-16">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-8 sm:mb-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#111111]" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#737373]">
                产品目录 · All Products
              </span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
              13款产品<br className="hidden sm:block" /> 全景一览
            </h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:items-end">
            <p className="font-body text-sm text-[#525252] leading-relaxed mt-4 lg:mt-0 text-justify">
              覆盖云端 SaaS、本地部署、手机原生、一键 VPS 四大路线，从零元到 ¥199/月，从小白到极客全覆盖。
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0 border-2 border-[#111111]">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.id}
              className={`
                group p-4 sm:p-5 lg:p-6 border-b-2 sm:border-b-0
                ${i % 2 === 0 ? "sm:border-r-2 border-[#111111]" : ""}
                ${i >= PRODUCTS.length - (PRODUCTS.length % 2 === 0 ? 2 : 1) ? "border-b-0" : ""}
                ${p.opensource ? "bg-[#F9F9F7]" : "bg-[#F9F9F7]"}
                hover:bg-[#F5F5F5] transition-colors duration-150
              `}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-2 sm:mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                    <h3 className="font-serif font-bold text-base sm:text-lg leading-tight">{p.name}</h3>
                    {p.opensource && (
                      <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest bg-[#111111] text-[#F9F9F7] px-1.5 py-0.5">
                        开源
                      </span>
                    )}
                    {p.local === true && (
                      <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest border border-[#111111] px-1.5 py-0.5">
                        本地
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#737373]">{p.company}</p>
                </div>
                <a
                  href={p.installUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 border border-[#E5E5E0] flex items-center justify-center hover:bg-[#111111] hover:text-[#F9F9F7] hover:border-[#111111] transition-colors shrink-0"
                  aria-label={`访问 ${p.name}`}
                >
                  <ExternalLink size={14} strokeWidth={1.5} />
                </a>
              </div>

              {/* Description */}
              <p className="font-body text-xs sm:text-sm text-[#525252] leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                {p.fit.slice(0, 4).map(tag => (
                  <span key={tag}
                    className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest border border-[#E5E5E0] text-[#737373] px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom meta */}
              <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-[#E5E5E0]">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#111111]">{p.price}</span>
                <div className="flex gap-1.5">
                  <span className={`
                    font-mono text-[8px] sm:text-[9px] uppercase px-1.5 sm:px-2 py-0.5
                    ${p.local ? "bg-[#111111] text-[#F9F9F7]" : "border border-[#E5E5E0] text-[#A3A3A3]"}
                  `}>
                    {p.local === true ? "本地" : p.local === false ? "云端" : String(p.local)}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] uppercase border border-[#E5E5E0] text-[#A3A3A3] px-1.5 sm:px-2 py-0.5">
                    {p.deploy}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-2 border-[#111111] border-t-0 mt-0">
          {[
            { label: "收录产品", val: "13款", sub: "云端·本地·手机·VPS" },
            { label: "免费产品", val: "4款", sub: "WorkBuddy等完全免费" },
            { label: "开源产品", val: "1款", sub: "LobsterAI有道龙虾" },
            { label: "价格区间", val: "¥0~199", sub: "满足各类预算" },
          ].map((s, i) => (
            <div
              key={i}
              className={`
                p-4 sm:p-6 ${i > 0 ? "border-l-0 sm:border-l-2 border-[#111111]" : ""} ${i < 2 ? "border-b-2 sm:border-b-0 border-[#111111]" : ""}
                bg-[#F9F9F7] hover:bg-[#F5F5F5] transition-colors
              `}
            >
              <div className="font-serif font-black text-xl sm:text-2xl lg:text-3xl text-[#111111] leading-none mb-1">
                {s.val}
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#111111] mb-0.5">
                {s.label}
              </div>
              <div className="font-mono text-[8px] sm:text-[9px] text-[#737373]">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
