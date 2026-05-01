"use client"

import { ExternalLink, ArrowRight, RefreshCw, Share2, Trophy, Medal, Award } from "lucide-react"
import type { MatchResult } from "@/lib/products"

type Props = {
  results: MatchResult[]
  onRestart: () => void
}

const RANK_CONFIG = [
  {
    label: "Gold Pick",
    cn: "首选推荐",
    icon: Trophy,
    badge: "🏆",
    numColor: "text-[#B8860B]",
    barColor: "bg-gradient-to-r from-[#B8860B] to-[#FFD700]",
  },
  {
    label: "Silver Pick",
    cn: "次选推荐",
    icon: Medal,
    badge: "🥈",
    numColor: "text-[#9CA3AF]",
    barColor: "bg-gradient-to-r from-[#9CA3AF] to-[#D1D5DB]",
  },
  {
    label: "Bronze Pick",
    cn: "备选推荐",
    icon: Award,
    badge: "🥉",
    numColor: "text-[#CD7F32]",
    barColor: "bg-gradient-to-r from-[#CD7F32] to-[#F59E0B]",
  },
]

export default function ResultsPanel({ results, onRestart }: Props) {
  const top3 = results.slice(0, 3)

  const handleShare = () => {
    const text = `我用「选龙虾」找到了最适合我的 OpenClaw：${top3[0]?.product.name}！快来测测你的👉 ${window.location.href}`
    if (navigator.share) {
      navigator.share({ title: "选龙虾 · OpenClaw 选型", text, url: window.location.href })
    } else {
      navigator.clipboard.writeText(text).then(() => alert("已复制分享文案！"))
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-[#CC0000]" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#737373]">
            匹配结果 · Match Results
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
          <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-5xl text-[#F9F9F7] leading-tight">
            你的专属龙虾<br className="hidden sm:block" /> 出炉了！
          </h2>
          <div className="flex gap-2 sm:ml-auto">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#404040] text-[#A3A3A3] px-3 sm:px-4 py-2 sm:py-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:border-[#F9F9F7] hover:text-[#F9F9F7] transition-colors min-h-[40px] sm:min-h-[44px]"
            >
              <Share2 size={14} strokeWidth={1.5} /> 分享
            </button>
            <button
              onClick={onRestart}
              className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#404040] text-[#A3A3A3] px-3 sm:px-4 py-2 sm:py-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:border-[#F9F9F7] hover:text-[#F9F9F7] transition-colors min-h-[40px] sm:min-h-[44px]"
            >
              <RefreshCw size={14} strokeWidth={1.5} /> 重测
            </button>
          </div>
        </div>
      </div>

      {/* Top 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#404040] mb-6 sm:mb-8 lg:mb-10">
        {top3.map((r, i) => {
          const cfg = RANK_CONFIG[i]
          const RankIcon = cfg.icon
          return (
            <div
              key={r.product.id}
              className={`
                ${i > 0 ? "border-t-2 md:border-t-0 md:border-l-2 border-[#404040]" : ""}
                bg-[#0d0d0d] p-5 sm:p-6 lg:p-8 flex flex-col
              `}
            >
              {/* Rank badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <RankIcon size={16} strokeWidth={1.5} className={cfg.numColor} />
                  <span className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-widest ${cfg.numColor}`}>
                    {cfg.cn}
                  </span>
                </div>
                <span className="text-xl sm:text-2xl">{cfg.badge}</span>
              </div>

              {/* Rank number */}
              <div className="mb-3 sm:mb-4">
                <div className={`font-serif font-black text-5xl sm:text-6xl lg:text-7xl leading-none ${cfg.numColor} mb-2`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg lg:text-xl text-[#F9F9F7] leading-tight">
                  {r.product.name}
                </h3>
                <p className="font-mono text-[9px] sm:text-[10px] text-[#737373] mt-1 uppercase tracking-widest">
                  {r.product.company}
                </p>
              </div>

              {/* Score bar */}
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#737373] uppercase tracking-widest">匹配度</span>
                  <span className={`font-mono text-sm sm:text-base font-bold ${cfg.numColor}`}>
                    {r.score}%
                  </span>
                </div>
                <div className="w-full h-1.5 sm:h-2 bg-[#2a2a2a]">
                  <div
                    className={`h-full ${cfg.barColor} transition-all duration-1000`}
                    style={{ width: `${r.score}%` }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-4 flex-1">
                {r.product.description}
              </p>

              {/* Matched tags */}
              {r.matchedTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {r.matchedTags.slice(0, 4).map(tag => (
                    <span key={tag}
                      className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest border border-[#404040] text-[#A3A3A3] px-1.5 py-0.5"
                    >
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
                  group flex items-center justify-center gap-2 w-full px-4 py-3 sm:py-3.5 font-mono text-[11px] sm:text-xs uppercase tracking-widest transition-colors duration-200 min-h-[48px] sm:min-h-[44px] mt-auto
                  ${i === 0
                    ? "bg-[#CC0000] text-[#F9F9F7] hover:bg-[#F9F9F7] hover:text-[#111111]"
                    : "border-2 border-[#404040] text-[#A3A3A3] hover:border-[#F9F9F7] hover:text-[#F9F9F7]"
                  }
                `}
              >
                立即安装
                <ExternalLink size={12} strokeWidth={1.5} />
              </a>
            </div>
          )
        })}
      </div>

      {/* Quick meta comparison */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 border-2 border-[#404040]" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#737373]">
            快速对比 · Quick Compare
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b-2 border-[#404040]">
                {["排名", "产品", "公司", "部署", "价格", "开源", "本地", "匹配"].map(h => (
                  <th key={h}
                    className="px-2 sm:px-3 py-2.5 sm:py-3 text-left font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#737373] border-r border-[#2a2a2a] last:border-r-0"
                  >
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
                    border-b border-[#2a2a2a] transition-colors
                    ${i < 3 ? "bg-[#111111]" : ""}
                    hover:bg-[#1a1a1a]
                  `}
                >
                  <td className="px-2 sm:px-3 py-2.5 sm:py-3 font-serif font-black text-sm border-r border-[#2a2a2a]">
                    <span className={
                      i === 0 ? "text-[#B8860B]" :
                      i === 1 ? "text-[#9CA3AF]" :
                      i === 2 ? "text-[#CD7F32]" : "text-[#737373]"
                    }>
                      #{i + 1}
                    </span>
                  </td>
                  <td className="px-2 sm:px-3 py-2.5 sm:py-3 font-sans text-xs sm:text-sm text-[#F9F9F7] border-r border-[#2a2a2a]">
                    <a href={r.product.installUrl} target="_blank" rel="noopener noreferrer"
                      className="hover:text-[#CC0000] transition-colors inline-flex items-center gap-1">
                      {r.product.name}
                      {i < 3 && <ArrowRight size={10} strokeWidth={1.5} />}
                    </a>
                  </td>
                  <td className="px-2 sm:px-3 py-2.5 sm:py-3 font-mono text-[10px] sm:text-xs text-[#A3A3A3] border-r border-[#2a2a2a] hidden sm:table-cell">
                    {r.product.company}
                  </td>
                  <td className="px-2 sm:px-3 py-2.5 sm:py-3 font-mono text-[10px] sm:text-xs text-[#A3A3A3] border-r border-[#2a2a2a]">
                    {r.product.deploy}
                  </td>
                  <td className="px-2 sm:px-3 py-2.5 sm:py-3 font-mono text-[10px] sm:text-xs border-r border-[#2a2a2a]">
                    <span className={r.product.price.includes("免费") ? "text-[#4ade80]" : "text-[#A3A3A3]"}>
                      {r.product.price}
                    </span>
                  </td>
                  <td className="px-2 sm:px-3 py-2.5 sm:py-3 font-mono text-[10px] sm:text-xs border-r border-[#2a2a2a]">
                    <span className={r.product.opensource ? "text-[#4ade80]" : "text-[#737373]"}>
                      {r.product.opensource ? "✓" : "—"}
                    </span>
                  </td>
                  <td className="px-2 sm:px-3 py-2.5 sm:py-3 font-mono text-[10px] sm:text-xs border-r border-[#2a2a2a]">
                    <span className={r.product.local ? "text-[#4ade80]" : "text-[#737373]"}>
                      {r.product.local === true ? "✓" : r.product.local === false ? "—" : String(r.product.local)}
                    </span>
                  </td>
                  <td className="px-2 sm:px-3 py-2.5 sm:py-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-12 sm:w-16 h-1.5 bg-[#2a2a2a]">
                        <div className="h-full bg-[#CC0000]" style={{ width: `${r.score}%` }} />
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs text-[#A3A3A3]">{r.score}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA row */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 border-2 border-[#404040] text-[#A3A3A3] px-6 sm:px-8 py-3 sm:py-4 font-mono text-xs sm:text-sm uppercase tracking-widest hover:border-[#F9F9F7] hover:text-[#F9F9F7] transition-colors min-h-[48px]"
        >
          <RefreshCw size={16} strokeWidth={1.5} />
          重新选择
        </button>
        <button
          onClick={handleShare}
          className="inline-flex items-center justify-center gap-2 bg-[#CC0000] text-[#F9F9F7] px-6 sm:px-8 py-3 sm:py-4 font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-[#F9F9F7] hover:text-[#111111] transition-colors min-h-[48px]"
        >
          <Share2 size={16} strokeWidth={1.5} />
          分享结果
        </button>
      </div>
    </div>
  )
}
