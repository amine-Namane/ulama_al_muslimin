'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Users, MapPin, BookOpen, Award, ChevronLeft, Star, CheckCircle, Sun, Snowflake, Leaf, Wind, User, Mosque, GraduationCap, Trophy } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const weeklyPrograms = [
  {
    id: 'W001',
    name: 'برنامج الحفظ المكثف',
    description: 'برنامج أسبوعي مكثف لحفظ القرآن الكريم مع متابعة يومية ومراجعة مستمرة',
    shortDescription: 'حفظ مكثف مع متابعة فردية وتصحيح التلاوة',
    schedule: 'السبت - الخميس',
    time: 'بعد صلاة الفجر (5:30 - 7:00 صباحاً)',
    duration: 'ساعة ونصف يومياً',
    location: 'المسجد الكبير - القاعة الرئيسية',
    targetAge: 'جميع الأعمار',
    maxStudents: 25,
    currentStudents: 18,
    level: 'متقدم',
    features: [
      'حفظ صفحة واحدة يومياً',
      'مراجعة الحفظ السابق',
      'تصحيح التلاوة والتجويد',
      'متابعة فردية لكل طالب'
    ],
    sheikh: 'الشيخ محمد الأمين',
    sheikhImage: '/api/placeholder/400/300',
    programImage: '/api/placeholder/400/250',
    sheikhExperience: 'أستاذ علوم القرآن - حافظ للقرآن الكريم منذ 20 سنة',
    programIcon: BookOpen,
    price: 'مجاني',
    color: 'emerald',
    tags: ['حفظ', 'تلاوة', 'مراجعة']
  },
  {
    id: 'W002',
    name: 'برنامج التجويد للمبتدئين',
    description: 'تعلم أحكام التجويد الأساسية من الصفر مع تطبيق عملي على آيات القرآن',
    shortDescription: 'تعلم التجويد من البداية مع تطبيق عملي',
    schedule: 'الأحد - الثلاثاء - الخميس',
    time: 'بعد صلاة العصر (4:00 - 5:30 مساءً)',
    duration: 'ساعة ونصف',
    location: 'المسجد الكبير - قاعة التجويد',
    targetAge: 'من 10 سنوات فما فوق',
    maxStudents: 30,
    currentStudents: 22,
    level: 'مبتدئ',
    features: [
      'تعليم مخارج الحروف',
      'أحكام النون الساكنة والتنوين',
      'أحكام الميم الساكنة',
      'المد وأنواعه'
    ],
    sheikh: 'الشيخ عبد الرحمان الجزائري',
    sheikhImage: '/api/placeholder/400/300',
    programImage: '/api/placeholder/400/250',
    sheikhExperience: 'عالم في القراءات العشر - مجاز بالسند المتصل',
    programIcon: GraduationCap,
    price: 'مجاني',
    color: 'teal',
    tags: ['تجويد', 'مبتدئين', 'قراءة']
  },
  {
    id: 'W003',
    name: 'برنامج القرآن للأطفال',
    description: 'برنامج تفاعلي ممتع لتعليم الأطفال القرآن الكريم بطريقة مبسطة وجذابة',
    shortDescription: 'تعليم الأطفال القرآن بالألعاب والأنشطة التفاعلية',
    schedule: 'السبت - الإثنين - الأربعاء',
    time: '4:00 - 5:00 مساءً',
    duration: 'ساعة واحدة',
    location: 'قاعة الأطفال - الطابق الثاني',
    targetAge: '6-12 سنة',
    maxStudents: 35,
    currentStudents: 28,
    level: 'أطفال',
    features: [
      'تعليم بالألعاب التعليمية',
      'حفظ السور القصيرة',
      'قصص القرآن للأطفال',
      'مسابقات وجوائز تشجيعية'
    ],
    sheikh: 'الأستاذ أحمد بوعزيز',
    sheikhImage: '/api/placeholder/400/300',
    programImage: '/api/placeholder/400/250',
    sheikhExperience: 'مختص في تعليم الأطفال القرآن - 15 سنة خبرة',
    programIcon: Trophy,
    price: 'مجاني',
    color: 'amber',
    tags: ['أطفال', 'تفاعلي', 'تسلية']
  },
  {
    id: 'W004',
    name: 'برنامج النساء - التحفيظ والتفسير',
    description: 'برنامج خاص بالأخوات يجمع بين حفظ القرآن وفهم معانيه',
    shortDescription: 'برنامج نسائي شامل للتحفيظ والفهم والتفسير',
    schedule: 'الأحد - الثلاثاء - الخميس',
    time: 'بعد صلاة الظهر (1:30 - 3:00 مساءً)',
    duration: 'ساعة ونصف',
    location: 'قسم النساء - الطابق الثالث',
    targetAge: 'السيدات فقط',
    maxStudents: 30,
    currentStudents: 25,
    level: 'جميع المستويات',
    features: [
      'حلقات تحفيظ خاصة',
      'دروس في التفسير الميسر',
      'أحكام التلاوة والتجويد',
      'بيئة نسائية مريحة'
    ],
    sheikh: 'الأستاذة فاطمة بن علي',
    sheikhImage: '/api/placeholder/400/300',
    programImage: '/api/placeholder/400/250',
    sheikhExperience: 'مجازة في القرآن والتفسير - معلمة قرآن منذ 12 سنة',
    programIcon: Users,
    price: 'مجاني',
    color: 'rose',
    tags: ['نساء', 'تفسير', 'حفظ']
  },
  {
    id: 'W005',
    name: 'برنامج المراجعة والإتقان',
    description: 'مخصص لمن أتم حفظ القرآن ويريد المراجعة والإتقان',
    shortDescription: 'مراجعة وإتقان للقرآن الكريم مع إجازة',
    schedule: 'يومياً',
    time: 'بعد صلاة المغرب (6:00 - 7:30 مساءً)',
    duration: 'ساعة ونصف',
    location: 'المسجد الكبير - القاعة الرئيسية',
    targetAge: 'الحفاظ',
    maxStudents: 20,
    currentStudents: 15,
    level: 'متقدم',
    features: [
      'مراجعة جزء كامل يومياً',
      'ضبط الحفظ والإتقان',
      'تصحيح الأخطاء',
      'إجازة القرآن الكريم'
    ],
    sheikh: 'الشيخ يوسف العربي',
    sheikhImage: '/api/placeholder/400/300',
    programImage: '/api/placeholder/400/250',
    sheikhExperience: 'مجاز بالإسناد المتصل - حافظ منذ 30 سنة',
    programIcon: Award,
    price: 'مجاني',
    color: 'emerald',
    tags: ['مراجعة', 'إتقان', 'إجازة']
  },
   {
    id: 'W006',
    name: 'حلقة الحديث النبوي',
    description: 'دراسة الأحاديث النبوية الشريفة مع شرحها وفهم دلالاتها وعلوم الحديث',
    shortDescription: 'دراسة الأحاديث النبوية مع شرح وعلوم الحديث',
    schedule: 'الاثنين - الأربعاء - الجمعة',
    time: 'بعد صلاة العشاء (7:30 - 9:00 مساءً)',
    duration: 'ساعة ونصف',
    location: 'المسجد الكبير - مكتبة الحديث',
    targetAge: 'من 15 سنة فما فوق',
    maxStudents: 40,
    currentStudents: 32,
    level: 'جميع المستويات',
    features: [
      'دراسة الأحاديث الصحيحة',
      'شرح مصطلحات علم الحديث',
      'فقه الأحاديث ودلالاتها',
      'تطبيقات عملية من السنة',
      'محاضرات في سيرة النبي ﷺ',
      'مناقشات علمية وفتاوى'
    ],
    sheikh: 'الشيخ محمود الحديثي',
    sheikhImage: '/',
    programImage: 'https://hadithshop.com/editions-al-hadith/46-sahih-muslim-version-integrale-6-volumes-imam-muslim-editions-al-hadith-9782875453310.html',
    sheikhExperience: 'متخصص في علوم الحديث - مجاز في رواية الحديث',
    programIcon:Award ,
    price: 'مجاني',
    color: 'indigo',
    tags: ['حديث', 'سنة', 'فقه', 'سيرة']
  },
]

