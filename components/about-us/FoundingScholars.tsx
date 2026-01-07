"use client";
import { motion } from 'framer-motion';

const foundingScholars = [
  {
    name: "الشيخ عبد الحميد بن باديس",
    role: "مؤسس ورئيس الجمعية",
    description: "عالم reformer ومجدد، قاد حركة الإصلاح في الجزائر، مؤسس جمعية العلماء المسلمين",
    avatar: "عبد-الحميد-إبن-باديس.jpg",
    quote: "شعب الجزائر مسلم وإلى العروبة ينتسب"
  },
  {
    name: "الشيخ البشير الإبراهيمي",
    role: "نائب الرئيس",
    description: "أديب وعالم، خليفة ابن باديس في رئاسة الجمعية، من أبرز رواد النهضة الإسلامية",
    avatar: "Mohamed_Bachir_El_Ibrahimi.jpg",
    quote: "إن الأمة التي لا تاريخ لها لا حاضر لها"
  },
  {
    name: "الشيخ الطيب العقبي",
    role: "عضو مؤسس",
    description: "خطيب ومفكر، من أبرز الدعاة والإصلاحيين في شمال إفريقيا",
    avatar: "Mbarek_elmili.jpg",
    quote: "الدين روح والحياة مادة فلا حياة بلا روح"
  },
  {
    name: "الشيخ مبارك الميلي",
    role: "عضو مؤسس",
    description: "مؤرخ وعالم، من رواد البحث التاريخي والدراسات الإسلامية في الجزائر",
    avatar: "hqdefault.jpg",
    quote: "التاريخ مدرسة الأجيال"
  }
];

const FoundingScholars = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">العلماء المؤسسون</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            رواد النهضة الإسلامية والإصلاح في الجزائر
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {foundingScholars.map((scholar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                  <img src={scholar.avatar} className="w-15 h-15 rounded-full" alt={scholar.name} />
                </div>
                <div className="flex-1 text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{scholar.name}</h3>
                  <div className="text-emerald-600 font-semibold mb-3">{scholar.role}</div>
                  <p className="text-gray-600 leading-relaxed mb-4">{scholar.description}</p>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <p className="text-amber-800 text-sm italic text-center">"{scholar.quote}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundingScholars;