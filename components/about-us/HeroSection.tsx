"use client";
import { motion } from 'framer-motion';
import { History } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700 text-white py-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30 backdrop-blur-sm">
            <History className="w-4 h-4" />
            جمعية العلماء المسلمين الجزائريين
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-amber-300">جمعية العلماء المسلمين</span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            جمعية إصلاحية دعوية تعليمية، تأسست عام 1931م على يد العلامة الشيخ عبد الحميد بن باديس 
            ورفاقه، بهدف إحياء الدين الإسلامي وإعادة بناء الشخصية الجزائرية المسلمة.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;