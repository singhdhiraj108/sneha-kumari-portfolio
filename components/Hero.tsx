"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Mail, ArrowDown, MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden gradient-bg"
    >
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#2563EB]/10 blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-[#10B981]/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full bg-[#2563EB]/8 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[10%] w-16 h-16 rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/5"
        />
        <motion.div
          animate={{ y: [10, -15, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-[20%] w-10 h-10 rounded-xl border border-[#10B981]/30 bg-[#10B981]/5"
        />
        <motion.div
          animate={{ y: [-8, 12, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-[5%] w-8 h-8 rounded-lg border border-white/20 bg-white/5"
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 text-xs font-semibold px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                Open to Opportunities · Pan-India Relocation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Sneha{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#10B981] bg-clip-text text-transparent">
                Kumari
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-base md:text-lg font-semibold text-[#93C5FD] tracking-wide">
                Accounts Executive · Accounts Payable Specialist
              </p>
              <p className="text-sm md:text-base text-[#10B981] font-medium">
                Procure-to-Pay (P2P / PTP) Professional
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl"
            >
              Detail-oriented Accounts Payable professional with{" "}
              <span className="text-white font-semibold">2+ years</span> of
              experience in P2P/PTP, vendor invoice processing, bank
              reconciliation, month-end closing, MIS reporting, and financial
              reporting. Passionate about financial accuracy, compliance, and
              operational excellence.
            </motion.p>

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-8 text-sm text-slate-300"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#10B981]" />
                Maheshtala, Kolkata – 700139
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={14} className="text-[#10B981]" />
                +91-8777272158
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="/sneha-resume.pdf"
                download
                className="btn-primary"
                id="hero-download-resume"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline-white" id="hero-contact">
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/sneha-k-3233a4234/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                id="hero-linkedin"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-2 text-slate-400 text-xs"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={14} />
              </motion.div>
              Scroll to explore
            </motion.div>
          </div>

          {/* Right — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB] to-[#10B981] blur-2xl opacity-30 scale-110 animate-pulse-glow" />

              {/* Decorative ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-[#2563EB]/20"
              />

              {/* Decorative ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dashed border-[#10B981]/15"
              />

              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/sneha-profile.jpg"
                  alt="Sneha Kumari – Accounts Payable Professional"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating badge — Experience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-10 glass-dark rounded-2xl px-4 py-3 shadow-xl border border-white/10"
              >
                <div className="text-white font-bold text-lg leading-none">2+</div>
                <div className="text-slate-400 text-xs mt-0.5">Years Exp.</div>
              </motion.div>

              {/* Floating badge — SAP */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-4 bottom-16 glass-dark rounded-2xl px-4 py-3 shadow-xl border border-white/10"
              >
                <div className="text-[#10B981] font-bold text-sm">SAP FICO</div>
                <div className="text-slate-400 text-xs mt-0.5">Certified</div>
              </motion.div>

              {/* Floating badge — Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-dark rounded-2xl px-5 py-2.5 shadow-xl border border-white/10 whitespace-nowrap"
              >
                <div className="text-slate-300 text-xs flex items-center gap-1.5">
                  <MapPin size={10} className="text-[#10B981]" />
                  Kolkata, India
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
