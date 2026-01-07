"use client";
import { motion } from 'framer-motion';
import { Users, BookOpen, GraduationCap, History } from 'lucide-react';

const stats = [
  { icon: Users, number: "500+", label: "عالم وداعية" },
  { icon: BookOpen, number: "100+", label: "مدرسة قرآنية" },
  { icon: GraduationCap, number: "50+", label: "معهد شرعي" },
  { icon: History, number: "90+", label: "سنة من العطاء" }
];

const StatsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">إنجازاتنا عبر التاريخ</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            أكثر من تسعة عقود من العطاء في خدمة الإسلام والجزائر
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <stat.icon className="w-8 h-8 text-amber-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-emerald-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;