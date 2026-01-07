// 'use client'
// import React, { useEffect, useState, useRef } from "react";
// import {
//   X,
//   Clock,
//   BookOpen,
//   Target,
//   Play,
//   Pause,
//   CheckCircle,
//   XCircle,
//   AlertCircle,
//   Star,
//   Save,
//   Send,
//   Menu,
//   SunMoon,
//   Sun,
//   Moon,
//   ChevronLeft
// } from "lucide-react";

// /**
//  * AttendanceSessionModern
//  * - Modern professional redesign
//  * - Theme toggle: 'A' (Neutral + Emerald) or 'D' (Pure Minimal)
//  * - Persists to localStorage under "attendance_v2"
//  */

// const initialStudents = [
//   {
//     id: 1,
//     name: "أحمد محمد الصالح",
//     avatar: "أ",
//     attendance: null,
//     participation: 0,
//     recitation: 0,
//     homework: null,
//     notes: "",
//     lastWeekAttendance: ["present", "present", "present"],
//     streak: 15,
//   },
//   {
//     id: 2,
//     name: "فاطمة الزهراء أحمد",
//     avatar: "ف",
//     attendance: null,
//     participation: 0,
//     recitation: 0,
//     homework: null,
//     notes: "",
//     lastWeekAttendance: ["present", "present", "late"],
//     streak: 12,
//   },
//   {
//     id: 3,
//     name: "يوسف عبد الله محمود",
//     avatar: "ي",
//     attendance: null,
//     participation: 0,
//     recitation: 0,
//     homework: null,
//     notes: "",
//     lastWeekAttendance: ["present", "absent", "present"],
//     streak: 8,
//   },
//   {
//     id: 4,
//     name: "مريم إبراهيم حسن",
//     avatar: "م",
//     attendance: null,
//     participation: 0,
//     recitation: 0,
//     homework: null,
//     notes: "",
//     lastWeekAttendance: ["present", "present", "present"],
//     streak: 20,
//   },
//   {
//     id: 5,
//     name: "خالد السعدي",
//     avatar: "خ",
//     attendance: null,
//     participation: 0,
//     recitation: 0,
//     homework: null,
//     notes: "",
//     lastWeekAttendance: ["late", "present", "present"],
//     streak: 5,
//   },
//   {
//     id: 6,
//     name: "سارة أحمد علي",
//     avatar: "س",
//     attendance: null,
//     participation: 0,
//     recitation: 0,
//     homework: null,
//     notes: "",
//     lastWeekAttendance: ["present", "present", "present"],
//     streak: 18,
//   },
// ];

// export default function AttendanceSessionModern() {
//   // Theme: 'A' = Neutral+Emerald, 'D' = Minimal (gray/black)
//   const [theme, setTheme] = useState(() => {
//     return localStorage.getItem("attendance_theme") || "A";
//   });

//   const [sessionStarted, setSessionStarted] = useState(false);
//   const [sessionTime, setSessionTime] = useState(0); // seconds
//   const tickRef = useRef(null);

//   // students persisted
//   const [students, setStudents] = useState(() => {
//     try {
//       const raw = localStorage.getItem("attendance_v2");
//       return raw ? JSON.parse(raw) : initialStudents;
//     } catch {
//       return initialStudents;
//     }
//   });

//   // UI state
//   const [notesDrawerOpen, setNotesDrawerOpen] = useState(false);
//   const [activeStudentId, setActiveStudentId] = useState(null);
//   const activeStudent = students.find((s) => s.id === activeStudentId) || null;

//   const sessionInfo = {
//     className: "حلقة التجويد المتقدم",
//     time: "6:00 - 7:30 صباحاً",
//     date: "الأحد، 18 نوفمبر 2024",
//     room: "القاعة الكبرى",
//     duration: "ساعة ونصف",
//   };

//   // Persist students and theme
//   useEffect(() => {
//     localStorage.setItem("attendance_v2", JSON.stringify(students));
//   }, [students]);

//   useEffect(() => {
//     localStorage.setItem("attendance_theme", theme);
//   }, [theme]);

