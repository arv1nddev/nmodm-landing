'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Mail, Heart } from 'lucide-react'

/**
 * Footer Component
 * 
 * Design decisions:
 * - Minimal footer with essential links
 * - Social media links
 * - Clean typography
 * - Subtle branding
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const links = {
    product: [
      { label: 'Download', href: '#download' },
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#overview' },
    ],
    support: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    social: [
      { icon: Github, href: '#', label: 'GitHub' },
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Mail, href: '#', label: 'Email' },
    ],
  }
  
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                NMODM
              </h3>
              <p className="text-gray-400 max-w-md mb-6">
                A strategic number game where every move counts. 
                Challenge your friends and master the art of foresight.
              </p>
              <div className="flex gap-4">
                {links.social.map((social) => (
                  <SocialLink
                    key={social.label}
                    icon={social.icon}
                    href={social.href}
                    label={social.label}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Product Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2">
                {links.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Support Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                {links.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} NMODM. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for strategy lovers
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

function SocialLink({ icon: Icon, href, label }: {
  icon: any
  href: string
  label: string
}) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  )
}