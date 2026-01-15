'use client'

import { motion } from 'framer-motion'
import {
  Gamepad2,
  Zap,
  Brain,
  Shield,
  Wifi,
  Palette,
  BarChart3,
  RefreshCw,
} from 'lucide-react'
import Card from '../ui/Card'

/**
 * Features Section - Highlight key game features
 * 
 * Design decisions:
 * - Grid layout for scannable features
 * - Icons for visual interest
 * - Benefit-focused copy
 * - Staggered animations
 */
export default function FeaturesSection() {
  const features = [
    {
      icon: Gamepad2,
      title: 'Multiple Game Modes',
      description: 'Choose from Standard, Custom, or resume your Previous game',
    },
    {
      icon: Zap,
      title: 'Lightweight & Fast',
      description: 'Quick to download, instant to load, smooth to play',
    },
    {
      icon: Brain,
      title: 'Strategic Depth',
      description: 'Easy rules hide complex strategy and forward thinking',
    },
    {
      icon: Shield,
      title: 'No Ads, No Tracking',
      description: 'Pure gaming experience with complete privacy',
    },
    {
      icon: Wifi,
      title: 'Play Offline',
      description: 'No internet required, play anywhere, anytime',
    },
    {
      icon: Palette,
      title: 'Clean Visual Design',
      description: 'Beautiful number line with smooth animations',
    },
    {
      icon: BarChart3,
      title: 'Skill-Based',
      description: 'Deterministic gameplay where strategy always wins',
    },
    {
      icon: RefreshCw,
      title: 'Quick Matches',
      description: 'Games can be as short as 5 minutes or as long as you want',
    },
  ]
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="gradient-conic absolute inset-0" />
      </div>
      
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary-400">NMODM</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Carefully crafted for the perfect strategic gaming experience
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.05}
            />
          ))}
        </div>
        
        {/* Highlight banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl glass p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10" />
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Built for <span className="text-primary-400">Strategy Lovers</span>
              </h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                NMODM combines simple rules with deep strategic gameplay. 
                Every move matters, and the best strategist always wins.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge text="Zero RNG" />
                <Badge text="Pure Skill" />
                <Badge text="Infinite Replayability" />
                <Badge text="No Pay-to-Win" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description, delay }: {
  icon: any
  title: string
  description: string
  delay: number
}) {
  return (
    <Card hover delay={delay}>
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-400" />
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </Card>
  )
}

function Badge({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 rounded-full glass text-primary-300 font-semibold">
      {text}
    </span>
  )
}