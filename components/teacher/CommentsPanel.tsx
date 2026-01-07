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
export default function CommentsPanel() {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, student: 'أحمد بن خالد', text: 'أداء ممتاز هذا الأسبوع مع تحسن ملحوظ في التجويد.', date: '2024-01-15', type: 'positive' },
    { id: 2, student: 'محمد بن علي', text: 'يحتاج إلى مراجعة الجزء السابق وتكرار الحفظ.', date: '2024-01-14', type: 'constructive' },
    { id: 3, student: 'عبد الرحمن', text: 'الانتباه أثناء الشرح يحتاج تحسين.', date: '2024-01-13', type: 'warning' },
  ])

  const [newComment, setNewComment] = useState({
    student: '',
    text: '',
    type: 'positive' as 'positive' | 'constructive' | 'warning'
  })

  const addComment = () => {
    if (!newComment.student || !newComment.text) return
    
    const comment: Comment = {
      id: Date.now(),
      student: newComment.student,
      text: newComment.text,
      date: new Date().toISOString().split('T')[0],
      type: newComment.type
    }
    
    setComments([comment, ...comments])
    setNewComment({ student: '', text: '', type: 'positive' })
  }

  const getTypeConfig = (type: string) => {
    const config = {
      positive: { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', icon: CheckCircle },
      constructive: { color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', icon: Target },
      warning: { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', icon: AlertCircle }
    }
    return config[type as keyof typeof config] || config.positive
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">الملاحظات</h1>
        <p className="text-gray-600 mt-2">إدارة ملاحظات الشيخ للطلبة</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Add Comment Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">إضافة ملاحظة جديدة</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الطالب</label>
              <select
                value={newComment.student}
                onChange={(e) => setNewComment({ ...newComment, student: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">اختر الطالب</option>
                <option value="أحمد بن خالد">أحمد بن خالد</option>
                <option value="محمد بن علي">محمد بن علي</option>
                <option value="عبد الرحمن">عبد الرحمن</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">نوع الملاحظة</label>
              <div className="flex gap-2">
                {[
                  { value: 'positive', label: 'إيجابية', color: 'green' },
                  { value: 'constructive', label: 'بناءة', color: 'blue' },
                  { value: 'warning', label: 'تنبيه', color: 'amber' },
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setNewComment({ ...newComment, type: type.value as any })}
                    className={`flex-1 py-2 px-3 rounded-lg border transition-all ${
                      newComment.type === type.value
                        ? `bg-${type.color}-100 border-${type.color}-500 text-${type.color}-700`
                        : 'bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الملاحظة</label>
              <textarea
                placeholder="اكتب ملاحظتك هنا..."
                value={newComment.text}
                onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={addComment}
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-medium shadow-lg"
            >
              إضافة الملاحظة
            </button>
          </div>
        </div>

        {/* Comments List */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">الملاحظات السابقة</h2>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              عرض الكل
            </button>
          </div>

          <div className="space-y-4">
            {comments.map((comment, index) => {
              const config = getTypeConfig(comment.type)
              const Icon = config.icon
              
              return (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 border rounded-xl transition-all ${config.bg} ${config.border}`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 mt-0.5 ${config.color}`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{comment.student}</span>
                        <span className="text-gray-500 text-sm">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}