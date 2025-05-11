"use client"

import { motion } from "framer-motion"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

export const AIToolMatrixSlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="AI ツール使い分け（4 用途）">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1"
      >
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">カテゴリ</th>
                  <th className="border border-gray-300 p-2 text-left">代表ツール</th>
                  <th className="border border-gray-300 p-2 text-left">月額*</th>
                  <th className="border border-gray-300 p-2 text-left">主な用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">総合</td>
                  <td className="border border-gray-300 p-2">ChatGPT / Claude / Gemini</td>
                  <td className="border border-gray-300 p-2">¥3k-4k</td>
                  <td className="border border-gray-300 p-2">壁打ち・翻訳・要約</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">開発</td>
                  <td className="border border-gray-300 p-2">Vercel v0 / Replit / Bolt</td>
                  <td className="border border-gray-300 p-2">¥0-3k</td>
                  <td className="border border-gray-300 p-2">UIモック・自動生成</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">リサーチ</td>
                  <td className="border border-gray-300 p-2">Perplexity / Grok / Felo</td>
                  <td className="border border-gray-300 p-2">¥0-3k</td>
                  <td className="border border-gray-300 p-2">最新検索・出典付き</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">画像・制作</td>
                  <td className="border border-gray-300 p-2">Midjourney / ImageFX / DALL·E</td>
                  <td className="border border-gray-300 p-2">¥1k-3k</td>
                  <td className="border border-gray-300 p-2">KV・サムネ素材</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2 text-gray-500">*為替 130 円/US$ 想定</p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
} 