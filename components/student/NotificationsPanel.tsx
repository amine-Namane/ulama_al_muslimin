'use client'

import { useState } from "react"


interface Notification {
  id: number
  text: string
  date: string
  type: 'info' | 'warning' | 'success'
  read: boolean
}
export default function NotificationsPanel() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { 
      id: 1, 
      text: 'اختبار يوم الثلاثاء القادم بعد صلاة المغرب.', 
      date: '2025-10-08', 
      type: 'warning', 
      read: false 
    },
    { 
      id: 2, 
      text: 'تم رفع تقييمك الأسبوعي من قبل الشيخ يوسف.', 
      date: '2025-10-06', 
      type: 'success', 
      read: false 
    },
    { 
      id: 3, 
      text: 'يرجى إحضار المصحف الخاص بك غدًا.', 
      date: '2025-10-05', 
      type: 'info', 
      read: true 
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const getTypeIcon = (type: string) => {
    const icons = {
      info: '💡',
      warning: '⚠️',
      success: '✅'
    }
    return icons[type as keyof typeof icons] || '💡'
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">التنبيهات</h2>
        {unreadCount > 0 && (
          <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">
            {unreadCount} جديد
          </span>
        )}
      </div>

      {notifications.length > 0 ? (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`border rounded-xl p-4 transition-all cursor-pointer ${
                notification.read 
                  ? 'border-gray-200 bg-gray-50' 
                  : 'border-green-200 bg-green-50 border-l-4 border-l-green-400'
              } hover:shadow-md`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex items-start gap-3">
                <span className="text-lg mt-1">{getTypeIcon(notification.type)}</span>
                <div className="flex-1">
                  <p className="text-gray-800 leading-relaxed">{notification.text}</p>
                  <span className="text-sm text-gray-500 block mt-2">{notification.date}</span>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">📭</div>
          <p className="text-gray-500">لا توجد تنبيهات حالياً</p>
        </div>
      )}
    </div>
  )
}