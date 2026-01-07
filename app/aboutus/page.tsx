"use client";
import HeroSection from '@/components/about-us/HeroSection';
import HistoricalIntroduction from '@/components/about-us/HistoricalIntroduction';
import FoundingScholars from '@/components/about-us/FoundingScholars';
import ValuesSection from '@/components/about-us/ValuesSection';
import TimelineSection from '@/components/about-us/TimelineSection';
import CurrentPrograms from '@/components/about-us/CurrentPrograms';
import StatsSection from '@/components/about-us/StatsSection';
import BranchInfo from '@/components/about-us/BranchInfo';
import CTASection from '@/components/about-us/CTASection';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection />
      <HistoricalIntroduction />
      <FoundingScholars />
      <ValuesSection />
      <TimelineSection />
      <CurrentPrograms />
      <StatsSection />
      <BranchInfo />
      <CTASection />
    </div>
  );
}