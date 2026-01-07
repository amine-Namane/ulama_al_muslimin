"use client";
import { motion } from 'framer-motion';

const faqData = [
  {
    q: "هل التبرعات معفاة من الضرائب؟",
    a: "نعم، جميع التبرعات معفاة من الضرائب وفقاً للترخيص الخيري رقم 123456"
  },
  {
    q: "كيف يمكنني الحصول على إيصال التبرع؟",
    a: "سيصلك إيصال إلكتروني فور اكتمال التبرع، ويمكنك طلب إيصال ورقى إذا رغبت"
  },
  {
    q: "هل يمكنني تخصيص تبرعي لمشروع معين؟",
    a: "نعم، يمكنك اختيار مجال محدد للتبرع أو تركها للجمعية لتوزيعها حسب الأولوية"
  },
  {
    q: "ما هي طرق الدفع المتاحة؟",
    a: "نحن نقبل البطاقات الائتمانية، التحويل البنكي، والدفع عبر الجوال"
  },
  {
    q: "كيف أتأكد من وصول تبرعي لمستحقيه؟",
    a: "نصدر تقارير دورية عن المشاريع والمستفيدين، ويمكنك متابعة تأثير تبرعك عبر موقعنا"
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">أسئلة شائعة</h2>
        </motion.div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-right">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed text-right">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;