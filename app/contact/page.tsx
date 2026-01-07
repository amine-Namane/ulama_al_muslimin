'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, User, ChevronLeft, ChevronDown, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const contactMethods = [
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "+213 555 123 456",
    description: "متاحون للرد على استفساراتكم",
    color: "primary"
  },
  {
    icon: Mail,
    title: "راسلنا",
    value: "info@quranic-school.dz",
    description: "نرد على الرسائل خلال 24 ساعة",
    color: "secondary"
  },
  {
    icon: MapPin,
    title: "موقعنا",
    value: "الجزائر، المسجد الكبير",
    description: "القاعة الرئيسية، الطابق الأول",
    color: "primary"
  },
  {
    icon: Clock,
    title: "أوقات العمل",
    value: "السبت - الخميس",
    description: "من 8 صباحاً حتى 8 مساءً",
    color: "secondary"
  }
]

const inquiryTypes = [
  "الاستفسار عن التسجيل",
  "معلومات عن الحلقات",
  "التواصل مع إدارة المدرسة",
  "اقتراحات وشكاوى",
  "التبرعات والدعم",
  "أخرى"
]

// Map configuration
const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '1rem'
}

const center = {
  lat: 36.5644895, // Algiers coordinates
  lng: 3.1495201
}

// FAQ Data with answers
const faqData = [
  {
    question: "ما هي شروط التسجيل؟",
    answer: "يشترط للتسجيل أن يكون الطالب حافظاً لأجزاء من القرآن الكريم، وأن يجتاز اختباراً شفوياً في التلاوة. كما يجب تقديم الوثائق التالية: صورة شخصية، صورة من شهادة الميلاد، وتقرير من الحلقة السابقة إن وجد."
  },
  {
    question: "كم تبلغ الرسوم الدراسية؟",
    answer: "الرسوم الدراسية تختلف حسب المرحلة التعليمية. للمراحل الأساسية (تحفيظ القرآن) تبلغ 15,000 دينار جزائري لكل فصل دراسي. أما لمراحل التجويد والإتقان فتبلغ 20,000 دينار جزائري. توجد منح دراسية للمتميزين ومخفضات للأخوة."
  },
  {
    question: "ما هي أوقات الحلقات المتاحة؟",
    answer: "نقدم حلقات في الفترات الصباحية (8:00 ص - 12:00 م) للمراحل الأساسية، والفترة المسائية (4:00 م - 8:00 م) لمراحل التجويد والإتقان. كما نقدم حلقات نهاية الأسبوع (الجمعة والسبت) للطلاب العاملين والجامعيين."
  },
  {
    question: "هل توجد حلقات للأطفال؟",
    answer: "نعم، لدينا برامج خاصة بالأطفال من سن 5 إلى 12 سنة، حيث نركز على تحفيظ القرآن مع الأنشطة التفاعلية والألعاب التعليمية. نقسم الأطفال إلى مجموعات حسب العمر والقدرات، مع مراعاة الأساليب التعليمية المناسبة لكل فئة عمرية."
  },
  {
    question: "ما هي الشهادات التي تمنحها المدرسة؟",
    answer: "تمنح المدرسة شهادة حفظ القرآن الكريم بعد إتمام الحفظ كاملاً، وشهادة إجازة في القراءات للمتخصصين، بالإضافة إلى شهادات مرحلية لكل جزء أو مستوى يتم اجتيازه بنجاح."
  },
  {
    question: "هل هناك برامج للكبار؟",
    answer: "نعم، لدينا برامج مسائية خاصة للكبار والموظفين، مع مرونة في المواعيد وتقسيم المستويات حسب القدرات. كما نقدم دورات مكثفة في الإجازات الصيفية."
  }
]

