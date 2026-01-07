// 'use client'

// import StudentsList from './StudentsList'
// import EvaluationForm from './EvaluationForm'
// import CommentsPanel from './CommentsPanel'
// import StatisticsPanel from './StatisticsPanel'
// import TeacherLayout from '@/app/teacher/layout/TeacherLayout'
// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { 
//   Home, 
//   Users, 
//   ClipboardList, 
//   BarChart3, 
//   MessageSquare, 
//   Bell, 
//   LogOut, 
//   Menu, 
//   X,
//   Search,
//   Filter,
//   Download,
//   Plus,
//   MoreVertical,
//   Star,
//   TrendingUp,
//   Target,
//   CheckCircle,
//   Clock,
//   AlertCircle
// } from 'lucide-react'

// interface Student {
//   id: number
//   name: string
//   level: string
//   progress: number
//   attendance: number
//   lastActive: string
//   avatar?: string
// }

// interface Evaluation {
//   id: number
//   studentId: number
//   studentName: string
//   memorized: string
//   notes: string
//   date: string
//   rating: number
// }

// interface Comment {
//   id: number
//   student: string
//   text: string
//   date: string
//   type: 'positive' | 'constructive' | 'warning'
// }

// export default function DashboardSection() {
//   const stats = [
//     { label: 'إجمالي الطلبة', value: '24', change: '+2', icon: Users, color: 'blue' },
//     { label: 'نسبة الحضور', value: '94%', change: '+5%', icon: CheckCircle, color: 'green' },
//     { label: 'متوسط التقدم', value: '78%', change: '+3%', icon: TrendingUp, color: 'purple' },
//     { label: 'التقييمات', value: '18', change: '+4', icon: ClipboardList, color: 'orange' },
//   ]

//   const recentActivities = [
//     { student: 'أحمد بن خالد', action: 'أكمل حفظ صفحة ٢٤', time: 'منذ ساعتين', type: 'success' },
//     { student: 'محمد بن علي', action: 'تقييم جديد مضافة', time: 'منذ ٤ ساعات', type: 'info' },
//     { student: 'عبد الرحمن', action: 'يتطلب مراجعة إضافية', time: 'منذ يوم', type: 'warning' },
//   ]

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
//           <p className="text-gray-600 mt-2">نظرة عامة على أداء الحلقة وتقدم الطلبة</p>
//         </div>
//         <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2 shadow-lg">
//           <Plus className="w-5 h-5" />
//           تقييم جديد
//         </button>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon
//           const colorClasses = {
//             blue: 'bg-blue-50 text-blue-600',
//             green: 'bg-green-50 text-green-600',
//             purple: 'bg-purple-50 text-purple-600',
//             orange: 'bg-orange-50 text-orange-600'
//           }
          
//           return (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
//                   <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
//                   <p className="text-green-600 text-sm font-medium mt-1">{stat.change}</p>
//                 </div>
//                 <div className={`p-3 rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
//                   <Icon className="w-6 h-6" />
//                 </div>
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>

//       <div className="grid lg:grid-cols-2 gap-6">
//         {/* Recent Activities */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-lg font-semibold text-gray-900">النشاطات الحديثة</h3>
//             <button className="text-green-600 hover:text-green-700 text-sm font-medium">
//               عرض الكل
//             </button>
//           </div>
          
