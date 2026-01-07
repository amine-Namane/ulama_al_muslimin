"use client";
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const successStories = [
  {
    name: "الطالب محمد",
    story: "بفضل تبرعاتكم، تمكنت من إكمال حفظ القرآن الكريم وأصبحت معلماً في إحدى حلقات الجمعية",
    amount: "كفالة تعليمية"
  },
  {
    name: "مدرسة الهدى",
    story: "تم تجديد المدرسة بالكامل وتجهيزها بأحدث الوسائل التعليمية بفضل تبرعات المحسنين",
    amount: "تجهيز كامل"
  },
  {
    name: "أسرة أحمد",
    story: "كفالة الأسرة ساعدت الأبناء على مواصلة التعليم والتفوق في الدراسة الشرعية",
    amount: "كفالة أسرة"
  }
];

const SuccessStories = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
    >
      <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">قصص نجاح</h4>
      <div className="space-y-6">
        {successStories.map((story, index) => (
          <div key={index} className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{story.name}</div>
                <div className="text-sm text-emerald-600">{story.amount}</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed text-right">
              "{story.story}"
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SuccessStories;