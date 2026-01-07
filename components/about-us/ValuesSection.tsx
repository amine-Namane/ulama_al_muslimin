"use client";
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users, Shield } from 'lucide-react';

const values = [
  {
    icon: BookOpen,
    title: "الإتقان العلمي",
    description: "الالتزام بالأصول العلمية والمنهجية في تعليم القرآن الكريم وعلومه",
    color: "primary"
  },
  {
    icon: Heart,
    title: "الإخلاص",
    description: "العمل لوجه الله تعالى وإحياء سنة النبي صلى الله عليه وسلم",
    color: "secondary"
  },
  {
    icon: Users,
    title: "الجماعية",
    description: "ترسيخ مبدأ العمل المؤسسي والتعاون في خدمة الدين والمجتمع",
    color: "primary"
  },
  {
    icon: Shield,
    title: "الوسطية",
    description: "التمسك بالمنهج الوسطي المعتدل في فهم الإسلام وتطبيقه",
    color: "secondary"
  }
];

const getColorClasses = (color) => {
  const colors = {
    primary: {
      background: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      gradient: 'from-emerald-500 to-teal-600'
    },
    secondary: {
      background: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-600',
      gradient: 'from-teal-500 to-cyan-600'
    }
  }
  return colors[color] || colors.primary;
};

const ValuesSection = () => {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">قيمنا ومبادئنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            المبادئ التي تحكم عمل الجمعية وتوجه مسيرتها
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const colorClass = getColorClasses(value.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-2xl ${colorClass.background} border ${colorClass.border} flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className={`w-10 h-10 ${colorClass.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;