const getColorClasses = (color) => {
  const colors = {
    primary: {
      background: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      gradient: 'from-emerald-500 to-teal-600',
      hover: 'hover:bg-emerald-100'
    },
    secondary: {
      background: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-600',
      gradient: 'from-teal-500 to-cyan-600',
      hover: 'hover:bg-teal-100'
    }
  }
  return colors[color] || colors.primary
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const handleMapLoad = () => {
    setMapLoaded(true)
  }

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/place/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9+%D8%A7%D9%84%D8%B9%D9%84%D9%85%D8%A7%D8%A1+%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85%D9%8A%D9%86+%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1%D9%8A%D9%8A%D9%86+%D8%B4%D8%B9%D8%A8%D8%A9+%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%B9%D8%A7%D8%A1%E2%80%AD/@36.5644895,3.1495201,15.8z/data=!4m14!1m7!3m6!1s0x128eff641000ca5b:0x5561561376009e6f!2sEl+Bettani!8m2!3d36.5620712!4d3.1521655!16s%2Fg%2F11b6dp4jtm!3m5!1s0x128effc56cf9eabb:0x533fc0d42b4c3234!8m2!3d36.5622626!4d3.1494602!16s%2Fg%2F11s5k633jw?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D', '_blank')
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
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-amber-300">تواصل</span> معنا
            </h1>
            <p className="text-teal-50 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              فريقنا متواجد دائماً للإجابة على استفساراتكم ومساعدتكم في اختيار الحلقة المناسبة. 
              نسعد بتواصلكم معنا في أي وقت
            </p>
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

      {/* Contact Methods Grid */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20">
            {contactMethods.map((method, index) => {
              const colorClass = getColorClasses(method.color)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-14 h-14 rounded-xl ${colorClass.background} border ${colorClass.border} flex items-center justify-center mb-4`}>
                    <method.icon className={`w-7 h-7 ${colorClass.text}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className={`font-semibold mb-2 ${colorClass.text}`}>{method.value}</p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300594d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 text-right">أرسل رسالتك</h2>
                <p className="text-gray-600 mb-8 text-right">املأ النموذج أدناه وسنتواصل معك في أقرب وقت</p>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-4 mb-6 text-right"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="font-medium">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</span>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">الاسم الكامل *</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        placeholder="أدخل اسمك الكامل"
                      />
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">البريد الإلكتروني *</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        placeholder="example@email.com"
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">رقم الهاتف *</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right"
                        placeholder="+213 555 123 456"
                      />
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Inquiry Type Select */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">نوع الاستفسار *</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-right bg-white"
                    >
                      <option value="">اختر نوع الاستفسار</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-right">رسالتك *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none resize-none text-right"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>جاري الإرسال...</span>
                      </>
                    ) : (
                      <>
                        <span>إرسال الرسالة</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Quick Info Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right">معلومات التواصل السريع</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 text-right">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">للاستفسارات العامة</p>
                      <p className="text-gray-700">info@quranic-school.dz</p>
                      <p className="text-gray-700">+213 555 123 456</p>
                    </div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>

                  <div className="h-px bg-emerald-200"></div>

                  <div className="flex items-start gap-4 text-right">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">للتسجيل والقبول</p>
                      <p className="text-gray-700">admission@quranic-school.dz</p>
                      <p className="text-gray-700">+213 555 123 457</p>
                    </div>
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>

                  <div className="h-px bg-emerald-200"></div>

                  <div className="flex items-start gap-4 text-right">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">الدعم الفني</p>
                      <p className="text-gray-700">support@quranic-school.dz</p>
                      <p className="text-gray-700">متاح 24/7</p>
                    </div>
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Map */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 overflow-hidden">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-right">موقعنا على الخريطة</h3>
                <div className="relative h-80 rounded-2xl overflow-hidden border border-gray-200">
                  <LoadScript
                    googleMapsApiKey="GOOGLE_MAPS_API_KEY" 
                    onLoad={handleMapLoad}
                  >
                    {mapLoaded ? (
                      <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={16}
                        options={{
                          styles: [
                            {
                              featureType: "all",
                              elementType: "geometry",
                              stylers: [{ color: "#e2f5ed" }]
                            },
                            {
                              featureType: "all",
                              elementType: "labels.text.fill",
                              stylers: [{ color: "#00594d" }]
                            },
                            {
                              featureType: "all",
                              elementType: "labels.text.stroke",
                              stylers: [{ color: "#ffffff" }]
                            },
                            {
                              featureType: "all",
                              elementType: "labels.icon",
                              stylers: [{ visibility: "off" }]
                            },
                            {
                              featureType: "administrative",
                              elementType: "geometry",
                              stylers: [{ visibility: "off" }]
                            },
                            {
                              featureType: "landscape",
                              elementType: "geometry",
                              stylers: [{ color: "#d6f0e6" }]
                            },
                            {
                              featureType: "poi",
                              elementType: "geometry",
                              stylers: [{ color: "#c5ebdd" }]
                            },
                            {
                              featureType: "road",
                              elementType: "geometry",
                              stylers: [{ color: "#ffffff" }]
                            },
                            {
                              featureType: "road",
                              elementType: "geometry.stroke",
                              stylers: [{ color: "#b3dfd0" }]
                            },
                            {
                              featureType: "water",
                              elementType: "geometry",
                              stylers: [{ color: "#9cd5c2" }]
                            }
                          ]
                        }}
                      >
                        <Marker
                          position={center}
                          icon={{
                            url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300594d'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
                            scaledSize: new window.google.maps.Size(40, 40)
                          }}
                        />
                      </GoogleMap>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-8 h-8 text-emerald-600 animate-pulse" />
                          </div>
                          <p className="text-gray-700 font-semibold">جاري تحميل الخريطة...</p>
                        </div>
                      </div>
                    )}
                  </LoadScript>
                  
                  {/* Location info overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-gray-900">  جمعية العلماء المسلمين الجزائريين شعبة الأربعاء</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={openGoogleMaps}
                  className="w-full mt-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-200"
                >
                  <span>افتح في خرائط جوجل</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
</motion.div>
          </div>
        </div>
      </section>
              {/* FAQ Section with Answers */}
              <div className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 w-[80%] m-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-right">أسئلة شائعة</h3>
                <div className="space-y-4">
                  {faqData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-300 transition-colors"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-right px-5 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{item.question}</h4>
                          <p className={`text-sm text-gray-600 transition-all duration-300 ${expandedFAQ === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {item.answer}
                          </p>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-emerald-600 transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {/* Expanded content */}
                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-5 pb-4"
                        >
                          <div className="pt-3 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed text-right">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* View More FAQ Button */}
                <button className="w-full mt-6 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-200">
                  <span>عرض المزيد من الأسئلة</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            

      {/* Bottom CTA Section */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">لم تجد ما تبحث عنه؟</h3>
              <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                نحن هنا لمساعدتك! اتصل بنا مباشرة أو قم بزيارتنا في الجمعية للحصول على المزيد من المعلومات
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-900 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <span>احجز موعد زيارة</span>
                  <Calendar className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>اتصل بنا الآن</span>
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}