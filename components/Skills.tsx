"use client";
import { motion } from "framer-motion";
import {
  DollarSign,
  FileText,
  Users,
  BarChart3,
  RefreshCcw,
  ShieldCheck,
  Calculator,
  TrendingUp,
  CreditCard,
  Database,
  PieChart,
  ClipboardList,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const financeSkills = [
  { name: "Procure-to-Pay (P2P/PTP)", icon: RefreshCcw, level: 95 },
  { name: "Accounts Payable", icon: CreditCard, level: 95 },
  { name: "Accounts Receivable", icon: DollarSign, level: 90 },
  { name: "Vendor Management", icon: Users, level: 88 },
  { name: "Invoice Processing", icon: FileText, level: 95 },
  { name: "Bank Reconciliation", icon: Calculator, level: 92 },
  { name: "Vendor Reconciliation", icon: RefreshCcw, level: 90 },
  { name: "Month-End Closing", icon: ClipboardList, level: 88 },
  { name: "MIS Reporting", icon: BarChart3, level: 85 },
  { name: "Financial Reporting", icon: PieChart, level: 85 },
  { name: "GL Reconciliation", icon: Database, level: 88 },
  { name: "Compliance & Audit", icon: ShieldCheck, level: 82 },
  { name: "Credit Management", icon: TrendingUp, level: 80 },
  { name: "P&L Preparation", icon: BarChart3, level: 85 },
];

const techSkills = [
  { name: "SAP FICO", level: 88, color: "from-[#2563EB] to-[#1d4ed8]" },
  { name: "Tally ERP", level: 92, color: "from-[#10B981] to-[#059669]" },
  { name: "Crest Accounting", level: 85, color: "from-[#8B5CF6] to-[#6D28D9]" },
  { name: "MS Excel", level: 90, color: "from-[#F59E0B] to-[#D97706]" },
  { name: "VLOOKUP", level: 88, color: "from-[#EF4444] to-[#DC2626]" },
  { name: "Pivot Tables", level: 85, color: "from-[#06B6D4] to-[#0891B2]" },
  { name: "MS Office Suite", level: 90, color: "from-[#2563EB] to-[#10B981]" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding gradient-bg"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Skills & Expertise"
          subtitle="A comprehensive skill set built through real-world accounting and finance operations."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Finance Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-bold text-lg mb-6 flex items-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              Finance & Accounting Skills
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {financeSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="glass-dark rounded-xl px-4 py-3 flex items-center gap-2.5 cursor-default group"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/20 flex items-center justify-center group-hover:from-[#2563EB]/40 group-hover:to-[#10B981]/40 transition-all">
                    <skill.icon size={14} className="text-[#93C5FD]" />
                  </div>
                  <span className="text-slate-200 text-sm font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tech Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-bold text-lg mb-6 flex items-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              Software & Tools
            </motion.h3>

            <div className="space-y-4">
              {techSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-200 text-sm font-semibold">
                      {skill.name}
                    </span>
                    <span className="text-slate-400 text-xs font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-6 border-t border-white/10"
            >
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-3 font-bold">
                Additional Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Inventory Reconciliation",
                  "Stock Management",
                  "Cash Flow Reporting",
                  "Swiggy / Zomato Portals",
                  "Supplier Relations",
                  "Balance Sheet",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
