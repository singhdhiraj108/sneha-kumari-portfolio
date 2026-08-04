"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const education = [
  {
    id: 1,
    degree: "Bachelor of Commerce (Honours)",
    institution: "University of Calcutta",
    period: "2016 – 2019",
    location: "Kolkata, West Bengal",
    type: "Undergraduate",
    color: "from-[#2563EB] to-[#1d4ed8]",
    description:
      "Comprehensive undergraduate program covering financial accounting, business economics, corporate law, auditing, and taxation with Honours specialization.",
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: "Certified Industrial Accountant",
    institution: "ICA Kolkata",
    period: "2019 – 2022",
    location: "Kolkata, West Bengal",
    type: "Professional Certification",
    color: "from-[#10B981] to-[#059669]",
    description:
      "Advanced professional program in Tally ERP, SAP basics, GST, payroll, income tax, and practical accounting for industrial environments.",
    icon: Award,
  },
  {
    id: 3,
    degree: "Higher Secondary (Commerce)",
    institution: "Budge Budge St. Thomas School",
    period: "2014 – 2016",
    location: "Budge Budge, West Bengal",
    type: "Secondary Education",
    color: "from-[#8B5CF6] to-[#6D28D9]",
    description:
      "Commerce stream with Accountancy, Economics, Business Studies, and Mathematics as core subjects.",
    icon: GraduationCap,
  },
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #ffffff 100%)",
      }}
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          subtitle="A strong educational foundation in commerce and professional accounting, building the expertise needed for excellence in finance."
        />

        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#2563EB] via-[#10B981] to-[#8B5CF6] hidden sm:block" />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 top-7 hidden sm:flex w-6 h-6 rounded-full bg-gradient-to-br ${edu.color} items-center justify-center shadow-lg ring-4 ring-white z-10`}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <edu.icon size={20} className="text-white" />
                      </div>

                      <div>
                        <span className="inline-block text-xs font-bold text-[#64748B] uppercase tracking-wide mb-1">
                          {edu.type}
                        </span>
                        <h3
                          className="text-[#0F172A] font-extrabold text-lg leading-tight mb-1"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {edu.degree}
                        </h3>
                        <p className="text-[#2563EB] font-semibold text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 text-xs text-[#64748B] sm:text-right shrink-0">
                      <div className="flex items-center gap-1 sm:justify-end">
                        <Calendar size={12} />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1 sm:justify-end">
                        <MapPin size={12} />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-[#64748B] text-sm leading-relaxed mt-4 pl-0 sm:pl-16">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
