'use client'

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "aboutus" },
    { name: "البرامج", href: "halqat" },
    { name: "الشيوخ", href: "#programs" },
    { name: "تبرع معنا", href: "donate" },
    { name: "تواصل معنا", href: "#contact" },
  ]

  return (
    <header dir="rtl" className="fixed top-0 left-0 w-full bg-[#f8fafc]/80 backdrop-blur-md border-b border-gray-200 z-50 mb-20">
      <div className="max-w-7xl mx-auto flex  items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-sm font-bold text-[#10b981] tracking-tight">
            <img src="Oulemas-removebg-preview.png" className="w-13 "/>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#10b981] transition-colors font-medium ml-9"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white rounded-full px-5 ml-5">
            تسجيل الدخول
          </Button>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white rounded-full px-5">
           طلب تسجيل
          </Button>
        </nav>


        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#10b981] focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#10b981] text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white rounded-full px-5">
                تسجيل الدخول
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
