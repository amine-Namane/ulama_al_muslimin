"use client";
import { motion } from 'framer-motion';

const milestones = [
  {
    year: "1931",
    title: "التأسيس",
    description: "تأسيس جمعية العلماء المسلمين الجزائريين برئاسة الشيخ عبد الحميد بن باديس"
  },
  {
    year: "1930s",
    title: "النشاط التعليمي",
    description: "إنشاء المدارس الحرة ونشر التعليم العربي الإسلامي في جميع أنحاء الجزائر"
  },
  {
    year: "1956",
    title: "الانضمام للثورة",
    description: "انضمام الجمعية رسمياً إلى ثورة التحرير الجزائرية"
  },
  {
    year: "1962",
    title: "إعادة التشكيل",
    description: "إعادة تنظيم الجمعية بعد الاستقلال ومتابعة العمل الدعوي والتعليمي"
  },
  {
    year: "1990s",
    title: "التجديد",
    description: "تجديد النشاط ومواكبة متطلبات العصر مع الحفاظ على الأصالة"
  },
  {
    year: "الآن",
    title: "الاستمرارية",
    description: "مواصلة رسالة الجمعية في تعليم القرآن ونشر الوسطية الإسلامية"
  }
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">محطات تاريخية</h2>
          <p className="text-xl text-gray-600">رحلة جمعية العلماء عبر التاريخ</p>
        </motion.div>

        <div className="relative">
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-right">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;