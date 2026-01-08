'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Phone, Lock, Eye, EyeOff, CheckCircle, ChevronLeft, UserCheck, Users, GraduationCap, Shield, Calendar, MapPin, BookOpen, UserPlus, X, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
type ColorType = 'emerald' | 'teal' | 'cyan'

type LevelType =
  | 'مبتدئ'
  | 'متقدم'
  | 'جميع المستويات'
  | 'أطفال (6-12 سنة)'

type AccountType = {
  id: 'student' | 'parent' | 'sheikh'
  title: string
  description: string
  icon: any
  color: ColorType
  features: string[]
}

type HalqaOption = {
  id: string
  name: string
  level: LevelType
  time: string
}
type RegisterFormData = {
  email: string
  password: string
  confirmPassword: string
    firstName: string
    lastName: string
    phone: number
    address: string
    emergencyContact: string
    birthDate: number
    gender: 'male' | 'female' | ''
    previousKnowledge: string
    qualification: string
    experience: string
    specialization: string
}
type UserType = {
  id: string
  type: 'student' | 'parent' | 'sheikh'
  name: string
  email: string
  phone: string
  inviteCode?: string
}

// const [selectedType, setSelectedType] = useState<UserType | null>(null)

const accountTypes: AccountType[] = [
  {
    id: 'student',
    title: 'حساب طالب',
    description: 'للطلاب الراغبين في متابعة دروسهم وتقدمهم الدراسي',
    icon: GraduationCap,
    color: 'emerald',
    features: [
      'متابعة الحفظ والمراجعة',
      'الوصول إلى الدروس والمواد',
      'تتبع التقدم الدراسي',
      'التواصل مع الشيوخ',
      'ربط الحساب مع ولي الأمر'
    ]
  },
  {
    id: 'parent',
    title: 'حساب ولي أمر',
    description: 'لأولياء الأمور لمتابعة أبنائهم والتواصل مع المدرسة',
    icon: Users,
    color: 'teal',
    features: [
      'متابعة تقدم الأبناء',
      'استلام التقارير الدورية',
      'التواصل مع المعلمين',
      'إدارة حسابات متعددة',
      'إنشاء حسابات الأبناء مباشرة'
    ]
  },
  {
    id: 'sheikh',
    title: 'حساب شيخ/معلم',
    description: 'للشيوخ والمعلمين لإدارة الحلقات ومتابعة الطلاب',
    icon: BookOpen,
    color: 'cyan',
    features: [
      'إدارة الحلقات القرآنية',
      'متابعة حضور الطلاب',
      'تقييم الطلاب وتقدمهم',
      'إرسال التقارير لأولياء الأمور',
      'جدولة الحصص والاختبارات'
    ]
  }
]

const halaqatOptions: HalqaOption[] = [
  { id: 'H001', name: 'حلقة التجويد المتقدم', level: 'متقدم', time: 'بعد الفجر' },
  { id: 'H002', name: 'حلقة حفظ جزء عم', level: 'مبتدئ', time: 'بعد العصر' },
  { id: 'H003', name: 'حلقة القرآن الكريم للنساء', level: 'جميع المستويات', time: 'بعد الظهر' },
  { id: 'H004', name: 'حلقة الأطفال - البراعم', level: 'أطفال (6-12 سنة)', time: '4:00 مساءً' },
  { id: 'H005', name: 'حلقة المراجعة والإتقان', level: 'متقدم', time: 'بعد المغرب' },
  { id: 'H006', name: 'حلقة تفسير القرآن', level: 'جميع المستويات', time: 'بعد العشاء' }
]

