import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

/**
 * Card Component with glass morphism effect
 * 
 * Design decisions:
 * - Glass morphism for modern aesthetic
 * - Optional hover effect for interactive cards
 * - Stagger animation support via delay prop
 * - Subtle border and backdrop blur
 */
export default function Card({ children, className = '', hover = false, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      className={`relative overflow-hidden glass rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}