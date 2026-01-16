'use client'

import { motion } from 'framer-motion'
import { Download, Apple, Smartphone, Monitor } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'

/**
 * Download Section - Platform-specific download cards
 * 
 * Design decisions:
 * - Card-based layout for clear platform separation
 * - Disabled state for unavailable platforms
 * - Platform icons for instant recognition
 * - Hover effects for interactive feel
 */
export default function DownloadSection() {
  const platforms = [
    {
      name: 'Android',
      icon: Smartphone,
      description: 'Download APK or get it from Play Store',
      available: true,
      comingSoon: false,
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1DzKvB_9G06ZGS6Jz5zfsxWo8Sio_vNYy', 
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      iconColor: 'text-green-400',
      size : 45.4
    },
    {
      name: 'iOS',
      icon: Apple,
      description: 'Available on App Store and TestFlight',
      available: false,
      comingSoon: true,
      downloadUrl: '#',
      bgGradient: 'from-gray-500/10 to-slate-500/10',
      iconColor: 'text-gray-400',
      size : 0
    },
    {
      name: 'Windows',
      icon: Monitor,
      description: 'Download installer for Windows PC',
      available: true,
      comingSoon: false,
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1WDfdUgKC-HTkmGs-H1dAcjnvJH65fAUC',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-400',
      size : 10.9
    },
  ]
  
  return (
    <section id="download" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/5 to-transparent" />
      
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download <span className="text-primary-400">NMODM</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your platform and start playing. No account required.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <Card key={platform.name} hover={platform.available} delay={index * 0.1}>
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.bgGradient} rounded-2xl opacity-50`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <platform.icon className={`w-12 h-12 ${platform.iconColor}`} />
                  {platform.comingSoon && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                <p className="text-gray-400 mb-6 min-h-[3rem]">{platform.description}</p>
                
                <Button
                  variant={platform.available ? 'primary' : 'outline'}
                  icon={Download}
                  href={platform.available ? platform.downloadUrl : undefined}
                  disabled={!platform.available}
                  className="w-full"
                >
                  {platform.available ? 'Download' : 'Coming Soon'}
                </Button>
                
                {platform.available && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 text-xs text-gray-500 text-center"
                  >
                    Version 1.2.0 • {platform.size} MB
                  </motion.div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 glass rounded-full">
            <InfoItem icon="✓" text="No Ads" />
            <InfoItem icon="✓" text="Free Forever" />
            <InfoItem icon="✓" text="Offline Play" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-green-400">{icon}</span>
      <span className="text-sm text-gray-300">{text}</span>
    </div>
  )
}