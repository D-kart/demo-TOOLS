"use client"

import { ExternalLink, ArrowRight, RefreshCw, Share2, Trophy, Medal, Award, Download } from "lucide-react"
import type { MatchResult } from "@/lib/products"
import AdSlot from "@/components/AdSlot"

type Props = {
  results: MatchResult[]
  onRestart: () => void
}

const RANK_CONFIG = [
  {
    label: "Gold Pick",
    cn: "首选推荐",
    icon: Trophy,
    borderColor: "border-[#B8860B]",
    badgeColor: "bg-[#B8860B]",
    numColor: "text-[#B8860B]",
  },
  {
    label: "Silver Pick",
    cn: "次选推荐",
    icon: Medal,
    borderColor: "border-[#9CA3AF]",
    badgeColor: "bg-[#9CA3AF]",
    numColor: "text-[#9CA3AF]",
  },
  {
    label: "Bronze Pick",
    cn: "备选推荐",
    icon: Award,
    borderColor: "border-[#92400E]",
    badgeColor: "bg-[#92400E]",
    numColor: "text-[#92400E]",
  },
]

export default function ResultsPanel({ results, onRestart }: Props) {
  const top3 = results.slice(0, 3)
  const rest = results.slice(3)

  const handleShare = () => {
    const text = `我用「选龙虾」找到了最适合我的 OpenClaw Agent：${top3[0]?.product.name}！快来测测你的👉 ${window.location.href}`
    if (navigator.share) {
      navigator.share({ title: "选龙虾 · OpenClaw 选型", text, url: window.location.href })
    } else {
      navigator.clipboard.writeText(text).then(() => alert("已复制分享文案！"))
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-[#CC0000]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
            匹配结果 / Match Results
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
          <h2 className="font-serif font-black text-3xl lg:text-5xl text-[#F9F9F7] leading-tight">
            你的专属龙虾<br />出炉了！
          </h2>
          <div className="flex gap-3 sm:ml-auto">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 border-2 border-[#404040] text-[#A3A3A3] px-4 py-2 font-mono text-xs uppercase tracking-widest hover:border-[#F9F9F7] hover:text-[#F9F9F7] transition-colors min-h-[44px]"
            >
              <Share2 size={14} strokeWidth={1.5} /> 分享
            </button>
            <button
              onClick={onRestart}
              className="inline-flex items-center gap-2 border-2 border-[#404040] text-[#A3A3A3] px-4 py-2 font-mono text-xs uppercase tracking-widest hover:border-[#F9F9F7] hover:text-[#F9F9F7] transition-colors min-h-[44px]"
            >
              <RefreshCw size={14} strokeWidth={1.5} /> 重测
            </button>
          </div>
        </div>
      </div>

      {/* Top 3 cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-[#404040] mb-10">
        {top3.map((r, i) => {
          const cfg = RANK_CONFIG[i]
          const RankIcon = cfg.icon
          return (
            <div
              key={r.product.id}
              className={`
                ${i > 0 ? "border-t-2 lg:border-t-0 lg:border-l-2 border-[#404040]" : ""}
                ${r.product.sponsor ? "bg-[#1a1a1a]" : "bg-[#0d0d0d]"}
                p-6 lg:p-8 flex flex-col
              `}
            >
              {/* Rank badge */}
              <div className="flex items-center justify-between mb-6">
                <div className={`${cfg.badgeColor} text-[#F9F9F7] font-mono text-[10px] uppercase tracking-widest px-2 py-1 flex items-center gap-1.5`}>
                  <RankIcon size={10} strokeWidth={2} />
                  {cfg.cn}
                </div>
                {r.product.sponsor && (
                  <span className="font-mono text-[10px] text-[#737373] border border-[#404040] px-2 py-1">
                    Sponsored
                  </span>
                )}
              </div>

              {/* Rank number + name */}
              <div className="mb-4">
                <div className={`font-serif font-black text-6xl leading-none ${cfg.numColor} mb-2`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#F9F9F7]">{r.product.name}</h3>
                <p className="font-mono text-xs text-[#737373] mt-1 uppercase tracking-widest">
                  {r.product.company}
                </p>
              </div>

              {/* Match score bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] text-[#737373] uppercase tracking-widest">匹配度</span>
                  <span className={`font-mono text-sm font-bold ${cfg.numColor}`}>{r.score}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#404040]">
                  <div
                    className={`h-full progress-bar ${i === 0 ? "bg-[#B8860B]" : i === 1 ? "bg-[#9CA3AF]" : "bg-[#92400E]"}`}
                    style={{ width: `${r.score}%` }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-[#A3A3A3] leading-relaxed mb-4 flex-1">
                {r.product.description}
              </p>

              {/* Meta grid */}
              <div className="grid grid-cols-2 gap-0 border border-[#404040] mb-6">
                {[
                  { label: "部署", val: r.product.deploy },
                  { label: "价格", val: r.product.price },
                  { label: "IM", val: r.product.im },
                  { label: "本地", val: r.product.local === true ? "是" : r.product.local === false ? "否" : String(r.product.local) },
                ].map((m, mi) => (
                  <div key={mi} className={`px-3 py-2 ${mi % 2 === 0 ? "border-r border-[#404040]" : ""} ${mi < 2 ? "border-b border-[#404040]" : ""}`}>
                    <div className="font-mono text-[9px] text-[#737373] uppercase tracking-widest">{m.label}</div>
                    <div className="font-mono text-xs text-[#F9F9F7] mt-0.5 truncate">{m.val}</div>
                  </div>
                ))}
              </div>

              {/* Matched tags */}
              {r.matchedTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {r.matchedTags.map(tag => (
                    <span key={tag} className="font-mono text-[9px] uppercase tracking-widest border border-[#404040] text-[#A3A3A3] px-1.5 py-0.5">
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <a
                href={r.product.installUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group inline-flex items-center justify-center gap-2 w-full py-3 font-mono text-xs uppercase tracking-widest transition-colors duration-200 min-h-[44px]
                  ${i === 0
                    ? "bg-[#CC0000] text-[#F9F9F7] hover:bg-[#F9F9F7] hover:text-[#111111]"
                    : "border-2 border-[#404040] text-[#A3A3A3] hover:border-[#F9F9F7] hover:text-[#F9F9F7]"
                  }
                `}
              >
                {r.product.vpsRec ? `推荐 ${r.product.vpsRec}` : "立即安装"}
                <ExternalLink size={12} strokeWidth={1.5} />
              </a>

              {r.product.vpsRec && (
                <a
                  href={r.product.installUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5 border border-[#404040] text-[#737373] font-mono text-[10px] uppercase tracking-widest hover:border-[#F9F9F7] hover:text-[#F9F9F7] transition-colors min-h-[40px]"
                >
                  <Download size={10} strokeWidth={1.5} /> 部署文档
                </a>
              )}
            </div>
          )
        })}
      </div>

      {/* Sponsor ad slot */}
      <AdSlot type="result-banner" />

      {/* Compare table */}
      <div className="mt-10 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 border-2 border-[#404040]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
            完整对比 / Full Comparison
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-[#404040]">
                {["排名", "产品", "公司", "部署", "价格", "本地", "开源", "匹配度"].map(h => (
                  <th key={h} className="px-3 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-[#737373] border-r border-[#404040] last:border-r-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr
                  key={r.product.id}
                  className={`
                    border-b border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors
                    ${i < 3 ? "bg-[#111111]" : ""}
                  `}
                >
                  <td className="px-3 py-3 font-serif font-black text-sm border-r border-[#2a2a2a]">
                    <span className={
                      i === 0 ? "text-[#B8860B]" :
                      i === 1 ? "text-[#9CA3AF]" :
                      i === 2 ? "text-[#92400E]" : "text-[#737373]"
                    }>
                      #{i + 1}
                    </span>
                  </td>
                  <td className="px-3 py-3 font-sans text-sm text-[#F9F9F7] border-r border-[#2a2a2a]">
                    <a href={r.product.installUrl} target="_blank" rel="noopener noreferrer"
                      className="hover:text-[#CC0000] transition-colors inline-flex items-center gap-1">
                      {r.product.name}
                      {i < 3 && <ArrowRight size={10} strokeWidth={1.5} />}
                    </a>
                  </td>
                  <td className="px-3 py-3 font-mono text-xs text-[#A3A3A3] border-r border-[#2a2a2a]">{r.product.company}</td>
                  <td className="px-3 py-3 font-mono text-xs text-[#A3A3A3] border-r border-[#2a2a2a]">{r.product.deploy}</td>
                  <td className="px-3 py-3 font-mono text-xs text-[#A3A3A3] border-r border-[#2a2a2a]">{r.product.price}</td>
                  <td className="px-3 py-3 font-mono text-xs border-r border-[#2a2a2a]">
                    <span className={r.product.local ? "text-[#4ade80]" : "text-[#737373]"}>
                      {r.product.local === true ? "✓" : r.product.local === false ? "✗" : String(r.product.local)}
                    </span>
                  </td>
                  <td className="px-3 py-3 font-mono text-xs border-r border-[#2a2a2a]">
                    <span className={r.product.opensource ? "text-[#4ade80]" : "text-[#737373]"}>
                      {r.product.opensource ? "✓" : "✗"}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-[#2a2a2a]">
                        <div
                          className="h-full bg-[#CC0000]"
                          style={{ width: `${r.score}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs text-[#A3A3A3]">{r.score}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
