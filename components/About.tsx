"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  TrendingUp,
  Users,
  Globe,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats = [
  {
    icon: Briefcase,
    value: 2,
    suffix: "+",
    label: "Years Experience",
    color: "from-[#2563EB] to-[#1d4ed8]",
  },
  {
    icon: Users,
    value: 2,
    suffix: "",
    label: "Companies",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: "%",
    label: "Discrepancy Reduction",
    color: "from-[#8B5CF6] to-[#6D28D9]",
  },
  {
    icon: Target,
    value: 22,
    suffix: "+",
    label: "Core Competencies",
    color: "from-[#F59E0B] to-[#D97706]",
  },
];

const highlights = [
  "End-to-end Procure-to-Pay (P2P/PTP) expertise",
  "Vendor invoice processing with zero discrepancies",
  "SAP FICO & Tally ERP certified professional",
  "Comfortable with US shift timings",
  "Available for Pan-India relocation",
  "Strong compliance & internal audit support",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="About Me"
          title="Turning Numbers Into Business Insights"
          subtitle="A dedicated finance professional committed to accuracy, compliance, and continuous improvement in every accounting function."
        />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-6 text-center shadow-md border border-slate-100 card-hover"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}
              >
                <stat.icon size={20} className="text-white" />
              </div>
              <div
                className="text-3xl font-extrabold text-[#0F172A] mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[#64748B] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-slate max-w-none">
              <p className="text-[#334155] leading-relaxed text-base mb-6">
                I&apos;m{" "}
                <span className="font-bold text-[#0F172A]">Sneha Kumari</span>,
                a passionate Accounts Payable professional based in{" "}
                <span className="font-semibold text-[#2563EB]">
                  Maheshtala, Kolkata
                </span>
                . With over 2 years of hands-on experience across diverse
                accounting functions, I specialize in end-to-end Procure-to-Pay
                processes, vendor management, and financial reporting.
              </p>
              <p className="text-[#334155] leading-relaxed text-base mb-6">
                My expertise spans{" "}
                <span className="font-semibold">SAP FICO</span>,{" "}
                <span className="font-semibold">Tally ERP</span>, and{" "}
                <span className="font-semibold">Crest Accounting</span>, with
                strong proficiency in MS Excel including VLOOKUP and Pivot
                Tables. I bring a detail-oriented mindset that ensures financial
                accuracy and compliance at every step.
              </p>
              <p className="text-[#334155] leading-relaxed text-base">
                Currently working at{" "}
                <span className="font-semibold text-[#0F172A]">
                  Tansei Ice Cream LLP
                </span>
                , I&apos;ve successfully reduced reconciliation discrepancies by{" "}
                <span className="font-bold text-[#10B981]">15%</span> through
                systematic process improvements and rigorous attention to
                detail.
              </p>
            </div>

            {/* Key info pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                { icon: Globe, text: "US Shift Ready" },
                { icon: CheckCircle2, text: "Pan-India Relocatable" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-[#F8FAFC] border border-slate-200 text-[#334155] text-sm font-medium px-4 py-2 rounded-full"
                >
                  <item.icon size={14} className="text-[#10B981]" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Highlights List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1e3a5f] rounded-2xl p-8 shadow-xl">
              <h3
                className="text-white font-bold text-lg mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Why Choose Sneha?
              </h3>
              <div className="space-y-4">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Language badges */}
            <div className="mt-6">
              <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-3">
                Languages
              </p>
              <div className="flex gap-2">
                {["English", "Hindi", "Bengali"].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-full bg-[#F8FAFC] border border-slate-200 text-[#334155] text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
