'use client'
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Heart,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

export default function Footer() {
  return (
    <footer  className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[size:60px_60px]" />

      {/* Top Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:px-8  ">
        <div className="flex justify-center">
        <div  dir="rtl" className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14  mt-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6 ">
              <div className="bg-gradient-to-r bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/30">
              <img src="Oulemas-removebg-preview.png"/>
              </div>
              <div className="text-right">
                <h3 className="text-xl font-extrabold">جمعية العلماء المسلمين</h3>
                <p className="text-gray-400 text-sm">نظام إدارة المدارسة القرآنية</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-right mb-6">
              منصة شاملة لإدارة التعليم القرآني، تهدف إلى تعليم كتاب الله تعالى ونشر العلوم الشرعية بأفضل الوسائل التقنية.
            </p>

            <div className="flex justify-end gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 transition-all"
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
<div className=" flex gap-5 mr-10">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-right border-r-4 border-emerald-500 pr-3">
              روابط سريعة
            </h4>
            <ul className="space-y-3 text-right">
              {[
                "الحلقات القرآنية",
                "مميزات النظام",
                "كيفية الانضمام",
                "آراء المستخدمين",
                "التبرعات",
                "الأسئلة الشائعة",
              ].map((name, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 block"
                  >
                    {name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-right border-r-4 border-emerald-500 pr-3">
              خدماتنا
            </h4>
            <ul className="space-y-3 text-right">
              {[
                { name: "حفظ القرآن الكريم", icon: BookOpen },
                { name: "تعليم التجويد", icon: Award },
                { name: "حلقات التفسير", icon: Users },
                { name: "برامج الأطفال", icon: Heart },
                { name: "التعليم عن بعد", icon: Award },
                { name: "الإشراف التعليمي", icon: Users },
              ].map((service, i) => (
                 <li
                  key={i}
                //   className="flex items-center gap-3 justify-end hover:text-emerald-400 transition-all"
                                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 block"

                 >
                   <span >{service.name}</span>
                   <service.icon className="w-4 h-4 text-emerald-400" />
                 </li>
                
              ))}
            </ul>
          </motion.div>
</div>
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-right border-r-4 border-emerald-500 pr-3">
              اتصل بنا
            </h4>

            <div className="space-y-4 text-right">
              <div className="flex items-center gap-3 ">
                <MapPin className="text-emerald-400 w-5 h-5" />
                <p className="text-gray-300">الرياض، المملكة العربية السعودية</p>
              </div>
              <div className="flex items-center gap-3 ">
                <Phone className="text-emerald-400 w-5 h-5" />
                <p className="text-gray-300">+966 50 123 4567</p>
              </div>
              <div className="flex items-center gap-3 ">
                <Mail className="text-emerald-400 w-5 h-5" />
                <p className="text-gray-300">info@quran-academy.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-right">
                اشترك في النشرة الإخبارية
              </h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 text-right"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all"
                >
                  اشتراك
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
</div>
        {/* Divider */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            © 2025 جمعية العلماء المسلمين — جميع الحقوق محفوظة.
          </motion.p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/966501234567"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 left-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all z-50"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
      </motion.a>
    </footer>
  );
}
