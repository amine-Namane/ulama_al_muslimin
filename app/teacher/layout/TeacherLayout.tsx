'use client'

import { useState } from 'react'
import Navbar from './TeacherNavbar'
import Sidebar from './TeacherSidebar'

interface LayoutProps {
  children: (currentSection: string) => React.ReactNode
}

export default function TeacherLayout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('dashboard')

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onSectionChange={(section) => {
            setCurrentSection(section)
            setSidebarOpen(false)
          }}
          currentSection={currentSection} // Changed from activeSection to currentSection
        />

        {/* المحتوى */}
        <main className="flex-1 bg-gray-50 p-6">{children(currentSection)}</main>
      </div>
    </div>
  )
}