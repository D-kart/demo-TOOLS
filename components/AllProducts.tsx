"use client"

import { ExternalLink } from "lucide-react"
import { PRODUCTS } from "@/lib/products"
import AdSlot from "@/components/AdSlot"

export default function AllProducts() {
  return (
    <section id="all-products" className="border-b-4 border-[#111111]">
      <div className="max-w-screen-xl mx-auto px-4 py-16">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#111111]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                Step 02 / Product Directory
              </span>
            </div>
            <h2 className="font-serif font-black text-4xl lg:text-5xl leading-tight">
              13款产品<br />全景一览
            </h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:items-end">
            <p className="font-body text-sm text-[#525252] leading-relaxed mt-4 lg:mt-0 text-justify">
              覆盖云端SaaS、本地部署、手机原生、一键VPS四大路线，从零元到¥199/月，从小白到极客全覆盖。
            </p>
          </div>
        </div>

        {/* 12-col newspaper grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#111111]">

          {/* Left: Product cards 8 cols */}
          <div className="lg:col-span-8 lg:border-r-2 border-[#111111]">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y-2 divide-[#111111] border-b-2 lg:border-b-0">
              {PRODUCTS.map((p, i) => (
                <div
                  key={p.id}
                  className={`
                    group p-5 hard-shadow-hover cursor-pointer
                    ${i % 2 === 0 ? "sm:border-r-2 sm:border-[#111111]" : ""}
                    ${i >= PRODUCTS.length - (PRODUCTS.length % 2 === 0 ? 2 : 1) ? "" : ""}
                    ${p.sponsor ? "bg-[#F5F5F5]" : "bg-[#F9F9F7]"}
                  `}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-serif font-bold text-lg leading-tight">{p.name}</h3>
                        {p.sponsor && (
                          <span className="font-mono text-[8px] uppercase tracking-widest border border-[#111111] px-1 py-0.5 text-[#737373]">
                            Ad
                          </span>
                        )}
                        {p.opensource && (
                          <span className="font-mono text-[8px] uppercase tracking-widest bg-[#111111] text-[#F9F9F7] px-1 py-0.5">
                            OSS
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">{p.company}</p>
                    </div>
                    <a
                      href={p.installUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 border border-[#E5E5E0] flex items-center justify-center hover:bg-[#111111] hover:text-[#F9F9F7] hover:border-[#111111] transition-colors shrink-0"
                      aria-label={`访问 ${p.name}`}
                    >
                      <ExternalLink size={14} strokeWidth={1.5} />
                    </a>
                  </div>

                  <p className="font-body text-xs text-[#525252] leading-relaxed mb-3">{p.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.fit.map(tag => (
                      <span key={tag} className="font-mono text-[9px] uppercase tracking-widest border border-[#E5E5E0] text-[#737373] px-1.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom meta */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#E5E5E0]">
                    <span className="font-mono text-xs text-[#111111] font-bold">{p.price}</span>
                    <div className="flex gap-2">
                      <span className={`font-mono text-[9px] uppercase px-1.5 py-0.5 ${p.local ? "bg-[#111111] text-[#F9F9F7]" : "border border-[#E5E5E0] text-[#A3A3A3]"}`}>
                        {p.local === true ? "本地" : p.local === false ? "云端" : String(p.local)}
                      </span>
                      <span className="font-mono text-[9px] uppercase border border-[#E5E5E0] text-[#A3A3A3] px-1.5 py-0.5">
                        {p.deploy}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sidebar 4 cols */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Route breakdown */}
            <div className="border-b-2 border-[#111111] p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-4">
                部署路线分布
              </div>
              {[
                { label: "云端 SaaS", count: 5, pct: 38 },
                { label: "本地部署", count: 4, pct: 31 },
                { label: "一键 VPS", count: 3, pct: 23 },
                { label: "手机系统", count: 1, pct: 8 },
              ].map(r => (
                <div key={r.label} className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs text-[#111111]">{r.label}</span>
                    <span className="font-mono text-xs text-[#737373]">{r.count} 款</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E5E5E0]">
                    <div className="h-full bg-[#111111] progress-bar" style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Price breakdown */}
            <div className="border-b-2 border-[#111111] p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-4">
                价格区间
              </div>
              {[
                { label: "完全免费", count: 4, color: "bg-[#111111]" },
                { label: "¥10以下", count: 2, color: "bg-[#404040]" },
                { label: "¥10~100", count: 3, color: "bg-[#737373]" },
                { label: "服务器费", count: 3, color: "bg-[#A3A3A3]" },
                { label: "¥100+", count: 1, color: "bg-[#E5E5E0]" },
              ].map(p => (
                <div key={p.label} className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 ${p.color} shrink-0`} />
                  <span className="font-mono text-xs text-[#525252] flex-1">{p.label}</span>
                  <span className="font-mono text-xs font-bold">{p.count}</span>
                </div>
              ))}
            </div>

            {/* Sidebar ad */}
            <div className="p-6 flex-1">
              <AdSlot type="sidebar" />
            </div>

            {/* Ornament */}
            <div className="py-6 text-center font-serif text-xl text-[#E5E5E0] tracking-[1em] border-t-2 border-[#111111]">
              &#x2727; &#x2727; &#x2727;
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
