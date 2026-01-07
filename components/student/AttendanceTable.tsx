'use client'

const attendanceData = [
  { date: '2025-10-01', status: 'Present' },
  { date: '2025-10-02', status: 'Absent' },
  { date: '2025-10-03', status: 'Present' },
  { date: '2025-10-04', status: 'Late' },
]
interface AttendanceDay {
  date: string
  status: 'Present' | 'Absent' | 'Late'
}
export default function AttendanceTable() {
  const attendanceData: AttendanceDay[] = [
    { date: '2025-10-01', status: 'Present' },
    { date: '2025-10-02', status: 'Absent' },
    { date: '2025-10-03', status: 'Present' },
    { date: '2025-10-04', status: 'Late' },
    { date: '2025-10-05', status: 'Present' },
    { date: '2025-10-06', status: 'Present' },
  ]

  const getStatusConfig = (status: string) => {
    const config = {
      Present: { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', icon: '✓', text: 'حاضر' },
      Absent: { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', icon: '✗', text: 'غائب' },
      Late: { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', icon: '⏱', text: 'متأخر' }
    }
    return config[status as keyof typeof config] || config.Present
  }

  const stats = {
    present: attendanceData.filter(d => d.status === 'Present').length,
    absent: attendanceData.filter(d => d.status === 'Absent').length,
    late: attendanceData.filter(d => d.status === 'Late').length,
    total: attendanceData.length
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">سجل الحضور</h2>
        <div className="flex gap-2">
          <div className="text-center px-3 py-1 bg-green-50 rounded-lg">
            <div className="text-green-600 font-bold">{stats.present}</div>
            <div className="text-xs text-green-500">حاضر</div>
          </div>
          <div className="text-center px-3 py-1 bg-red-50 rounded-lg">
            <div className="text-red-600 font-bold">{stats.absent}</div>
            <div className="text-xs text-red-500">غائب</div>
          </div>
          <div className="text-center px-3 py-1 bg-amber-50 rounded-lg">
            <div className="text-amber-600 font-bold">{stats.late}</div>
            <div className="text-xs text-amber-500">متأخر</div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-right p-4 font-semibold text-gray-700">التاريخ</th>
              <th className="text-right p-4 font-semibold text-gray-700">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((day, index) => {
              const config = getStatusConfig(day.status)
              return (
                <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-gray-600 font-medium">{day.date}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.color} ${config.bg} ${config.border}`}>
                      <span>{config.icon}</span>
                      {config.text}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}