//           <div className="space-y-4">
//             {recentActivities.map((activity, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 <div className={`w-2 h-2 rounded-full ${
//                   activity.type === 'success' ? 'bg-green-500' :
//                   activity.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
//                 }`} />
//                 <div className="flex-1">
//                   <p className="font-medium text-gray-900">{activity.student}</p>
//                   <p className="text-gray-600 text-sm">{activity.action}</p>
//                 </div>
//                 <span className="text-gray-500 text-sm">{activity.time}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-900 mb-6">إجراءات سريعة</h3>
          
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { label: 'إضافة طالب', icon: Users, color: 'green' },
//               { label: 'تقرير شهري', icon: Download, color: 'blue' },
//               { label: 'مراجعة', icon: ClipboardList, color: 'purple' },
//               { label: 'إشعارات', icon: Bell, color: 'orange' },
//             ].map((action, index) => (
//               <motion.button
//                 key={action.label}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-4 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all group"
//               >
//                 <div className={`p-2 rounded-lg w-fit mb-2 group-hover:scale-110 transition-transform ${
//                   action.color === 'green' ? 'bg-green-100 text-green-600' :
//                   action.color === 'blue' ? 'bg-blue-100 text-blue-600' :
//                   action.color === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-orange-100 text-orange-600'
//                 }`}>
//                   <action.icon className="w-5 h-5" />
//                 </div>
//                 <span className="text-sm font-medium text-gray-700">{action.label}</span>
//               </motion.button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import { useState } from 'react'
import { 
  Bell, Search, Settings, Menu, X, Home, Users, BookOpen, Calendar, 
  BarChart3, MessageCircle, Award, Clock, TrendingUp, ChevronLeft,
  Play, Video, Mic, Star, Target, Crown, Zap, Gift, FileText,
  Plus, Eye, Download, Filter, CheckCircle, AlertCircle, Send,
  ArrowUp, ArrowDown, Percent, Activity, Brain, Heart, Sparkles
} from 'lucide-react'
import Link from 'next/link'

