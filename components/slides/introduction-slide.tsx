"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, School, Briefcase, MapPin, Heart } from "lucide-react"
import type { BaseSlideProps } from "@/types/slide-types"
import { SlideLayout } from "../layout/slide-layout"

interface IntroductionSlideProps extends BaseSlideProps {
  openModal: () => void
}

export const IntroductionSlide = ({ colors, openModal }: IntroductionSlideProps) => {
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
    <SlideLayout colors={colors} title="上智の先輩、紀野です。" subtitle="私の原動力は…">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 左側：プロフィール */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col space-y-4">
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-4 flex items-center">
            <div className="w-24 h-24 mr-4 relative">
              <Image
                src="/images/kino-profile.png"
                alt="紀野知成プロフィール"
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl">紀野 知成</h3>
              <p className="text-base text-gray-600">アットハース株式会社 CEO</p>
              <p className="text-base text-gray-600">上智大学 比較文化学部（現 国際教養学部）卒</p>
              <p className="text-base text-gray-600">元 三菱商事</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-5">
            <h3 className="font-bold text-[#00529B] mb-4 flex items-center text-lg">
              <School className="h-5 w-5 mr-2" />
              経歴
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-[#00529B] flex items-center justify-center text-xs mr-3 mt-0.5">
                  <MapPin className="h-3 w-3" />
                </span>
                <div>
                  <p className="font-medium text-base">上智大学 比較文化学部</p>
                  <p className="text-base text-gray-600">多言語話者（日本語/英語/フランス語）</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-[#00529B] flex items-center justify-center text-xs mr-3 mt-0.5">
                  <Briefcase className="h-3 w-3" />
                </span>
                <div>
                  <p className="font-medium text-base">三菱商事</p>
                  <p className="text-base text-gray-600">エネルギー取引・原子力事業</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-[#00529B] flex items-center justify-center text-xs mr-3 mt-0.5">
                  <Globe className="h-3 w-3" />
                </span>
                <div>
                  <p className="font-medium text-base">国際経験</p>
                  <p className="text-base text-gray-600">北米留学、フランス就業、Tech Crunch Berlin登壇</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-[#00529B] to-[#0066BE] rounded-xl shadow-md p-4 text-white self-start"
          >
            <h3 className="font-bold mb-3 text-lg">ミッション</h3>
            <p className="text-xl font-medium mb-4">
              国外に出るリスクテイカーが感じる孤独、不便、悩みを解消して応援する！
            </p>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-medium mb-1 text-base">現在：AI×多言語で課題解決</p>
              <p className="text-base mb-3">アットハース株式会社（2015年〜）</p>
              <Button onClick={openModal} className="w-full bg-white text-[#00529B] hover:bg-blue-50 text-base">
                <Globe className="h-4 w-4 mr-2" />
                アットハースの詳細を見る
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* 右側：原体験 */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col space-y-4">
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-5">
            <h3 className="font-bold text-[#A70028] mb-4 flex items-center text-lg">
              <Heart className="h-5 w-5 mr-2" />
              原体験
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🏫</div>
                <p className="text-base font-medium">養護学校</p>
                <p className="text-sm text-gray-600">多様性への気づき</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🌏</div>
                <p className="text-base font-medium">米国留学</p>
                <p className="text-sm text-gray-600">異文化体験</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">😔</div>
                <p className="text-base font-medium">英語の悔しさ</p>
                <p className="text-sm text-gray-600">コミュニケーション壁</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">💰</div>
                <p className="text-base font-medium">経済的苦労</p>
                <p className="text-sm text-gray-600">節約の知恵</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}

export const runtime = "edge"
