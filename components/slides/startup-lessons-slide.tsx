"use client"

import { motion } from "framer-motion"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

export const StartupLessonsSlide = ({ colors }: BaseSlideProps) => {
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
    <SlideLayout colors={colors} title="そこから得た 4 つの学び">
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
                <p className="font-bold text-base">#1 BGチェック必須:</p>
                <p className="text-base text-gray-600">リファラル＋犯罪・学歴照合を標準化</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#00529B] flex items-center justify-center text-xs mr-3 mt-0.5">
                2
              </span>
              <div>
                <p className="font-bold text-base">#2 "去る前提"契約:</p>
                <p className="text-base text-gray-600">株ゼロ・SO vesting・即解雇条項</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#00529B] flex items-center justify-center text-xs mr-3 mt-0.5">
                3
              </span>
              <div>
                <p className="font-bold text-base">#3 AI×Git管理:</p>
                <p className="text-base text-gray-600">週次PRレビューで工数と成果を可視化</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-[#00529B] flex items-center justify-center text-xs mr-3 mt-0.5">
                4
              </span>
              <div>
                <p className="font-bold text-base">#4 USP研磨:</p>
                <p className="text-base text-gray-600">DB・コミュニティ・ストーリーで模倣耐性</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
} 