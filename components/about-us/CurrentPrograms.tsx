"use client";
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users, Globe } from 'lucide-react';

const currentPrograms = [
  {
    icon: BookOpen,
    title: "المدارس القرآنية",
    description: "إدارة وتشغيل عشرات المدارس القرآنية لتعليم القرآن الكريم وعلومه"
  },
  {
    icon: GraduationCap,
    title: "المعاهد الإسلامية",
    description: "الإشراف على المعاهد الشرعية لتخريج علماء ودعاة مؤهلين"
  },
  {
    icon: Users,
    title: "المراكز الثقافية",
    description: "إنشاء المراكز الثقافية لنشر الوعي الإسلامي والمعرفة الشرعية"
  },
  {
    icon: Globe,
    title: "النشاط الدعوي",
    description: "تنظيم المحاضرات والندوات والدورات الشرعية في جميع الولايات"
  }
];

const CurrentPrograms = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">برامجنا الحالية</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استمرار العطاء ومواكبة العصر
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <program.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentPrograms;