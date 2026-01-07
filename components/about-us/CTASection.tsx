"use client";
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">انضم إلى مسيرتنا</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            جمعية العلماء المسلمين الجزائريين تواصل رسالتها في خدمة الإسلام والوطن، 
            وتبحث عن كل من يريد المساهمة في هذا المشروع الإصلاحي الكبير
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <span>انضم إلينا</span>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-xl font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300">
              تبرع لدعم الجمعية
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;