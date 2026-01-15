'use client'

import { motion } from 'framer-motion'
import { Download, Zap, Shield, Wifi } from 'lucide-react'
import Button from '../ui/Button'

/**
 * Final CTA Section - Conversion-focused
 * 
 * Design decisions:
 * - Prominent download button
 * - Reiterate key benefits
 * - Create urgency without being pushy
 * - Strong visual hierarchy
 */
export default function CTASection() {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 via-accent-950/20 to-primary-950/20" />
        <div className="gradient-radial absolute inset-0 opacity-30" />
      </div>
      
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Test Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              Strategic Mind?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Download NMODM now and experience pure strategic gameplay.
            No gimmicks, no ads—just you, your opponent, and the numbers.
          </p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <Button size="lg" icon={Download} onClick={scrollToDownload}>
              Download NMODM Now
            </Button>
          </motion.div>
          
          {/* Key benefits pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <BenefitPill icon={Shield} text="No Ads" />
            <BenefitPill icon={Zap} text="Pure Strategy" />
            <BenefitPill icon={Wifi} text="Offline Playable" />
          </motion.div>
          
          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <p className="text-gray-500 text-sm mb-6">Trusted by strategy game enthusiasts</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <StatBadge value="2" label="Players" />
              <StatBadge value="100%" label="Skill-Based" />
              <StatBadge value="0" label="Pay-to-Win" />
              <StatBadge value="∞" label="Replayability" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function BenefitPill({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full"
    >
      <Icon className="w-5 h-5 text-primary-400" />
      <span className="font-semibold">{text}</span>
    </motion.div>
  )
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary-400 mb-1">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}