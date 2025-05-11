"use client"

import { motion } from "framer-motion"
import { Globe, MessageCircle, Users, ExternalLink } from "lucide-react"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

export const WhyEnglishSlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="英語は、世界中に「居場所」を作るパスポート">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* 左側：市場規模の比較 */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <Globe className="h-5 w-5 mr-2 text-[#14B8A6]" />
            市場規模の比較
          </h3>

          <div className="relative h-[300px] bg-gray-50 rounded-lg p-4">
            {/* 世界地図の背景 */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
                <path
                  d="M473,336c-17-1-34,0-51-3c-14-2-28-8-42-10c-5-1-12,0-16-3c-4-3-5-8-8-12c-5-7-13-11-20-16c-11-7-22-15-30-25c-10-12-9-29-9-44c0-16-1-32,0-48c1-14,4-27,4-41c0-16-4-31-4-47c0-17,4-34,4-51c0-19-6-37-6-55c0-19,6-37,6-56c0-18-5-35-5-53c0-17,4-33,4-50c0-15-3-30-3-45c0-14,3-28,3-42c0-13-3-25-3-38c0-12,3-24,3-36c0-11-2-22-2-33c0-10,2-20,2-30c0-9-2-18-2-27c0-8,1-16,1-24c0-7-1-14-1-21c0-6,1-12,1-18c0-5-1-10-1-15c0-4,0-8,0-12"
                  stroke="#000"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            {/* 日本市場と世界市場の比較 */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-end space-x-16">
              {/* 日本市場 */}
              <div className="flex flex-col items-center">
                <div className="text-center mb-2">
                  <span className="text-4xl">🇯🇵</span>
                </div>
                <div className="w-20 bg-[#A70028] rounded-t-lg" style={{ height: "40px" }}></div>
                <div className="mt-2 text-center">
                  <p className="font-bold text-[#A70028]">日本市場</p>
                  <p className="text-xs text-gray-500">現在1.2億人</p>
                  <p className="text-xs text-red-500">2050年に0.5億人</p>
                </div>
              </div>

              {/* 世界市場 */}
              <div className="flex flex-col items-center">
                <div className="text-center mb-2">
                  <span className="text-4xl">🌎</span>
                </div>
                <div className="w-20 bg-[#14B8A6] rounded-t-lg" style={{ height: "240px" }}></div>
                <div className="mt-2 text-center">
                  <p className="font-bold text-[#14B8A6]">グローバル市場</p>
                  <p className="text-xs text-gray-500">現在80億人</p>
                  <p className="text-xs text-[#14B8A6]">2050年に97億人</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 p-3 rounded-lg">
            <p className="text-center font-medium text-[#00529B]">国内市場の縮小は避けられない現実</p>
          </div>
        </motion.div>

        {/* 右側：英語力の重要性 */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 text-[#14B8A6]" />
            英語力の重要性
          </h3>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-2 border-[#14B8A6] shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#14B8A6] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#14B8A6] mb-1">海外市場への挑戦</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>国内市場の縮小は避けられない現実</li>
                    <li>AI市場もグローバル展開が不可欠</li>
                    <li>英語圏の市場規模は日本の10倍以上</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-[#F97316] shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#F97316] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F97316] mb-1">国際的な協業とリモートワーク</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>英語は国際チームの共通言語</li>
                    <li>場所にとらわれず世界中で働ける</li>
                    <li>グローバル人材ネットワークの構築</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <h4 className="font-bold text-[#A70028] mb-2 text-center flex items-center justify-center">
                <ExternalLink className="h-4 w-4 mr-1" />
                AI翻訳の限界：人間の英語力の重要性
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white p-2 rounded text-center">
                  <p className="text-sm font-medium">微妙なニュアンス</p>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <p className="text-sm font-medium">文化的背景</p>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <p className="text-sm font-medium">信頼関係構築</p>
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
        className="mt-6 bg-[#14B8A6] p-4 rounded-lg text-white text-center"
      >
        <p className="text-lg font-bold">英語 × AI = 無限の可能性</p>
      </motion.div>
    </SlideLayout>
  )
}

export const runtime = "edge"
