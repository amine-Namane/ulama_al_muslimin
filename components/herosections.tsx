import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Herosections() {
  const [open, setOpen] = useState(false)
  

  return (
    <div >
    
      <section className="relative bg-gradient-to-b from-emerald-900 via-teal-800 to-cyan-700 text-white pt-32 pb-24 overflow-hidden ">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-right"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              نظام متكامل <span className="text-amber-300">لإدارة المدرسة القرآنية لجمعية العلماء المسلمين</span>
            </h1>
            <p className="text-teal-50 text-lg mb-8 leading-relaxed">
              منصة شاملة تمكّن <span className="font-semibold text-amber-200">الشيوخ</span> من إدارة فصولهم، ومتابعة تقدم <span className="font-semibold text-amber-200">الطلاب</span>، 
              والتواصل مع <span className="font-semibold text-amber-200">أولياء الأمور</span> — كل ذلك في مكان واحد.  
              إدارة الحضور، متابعة حفظ القرآن الكريم، جدولة الحصص، والتواصل السلس.
            </p>
            
            {/* Features list
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-teal-100">لوحة تحكم الشيخ</span>
                <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-100">متابعة تقدم الطلاب</span>
                <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-100">بوابة أولياء الأمور</span>
                <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-100">إدارة الحضور والغياب</span>
                <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
              </div>
            </div> */}
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-400 text-emerald-900 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-amber-300 transition">
                ابدأ تجربة مجانية
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-emerald-900 transition">
                شاهد العرض التوضيحي
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <svg
              width="500"
              height="420"
              viewBox="0 0 500 420"
              className="max-w-full drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="250" cy="210" r="190" fill="#FEF3C7" opacity="0.2"/>
              
              <rect x="100" y="120" width="300" height="220" fill="#ffffff" rx="12" stroke="#0D9488" strokeWidth="3"/>
              
              <rect x="100" y="120" width="300" height="50" fill="#0D9488" rx="12"/>
              <circle cx="130" cy="145" r="8" fill="#FCD34D"/>
              <rect x="150" y="138" width="80" height="6" fill="#ffffff" rx="3" opacity="0.8"/>
              <rect x="150" y="150" width="60" height="4" fill="#ffffff" rx="2" opacity="0.6"/>
              
              <rect x="120" y="190" width="120" height="60" fill="#FCD34D" rx="8" opacity="0.3"/>
              <rect x="120" y="196" width="50" height="8" fill="#0D9488" rx="2"/>
              <rect x="120" y="210" width="80" height="6" fill="#0D9488" rx="2" opacity="0.7"/>
              <rect x="120" y="222" width="60" height="6" fill="#0D9488" rx="2" opacity="0.7"/>
              
              <rect x="260" y="190" width="120" height="60" fill="#FCD34D" rx="8" opacity="0.3"/>
              <rect x="260" y="196" width="50" height="8" fill="#0D9488" rx="2"/>
              <rect x="260" y="210" width="80" height="6" fill="#0D9488" rx="2" opacity="0.7"/>
              <rect x="260" y="222" width="60" height="6" fill="#0D9488" rx="2" opacity="0.7"/>
              
              <rect x="120" y="270" width="260" height="50" fill="#FCD34D" rx="8" opacity="0.2"/>
              <rect x="130" y="282" width="70" height="8" fill="#0D9488" rx="2"/>
              <rect x="130" y="296" width="100" height="6" fill="#0D9488" rx="2" opacity="0.7"/>
              
              {/* User icons representing different roles */}
              {/* Sheikh */}
              <circle cx="80" cy="200" r="25" fill="#0D9488"/>
              <circle cx="80" cy="190" r="12" fill="#FCD34D"/>
              <path d="M 65 210 Q 80 200 95 210" fill="#FCD34D"/>
              <rect x="68" y="230" width="30" height="4" fill="#0D9488" rx="2"/>
              <text x="72" y="242" fontSize="10" fill="#0D9488" fontWeight="bold">شيخ</text>
              
              {/* Student */}
              <circle cx="420" cy="200" r="25" fill="#0D9488"/>
              <circle cx="420" cy="190" r="12" fill="#FCD34D"/>
              <path d="M 405 210 Q 420 200 435 210" fill="#FCD34D"/>
              <rect x="405" y="230" width="35" height="4" fill="#0D9488" rx="2"/>
              <text x="404" y="242" fontSize="10" fill="#0D9488" fontWeight="bold">طالب</text>
              
              {/* Parent */}
              <circle cx="250" cy="380" r="25" fill="#0D9488"/>
              <circle cx="250" cy="370" r="12" fill="#FCD34D"/>
              <path d="M 235 390 Q 250 380 265 390" fill="#FCD34D"/>
              <rect x="232" y="408" width="40" height="4" fill="#0D9488" rx="2"/>
              <text x="220" y="420" fontSize="10" fill="#0D9488" fontWeight="bold">ولي الأمر</text>
              
              {/* Connection lines */}
              <line x1="105" y1="200" x2="100" y2="200" stroke="#FCD34D" strokeWidth="2" strokeDasharray="4"/>
              <line x1="400" y1="200" x2="415" y2="200" stroke="#FCD34D" strokeWidth="2" strokeDasharray="4"/>
              <line x1="250" y1="340" x2="250" y2="355" stroke="#FCD34D" strokeWidth="2" strokeDasharray="4"/>
              
              {/* Decorative Quran symbol */}
              <path d="M 30 80 Q 30 60 45 60 L 55 60 Q 70 60 70 80 L 70 90 Q 70 100 60 100 L 40 100 Q 30 100 30 90 Z" fill="#FCD34D"/>
              <line x1="40" y1="70" x2="60" y2="70" stroke="#0D9488" strokeWidth="2"/>
              <line x1="40" y1="80" x2="60" y2="80" stroke="#0D9488" strokeWidth="2"/>
              <line x1="40" y1="90" x2="60" y2="90" stroke="#0D9488" strokeWidth="2"/>
              
              {/* Stars */}
              <circle cx="450" cy="100" r="4" fill="#FCD34D"/>
              <circle cx="470" cy="140" r="3" fill="#FCD34D"/>
              <circle cx="30" cy="320" r="3" fill="#FCD34D"/>
              <circle cx="60" cy="360" r="4" fill="#FCD34D"/>
            </svg>
          </motion.div>
        </div>
        
        {/* Wave divider */}
        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,192L60,181.3C120,171,240,149,360,128C480,107,600,85,720,112C840,139,960,213,1080,234.7C1200,256,1320,224,1380,208L1440,192L1440,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  )
}