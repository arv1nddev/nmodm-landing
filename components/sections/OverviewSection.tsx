'use client'

import { motion } from 'framer-motion'
import { Users, Target, Zap, Trophy } from 'lucide-react'
import Card from '../ui/Card'

/**
 * Overview Section - Visual explanation of gameplay
 * 
 * Design decisions:
 * - Visual number line demonstration
 * - Animated pawn movement
 * - Clear step-by-step flow
 * - Icon-driven feature cards
 */
export default function OverviewSection() {
  return (
    <section id="overview" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-950/5 to-transparent" />
      
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-accent-400">NMODM</span> Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A strategic number game that's easy to learn but challenging to master
          </p>
        </motion.div>
        
        {/* Visual Game Demo */}
        <div className="max-w-4xl mx-auto mb-20">
          <NumberLineDemo />
        </div>
        
        {/* Core concepts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <ConceptCard
            icon={Users}
            title="Two Players"
            description="Challenge a friend in turn-based gameplay"
            delay={0}
          />
          <ConceptCard
            icon={Target}
            title="Reach the Target"
            description="First to reach the exact target number wins"
            delay={0.1}
          />
          <ConceptCard
            icon={Zap}
            title="Strategic Moves"
            description="Add numbers within the allowed range"
            delay={0.2}
          />
          <ConceptCard
            icon={Trophy}
            title="Pure Skill"
            description="No randomness, only strategy matters"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}

function ConceptCard({ icon: Icon, title, description, delay }: {
  icon: any
  title: string
  description: string
  delay: number
}) {
  return (
    <Card hover delay={delay}>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary-400" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </Card>
  )
}

function NumberLineDemo() {
  const numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const currentPosition = 40
  const validMoves = [41, 42, 43, 44, 45, 46, 47, 48, 49]
  const target = 100
  
  return (
    <Card className="p-8">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-4 px-6 py-3 glass rounded-full mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-sm text-gray-300">Player 1's Turn</span>
          </div>
        </div>
        <p className="text-gray-400">
          Current: <span className="text-primary-400 font-bold">40</span> • 
          Target: <span className="text-accent-400 font-bold">100</span> • 
          Range: <span className="text-gray-300">1-9</span>
        </p>
      </div>
      
      {/* Number line */}
      <div className="relative overflow-x-auto pb-8">
        <div className="flex gap-2 min-w-max px-4">
          {numbers.map((num) => {
            const isCurrent = num === currentPosition
            const isTarget = num === target
            const isValid = validMoves.includes(num)
            
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: num / 200 }}
                className="relative"
              >
                <div
                  className={`
                    w-16 h-16 rounded-xl flex items-center justify-center font-bold text-lg
                    transition-all duration-300
                    ${isCurrent
                      ? 'bg-blue-500 text-white scale-110 shadow-lg shadow-blue-500/50'
                      : isTarget
                      ? 'bg-amber-500/20 text-amber-400 border-2 border-amber-500'
                      : isValid
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30 cursor-pointer hover:scale-105'
                      : 'bg-white/5 text-gray-500'
                    }
                  `}
                >
                  {num}
                </div>
                
                {/* Pawn indicator */}
                {isCurrent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                  </motion.div>
                )}
                
                {/* Target flag */}
                {isTarget && (
                  <div className="absolute -top-2 -right-2 text-amber-400">
                    🏁
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 mt-4">
        Click any highlighted number (41-49) to make your move
      </div>
    </Card>
  )
}