//   // Session timer
//   useEffect(() => {
//     if (sessionStarted) {
//       tickRef.current = setInterval(() => {
//         setSessionTime((t) => t + 1);
//       }, 1000);
//     } else if (tickRef.current) {
//       clearInterval(tickRef.current);
//       tickRef.current = null;
//     }
//     return () => {
//       if (tickRef.current) {
//         clearInterval(tickRef.current);
//       }
//     };
//   }, [sessionStarted]);

//   // Stats computed
//   const stats = {
//     total: students.length,
//     present: students.filter((s) => s.attendance === "present").length,
//     absent: students.filter((s) => s.attendance === "absent").length,
//     late: students.filter((s) => s.attendance === "late").length,
//     excused: students.filter((s) => s.attendance === "excused").length,
//   };

//   // Helpers
//   const updateStudents = (updater) =>
//     setStudents((prev) => {
//       const next = prev.map((s) => (s.id === updater.id ? { ...s, ...updater.changes } : s));
//       return next;
//     });

//   const updateAttendance = (studentId, status) => {
//     setStudents((prev) => prev.map((s) => (s.id === studentId ? { ...s, attendance: status } : s)));
//   };

//   const updateRating = (studentId, field, value) => {
//     setStudents((prev) => prev.map((s) => (s.id === studentId ? { ...s, [field]: value } : s)));
//   };

//   const updateNotes = (studentId, notes) => {
//     setStudents((prev) => prev.map((s) => (s.id === studentId ? { ...s, notes } : s)));
//   };

//   const resetAttendance = () => {
//     setStudents((prev) => prev.map((s) => ({ ...s, attendance: null, participation: 0, recitation: 0, homework: null })));
//     setSessionTime(0);
//     setSessionStarted(false);
//   };

//   const markAllPresent = () => {
//     setStudents((prev) => prev.map((s) => ({ ...s, attendance: "present" })));
//   };

//   // color helpers for badges (abstracted for theme)
//   const attendanceClasses = (status) => {
//     const mapA = {
//       present: "bg-emerald-100 text-emerald-800",
//       absent: "bg-rose-100 text-rose-800",
//       late: "bg-amber-100 text-amber-800",
//       excused: "bg-sky-100 text-sky-800",
//       null: "bg-gray-50 text-gray-500",
//     };
//     const mapD = {
//       present: "bg-black text-white",
//       absent: "bg-gray-900 text-white",
//       late: "bg-gray-700 text-white",
//       excused: "bg-gray-600 text-white",
//       null: "bg-gray-100 text-gray-700",
//     };
//     const map = theme === "A" ? mapA : mapD;
//     return map[status] || map.null;
//   };

//   // small utilities
//   const fmtTime = (sec) => {
//     const mm = Math.floor(sec / 60);
//     const ss = sec % 60;
//     return `${mm}:${ss.toString().padStart(2, "0")}`;
//   };

//   // Open notes drawer for student
//   const openNotes = (studentId) => {
//     setActiveStudentId(studentId);
//     setNotesDrawerOpen(true);
//   };

//   // Save action (stub)
//   const handleSave = () => {
//     // implement saving logic (API) here
//     localStorage.setItem("attendance_v2", JSON.stringify(students));
//     alert("تم حفظ بيانات الحلقة محليًا.");
//   };

//   // Send report (stub)
//   const handleSendReport = () => {
//     // implement send logic
//     alert("تم إرسال التقرير (محاكاة).");
//   };

//   // theme toggle (A <-> D)
//   const toggleTheme = () => setTheme((t) => (t === "A" ? "D" : "A"));

