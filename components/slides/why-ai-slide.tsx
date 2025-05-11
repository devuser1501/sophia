"use client"

import { motion } from "framer-motion"
import { Clock, Zap, Brain, Heart } from "lucide-react"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

export const WhyAISlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="AIに使われるな、使いこなせ！">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-2 gap-6"
      >
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Zap className="h-6 w-6 text-[#00529B]" />
            </div>
            <h3 className="text-xl font-bold text-[#00529B]">#圧倒的効率化</h3>
          </div>
          <p className="text-lg">単純作業の自動化で、本当に価値のある仕事に集中できる</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-3">
              <Brain className="h-6 w-6 text-[#14B8A6]" />
            </div>
            <h3 className="text-xl font-bold text-[#14B8A6]">#可能性拡張</h3>
          </div>
          <p className="text-lg">これまで不可能だったことが可能に。アイデアの幅が広がる</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <Clock className="h-6 w-6 text-[#F97316]" />
            </div>
            <h3 className="text-xl font-bold text-[#F97316]">#時間創出</h3>
          </div>
          <p className="text-lg">作業時間の短縮で、学びや人間関係構築に時間を使える</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3">
              <Heart className="h-6 w-6 text-[#A70028]" />
            </div>
            <h3 className="text-xl font-bold text-[#A70028]">#人間の価値</h3>
          </div>
          <p className="text-lg">創造性・問いかける力・共感する力が、より重要になる</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 bg-[#14B8A6] text-white text-center py-3 px-4 rounded-lg"
      >
        <p className="text-xl font-bold">AIは道具。使いこなすのは君自身だ。</p>
      </motion.div>
    </SlideLayout>
  )
}

export const runtime = "edge"
