"use client"

import { motion } from "framer-motion"
import { MessageCircle, Lightbulb, Brain } from "lucide-react"
import Image from "next/image"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

export const AIDemoSlide = ({ colors }: BaseSlideProps) => {
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

  const aiTools = [
    {img: "chatgpt.png", name: "ChatGPT", use: "壁打ち", reason: "検索×提案バランス◎"},
    {img: "imagefx.png", name: "ImageFX", use: "実写画像", reason: "手軽 & 高品質"},
    {img: "midjourney.png", name: "Midjourney", use: "漫画画像", reason: "創造性高"},
    {img: "v0.png", name: "v0", use: "モックUI", reason: "高速生成"},
    {img: "claude.png", name: "Claude", use: "ロジック実装", reason: "長文解析◎"},
    {img: "grok.png", name: "Grok", use: "最新トレンド", reason: "リアルタイム"},
    {img: "gemini.png", name: "Gemini", use: "大量リサーチ", reason: "情報量最大"}
  ]

  return (
    <SlideLayout colors={colors} title="AIは最強の相棒！" subtitle="＆私のツールボックス">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* 左側：AIツール紹介 */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <Brain className="h-5 w-5 mr-2 text-[#14B8A6]" />
            ツール用途
          </h3>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3">
              {aiTools.slice(0, 6).map((tool, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-center space-x-2">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                    <Image
                      src={`/images/tools/${tool.img}`}
                      alt={tool.name}
                      width={30}
                      height={30}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{tool.name}</p>
                    <p className="text-xs text-gray-500">{tool.use}</p>
                    <p className="text-xs text-gray-700">{tool.reason}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-lg text-[#00529B] mb-2">私のお気に入り用途</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-[#00529B] text-white flex items-center justify-center text-xs mr-2">
                    ✓
                  </span>
                  <span className="text-base">Gemini: アイデア出し・ブレインストーミング</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-[#00529B] text-white flex items-center justify-center text-xs mr-2">
                    ✓
                  </span>
                  <span className="text-base">v0: UIデザイン・プロトタイピング</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-[#00529B] text-white flex items-center justify-center text-xs mr-2">
                    ✓
                  </span>
                  <span className="text-base">Claude: 長文解析・レポート作成</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 右側：AIとの対話のコツ */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 text-[#14B8A6]" />
            AIとの対話のコツ
          </h3>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#00529B] mb-2 flex items-center text-lg">
                <Lightbulb className="h-4 w-4 mr-1 text-[#F97316]" />
                良い質問で賢くなる
              </h4>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2 flex-shrink-0">
                    ✗
                  </div>
                  <div>
                    <p className="font-medium text-red-600">悪い例</p>
                    <p className="text-base bg-white p-2 rounded border border-gray-200">"ビジネスアイデアを教えて"</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-green-600">良い例</p>
                    <p className="text-base bg-white p-2 rounded border border-gray-200">
                      "大学生の通学時間を有効活用できるサービスのアイデアを3つ考えて、それぞれのメリット・デメリットを分析してください"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#00529B] mb-2 text-lg">AIとの対話のコツ</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-[#14B8A6] text-white flex items-center justify-center text-xs mr-2">
                    1
                  </span>
                  <span className="text-base">具体的な指示を与える</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-[#14B8A6] text-white flex items-center justify-center text-xs mr-2">
                    2
                  </span>
                  <span className="text-base">対話を重ねて深掘りする</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-[#14B8A6] text-white flex items-center justify-center text-xs mr-2">
                    3
                  </span>
                  <span className="text-base">出力結果を批判的に評価する</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}

export const runtime = "edge"
