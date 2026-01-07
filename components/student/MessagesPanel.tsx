'use client'

import { useState } from 'react'
interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

export default function MessagesPanel() {
   const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      sender: 'الشيخ يوسف', 
      content: 'أحسنت في مراجعة اليوم، تابع بهذا المستوى.', 
      timestamp: '10:30 ص' 
    },
    { 
      id: 2, 
      sender: 'الإدارة', 
      content: 'يرجى تسليم التقرير الشهري غدًا.', 
      timestamp: '09:15 ص' 
    },
  ])

  const [newMessage, setNewMessage] = useState('')

  const sendMessage = () => {
    if (newMessage.trim() === '') return
    const newMsg: Message = {
      id: Date.now(),
      sender: 'أنا',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    }
    setMessages([newMsg, ...messages])
    setNewMessage('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[500px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">الرسائل</h2>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.sender === 'أنا' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                msg.sender === 'أنا'
                  ? 'bg-green-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.content}</p>
            </div>
            <div className={`flex items-center gap-2 mt-1 text-xs text-gray-500 ${msg.sender === 'أنا' ? 'flex-row-reverse' : ''}`}>
              <span>{msg.sender}</span>
              <span>•</span>
              <span>{msg.timestamp}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-4 border-t border-gray-200">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="اكتب رسالتك..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={sendMessage}
          disabled={!newMessage.trim()}
          className="bg-green-600 text-white rounded-xl px-6 py-3 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          <span>إرسال</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  )
}