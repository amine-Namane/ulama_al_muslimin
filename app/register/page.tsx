'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Phone, MapPin, Calendar, BookOpen, GraduationCap, Clock, CheckCircle, ChevronLeft, ChevronRight, Users, FileText, Camera, Upload } from 'lucide-react'
import { useState } from 'react'

const steps = [
  { id: 1, title: "المعلومات الشخصية", icon: User },
  { id: 2, title: "معلومات التواصل", icon: Phone },
  { id: 3, title: "اختيار الحلقة", icon: BookOpen },
  { id: 4, title: "معلومات ولي الأمر", icon: Users },
  { id: 5, title: "المستندات", icon: FileText }
]

const halaqatOptions = [
  { id: 1, name: "حلقة التجويد المتقدم", level: "متقدم", time: "بعد صلاة الفجر" },
  { id: 2, name: "حلقة حفظ جزء عم", level: "مبتدئ", time: "بعد صلاة العصر" },
  { id: 3, name: "حلقة القرآن الكريم للنساء", level: "جميع المستويات", time: "بعد صلاة الظهر" },
  { id: 4, name: "حلقة الأطفال - البراعم", level: "أطفال (6-12 سنة)", time: "4:00 مساءً" },
  { id: 5, name: "حلقة المراجعة والإتقان", level: "متقدم", time: "بعد صلاة المغرب" },
  { id: 6, name: "حلقة تفسير القرآن", level: "جميع المستويات", time: "بعد صلاة العشاء" }
]

const getLevelBadge = (level) => {
  const badges = {
    'مبتدئ': 'bg-blue-50 text-blue-800 border border-blue-200',
    'متقدم': 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    'جميع المستويات': 'bg-teal-50 text-teal-800 border border-teal-200',
    'أطفال (6-12 سنة)': 'bg-amber-50 text-amber-800 border border-amber-200'
  }
  return badges[level] || 'bg-gray-50 text-gray-800 border border-gray-200'
}

