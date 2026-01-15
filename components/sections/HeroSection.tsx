'use client'

import { motion } from 'framer-motion'
import { Download, PlayCircle, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

/**
 * Hero Section - First impression of the game
 * 
 * Design decisions:
 * - Large, bold typography for immediate impact
 * - Animated number grid background for game theme
 * - Clear CTA hierarchy (download > learn more)
 * - Smooth scroll indicator
 * - Gradient overlay for depth
 */
export default function HeroSection() {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const scrollToOverview = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-radial absolute inset-0" />
        <AnimatedNumberGrid />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Now Available</span>
          </motion.div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">
            NMODM
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 text-balance"
          >
            A turn-based strategy game of numbers and foresight.
            <br />
            <span className="text-primary-400">Pure skill. No luck. Just strategy.</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" icon={Download} onClick={scrollToDownload}>
              Download Now
            </Button>
            <Button size="lg" variant="outline" icon={PlayCircle} onClick={scrollToOverview}>
              View Game Overview
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20"
          >
            <StatItem label="Players" value="2" />
            <StatItem label="Strategy" value="100%" />
            <StatItem label="Ads" value="0" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToOverview}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  )
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

function AnimatedNumberGrid() {
  const numbers = Array.from({ length: 50 }, (_, i) => i)
  
  return (
    <div className="absolute inset-0 grid grid-cols-10 gap-4 p-8 opacity-10">
      {numbers.map((num) => (
        <motion.div
          key={num}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: num * 0.1,
          }}
          className="text-2xl font-mono text-primary-500 text-center"
        >
          {num}
        </motion.div>
      ))}
    </div>
  )
}