"use client"

import { motion } from "framer-motion"
import { HelpCircle, Search, Lightbulb, ArrowRight, Target, CheckCircle, Clock, QrCode } from "lucide-react"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"
import Image from "next/image"

export const GroupDiscussionSlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="WS：AI使い比べ！" subtitle="課題解決チャレンジ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* 左側：テーマと思考フレームワーク */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#F97316] flex items-center">
            <Lightbulb className="h-5 w-5 mr-2" />
            テーマ：身近な「不便・不満」をAIで解決！
          </h3>

          <div className="bg-orange-50 p-4 rounded-lg mb-4">
            <h4 className="font-bold text-[#F97316] mb-3 text-lg text-center">思考フレームワーク</h4>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#F97316] flex items-center justify-center mr-3">
                  <Target className="h-6 w-6 text-[#F97316]" />
                </div>
                <div className="flex-1 bg-white p-3 rounded-lg border border-[#F97316]">
                  <p className="font-bold text-[#F97316]">Goal</p>
                  <p className="text-sm">理想の状態は？</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-[#F97316] self-center" />
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#00529B] flex items-center justify-center mr-3">
                  <CheckCircle className="h-6 w-6 text-[#00529B]" />
                </div>
                <div className="flex-1 bg-white p-3 rounded-lg border border-[#00529B]">
                  <p className="font-bold text-[#00529B]">Current</p>
                  <p className="text-sm">現状はどうなっている？</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-[#F97316] self-center" />
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#A70028] flex items-center justify-center mr-3">
                  <HelpCircle className="h-6 w-6 text-[#A70028]" />
                </div>
                <div className="flex-1 bg-white p-3 rounded-lg border border-[#A70028]">
                  <p className="font-bold text-[#A70028]">Problem</p>
                  <p className="text-sm">なぜ理想と現実に差がある？</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-[#F97316] self-center" />
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#14B8A6] flex items-center justify-center mr-3">
                  <Search className="h-6 w-6 text-[#14B8A6]" />
                </div>
                <div className="flex-1 bg-white p-3 rounded-lg border border-[#14B8A6]">
                  <p className="font-bold text-[#14B8A6]">Question for AI</p>
                  <p className="text-sm">AIに何を聞く？</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 右側：進め方 */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#F97316] flex items-center">
            <HelpCircle className="h-5 w-5 mr-2" />
            進め方：ChatGPT vs Gemini
          </h3>

          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#F97316] mb-2 text-lg">①Goal&Current（5分）</h4>
              <p className="text-base text-gray-700">理想の状態と現状を明確にする</p>
            </div>

            <div className="bg-orange-100 p-4 rounded-lg">
              <h4 className="font-bold text-[#F97316] mb-2 text-lg">②Problem（10分）</h4>
              <p className="text-base text-gray-700">「なぜ？」を5回繰り返して、問題の本質を探る</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#F97316] mb-2 text-lg">③Question&Compare（10分）</h4>
              <p className="text-base text-gray-700">同じ質問をChatGPTとGeminiに投げ、回答を比較する</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#F97316] mb-2 text-lg">④Insight（5分）</h4>
              <p className="text-base text-gray-700">得られた気づきをまとめる</p>
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
        <p className="text-lg font-bold">⚡所要 30 分・グループで協力して解決しよう！</p>
      </motion.div>

      <div className="mt-4 flex justify-center">
        <Image
          src="/images/qr-code.png"
          alt="QRコード"
          width={120}
          height={120}
          className="rounded-md"
        />
      </div>
    </SlideLayout>
  )
}

export const runtime = "edge"
