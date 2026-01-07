'use client'

import Image from 'next/image'

export default function StudentProfile() {
  const student = {
    name: 'أحمد بن خالد',
    level: 'المستوى الثالث',
    group: 'حلقة الشيخ يوسف',
    joinDate: 'انضم منذ ٦ أشهر',
    progress: 78,
    image: '/student.png',
  }

  return (
    <div className="bg-gradient-to-l from-green-500 to-emerald-600 rounded-2xl shadow-lg p-8 text-white">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <img
            src={student.image}
            alt={student.name}
            className="w-28 h-28 rounded-2xl border-4 border-white/20 object-cover shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-right">
          <h1 className="text-2xl font-bold mb-2">{student.name}</h1>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">{student.level}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">{student.group}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">{student.joinDate}</span>
          </div>
          <p className="text-green-100">مستمر في رحلة الحفظ منذ انضمامك، وأداؤك ممتاز!</p>
        </div>
      </div>
      
      <div className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-100">التقدم العام</span>
          <span className="font-bold">{student.progress}%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${student.progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}