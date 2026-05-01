"use client"

import { useState, useCallback } from "react"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"
import { QUESTIONS, matchProducts, type MatchResult } from "@/lib/products"
import ResultsPanel from "@/components/ResultsPanel"

type Answers = Record<string, string[]>

export default function Quiz() {
  const [step, setStep] = useState<"idle" | "quiz" | "result">("idle")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [results, setResults] = useState<MatchResult[]>([])

  const q = QUESTIONS[current]
  const totalSteps = QUESTIONS.length

  const toggleOption = useCallback((qid: string, value: string) => {
    setAnswers(prev => {
      const cur = prev[qid] ?? []
      const exists = cur.includes(value)
      return {
        ...prev,
        [qid]: exists ? cur.filter(v => v !== value) : [...cur, value],
      }
    })
  }, [])

  const currentAnswers = answers[q?.id] ?? []
  const canAdvance = currentAnswers.length > 0

  const handleNext = () => {
    if (current < totalSteps - 1) {
      setCurrent(c => c + 1)
    } else {
      // Compute results
      const allTags: string[] = []
      Object.entries(answers).forEach(([qid, vals]) => {
        vals.forEach(v => {
          const question = QUESTIONS.find(q => q.id === qid)
          const opt = question?.options.find(o => o.value === v)
          if (opt) allTags.push(...opt.tags)
        })
      })
      const matched = matchProducts(allTags)
      setResults(matched)
      setStep("result")
    }
  }

  const handlePrev = () => {
    if (current > 0) setCurrent(c => c - 1)
  }

  const handleRestart = () => {
    setStep("idle")
    setCurrent(0)
    setAnswers({})
    setResults([])
  }

  return (
    <section id="quiz" className="border-b-4 border-[#111111] section-inverted newsprint-texture">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:py-16">

        {/* ── Section header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-10 sm:mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#CC0000]" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#737373]">
                选型引擎 · Matcher
              </span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#F9F9F7] leading-tight">
              回答 {totalSteps} 道题<br className="hidden sm:block" /> 找到你的龙虾
            </h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:items-end">
            <p className="font-body text-sm text-[#A3A3A3] leading-relaxed mt-4 lg:mt-0">
              {totalSteps} 道精选问题，覆盖 IM 偏好、部署方式、预算、场景等维度，精准匹配 13 款 OpenClaw 产品。
            </p>
          </div>
        </div>

        {/* ── Idle state ── */}
        {step === "idle" && (
          <div className="quiz-slide-in max-w-lg">
            <div className="border-2 border-[#404040] p-6 sm:p-8 lg:p-12">
              <div className="text-5xl sm:text-6xl mb-4">🦞</div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#F9F9F7] mb-3">
                准备好了吗？
              </h3>
              <p className="font-body text-[#A3A3A3] text-sm leading-relaxed mb-6">
                共 {totalSteps} 道问题，每道对应真实使用场景。
                无需技术背景，凭直觉选择即可，大约 2 分钟完成。
              </p>
              <button
                onClick={() => setStep("quiz")}
                className="group inline-flex items-center gap-3 bg-[#CC0000] text-[#F9F9F7] px-6 sm:px-8 py-3 sm:py-4 font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-[#F9F9F7] hover:text-[#111111] transition-colors duration-200 min-h-[48px]"
              >
                开始答题
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* ── Quiz state ── */}
        {step === "quiz" && q && (
          <div className="quiz-slide-in max-w-2xl">
            {/* Progress */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#737373]">
                  第 {current + 1} 题 / 共 {totalSteps} 题
                </span>
                <span className="font-mono text-[10px] text-[#CC0000]">
                  {Math.round(((current) / totalSteps) * 100)}%
                </span>
              </div>
              {/* Step dots */}
              <div className="flex gap-1.5 mb-3">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      background: i < current
                        ? 'rgba(0,180,255,0.8)'
                        : i === current
                          ? 'rgba(0,180,255,1)'
                          : 'rgba(255,255,255,0.15)',
                      boxShadow: i === current ? '0 0 6px rgba(0,180,255,0.6)' : 'none',
                    }}
                  />
                ))}
              </div>
              <div className="w-full h-1 bg-[#2a2a2a]">
                <div
                  className="h-full bg-[#CC0000] transition-all duration-400"
                  style={{ width: `${((current + 1) / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="border-2 border-[#404040] p-5 sm:p-6 lg:p-10 mb-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl leading-none mt-0.5">{q.emoji}</span>
                <div>
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#737373] mb-2">
                    Question {String(current + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl lg:text-2xl text-[#F9F9F7] leading-snug">
                    {q.text}
                  </h3>
                  <p className="font-mono text-[9px] sm:text-[10px] text-[#737373] mt-2 uppercase tracking-widest">
                    可多选
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-6 sm:mb-8">
                {q.options.map(opt => {
                  const selected = currentAnswers.includes(opt.value)
                  return (
                    <button
                      key={opt.value}
                      onClick={() => toggleOption(q.id, opt.value)}
                      className={`
                        group relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border-2 text-left
                        transition-all duration-150 min-h-[52px] sm:min-h-[56px]
                        ${selected
                          ? "border-[#CC0000] bg-[#CC0000] text-[#F9F9F7]"
                          : "border-[#404040] text-[#A3A3A3] hover:border-[#F9F9F7] hover:text-[#F9F9F7]"
                        }
                      `}
                    >
                      <div className={`w-5 h-5 border-2 shrink-0 flex items-center justify-center transition-colors
                        ${selected ? "border-[#F9F9F7]" : "border-[#404040] group-hover:border-[#F9F9F7]"}`}
                      >
                        {selected && <CheckCircle size={12} strokeWidth={2} />}
                      </div>
                      <span className="font-sans text-sm sm:text-base leading-snug">{opt.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Nav */}
              <div className="flex gap-3 sm:gap-4">
                {current > 0 ? (
                  <button
                    onClick={handlePrev}
                    className="inline-flex items-center gap-2 border-2 border-[#404040] text-[#A3A3A3] px-4 sm:px-5 py-2.5 sm:py-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:border-[#F9F9F7] hover:text-[#F9F9F7] transition-colors duration-150 min-h-[44px]"
                  >
                    <ArrowLeft size={14} strokeWidth={1.5} /> 返回
                  </button>
                ) : <div />}
                <button
                  onClick={handleNext}
                  disabled={!canAdvance}
                  className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 font-mono text-xs sm:text-sm uppercase tracking-widest transition-colors duration-150 min-h-[44px]
                    ${canAdvance
                      ? "bg-[#F9F9F7] text-[#111111] hover:bg-[#CC0000] hover:text-[#F9F9F7]"
                      : "bg-[#404040] text-[#737373] cursor-not-allowed"
                    }`}
                >
                  {current === totalSteps - 1 ? "查看我的龙虾 →" : "下一题 →"}
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Results ── */}
        {step === "result" && (
          <div className="quiz-slide-in">
            <ResultsPanel results={results} onRestart={handleRestart} />
          </div>
        )}

      </div>
    </section>
  )
}
