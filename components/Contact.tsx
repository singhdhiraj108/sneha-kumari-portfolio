"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  User,
  MessageSquare,
} from "lucide-react";

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import SectionHeading from "./ui/SectionHeading";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "snehakumari2306@gmail.com",
    href: "mailto:snehakumari2306@gmail.com",
    color: "from-[#2563EB] to-[#1d4ed8]",
    hoverColor: "hover:border-[#2563EB]/30",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8777272158",
    href: "tel:+918777272158",
    color: "from-[#10B981] to-[#059669]",
    hoverColor: "hover:border-[#10B981]/30",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/sneha-k-3233a4234",
    href: "https://www.linkedin.com/in/sneha-k-3233a4234/",
    color: "from-[#0077B5] to-[#005582]",
    hoverColor: "hover:border-[#0077B5]/30",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maheshtala, Kolkata – 700139",
    href: "https://maps.google.com/?q=Maheshtala,Kolkata",
    color: "from-[#8B5CF6] to-[#6D28D9]",
    hoverColor: "hover:border-[#8B5CF6]/30",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding gradient-bg">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="Open to new opportunities, collaborations, and conversations. Reach out — I'd love to hear from you!"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Contact Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-300 text-base leading-relaxed mb-8"
            >
              I am actively exploring opportunities in Accounts Payable, P2P,
              and financial operations roles across India. Feel free to connect
              via email, phone, or LinkedIn.
            </motion.p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === "LinkedIn" || info.label === "Location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 glass-dark rounded-xl p-4 border border-white/10 ${info.hoverColor} transition-all duration-200 group`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <info.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-medium mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-slate-200 text-sm font-semibold group-hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 glass-dark rounded-xl p-5 border border-[#10B981]/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[#10B981] text-sm font-bold">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Open to full-time roles in Accounts Payable, P2P/PTP, and
                Finance Operations. Available for Pan-India relocation and
                comfortable with US shift timings.
              </p>
            </motion.div>
          </div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-dark rounded-2xl p-10 border border-[#10B981]/30 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-[#10B981]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-sm">
                  Thank you for reaching out. I'll get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-dark rounded-2xl p-8 border border-white/10 space-y-5"
              >
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                      Your Name
                    </label>
                    <div className="relative">
                      <User
                        size={14}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="John Smith"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white/8 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={14}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white/8 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-white/8 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={14}
                      className="absolute left-3.5 top-4 text-slate-500"
                    />
                    <textarea
                      id="contact-message"
                      placeholder="Tell me about the opportunity or how I can help..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white/8 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/10 transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
