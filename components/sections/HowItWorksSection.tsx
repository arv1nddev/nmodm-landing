'use client'

import { motion } from 'framer-motion'
import { Play, Plus, MoveRight, Flag } from 'lucide-react'
import Card from '../ui/Card'

/**
 * How It Works Section - Step-by-step rules
 * 
 * Design decisions:
 * - Numbered steps for clear progression
 * - Visual icons for each step
 * - Arrow connectors between steps
 * - Example values for clarity
 */
export default function HowItWorksSection() {
  const steps = [
    {
      icon: Play,
      title: 'Start Position',
      description: 'Game begins at an initial number (e.g., 0)',
      example: 'Starting at 0',
    },
    {
      icon: Plus,
      title: 'Choose Your Move',
      description: 'Add a number within the defined range (e.g., 1-9)',
      example: 'Add any number from 1 to 9',
    },
    {
      icon: MoveRight,
      title: 'Advance the Pawn',
      description: 'Your pawn moves to the new position',
      example: 'Move from 0 to 7',
    },
    {
      icon: Flag,
      title: 'Reach the Target',
      description: 'First player to reach the exact target wins',
      example: 'Reach exactly 100 to win',
    },
  ]
  
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-primary-400">Rules</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple to understand, impossible to master
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <StepCard
                  number={index + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  example={step.example}
                  delay={index * 0.15}
                />
                
                {/* Arrow connector (hidden on mobile, shown on md+) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-20">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      <MoveRight className="w-8 h-8 text-primary-500/50" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Game modes explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Game Modes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <ModeCard
                title="Standard"
                description="Start at 0, reach 100, add 1-9"
                highlight="Most Popular"
              />
              <ModeCard
                title="Custom"
                description="Choose your own starting point, target, and range"
                highlight="Flexible"
              />
              <ModeCard
                title="Previous"
                description="Continue from where you left off"
                highlight="Resume"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function StepCard({ number, icon: Icon, title, description, example, delay }: {
  number: number
  icon: any
  title: string
  description: string
  example: string
  delay: number
}) {
  return (
    <Card hover delay={delay} className="relative h-full">
      {/* Step number badge */}
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-primary-500/50 z-10">
        {number}
      </div>
      
      <div className="pt-4">
        <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary-400" />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        
        <div className="px-3 py-2 rounded-lg bg-primary-500/5 border border-primary-500/20">
          <p className="text-xs text-primary-300 font-mono">{example}</p>
        </div>
      </div>
    </Card>
  )
}

function ModeCard({ title, description, highlight }: {
  title: string
  description: string
  highlight: string
}) {
  return (
    <div className="text-center">
      <div className="inline-block px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-semibold mb-3">
        {highlight}
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}