export default function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1 - Personal Info
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    nationalId: '',
    // Step 2 - Contact Info
    email: '',
    phone: '',
    address: '',
    city: '',
    wilaya: '',
    // Step 3 - Halqa Selection
    selectedHalqa: null,
    memorizedJuz: '',
    previousExperience: '',
    learningGoals: '',
    // Step 4 - Guardian Info
    guardianName: '',
    guardianRelation: '',
    guardianPhone: '',
    guardianEmail: '',
    guardianAddress: '',
    // Step 5 - Documents
    photoUrl: null,
    birthCertificate: null,
    medicalCertificate: null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registrationComplete, setRegistrationComplete] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileUpload = (fieldName, file) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: file
    }))
  }

  const handleHalqaSelect = (halqaId) => {
    setFormData(prev => ({
      ...prev,
      selectedHalqa: halqaId
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setRegistrationComplete(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 2000)
  }

  const isStepValid = () => {
    switch(currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.birthDate && formData.gender
      case 2:
        return formData.email && formData.phone && formData.address 
      case 3:
        return formData.selectedHalqa
      case 4:
        return formData.guardianName && formData.guardianPhone
      case 5:
        return true
      default:
        return false
    }
  }

  if (registrationComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-100"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-14 h-14 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            تم التسجيل <span className="text-emerald-600">بنجاح!</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            شكراً لتسجيلك في مدرستنا القرآنية. تم إرسال تأكيد التسجيل إلى بريدك الإلكتروني.
            سيتواصل معك فريقنا خلال 24 ساعة لتأكيد موعد البدء.
          </p>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-8 border border-emerald-200">
            <h3 className="font-bold text-gray-900 mb-4">معلومات التسجيل</h3>
            <div className="space-y-3 text-right">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">رقم التسجيل:</span>
                <span className="font-bold text-emerald-700">REG-2024-{Math.floor(Math.random() * 10000)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">الحلقة المختارة:</span>
                <span className="font-semibold text-gray-900">
                  {halaqatOptions.find(h => h.id === formData.selectedHalqa)?.name || '-'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">تاريخ التسجيل:</span>
                <span className="font-semibold text-gray-900">
                  {new Date().toLocaleDateString('ar-DZ')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              تسجيل طالب آخر
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="flex-1 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-3.5 rounded-xl font-bold transition-all duration-300"
            >
              العودة للصفحة الرئيسية
            </button>
          </div>
        </motion.div>
      </div>
    )
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
              <GraduationCap className="w-4 h-4" />
              انضم إلى عائلتنا القرآنية
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              نموذج <span className="text-amber-300">التسجيل</span>
            </h1>
            <p className="text-teal-50 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              املأ النموذج أدناه لتسجيل طالب جديد في حلقاتنا القرآنية. 
              يرجى التأكد من دقة جميع المعلومات المدخلة
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

      {/* Progress Steps */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 mb-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <motion.div
                      animate={{
                        scale: currentStep === step.id ? 1.1 : 1,
                        backgroundColor: currentStep >= step.id ? '#059669' : '#e5e7eb'
                      }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        currentStep >= step.id ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-6 h-6" />
                      )}
                    </motion.div>
                    <span className={`text-xs md:text-sm font-semibold text-center ${
                      currentStep >= step.id ? 'text-emerald-700' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-1 flex-1 mx-2 rounded-full transition-all duration-500 ${
                      currentStep > step.id ? 'bg-emerald-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="relative py-8 px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
            >
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">المعلومات الشخصية</h2>
                    <p className="text-gray-600">أدخل المعلومات الشخصية للطالب</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">الاسم الأول *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        placeholder="أدخل الاسم الأول"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">اسم العائلة *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        placeholder="أدخل اسم العائلة"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">تاريخ الميلاد *</label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">الجنس *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right bg-white"
                      >
                        <option value="">اختر الجنس</option>
                        <option value="male">ذكر</option>
                        <option value="female">أنثى</option>
                      </select>
                    </div>
                  </div>

                </div>
              )}

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">معلومات التواصل</h2>
                    <p className="text-gray-600">أدخل معلومات الاتصال والعنوان</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">رقم الهاتف *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        placeholder="+213 555 123 456"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">العنوان الكامل *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                      placeholder="أدخل العنوان الكامل"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Halqa Selection */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">اختيار الحلقة</h2>
                    <p className="text-gray-600">اختر الحلقة المناسبة وأخبرنا عن مستواك</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <label className="block text-sm font-semibold text-gray-700 text-right">اختر الحلقة *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {halaqatOptions.map((halqa) => (
                        <motion.div
                          key={halqa.id}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => handleHalqaSelect(halqa.id)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.selectedHalqa === halqa.id
                              ? 'border-emerald-500 bg-emerald-50'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1 text-right">
                              <h4 className="font-bold text-gray-900 mb-1">{halqa.name}</h4>
                              <p className="text-sm text-gray-600 flex items-center justify-end gap-2">
                                <span>{halqa.time}</span>
                                <Clock className="w-4 h-4" />
                              </p>
                            </div>
                            {formData.selectedHalqa === halqa.id && (
                              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                            )}
                          </div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getLevelBadge(halqa.level)}`}>
                            {halqa.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">ما مقدار حفظك الحالي؟</label>
                    <select
                      name="memorizedJuz"
                      value={formData.memorizedJuz}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right bg-white"
                    >
                      <option value="">اختر مقدار الحفظ</option>
                      <option value="none">لم أبدأ بعد</option>
                      <option value="juz30">جزء عم</option>
                      <option value="3juz">3 أجزاء</option>
                      <option value="5juz">5 أجزاء</option>
                      <option value="10juz">10 أجزاء</option>
                      <option value="15juz">15 جزء</option>
                      <option value="full">القرآن كاملاً</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">الخبرة السابقة</label>
                    <textarea
                      name="previousExperience"
                      value={formData.previousExperience}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none resize-none text-right"
                      placeholder="هل سبق لك الالتحاق بحلقة قرآنية؟ أخبرنا عن تجربتك..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">أهدافك من الانضمام</label>
                    <textarea
                      name="learningGoals"
                      value={formData.learningGoals}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none resize-none text-right"
                      placeholder="ما الذي تريد تحقيقه من خلال الحلقة؟"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 4: Guardian Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">معلومات ولي الأمر</h2>
                    <p className="text-gray-600">أدخل معلومات الاتصال بولي الأمر</p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                    <p className="text-sm text-amber-800 text-right">
                      <strong>ملاحظة:</strong> إذا كان الطالب بالغاً، يمكن ترك هذه الخانات فارغة أو إدخال معلومات شخص للطوارئ
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">اسم ولي الأمر *</label>
                      <input
                        type="text"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        placeholder="أدخل الاسم الكامل"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">صلة القرابة</label>
                      <select
                        name="guardianRelation"
                        value={formData.guardianRelation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right bg-white"
                      >
                        <option value="">اختر صلة القرابة</option>
                        <option value="father">الأب</option>
                        <option value="mother">الأم</option>
                        <option value="brother">الأخ</option>
                        <option value="sister">الأخت</option>
                        <option value="uncle">العم</option>
                        <option value="aunt">العمة</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">رقم هاتف ولي الأمر *</label>
                      <input
                        type="tel"
                        name="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        placeholder="+213 555 123 456"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="guardianEmail"
                        value={formData.guardianEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">عنوان ولي الأمر</label>
                    <input
                      type="text"
                      name="guardianAddress"
                      value={formData.guardianAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                      placeholder="أدخل العنوان الكامل"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Documents */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">المستندات المطلوبة</h2>
                    <p className="text-gray-600">قم برفع المستندات التالية (اختياري)</p>
                  </div>

                  <div className="space-y-4">
                    {/* Photo Upload */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-emerald-400 transition-all">
                      <div className="text-center">
                        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">صورة شخصية</h4>
                        <p className="text-sm text-gray-600 mb-4">ارفع صورة شخصية حديثة للطالب</p>
                        <label className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-2 rounded-lg cursor-pointer hover:bg-emerald-100 transition-all border border-emerald-200">
                          <Upload className="w-4 h-4" />
                          <span>اختر ملف</span>
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleFileUpload('photoUrl', e.target.files[0])}
                          />
                        </label>
                        {formData.photoUrl && (
                          <p className="text-sm text-emerald-600 mt-2">✓ تم رفع الملف</p>
                        )}
                      </div>
                    </div>

                    {/* Birth Certificate */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-emerald-400 transition-all">
                      <div className="text-center">
                        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">شهادة الميلاد</h4>
                        <p className="text-sm text-gray-600 mb-4">نسخة من شهادة الميلاد (PDF أو صورة)</p>
                        <label className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-6 py-2 rounded-lg cursor-pointer hover:bg-teal-100 transition-all border border-teal-200">
                          <Upload className="w-4 h-4" />
                          <span>اختر ملف</span>
                          <input 
                            type="file" 
                            accept="image/*,.pdf" 
                            className="hidden"
                            onChange={(e) => handleFileUpload('birthCertificate', e.target.files[0])}
                          />
                        </label>
                        {formData.birthCertificate && (
                          <p className="text-sm text-teal-600 mt-2">✓ تم رفع الملف</p>
                        )}
                      </div>
                    </div>

                    {/* Medical Certificate */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-emerald-400 transition-all">
                      <div className="text-center">
                        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">شهادة طبية</h4>
                        <p className="text-sm text-gray-600 mb-4">شهادة طبية تثبت لياقة الطالب (اختياري)</p>
                        <label className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-6 py-2 rounded-lg cursor-pointer hover:bg-cyan-100 transition-all border border-cyan-200">
                          <Upload className="w-4 h-4" />
                          <span>اختر ملف</span>
                          <input 
                            type="file" 
                            accept="image/*,.pdf" 
                            className="hidden"
                            onChange={(e) => handleFileUpload('medicalCertificate', e.target.files[0])}
                          />
                        </label>
                        {formData.medicalCertificate && (
                          <p className="text-sm text-cyan-600 mt-2">✓ تم رفع الملف</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-800 text-right">
                      <strong>ملاحظة:</strong> يمكنك تخطي رفع المستندات الآن وإرسالها لاحقاً عبر البريد الإلكتروني
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  <ChevronRight className="w-5 h-5" />
                  <span>السابق</span>
                </button>

                {currentStep < steps.length ? (
                  <button
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    <span>التالي</span>
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>جاري الإرسال...</span>
                      </>
                    ) : (
                      <>
                        <span>إتمام التسجيل</span>
                        <CheckCircle className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}