'use client'

import AttendanceTable from './AttendanceTable'
import MemorizationProgress from './MemorizationProgress'
import StudentProfile from './StudentProfile'
import NotificationsPanel from './NotificationsPanel'
import MessagesPanel from './MessagesPanel'

export default function StudentDashboard() {
 return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        <StudentProfile />
        
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <AttendanceTable />
          <MemorizationProgress />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <NotificationsPanel />
          <MessagesPanel />
        </div>
      </div>
    </div>
  )
}