export default function ParentDirectRegistrationPage() {
  const [selectedType, setSelectedType] = useState(null)
  const [currentStep, setCurrentStep] = useState('selection') // selection, registration, children, success
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone:0 ,
    address: '',

    emergencyContact: '',
    
    // Student specific (for student registration)
    birthDate: 0,
    gender: '',
    previousKnowledge: '',
    
    // Sheikh specific
    qualification: '',
    experience: '',
    specialization: '',
  })

  // Children accounts
  const [children, setChildren] = useState([])
  const [currentChild, setCurrentChild] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    nationalId: '',
    previousKnowledge: '',
    selectedHalqa: null,
    learningGoals: '',
    email: '',
    password: ''
  })
  const [showChildForm, setShowChildForm] = useState(false)
  const [editingChildIndex, setEditingChildIndex] = useState(null)

  const [errors, setErrors] = useState({})
  const [registrationData, setRegistrationData] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleChildChange = (e) => {
    const { name, value } = e.target
    setCurrentChild(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const addChild = () => {
    if (!currentChild.firstName || !currentChild.lastName || !currentChild.birthDate || !currentChild.gender) {
      alert('يرجى ملء جميع الحقول المطلوبة للطالب')
      return
    }

    if (editingChildIndex !== null) {
      // Edit existing child
      const updatedChildren = [...children]
      updatedChildren[editingChildIndex] = { 
        ...currentChild,
        id: currentChild.id || `CHILD-${Date.now()}`
      }
      setChildren(updatedChildren)
      setEditingChildIndex(null)
    } else {
      // Add new child
      setChildren([...children, { 
        ...currentChild, 
        id: `CHILD-${Date.now()}`,
        email: currentChild.email || `${currentChild.firstName.toLowerCase()}.${currentChild.lastName.toLowerCase()}@student.quranic.dz`,
        password: currentChild.password || Math.random().toString(36).slice(-8)
      }])
    }

    // Reset form
    setCurrentChild({
      firstName: '',
      lastName: '',
      birthDate: '',
      gender: '',
      nationalId: '',
      previousKnowledge: '',
      selectedHalqa: null,
      learningGoals: '',
      email: '',
      password: ''
    })
    setShowChildForm(false)
  }

  const editChild = (index) => {
    setCurrentChild(children[index])
    setEditingChildIndex(index)
    setShowChildForm(true)
  }

  const removeChild = (index) => {
    setChildren(children.filter((_, i) => i !== index))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'البريد الإلكتروني مطلوب'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح'
    }

    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة'
    } else if (formData.password.length < 8) {
      newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمة المرور غير متطابقة'
    }

    if (!formData.firstName) newErrors.firstName = 'الاسم الأول مطلوب'
    if (!formData.lastName) newErrors.lastName = 'اسم العائلة مطلوب'
    if (!formData.phone) newErrors.phone = 'رقم الهاتف مطلوب'

    if (selectedType === 'student') {
      if (!formData.birthDate) newErrors.birthDate = 'تاريخ الميلاد مطلوب'
      if (!formData.gender) newErrors.gender = 'الجنس مطلوب'
    }

    if (selectedType === 'parent') {
      if (!formData.address) newErrors.address = 'العنوان مطلوب'
      if (!formData.city) newErrors.city = 'المدينة مطلوبة'
      if (!formData.wilaya) newErrors.wilaya = 'الولاية مطلوبة'
    }

    if (selectedType === 'sheikh') {
      if (!formData.qualification) newErrors.qualification = 'المؤهل العلمي مطلوب'
      if (!formData.experience) newErrors.experience = 'سنوات الخبرة مطلوبة'
    }

    if (!agreedToTerms) {
      newErrors.terms = 'يجب الموافقة على الشروط والأحكام'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    setTimeout(() => {
      const userData = {
        id: `${selectedType.toUpperCase()[0]}${Math.floor(Math.random() * 10000).toString().padStart(3, '0')}`,
        type: selectedType,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        inviteCode: Math.random().toString(36).substr(2, 8).toUpperCase()
      }
      
      setRegistrationData(userData)
      setIsSubmitting(false)
      
      // For parents, go to children registration step
      if (selectedType === 'parent') {
        setCurrentStep('children')
      } else {
        setCurrentStep('success')
      }
      
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 2000)
  }

  const completeRegistration = () => {
    setCurrentStep('success')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const selectAccountType = (type) => {
    setSelectedType(type)
    setCurrentStep('registration')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

const getColorClasses = (color: ColorType) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-600',
        gradient: 'from-emerald-500 to-teal-600',
        hover: 'hover:border-emerald-400'
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        text: 'text-teal-600',
        gradient: 'from-teal-500 to-cyan-600',
        hover: 'hover:border-teal-400'
      },
      cyan: {
        bg: 'bg-cyan-50',
        border: 'border-cyan-200',
        text: 'text-cyan-600',
        gradient: 'from-cyan-500 to-teal-600',
        hover: 'hover:border-cyan-400'
      }
    }
    return colors[color] || colors.emerald
  }

const getLevelBadge = (level: LevelType) => {
    const badges = {
      'مبتدئ': 'bg-blue-50 text-blue-800 border border-blue-200',
      'متقدم': 'bg-emerald-50 text-emerald-800 border border-emerald-200',
      'جميع المستويات': 'bg-teal-50 text-teal-800 border border-teal-200',
      'أطفال (6-12 سنة)': 'bg-amber-50 text-amber-800 border border-amber-200'
    }
    return badges[level] || 'bg-gray-50 text-gray-800 border border-gray-200'
  }

  // Success Screen
  if (currentStep === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-100"
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
            تم إنشاء {selectedType === 'parent' && children.length > 0 ? 'الحسابات' : 'الحساب'} <span className="text-emerald-600">بنجاح!</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {selectedType === 'parent' && children.length > 0
              ? `مرحباً بك في مدرستنا القرآنية! تم إنشاء حسابك وحسابات ${children.length} من أبنائك بنجاح.`
              : 'مرحباً بك في مدرستنا القرآنية! تم إنشاء حسابك بنجاح.'}
          </p>

          {/* Parent Account Info */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-6 border border-emerald-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              معلومات حساب ولي الأمر
            </h3>
            <div className="space-y-3 text-right">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">رقم الحساب:</span>
                <span className="font-bold text-emerald-700">{registrationData?.id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">البريد الإلكتروني:</span>
                <span className="font-semibold text-gray-900">{registrationData?.email}</span>
              </div>
              <div className="pt-3 border-t border-emerald-200">
                <div className="bg-white rounded-lg p-3 border border-emerald-300">
                  <p className="text-sm text-gray-600 mb-2">كود الدعوة (لربط حسابات إضافية):</p>
                  <p className="text-2xl font-bold text-emerald-700 tracking-wider">{registrationData?.inviteCode}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Children Accounts Info */}
          {children.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <GraduationCap className="w-5 h-5" />
                حسابات الأبناء ({children.length})
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {children.map((child, index) => (
                  <div key={child.id} className="bg-white rounded-xl p-4 border border-blue-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-right flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          {child.firstName} {child.lastName}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {child.gender === 'male' ? 'ذكر' : 'أنثى'} • 
                          {new Date().getFullYear() - new Date(child.birthDate).getFullYear()} سنة
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-emerald-700">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center bg-gray-50 rounded-lg p-2">
                        <span className="text-gray-600">البريد الإلكتروني:</span>
                        <span className="font-mono text-xs text-emerald-700">{child.email}</span>
                      </div>
                      <div className="flex justify-between items-center bg-gray-50 rounded-lg p-2">
                        <span className="text-gray-600">كلمة المرور المؤقتة:</span>
                        <span className="font-mono text-xs text-gray-900">{child.password}</span>
                      </div>
                      {child.selectedHalqa && (
                        <div className="flex justify-between items-center bg-emerald-50 rounded-lg p-2">
                          <span className="text-gray-600">الحلقة:</span>
                          <span className="font-semibold text-emerald-700">
                            {halaqatOptions.find(h => h.id === child.selectedHalqa)?.name}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-right">
            <p className="text-sm text-amber-800">
              <strong>مهم جداً:</strong> احتفظ بمعلومات تسجيل الدخول لجميع الحسابات. 
              {children.length > 0 && ' سيحتاج كل طالب إلى تغيير كلمة المرور المؤقتة عند أول تسجيل دخول.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.location.href = '/login'}
              className="flex-1 bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              تسجيل الدخول
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-3.5 rounded-xl font-bold transition-all duration-300"
            >
              طباعة معلومات الحسابات
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  // Children Registration Step (for parents)
  if (currentStep === 'children') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">إضافة حسابات الأبناء</h2>
              <p className="text-gray-600">
                أضف معلومات أبنائك لإنشاء حساباتهم مباشرة ومتابعة تقدمهم
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-800 text-right">
                <strong>اختياري:</strong> يمكنك إضافة حسابات أبنائك الآن أو لاحقاً من لوحة التحكم. 
                سيتم إنشاء بريد إلكتروني وكلمة مرور تلقائية لكل طالب.
              </p>
            </div>

            {/* Added Children List */}
            {children.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-right">
                  الأبناء المضافون ({children.length})
                </h3>
                <div className="space-y-3">
                  {children.map((child, index) => (
                    <motion.div
                      key={child.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                          <div className="text-right flex-1">
                            <h4 className="font-bold text-gray-900">
                              {child.firstName} {child.lastName}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {child.gender === 'male' ? 'ذكر' : 'أنثى'} • 
                              تاريخ الميلاد: {new Date(child.birthDate).toLocaleDateString('ar-DZ')}
                            </p>
                            {child.selectedHalqa && (
                              <p className="text-xs text-emerald-700 mt-1">
                                الحلقة: {halaqatOptions.find(h => h.id === child.selectedHalqa)?.name}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => editChild(index)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-all"
                            title="تعديل"
                          >
                            <User className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => removeChild(index)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all"
                            title="حذف"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Add Child Button */}
            {!showChildForm && (
              <button
                onClick={() => setShowChildForm(true)}
                className="w-full border-2 border-dashed border-emerald-300 text-emerald-700 hover:bg-emerald-50 py-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 mb-8"
              >
                <Plus className="w-6 h-6" />
                <span className="text-lg">إضافة ابن/ابنة</span>
              </button>
            )}

            {/* Child Form */}
            <AnimatePresence>
              {showChildForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-2 border-emerald-300 rounded-2xl p-6 mb-8 bg-emerald-50/30"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {editingChildIndex !== null ? 'تعديل بيانات الطالب' : 'إضافة طالب جديد'}
                    </h3>
                    <button
                      onClick={() => {
                        setShowChildForm(false)
                        setEditingChildIndex(null)
                        setCurrentChild({
                          firstName: '',
                          lastName: '',
                          birthDate: '',
                          gender: '',
                          nationalId: '',
                          previousKnowledge: '',
                          selectedHalqa: null,
                          learningGoals: '',
                          email: '',
                          password: ''
                        })
                      }}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                          الاسم الأول *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={currentChild.firstName}
                          onChange={handleChildChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                          placeholder="أدخل الاسم الأول"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                          اسم العائلة *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={currentChild.lastName}
                          onChange={handleChildChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                          placeholder="أدخل اسم العائلة"
                        />
                      </div>
                    </div>

                    {/* Birth Date and Gender */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                          تاريخ الميلاد *
                        </label>
                        <input
                          type="date"
                          name="birthDate"
                          value={currentChild.birthDate}
                          onChange={handleChildChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                          الجنس *
                        </label>
                        <select
                          name="gender"
                          value={currentChild.gender}
                          onChange={handleChildChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right bg-white"
                        >
                          <option value="">اختر الجنس</option>
                          <option value="male">ذكر</option>
                          <option value="female">أنثى</option>
                        </select>
                      </div>
                    </div>

                    {/* National ID and Previous Knowledge */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                          رقم الهوية الوطنية
                        </label>
                        <input
                          type="text"
                          name="nationalId"
                          value={currentChild.nationalId}
                          onChange={handleChildChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                          placeholder="أدخل رقم الهوية"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                          مستوى المعرفة السابق
                        </label>
                        <select
                          name="previousKnowledge"
                          value={currentChild.previousKnowledge}
                          onChange={handleChildChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right bg-white"
                        >
                          <option value="">اختر المستوى</option>
                          <option value="none">لم يبدأ بعد</option>
                          <option value="juz30">جزء عم</option>
                          <option value="3juz">3 أجزاء</option>
                          <option value="5juz">5 أجزاء</option>
                          <option value="beginner">مبتدئ</option>
                          <option value="intermediate">متوسط</option>
                          <option value="advanced">متقدم</option>
                        </select>
                      </div>
                    </div>

                    {/* Halqa Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 text-right">
                        اختيار الحلقة (اختياري)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {halaqatOptions.map((halqa) => (
                          <div
                            key={halqa.id}
                            onClick={() => handleChildChange({ target: { name: 'selectedHalqa', value: halqa.id } })}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              currentChild.selectedHalqa === halqa.id
                                ? 'border-emerald-500 bg-emerald-50'
                                : 'border-gray-200 hover:border-emerald-300'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex-1 text-right">
                                <h4 className="font-semibold text-gray-900 text-sm">{halqa.name}</h4>
                                <p className="text-xs text-gray-600">{halqa.time}</p>
                              </div>
                              {currentChild.selectedHalqa === halqa.id && (
                                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                              )}
                            </div>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getLevelBadge(halqa.level)}`}>
                              {halqa.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learning Goals */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                        أهداف التعلم (اختياري)
                      </label>
                      <textarea
                        name="learningGoals"
                        value={currentChild.learningGoals}
                        onChange={handleChildChange}
                        rows="3"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none resize-none text-right"
                        placeholder="ما الذي تريد أن يحققه ابنك من خلال الحلقة؟"
                      ></textarea>
                    </div>

                    {/* Add/Update Button */}
                    <button
                      onClick={addChild}
                      className="w-full bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      {editingChildIndex !== null ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>تحديث البيانات</span>
                        </>
                      ) : (
                        <>
                          <UserPlus className="w-5 h-5" />
                          <span>إضافة الطالب</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                onClick={() => completeRegistration()}
                className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3.5 rounded-xl font-bold transition-all duration-300"
              >
                {children.length > 0 ? 'إنهاء وإتمام التسجيل' : 'تخطي (يمكن الإضافة لاحقاً)'}
              </button>
              {children.length > 0 && (
                <button
                  onClick={() => completeRegistration()}
                  className="flex-1 bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>إتمام التسجيل ({children.length} طالب)</span>
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
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
              <UserCheck className="w-4 h-4" />
              إنشاء حساب جديد
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              انضم إلى <span className="text-amber-300">عائلتنا القرآنية</span>
            </h1>
            <p className="text-teal-50 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              أنشئ حسابك الآن واستمتع بتجربة تعليمية قرآنية متميزة مع متابعة دقيقة وتقارير شاملة
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

      {/* Main Content */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Account Type Selection */}
            {currentStep === 'selection' && (
              <motion.div
                key="selection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    اختر نوع الحساب
                  </h2>
                  <p className="text-lg text-gray-600">
                    اختر نوع الحساب المناسب لك للبدء في رحلتك التعليمية
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {accountTypes.map((type, index) => {
                    const colorClass = getColorClasses(type.color)
                    return (
                      <motion.div
                        key={type.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        onClick={() => selectAccountType(type.id)}
                        className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-gray-100 hover:border-emerald-300"
                      >
                        <div className={`bg-gradient-to-r ${colorClass.gradient} p-8 text-white relative overflow-hidden`}>
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                          </div>
                          
                          <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                              <type.icon className="w-9 h-9 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-right">{type.title}</h3>
                            <p className="text-white/90 text-sm text-right">{type.description}</p>
                          </div>
                        </div>

                        <div className="p-8">
                          <h4 className="font-bold text-gray-900 mb-4 text-right">المميزات:</h4>
                          <ul className="space-y-3 mb-6">
                            {type.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm">
                                <div className="flex-1 text-right">{feature}</div>
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClass.gradient} flex-shrink-0`}></div>
                              </li>
                            ))}
                          </ul>

                          <button className={`w-full bg-gradient-to-r ${colorClass.gradient} text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}>
                            <span>اختر هذا النوع</span>
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-12"
                >
                  <p className="text-gray-600">
                    لديك حساب بالفعل؟{' '}
                    <a href="/login" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                      تسجيل الدخول
                    </a>
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* Registration Form - Same as before but abbreviated for length */}
            {currentStep === 'registration' && (
              <motion.div
                key="registration"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-emerald-50 px-6 py-3 rounded-full mb-4 border border-emerald-200">
                      {selectedType === 'student' ? (
                        <GraduationCap className="w-6 h-6 text-emerald-600" />
                      ) : selectedType === 'parent' ? (
                        <Users className="w-6 h-6 text-teal-600" />
                      ) : (
                        <BookOpen className="w-6 h-6 text-cyan-600" />
                      )}
                      <span className="font-bold text-gray-900">
                        {selectedType === 'student' ? 'تسجيل حساب طالب' : 
                         selectedType === 'parent' ? 'تسجيل حساب ولي أمر' : 
                         'تسجيل حساب شيخ/معلم'}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">املأ بياناتك</h2>
                    <p className="text-gray-600">
                      {selectedType === 'parent' 
                        ? 'سيتم إنشاء حسابك ثم يمكنك إضافة حسابات أبنائك مباشرة'
                        : 'جميع الحقول المطلوبة مميزة بعلامة (*)'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3 text-right">
                        المعلومات الشخصية
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">الاسم الأول *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                            placeholder="أدخل الاسم الأول"
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1 text-right">{errors.firstName}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">اسم العائلة *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                            placeholder="أدخل اسم العائلة"
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1 text-right">{errors.lastName}</p>}
                        </div>
                      </div>

                      {/* Student Specific Fields */}
                      {selectedType === 'student' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">تاريخ الميلاد *</label>
                            <input
                              type="date"
                              name="birthDate"
                              value={formData.birthDate}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 rounded-xl border ${errors.birthDate ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                            />
                            {errors.birthDate && <p className="text-red-500 text-xs mt-1 text-right">{errors.birthDate}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">الجنس *</label>
                            <select
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 rounded-xl border ${errors.gender ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right bg-white`}
                            >
                              <option value="">اختر الجنس</option>
                              <option value="male">ذكر</option>
                              <option value="female">أنثى</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-xs mt-1 text-right">{errors.gender}</p>}
                          </div>
                        </div>
                      )}

                      {/* Parent Specific Fields */}
                      {selectedType === 'parent' && (
                        <>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">العنوان الكامل *</label>
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 rounded-xl border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                              placeholder="أدخل العنوان الكامل"
                            />
                            {errors.address && <p className="text-red-500 text-xs mt-1 text-right">{errors.address}</p>}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">المدينة *</label>
                              <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                                placeholder="أدخل المدينة"
                              />
                              {errors.city && <p className="text-red-500 text-xs mt-1 text-right">{errors.city}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">الولاية *</label>
                              <input
                                type="text"
                                name="wilaya"
                                value={formData.wilaya}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border ${errors.wilaya ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                                placeholder="أدخل الولاية"
                              />
                              {errors.wilaya && <p className="text-red-500 text-xs mt-1 text-right">{errors.wilaya}</p>}
                            </div>
                          </div>
                        </>
                      )}

                      {/* Sheikh Specific Fields */}
                      {selectedType === 'sheikh' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">المؤهل العلمي *</label>
                            <select
                              name="qualification"
                              value={formData.qualification}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 rounded-xl border ${errors.qualification ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right bg-white`}
                            >
                              <option value="">اختر المؤهل</option>
                              <option value="ijaza">إجازة في القرآن</option>
                              <option value="bachelor">بكالوريوس شريعة</option>
                              <option value="master">ماجستير</option>
                              <option value="phd">دكتوراه</option>
                            </select>
                            {errors.qualification && <p className="text-red-500 text-xs mt-1 text-right">{errors.qualification}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">سنوات الخبرة *</label>
                            <input
                              type="number"
                              name="experience"
                              value={formData.experience}
                              onChange={handleChange}
                              min="0"
                              className={`w-full px-4 py-3 rounded-xl border ${errors.experience ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                              placeholder="أدخل عدد السنوات"
                            />
                            {errors.experience && <p className="text-red-500 text-xs mt-1 text-right">{errors.experience}</p>}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3 text-right">معلومات التواصل</h3>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">رقم الهاتف *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                          placeholder="+213 555 123 456"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1 text-right">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">البريد الإلكتروني *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                          placeholder="example@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 text-right">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Account Security */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3 text-right">
                        <Shield className="inline w-5 h-5 ml-2" />
                        أمان الحساب
                      </h3>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">كلمة المرور *</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 pr-12 rounded-xl border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                            placeholder="أدخل كلمة المرور (8 أحرف على الأقل)"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1 text-right">{errors.password}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">تأكيد كلمة المرور *</label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 pr-12 rounded-xl border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                            placeholder="أعد إدخال كلمة المرور"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 text-right">{errors.confirmPassword}</p>}
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-1 w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-700 flex-1 text-right">
                        أوافق على <a href="/terms" className="text-emerald-600 font-semibold hover:text-emerald-700">الشروط والأحكام</a> و <a href="/privacy" className="text-emerald-600 font-semibold hover:text-emerald-700">سياسة الخصوصية</a>
                      </label>
                    </div>
                    {errors.terms && <p className="text-red-500 text-xs text-right">{errors.terms}</p>}

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentStep('selection')
                          setSelectedType(null)
                        }}
                        className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3.5 rounded-xl font-bold transition-all duration-300"
                      >
                        العودة لاختيار النوع
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>جاري الإنشاء...</span>
                          </>
                        ) : (
                          <>
                            <span>
                              {selectedType === 'parent' ? 'المتابعة لإضافة الأبناء' : 'إنشاء الحساب'}
                            </span>
                            <CheckCircle className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-600">
                      لديك حساب بالفعل؟{' '}
                      <a href="/login" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                        تسجيل الدخول
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}