export default function SheikhDashboardAdvanced() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  const user = {
    name: "الشيخ محمد الأمين بن عبد الله",
    role: "مدرس القرآن الكريم والتجويد",
    avatar: "👨‍🏫",
    level: "معلم متميز",
    rating: 4.9,
    yearsExperience: 15
  }

  const stats = [
    { 
      icon: Users, 
      label: "إجمالي الطلاب", 
      value: "156", 
      change: "+12",
      percentage: "+8.3%",
      trend: "up",
      color: "blue",
      subtext: "طالب جديد هذا الشهر"
    },
    { 
      icon: BookOpen, 
      label: "الحلقات النشطة", 
      value: "8", 
      change: "+2",
      percentage: "+33%",
      trend: "up",
      color: "emerald",
      subtext: "حلقات تم افتتاحها"
    },
    { 
      icon: Award, 
      label: "معدل الإنجاز", 
      value: "87%", 
      change: "+5%",
      percentage: "+6.1%",
      trend: "up",
      color: "purple",
      subtext: "نسبة إتمام المنهج"
    },
    { 
      icon: Clock, 
      label: "ساعات التدريس", 
      value: "248", 
      change: "+28",
      percentage: "+12.7%",
      trend: "up",
      color: "amber",
      subtext: "ساعة هذا الشهر"
    }
  ]

  const topStudents = [
    { 
      name: "أحمد محمد الصالح", 
      avatar: "👦",
      level: "متقدم",
      progress: 95,
      streak: 45,
      certificates: 3,
      lastAchievement: "أتم حفظ الجزء الثلاثين",
      rank: 1,
      score: 980
    },
    { 
      name: "فاطمة الزهراء أحمد", 
      avatar: "👧",
      level: "متقدم",
      progress: 92,
      streak: 38,
      certificates: 2,
      lastAchievement: "أتقن أحكام التجويد الأساسية",
      rank: 2,
      score: 945
    },
    { 
      name: "يوسف عبد الله", 
      avatar: "🧑",
      level: "متوسط",
      progress: 88,
      streak: 30,
      certificates: 2,
      lastAchievement: "أنهى مراجعة الأحزاب الخمسة",
      rank: 3,
      score: 920
    }
  ]

  const upcomingSessions = [
    { 
      id: 1,
      name: "حلقة التجويد المتقدم - أحكام الوقف والابتداء", 
      time: "الساعة 6:00 صباحاً",
      date: "اليوم",
      duration: "ساعة ونصف",
      students: 24,
      type: "تجويد",
      room: "القاعة الكبرى",
      materials: ["كتاب التجويد المصور", "سماعات"],
      status: "قريباً"
    },
    { 
      id: 2,
      name: "حفظ جزء عم - من سورة النبأ إلى سورة الناس", 
      time: "الساعة 4:00 مساءً",
      date: "اليوم",
      duration: "ساعة",
      students: 32,
      type: "حفظ",
      room: "القاعة الثانية",
      materials: ["مصحف التجويد"],
      status: "مجدولة"
    },
    { 
      id: 3,
      name: "مراجعة عامة وتقييم الأداء الشهري", 
      time: "الساعة 7:00 مساءً",
      date: "غداً",
      duration: "ساعتان",
      students: 18,
      type: "تقييم",
      room: "القاعة الكبرى",
      materials: ["أوراق الاختبار", "نماذج التقييم"],
      status: "مجدولة"
    }
  ]

  const recentActivity = [
    { type: "achievement", text: "الطالب أحمد حصل على شهادة إتمام الجزء الأخير", time: "منذ 15 دقيقة", icon: Award, color: "emerald" },
    { type: "session", text: "تم بدء حلقة التجويد الصباحية بنجاح", time: "منذ ساعة", icon: Play, color: "blue" },
    { type: "message", text: "رسالة جديدة من ولي أمر الطالبة فاطمة", time: "منذ ساعتين", icon: MessageCircle, color: "purple" },
    { type: "alert", text: "تذكير: اجتماع هيئة التدريس غداً الساعة 10 صباحاً", time: "منذ 3 ساعات", icon: AlertCircle, color: "amber" }
  ]

  const achievements = [
    { icon: Crown, title: "المعلم الذهبي", description: "أتم 1000 ساعة تدريس", progress: 100, unlocked: true, badge: "🏆" },
    { icon: Star, title: "صانع الأبطال", description: "تخرج 50 طالب متميز", progress: 94, unlocked: false, badge: "⭐" },
    { icon: Target, title: "المتقن", description: "نسبة نجاح 95% في الاختبارات", progress: 87, unlocked: false, badge: "🎯" },
    { icon: Heart, title: "محبوب الطلاب", description: "تقييم 4.9 من 5 نجوم", progress: 98, unlocked: true, badge: "💝" }
  ]

  const weeklyProgress = [
    { day: "السبت", hours: 8, students: 45 },
    { day: "الأحد", hours: 7, students: 42 },
    { day: "الاثنين", hours: 9, students: 48 },
    { day: "الثلاثاء", hours: 8, students: 46 },
    { day: "الأربعاء", hours: 10, students: 52 },
    { day: "الخميس", hours: 7, students: 40 },
    { day: "الجمعة", hours: 5, students: 28 }
  ]

  const menuItems = [
    { icon: Home, label: "الرئيسية", value: "dashboard", badge: null ,link:'/'},
    { icon: Users, label: "الطلاب", value: "students", badge: 12,link:'/students' },
    { icon: BookOpen, label: "الحلقات", value: "classes", badge: null ,link:'/halqat'},
    { icon: Calendar, label: "الجدول", value: "schedule", badge: 3 ,link:'/'},
    { icon: BarChart3, label: "التقارير", value: "reports", badge: null,link:'/' },
    { icon: MessageCircle, label: "الرسائل", value: "messages", badge: 8 ,link:'/'},
    { icon: Award, label: "الإنجازات", value: "achievements", badge: null,link:'/' },
    { icon: Settings, label: "الإعدادات", value: "settings", badge: null,link:'/' }
  ]
  const quickActions= [
    { icon: Plus, label: "حلقة جديدة", color: "emerald" },
    { icon: Users, label: "إضافة طالب", color: "blue" },
    { icon: Calendar, label: "جدولة حصة", color: "purple" },
    { icon: FileText, label: "تقرير أداء", color: "amber" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50" dir="rtl">
      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full bg-gradient-to-b from-emerald-900 to-teal-800 text-white transition-all duration-300 z-50 ${sidebarOpen ? 'w-80' : 'w-20'} shadow-2xl`}>
        <div className="flex flex-col h-full p-4">
          {/* Logo & Toggle */}
          <div className="flex items-center justify-between mb-8">
            {sidebarOpen && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl font-bold shadow-lg">
                  📖
                </div>
                <div>
                  <div className="font-bold text-lg">منصة الشيوخ</div>
                  <div className="text-xs text-emerald-200">نظام إدارة الحلقات</div>
                </div>
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
  <Link
    key={item.value}
    href={`/platform/teacher/${item.link}`}
    onClick={() => setActiveTab(item.value)}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      activeTab === item.value
        ? 'bg-white text-emerald-900 shadow-lg'
        : 'hover:bg-white/10'
    }`}
  >
    <item.icon size={20} />
    {sidebarOpen && (
      <>
        <span className="flex-1 text-right font-medium">{item.label}</span>
        {item.badge && (
          <span className="px-2 py-1 bg-rose-500 text-white rounded-full text-xs font-bold">
            {item.badge}
          </span>
        )}
      </>
    )}
  </Link>
))}

          </nav>

          {/* Logout */}
          <button className="w-full flex items-center gap-3 px-4  hover:bg-white/10 rounded-xl transition-all duration-200 mt-4">
            <Download size={20} />
            {sidebarOpen && <span className="font-medium">تسجيل الخروج</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'mr-80' : 'mr-20'} p-8`}>
        {/* Top Bar */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              مرحباً بعودتك، الشيخ محمد 🌟
            </h1>
            <p className="text-gray-600">لديك 3 حلقات اليوم و 8 رسائل جديدة</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن طالب، حلقة..."
                className="w-80 pr-12 pl-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-3 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all">
              <Bell size={22} className="text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>

            {/* Settings */}
            <button className="p-3 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all">
              <Settings size={22} className="text-gray-600" />
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity ${
                stat.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                stat.color === 'emerald' ? 'from-emerald-500 to-teal-500' :
                stat.color === 'purple' ? 'from-purple-500 to-pink-500' :
                'from-amber-500 to-orange-500'
              }`}></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                    stat.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                    'bg-amber-50 text-amber-600'
                  }`}>
                    <stat.icon size={28} />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-bold">
                    <ArrowUp size={14} />
                    {stat.percentage}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{stat.change}</span>
                    <span>{stat.subtext}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Top Students */}
            <section className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">الطلاب المتميزون</h2>
                  <p className="text-gray-500 text-sm">أفضل 3 طلاب هذا الشهر</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors font-semibold">
                  عرض الكل
                  <ChevronLeft size={18} />
                </button>
              </div>

              <div className="space-y-4">
                {topStudents.map((student, index) => (
                  <div key={index} className="group relative bg-gradient-to-r from-white to-gray-50 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div className="flex items-start gap-4">
                      {/* Rank Badge */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white text-lg ${
                        student.rank === 1 ? 'bg-gradient-to-br from-amber-400 to-orange-500' :
                        student.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                        'bg-gradient-to-br from-amber-600 to-amber-700'
                      }`}>
                        #{student.rank}
                      </div>

                      {/* Avatar */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-3xl">
                          {student.avatar}
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                          {student.streak}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">{student.name}</h3>
                            <p className="text-sm text-gray-500">{student.lastAchievement}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
                              {student.level}
                            </div>
                            <div className="text-xs text-gray-500">{student.score} نقطة</div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">التقدم</span>
                            <span className="font-bold text-emerald-600">{student.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Certificates */}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Award size={16} className="text-amber-500" />
                            <span>{student.certificates} شهادات</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Zap size={16} className="text-orange-500" />
                            <span>{student.streak} يوم متتالي</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Sessions */}
            <section className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">الحلقات القادمة</h2>
                  <p className="text-gray-500 text-sm">جدول اليوم وغداً</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors font-semibold">
                  <Calendar size={18} />
                  الجدول الكامل
                </button>
              </div>

              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="group bg-gradient-to-r from-white to-gray-50 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div className="flex items-start gap-4">
                      {/* Type Indicator */}
                      <div className={`w-2 h-full rounded-full ${
                        session.type === 'تجويد' ? 'bg-purple-500' :
                        session.type === 'حفظ' ? 'bg-emerald-500' :
                        'bg-amber-500'
                      }`}></div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-1">{session.name}</h3>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock size={16} />
                                {session.time}
                              </span>
                              <span>•</span>
                              <span>{session.duration}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Users size={16} />
                                {session.students} طالب
                              </span>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                            session.status === 'قريباً' ? 'bg-rose-100 text-rose-600' :
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {session.status}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                          <span className="px-2 py-1 bg-gray-100 rounded-lg">{session.room}</span>
                          <span className="px-2 py-1 bg-gray-100 rounded-lg">{session.type}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all font-semibold shadow-lg">
                            <Play size={18} />
                            بدء الحلقة
                          </button>
                          <button className="px-4 py-3 border-2 border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 hover:text-emerald-600 transition-all">
                            <Eye size={20} />
                          </button>
                          <button className="px-4 py-3 border-2 border-gray-200 text-gray-600 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all">
                            <MessageCircle size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Side Column */}
          <div className="space-y-8 ">
            {/* Recent Activity */}
            <section className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">النشاط الأخير</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activity.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                      activity.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      activity.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      'bg-amber-100 text-amber-600'
                    }`}>
                      <activity.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">{activity.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 shadow-xl border border-amber-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">إنجازاتك</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-2xl transition-all ${
                    achievement.unlocked 
                      ? 'bg-white border-2 border-amber-300 shadow-md' 
                      : 'bg-white/50 border border-gray-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-3xl">{achievement.badge}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                    {!achievement.unlocked && (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs text-gray-600">
                          <span>التقدم</span>
                          <span className="font-bold">{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <section className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 shadow-2xl text-white">
              <h2 className="text-xl font-bold mb-6">ملخص الأداء</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity size={18} />
                    <span>مستوى النشاط</span>
                  </div>
                  <span className="font-bold">ممتاز</span>
                </div>
                <div className="h-px bg-white/20"></div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                    <span>التقييم العام</span>
                  </div>
                  <span className="font-bold">{user.rating}/5.0</span>
                </div>
                <div className="h-px bg-white/20"></div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Brain size={18} />
                    <span>سنوات الخبرة</span>
                  </div>
                  <span className="font-bold">{user.yearsExperience} سنة</span>
                </div>
                <div className="h-px bg-white/20"></div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} />
                    <span>الطلاب الجدد</span>
                  </div>
                  <span className="font-bold text-amber-300">+12 هذا الشهر</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-white text-emerald-600 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <BarChart3 size={18} />
                عرض التقرير الكامل
              </button>
            </section>

           
           
          </div>

        </div>
         {/* Weekly Progress Chart */}
            <section className="bg-white rounded-3xl p-6 w-[100%] shadow-xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">الأداء الأسبوعي</h2>
              <div className="space-y-3">
                {weeklyProgress.map((day, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">{day.day}</span>
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span>{day.hours} ساعات</span>
                        <span>•</span>
                        <span>{day.students} طالب</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"
                          style={{ width: `${(day.hours / 10) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                          style={{ width: `${(day.students / 52) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"></div>
                  <span className="text-sm text-gray-600">ساعات التدريس</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"></div>
                  <span className="text-sm text-gray-600">عدد الطلاب</span>
                </div>
              </div>
            </section>
      </main>
    </div>
  )
}