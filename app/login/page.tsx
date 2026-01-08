'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, CheckCircle, GraduationCap, Users, BookOpen, ArrowRight, Shield } from 'lucide-react'
import { useState } from 'react'
import { LucideIcon } from 'lucide-react'
type ColorType = 'emerald' | 'teal' | 'cyan'

type AccountTypeItem = {
  id: AccountType
  title: string
  icon: LucideIcon
  color: ColorType
  description: string
}

const accountTypes: AccountTypeItem[] = [
  {
    id: 'student',
    title: 'طالب',
    icon: GraduationCap,
    color: 'emerald',
    description: 'تسجيل دخول الطلاب'
  },
  {
    id: 'parent',
    title: 'ولي أمر',
    icon: Users,
    color: 'teal',
    description: 'تسجيل دخول أولياء الأمور'
  },
  {
    id: 'sheikh',
    title: 'شيخ/معلم',
    icon: BookOpen,
    color: 'cyan',
    description: 'تسجيل دخول المعلمين'
  }
]
type LoginFormData = {
  email: string
  password: string
  rememberMe: boolean
}
type FormErrors = Partial<Record<keyof LoginFormData, string>>

type AccountType = 'student' | 'parent' | 'sheikh'

export default function LoginPage() {
const [selectedType, setSelectedType] = useState<AccountType | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [resetEmailSent, setResetEmailSent] = useState(false)
  
const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  })

  const [resetEmail, setResetEmail] = useState('')
const [errors, setErrors] = useState<FormErrors>({})
  const [loginError, setLoginError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    setLoginError('')
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
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setLoginError('')

    // Simulate API call
    setTimeout(() => {
      // Mock validation - replace with actual API call
      if (formData.email === 'test@example.com' && formData.password === 'password123') {
        // Success - redirect to dashboard
        window.location.href = `/dashboard/${selectedType}`
      } else {
        setLoginError('البريد الإلكتروني أو كلمة المرور غير صحيحة')
        setIsLoading(false)
      }
    }, 1500)
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()
    
    if (!resetEmail || !/\S+@\S+\.\S+/.test(resetEmail)) {
      return
    }

    setIsLoading(true)

    // Simulate sending reset email
    setTimeout(() => {
      setIsLoading(false)
      setResetEmailSent(true)
    }, 1500)
  }
// type ColorType = 'emerald' | 'teal' | 'cyan'

  const getColorClasses = (color:ColorType) => {
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

  // Forgot Password Modal
  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
        >
          {!resetEmailSent ? (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">استعادة كلمة المرور</h2>
                <p className="text-gray-600 text-sm">
                  أدخل بريدك الإلكتروني وسنرسل لك رابط لإعادة تعيين كلمة المرور
                </p>
              </div>

              <form onSubmit={handleForgotPassword} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                      placeholder="example@email.com"
                      required
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <span>إرسال رابط الاستعادة</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowForgotPassword(false)
                    setResetEmail('')
                  }}
                  className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl font-semibold transition-all"
                >
                  العودة لتسجيل الدخول
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">تم إرسال الرابط!</h3>
              <p className="text-gray-600 mb-6">
                تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.
                يرجى التحقق من صندوق الوارد أو مجلد الرسائل غير المرغوب فيها.
              </p>
              <button
                onClick={() => {
                  setShowForgotPassword(false)
                  setResetEmailSent(false)
                  setResetEmail('')
                }}
                className="w-full bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                العودة لتسجيل الدخول
              </button>
            </motion.div>
          )}
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
              <LogIn className="w-4 h-4" />
              تسجيل الدخول
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              مرحباً بعودتك إلى <span className="text-amber-300">مدرستنا القرآنية</span>
            </h1>
            <p className="text-teal-50 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              سجل دخولك للوصول إلى حسابك ومتابعة رحلتك التعليمية في حفظ القرآن الكريم
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
            {!selectedType ? (
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
                    حدد نوع حسابك لتسجيل الدخول
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {accountTypes.map((type, index) => {
                    const colorClass = getColorClasses(type.color)
                    return (
                      <motion.div
                        key={type.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        onClick={() => setSelectedType(type.id)}
                        className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-gray-100 hover:border-emerald-300"
                      >
                        <div className={`bg-gradient-to-r ${colorClass.gradient} p-8 text-white relative overflow-hidden`}>
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                          </div>
                          
                          <div className="relative z-10 text-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <type.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                            <p className="text-white/90 text-sm">{type.description}</p>
                          </div>
                        </div>

                        <div className="p-6">
                          <button className={`w-full bg-gradient-to-r ${colorClass.gradient} text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}>
                            <span>تسجيل الدخول</span>
                            <ArrowRight className="w-5 h-5" />
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
                    ليس لديك حساب؟{' '}
                    <a href="/register" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                      إنشاء حساب جديد
                    </a>
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              /* Login Form */
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <button
                      onClick={() => {
                        setSelectedType(null)
                        setFormData({ email: '', password: '', rememberMe: false })
                        setErrors({})
                        setLoginError('')
                      }}
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors mb-4"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-sm">تغيير نوع الحساب</span>
                    </button>

                    <div className="inline-flex items-center gap-3 bg-emerald-50 px-6 py-3 rounded-full mb-4 border border-emerald-200">
                      {accountTypes.find(t => t.id === selectedType)?.icon && (
                        <>
                          {selectedType === 'student' && <GraduationCap className="w-6 h-6 text-emerald-600" />}
                          {selectedType === 'parent' && <Users className="w-6 h-6 text-teal-600" />}
                          {selectedType === 'sheikh' && <BookOpen className="w-6 h-6 text-cyan-600" />}
                        </>
                      )}
                      <span className="font-bold text-gray-900">
                        تسجيل دخول {accountTypes.find(t => t.id === selectedType)?.title}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">مرحباً بعودتك</h2>
                    <p className="text-gray-600">أدخل بياناتك للوصول إلى حسابك</p>
                  </div>

                  {/* Login Error */}
                  {loginError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-800 text-right flex-1">{loginError}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                        البريد الإلكتروني *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 pr-12 rounded-xl border ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                          placeholder="example@email.com"
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 text-right">{errors.email}</p>
                      )}
                    </div>

                    {/* Password Input */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                        كلمة المرور *
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 pr-12 rounded-xl border ${
                            errors.password ? 'border-red-500' : 'border-gray-300'
                          } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right`}
                          placeholder="أدخل كلمة المرور"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                        <Lock className="absolute left-12 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-xs mt-1 text-right">{errors.password}</p>
                      )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setShowForgotPassword(true)}
                        className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                      >
                        نسيت كلمة المرور؟
                      </button>
                      
                      <div className="flex items-center gap-2">
                        <label htmlFor="rememberMe" className="text-sm text-gray-700 cursor-pointer">
                          تذكرني
                        </label>
                        <input
                          type="checkbox"
                          id="rememberMe"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>جاري تسجيل الدخول...</span>
                        </>
                      ) : (
                        <>
                          <span>تسجيل الدخول</span>
                          <LogIn className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Demo Credentials */}
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <p className="text-xs text-blue-800 text-right mb-2">
                      <strong>للتجربة:</strong>
                    </p>
                    <p className="text-xs text-blue-700 text-right">
                      البريد: test@example.com
                      <br />
                      كلمة المرور: password123
                    </p>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-600">
                      ليس لديك حساب؟{' '}
                      <a href="/register" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                        إنشاء حساب جديد
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