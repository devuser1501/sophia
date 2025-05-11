"use client"

import { motion } from "framer-motion"
import { Globe, Zap, Users, Clock, Heart } from "lucide-react"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"
import { Badge } from "@/components/ui/badge"

export const AIEnglishSlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="AI × English = 理想の働き方への翼">
      <div className="flex gap-4 mb-6">
        <Badge className="bg-[#14B8A6] hover:bg-[#14B8A6] text-white px-4 py-2 text-base font-medium">市場 20×</Badge>
        <Badge className="bg-[#F97316] hover:bg-[#F97316] text-white px-4 py-2 text-base font-medium">速度 10×</Badge>
      </div>
    
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Zap className="h-6 w-6 text-[#00529B]" />
            </div>
            <h3 className="text-xl font-bold text-[#00529B]">#AI能力最大化</h3>
          </div>
          <p className="text-lg">英語でプロンプトを書くと、AIの能力を最大限に引き出せる</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-3">
              <Globe className="h-6 w-6 text-[#14B8A6]" />
            </div>
            <h3 className="text-xl font-bold text-[#14B8A6]">#グローバル課題解決</h3>
          </div>
          <p className="text-lg">世界中の課題に取り組み、より大きなインパクトを生み出せる</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <Users className="h-6 w-6 text-[#F97316]" />
            </div>
            <h3 className="text-xl font-bold text-[#F97316]">#世界中の才能と連携</h3>
          </div>
          <p className="text-lg">国境を越えた最高のチームを作り、共に成長できる</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-purple-600">#場所・時間に縛られない</h3>
          </div>
          <p className="text-lg">リモートワークで自由なライフスタイルを実現できる</p>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3">
              <Heart className="h-6 w-6 text-[#A70028]" />
            </div>
            <h3 className="text-xl font-bold text-[#A70028]">#価値創造＆社会貢献</h3>
          </div>
          <p className="text-lg">AIと英語を武器に、社会に価値を提供し、自分らしく生きる道を切り拓ける</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 bg-[#14B8A6] p-4 rounded-lg text-white text-center"
      >
        <p className="text-xl font-bold">AI×英語のスキルは、あなたの可能性を無限に広げる</p>
      </motion.div>
    </SlideLayout>
  )
}

export const runtime = "edge"
