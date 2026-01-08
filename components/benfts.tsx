import { motion } from 'framer-motion'
import { BarChart3, Users, UserCheck, Zap, Smartphone, Shield, ChevronLeft } from 'lucide-react'
type ColorType = 'primary' | 'secondary';

type Feature = {
  icon: any;
  title: string;
  description: string;
  stats: string;
  color: ColorType;
};

const features: Feature[] = [
  {
    icon: BarChart3,
    title: "تتبع ذكي للتقدم",
    description: "أنظمة متقدمة لمتابعة تقدم كل طالب في الحفظ والمراجعة مع تحليلات دقيقة تساعد في قياس التحسن المستمر وتحديد مجالات التحسين",
    stats: "تحسن في الأداء بنسبة 40%",
    color: "primary"
  },
  {
    icon: Users,
    title: "إدارة متكاملة للشيوخ",
    description: "منصة شاملة تمكن الشيوخ من إدارة الحلقات، متابعة الحضور، تقييم الطلاب، وإعداد التقارير عبر واجهة بديهية وسهلة الاستخدام",
    stats: "توفير 10 ساعات أسبوعياً",
    color: "secondary"
  },
  {
    icon: UserCheck,
    title: "تواصل فوري مع أولياء الأمور",
    description: "نظام اتصال مباشر يمكن أولياء الأمور من متابعة أبنائهم، تلقي التقارير التلقائية، والتفاعل مع المعلمين بسلاسة",
    stats: "رضا أولياء الأمور 98%",
    color: "primary"
  },
  {
    icon: Zap,
    title: "تقارير أداء ذكية",
    description: "تقارير تلقائية مفصلة عن مستوى الطلاب، أنماط الحضور، والإنجازات مع توصيات مخصصة لتحسين الأداء التعليمي",
    stats: "تقارير فورية 24/7",
    color: "secondary"
  },
  {
    icon: Smartphone,
    title: "منصة متعددة الأجهزة",
    description: "تجربة مستخدم سلسة على جميع الأجهزة - حواسيب، أجهزة لوحية، وهواتف ذكية مع مزامنة فورية للبيانات",
    stats: "متوفر على 3 منصات",
    color: "primary"
  },
  {
    icon: Shield,
    title: "أمان وحماية متقدم",
    description: "نظام أمني متكامل يحافظ على خصوصية البيانات مع تشفير متقدم ونسخ احتياطية تلقائية تضمن سلامة المعلومات",
    stats: "حماية بيانات 100%",
    color: "secondary"
  }
]

const colors = {
  primary: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    iconBg: "bg-emerald-50",
    text: "text-emerald-700"
  },
  secondary: {
    gradient: "from-teal-500 via-cyan-500 to-emerald-400",
    iconBg: "bg-teal-50",
    text: "text-teal-700"
  }
}

export default function FeaturesSection() {
  return (
    <section className="relative py-24 px-6 sm:px-10 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Subtle floating gradient blobs */}
       <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300594d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-40 -translate-y-64 translate-x-40"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-40 translate-y-64 -translate-x-32"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
              أدوات متكاملة
            </span>{" "}
            لإدارة التعليم القرآني
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نظام متكامل يجمع بين القوة التقنية والبساطة في الاستخدام لتحسين تجربة التعليم القرآني الرقمية
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {features.map((feature, i) => {
            const c = colors[feature.color]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 flex flex-col"
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-5 transition duration-500 rounded-3xl`}></div>

                <div className={`w-16 h-16 rounded-2xl ${c.iconBg} flex items-center justify-center mb-6 shadow-sm`}>
                  <feature.icon className={`w-8 h-8 ${c.text}`} />
                </div>

                <h3 className={`text-xl font-semibold mb-4 ${c.text}`}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-right">
                  {feature.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{feature.stats}</span>
                  <div className={`w-9 h-9 rounded-full ${c.iconBg} flex items-center justify-center`}>
                    <ChevronLeft className={`w-4 h-4 ${c.text}`} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700 text-white rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 animate-gradient-text bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              جاهز للتحول الرقمي؟
            </h3>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              انضم إلى المئات من المدارس القرآنية التي استفادت من نظامنا المتكامل لتحسين تجربتهم التعليمية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-900 px-8 py-3 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-md flex items-center gap-2">
                ابدأ الآن مجاناً
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                طلب عرض توضيحي
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
