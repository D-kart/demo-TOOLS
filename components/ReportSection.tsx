"use client"

import { Download, TrendingUp, BarChart2, Users } from "lucide-react"

export default function ReportSection() {
  return (
    <section id="report" className="section-inverted newsprint-texture border-b-4 border-[#111111]">
      <div className="max-w-screen-xl mx-auto px-4 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left headline */}
          <div className="lg:col-span-7 lg:border-r-2 border-[#404040] lg:pr-10 pb-10 lg:pb-0">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#CC0000] text-[#F9F9F7] font-mono text-[10px] uppercase tracking-widest px-2 py-1">
                数据报告
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
                Vol.1 · 2026年4月刊
              </span>
            </div>

            <h2 className="font-serif font-black text-4xl lg:text-6xl text-[#F9F9F7] leading-[0.9] tracking-tighter mb-6">
              OpenClaw<br />
              行业热度<br />
              <span className="text-[#CC0000]">偏好报告</span>
            </h2>

            <p className="font-body text-base text-[#A3A3A3] leading-relaxed mb-8 drop-cap max-w-lg">
              基于本平台实时用户选型数据，每季度发布一期市场洞察报告。追踪各款产品的选择频率、用户画像分布、部署偏好变化，为企业和个人提供决策参考。
            </p>

            {/* Report highlights */}
            <div className="grid grid-cols-2 gap-0 border border-[#404040] mb-8">
              {[
                { icon: <Users size={16} strokeWidth={1.5} />, label: "样本量", val: "2,847人次" },
                { icon: <TrendingUp size={16} strokeWidth={1.5} />, label: "本地部署热度", val: "+34% QoQ" },
                { icon: <BarChart2 size={16} strokeWidth={1.5} />, label: "免费产品占比", val: "31%" },
                { icon: <TrendingUp size={16} strokeWidth={1.5} />, label: "企业用户比例", val: "58%" },
              ].map((item, i) => (
                <div key={i} className={`p-4 ${i % 2 === 0 ? "border-r border-[#404040]" : ""} ${i < 2 ? "border-b border-[#404040]" : ""}`}>
                  <div className="text-[#CC0000] mb-2">{item.icon}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-1">{item.label}</div>
                  <div className="font-serif font-black text-xl text-[#F9F9F7]">{item.val}</div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-[#F9F9F7] text-[#111111] px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-[#CC0000] hover:text-[#F9F9F7] transition-colors duration-200 min-h-[48px]"
            >
              <Download size={16} strokeWidth={1.5} />
              下载完整报告 PDF
            </a>
          </div>

          {/* Right: top products chart */}
          <div className="lg:col-span-5 lg:pl-10 pt-10 lg:pt-0">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-6 border-b border-[#404040] pb-3">
              热度排行 Fig.1.1 / 本期数据
            </div>

            {[
              { name: "WorkBuddy", pct: 92, label: "腾讯云" },
              { name: "LobsterAI 有道龙虾", pct: 84, label: "网易有道" },
              { name: "ArkClaw", pct: 78, label: "字节火山" },
              { name: "Kimi Claw", pct: 71, label: "月之暗面" },
              { name: "MaxClaw", pct: 63, label: "MiniMax" },
              { name: "QClaw", pct: 55, label: "腾讯管家" },
              { name: "DuClaw", pct: 48, label: "百度云" },
            ].map((item, i) => (
              <div key={i} className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <span className="font-mono text-xs text-[#F9F9F7] font-bold">{item.name}</span>
                    <span className="font-mono text-[9px] text-[#737373] ml-2">{item.label}</span>
                  </div>
                  <span className="font-mono text-xs text-[#CC0000] font-bold">{item.pct}</span>
                </div>
                <div className="w-full h-2 bg-[#2a2a2a]">
                  <div
                    className="h-full bg-[#CC0000] progress-bar"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="mt-8 border-t border-[#404040] pt-6">
              <p className="font-mono text-[10px] text-[#737373] leading-relaxed">
                * 数据来源：选龙虾平台实时选型行为，更新周期：每周一。<br />
                * 热度指数 = 用户选择频率 × 匹配得分均值综合计算。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
