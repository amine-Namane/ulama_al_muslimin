import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "والدة الطالب أحمد",
    role: "ولي أمر",
    rating: 5,
    text: "النظام ساعدني بشكل كبير في متابعة ابنى، أصبحت أرى تقدمه يومياً وأتلقى تقارير دورية. ما كان يتطلب أسابيع أصبح يتم في لحظات. التفاصيل الدقيقة والتقارير الشاملة جعلتني مطمئنة تماماً على مسيرة ابني التعليمية.",
    avatar: "👩‍👦",
    color: "primary"
  },
  {
    id: 2,
    name: "الشيخ محمد الأمين",
    role: "معلم قرآن",
    rating: 5,
    text: "وفر لي النظام وقتاً وجهداً كبيراً في إدارة الحلقة. أصبحت أتابع طلابي بسهولة وأعد التقارير تلقائياً. أداة لا غنى عنها لكل معلم قرآن. التنظيم والإدارة أصبحت أكثر سلاسة وفعالية.",
    avatar: "👨‍🏫",
    color: "secondary"
  },
  {
    id: 3,
    name: "الطالب يوسف عبد الله",
    role: "طالب - مستوى متقدم",
    rating: 5,
    text: "أحب الطريقة التي أتابع فيها تقدمي في الحفظ والمراجعة. النظام جعل التعلم أكثر متعة وتنظيماً، وأصبحت أكثر انتظاماً في دروسي. التقييم المستمر شجعني على التحسن يومياً.",
    avatar: "👨‍🎓",
    color: "primary"
  },
  {
    id: 4,
    name: "الأستاذة فاطمة بن علي",
    role: "معلمة حلقات نسائية",
    rating: 5,
    text: "كمعلمة للحلقات النسائية، النظام وفر لي مرونة كبيرة في إدارة الوقت ومتابعة الطالبات. التواصل مع أولياء الأمور أصبح أسهل بكثير. الأدوات المقدمة تناسب احتياجاتنا بشكل ممتاز.",
    avatar: "👩‍🏫",
    color: "secondary"
  },
  {
    id: 5,
    name: "والد الطالب خالد",
    role: "ولي أمر",
    rating: 5,
    text: "كنت أبحث عن طريقة لمتابعة ابني في الحفظ، والنظام وفر لي كل ما أحتاجه. التقارير الدورية والتنبيهات جعلتني مطمئناً على تقدمه. الدعم الفني ممتاز والاستجابة سريعة.",
    avatar: "👨‍👦",
    color: "primary"
  },
  {
    id: 6,
    name: "الدكتور عبد الله حمدي",
    role: "شيخ حلقة التفسير",
    rating: 5,
    text: "كمدرس لتفسير القرآن، النظام ساعدني في تنظيم المواد وتتبع فهم الطلاب للدروس. أداة ممتازة للتعليم القرآني الحديث. التقييمات التفصيلية ساعدتني في تطوير طريقة تدريسي.",
    avatar: "🧔‍♂️",
    color: "secondary"
  }
]

const getColorClasses = (color) => {
  const colors = {
    primary: {
      border: 'border-emerald-200',
      background: 'bg-emerald-50',
      text: 'text-emerald-600',
      gradient: 'from-emerald-500 to-teal-600',
      button: 'bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700'
    },
    secondary: {
      border: 'border-teal-200',
      background: 'bg-teal-50',
      text: 'text-teal-600',
      gradient: 'from-teal-500 to-cyan-600',
      button: 'bg-gradient-to-r from-teal-700 to-cyan-600 hover:from-teal-800 hover:to-cyan-700'
    }
  }
  return colors[color] || colors.primary
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]
  const colorClass = getColorClasses(currentTestimonial.color)

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300594d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-20"></div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200">
            <Quote className="w-4 h-4" />
            آراء مستخدمينا
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ماذا يقول <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">مستخدمونا</span>؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            انطباعات حقيقية من شيوخنا، طلابنا، وأولياء الأمور الذين يجعلون رحلتنا القرآنية مميزة
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-emerald-300 flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:border-emerald-300 flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="mx-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
              >
                <div className="max-w-4xl mx-auto">
                  {/* Quote Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${colorClass.background} border ${colorClass.border} flex items-center justify-center mb-8 mx-auto`}>
                    <Quote className={`w-8 h-8 ${colorClass.text}`} />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center gap-2 mb-8">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 fill-amber-400 text-amber-400" 
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center mb-8 font-medium">
                    "{currentTestimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center text-white text-3xl">
                      {currentTestimonial.avatar}
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{currentTestimonial.name}</div>
                      <div className={`text-lg ${colorClass.text} font-semibold`}>{currentTestimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: testimonials.length, label: "تقييم إيجابي" },
              { number: "4.9/5", label: "متوسط التقييم" },
              { number: "95%", label: "معدل الرضا" },
              { number: "100%", label: "توصية" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-700 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">انضم إلى مجتمعنا الراضي</h3>
              <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                كن جزءاً من رحلتنا القرآنية وشاركنا تجربتك المميزة في حفظ وتعليم كتاب الله
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-900 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <span>شارك تجربتك</span>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                  اقرأ المزيد من الآراء
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}