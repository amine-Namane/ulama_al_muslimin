"use client";
import { useState } from 'react';
import HeroSection from '@/components/donate/HeroSection';
import DonationForm from '@/components/donate/DonationForm';
import ImpactSidebar from '@/components/donate/ImpactSidebar';
import DonationAreas from '@/components/donate/DonationAreas';
import ProgressChart from '@/components/donate/ProgressChart';
import SuccessStories from '@/components/donate/SuccessStories';
import FAQSection from '@/components/donate/FAQSection';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleDonate = () => {
    // Here you would handle the donation process
    const amount = customAmount || selectedAmount;
    console.log('Donation:', { amount, area: selectedArea, paymentMethod, donorInfo });
    // Add payment processing logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection />
      
      {/* Main Donation Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <DonationForm
                selectedAmount={selectedAmount}
                setSelectedAmount={setSelectedAmount}
                customAmount={customAmount}
                setCustomAmount={setCustomAmount}
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                donorInfo={donorInfo}
                setDonorInfo={setDonorInfo}
                handleDonate={handleDonate}
              />
            </div>

            {/* Sidebar */}
            <div>
              <ImpactSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">أين يذهب تبرعك؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              شفافية كاملة في توزيع التبرعات لضمان وصولها لمستحقيها
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Donation Areas */}
            <div>
              <DonationAreas />
            </div>

            {/* Progress Chart and Success Stories */}
            <div className="space-y-8">
              <ProgressChart />
              <SuccessStories />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}