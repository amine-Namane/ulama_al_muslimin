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
export default function EvaluationForm() {
 const evaluations: Evaluation[] = [
    { id: 1, studentId: 1, studentName: 'أحمد بن خالد', memorized: 'من آية 1 إلى 10 من سورة الكهف', notes: 'أداء ممتاز مع تجويد جيد', date: '2024-01-15', rating: 5 },
    { id: 2, studentId: 2, studentName: 'عبد الرحمن بن يوسف', memorized: 'مراجعة سورة البقرة من ١-٥٠', notes: 'يحتاج تحسين في المدود', date: '2024-01-14', rating: 4 },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Evaluation submitted:', formData)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">التقييمات</h1>
        <p className="text-gray-600 mt-2">إدارة وتتبع تقييمات الطلبة</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Evaluation Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">تقييم جديد</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الطالب</label>
              <select
                value={formData.student}
                onChange={(e) => setFormData({ ...formData, student: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">اختر الطالب</option>
                <option value="1">أحمد بن خالد</option>
                <option value="2">عبد الرحمن بن يوسف</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ما تم حفظه</label>
              <input
                type="text"
                placeholder="مثلاً: من آية 1 إلى 10 من سورة الكهف"
                value={formData.memorized}
                onChange={(e) => setFormData({ ...formData, memorized: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">التقييم</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= formData.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ملاحظات إضافية</label>
              <textarea
                placeholder="ملاحظات حول الأداء أو areas for improvement..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-medium shadow-lg"
            >
              حفظ التقييم
            </button>
          </form>
        </div>

        {/* Recent Evaluations */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">التقييمات الحديثة</h2>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              عرض الكل
            </button>
          </div>

          <div className="space-y-4">
            {evaluations.map((evaluation, index) => (
              <motion.div
                key={evaluation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-gray-200 rounded-xl hover:border-green-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{evaluation.studentName}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < evaluation.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-2">{evaluation.memorized}</p>
                <p className="text-gray-600 text-sm mb-3">{evaluation.notes}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{evaluation.date}</span>
                  <button className="text-green-600 hover:text-green-700">عرض التفاصيل</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}