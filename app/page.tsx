'use client'

import  FeaturesSection  from '@/components/benfts'
import DonationSection from '@/components/donated'
import Footer from '@/components/footer'
import HalqatList from '@/components/halqat'
import Herosections from '@/components/herosections'
import HowItWorksSection from '@/components/howitworks'
import Navbar from '@/components/Navbar'
import StatisticsSection from '@/components/statistic'
import TestimonialsSection from '@/components/testimonials'

export default function StudentPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      <Herosections />
      <HalqatList />
      <FeaturesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <DonationSection />
      {/* <Footer/> */}
    </main>
  )
}
