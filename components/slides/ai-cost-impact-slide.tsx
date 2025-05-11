"use client"

import { motion } from "framer-motion"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

export const AICostImpactSlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="AI 導入でコストはこう変わった">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1"
      >
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#00529B] flex items-center justify-center text-xs mr-3 mt-0.5">
                1
              </span>
              <div>
                <p className="text-base"><span className="font-bold">開発:</span> 外注¥1,000k → V0+Replit <span className="font-bold text-green-600">¥20k (-98%)</span></p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#00529B] flex items-center justify-center text-xs mr-3 mt-0.5">
                2
              </span>
              <div>
                <p className="text-base"><span className="font-bold">広告:</span> 広告¥400k → 自動ABテスト <span className="font-bold text-green-600">¥25k</span></p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#00529B] flex items-center justify-center text-xs mr-3 mt-0.5">
                3
              </span>
              <div>
                <p className="text-base"><span className="font-bold">議事録:</span> 秘書¥300k → tl;dv <span className="font-bold text-green-600">¥0</span></p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#00529B] flex items-center justify-center text-xs mr-3 mt-0.5">
                4
              </span>
              <div>
                <p className="text-base"><span className="font-bold">学習:</span> 日本語解説¥10k → 英語Docs <span className="font-bold text-green-600">¥0</span></p>
              </div>
            </li>
          </ul>
          
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <p className="text-base">
              <span className="font-bold">落とし穴:</span> 日本語二次情報は①遅い ②翻訳バイアス ③高コスト。<br/>
              ⇒ <em className="text-[#00529B] font-medium">英語原典＋LLM要約</em> が最速最安。
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
} 