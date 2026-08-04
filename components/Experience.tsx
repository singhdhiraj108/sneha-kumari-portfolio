"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, TrendingUp, CheckCircle2, Building2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const experiences = [
  {
    id: 1,
    title: "Account Executive / Operational Executive",
    company: "Tansei Ice Cream LLP",
    period: "January 2026 – Present",
    type: "Current",
    location: "Kolkata, India",
    color: "from-[#2563EB] to-[#10B981]",
    tagColor: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20",
    achievements: [
      "Managed complete end-to-end Procure-to-Pay (P2P) operations",
      "Processed vendor and client invoices with zero discrepancies",
      "Managed Accounts Payable and Accounts Receivable functions",
      "Prepared daily MIS reports and cash flow statements",
      "Maintained sales, stock, and financial reconciliation reports",
      "Reconciled accounts across multiple store locations",
      "Reduced reconciliation discrepancies by 15% through process improvement",
      "Managed Swiggy and Zomato business portals — pricing, inventory & menus",
      "Resolved customer complaints professionally and efficiently",
      "Collaborated with cross-functional teams for operational excellence",
    ],
    highlight: {
      icon: TrendingUp,
      text: "Reduced reconciliation discrepancies by 15%",
      color: "text-[#10B981]",
      bg: "bg-[#10B981]/10",
    },
  },
  {
    id: 2,
    title: "Account Executive",
    company: "M M Rubber Company Limited",
    period: "September 2022 – November 2024",
    type: "Previous",
    location: "Kolkata, India",
    color: "from-[#8B5CF6] to-[#2563EB]",
    tagColor: "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20",
    achievements: [
      "Vendor & client invoice processing with end-to-end invoice management",
      "Accounts Payable & Receivable operations — payment processing & tracking",
      "Month-end closing — P&L statements and balance sheet schedules",
      "General Ledger, vendor statement, and bank reconciliation",
      "Internal audit support and financial compliance reporting",
      "Warehouse stock reconciliation and inventory valuation",
      "Expense tracking and supplier relationship management",
      "MIS reporting and financial performance dashboards",
      "Cross-functional collaboration for operational reporting",
    ],
    highlight: null,
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #ffffff 100%)" }}
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Work Experience"
          title="Professional Journey"
          subtitle="A track record of delivering results across finance operations, vendor management, and P2P processes."
        />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#2563EB] via-[#10B981] to-[#8B5CF6] hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-8 hidden md:flex w-6 h-6 rounded-full bg-gradient-to-br from-[#2563EB] to-[#10B981] items-center justify-center shadow-lg ring-4 ring-white z-10">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden card-hover">
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${exp.color}`} />

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full border ${exp.tagColor}`}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3
                          className="text-xl font-extrabold text-[#0F172A] mb-1"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[#2563EB] font-semibold text-sm">
                          <Building2 size={14} />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 md:text-right text-sm text-[#64748B]">
                        <div className="flex items-center gap-1.5 md:justify-end">
                          <Calendar size={13} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5 md:justify-end">
                          <MapPin size={13} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Highlight badge */}
                    {exp.highlight && (
                      <div
                        className={`inline-flex items-center gap-2 ${exp.highlight.bg} px-4 py-2 rounded-xl mb-6`}
                      >
                        <exp.highlight.icon
                          size={14}
                          className={exp.highlight.color}
                        />
                        <span
                          className={`text-sm font-bold ${exp.highlight.color}`}
                        >
                          {exp.highlight.text}
                        </span>
                      </div>
                    )}

                    {/* Achievements */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {exp.achievements.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={15}
                            className="text-[#10B981] flex-shrink-0 mt-0.5"
                          />
                          <span className="text-[#334155] text-sm leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
