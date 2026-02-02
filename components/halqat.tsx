import { Calendar, Users, Clock, MapPin, Star, ChevronLeft, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link"
import { motion } from 'framer-motion'
type Halqa = {
  id: number
  name: string
  sheikh: string
  time: string
  location: string
  students: number
  level: LevelType
  days: string
  description: string
  color: ColorType
  rating: number
}

const halaqat: Halqa[] = [
  {
    id: 1,
    name: "حلقة التجويد المتقدم",
    sheikh: "الشيخ محمد الأمين",
    time: "بعد صلاة الفجر",
    location: "المسجد الكبير - القاعة الرئيسية",
    students: 25,
    level: "متقدم",
    days: "السبت - الأحد - الثلاثاء",
    description: "حلقة مخصصة لتعليم أحكام التجويد المتقدمة والقراءات",
    color: "primary",
    rating: 4.9
  },
  {
    id: 2,
    name: "حلقة حفظ جزء عم",
    sheikh: "الشيخ عبد الرحمن الجزائري",
    time: "بعد صلاة العصر",
    location: "المسجد الكبير - الطابق الأول",
    students: 35,
    level: "مبتدئ",
    days: "يومياً",
    description: "حلقة لحفظ ومراجعة جزء عم مع التركيز على الإتقان",
    color: "secondary",
    rating: 4.8
  },
  {
    id: 3,
    name: "حلقة القرآن الكريم للنساء",
    sheikh: "الأستاذة فاطمة بن علي",
    time: "بعد صلاة الظهر",
    location: "قسم النساء - الطابق الثاني",
    students: 30,
    level: "جميع المستويات",
    days: "الأحد - الإثنين - الأربعاء - الخميس",
    description: "حلقة تحفيظ وتجويد للأخوات مع شرح معاني الآيات",
    color: "primary",
    rating: 4.7
  },
  {
    id: 4,
    name: "حلقة الأطفال - البراعم",
    sheikh: "الأستاذ أحمد بوعزيز",
    time: "4:00 مساءً",
    location: "قاعة الأطفال",
    students: 40,
    level: "أطفال (6-12 سنة)",
    days: "السبت - الأحد - الثلاثاء - الأربعاء",
    description: "تعليم القرآن للأطفال بطريقة تفاعلية ممتعة",
    color: "secondary",
    rating: 4.9
  },
  {
    id: 5,
    name: "حلقة المراجعة والإتقان",
    sheikh: "الشيخ يوسف العربي",
    time: "بعد صلاة المغرب",
    location: "المسجد الكبير - القاعة الرئيسية",
    students: 20,
    level: "متقدم",
    days: "الإثنين - الأربعاء - الجمعة",
    description: "مراجعة وإتقان ما تم حفظه مع تصحيح الأخطاء",
    color: "primary",
    rating: 4.8
  },
  {
    id: 6,
    name: "حلقة تفسير القرآن",
    sheikh: "الدكتور عبد الله حمدي",
    time: "بعد صلاة العشاء",
    location: "قاعة المحاضرات",
    students: 45,
    level: "جميع المستويات",
    days: "الجمعة",
    description: "شرح وتفسير سور القرآن الكريم مع الدروس المستفادة",
    color: "secondary",
    rating: 4.9
  }
]
type ColorType = 'primary' | 'secondary'

const getColorClasses = (color:ColorType) => {
  const colors = {
    primary: {
      header: 'bg-gradient-to-r from-emerald-900 to-teal-800 text-white',
      border: 'border-emerald-100',
      button: 'bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white',
      icon: 'text-emerald-600',
      accent: 'bg-emerald-50 text-emerald-700'
    },
    secondary: {
      header: 'bg-gradient-to-r from-teal-800 to-cyan-700 text-white',
      border: 'border-teal-100',
      button: 'bg-gradient-to-r from-teal-700 to-cyan-600 hover:from-teal-800 hover:to-cyan-700 text-white',
      icon: 'text-teal-600',
      accent: 'bg-teal-50 text-teal-700'
    }
  }
  return colors[color] || colors.primary
}
type LevelType =
  | 'مبتدئ'
  | 'متقدم'
  | 'جميع المستويات'
  | 'أطفال (6-12 سنة)'
const getLevelBadge = (level:LevelType) => {
  const badges = {
    'مبتدئ': 'bg-blue-50 text-blue-800 border border-blue-200',
    'متقدم': 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    'جميع المستويات': 'bg-teal-50 text-teal-800 border border-teal-200',
    'أطفال (6-12 سنة)': 'bg-amber-50 text-amber-800 border border-amber-200'
  }
  return badges[level] || 'bg-gray-50 text-gray-800 border border-gray-200'
}

export default function HalqatList() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300594d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            انضم إلى <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">حلقاتنا</span> القرآنية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اختر من بين مجموعة متنوعة من الحلقات القرآنية التي تناسب جميع الأعمار والمستويات، 
            مع نخبة من المشايخ والمعلمين المؤهلين
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {halaqat.map((halqa, index) => {
            const colorClass = getColorClasses(halqa.color)
            return (
              <motion.div
                key={halqa.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-emerald-200 h-full flex flex-col">
                  
                  {/* Header with your gradient */}
                  <div className={`${colorClass.header} p-6 relative overflow-hidden`}>
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold leading-tight text-white text-right">{halqa.name}</h3>
                        <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                          <Star className="w-4 h-4 fill-current text-amber-300" />
                          <span className="text-sm font-medium text-white">{halqa.rating}</span>
                        </div>
                      </div>
                      <p className="text-emerald-100 text-sm font-medium text-right">{halqa.sheikh}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold ${getLevelBadge(halqa.level)}`}>
                        {halqa.level}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-medium">{halqa.students} طالب</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 text-right">
                      {halqa.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                          <Clock className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="flex-1 text-right">
                          <span className="text-sm font-medium block text-gray-900">الوقت</span>
                          <span className="text-xs text-gray-500">{halqa.time}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 rounded-lg bg-teal-50 border border-teal-100">
                          <Calendar className="w-4 h-4 text-teal-600" />
                        </div>
                        <div className="flex-1 text-right">
                          <span className="text-sm font-medium block text-gray-900">الأيام</span>
                          <span className="text-xs text-gray-500">{halqa.days}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-100">
                          <MapPin className="w-4 h-4 text-cyan-600" />
                        </div>
                        <div className="flex-1 text-right">
                          <span className="text-sm font-medium block text-gray-900">المكان</span>
                          <span className="text-xs text-gray-500">{halqa.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link href={'register'}>
                    <button className={`w-full mt-6 ${colorClass.button} py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}>
                      <span>سجل الآن في الحلقة</span>
                      <ChevronLeft className="w-4 h-4" />
                    </button></Link>
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
          className="mt-16 bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">لم تجد الحلقة المناسبة؟</h3>
            <p className="text-lg mb-8 text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              فريقنا مستعد لمساعدتك في إيجاد الحلقة المثالية التي تناسب مستواك، وقتك، واحتياجاتك التعليمية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-900 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>تواصل معنا الآن</span>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                استشارة مجانية
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}