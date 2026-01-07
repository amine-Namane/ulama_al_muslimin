'use client'
import { useState } from 'react'
import { 
  Bell, Search, Settings, Menu, X, Home, Users, BookOpen, Calendar, 
  BarChart3, MessageCircle, Award, Clock, ChevronLeft, Download,
  Plus, Eye, Filter, MoreVertical, Mail, Phone, Star, TrendingUp,
  CheckCircle, AlertCircle, Edit, Trash2, Send, FileText, Target
} from 'lucide-react'

export default function StudentsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('students')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterLevel, setFilterLevel] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // grid or list

  const students = [
    {
      id: 1,
      name: "أحمد محمد الصالح",
      avatar: "👦",
      level: "متقدم",
      progress: 95,
      attendance: 98,
      streak: 45,
      joinDate: "2024-01-15",
      phone: "0551234567",
      email: "ahmed@example.com",
      parent: "محمد الصالح",
      parentPhone: "0551234568",
      age: 14,
      currentSurah: "البقرة",
      completedJuz: 15,
      nextSession: "اليوم 6:00 ص",
      status: "active",
      certificates: 3,
      lastActivity: "منذ ساعة",
      notes: "طالب مجتهد ومتميز"
    },
    {
      id: 2,
      name: "فاطمة الزهراء أحمد",
      avatar: "👧",
      level: "متقدم",
      progress: 92,
      attendance: 95,
      streak: 38,
      joinDate: "2024-02-10",
      phone: "0559876543",
      email: "fatima@example.com",
      parent: "أحمد علي",
      parentPhone: "0559876544",
      age: 13,
      currentSurah: "آل عمران",
      completedJuz: 12,
      nextSession: "غداً 4:00 م",
      status: "active",
      certificates: 2,
      lastActivity: "منذ 3 ساعات",
      notes: "صوت جميل في التلاوة"
    },
    {
      id: 3,
      name: "يوسف عبد الله",
      avatar: "🧑",
      level: "متوسط",
      progress: 88,
      attendance: 92,
      streak: 30,
      joinDate: "2024-03-05",
      phone: "0557654321",
      email: "youssef@example.com",
      parent: "عبد الله محمد",
      parentPhone: "0557654322",
      age: 12,
      currentSurah: "النساء",
      completedJuz: 8,
      nextSession: "اليوم 7:00 م",
      status: "active",
      certificates: 2,
      lastActivity: "منذ يوم",
      notes: "يحتاج تحسين في التجويد"
    },
    {
      id: 4,
      name: "خالد السعدي",
      avatar: "👨",
      level: "مبتدئ",
      progress: 45,
      attendance: 85,
      streak: 15,
      joinDate: "2024-05-20",
      phone: "0553456789",
      email: "khaled@example.com",
      parent: "السعدي أحمد",
      parentPhone: "0553456790",
      age: 10,
      currentSurah: "الفاتحة",
      completedJuz: 0,
      nextSession: "غداً 5:00 م",
      status: "active",
      certificates: 0,
      lastActivity: "منذ يومين",
      notes: "طالب جديد ومجتهد"
    },
    {
      id: 5,
      name: "مريم إبراهيم",
      avatar: "👧",
      level: "متوسط",
      progress: 75,
      attendance: 88,
      streak: 22,
      joinDate: "2024-04-12",
      phone: "0558765432",
      email: "mariam@example.com",
      parent: "إبراهيم حسن",
      parentPhone: "0558765433",
      age: 11,
      currentSurah: "المائدة",
      completedJuz: 5,
      nextSession: "اليوم 6:30 م",
      status: "active",
      certificates: 1,
      lastActivity: "منذ 5 ساعات",
      notes: "حفظ سريع وجيد"
    },
    {
      id: 6,
      name: "عمر الحسني",
      avatar: "👦",
      level: "مبتدئ",
      progress: 35,
      attendance: 78,
      streak: 8,
      joinDate: "2024-06-01",
      phone: "0554567890",
      email: "omar@example.com",
      parent: "الحسني محمود",
      parentPhone: "0554567891",
      age: 9,
      currentSurah: "الناس",
      completedJuz: 0,
      nextSession: "غداً 6:00 م",
      status: "inactive",
      certificates: 0,
      lastActivity: "منذ أسبوع",
      notes: "غياب متكرر مؤخراً"
    }
  ]

  const stats = [
    { icon: Users, label: "إجمالي الطلاب", value: "156", color: "blue" },
    { icon: TrendingUp, label: "الطلاب النشطون", value: "148", color: "emerald" },
    { icon: Award, label: "المتميزون", value: "42", color: "purple" },
    { icon: AlertCircle, label: "يحتاجون متابعة", value: "8", color: "amber" }
  ]

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.includes(searchQuery) || 
                         student.phone.includes(searchQuery) ||
                         student.email.includes(searchQuery)
    const matchesLevel = filterLevel === 'all' || student.level === filterLevel
    return matchesSearch && matchesLevel
  })

  const menuItems = [
    { icon: Home, label: "الرئيسية", value: "dashboard" },
    { icon: Users, label: "الطلاب", value: "students", badge: 156 },
    { icon: BookOpen, label: "الحلقات", value: "classes" },
    { icon: Calendar, label: "الجدول", value: "schedule" },
    { icon: BarChart3, label: "التقارير", value: "reports" },
    { icon: MessageCircle, label: "الرسائل", value: "messages", badge: 8 },
    { icon: Award, label: "الإنجازات", value: "achievements" },
    { icon: Settings, label: "الإعدادات", value: "settings" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50" dir="rtl">
      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full bg-gradient-to-b from-emerald-900 to-teal-800 text-white transition-all duration-300 z-50 ${sidebarOpen ? 'w-80' : 'w-20'} shadow-2xl`}>
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between mb-8">
            {sidebarOpen && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl font-bold">
                  📖
                </div>
                <div>
                  <div className="font-bold text-lg">منصة الشيوخ</div>
                  <div className="text-xs text-emerald-200">نظام إدارة الحلقات</div>
                </div>
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg">
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {sidebarOpen && (
            <div className="bg-white/10 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl">
                  👨‍🏫
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">الشيخ محمد الأمين</div>
                  <div className="text-xs text-emerald-200">معلم قرآن متخصص</div>
                </div>
              </div>
            </div>
          )}

          <nav className="flex-1 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.value}
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
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'mr-80' : 'mr-20'} p-8`}>
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">إدارة الطلاب</h1>
            <p className="text-gray-600">عرض ومتابعة جميع الطلاب المسجلين في الحلقات</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-600 font-semibold shadow-lg">
              <Plus size={20} />
              إضافة طالب جديد
            </button>
            <button className="p-3 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all">
              <Download size={22} className="text-gray-600" />
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                  stat.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                  'bg-amber-50 text-amber-600'
                }`}>
                  <stat.icon size={28} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن طالب بالاسم، الهاتف أو البريد..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">جميع المستويات</option>
              <option value="مبتدئ">مبتدئ</option>
              <option value="متوسط">متوسط</option>
              <option value="متقدم">متقدم</option>
            </select>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 rounded-xl transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Filter size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 rounded-xl transition-all ${
                  viewMode === 'list' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FileText size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Students Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student) => (
              <div key={student.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-3xl">
                        {student.avatar}
                      </div>
                      {student.streak > 0 && (
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {student.streak}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-500">{student.age} سنة</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical size={18} className="text-gray-600" />
                  </button>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      student.level === 'متقدم' ? 'bg-emerald-100 text-emerald-700' :
                      student.level === 'متوسط' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {student.level}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      student.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {student.status === 'active' ? 'نشط' : 'غير نشط'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">التقدم الكلي</span>
                      <span className="font-bold text-emerald-600">{student.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <CheckCircle size={16} className="text-emerald-500" />
                      <span>الحضور: {student.attendance}%</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Award size={16} className="text-amber-500" />
                      <span>{student.certificates} شهادات</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 space-y-1">
                    <p className="text-sm text-gray-600">
                      <strong>السورة الحالية:</strong> {student.currentSurah}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>أجزاء مكتملة:</strong> {student.completedJuz} جزء
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>الجلسة القادمة:</strong> {student.nextSession}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors font-semibold">
                    <Eye size={16} />
                    عرض
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors font-semibold">
                    <MessageCircle size={16} />
                    تواصل
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">الطالب</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">المستوى</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">التقدم</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">الحضور</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">الهاتف</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">الحالة</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, i) => (
                  <tr key={student.id} className={`border-t border-gray-100 hover:bg-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-xl">
                          {student.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.age} سنة</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        student.level === 'متقدم' ? 'bg-emerald-100 text-emerald-700' :
                        student.level === 'متوسط' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {student.level}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-700">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-700">{student.attendance}%</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{student.phone}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        student.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {student.status === 'active' ? 'نشط' : 'غير نشط'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                          <Eye size={18} className="text-emerald-600" />
                        </button>
                        <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                          <MessageCircle size={18} className="text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-amber-50 rounded-lg transition-colors">
                          <Edit size={18} className="text-amber-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}