//   return (
//     <div dir="rtl" className={`${theme === "A" ? "bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50" : "bg-gray-50"} min-h-screen p-6`}>
//       <div className="max-w-7xl mx-auto">
//         {/* Header (sticky) */}
//         <header className={`sticky top-6 z-20 rounded-2xl ${theme === "A" ? "bg-white/90 backdrop-blur-sm" : "bg-white/95"} border ${theme === "A" ? "border-gray-200" : "border-gray-200"} shadow`}>
//           <div className="flex items-center justify-between gap-4 p-4 md:p-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 rounded-lg bg-gray-100/60">
//                 <BookOpen size={22} />
//               </div>
//               <div>
//                 <h1 className="text-lg md:text-2xl font-semibold text-gray-900">{sessionInfo.className}</h1>
//                 <div className="flex items-center gap-3 text-sm text-gray-600">
//                   <div className="flex items-center gap-1">
//                     <Clock size={14} />
//                     <span>{sessionInfo.time}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Target size={14} />
//                     <span>{sessionInfo.room}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <button
//                 aria-pressed={sessionStarted}
//                 onClick={() => setSessionStarted((s) => !s)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold shadow-sm transition ${theme === "A" ? (sessionStarted ? "bg-emerald-600 text-white" : "bg-white text-emerald-600 border border-emerald-200") : (sessionStarted ? "bg-black text-white" : "bg-white text-gray-900 border border-gray-200")}`}
//               >
//                 {sessionStarted ? <Pause size={16} /> : <Play size={16} />} {sessionStarted ? "إيقاف مؤقت" : "بدء الحلقة"}
//               </button>

//               <div className="text-right px-4 py-2 rounded-xl border border-gray-100">
//                 <div className="text-xs text-gray-500">مدة الحلقة</div>
//                 <div className="text-lg font-bold">{fmtTime(sessionTime)}</div>
//               </div>

//               <button
//                 title="تبديل الستايل"
//                 onClick={toggleTheme}
//                 className="p-2 rounded-md border border-gray-200 bg-white"
//                 aria-label="Toggle theme"
//               >
//                 <SunMoon size={18} />
//               </button>
//             </div>
//           </div>

//           {/* Stats Bar */}
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-3 md:p-4 border-t border-gray-100">
//             <div className="p-3 rounded-lg text-center">
//               <div className="text-sm text-gray-500">إجمالي الطلاب</div>
//               <div className="text-xl font-bold">{stats.total}</div>
//             </div>
//             <div className="p-3 rounded-lg text-center">
//               <div className="text-sm text-gray-500">حاضرون</div>
//               <div className="text-xl font-bold text-emerald-600">{stats.present}</div>
//             </div>
//             <div className="p-3 rounded-lg text-center">
//               <div className="text-sm text-gray-500">غائبون</div>
//               <div className="text-xl font-bold text-rose-600">{stats.absent}</div>
//             </div>
//             <div className="p-3 rounded-lg text-center">
//               <div className="text-sm text-gray-500">متأخرون</div>
//               <div className="text-xl font-bold text-amber-600">{stats.late}</div>
//             </div>
//             <div className="p-3 rounded-lg text-center">
//               <div className="text-sm text-gray-500">بعذر</div>
//               <div className="text-xl font-bold text-sky-600">{stats.excused}</div>
//             </div>
//           </div>
//         </header>

//         {/* Layout: left = students (scroll), right = quick actions (desktop) */}
//         <main className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
//           <section className="lg:col-span-8">
//             <div className="space-y-4">
//               {/* Controls row */}
//               <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-between">
//                 <div className="flex items-center gap-3">
//                   <button onClick={markAllPresent} className={`px-4 py-2 rounded-lg font-medium ${theme === "A" ? "bg-emerald-600 text-white" : "bg-black text-white"}`}>اجعل الجميع حاضر</button>
//                   <button onClick={resetAttendance} className="px-4 py-2 rounded-lg font-medium bg-white border border-gray-200">إعادة ضبط</button>
//                 </div>
//                 <div className="text-sm text-gray-500">عرض الطلاب — اسحب لأسفل للبحث أو تعديل</div>
//               </div>

//               {/* Students list (scrollable) */}
//               <div className="space-y-4 max-h-[66vh] overflow-y-auto pr-2">
//                 {students.map((student) => (
//                   <article
//                     key={student.id}
//                     className={`flex items-center gap-4 p-4 rounded-2xl border ${theme === "A" ? "border-gray-200 bg-white" : "border-gray-200 bg-white"} shadow-sm`}
//                   >
//                     <div className="flex-shrink-0">
//                       <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-semibold ${theme === "A" ? "bg-emerald-50 text-emerald-800" : "bg-gray-100 text-gray-900"}`}>
//                         {student.avatar}
//                       </div>
//                     </div>

