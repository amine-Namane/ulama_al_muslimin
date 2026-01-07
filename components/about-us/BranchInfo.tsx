"use client";
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, Heart } from 'lucide-react';

const BranchInfo = () => {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            عن فرعنا المحلي
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            امتدادٌ لرسالة جمعية العلماء المسلمين الجزائريين على المستوى المحلي
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-right space-y-6"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              يُعد فرع جمعية العلماء المسلمين الجزائريين بمدينة
              <strong className="text-emerald-600"> الاربعاء</strong>
              أحد الفروع النشطة التي تعمل على تجسيد رسالة الجمعية
              في التعليم والدعوة والإصلاح داخل المجتمع المحلي.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              يركز الفرع على تعليم القرآن الكريم، ونشر العقيدة الصحيحة،
              وترسيخ القيم الإسلامية والأخلاقية، خاصة في أوساط
              الأطفال والشباب.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              كما يسعى الفرع إلى خدمة المجتمع من خلال الأنشطة
              التربوية والاجتماعية، والتعاون مع مختلف الفاعلين
              المحليين لما فيه مصلحة المدينة وسكانها.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">
                مجالات عمل الشعبة
              </h3>
              <ul className="space-y-3 text-emerald-700">
                <li className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  تعليم القرآن الكريم حفظًا وتجويدًا
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-emerald-600" />
                  الدروس والمحاضرات التربوية والدعوية
                </li>
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                  تكوين النشء والشباب علميًا وأخلاقيًا
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-emerald-600" />
                  المبادرات الاجتماعية والخيرية
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                معلومات عن الشعبة
              </h3>

              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span>المدينة</span>
                  <span className="font-semibold">الاربعاء</span>
                </div>
                <div className="flex justify-between">
                  <span>سنة التأسيس</span>
                  <span className="font-semibold"> 2014</span>
                </div>
                <div className="flex justify-between">
                  <span>عدد الطلبة</span>
                  <span className="font-semibold">[مثلاً: 250+]</span>
                </div>
                <div className="flex justify-between">
                  <span>عدد المؤطرين</span>
                  <span className="font-semibold">[مثلاً: 12]</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BranchInfo;