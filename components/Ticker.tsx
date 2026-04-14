"use client"

const TICKER_ITEMS = [
  { label: "13款产品", value: "全面收录", accent: false },
  { label: "🦞 全球首个", value: "OpenClaw 选型平台", accent: true },
  { label: "3分钟", value: "精准匹配你的龙虾", accent: false },
  { label: "免费 · 开源 · 云端", value: "三大路线全覆盖", accent: false },
  { label: "今日热搜", value: "WorkBuddy / Kimi Claw", accent: true },
  { label: "市场洞察", value: "67%用户选择本地部署", accent: false },
  { label: "价格区间", value: "0 ~ ¥199/月", accent: false },
  { label: "NEW", value: "行业报告第1期上线", accent: true },
]

const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

export default function Ticker() {
  return (
    <div className="bg-[#111111] overflow-hidden border-b-2 border-[#111111]">
      <div className="flex items-center">
        {/* Label badge */}
        <div className="shrink-0 bg-[#CC0000] text-[#F9F9F7] px-4 h-9 flex items-center font-mono text-xs uppercase tracking-widest font-bold z-10 border-r-2 border-[#CC0000]">
          ◉ 快讯
        </div>

        {/* Scrolling track */}
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee py-2">
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-6">
                {item.accent ? (
                  <span className="text-[#CC0000] font-mono text-xs uppercase tracking-widest font-bold">
                    {item.label}
                  </span>
                ) : (
                  <span className="text-[#737373] font-mono text-[10px] uppercase tracking-widest">
                    {item.label}
                  </span>
                )}
                <span className="text-[#F9F9F7] font-sans text-xs">{item.value}</span>
                <span className="text-[#404040] mx-3 select-none">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
