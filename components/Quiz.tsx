"use client"

import { useState, useCallback } from "react"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"
import { QUESTIONS, matchProducts, type MatchResult } from "@/lib/products"
import AdSlot from "@/components/AdSlot"
import ResultsPanel from "@/components/ResultsPanel"

type Answers = Record<string, string[]>

export default function Quiz() {
  const [step, setStep] = useState<"idle" | "quiz" | "ad" | "result">("idle")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [results, setResults] = useState<MatchResult[]>([])

  const q = QUESTIONS[current]
  const totalSteps = QUESTIONS.length
  const progress = Math.round(((current) / totalSteps) * 100)

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
      // Show ad every 2 questions
      if ((current + 1) % 2 === 0) {
        setStep("ad")
      } else {
        setCurrent(c => c + 1)
      }
    } else {
      // Compute results
      const allTags = Object.values(answers).flat()
        .map(v => {
          const opt = QUESTIONS.flatMap(q => q.options).find(o => o.value === v)
          return opt?.tags ?? []
        })
        .flat()
      const matched = matchProducts(allTags)
      setResults(matched)
      setStep("result")
    }
  }

  const handleAdContinue = () => {
    setCurrent(c => c + 1)
    setStep("quiz")
  }

  const handleRestart = () => {
    setStep("idle")
    setCurrent(0)
    setAnswers({})
    setResults([])
  }

  return (
    <section id="quiz" className="border-b-4 border-[#111111] section-inverted newsprint-texture">
      <div className="max-w-screen-xl mx-auto px-4 py-16">

        {/* ── Section header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#CC0000]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                Step 01 / 选型引擎
              </span>
            </div>
            <h2 className="font-serif font-black text-4xl lg:text-5xl text-[#F9F9F7] leading-tight">
              三分钟，找到<br />你的龙虾
            </h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:items-end">
            <p className="font-body text-sm text-[#A3A3A3] leading-relaxed mt-4 lg:mt-0">
              {totalSteps} 道生活化提问，覆盖 IM 偏好、部署方式、预算与使用场景，引擎自动计算 13 款产品的匹配分数。
            </p>
          </div>
        </div>

        {/* ── Idle state ── */}
        {step === "idle" && (
          <div className="quiz-slide-in">
            <div className="border-2 border-[#404040] p-8 lg:p-12 max-w-2xl">
              <div className="text-6xl mb-6">🦞</div>
              <h3 className="font-serif font-bold text-2xl text-[#F9F9F7] mb-3">
                准备好了吗？
              </h3>
              <p className="font-body text-[#A3A3A3] text-sm leading-relaxed mb-8">
                接下来将有 {totalSteps} 道问题，每道都是生活化场景。无需技术背景，凭直觉选择即可。
              </p>
              <button
                onClick={() => setStep("quiz")}
                className="inline-flex items-center gap-3 bg-[#CC0000] text-[#F9F9F7] px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-[#F9F9F7] hover:text-[#111111] transition-colors duration-200 min-h-[48px]"
              >
                开始答题 <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        )}

        {/* ── Quiz state ── */}
        {step === "quiz" && q && (
          <div className="quiz-slide-in">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
                  第 {current + 1} 题 / 共 {totalSteps} 题
                </span>
                <span className="font-mono text-[10px] text-[#CC0000]">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-[#404040]">
                <div
                  className="h-full bg-[#CC0000] progress-bar"
                  style={{ width: `${((current + 1) / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="border-2 border-[#404040] p-6 lg:p-10 max-w-3xl">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-4xl">{q.emoji}</span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-2">
                    Question {String(current + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#F9F9F7] leading-snug">
                    {q.text}
                  </h3>
                  <p className="font-mono text-[10px] text-[#737373] mt-2 uppercase tracking-widest">
                    可多选
                  </p>
                </div>
              </div>

              {/* Options grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {q.options.map(opt => {
                  const selected = currentAnswers.includes(opt.value)
                  return (
                    <button
                      key={opt.value}
                      onClick={() => toggleOption(q.id, opt.value)}
                      className={`
                        group relative flex items-center gap-4 p-4 border-2 text-left
                        transition-all duration-150 min-h-[56px]
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
                      <span className="font-sans text-sm leading-snug">{opt.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Nav buttons */}
              <div className="flex items-center gap-4">
                {current > 0 && (
                  <button
                    onClick={() => { setCurrent(c => c - 1); setStep("quiz") }}
                    className="inline-flex items-center gap-2 border-2 border-[#404040] text-[#A3A3A3] px-5 py-3 font-mono text-xs uppercase tracking-widest hover:border-[#F9F9F7] hover:text-[#F9F9F7] transition-colors duration-150 min-h-[44px]"
                  >
                    <ArrowLeft size={14} strokeWidth={1.5} /> 返回
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={!canAdvance}
                  className={`inline-flex items-center gap-2 px-8 py-3 font-mono text-xs uppercase tracking-widest transition-colors duration-150 min-h-[44px]
                    ${canAdvance
                      ? "bg-[#F9F9F7] text-[#111111] hover:bg-[#CC0000] hover:text-[#F9F9F7]"
                      : "bg-[#404040] text-[#737373] cursor-not-allowed"
                    }`}
                >
                  {current === totalSteps - 1 ? "查看结果" : "下一题"}
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Ad interstitial ── */}
        {step === "ad" && (
          <div className="quiz-slide-in">
            <AdSlot
              type="interstitial"
              onContinue={handleAdContinue}
              nextQuestion={`第 ${current + 2} 题`}
            />
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
