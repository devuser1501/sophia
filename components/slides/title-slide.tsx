"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { BaseSlideProps } from "@/types/slide-types"

export const TitleSlide = ({ colors }: BaseSlideProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2fbfa] to-[#ffffff] opacity-70 z-0"></div>

      {/* 背景の抽象的な要素 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e0f7f4] rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fff5f5] rounded-full filter blur-3xl opacity-20"></div>

      {/* 世界地図の薄い背景 */}
      <div className="absolute inset-0 opacity-5 z-0 flex items-center justify-center">
        <div className="w-full h-full max-w-3xl max-h-3xl">
          <Image
            src="/placeholder.svg?height=800&width=800"
            alt="World Map Background"
            width={800}
            height={800}
            className="object-contain"
          />
        </div>
      </div>

      <div className="z-10 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c4a7] to-[#00a896]">
              世界は君のすぐ隣に
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
            <span className="text-[#14B8A6]">AI</span>と<span className="text-[#14B8A6]">英語</span>で未来の"当たり前"を<span className="text-[#F97316]">創る</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg">
            <p className="text-xl mb-2">上智大学 特別講義</p>
            <p className="text-lg text-[#00c4a7] font-medium mb-4">2025年5月21日</p>
            <div className="flex items-center justify-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-[#f2fbfa] flex items-center justify-center">
                <span className="text-[#14B8A6] text-xl font-bold">AI</span>
              </div>
              <span className="text-lg">×</span>
              <div className="h-12 w-12 rounded-full bg-[#fff5f5] flex items-center justify-center">
                <span className="text-[#F97316] text-xl font-bold">起業</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-4 right-4 text-sm text-[#6c757d] flex items-center"
      >
        <span>紀野知成</span>
        <span className="mx-2">|</span>
        <span>アットハース株式会社 CEO</span>
      </motion.div>

      {/* QRコード */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-4 left-4"
      >
        <Image
          src="/images/qr-code.png"
          alt="QR Code"
          width={80}
          height={80}
          className="rounded"
        />
      </motion.div>
    </div>
  )
}

export const runtime = "edge"
