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
    { name: "الحلقات", href: "halqat" },
    { name: "البرامج", href: "programs" },
    { name: "تبرع معنا", href: "donate" },
    { name: "تواصل معنا", href: "contact" },
  ]

  return (
    <header dir="rtl" className="fixed top-0 left-0 w-full bg-[#f8fafc]/80 backdrop-blur-md  border-gray-200 z-50  ">
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
          <Link href={'login'}>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white rounded-full px-5 ml-5">
            تسجيل الدخول
          </Button></Link>
          <Link href={'registacount'}>
          <Button className="bg-[#10b981] hover:bg-[#059669] text-white rounded-full px-5">
           طلب تسجيل
          </Button></Link>
        </nav>


        {/* Mobile Menu Icon */}
        <button
  onClick={() => setOpen(prev => !prev)}
  aria-label="Toggle menu"
  aria-expanded={open}
  className="md:hidden text-[#10b981] focus:outline-none transition mr-auto"
>
  {open ? <X size={28} /> : <Menu size={28} />}
</button>

      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
  {open && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="md:hidden bg-white shadow-xl border-t border-gray-100"
    >
      <div className="flex flex-col items-start px-6 py-6 space-y-5">
        {navLinks.map(link => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="w-full text-gray-700 text-lg font-medium hover:text-[#10b981] transition-colors"
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="/login"
          onClick={() => setOpen(false)}
          className="w-full text-center bg-[#10b981] hover:bg-[#059669] text-white font-semibold py-3 rounded-full transition-colors"
        >
          تسجيل الدخول
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  )
}
