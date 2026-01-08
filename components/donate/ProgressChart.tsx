"use client";
import { motion } from 'framer-motion';

type DonationArea = {
  title: string;
  percentage: number;
  color: ColorType;
};

const donationAreas: DonationArea[] = [
  { title: "دعم المدارس القرآنية", percentage: 35, color: "primary" },
  { title: "منح الطلاب المحتاجين", percentage: 25, color: "secondary" },
  { title: "صيانة وتطوير المراكز", percentage: 20, color: "primary" },
  { title: "برامج التحفيز والتكريم", percentage: 15, color: "secondary" },
  { title: "برامج إنسانية واجتماعية", percentage: 5, color: "primary" }
];

type ColorType = 'primary' | 'secondary'

const getColorClasses = (color:ColorType) => {
  const colors = {
    primary: {
      gradient: 'from-emerald-500 to-teal-600'
    },
    secondary: {
      gradient: 'from-teal-500 to-cyan-600'
    }
  };
  return colors[color] || colors.primary;
};

const ProgressChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
    >
      <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">توزيع التبرعات</h4>
      
      <div className="space-y-6">
        {donationAreas.map((area, index) => {
          const colorClass = getColorClasses(area.color);
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">{area.title}</span>
                <span className="text-gray-600">{area.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full bg-gradient-to-r ${colorClass.gradient} transition-all duration-1000`}
                  style={{ width: `${area.percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProgressChart;