"use client";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  ShieldCheck,
  ClipboardCheck,
  Handshake,
  Zap,
  Clock,
  Brain,
  BarChart2,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const strengths = [
  { name: "Financial Accuracy", icon: Target, color: "from-[#2563EB] to-[#1d4ed8]" },
  { name: "Attention to Detail", icon: Eye, color: "from-[#10B981] to-[#059669]" },
  { name: "Vendor Management", icon: Users, color: "from-[#8B5CF6] to-[#6D28D9]" },
  { name: "Compliance Focus", icon: ShieldCheck, color: "from-[#F59E0B] to-[#D97706]" },
  { name: "Internal Audit", icon: ClipboardCheck, color: "from-[#EF4444] to-[#DC2626]" },
  { name: "Team Collaboration", icon: Handshake, color: "from-[#06B6D4] to-[#0891B2]" },
  { name: "Quick Learner", icon: Zap, color: "from-[#10B981] to-[#2563EB]" },
  { name: "Time Management", icon: Clock, color: "from-[#F59E0B] to-[#EF4444]" },
  { name: "Analytical Thinking", icon: Brain, color: "from-[#8B5CF6] to-[#EC4899]" },
  { name: "MIS Reporting", icon: BarChart2, color: "from-[#2563EB] to-[#8B5CF6]" },
  { name: "Communication", icon: MessageSquare, color: "from-[#06B6D4] to-[#10B981]" },
  { name: "Problem Solving", icon: TrendingUp, color: "from-[#EF4444] to-[#F59E0B]" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Strengths() {
  return (
    <section id="strengths" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Key Strengths"
          title="What Sets Me Apart"
          subtitle="Core professional attributes that drive consistent performance and deliver measurable results."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {strengths.map((strength) => (
            <motion.div
              key={strength.name}
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white rounded-2xl p-5 text-center shadow-md border border-slate-100 cursor-default group hover:shadow-xl hover:border-slate-200 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${strength.color} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                <strength.icon size={20} className="text-white" />
              </div>
              <p className="text-[#334155] text-xs font-semibold leading-snug">
                {strength.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
