"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CreditCard, BanknoteX, Phone } from 'lucide-react';
type DonorInfo = {
  name: string
  email: string
  phone: string
  message: string
}

type DonationFormProps = {
  selectedAmount: number
  setSelectedAmount: React.Dispatch<React.SetStateAction<number>>

  customAmount: string
  setCustomAmount: React.Dispatch<React.SetStateAction<string>>

  selectedArea: string
  setSelectedArea: React.Dispatch<React.SetStateAction<string>>

  paymentMethod: string
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>

  donorInfo: DonorInfo
  setDonorInfo: React.Dispatch<React.SetStateAction<DonorInfo>>

  handleDonate: () => void
}

const donationAmounts = [
  { amount: 100, label: "دينار", impact: "توفير كتب لطالب", popular: false },
  { amount: 500, label: "دينار", impact: "دعم حلقة لمدة أسبوع", popular: false },
  { amount: 1000, label: "دينار", impact: "كفالة طالب محتاج", popular: true },
  { amount: 5000, label: "دينار", impact: "تجهيز قاعة دراسة", popular: false },
  { amount: 10000, label: "دينار", impact: "دعم مدرسة كاملة", popular: false }
];

const paymentMethods = [
  {
    icon: CreditCard,
    name: "البطاقة الإئتمانية",
    description: "دفع آمن عبر البطاقات الإئتمانية",
    supported: ["Visa", "MasterCard", "Mada"]
  },
  {
    icon: BanknoteX,
    name: "التحويل البنكي",
    description: "تحويل مباشر إلى حساب الجمعية",
    supported: ["جميع البنوك المحلية"]
  },
  {
    icon: Phone,
    name: "الدفع الإلكتروني",
    description: "خدمات الدفع عبر الجوال",
    supported: ["STC Pay", "Mada Pay", "Apple Pay"]
  }
];

const DonationForm = ({
  selectedAmount,
  setSelectedAmount,
  customAmount,
  setCustomAmount,
  selectedArea,
  setSelectedArea,
  paymentMethod,
  setPaymentMethod,
  donorInfo,
  setDonorInfo,
  handleDonate,
}: DonationFormProps) => {

 const handleDonorInfoChange = <K extends keyof DonorInfo>(
  field: K,
  value: DonorInfo[K]
) => {
  setDonorInfo(prev => ({
    ...prev,
    [field]: value,
  }))
}


  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
    >
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">اكمل فرحة العطاء</h2>
        <p className="text-emerald-100">اختر مبلغ التبرع وطريقة الدفع</p>
      </div>

      <div className="p-6">
        {/* Donation Amount */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">اختر مبلغ التبرع</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {donationAmounts.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedAmount(item.amount);
                  setCustomAmount('');
                }}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedAmount === item.amount && !customAmount
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : 'border-gray-200 hover:border-emerald-300'
                } ${item.popular ? 'ring-2 ring-amber-300' : ''}`}
              >
                <div className="text-xl font-bold mb-1">{item.amount} {item.label}</div>
                <div className="text-sm text-gray-600">{item.impact}</div>
                {item.popular && (
                  <div className="text-xs text-amber-600 font-semibold mt-2">الأكثر اختياراً</div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="relative">
            <input
              type="number"
              placeholder="أو اكتب المبلغ الذي تريد التبرع به"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(0);
              }}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl py-4 px-4 text-right text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">دينار</span>
          </div>
        </div>

        {/* Donation Area */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">اختر مجال التبرع</h3>
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-xl py-4 px-4 text-right focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="all">التبرع العام (يوزع على جميع المجالات)</option>
            <option value="education">دعم المدارس القرآنية</option>
            <option value="students">منح الطلاب المحتاجين</option>
            <option value="facilities">صيانة وتطوير المراكز</option>
            <option value="programs">برامج التحفيز والتكريم</option>
            <option value="social">البرامج الإنسانية والاجتماعية</option>
          </select>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">طريقة الدفع</h3>
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  paymentMethod === method.name
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
                onClick={() => setPaymentMethod(method.name)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="font-semibold text-gray-900">{method.name}</div>
                    <div className="text-sm text-gray-600">{method.description}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      يدعم: {method.supported.join('، ')}
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    paymentMethod === method.name
                      ? 'bg-emerald-500 border-emerald-500'
                      : 'border-gray-300'
                  }`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Donor Information */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">معلومات المتبرع</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="الاسم الكامل"
              value={donorInfo.name}
              onChange={(e) => handleDonorInfoChange('name', e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-right focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={donorInfo.email}
              onChange={(e) => handleDonorInfoChange('email', e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-right focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <input
              type="tel"
              placeholder="رقم الجوال"
              value={donorInfo.phone}
              onChange={(e) => handleDonorInfoChange('phone', e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-right focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <textarea
              placeholder="رسالة خاصة (اختياري)"
              value={donorInfo.message}
              onChange={(e) => handleDonorInfoChange('message', e.target.value)}
              rows={3}
              className="bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-right focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent md:col-span-2"
            />
          </div>
        </div>

        {/* Donate Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleDonate}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <Heart className="w-5 h-5" />
          <span>تبرع الآن</span>
        </motion.button>

        <p className="text-center text-gray-500 text-sm mt-4">
          جميع التبرعات معفاة من الضرائب برخصة خيرية رقم: ١٢٣٤٥٦
        </p>
      </div>
    </motion.div>
  );
};

export default DonationForm;