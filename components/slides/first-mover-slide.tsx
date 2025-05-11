"use client"

import { motion } from "framer-motion"
import { TrendingUp, Flag, Award } from "lucide-react"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

export const FirstMoverSlide = ({ colors }: BaseSlideProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SlideLayout colors={colors} title="AI時代、動くなら" subtitle="「今」！">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* 左側：先行者利益グラフ */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-[#14B8A6]" />
            先行者利益の可視化
          </h3>

          <div className="h-[300px] relative bg-gray-50 rounded-lg p-4">
            {/* グラフの背景グリッド */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="border-t border-l border-gray-200"></div>
              ))}
            </div>

            {/* X軸とY軸のラベル */}
            <div className="absolute bottom-0 left-0 w-full h-8 flex justify-between px-4">
              <span className="text-sm text-gray-500">スタート</span>
              <span className="text-sm text-gray-500">時間</span>
            </div>
            <div className="absolute top-0 left-0 h-full w-8 flex flex-col justify-between py-4">
              <span className="text-sm text-gray-500">高</span>
              <span className="text-sm text-gray-500 transform -rotate-90">市場価値</span>
              <span className="text-sm text-gray-500">低</span>
            </div>

            {/* 先行者の曲線 */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
              <path
                d="M 50,250 C 100,200 150,100 350,50"
                stroke="#14B8A6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <text x="300" y="40" fill="#14B8A6" fontSize="14" fontWeight="bold">
                先行者 🚀
              </text>
            </svg>

            {/* 後発組の曲線 */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
              <path
                d="M 100,250 C 150,240 200,220 350,150"
                stroke="#A70028"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                strokeLinecap="round"
              />
              <text x="300" y="160" fill="#A70028" fontSize="14" fontWeight="bold">
                後発組 🐢
              </text>
            </svg>
          </div>

          <div className="mt-4 bg-blue-50 p-3 rounded-lg">
            <p className="text-center font-medium text-[#00529B] text-base">AI分野は今まさに「先行者利益」が得られる黎明期</p>
          </div>
        </motion.div>

        {/* 右側：先行者のメリット */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <Award className="h-5 w-5 mr-2 text-[#F97316]" />
            先行者のメリット
          </h3>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-2 border-[#14B8A6] shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#14B8A6] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <Flag className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#14B8A6] mb-1 text-lg">未開拓の領域を切り拓く</h4>
                  <ul className="list-disc pl-5 text-base text-gray-700 space-y-1">
                    <li>最新技術のトレンドをリアルタイムで体感</li>
                    <li>競争が激化する前に専門性を確立できる</li>
                    <li>業界標準を設定するチャンス</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border\
