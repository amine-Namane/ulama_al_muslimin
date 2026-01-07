'use client'

export default function MemorizationProgress() {
    const progress = 78
  const segments = [
    { name: 'الربع الأخير', progress: 90, color: '#10b981' },
    { name: 'الربع الثالث', progress: 85, color: '#34d399' },
    { name: 'الربع الثاني', progress: 75, color: '#6ee7b7' },
    { name: 'الربع الأول', progress: 62, color: '#a7f3d0' }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6">تقدم الحفظ</h2>
      
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90 transform">
            <circle
              cx="96"
              cy="96"
              r="84"
              stroke="#f3f4f6"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="96"
              cy="96"
              r="84"
              stroke="#10b981"
              strokeWidth="8"
              fill="none"
              strokeDasharray={528}
              strokeDashoffset={528 - (528 * progress) / 100}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute text-center">
            <span className="text-3xl font-bold text-gray-800 block">{progress}%</span>
            <span className="text-sm text-gray-500">الإجمالي</span>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {segments.map((segment, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{segment.name}</span>
                <span className="text-sm text-gray-500">{segment.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${segment.progress}%`, backgroundColor: segment.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}