//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-start justify-between gap-2">
//                         <div>
//                           <h3 className="font-medium text-gray-900 truncate">{student.name}</h3>
//                           <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
//                             <div className="flex items-center gap-1">
//                               {student.lastWeekAttendance.map((s, i) => (
//                                 <span key={i} className={`w-2 h-2 rounded-full ${s === "present" ? "bg-emerald-500" : s === "late" ? "bg-amber-400" : s === "absent" ? "bg-rose-500" : "bg-gray-300"}`} />
//                               ))}
//                               <span className="mr-2">آخر 3 حلقات</span>
//                             </div>
//                             <div className="px-2 py-1 rounded-md text-xs border border-gray-100">{student.streak} 🔥</div>
//                           </div>
//                         </div>

//                         <div className="text-xs">
//                           <div className={`px-3 py-1 rounded-full text-center ${attendanceClasses(student.attendance)}`}>
//                             {student.attendance ? (student.attendance === "present" ? "حاضر" : student.attendance === "absent" ? "غائب" : student.attendance === "late" ? "متأخر" : "بعذر") : "غير محدد"}
//                           </div>
//                         </div>
//                       </div>

//                       {/* controls row */}
//                       <div className="mt-3 flex items-center gap-3">
//                         {/* Attendance buttons */}
//                         <div className="flex items-center gap-2">
//                           <button
//                             onClick={() => updateAttendance(student.id, "present")}
//                             className={`flex items-center gap-2 px-3 py-2 rounded-lg ${student.attendance === "present" ? "bg-emerald-600 text-white shadow" : "bg-emerald-50 text-emerald-700"}`}
//                             aria-label={`Mark ${student.name} present`}
//                           >
//                             <CheckCircle size={16} /> حاضر
//                           </button>
//                           <button
//                             onClick={() => updateAttendance(student.id, "absent")}
//                             className={`flex items-center gap-2 px-3 py-2 rounded-lg ${student.attendance === "absent" ? "bg-rose-600 text-white shadow" : "bg-rose-50 text-rose-700"}`}
//                             aria-label={`Mark ${student.name} absent`}
//                           >
//                             <XCircle size={16} /> غائب
//                           </button>
//                           <button
//                             onClick={() => updateAttendance(student.id, "late")}
//                             className={`flex items-center gap-2 px-3 py-2 rounded-lg ${student.attendance === "late" ? "bg-amber-500 text-white shadow" : "bg-amber-50 text-amber-700"}`}
//                             aria-label={`Mark ${student.name} late`}
//                           >
//                             <Clock size={16} /> متأخر
//                           </button>
//                         </div>

//                         {/* Ratings compact */}
//                         <div className="flex items-center gap-2 ml-auto">
//                           <div className="text-xs text-gray-500">مشاركة</div>
//                           <div className="flex items-center gap-1">
//                             {[1, 2, 3, 4, 5].map((n) => (
//                               <button key={n} onClick={() => updateRating(student.id, "participation", n)} className="p-1" aria-label={`Set participation ${n}`}>
//                                 <Star size={14} className={n <= student.participation ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
//                               </button>
//                             ))}
//                           </div>

//                           <div className="ml-3 text-xs text-gray-500">تلاوة</div>
//                           <div className="flex items-center gap-1">
//                             {[1, 2, 3, 4, 5].map((n) => (
//                               <button key={n} onClick={() => updateRating(student.id, "recitation", n)} className="p-1" aria-label={`Set recitation ${n}`}>
//                                 <Star size={14} className={n <= student.recitation ? "fill-emerald-400 text-emerald-400" : "text-gray-300"} />
//                               </button>
//                             ))}
//                           </div>

