// pages/halqat.js or components/HalqatPage.js
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link"
import { Calendar, Users, Clock, MapPin, Star, ChevronLeft, BookOpen, Search, Filter, X } from 'lucide-react'
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
  duration: string
  requirements: string
  ageGroup: string
  price: string
}

const allHalaqat: Halqa[] = [
  {
    id: 1,
    name: "حلقة التجويد المتقدم",
    sheikh: "الشيخ محمد الأمين",
    time: "بعد صلاة الفجر",
    location: "المسجد الكبير - القاعة الرئيسية",
    students: 25,
    level: "متقدم",
    days: "السبت - الأحد - الثلاثاء",
    description: "حلقة مخصصة لتعليم أحكام التجويد المتقدمة والقراءات العشر مع التركيز على الإتقان والضبط. تشمل مراجعة الأحكام النظرية والتطبيق العملي.",
    color: "primary",
    rating: 4.9,
    duration: "ساعة واحدة",
    requirements: "إجازة في القرآن الكريم",
    ageGroup: "جميع الأعمار",
    price: "مجاني"
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
    description: "حلقة متخصصة في حفظ ومراجعة جزء عم مع التركيز على الضبط والإتقان. مناسبة للمبتدئين في حفظ القرآن.",
    color: "secondary",
    rating: 4.8,
    duration: "45 دقيقة",
    requirements: "لا يوجد متطلبات",
    ageGroup: "جميع الأعمار",
    price: "مجاني"
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
    description: "حلقة تحفيظ وتجويد مخصصة للأخوات مع شرح معاني الآيات والدروس المستفادة. بيئة تعليمية مناسبة للنساء.",
    color: "primary",
    rating: 4.7,
    duration: "ساعة ونصف",
    requirements: "للنساء فقط",
    ageGroup: "جميع الأعمار",
    price: "مجاني"
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
    description: "تعليم القرآن الكريم للأطفال بطريقة تفاعلية ممتعة تناسب أعمارهم. تشمل أنشطة تعليمية ومسابقات تحفيزية.",
    color: "secondary",
    rating: 4.9,
    duration: "ساعة",
    requirements: "للأطفال من 6-12 سنة",
    ageGroup: "6-12 سنة",
    price: "مجاني"
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
    description: "مراجعة وإتقان ما تم حفظه مع تصحيح الأخطاء وضبط الأحكام. مناسبة لخريجي حلقات التحفيظ.",
    color: "primary",
    rating: 4.8,
    duration: "ساعة ونصف",
    requirements: "ختم القرآن سابقاً",
    ageGroup: "جميع الأعمار",
    price: "مجاني"
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
    description: "شرح وتفسير سور القرآن الكريم مع استنباط الدروس المستفادة والتطبيقات العملية في الحياة.",
    color: "secondary",
    rating: 4.9,
    duration: "ساعتان",
    requirements: "لا يوجد متطلبات",
    ageGroup: "جميع الأعمار",
    price: "مجاني"
  },
  {
    id: 7,
    name: "حلقة حفظ الجزء الأخير",
    sheikh: "الشيخ خالد السعدي",
    time: "بعد صلاة العصر",
    location: "المسجد الصغير - الطابق الأرضي",
    students: 28,
    level: "مبتدئ",
    days: "السبت - الإثنين - الأربعاء",
    description: "حفظ الأجزاء الأخيرة من القرآن مع التركيز على التلاوة الصحيحة والمراجعة المستمرة.",
    color: "primary",
    rating: 4.7,
    duration: "ساعة",
    requirements: "لا يوجد متطلبات",
    ageGroup: "جميع الأعمار",
    price: "مجاني"
  },
  {
    id: 8,
    name: "حلقة التجويد للمبتدئين",
    sheikh: "الأستاذة منى القاسم",
    time: "بعد صلاة العشاء",
    location: "قسم النساء - القاعة الصغيرة",
    students: 22,
    level: "مبتدئ",
    days: "الثلاثاء - الخميس",
    description: "تعليم أساسيات التجويد وأحكام التلاوة للمبتدئين بطريقة سهلة ومبسطة.",
    color: "secondary",
    rating: 4.8,
    duration: "ساعة",
    requirements: "للنساء فقط",
    ageGroup: "جميع الأعمار",
    price: "مجاني"
  }
]

