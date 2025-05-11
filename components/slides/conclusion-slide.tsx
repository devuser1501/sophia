"use client"

import { motion } from "framer-motion"
import { CheckCircle, ExternalLink, ArrowRight, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

export const ConclusionSlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="君の未来は、君が創る！">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* 左側：今日のポイント */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-[#14B8A6]" />
            今日の学び
          </h3>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#00529B] mb-2">1. 世界は激変→チャンス！</h4>
              <p className="text-sm">
                日本市場の縮小とAI時代の到来は、グローバルに活躍するチャンス。変化を恐れず、チャンスと捉えよう。
              </p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#14B8A6] mb-2">2. AI=相棒, 英語=翼</h4>
              <p className="text-sm">
                AIは最強の「壁打ち相手」。英語は世界中に「居場所」を作るパスポート。この2つを武器に可能性を広げよう。
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#F97316] mb-2">3. 大事なのは君の「Why」と「行動」</h4>
              <p className="text-sm">
                「なぜ？」を問い続け、小さな一歩を踏み出す勇気。失敗から学び、やり抜く力が未来を創る。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 右側：次のステップ */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <Rocket className="h-5 w-5 mr-2 text-[#F97316]" />
            ネクストステップ
          </h3>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#14B8A6] shadow-sm">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#14B8A6] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#14B8A6] mb-1">🤖 AIと友達になる</h4>
                  <p className="text-sm text-gray-700">
                    Gemini, ChatGPT, Vercel v0などを試してみよう。まずは使ってみることが大事！
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-[#F97316] shadow-sm">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#F97316] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#F97316] mb-1">📝 不便メモを始める</h4>
                  <p className="text-sm text-gray-700">
                    日常の「不便」や「不満」をメモしておこう。それが起業のタネになるかも！
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-[#00529B] shadow-sm">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#00529B] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#00529B] mb-1">🗣️ 英語に触れる</h4>
                  <p className="text-sm text-gray-700">
                    英語の記事を読む、英語の動画を見る、留学生と話すなど、少しずつ英語環境に身を置こう
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-[#A70028] shadow-sm">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#A70028] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#A70028] mb-1">💡 小さな挑戦</h4>
                  <p className="text-sm text-gray-700">
                    完璧を目指さず、まずは小さく始めよう。失敗しても大丈夫、それが最高の学びになる
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 bg-gradient-to-r from-[#A70028] to-[#C41E3A] p-4 rounded-lg text-white text-center"
      >
        <p className="text-lg font-bold">上智大学の皆さんなら、きっと世界を変えられる！</p>
        <p className="text-sm">今日が、あなたの「未来を創る第一歩」になりますように</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Button className="bg-white text-[#A70028] hover:bg-gray-100">
            <ExternalLink className="h-4 w-4 mr-2" />
            <span>連絡先</span>
          </Button>
          <Button className="bg-white text-[#A70028] hover:bg-gray-100">
            <ArrowRight className="h-4 w-4 mr-2" />
            <span>資料ダウンロード</span>
          </Button>
        </div>
      </motion.div>
    </SlideLayout>
  )
}
