"use client";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const certifications = [
  {
    id: 1,
    title: "SAP FICO Certified",
    subtitle: "ERP Functional Training",
    issuer: "SAP Training & Certification",
    description:
      "Comprehensive certification in SAP Financial Accounting (FI) and Controlling (CO) modules, covering end-to-end financial processes, vendor management, and reporting.",
    color: "from-[#2563EB] to-[#1d4ed8]",
    badge: "SAP",
    tags: ["Financial Accounting", "Controlling", "ERP", "Vendor Management"],
  },
  {
    id: 2,
    title: "Certified Industrial Accountant",
    subtitle: "CIA — Industrial Accounting Program",
    issuer: "ICA Kolkata",
    description:
      "Industry-recognized certification in accounting practices, taxation, payroll management, and financial reporting tailored for industrial accounting professionals.",
    color: "from-[#10B981] to-[#059669]",
    badge: "CIA",
    tags: ["Tally ERP", "Taxation", "Payroll", "Financial Reporting"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional Credentials"
          subtitle="Industry-recognized certifications that validate expertise in ERP systems and accounting practices."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />

              {/* Gradient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${cert.color} opacity-10 blur-3xl`} />
              </div>

              <div className="p-8 relative">
                {/* Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-xl`}
                  >
                    <span className="text-white font-extrabold text-lg">
                      {cert.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] text-xs font-bold px-3 py-1.5 rounded-full border border-[#10B981]/20">
                    <CheckCircle2 size={12} />
                    Certified
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-[#0F172A] font-extrabold text-xl mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {cert.title}
                </h3>
                <p className="text-[#2563EB] text-sm font-semibold mb-1">
                  {cert.subtitle}
                </p>
                <p className="text-[#64748B] text-xs mb-4 flex items-center gap-1.5">
                  <Award size={12} />
                  {cert.issuer}
                </p>

                <p className="text-[#334155] text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#F8FAFC] border border-slate-200 text-[#334155] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
