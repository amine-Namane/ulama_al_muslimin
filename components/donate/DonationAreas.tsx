"use client";
import { motion } from 'framer-motion';
import { BookOpen, Users, Building, Gift, Heart, CheckCircle } from 'lucide-react';

type DonationArea = {
  icon: typeof BookOpen;
  title: string;
  description: string;
  percentage: number;
  color: ColorType;
  impact: string;
  details: string[];
};

// Add the type annotation here
const donationAreas: DonationArea[] = [
  {
    icon: BookOpen,
    title: "دعم المدارس القرآنية",
    description: "توفير الكتب والمصاحف والأدوات التعليمية للطلاب، تجهيز القاعات الدراسية، ودعم المعلمين",
    percentage: 35,
    color: "primary",
    impact: "يدعم 50 مدرسة قرآنية",
    details: ["توفير 5000 مصحف سنوياً", "تجديد 20 قاعة دراسة", "دعم 100 معلم"]
  },
  {
    icon: Users,
    title: "منح الطلاب المحتاجين",
    description: "تغطية رسوم الطلاب غير القادرين، توفير وسائل النقل، وكفالة الأسر المتعففة",
    percentage: 25,
    color: "secondary",
    impact: "يكفل 200 طالب محتاج",
    details: ["منح دراسية كاملة", "توفير المواصلات", "مساعدات عينية للأسر"]
  },
  {
    icon: Building,
    title: "صيانة وتطوير المراكز",
    description: "ترميم المساجد والمدارس، تجهيز المكتبات، وتطوير البنية التحتية التعليمية",
    percentage: 20,
    color: "primary",
    impact: "يخدم 30 مركزاً تعليمياً",
    details: ["ترميم المساجد التاريخية", "تجهيز المكتبات", "تطوير القاعات"]
  },
  {
    icon: Gift,
    title: "برامج التحفيز والتكريم",
    description: "جوائز للطلاب المتميزين، مناسبات تحفيزية، وحفلات تخريج وتكريم",
    percentage: 15,
    color: "secondary",
    impact: "يكرم 500 طالب متميز سنوياً",
    details: ["جوائز التفوق", "حفلات التكريم", "برامج التحفيز"]
  },
  {
    icon: Heart,
    title: "برامج إنسانية واجتماعية",
    description: "مساعدات للأسر المتعففة، برامج إفطار الصائمين، وكفالة الأيتام",
    percentage: 5,
    color: "primary",
    impact: "يساعد 1000 أسرة سنوياً",
    details: ["كفالة الأيتام", "مساعدات شهرية", "برامج رمضان"]
  }
];

type ColorType = 'primary' | 'secondary'

const getColorClasses = (color:ColorType) => {
  const colors = {
    primary: {
      background: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      gradient: 'from-emerald-500 to-teal-600'
    },
    secondary: {
      background: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-600',
      gradient: 'from-teal-500 to-cyan-600'
    }
  };
  return colors[color] || colors.primary;
};

const DonationAreas = () => {
  return (
    <div className="space-y-6">
      {donationAreas.map((area, index) => {
        const colorClass = getColorClasses(area.color);
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl ${colorClass.background} border ${colorClass.border} flex items-center justify-center flex-shrink-0`}>
                <area.icon className={`w-7 h-7 ${colorClass.text}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{area.title}</h4>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${colorClass.background} ${colorClass.text}`}>
                    {area.percentage}%
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-3 text-right">
                  {area.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium mb-3">
                  <CheckCircle className="w-4 h-4" />
                  {area.impact}
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.details.map((detail, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DonationAreas;