const levels = ["جميع المستويات", "مبتدئ", "متقدم", "أطفال (6-12 سنة)"]
const times = ["جميع الأوقات", "بعد صلاة الفجر", "بعد صلاة الظهر", "بعد صلاة العصر", "بعد صلاة المغرب", "بعد صلاة العشاء", "4:00 مساءً"]
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
    'مبتدئ': 'bg-green-100 text-green-800 border border-green-200',
    'متقدم': 'bg-blue-100 text-blue-800 border border-blue-200',
    'جميع المستويات': 'bg-purple-100 text-purple-800 border border-purple-200',
    'أطفال (6-12 سنة)': 'bg-amber-100 text-amber-800 border border-amber-200'
  }
  return badges[level] || 'bg-gray-100 text-gray-800 border border-gray-200'
}

export default function HalqatPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('جميع المستويات')
  const [selectedTime, setSelectedTime] = useState('جميع الأوقات')
  const [showFilters, setShowFilters] = useState(false)

  const filteredHalaqat = allHalaqat.filter(halqa => {
    const matchesSearch = halqa.name.includes(searchTerm) || 
                         halqa.sheikh.includes(searchTerm) ||
                         halqa.description.includes(searchTerm)
    const matchesLevel = selectedLevel === 'جميع المستويات' || halqa.level === selectedLevel
    const matchesTime = selectedTime === 'جميع الأوقات' || halqa.time === selectedTime
    
    return matchesSearch && matchesLevel && matchesTime
  })

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedLevel('جميع المستويات')
    setSelectedTime('جميع الأوقات')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700 text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30 backdrop-blur-sm">
              <BookOpen className="w-4 h-4" />
              الحلقات القرآنية
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              حلقات <span className="text-amber-300">القرآن الكريم</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              اختر من بين مجموعة متنوعة من الحلقات القرآنية التي تناسب مستواك ووقتك. 
              انضم إلى رحلتك في حفظ وتعلم كتاب الله مع نخبة من الشيوخ والمعلمين.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8 px-4 sm:px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ابحث عن حلقة، شيخ، أو وصف..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 pl-4 pr-12 text-right focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-xl font-semibold"
            >
              <Filter className="w-5 h-5" />
              الفلاتر
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-right focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>

              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-right focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {times.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>

              {(searchTerm || selectedLevel !== 'جميع المستويات' || selectedTime !== 'جميع الأوقات') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                  مسح الفلاتر
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 space-y-4"
              >
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-right focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>

                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-right focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  {times.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>

                {(searchTerm || selectedLevel !== 'جميع المستويات' || selectedTime !== 'جميع الأوقات') && (
                  <button
                    onClick={clearFilters}
                    className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800 transition-colors py-2"
                  >
                    <X className="w-5 h-5" />
                    مسح الفلاتر
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-6 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              عرض <span className="font-semibold text-emerald-600">{filteredHalaqat.length}</span> حلقة
            </p>
            {(searchTerm || selectedLevel !== 'جميع المستويات' || selectedTime !== 'جميع الأوقات') && (
              <button
                onClick={clearFilters}
                className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                عرض جميع الحلقات
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Halqat Grid Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredHalaqat.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-600 mb-2">لم نعثر على حلقات</h3>
                <p className="text-gray-500 mb-6">جرب تعديل كلمات البحث أو الفلاتر</p>
                <button
                  onClick={clearFilters}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                >
                  عرض جميع الحلقات
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredHalaqat.map((halqa, index) => {
                  const colorClass = getColorClasses(halqa.color)
                  return (
                    <motion.div
                      key={halqa.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-emerald-200 h-full flex flex-col">
                        
                        {/* Header with gradient */}
                        <div className={`${colorClass.header} p-6 relative overflow-hidden`}>
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

                          {/* Additional Info */}
                          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
                            <div className="text-center">
                              <div className="text-xs text-gray-500">المدة</div>
                              <div className="text-sm font-semibold text-gray-700">{halqa.duration}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500">التكلفة</div>
                              <div className="text-sm font-semibold text-emerald-600">{halqa.price}</div>
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}