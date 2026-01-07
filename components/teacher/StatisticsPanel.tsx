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

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
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
export default function StatisticsPanel() {
  const studentsStats = [
    { name: 'أحمد', progress: 90, attendance: 95 },
    { name: 'عبد الرحمن', progress: 75, attendance: 88 },
    { name: 'محمد', progress: 60, attendance: 92 },
    { name: 'خالد', progress: 85, attendance: 98 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">الإحصاءات</h1>
        <p className="text-gray-600 mt-2">تحليل شامل لأداء الحلقة</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'إجمالي الطلبة', value: '24', trend: 'up' },
          { label: 'متوسط التقدم', value: '78%', trend: 'up' },
          { label: 'نسبة الحضور', value: '94%', trend: 'stable' },
          { label: 'الطلبة المتفوقون', value: '8', trend: 'up' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <TrendingUp className={`w-5 h-5 ${
                stat.trend === 'up' ? 'text-green-500' : 'text-gray-400'
              }`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Detailed Stats */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">تقدم الطلبة</h3>
          <div className="space-y-4">
            {studentsStats.map((student, index) => (
              <div key={student.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">{student.name}</span>
                  <span className="text-gray-900">{student.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all"
                    style={{ width: `${student.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">نسب الحضور</h3>
          <div className="space-y-4">
            {studentsStats.map((student, index) => (
              <div key={student.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">{student.name}</span>
                  <span className="text-gray-900">{student.attendance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full transition-all"
                    style={{ width: `${student.attendance}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}