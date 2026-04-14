"use client"

import { Github, Twitter, ExternalLink } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="about" className="bg-[#111111] text-[#F9F9F7] border-t-4 border-[#111111]">
      {/* Main footer grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-0 border border-[#2a2a2a]">

          {/* Brand col: 4 wide */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#2a2a2a]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border-2 border-[#F9F9F7] flex items-center justify-center">
                <span className="text-sm">🦞</span>
              </div>
              <div>
                <div className="font-serif font-black text-xl leading-none">选龙虾</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">OpenClaw</div>
              </div>
            </div>
            <p className="font-body text-xs text-[#737373] leading-relaxed mb-6">
              全球首个 OpenClaw AI Agent 选型与分发平台。帮助用户在 3 分钟内找到最适合自己的 AI 龙虾助手。
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Github size={14} strokeWidth={1.5} />, href: "#", label: "GitHub" },
                { icon: <Twitter size={14} strokeWidth={1.5} />, href: "#", label: "Twitter" },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#2a2a2a] flex items-center justify-center hover:bg-[#F9F9F7] hover:text-[#111111] hover:border-[#F9F9F7] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links: 3 × 2 cols = 6 cols wide on lg */}
          {[
            {
              title: "产品",
              links: [
                { label: "开始选型", href: "#quiz" },
                { label: "全部产品", href: "#all-products" },
                { label: "行业报告", href: "#report" },
                { label: "数据大屏", href: "#" },
              ],
            },
            {
              title: "商业",
              links: [
                { label: "广告合作", href: "#" },
                { label: "VPS 导流", href: "#" },
                { label: "赞助席位", href: "#" },
                { label: "API 接入", href: "#" },
              ],
            },
            {
              title: "关于",
              links: [
                { label: "项目背景", href: "#" },
                { label: "联系我们", href: "#" },
                { label: "隐私政策", href: "#" },
                { label: "开源协议", href: "#" },
              ],
            },
          ].map((col, i) => (
            <div
              key={col.title}
              className={`col-span-1 lg:col-span-2 p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#2a2a2a] last:border-r-0`}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-4">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-xs text-[#A3A3A3] hover:text-[#CC0000] transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ExternalLink size={9} strokeWidth={1.5} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter col: 2 wide */}
          <div className="col-span-2 lg:col-span-2 p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-4">
              订阅周报
            </div>
            <p className="font-body text-xs text-[#737373] leading-relaxed mb-4">
              每周推送 OpenClaw 产品动态与行业洞察。
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent border-b-2 border-[#404040] px-0 py-2 font-mono text-xs text-[#F9F9F7] placeholder-[#404040] focus:border-[#F9F9F7] outline-none transition-colors"
                style={{ borderRadius: 0 }}
              />
              <button className="mt-2 border-2 border-[#404040] text-[#A3A3A3] px-4 py-2 font-mono text-[10px] uppercase tracking-widest hover:bg-[#F9F9F7] hover:text-[#111111] hover:border-[#F9F9F7] transition-colors min-h-[40px]">
                订阅
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-[#2a2a2a]">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <span className="font-mono text-[10px] text-[#737373] uppercase tracking-widest">
              Edition: Vol 1.0 · {year} · Printed on the Web
            </span>
            <span className="font-mono text-[10px] text-[#737373] uppercase tracking-widest">
              © {year} 选龙虾 OpenClaw · All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