//                           {/* Notes quick open */}
//                           <button onClick={() => openNotes(student.id)} className="ml-4 text-sm text-gray-600 underline">
//                             ملاحظات
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Right column - actions & selected student summary */}
//           <aside className="lg:col-span-4">
//             <div className="space-y-4 sticky top-32">
//               <div className={`p-4 rounded-2xl border ${theme === "A" ? "bg-white" : "bg-white"} shadow-sm`}>
//                 <h4 className="text-sm text-gray-500">مختصر الطالب</h4>
//                 {activeStudent ? (
//                   <div className="mt-3">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-emerald-50 text-emerald-800 font-semibold">{activeStudent.avatar}</div>
//                       <div>
//                         <div className="font-medium text-gray-900">{activeStudent.name}</div>
//                         <div className="text-xs text-gray-500">الحالة: {activeStudent.attendance || "غير محدد"}</div>
//                       </div>
//                     </div>
//                     <div className="mt-3 text-sm text-gray-600">
//                       <div>مشاركة: {activeStudent.participation} / 5</div>
//                       <div>تلاوة: {activeStudent.recitation} / 5</div>
//                       <div className="mt-2 text-xs text-gray-500">ملاحظات سريعة:</div>
//                       <div className="mt-1 text-sm text-gray-700 whitespace-pre-wrap">{activeStudent.notes || "لا توجد ملاحظات"}</div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="mt-3 text-sm text-gray-600">اختر طالبًا لعرض موجز ملاحظاته</div>
//                 )}
//               </div>

//               <div className="p-4 rounded-2xl border bg-white shadow-sm">
//                 <div className="flex items-center justify-between mb-3">
//                   <div>
//                     <div className="text-xs text-gray-500">أفعال سريعة</div>
//                     <div className="text-sm font-semibold">حفظ / إرسال / تصدير</div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-3">
//                   <button onClick={handleSave} className={`w-full px-4 py-3 rounded-lg font-semibold ${theme === "A" ? "bg-emerald-600 text-white" : "bg-black text-white"}`}>
//                     <Save size={16} className="inline-block ml-2" /> حفظ وإنهاء الحلقة
//                   </button>
//                   <button onClick={handleSendReport} className="w-full px-4 py-3 rounded-lg font-semibold bg-white border border-gray-200 text-gray-800">
//                     <Send size={16} className="inline-block ml-2" /> إرسال تقرير لأولياء الأمور
//                   </button>
//                 </div>
//               </div>

//               <div className="p-4 rounded-2xl border bg-white shadow-sm">
//                 <div className="text-xs text-gray-500">إعدادات</div>
//                 <div className="mt-3 flex items-center justify-between">
//                   <div className="text-sm">السمة</div>
//                   <div>
//                     <button onClick={toggleTheme} className="px-3 py-1 rounded-lg border border-gray-200">
//                       {theme === "A" ? "Neutral + Emerald" : "Pure Minimal"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </main>

//         {/* Notes Drawer */}
//         <div className={`fixed inset-0 z-50 ${notesDrawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
//           <div
//             className={`absolute inset-0 transition-opacity ${notesDrawerOpen ? "opacity-40" : "opacity-0"}`}
//             onClick={() => setNotesDrawerOpen(false)}
//             style={{ background: "rgba(0,0,0,0.35)" }}
//             aria-hidden
//           />
//           <aside className={`absolute top-0 bottom-0 w-full md:w-96 right-0 transform transition-transform ${notesDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
//             <div className="h-full bg-white shadow-2xl border-l border-gray-100 flex flex-col">
//               <div className="p-4 border-b flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <button onClick={() => setNotesDrawerOpen(false)} className="p-2 rounded-md border border-gray-200"><ChevronLeft size={16} /></button>
//                   <h3 className="text-lg font-semibold">ملاحظات الطالب</h3>
//                 </div>
//                 <div className="text-sm text-gray-500">حرر و اضغط حفظ</div>
//               </div>

