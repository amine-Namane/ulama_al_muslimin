"use client";
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Receipt, Star, Phone, Mail, MapPin } from 'lucide-react';

const transparencyFeatures = [
  {
    icon: Shield,
    title: "شفافية كاملة",
    description: "تقارير مالية دورية توضح كيفية صرف التبرعات"
  },
  {
    icon: CheckCircle,
    title: "متابعة مستمرة",
    description: "متابعة تأثير تبرعك ومشاهدة نتائجه على الأرض"
  },
  {
    icon: Receipt,
    title: "إيصالات معتمدة",
    description: "إصدار إيصالات رسمية معتمدة لجميع التبرعات"
  },
  {
    icon: Star,
    title: "تأثير مستدام",
    description: "تبرعك يستمر في العطاء لسنوات قادمة"
  }
];

const ImpactSidebar = () => {
  const totalImpact = {
    students: 5000,
    schools: 100,
    teachers: 200,
    families: 1000
  };

  return (
    <div className="space-y-8">
      {/* Impact Summary */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">تأثير تبرعك</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-600">{totalImpact.students}+</div>
            <div className="text-gray-600">طالب مستفيد</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-600">{totalImpact.schools}+</div>
            <div className="text-gray-600">مدرسة قرآنية</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-600">{totalImpact.teachers}+</div>
            <div className="text-gray-600">معلم ومشرف</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-600">{totalImpact.families}+</div>
            <div className="text-gray-600">أسرة مستفيدة</div>
          </div>
        </div>
      </motion.div>

      {/* Transparency Features */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">لماذا تثق بنا؟</h3>
        <div className="space-y-4">
          {transparencyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-right flex-1">
                <div className="font-semibold text-gray-900">{feature.title}</div>
                <div className="text-sm text-gray-600">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white"
      >
        <h3 className="text-xl font-bold mb-4">للتواصل معنا</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-amber-300" />
            <span>+213 123 456 789</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-amber-300" />
            <span>donate@alimam.alg</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-300" />
            <span>الجزائر العاصمة</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactSidebar;