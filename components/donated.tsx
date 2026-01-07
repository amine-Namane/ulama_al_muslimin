import { motion } from 'framer-motion'
import { Heart, Users, BookOpen, Building, Shield, ChevronLeft, CheckCircle, Gift } from 'lucide-react'

const donationAreas = [
  {
    icon: BookOpen,
    title: "تطوير الحلقات القرآنية",
    description: "توفير الكتب والأدوات التعليمية، تجهيز القاعات، ودعم الشيوخ والمعلمين",
    percentage: 40,
    color: "primary",
    impact: "يدعم 50 حلقة قرآنية"
  },
  {
    icon: Users,
    title: "منح الطلاب المحتاجين",
    description: "تغطية رسوم الطلاب غير القادرين، توفير وسائل النقل، ودعم الأسر المتعففة",
    percentage: 25,
    color: "secondary",
    impact: "يساعد 200 طالب محتاج"
  },
  {
    icon: Building,
    title: "تطوير البنية التحتية",
    description: "صيانة المساجد والقاعات، تجهيز المكتبات، وتوفير التقنيات التعليمية",
    percentage: 20,
    color: "primary",
    impact: "يخدم 10 مراكز تعليمية"
  },
  {
    icon: Gift,
    title: "برامج التشجيع والمكافآت",
    description: "جوائز للطلاب المتميزين، مناسبات تحفيزية، وحفلات التكريم",
    percentage: 15,
    color: "secondary",
    impact: "يكرم 100 طالب متميز سنوياً"
  }
]

const transparencyFeatures = [
  {
    icon: Shield,
    title: "شفافية كاملة",
    description: "تقارير دورية مفصلة عن كيفية صرف التبرعات"
  },
  {
    icon: CheckCircle,
    title: "متابعة مستمرة",
    description: "متابعة تأثير تبرعك ومشاهدة نتائجه على الأرض"
  },
  {
    icon: Heart,
    title: "أثر مستدام",
    description: "تبرعك يستمر في العطاء لسنوات قادمة"
  }
]

const getColorClasses = (color) => {
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

export default function DonationSection() {
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

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200">
            <Heart className="w-4 h-4" />
            ساهم في الخير
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">تبرعك</span> يُحدث فرقاً
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            كن شريكاً في نشر العلم الشرعي وتعليم القرآن الكريم. كل تبرع يساهم في إحداث تأثير إيجابي مستدام
          </p>
        </motion.div>

        {/* Where Your Money Goes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">أين يذهب تبرعك؟</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Donation Areas */}
            <div className="space-y-6">
              {donationAreas.map((area, index) => {
                const colorClass = getColorClasses(area.color)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl ${colorClass.background} border ${colorClass.border} flex items-center justify-center flex-shrink-0`}>
                        <area.icon className={`w-7 h-7 ${colorClass.text}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-xl font-bold text-gray-900">{area.title}</h4>
                          <div className={`px-3 py-1 rounded-full text-sm font-bold ${colorClass.background} ${colorClass.text}`}>
                            {area.percentage}%
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-3 text-right">
                          {area.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                          <CheckCircle className="w-4 h-4" />
                          {area.impact}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Progress Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">توزيع التبرعات</h4>
              
              {/* Progress Bars */}
              <div className="space-y-6">
                {donationAreas.map((area, index) => {
                  const colorClass = getColorClasses(area.color)
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">{area.title}</span>
                        <span className="text-gray-600">{area.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${colorClass.gradient} transition-all duration-1000`}
                          style={{ width: `${area.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Total Impact */}
              <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-700 mb-2">التأثير الكلي</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-gray-900">50+</div>
                      <div className="text-gray-600">حلقة قرآنية</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">300+</div>
                      <div className="text-gray-600">طالب مستفيد</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Transparency Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">لماذا تثق بنا؟</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transparencyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Donation Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">اختر طريقة تبرعك</h3>
              <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
                اختر من بين خيارات التبرع المتعددة التي تناسب إمكانياتك
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { amount: "100", label: "", impact: "توفير كتب لطالب" },
                { amount: "500", label: "", impact: "دعم حلقة لمدة أسبوع" },
                { amount: "1000", label: "", impact: "منحة طالب محتاج" }
              ].map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-2xl font-bold mb-2">{option.amount} {option.label}</div>
                  <div className="text-emerald-100 text-sm">{option.impact}</div>
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-emerald-900 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>تبرع الآن</span>
                <Heart className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                تبرع مخصص
              </button>
            </div>

            <div className="text-center mt-6">
              <p className="text-emerald-100 text-sm">
                جميع التبرعات معفاة من الضرائب برخصة رقم: ١٢٣٤٥٦
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}