'use client'
import { useState, useEffect } from 'react'
import { 
  X, Users, Clock, CheckCircle, XCircle, AlertCircle, Star,
  MessageCircle, Award, TrendingUp, Save, Send, Play, Pause,
  BookOpen, Target, Zap, ThumbsUp, ThumbsDown, Mic, Video,
  Phone, Mail, Eye, Edit, Plus, Minus, RotateCcw
} from 'lucide-react'

type AttendanceStatus = 'present' | 'absent' | 'late' | 'excused'

interface Student {
  id: number
  name: string
  avatar: string
  attendance: AttendanceStatus | null
  participation: number
  recitation: number
  homework: 'done' | 'partial' | 'not-done' | null
  oldMemorization: 'reviewed' | 'not-reviewed' | null
  oldMemorizationQuality: number
  newMemorization: string
  notes: string
  lastWeekAttendance: AttendanceStatus[]
  streak: number
}

export default function AttendanceSession() {
  const [sessionStarted, setSessionStarted] = useState(false)
  const [sessionTime, setSessionTime] = useState(0)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)

  const sessionInfo = {
    className: "حلقة التجويد المتقدم",
    time: "6:00 - 7:30 صباحاً",
    date: "الأحد، 18 نوفمبر 2024",
    room: "القاعة الكبرى",
    duration: "ساعة ونصف"
  }

  // Initial student data with proper typing
  const initialStudents: Student[] = [
    {
      id: 1,
      name: "أحمد محمد الصالح",
      avatar: "👦",
      attendance: null,
      participation: 0,
      recitation: 0,
      homework: null,
      oldMemorization: null,
      oldMemorizationQuality: 0,
      newMemorization: "",
      notes: "",
      lastWeekAttendance: ["present", "present", "present"],
      streak: 15
    },
    {
      id: 2,
      name: "فاطمة الزهراء أحمد",
      avatar: "👧",
      attendance: null,
      participation: 0,
      recitation: 0,
      homework: null,
      oldMemorization: null,
      oldMemorizationQuality: 0,
      newMemorization: "",
      notes: "",
      lastWeekAttendance: ["present", "present", "late"],
      streak: 12
    },
    {
      id: 3,
      name: "يوسف عبد الله محمود",
      avatar: "🧑",
      attendance: null,
      participation: 0,
      recitation: 0,
      homework: null,
      oldMemorization: null,
      oldMemorizationQuality: 0,
      newMemorization: "",
      notes: "",
      lastWeekAttendance: ["present", "absent", "present"],
      streak: 8
    },
    {
      id: 4,
      name: "مريم إبراهيم حسن",
      avatar: "👧",
      attendance: null,
      participation: 0,
      recitation: 0,
      homework: null,
      oldMemorization: null,
      oldMemorizationQuality: 0,
      newMemorization: "",
      notes: "",
      lastWeekAttendance: ["present", "present", "present"],
      streak: 20
    },
    {
      id: 5,
      name: "خالد السعدي",
      avatar: "👨",
      attendance: null,
      participation: 0,
      recitation: 0,
      homework: null,
      oldMemorization: null,
      oldMemorizationQuality: 0,
      newMemorization: "",
      notes: "",
      lastWeekAttendance: ["late", "present", "present"],
      streak: 5
    },
    {
      id: 6,
      name: "سارة أحمد علي",
      avatar: "👧",
      attendance: null,
      participation: 0,
      recitation: 0,
      homework: null,
      oldMemorization: null,
      oldMemorizationQuality: 0,
      newMemorization: "",
      notes: "",
      lastWeekAttendance: ["present", "present", "present"],
      streak: 18
    }
  ]

  const [students, setStudents] = useState<Student[]>(initialStudents)

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (sessionStarted) {
      interval = setInterval(() => {
        setSessionTime(prev => prev + 1)
      }, 1000)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [sessionStarted])

  const updateAttendance = (studentId: number, status: AttendanceStatus) => {
    setStudents(prevStudents => 
      prevStudents.map(s =>
        s.id === studentId ? { ...s, attendance: status } : s
      )
    )
  }

  const updateRating = (
    studentId: number,
    field: keyof Pick<Student, 'participation' | 'recitation' | 'oldMemorizationQuality'>,
    value: number
  ) => {
    setStudents(prevStudents =>
      prevStudents.map(s =>
        s.id === studentId ? { ...s, [field]: value } : s
      )
    )
  }

  const updateHomework = (studentId: number, value: 'done' | 'partial' | 'not-done') => {
    setStudents(prevStudents =>
      prevStudents.map(s =>
        s.id === studentId ? { ...s, homework: value } : s
      )
    )
  }

  const updateOldMemorization = (studentId: number, value: 'reviewed' | 'not-reviewed') => {
    setStudents(prevStudents =>
      prevStudents.map(s =>
        s.id === studentId ? { ...s, oldMemorization: value } : s
      )
    )
  }

  const updateOldMemorizationQuality = (studentId: number, value: number) => {
    setStudents(prevStudents =>
      prevStudents.map(s =>
        s.id === studentId ? { ...s, oldMemorizationQuality: value } : s
      )
    )
  }

  const updateNotes = (studentId: number, notes: string) => {
    setStudents(prevStudents =>
      prevStudents.map(s =>
        s.id === studentId ? { ...s, notes } : s
      )
    )
  }

  const updateNewMemorization = (studentId: number, text: string) => {
    setStudents(prevStudents =>
      prevStudents.map(s =>
        s.id === studentId ? { ...s, newMemorization: text } : s
      )
    )
  }

  const stats = {
    total: students.length,
    present: students.filter(s => s.attendance === 'present').length,
    absent: students.filter(s => s.attendance === 'absent').length,
    late: students.filter(s => s.attendance === 'late').length,
    excused: students.filter(s => s.attendance === 'excused').length
  }

  const getAttendanceColor = (status: AttendanceStatus) => {
    const colors = {
      present: 'bg-emerald-500',
      absent: 'bg-rose-500',
      late: 'bg-amber-500',
      excused: 'bg-blue-500'
    }
    return colors[status] || 'bg-gray-300'
  }

  const handleSaveSession = () => {
    console.log('Saving session...', students)
    alert('تم حفظ بيانات الحلقة بنجاح!')
  }

  const handleSendReport = () => {
    console.log('Sending reports...')
    alert('تم إرسال التقارير لأولياء الأمور!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 p-4 md:p-8" dir="rtl">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-teal-800 to-cyan-700 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{sessionInfo.className}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{sessionInfo.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} />
                    <span>{sessionInfo.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={18} />
                    <span>{sessionInfo.room}</span>
                  </div>
                </div>
              </div>
              <button className="p-3 bg-white/20 hover:bg-white/30 rounded-2xl transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Session Timer */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSessionStarted(!sessionStarted)}
                className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 rounded-xl hover:bg-gray-50 transition-colors font-bold"
              >
                {sessionStarted ? <Pause size={20} /> : <Play size={20} />}
                {sessionStarted ? 'إيقاف مؤقت' : 'بدء الحلقة'}
              </button>
              <div className="flex-1 bg-white/20 rounded-xl px-4 py-3 backdrop-blur-sm">
                <div className="text-sm mb-1">مدة الحلقة</div>
                <div className="text-2xl font-bold">
                  {Math.floor(sessionTime / 60)}:{(sessionTime % 60).toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 bg-gray-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
              <div className="text-sm text-gray-600">إجمالي الطلاب</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{stats.present}</div>
              <div className="text-sm text-gray-600">حاضرون</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">{stats.absent}</div>
              <div className="text-sm text-gray-600">غائبون</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">{stats.late}</div>
              <div className="text-sm text-gray-600">متأخرون</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.excused}</div>
              <div className="text-sm text-gray-600">بعذر</div>
            </div>
          </div>
        </div>
      </div>

      {/* Students List */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {students.map((student) => (
            <div key={student.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
              {/* Student Header */}
              <div className="p-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-3xl">
                      {student.avatar}
                    </div>
                    {student.streak > 0 && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        {student.streak}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{student.name}</h3>
                    <div className="flex items-center gap-2">
                      {student.lastWeekAttendance.map((status, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${getAttendanceColor(status)}`}
                          title={status}
                        />
                      ))}
                      <span className="text-xs text-gray-500 mr-2">آخر 3 حلقات</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attendance Buttons */}
              <div className="p-5 border-b border-gray-200">
                <div className="text-sm font-semibold text-gray-700 mb-3">تسجيل الحضور</div>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => updateAttendance(student.id, 'present')}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                      student.attendance === 'present'
                        ? 'bg-emerald-500 text-white shadow-lg scale-105'
                        : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                    }`}
                  >
                    <CheckCircle size={24} />
                    <span className="text-xs font-bold">حاضر</span>
                  </button>
                  <button
                    onClick={() => updateAttendance(student.id, 'absent')}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                      student.attendance === 'absent'
                        ? 'bg-rose-500 text-white shadow-lg scale-105'
                        : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                    }`}
                  >
                    <XCircle size={24} />
                    <span className="text-xs font-bold">غائب</span>
                  </button>
                  <button
                    onClick={() => updateAttendance(student.id, 'late')}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                      student.attendance === 'late'
                        ? 'bg-amber-500 text-white shadow-lg scale-105'
                        : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                    }`}
                  >
                    <Clock size={24} />
                    <span className="text-xs font-bold">متأخر</span>
                  </button>
                  <button
                    onClick={() => updateAttendance(student.id, 'excused')}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                      student.attendance === 'excused'
                        ? 'bg-blue-500 text-white shadow-lg scale-105'
                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                    }`}
                  >
                    <AlertCircle size={24} />
                    <span className="text-xs font-bold">بعذر</span>
                  </button>
                </div>
              </div>

              {/* Performance Rating */}
              <div className="p-5 border-b border-gray-200 space-y-4">
                {/* Old Memorization Review */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <RotateCcw size={16} className="text-emerald-900" />
                    عرض الحفظ القديم
                  </div>
                  <div className="flex gap-2 mb-3">
                    <button
                      onClick={() => updateOldMemorization(student.id, 'reviewed')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
                        student.oldMemorization === 'reviewed'
                          ? 'bg-emerald-700 text-white'
                          : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                      }`}
                    >
                      <CheckCircle size={16} />
                      <span className="text-sm font-bold">عرض</span>
                    </button>
                    <button
                      onClick={() => updateOldMemorization(student.id, 'not-reviewed')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
                        student.oldMemorization === 'not-reviewed'
                          ? 'bg-gray-500 text-white'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <XCircle size={16} />
                      <span className="text-sm font-bold">لم يعرض</span>
                    </button>
                  </div>
                  {student.oldMemorization === 'reviewed' && (
                    <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-lg">
                      <span className="text-xs font-semibold text-emerald-700">جودة العرض</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => updateOldMemorizationQuality(student.id, star)}
                            className="transition-transform hover:scale-110"
                          >
                            <Star
                              size={18}
                              className={star <= student.oldMemorizationQuality ? 'fill-emerald-400 text-emerald-400' : 'text-gray-300'}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Participation */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">المشاركة</span>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => updateRating(student.id, 'participation', star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            size={20}
                            className={star <= student.participation ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recitation */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">التلاوة والحفظ</span>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => updateRating(student.id, 'recitation', star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            size={20}
                            className={star <= student.recitation ? 'fill-emerald-400 text-emerald-400' : 'text-gray-300'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Homework */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">الواجب المنزلي</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateHomework(student.id, 'done')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
                        student.homework === 'done'
                          ? 'bg-emerald-500 text-white'
                          : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                      }`}
                    >
                      <ThumbsUp size={16} />
                      <span className="text-sm font-bold">مكتمل</span>
                    </button>
                    <button
                      onClick={() => updateHomework(student.id, 'partial')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
                        student.homework === 'partial'
                          ? 'bg-amber-500 text-white'
                          : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                      }`}
                    >
                      <Minus size={16} />
                      <span className="text-sm font-bold">جزئي</span>
                    </button>
                    <button
                      onClick={() => updateHomework(student.id, 'not-done')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
                        student.homework === 'not-done'
                          ? 'bg-rose-500 text-white'
                          : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                      }`}
                    >
                      <ThumbsDown size={16} />
                      <span className="text-sm font-bold">غير مكتمل</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* New Memorization */}
              <div className="p-5 border-b border-gray-200">
                <div className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <BookOpen size={16} className="text-teal-500" />
                  الحفظ الجديد للحلقة القادمة
                </div>
                <textarea
                  value={student.newMemorization}
                  onChange={(e) => updateNewMemorization(student.id, e.target.value)}
                  placeholder="مثال: سورة البقرة من آية 1 إلى آية 5"
                  className="w-full p-3 bg-teal-50 border-2 border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm resize-none"
                  rows={2}
                />
              </div>

              {/* Notes */}
              <div className="p-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">ملاحظات</div>
                <textarea
                  value={student.notes}
                  onChange={(e) => updateNotes(student.id, e.target.value)}
                  placeholder="اكتب ملاحظاتك عن أداء الطالب..."
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
                  rows={2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={handleSaveSession}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 font-bold text-lg shadow-lg"
            >
              <Save size={24} />
              حفظ وإنهاء الحلقة
            </button>
            <button 
              onClick={handleSendReport}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 font-bold text-lg border-2 border-blue-200"
            >
              <Send size={24} />
              إرسال تقرير لأولياء الأمور
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}