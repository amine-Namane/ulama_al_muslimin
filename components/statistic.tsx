import { motion } from 'framer-motion'
import { Users, GraduationCap, Star, Award } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: "1,200+",
    label: "طالب وطالبة",
    description: "ينضمون إلى حلقاتنا القرآنية"
  },
  {
    icon: GraduationCap,
    number: "50+",
    label: "حلقة قرآنية",
    description: "متنوعة المستويات والأعمار"
  },
  {
    icon: Award,
    number: "35+",
    label: "شيخ ومعلم",
    description: "متخصصون في التعليم القرآني"
  },
  {
    icon: Star,
    number: "98%",
    label: "رضا أولياء الأمور",
    description: "عن مستوى التعليم والمتابعة"
  }
]

export default function StatisticsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 "
        // style={{
        //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='1200' height='600' viewBox='0 0 1200 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='islamic' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M50,50 C60,40 70,40 80,50 C70,60 60,60 50,50 Z' fill='none' stroke='%2300594d' stroke-width='2' opacity='0.1'/%3E%3Cpath d='M20,20 C30,10 40,10 50,20 C40,30 30,30 20,20 Z' fill='none' stroke='%2300594d' stroke-width='1' opacity='0.05'/%3E%3Cpath d='M80,80 C90,70 100,70 110,80 C100,90 90,90 80,80 Z' fill='none' stroke='%2300594d' stroke-width='1' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23islamic)'/%3E%3C/svg%3E")`
        // }}
      >
        <img  src="/quraan.D6AM2072.jpg" className="w-full h-full object-cover" />
        {/* Gradient Overlay - Goes to Transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-teal-800/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-teal-800/60 to-transparent"></div>
      </div>

      {/* Subtle Animated Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-teal-400/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 left-1/4 w-24 h-24 bg-cyan-400/10 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-emerald-400/10 rounded-full animate-pulse delay-1500"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            أرقام <span className="text-amber-300">تُحدث الفرق</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            سنوات من العطاء في خدمة كتاب الله تعالى وإعداد جيل يحمل القرآن الكريم
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                {/* Icon Container */}
                <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-amber-400/30 group-hover:to-amber-300/20 transition-all duration-300 border border-white/20">
                  <stat.icon className="w-10 h-10 text-white group-hover:text-amber-300 transition-colors duration-300" />
                </div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <div className="text-lg font-semibold text-amber-300 mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-emerald-100 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Animated Underline */}
                <div className="w-0 group-hover:w-16 h-0.5 bg-amber-400 mx-auto mt-4 transition-all duration-500 group-hover:delay-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <p className="text-xl text-white leading-relaxed mb-4">
              "خيركم من تعلم القرآن وعلمه"
            </p>
            <p className="text-emerald-200 text-sm">
               رواه البخاري
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}