const seasonalPrograms = [
  {
    id: 'S001',
    name: 'البرنامج الصيفي المكثف',
    description: 'برنامج صيفي شامل لحفظ ومراجعة القرآن الكريم مع أنشطة تربوية متنوعة',
    shortDescription: 'برنامج صيفي شامل مع أنشطة متنوعة وحفظ مكثف',
    season: 'الصيف',
    period: 'يونيو - أغسطس (3 أشهر)',
    schedule: 'السبت - الخميس',
    time: '8:00 صباحاً - 12:00 ظهراً',
    duration: '4 ساعات يومياً',
    location: 'المسجد الكبير + الساحة الخارجية',
    targetAge: '8-18 سنة',
    maxStudents: 100,
    currentStudents: 75,
    level: 'جميع المستويات',
    features: [
      'حفظ ومراجعة مكثفة (3-5 صفحات يومياً)',
      'دورات في التجويد والقراءات',
      'أنشطة رياضية وترفيهية',
      'رحلات ميدانية دعوية',
      'مسابقات قرآنية بجوائز قيمة',
      'برنامج غذائي متكامل'
    ],
    includes: [
      'حقيبة تعليمية كاملة',
      'مصحف مع أدوات تعليمية',
      'وجبات خفيفة يومية',
      'شهادة إتمام البرنامج'
    ],
    sheikh: 'الشيخ محمد الأمين',
    sheikhImage: '/api/placeholder/400/300',
    programImage: '/api/placeholder/400/250',
    teacherTeam: 'فريق من 5 معلمين متخصصين',
    sheikhExperience: 'مدير البرنامج الصيفي منذ 8 سنوات',
    price: '5,000 دج للبرنامج الكامل',
    earlyBirdPrice: '4,000 دج (التسجيل المبكر)',
    registrationDeadline: '15 مايو 2026',
    icon: Sun,
    color: 'orange',
    tags: ['صيفي', 'مكثف', 'أنشطة']
  },
  {
    id: 'S002',
    name: 'برنامج رمضان الخاص',
    description: 'برنامج رمضاني متميز لختم القرآن الكريم مع التفسير والتدبر',
    shortDescription: 'برنامج رمضاني لختم القرآن مع التفسير والتدبر',
    season: 'رمضان',
    period: 'شهر رمضان المبارك',
    schedule: 'يومياً طوال الشهر',
    time: 'بعد التراويح (9:00 - 11:00 مساءً)',
    duration: 'ساعتان يومياً',
    location: 'المسجد الكبير - جميع القاعات',
    targetAge: 'جميع الأعمار',
    maxStudents: 200,
    currentStudents: 145,
    level: 'جميع المستويات',
    features: [
      'ختم القرآن الكريم كاملاً',
      'دروس في التفسير والتدبر',
      'قيام الليل والتهجد',
      'إفطار جماعي يومي',
      'محاضرات رمضانية',
      'صدقة جارية ومشاريع خيرية'
    ],
    includes: [
      'مصحف رمضان الخاص',
      'إفطار يومي',
      'كتب رمضانية',
      'سجادة صلاة'
    ],
    sheikh: 'الشيخ يوسف العربي',
    sheikhImage: '/api/placeholder/400/300',
    programImage: '/api/placeholder/400/250',
    teacherTeam: '10 معلمين مجازين',
    sheikhExperience: 'إمام وخطيب - مختص في التفسير',
    price: 'مجاني (تبرعات اختيارية)',
    registrationDeadline: '20 يوم قبل رمضان',
    icon: Star,
    color: 'purple',
    tags: ['رمضان', 'ختم', 'تفسير']
  },
  {
    id: 'S003',
    name: 'البرنامج الشتوي للحفظ',
    description: 'استغل عطلة الشتاء في حفظ ومراجعة القرآن الكريم',
    shortDescription: 'حفظ ومراجعة في العطلة الشتوية',
    season: 'الشتاء',
    period: 'ديسمبر - فبراير (3 أشهر)',
    schedule: 'السبت - الخميس',
    time: '2:00 - 6:00 مساءً',
    duration: '4 ساعات',
    location: 'المسجد الكبير - قاعة مدفأة',
    targetAge: '10-17 سنة (طلاب)',
    maxStudents: 60,
    currentStudents: 42,
    level: 'مبتدئ - متوسط',
    features: [
      'حفظ 2-3 صفحات يومياً',
      'مراجعة شاملة',
      'دروس في السيرة النبوية',
      'مسابقات أسبوعية',
      'مشروبات ساخنة يومية',
      'أنشطة داخلية متنوعة'
    ],
    includes: [
      'مصحف التحفيظ',
      'دفتر المتابعة',
      'وجبات خفيفة',
      'شهادة الإنجاز'
    ],
    sheikh: 'الشيخ عبد الرحمان الجزائري',
    sheikhImage: '/api/placeholder/400/300',
    programImage: '/api/placeholder/400/250',
    teacherTeam: '3 معلمين متخصصين',
    sheikhExperience: 'أستاذ التحفيظ الشتوي منذ 5 سنوات',
    price: '3,000 دج للبرنامج الكامل',
    earlyBirdPrice: '2,500 دج (التسجيل المبكر)',
    registrationDeadline: '15 نوفمبر 2026',
    icon: Snowflake,
    color: 'blue',
    tags: ['شتوي', 'حفظ', 'مراجعة']
  },
  {
    id: 'S004',
    name: 'برنامج عطلة الربيع القرآنية',
    description: 'برنامج مكثف خلال عطلة الربيع للحفظ والمراجعة',
    shortDescription: 'برنامج ربيعي في الطبيعة مع أنشطة متنوعة',
    season: 'الربيع',
    period: 'أسبوعين في مارس-أبريل',
    schedule: 'السبت - الخميس',
    time: '9:00 صباحاً - 1:00 ظهراً',
    duration: '4 ساعات يومياً',
    location: 'المسجد الكبير + الحديقة',
    targetAge: '7-15 سنة',
    maxStudents: 80,
    currentStudents: 55,
    level: 'جميع المستويات',
    features: [
      'حفظ مكثف (2 صفحة يومياً)',
      'أنشطة خارجية في الطبيعة',
      'مسابقات قرآنية يومية',
      'رحلة ترفيهية',
      'ورش فنية إسلامية',
      'جوائز تشجيعية'
    ],
    includes: [
      'حقيبة البرنامج',
      'مصحف ملون',
      'أدوات فنية',
      'وجبة خفيفة يومية'
    ],
    sheikh: 'الأستاذ أحمد بوعزيز',
    sheikhImage: '/api/placeholder/400/300',
    programImage: '/api/placeholder/400/250',
    teacherTeam: '4 معلمين مختصين',
    sheikhExperience: 'منسق البرامج التفاعلية للأطفال',
    price: '2,000 دج للأسبوعين',
    earlyBirdPrice: '1,700 دج (التسجيل المبكر)',
    registrationDeadline: '1 مارس 2026',
    icon: Leaf,
    color: 'green',
    tags: ['ربيع', 'طبيعة', 'أنشطة']
  },
  {
    id: 'S005',
    name: 'معسكر الإجازة القرآني',
    description: 'معسكر تربوي قرآني متكامل مع إقامة كاملة',
    shortDescription: 'معسكر كامل مع إقامة وبرنامج متكامل',
    season: 'الصيف',
    period: 'أسبوع واحد (يوليو)',
    schedule: '24/7 - إقامة كاملة',
    time: 'برنامج متكامل من الفجر للعشاء',
    duration: '7 أيام متواصلة',
    location: 'مركز التدريب الإسلامي - خارج المدينة',
    targetAge: '13-18 سنة',
    maxStudents: 50,
    currentStudents: 35,
    level: 'متوسط - متقدم',
    features: [
      'حفظ ومراجعة مكثفة (20 صفحة أسبوعياً)',
      'دورة تجويد متقدمة',
      'برنامج تربوي شامل',
      'أنشطة رياضية وترفيهية',
      'رحلات استكشافية',
      'مسابقة ختامية كبرى'
    ],
    includes: [
      'إقامة كاملة (7 أيام)',
      'وجبات ثلاثية يومية',
      'مواصلات ذهاباً وإياباً',
      'حقيبة المعسكر الكاملة',
      'تأمين صحي',
      'شهادة معتمدة'
    ],
    sheikh: 'فريق متكامل',
    sheikhImage: '/api/placeholder/400/300',
    programImage: '/api/placeholder/400/250',
    teacherTeam: '8 معلمين وإداريين',
    sheikhExperience: 'فريق مختص في المعسكرات التربوية',
    price: '15,000 دج (إقامة كاملة)',
    earlyBirdPrice: '13,000 دج (التسجيل المبكر)',
    registrationDeadline: '1 يونيو 2026',
    icon: Wind,
    color: 'indigo',
    tags: ['معسكر', 'إقامة', 'تربوي']
  }
]

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState('weekly')

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-600',
        gradient: 'from-emerald-500 to-teal-600',
        badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
        light: 'bg-emerald-500/10'
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        text: 'text-teal-600',
        gradient: 'from-teal-500 to-cyan-600',
        badge: 'bg-teal-100 text-teal-700 border-teal-200',
        light: 'bg-teal-500/10'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-600',
        gradient: 'from-amber-500 to-orange-600',
        badge: 'bg-amber-100 text-amber-700 border-amber-200',
        light: 'bg-amber-500/10'
      },
      rose: {
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        text: 'text-rose-600',
        gradient: 'from-rose-500 to-pink-600',
        badge: 'bg-rose-100 text-rose-700 border-rose-200',
        light: 'bg-rose-500/10'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        gradient: 'from-orange-500 to-amber-600',
        badge: 'bg-orange-100 text-orange-700 border-orange-200',
        light: 'bg-orange-500/10'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        gradient: 'from-purple-500 to-indigo-600',
        badge: 'bg-purple-100 text-purple-700 border-purple-200',
        light: 'bg-purple-500/10'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        gradient: 'from-blue-500 to-cyan-600',
        badge: 'bg-blue-100 text-blue-700 border-blue-200',
        light: 'bg-blue-500/10'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        gradient: 'from-green-500 to-emerald-600',
        badge: 'bg-green-100 text-green-700 border-green-200',
        light: 'bg-green-500/10'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-600',
        gradient: 'from-indigo-500 to-purple-600',
        badge: 'bg-indigo-100 text-indigo-700 border-indigo-200',
        light: 'bg-indigo-500/10'
      }
    }
    return colors[color] || colors.emerald
  }

  const getLevelBadge = (level: string) => {
    const badges = {
      'مبتدئ': 'bg-blue-50 text-blue-800 border border-blue-200',
      'متوسط': 'bg-teal-50 text-teal-800 border border-teal-200',
      'متقدم': 'bg-emerald-50 text-emerald-800 border border-emerald-200',
      'أطفال': 'bg-amber-50 text-amber-800 border border-amber-200',
      'جميع المستويات': 'bg-gray-50 text-gray-800 border border-gray-200',
      'الحفاظ': 'bg-purple-50 text-purple-800 border border-purple-200'
    }
    return badges[level] || 'bg-gray-50 text-gray-800 border border-gray-200'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-emerald-900 via-teal-800 to-cyan-700 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
              <BookOpen className="w-4 h-4" />
              برامجنا القرآنية
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              اختر <span className="text-amber-300">البرنامج المناسب</span> لك
            </h1>
            <p className="text-teal-50 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              نقدم مجموعة متنوعة من البرامج القرآنية الأسبوعية والموسمية التي تناسب جميع الأعمار والمستويات
            </p>
          </motion.div>
        </div>

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

      {/* Tab Navigation */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-2 border border-gray-100">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setActiveTab('weekly')}
                className={`relative py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeTab === 'weekly'
                    ? 'bg-gradient-to-r from-emerald-700 to-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <span>البرامج الأسبوعية</span>
                </div>
                {activeTab === 'weekly' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-600 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>

              <button
                onClick={() => setActiveTab('seasonal')}
                className={`relative py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeTab === 'seasonal'
                    ? 'bg-gradient-to-r from-teal-700 to-cyan-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  <Award className="w-6 h-6" />
                  <span>البرامج الموسمية</span>
                </div>
                {activeTab === 'seasonal' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-600 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Content */}
      <section className="relative py-8 px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Weekly Programs */}
            {activeTab === 'weekly' && (
              <motion.div
                key="weekly"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    البرامج الأسبوعية المنتظمة
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    برامج دائمة على مدار العام تناسب مختلف الأعمار والمستويات
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {weeklyPrograms.map((program, index) => {
                    const colorClass = getColorClasses(program.color)
                    const ProgramIcon = program.programIcon
                    return (
                      <motion.div
                        key={program.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                      >
                        {/* Program Image */}
                        <div className="relative h-48 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-teal-800/30 z-10"></div>
                          <img 
                            src={program.programImage} 
                            alt={program.name}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 z-20">
                            <div className={`px-3 py-1 rounded-full text-xs font-bold ${colorClass.badge}`}>
                              {program.level}
                            </div>
                          </div>
                          <div className="absolute bottom-4 right-4 z-20">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                <ProgramIcon className="w-5 h-5 text-white" />
                              </div>
                              <div className="text-right">
                                <p className="text-white font-bold text-sm">{program.name}</p>
                                <p className="text-white/80 text-xs">{program.shortDescription}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Sheikh Info */}
                          <div className="flex items-center gap-4 mb-6 p-3 bg-gray-50 rounded-xl">
                            <div className="relative">
                              <img 
                                src={program.sheikhImage} 
                                alt={program.sheikh}
                                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200"
                              />
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                                <User className="w-3 h-3 text-white" />
                              </div>
                            </div>
                            <div className="flex-1 text-right">
                              <h4 className="font-bold text-gray-900 text-sm">{program.sheikh}</h4>
                            </div>
                          </div>

                          {/* Quick Info */}
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-emerald-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="w-4 h-4 text-emerald-600" />
                                <span className="text-xs text-gray-600">الأيام</span>
                              </div>
                              <p className="font-bold text-gray-900 text-sm">{program.schedule}</p>
                            </div>
                            <div className="bg-teal-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-4 h-4 text-teal-600" />
                                <span className="text-xs text-gray-600">الوقت</span>
                              </div>
                              <p className="font-bold text-gray-900 text-sm">{program.time}</p>
                            </div>
                            <div className="bg-cyan-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin className="w-4 h-4 text-cyan-600" />
                                <span className="text-xs text-gray-600">المكان</span>
                              </div>
                              <p className="font-bold text-gray-900 text-sm text-right">{program.location}</p>
                            </div>
                            <div className="bg-amber-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <Users className="w-4 h-4 text-amber-600" />
                                <span className="text-xs text-gray-600">العمر</span>
                              </div>
                              <p className="font-bold text-gray-900 text-sm">{program.targetAge}</p>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="mb-6">
                            <p className="text-sm text-gray-700 text-right leading-relaxed border-r-2 border-emerald-200 pr-3">
                              {program.description}
                            </p>
                          </div>

                          {/* Features */}
                          <div className="mb-6">
                            <h4 className="font-bold text-gray-900 mb-3 text-right text-sm">المميزات:</h4>
                            <ul className="space-y-2">
                              {program.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                  <div className="flex-1 text-right text-xs">{feature}</div>
                                  <CheckCircle className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Availability & Price */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mb-6">
                            <div className="text-right">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                <p className="text-xs text-gray-600">المقاعد</p>
                              </div>
                              <p className="font-bold text-emerald-600 text-sm">
                                {program.maxStudents - program.currentStudents} مقعد متبقي
                              </p>
                            </div>
                            <div className="text-left">
                              <p className="text-xs text-gray-600">الرسوم</p>
                              <p className="font-bold text-emerald-600 text-lg">{program.price}</p>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <button className={`w-full bg-gradient-to-r ${colorClass.gradient} text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm`}>
                            <span>التسجيل في البرنامج</span>
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {/* Seasonal Programs */}
            {activeTab === 'seasonal' && (
              <motion.div
                key="seasonal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    البرامج الموسمية المكثفة
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    برامج خاصة موسمية تقام في العطل والمناسبات الدينية
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {seasonalPrograms.map((program, index) => {
                    const colorClass = getColorClasses(program.color)
                    const SeasonIcon = program.icon
                    return (
                      <motion.div
                        key={program.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                      >
                        {/* Program Image with Season Badge */}
                        <div className="relative h-48 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-teal-800/30 z-10"></div>
                          <img 
                            src={program.programImage} 
                            alt={program.name}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 z-20">
                            <div className="flex items-center gap-2">
                              <div className={`px-3 py-1 rounded-full text-xs font-bold ${colorClass.badge}`}>
                                {program.season}
                              </div>
                              <div className={`px-3 py-1 rounded-full text-xs font-bold ${getLevelBadge(program.level)}`}>
                                {program.level}
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 right-4 z-20">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                <SeasonIcon className="w-5 h-5 text-white" />
                              </div>
                              <div className="text-right">
                                <p className="text-white font-bold text-sm">{program.name}</p>
                                <p className="text-white/80 text-xs">{program.shortDescription}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Teacher Info */}
                          <div className="flex items-center gap-4 mb-6 p-3 bg-gray-50 rounded-xl">
                            <div className="relative">
                              <img 
                                src={program.sheikhImage} 
                                alt={program.sheikh}
                                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200"
                              />
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                                <Users className="w-3 h-3 text-white" />
                              </div>
                            </div>
                            <div className="flex-1 text-right">
                              <h4 className="font-bold text-gray-900 text-sm">{program.sheikh}</h4>
                              <p className="text-xs text-gray-600 mt-1">{program.sheikhExperience}</p>
                              <div className="flex items-center gap-1 mt-2">
                                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                                  {program.teacherTeam}
                                </span>
                                {program.tags?.map((tag, idx) => (
                                  <span key={idx} className="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Period & Registration */}
                          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-6">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-bold text-gray-900 text-right flex-1 text-sm">{program.period}</p>
                              <Award className="w-5 h-5 text-amber-600" />
                            </div>
                            <p className="text-xs text-gray-600 text-right">
                              آخر موعد للتسجيل: <span className="font-semibold text-red-600">{program.registrationDeadline}</span>
                            </p>
                          </div>

                          {/* Quick Info */}
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-emerald-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="w-4 h-4 text-emerald-600" />
                                <span className="text-xs text-gray-600">الجدول</span>
                              </div>
                              <p className="font-bold text-gray-900 text-sm text-right">{program.schedule}</p>
                            </div>
                            <div className="bg-teal-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-4 h-4 text-teal-600" />
                                <span className="text-xs text-gray-600">التوقيت</span>
                              </div>
                              <p className="font-bold text-gray-900 text-sm text-right">{program.time}</p>
                            </div>
                            <div className="bg-cyan-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin className="w-4 h-4 text-cyan-600" />
                                <span className="text-xs text-gray-600">الموقع</span>
                              </div>
                              <p className="font-bold text-gray-900 text-sm text-right">{program.location}</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <Users className="w-4 h-4 text-purple-600" />
                                <span className="text-xs text-gray-600">الفئة</span>
                              </div>
                              <p className="font-bold text-gray-900 text-sm text-right">{program.targetAge}</p>
                            </div>
                          </div>

                          {/* Short Description */}
                          <div className="mb-6">
                            <p className="text-sm text-gray-700 text-right leading-relaxed border-r-2 border-emerald-200 pr-3">
                              {program.description}
                            </p>
                          </div>

                          {/* Features & Includes */}
                          <div className="space-y-4 mb-6">
                            <div>
                              <h4 className="font-bold text-gray-900 mb-2 text-right text-sm">المحتويات:</h4>
                              <ul className="space-y-1">
                                {program.features.slice(0, 3).map((feature, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="flex-1 text-right text-xs">{feature}</div>
                                    <CheckCircle className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold text-gray-900 mb-2 text-right text-sm">يشمل:</h4>
                              <ul className="space-y-1">
                                {program.includes.slice(0, 3).map((item, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="flex-1 text-right text-xs">{item}</div>
                                    <Star className="w-3 h-3 text-amber-500 flex-shrink-0" />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Price & Availability */}
                          <div className="space-y-4 mb-6">
                            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                              <div className="flex items-center justify-between">
                                <div className="text-right flex-1">
                                  <p className="text-sm font-bold text-gray-900">{program.price}</p>
                                  {program.earlyBirdPrice && (
                                    <p className="text-xs text-emerald-600 mt-1">
                                      التسجيل المبكر: {program.earlyBirdPrice}
                                    </p>
                                  )}
                                </div>
                                <Award className="w-6 h-6 text-emerald-600" />
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="text-right">
                                <p className="text-xs text-gray-600">المقاعد المتبقية</p>
                                <p className="font-bold text-emerald-600 text-sm">
                                  {program.maxStudents - program.currentStudents} من {program.maxStudents}
                                </p>
                              </div>
                              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <button className={`w-full bg-gradient-to-r ${colorClass.gradient} text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm`}>
                            <span>سجل الآن واحجز مقعدك</span>
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700">
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            هل لديك استفسار عن البرامج؟
          </h3>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            فريقنا جاهز لمساعدتك في اختيار البرنامج المناسب والإجابة على جميع استفساراتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-900 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <span>تواصل معنا</span>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              تحميل دليل البرامج PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}