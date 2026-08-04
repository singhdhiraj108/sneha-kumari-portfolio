"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#070D1B] text-slate-400">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#10B981] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">SK</span>
              </div>
              <span
                className="font-bold text-lg text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Sneha Kumari
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Accounts Payable &amp; Procure-to-Pay Professional committed to
              financial accuracy, compliance, and operational excellence.
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sneha-k-3233a4234/"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="inline-flex items-center gap-2 bg-[#0077B5]/15 hover:bg-[#0077B5]/25 text-[#0077B5] border border-[#0077B5]/20 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-4 uppercase tracking-widest"
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Skills", "#skills"],
                ["Certifications", "#certifications"],
                ["Education", "#education"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:snehakumari2306@gmail.com"
                className="flex items-center gap-3 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
              >
                <Mail size={14} className="text-[#2563EB] flex-shrink-0" />
                snehakumari2306@gmail.com
              </a>
              <a
                href="tel:+918777272158"
                className="flex items-center gap-3 text-slate-500 hover:text-slate-300 text-sm transition-colors"
              >
                <Phone size={14} className="text-[#10B981] flex-shrink-0" />
                +91-8777272158
              </a>
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <MapPin size={14} className="text-[#8B5CF6] flex-shrink-0" />
                Maheshtala, Kolkata – 700139
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs text-center">
            © 2026 Sneha Kumari | Accounts Payable &amp; Procure-to-Pay
            Professional. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            id="scroll-to-top"
            className="flex items-center gap-1.5 text-slate-600 hover:text-[#2563EB] text-xs transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={13} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
