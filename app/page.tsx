import HeroSection from '@/components/sections/HeroSection'
import DownloadSection from '@/components/sections/DownloadSection'
import OverviewSection from '@/components/sections/OverviewSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'

/**
 * Main Landing Page
 * 
 * Architecture:
 * - Server component by default (Next.js 14 App Router)
 * - Sections are client components where needed for animations
 * - SEO metadata defined in layout.tsx
 * - Clean, semantic HTML structure
 * - Progressive enhancement approach
 * 
 * Performance considerations:
 * - Lazy-loaded animations (Framer Motion)
 * - Optimized images with next/image
 * - Minimal JavaScript bundle
 * - Proper viewport thresholds for animations
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section with full viewport height */}
      <HeroSection />
      
      {/* Download section - primary conversion point */}
      <DownloadSection />
      
      {/* Overview with visual game demonstration */}
      <OverviewSection />
      
      {/* Detailed rules explanation */}
      <HowItWorksSection />
      
      {/* Feature highlights */}
      <FeaturesSection />
      
      {/* Final call-to-action */}
      <CTASection />
      
      {/* Footer with links */}
      <Footer />
    </main>
  )
}