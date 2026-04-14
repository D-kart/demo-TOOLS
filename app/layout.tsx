import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "选龙虾 · OpenClaw 选型平台 | 全球首个 AI Agent 分发中心",
  description: "3分钟找到最适合你的 OpenClaw AI Agent。13款主流产品，5道生活化提问，精准匹配引擎，一键安装跳转。",
  keywords: "OpenClaw,AI Agent,选型,龙虾,WorkBuddy,ArkClaw,Kimi,百度文心",
  openGraph: {
    title: "选龙虾 · OpenClaw 选型平台",
    description: "全球首个 OpenClaw AI Agent 互动选型与分发平台",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