//               <div className="p-4 overflow-auto flex-1">
//                 {activeStudent ? (
//                   <>
//                     <div className="mb-3 text-sm text-gray-600 font-medium">{activeStudent.name}</div>
//                     <textarea
//                       value={activeStudent.notes}
//                       onChange={(e) => updateNotes(activeStudent.id, e.target.value)}
//                       rows={10}
//                       className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
//                       placeholder="اكتب ملاحظاتك التفصيلية هنا..."
//                     />
//                   </>
//                 ) : (
//                   <div className="text-sm text-gray-500">اختر طالبًا لكتابة ملاحظات مفصلة</div>
//                 )}
//               </div>

//               <div className="p-4 border-t flex gap-3">
//                 <button onClick={() => { setNotesDrawerOpen(false); handleSave(); }} className={`flex-1 px-4 py-3 rounded-lg font-semibold ${theme === "A" ? "bg-emerald-600 text-white" : "bg-black text-white"}`}>
//                   حفظ
//                 </button>
//                 <button onClick={() => setNotesDrawerOpen(false)} className="flex-1 px-4 py-3 rounded-lg border border-gray-200">
//                   إغلاق
//                 </button>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'
import { useState } from 'react'
import { 
  Bell, Search, Settings, Menu, X, Home, Users, BookOpen, Calendar, 
  BarChart3, MessageCircle, Award, Clock, ChevronLeft, Download,
  Plus, Eye, Filter, MoreVertical, Play, Edit, Trash2, Copy,
  Video, Mic, CheckCircle, AlertCircle, TrendingUp, Target, Star
} from 'lucide-react'

