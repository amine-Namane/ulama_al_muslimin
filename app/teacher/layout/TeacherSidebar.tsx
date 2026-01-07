'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Users, 
  ClipboardList, 
  BarChart3, 
  MessageSquare, 
  X 
} from 'lucide-react'

interface SidebarProps {
  open: boolean
  onClose: () => void
  currentSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({
  open,
  onClose,
  currentSection,
  onSectionChange,
}: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: Home },
    { id: 'students', label: 'الطلبة', icon: Users },
    { id: 'evaluations', label: 'التقييمات', icon: ClipboardList },
    { id: 'statistics', label: 'الإحصاءات', icon: BarChart3 },
    { id: 'comments', label: 'الملاحظات', icon: MessageSquare },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r border-gray-200 hidden lg:block fixed h-[calc(100vh-80px)]">
        <div className="p-6">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = currentSection === item.id
              
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-green-50 text-green-700 border border-green-200 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full ml-auto"></div>
                  )}
                </button>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.aside
              className="fixed right-0 top-0 w-80 bg-white h-full shadow-xl z-50 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">القائمة</h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon
                    const isActive = currentSection === item.id
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSectionChange(item.id)
                          onClose()
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}