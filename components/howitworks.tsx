import { motion } from 'framer-motion'
import { UserCheck, ClipboardCheck, CalendarCheck, Award, ChevronLeft, Users, Clock, BookOpen } from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: UserCheck,
    title: "اختر الحلقة المناسبة",
    description: "تصفح حلقاتنا القرآنية المتنوعة واختر الحلقة التي تناسب مستواك، وقتك، وأهدافك التعليمية",
    details: [
      "مستويات متنوعة من المبتدئ إلى المتقدم",
      "أوقات مرنة تناسب جدولك",
      "شيوخ متخصصون في مختلف المجالات"
    ],
    color: "primary",
    duration: "2 دقيقة"
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: "سجل بياناتك",
    description: "املأ نموذج التسجيل بالمعلومات الأساسية وسجل بياناتك الشخصية وأهدافك من الانضمام",
    details: [
      "نموذج تسجيل سهل ومبسط",
      "حماية كاملة للبيانات الشخصية",
      "تأكيد فوري على البريد الإلكتروني"
    ],
    color: "secondary",
    duration: "3 دقائق"
  },
  {
    step: 3,
    icon: CalendarCheck,
    title: "انتظر تأكيد التسجيل",
    description: "سيقوم فريقنا بالتواصل معك لتأكيد التسجيل وتحديد موعد البدء في الحلقة المختارة",
    details: [
      "تواصل خلال 24 ساعة",
      "تحديد الموعد المناسب",
      "تعريفك بالشيخ والمعلم"
    ],
    color: "primary",
    duration: "24 ساعة"
  },
  {
    step: 4,
    icon: Award,
    title: "ابدأ رحلة التعلم",
    description: "انضم للحلقة وابدأ رحلتك في حفظ القرآن الكريم وتجويده تحت إشراف متخصصين",
    details: [
      "بداية فورية بعد التأكيد",
      "متابعة مستمرة من الشيخ",
      "تقييم دوري للتقدم"
    ],
    color: "secondary",
    duration: "مستمر"
  }
]
type ColorType = 'primary' | 'secondary'

const getColorClasses = (color:ColorType) => {
  const colors = {
    primary: {
      background: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      gradient: 'from-emerald-500 to-teal-600',
      button: 'bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700'
    },
    secondary: {
      background: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-600',
      gradient: 'from-teal-500 to-cyan-600',
      button: 'bg-gradient-to-r from-teal-700 to-cyan-600 hover:from-teal-800 hover:to-cyan-700'
    }
  }
  return colors[color] || colors.primary
}

export default function HowItWorksSection() {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300594d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full -translate-y-48 translate-x-48 opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-50 rounded-full translate-y-40 -translate-x-40 opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200">
            <BookOpen className="w-4 h-4" />
            خطوات الانضمام
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            كيف <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">تنضم</span> إلى حلقاتنا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            رحلة بسيطة ومباشرة لبدء مشوارك في حفظ القرآن الكريم وتعلم التجويد مع أفضل الشيوخ والمعلمين
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 to-teal-200 transform -translate-x-1/2 hidden lg:block"></div>

          {/* Steps Grid */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const colorClass = getColorClasses(step.color)
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      {/* Step Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl ${colorClass.background} border ${colorClass.border} flex items-center justify-center flex-shrink-0`}>
                          <step.icon className={`w-8 h-8 ${colorClass.text}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 justify-between">
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass.background} ${colorClass.border} ${colorClass.text}`}>
                              الخطوة {step.step}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{step.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6 text-right">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <ul className="space-y-3 mb-6">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-3 text-gray-700">
                            {isEven ? (
                              <>
                                <span className="text-right flex-1">{detail}</span>
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClass.gradient}`}></div>
                              </>
                            ) : (
                              <>
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClass.gradient}`}></div>
                                <span>{detail}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>

                      {/* Action Button */}
                      {step.step === 1 && (
                        <button className={`w-full ${colorClass.button} text-white py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}>
                          <span>ابدأ التسجيل الآن</span>
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                      )}
                    </motion.div>
                  </div>

                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-20 h-20 rounded-full ${colorClass.background} border-4 border-white shadow-xl flex items-center justify-center relative z-10`}>
                      <span className={`text-2xl font-bold ${colorClass.text}`}>{step.step}</span>
                    </div>
                    {/* Connector Dot */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-emerald-300 hidden lg:block z-20" 
                         style={{ [isEven ? 'right' : 'left']: '-2.5rem' }}>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Users, number: "1,200+", label: "طالب مسجل" },
            { icon: Clock, number: "24", label: "ساعة استجابة" },
            { icon: Award, number: "98%", label: "نجاح التسجيل" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <stat.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">جاهز لبدء رحلتك القرآنية؟</h3>
              <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                لا تنتظر أكثر، انضم إلى آلاف الطلاب الذين بدأوا رحلتهم في حفظ القرآن الكريم معنا
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-900 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <span>سجل الآن مجاناً</span>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                  استشارة مجانية
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}