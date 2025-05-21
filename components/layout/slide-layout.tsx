"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import type { BaseSlideProps } from "@/types/slide-types"

interface SlideLayoutProps extends BaseSlideProps {
  title: string
  subtitle?: string
  children: ReactNode
  showQRCode?: boolean
}

export const SlideLayout = ({ colors, title, subtitle, children, showQRCode = true }: SlideLayoutProps) => {
  return (
    <div className="h-full flex flex-col relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-3xl font-bold text-center">
          <span className="text-[#00529B]">{title}</span>
          {subtitle && <span className="text-[#14B8A6]"> {subtitle}</span>}
        </h2>
      </motion.div>

      <div className="flex-1">{children}</div>
      
      {/* 共通QRコード - 画面最下部中央に表示（showQRCodeがtrueの場合のみ表示） */}
      {showQRCode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full flex justify-center mb-4 mt-6"
        >
          <div className="bg-white p-2.5 rounded-lg shadow-md flex items-center space-x-3">
            <Image
              src="/images/qr-code.png"
              alt="QR Code"
              width={90}
              height={90}
              className="rounded-md"
              priority
            />
            <p className="text-sm text-gray-600 font-medium">Q&A</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export const runtime = "edge"
