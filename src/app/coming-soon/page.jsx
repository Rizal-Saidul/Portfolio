"use client";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="w-screen h-screen flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Animasi teks */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold tracking-wide"
      >
        Coming Soon 🚀
      </motion.h1>

      {/* Subjudul */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg text-gray-300"
      >
        Portfolio is under construction. Stay tuned!
      </motion.p>

      {/* Email / kontak */}
      <motion.a
        href="mailto:yourname@email.com"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 inline-block rounded-xl bg-white px-6 py-3 text-slate-900 font-semibold shadow-lg hover:bg-gray-200 transition"
      >
        Contact Me
      </motion.a>
    </div>
  );
}
