"use client";
import { motion } from 'framer-motion';
import { Star, Target } from 'lucide-react';

const HistoricalIntroduction = () => {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">نشأة الجمعية وتأسيسها</h2>
            
            <div className="space-y-6 text-right">
              <p className="text-gray-700 leading-relaxed text-lg">
                تأسست جمعية العلماء المسلمين الجزائريين في 5 ماي 1931م في نادي الترقي بالعاصمة الجزائر، 
                برئاسة العلامة الشيخ <strong>عبد الحميد بن باديس</strong>، وبمشاركة نخبة من علماء الجزائر 
                وأدبائها ومفكريها.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                جاءت الجمعية كرد فعل على الحملات التبشيرية والستعمار الفرنسي الذي عمل على طمس الهوية 
                الإسلامية والعربية للشعب الجزائري. وقد اتخذت شعارها المشهور: 
                <strong className="text-emerald-600"> "الإسلام ديننا، والعربية لغتنا، والجزائر وطننا"</strong>.
              </p>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 mt-6">
                <h3 className="text-2xl font-bold text-amber-800 mb-3">الأهداف التأسيسية</h3>
                <ul className="space-y-3 text-amber-700 text-right">
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>محاربة البدع والخرافات في المجتمع الجزائري</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>نشر التعليم العربي الإسلامي</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>إحياء الشخصية الوطنية الجزائرية</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>مقاومة سياسة التفرنس والاستعمار</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <img src="Oulemas-removebg-preview.png" className="w-13" alt="شعار الجمعية" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">الشعار والمبادئ</h3>
              </div>

              <div className="space-y-6">
                <div className="text-center p-6 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-700 mb-2">شعار الجمعية</div>
                  <div className="text-lg text-emerald-800 font-semibold">
                    "الإسلام ديننا، والعربية لغتنا، والجزائر وطننا"
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-900 text-right">المبادئ الأساسية:</h4>
                  {[
                    "التمسك بالإسلام الصحيح وفق الكتاب والسنة",
                    "الدعوة إلى الله بالحكمة والموعظة الحسنة",
                    "خدمة المجتمع الجزائري والمصلحة العامة",
                    "الاعتدال والوسطية في الفكر والمنهج",
                    "العمل المؤسسي والجماعي"
                  ].map((principle, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 text-right flex-1">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalIntroduction;