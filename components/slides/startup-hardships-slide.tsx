"use client"

import { motion } from "framer-motion"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

export const StartupHardshipsSlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="創業後に直面したリアルな修羅場">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1"
      >
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">年・時期</th>
                  <th className="border border-gray-300 p-2 text-left">事件</th>
                  <th className="border border-gray-300 p-2 text-left">概要</th>
                  <th className="border border-gray-300 p-2 text-left">最大ダメージ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">2018→20</td>
                  <td className="border border-gray-300 p-2">MO乗っ取り未遂</td>
                  <td className="border border-gray-300 p-2">株・SO要求＋引き抜き</td>
                  <td className="border border-gray-300 p-2">▲¥3.5M</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2020</td>
                  <td className="border border-gray-300 p-2">過剰請求</td>
                  <td className="border border-gray-300 p-2">実装50%で100万/月×6</td>
                  <td className="border border-gray-300 p-2">現金¥300k割れ</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2021〜</td>
                  <td className="border border-gray-300 p-2">コピーキャット</td>
                  <td className="border border-gray-300 p-2">コード・顧客模倣</td>
                  <td className="border border-gray-300 p-2">信頼低下</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2019</td>
                  <td className="border border-gray-300 p-2">M&A強要</td>
                  <td className="border border-gray-300 p-2">NDA後に模倣サービス</td>
                  <td className="border border-gray-300 p-2">情報流出</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">通算</td>
                  <td className="border border-gray-300 p-2">採用の地雷</td>
                  <td className="border border-gray-300 p-2">経歴・犯罪歴詐称</td>
                  <td className="border border-gray-300 p-2">採用コスト損失</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
} 