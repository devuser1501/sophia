"use client"

import { motion } from "framer-motion"
import { Search, BarChart3, FlaskConical, Dumbbell, Briefcase } from "lucide-react"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

export const EntrepreneurMindsetSlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="失敗こそ最高の学び (Grit!)">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#00529B] flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-[#14B8A6]" />
            起業家マインドの要素
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-[#00529B] text-white flex items-center justify-center mr-3">
                  <Search className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#00529B]">課題発見力</h4>
              </div>
              <p className="text-sm text-gray-700">身の回りの不便や課題に敏感になり、解決すべき問題を見つける力</p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-[#14B8A6] text-white flex items-center justify-center mr-3">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#14B8A6]">リサーチ力</h4>
              </div>
              <p className="text-sm text-gray-700">市場や競合を調査し、実現可能なアイデアに磨き上げる力</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-[#F97316] text-white flex items-center justify-center mr-3">
                  <FlaskConical className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#F97316]">仮説検証力</h4>
              </div>
              <p className="text-sm text-gray-700">アイデアを小さく試し、フィードバックを得て改善する力</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-[#A70028] text-white flex items-center justify-center mr-3">
                  <Dumbbell className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#A70028]">Grit（やり抜く力）</h4>
              </div>
              <p className="text-sm text-gray-700">困難に直面しても諦めず、目標に向かって継続する力</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#A70028] flex items-center">
            <Briefcase className="h-5 w-5 mr-2" />
            私の失敗談と学び
          </h3>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#A70028] shadow-sm">
              <h4 className="font-bold text-[#A70028] mb-2">資金難の危機</h4>
              <p className="text-sm text-gray-700">
                創業2年目、資金が底をつき、給料も払えない状況に。しかし、この危機がビジネスモデルの見直しと効率化につながった。
              </p>
              <div className="mt-2 flex items-center">
                <span className="text-xs bg-red-100 text-[#A70028] px-2 py-1 rounded">学び：本質を見極める</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-[#A70028] shadow-sm">
              <h4 className="font-bold text-[#A70028] mb-2">組織問題</h4>
              <p className="text-sm text-gray-700">
                急成長期に採用を急ぎすぎて、ミスマッチが発生。チーム文化の構築の重要性を痛感した。
              </p>
              <div className="mt-2 flex items-center">
                <span className="text-xs bg-red-100 text-[#A70028] px-2 py-1 rounded">学び：人が全て</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-700 mb-2 text-center">会社員でも必須のスキル</h4>
              <p className="text-sm text-center">
                起業家マインドは、会社員として働く場合でも、自分のキャリアを主体的に構築するために不可欠
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 bg-[#14B8A6] text-white text-center py-3 px-4 rounded-lg"
      >
        <p className="text-xl font-bold">失敗を恐れず、行動し、学び続けよう</p>
      </motion.div>
    </SlideLayout>
  )
}

export const runtime = "edge"