export default function ClassesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('classes')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const classes = [
    {
      id: 1,
      name: "حلقة التجويد المتقدم",
      description: "تعليم أحكام التجويد المتقدمة والقراءات العشر",
      teacher: "الشيخ محمد الأمين",
      students: 24,
      maxStudents: 30,
      level: "متقدم",
      schedule: "السبت - الأحد - الثلاثاء",
      time: "6:00 صباحاً",
      duration: "ساعة ونصف",
      room: "القاعة الكبرى",
      status: "active",
      startDate: "2024-01-15",
      progress: 65,
      completionRate: 88,
      attendance: 92,
      nextSession: "اليوم",
      color: "purple",
      materials: ["كتاب التجويد المصور", "سماعات"],
      objectives: ["إتقان أحكام الوقف والابتداء", "دراسة القراءات العشر"]
    },
    {
      id: 2,
      name: "حفظ جزء عم",
      description: "حفظ ومراجعة الجزء الثلاثين من القرآن الكريم",
      teacher: "الشيخ محمد الأمين",
      students: 32,
      maxStudents: 35,
      level: "مبتدئ",
      schedule: "يومياً",
      time: "4:00 مساءً",
      duration: "ساعة",
      room: "القاعة الثانية",
      status: "active",
      startDate: "2024-02-01",
      progress: 45,
      completionRate: 75,
      attendance: 95,
      nextSession: "اليوم",
      color: "emerald",
      materials: ["مصحف التجويد", "دفتر الحفظ"],
      objectives: ["حفظ جزء عم كاملاً", "إتقان التلاوة الصحيحة"]
    },
    {
      id: 3,
      name: "مراجعة القرآن الكريم",
      description: "مراجعة وتثبيت ما تم حفظه من القرآن",
      teacher: "الشيخ محمد الأمين",
      students: 18,
      maxStudents: 25,
      level: "متوسط",
      schedule: "الأحد - الثلاثاء - الخميس",
      time: "7:00 مساءً",
      duration: "ساعة",
      room: "القاعة الثالثة",
      status: "active",
      startDate: "2024-01-20",
      progress: 70,
      completionRate: 82,
      attendance: 88,
      nextSession: "غداً",
      color: "blue",
      materials: ["المصحف الشريف"],
      objectives: ["مراجعة 5 أجزاء", "تحسين الحفظ"]
    },
    {
      id: 4,
      name: "حلقة الأطفال - النور",
      description: "تعليم القرآن للأطفال بطريقة تفاعلية ممتعة",
      teacher: "الشيخ محمد الأمين",
      students: 28,
      maxStudents: 30,
      level: "أطفال",
      schedule: "السبت - الأحد - الإثنين - الأربعاء",
      time: "5:00 مساءً",
      duration: "45 دقيقة",
      room: "قاعة الأطفال",
      status: "active",
      startDate: "2024-03-01",
      progress: 35,
      completionRate: 90,
      attendance: 93,
      nextSession: "غداً",
      color: "amber",
      materials: ["قصص الأنبياء", "ألعاب تعليمية"],
      objectives: ["حفظ السور القصيرة", "تعلم الآداب الإسلامية"]
    },
    {
      id: 5,
      name: "دورة القراءات",
      description: "دراسة القراءات السبع وأصولها",
      teacher: "الشيخ محمد الأمين",
      students: 12,
      maxStudents: 15,
      level: "متقدم جداً",
      schedule: "الإثنين - الخميس",
      time: "8:00 مساءً",
      duration: "ساعتان",
      room: "القاعة الخاصة",
      status: "upcoming",
      startDate: "2024-07-01",
      progress: 0,
      completionRate: 0,
      attendance: 0,
      nextSession: "يبدأ في يوليو",
      color: "rose",
      materials: ["كتاب القراءات", "أشرطة صوتية"],
      objectives: ["إتقان القراءات السبع", "فهم علم القراءات"]
    },
    {
      id: 6,
      name: "حلقة التفسير",
      description: "تفسير وشرح معاني القرآن الكريم",
      teacher: "الشيخ محمد الأمين",
      students: 35,
      maxStudents: 40,
      level: "متوسط",
      schedule: "الجمعة",
      time: "بعد صلاة العصر",
      duration: "ساعتان",
      room: "قاعة المحاضرات",
      status: "paused",
      startDate: "2024-01-05",
      progress: 50,
      completionRate: 85,
      attendance: 90,
      nextSession: "متوقفة مؤقتاً",
      color: "gray",
      materials: ["تفسير الطبري", "تفسير ابن كثير"],
      objectives: ["فهم معاني الآيات", "استنباط الأحكام"]
    }
  ]

  const stats = [
    { icon: BookOpen, label: "إجمالي الحلقات", value: "8", color: "blue" },
    { icon: CheckCircle, label: "الحلقات النشطة", value: "5", color: "emerald" },
    { icon: Clock, label: "القادمة قريباً", value: "2", color: "amber" },
    { icon: AlertCircle, label: "متوقفة مؤقتاً", value: "1", color: "rose" }
  ]

  const filteredClasses = classes.filter(cls => {
    const matchesSearch = cls.name.includes(searchQuery) || 
                         cls.description.includes(searchQuery) ||
                         cls.level.includes(searchQuery)
    const matchesStatus = filterStatus === 'all' || cls.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const menuItems = [
    { icon: Home, label: "الرئيسية", value: "dashboard" },
    { icon: Users, label: "الطلاب", value: "students", badge: 156 },
    { icon: BookOpen, label: "الحلقات", value: "classes" },
    { icon: Calendar, label: "الجدول", value: "schedule" },
    { icon: BarChart3, label: "التقارير", value: "reports" },
    { icon: MessageCircle, label: "الرسائل", value: "messages", badge: 8 },
    { icon: Award, label: "الإنجازات", value: "achievements" },
    { icon: Settings, label: "الإعدادات", value: "settings" }
  ]

  const getLevelColor = (level) => {
    const colors = {
      'متقدم': 'bg-purple-100 text-purple-700 border-purple-200',
      'متقدم جداً': 'bg-rose-100 text-rose-700 border-rose-200',
      'متوسط': 'bg-blue-100 text-blue-700 border-blue-200',
      'مبتدئ': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'أطفال': 'bg-amber-100 text-amber-700 border-amber-200'
    }
    return colors[level] || 'bg-gray-100 text-gray-700 border-gray-200'
  }

  const getStatusColor = (status) => {
    const colors = {
      'active': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'upcoming': 'bg-blue-100 text-blue-700 border-blue-200',
      'paused': 'bg-gray-100 text-gray-700 border-gray-200'
    }
    return colors[status] || 'bg-gray-100 text-gray-700 border-gray-200'
  }

  const getStatusText = (status) => {
    const texts = {
      'active': 'نشطة',
      'upcoming': 'قادمة',
      'paused': 'متوقفة'
    }
    return texts[status] || 'غير معروف'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50" dir="rtl">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full bg-gradient-to-b from-emerald-900 to-teal-800 text-white transition-all duration-300 z-50 shadow-2xl ${
        sidebarOpen ? 'w-80 translate-x-0' : 'w-80 translate-x-full lg:w-20 lg:translate-x-0'
      }`}>
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between mb-8">
            {(sidebarOpen || window.innerWidth >= 1024) && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl font-bold">
                  📖
                </div>
                {sidebarOpen && (
                  <div>
                    <div className="font-bold text-lg">منصة الشيوخ</div>
                    <div className="text-xs text-emerald-200">نظام إدارة الحلقات</div>
                  </div>
                )}
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setActiveTab(item.value)
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.value
                    ? 'bg-white text-emerald-900 shadow-lg'
                    : 'hover:bg-white/10'
                }`}
              >
                <item.icon size={20} />
                {sidebarOpen && (
                  <>
                    <span className="flex-1 text-right font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 bg-rose-500 text-white rounded-full text-xs font-bold">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:mr-20 p-4 md:p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 bg-white border border-gray-200 rounded-xl hover:shadow-lg"
            >
              <Menu size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">إدارة الحلقات</h1>
              <p className="text-sm md:text-base text-gray-600">عرض وإدارة جميع الحلقات القرآنية</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-600 font-semibold shadow-lg">
              <Plus size={20} />
              إنشاء حلقة جديدة
            </button>
            <button className="md:hidden p-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-lg">
              <Plus size={20} />
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center ${
                  stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                  stat.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                  'bg-rose-50 text-rose-600'
                }`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن حلقة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">جميع الحلقات</option>
              <option value="active">النشطة</option>
              <option value="upcoming">القادمة</option>
              <option value="paused">المتوقفة</option>
            </select>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredClasses.map((cls) => (
            <div key={cls.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all overflow-hidden">
              {/* Header */}
              <div className={`p-5 bg-gradient-to-r ${
                cls.color === 'purple' ? 'from-purple-500 to-pink-500' :
                cls.color === 'emerald' ? 'from-emerald-500 to-teal-500' :
                cls.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                cls.color === 'amber' ? 'from-amber-500 to-orange-500' :
                cls.color === 'rose' ? 'from-rose-500 to-pink-500' :
                'from-gray-500 to-gray-600'
              } text-white`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">{cls.name}</h3>
                  <button className="p-1 hover:bg-white/20 rounded-lg">
                    <MoreVertical size={18} />
                  </button>
                </div>
                <p className="text-sm text-white/90 mb-3">{cls.description}</p>
                <div className="flex items-center gap-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getLevelColor(cls.level)}`}>
                    {cls.level}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(cls.status)}`}>
                    {getStatusText(cls.status)}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                {/* Students Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users size={16} />
                      <span>{cls.students}/{cls.maxStudents} طالب</span>
                    </div>
                    <span className="text-sm font-bold text-emerald-600">{Math.round((cls.students/cls.maxStudents)*100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                      style={{ width: `${(cls.students/cls.maxStudents)*100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} className="text-blue-500" />
                    <span>{cls.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} className="text-purple-500" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Target size={16} className="text-amber-500" />
                    <span>التقدم: {cls.progress}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <TrendingUp size={16} className="text-emerald-500" />
                    <span>حضور: {cls.attendance}%</span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-sm text-gray-600 mb-1">
                    <strong>الأيام:</strong> {cls.schedule}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>الجلسة القادمة:</strong> {cls.nextSession}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors font-semibold">
                    <Play size={16} />
                    بدء
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors font-semibold">
                    <Eye size={16} />
                    عرض
                  </button>
                  <button className="px-4 py-2 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors">
                    <Edit size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
