"use client"

import { motion } from "framer-motion"
import { TrendingDown, Bot, Lightbulb } from "lucide-react"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

// === DATA (Population in hundred millions ≒ 億) ===
export const japanPopulation = [
  { year: 2000, value: 1.27 },   // 1.27 億
  { year: 2030, value: 1.16 },   // ▼
  { year: 2050, value: 1.05 }    // ▼
];

export const worldPopulation = [
  { year: 2000, value: 61 },     // 61 億
  { year: 2030, value: 85 },     // ▲
  { year: 2050, value: 97 }      // ▲
];

export const WorldChangeSlide = ({ colors }: BaseSlideProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <SlideLayout colors={colors} title="激変する世界" subtitle="= 君のチャンス">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* 左側：市場の変化 */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <TrendingDown className="h-4 w-4 text-[#00529B]" />
            </span>
            市場の変化
          </h3>

          <div className="flex-1 flex flex-col space-y-6">
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="relative h-64">
                  {/* 日本市場の縮小グラフ */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="h-full flex flex-col justify-between">
                      <div className="h-1/3 border-b border-gray-200 relative">
                        <div className="absolute -top-3 left-0 text-xs text-gray-500">人口（億）</div>
                        <div className="absolute -top-3 right-0 text-xs text-gray-500">100</div>
                      </div>
                      <div className="h-1/3 border-b border-gray-200 relative">
                        <div className="absolute -top-3 right-0 text-xs text-gray-500">50</div>
                      </div>
                      <div className="h-1/3 relative">
                        <div className="absolute -bottom-5 left-0 text-xs text-gray-500">2000</div>
                        <div className="absolute -bottom-5 left-1/3 text-xs text-gray-500">2030</div>
                        <div className="absolute -bottom-5 left-2/3 text-xs text-gray-500">2050</div>
                        <div className="absolute -bottom-5 right-0 text-xs text-gray-500">年</div>
                      </div>
                    </div>

                    {/* 日本の人口推移（階段状） */}
                    <div className="absolute top-1/3 left-0 h-16 w-full">
                      <svg className="w-full h-full" viewBox="0 0 100 30">
                        <path
                          d="M0,5 L30,5 L30,10 L60,10 L60,15 L100,15"
                          stroke="#A70028"
                          strokeWidth="2"
                          fill="none"
                        />
                        <text x="5" y="3" fontSize="3" fill="#A70028">
                          🇯🇵 日本
                        </text>
                      </svg>
                    </div>

                    {/* 世界の人口推移（階段状） */}
                    <div className="absolute top-0 left-0 h-16 w-full">
                      <svg className="w-full h-full" viewBox="0 0 100 30">
                        <path
                          d="M0,15 L30,15 L30,10 L60,10 L60,5 L100,5"
                          stroke="#14B8A6"
                          strokeWidth="2"
                          fill="none"
                        />
                        <text x="70" y="5" fontSize="3" fill="#14B8A6">
                          🌏 世界
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <p className="text-sm">
                    日本：2000→2030→2050 で -22 %<br />  
                    世界：同期間 +59 %
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 右側：AI時代の変化 */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <Bot className="h-4 w-4 text-[#00529B]" />
            </span>
            AI時代の変化
          </h3>

          <div className="flex-1 flex flex-col space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-4xl text-center mb-2">🤖</div>
                <h4 className="font-bold text-center mb-1">定型業務→AI代替</h4>
                <p className="text-sm text-center text-gray-600">AIによる代替が進む</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                <div className="text-4xl text-center mb-2">✨</div>
                <h4 className="font-bold text-center text-[#F97316] mb-1">創造性→価値向上</h4>
                <p className="text-sm text-center text-gray-600">人間ならではの強み</p>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-center text-[#00529B] mb-3 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 mr-1" />
                  AI x 英語→グローバル🚀
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-[#14B8A6] text-white flex items-center justify-center text-xs mr-2">
                      1
                    </span>
                    <span className="text-base">AIツールを使いこなす人材の需要増加</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-[#14B8A6] text-white flex items-center justify-center text-xs mr-2">
                      2
                    </span>
                    <span className="text-base">グローバル市場へのアクセスが容易に</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-[#14B8A6] text-white flex items-center justify-center text-xs mr-2">
                      3
                    </span>
                    <span className="text-base">新しいビジネスモデルの創出チャンス</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 bg-gradient-to-r from-[#00529B] to-[#0066BE] p-4 rounded-lg text-white text-center"
      >
        <p className="text-xl font-bold">あなたは、この急激な変化の中で</p>
        <p className="text-xl font-bold text-white">どう未来を切り拓くのか？</p>
      </motion.div>
    </SlideLayout>
  )
}
