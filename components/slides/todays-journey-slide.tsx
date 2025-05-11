"use client"

import { motion } from "framer-motion"
import { CheckCircle, Lightbulb, Users, PresentationIcon } from "lucide-react"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"
import Image from "next/image"

export const TodaysJourneySlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="今日の冒険" subtitle="AIと英語で未来を掴む！">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* 左側：今日のゴール */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-[#14B8A6]" />
            今日のゴール
          </h3>

          <div className="space-y-4">
            <div className="flex items-start p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-[#00529B] text-white flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-xl">1</span>
              </div>
              <div>
                <h4 className="font-bold text-[#00529B] text-lg">AI面白い！</h4>
                <p className="text-base">AIを「壁打ち相手」にしてアイデアを具体化する第一歩を踏み出す</p>
              </div>
            </div>

            <div className="flex items-start p-3 bg-teal-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-[#14B8A6] text-white flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-xl">2</span>
              </div>
              <div>
                <h4 className="font-bold text-[#14B8A6] text-lg">課題解決体験</h4>
                <p className="text-base">「問い続ける力」を実践し、起業家マインドを体験する</p>
              </div>
            </div>

            <div className="flex items-start p-3 bg-orange-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-[#F97316] text-white flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-xl">3</span>
              </div>
              <div>
                <h4 className="font-bold text-[#F97316] text-lg">自分もできるかも！</h4>
                <p className="text-base">グローバルな視点とAIを活用した未来の可能性を感じる</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 右側：今日の進め方 */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <PresentationIcon className="h-5 w-5 mr-2 text-[#14B8A6]" />
            今日の進め方
          </h3>

          <div className="relative">
            {/* 接続線 */}
            <div className="absolute left-[45px] top-12 w-1 h-[calc(100%-24px)] bg-gray-200 z-0"></div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#00529B] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div className="bg-blue-50 p-4 rounded-lg flex-1">
                  <h4 className="font-bold text-[#00529B] mb-1 text-lg">①デモ＆ツール</h4>
                  <p className="text-base">AIを使ったアイデア発想と深掘りを体験</p>
                  <p className="text-sm text-gray-500 mt-1">20分</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div className="bg-teal-50 p-4 rounded-lg flex-1">
                  <h4 className="font-bold text-[#14B8A6] mb-1 text-lg">②WS(AI比較)</h4>
                  <p className="text-base">「なぜ？」をぶつけ合い、アイデアを磨く</p>
                  <p className="text-sm text-gray-500 mt-1">30分</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#F97316] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <PresentationIcon className="h-6 w-6" />
                </div>
                <div className="bg-orange-50 p-4 rounded-lg flex-1">
                  <h4 className="font-bold text-[#F97316] mb-1 text-lg">③未来へのヒント</h4>
                  <p className="text-base">アイデアを共有し、フィードバックをもらう</p>
                  <p className="text-sm text-gray-500 mt-1">20分</p>
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
        <p className="text-lg font-bold">失敗OK！楽しもう！行動が未来を変える！</p>
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
