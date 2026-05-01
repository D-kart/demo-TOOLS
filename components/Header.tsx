"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NAV_ITEMS = [
  { label: "开始选型", href: "#quiz" },
  { label: "全部产品", href: "#all-products" },
  { label: "关于我们", href: "#about" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[#F9F9F7] border-b-2 border-[#111111]">

      {/* Edition bar */}
      <div className="bg-[#111111] text-[#F9F9F7] px-3 sm:px-4 py-1">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <span className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest truncate max-w-[55vw] sm:max-w-none">
            Vol. 1 · 2026 Edition · OpenClaw Selection
          </span>
          <span className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-[#CC0000] shrink-0 ml-2">
            ◉ Live
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-screen-xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-12 sm:h-14 border-b border-[#E5E5E0]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 border-2 border-[#111111] flex items-center justify-center bg-[#111111] group-hover:bg-[#CC0000] transition-colors duration-200">
              <span className="text-[#F9F9F7] text-xs sm:text-sm font-black font-serif leading-none">🦞</span>
            </div>
            <div>
              <span className="font-serif font-black text-base sm:text-xl tracking-tight leading-none">选龙虾</span>
              <span className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-[#737373] ml-1 sm:ml-2 hidden xs:inline">OpenClaw</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center divide-x divide-[#E5E5E0]">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-1 font-mono text-xs uppercase tracking-widest text-[#111111] hover:text-[#CC0000] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-[#111111] hover:bg-[#111111] hover:text-[#F9F9F7] transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label="菜单"
          >
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden border-b border-[#111111] pb-3 pt-1">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2.5 sm:py-3 px-2 font-mono text-xs uppercase tracking-widest border-b border-[#E5E5E0] last:border-b-0 hover:bg-[#F5F5F5] transition-colors"
                onClick={() => setOpen(false)}
              >
                <span className="text-[#737373] mr-2">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
