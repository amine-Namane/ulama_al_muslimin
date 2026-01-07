'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Users, 
  ClipboardList, 
  BarChart3, 
  MessageSquare, 
  Bell, 
  LogOut, 
  Menu, 
  X,
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  Star,
  TrendingUp,
  Target,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'

interface Student {
  id: number
  name: string
  level: string
  progress: number
  attendance: number
  lastActive: string
  avatar?: string
}

interface Evaluation {
  id: number
  studentId: number
  studentName: string
  memorized: string
  notes: string
  date: string
  rating: number
}

interface Comment {
  id: number
  student: string
  text: string
  date: string
  type: 'positive' | 'constructive' | 'warning'
}
export default function StudentsSection() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const students: Student[] = [
    { id: 1, name: 'أحمد بن خالد', level: 'المستوى الثالث', progress: 90, attendance: 95, lastActive: '2024-01-15' },
    { id: 2, name: 'عبد الرحمن بن يوسف', level: 'المستوى الثاني', progress: 75, attendance: 88, lastActive: '2024-01-14' },
    { id: 3, name: 'محمد بن علي', level: 'المستوى الأول', progress: 60, attendance: 92, lastActive: '2024-01-15' },
    { id: 4, name: 'خالد بن سعيد', level: 'المستوى الثالث', progress: 85, attendance: 98, lastActive: '2024-01-13' },
  ]

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة الطلبة</h1>
          <p className="text-gray-600 mt-2">عرض وإدارة طلبة الحلقة</p>
        </div>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2 shadow-lg">
          <Plus className="w-5 h-5" />
          إضافة طالب
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="ابحث عن طالب..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
          <Filter className="w-5 h-5" />
          <span>تصفية</span>
        </button>
      </div>

      {/* Students Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStudents.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-2xl p-6 shadow-sm border-2 transition-all cursor-pointer ${
              selectedStudent?.id === student.id 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setSelectedStudent(student)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">
                  {student.name.split(' ')[0][0]}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{student.name}</h3>
                  <p className="text-gray-500 text-sm">{student.level}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">التقدم</span>
                  <span className="font-medium text-gray-900">{student.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${student.progress}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">الحضور</span>
                  <span className="font-medium text-gray-900">{student.attendance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${student.attendance}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>آخر نشاط: {student.lastActive}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}