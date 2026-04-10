import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Users, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const valueProps = [
  {
    icon: <ShieldCheck size={22} className="text-[#E4002B]" />,
    title: "Verified Records",
    desc: "Every competition entry is logged, timestamped, and tied to your institutional identity. No more work that disappears after the final presentation.",
  },
  {
    icon: <Users size={22} className="text-[#E4002B]" />,
    title: "Cross-Disciplinary Teams",
    desc: "Work with ETH engineers on real briefs. The collaboration itself is the signal — and BridgeUp makes it visible.",
  },
  {
    icon: <Briefcase size={22} className="text-[#E4002B]" />,
    title: "Recruiter-Facing Profiles",
    desc: "Your profile is built for the people hiring you. Skills, projects, and team history — structured for recruiters, not social followers.",
  },
];

const steps = [
  { num: "01", text: "Register with your institutional email" },
  { num: "02", text: "Join or form a team with HSG and ETH students" },
  { num: "03", text: "Compete, and your record is verified and live" },
];

export default function ForStudentsPage() {
  return (
    <div className="page-enter">
      {/* Tab bar */}
      <div style={{ borderBottom: "1px solid #E0E0E0", background: "#F7F7F7", paddingTop: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex gap-0">
          <Link
            href="/for-students"
            className="px-6 py-4 text-[14px] font-semibold text-[#E4002B] border-b-2 border-[#E4002B]"
            data-testid="tab-for-students"
          >
            For Students
          </Link>
          <Link
            href="/for-sponsors"
            className="px-6 py-4 text-[14px] font-medium text-[#6B6B6B] border-b-2 border-transparent hover:text-[#1A1A1A] transition-colors"
            data-testid="tab-for-sponsors"
          >
            For Sponsors
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: "120px 0 80px" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="label-caps mb-5" style={{ color: "#E4002B" }}>For Students</div>
            <h1 className="font-display font-semibold text-[#1A1A1A] mb-6" style={{ fontSize: "clamp(36px, 6vw, 60px)", maxWidth: "680px", lineHeight: 1.1 }}>
              Build a record that speaks for itself.
            </h1>
            <p className="text-[#6B6B6B] leading-relaxed mb-10" style={{ fontSize: "clamp(16px, 2vw, 18px)", maxWidth: "560px" }}>
              BridgeUp connects HSG business students with ETH Zurich engineers to compete, collaborate, and create verified project records that recruiters can actually see.
            </p>
            <Link
              href="/join/student"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-[15px] font-semibold text-white btn-primary"
              data-testid="hero-btn-register-student"
            >
              Register as a Student <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Value props */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="label-caps mb-4" style={{ color: "#6B6B6B" }}>Why BridgeUp</div>
            <h2 className="font-display font-semibold text-[#1A1A1A] mb-16" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Your record, finally visible.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((prop, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bridgeup-card rounded p-8 flex flex-col gap-4 h-full" data-testid={`value-prop-${i}`}>
                  <div className="flex items-center justify-center w-10 h-10 rounded bg-[rgba(228,0,43,0.06)]">
                    {prop.icon}
                  </div>
                  <h3 className="font-display font-semibold text-[#1A1A1A]" style={{ fontSize: "20px" }}>{prop.title}</h3>
                  <p className="text-[#6B6B6B] text-[15px] leading-relaxed">{prop.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* How it works */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="label-caps mb-4" style={{ color: "#6B6B6B" }}>Getting Started</div>
            <h2 className="font-display font-semibold text-[#1A1A1A] mb-16" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Three steps to your record.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex items-start gap-8 py-8" style={{ borderBottom: i < steps.length - 1 ? "1px solid #E0E0E0" : "none" }}>
                  <span className="font-display text-[40px] font-bold shrink-0 w-16" style={{ color: "#E0E0E0", lineHeight: 1 }}>{step.num}</span>
                  <p className="font-semibold text-[#1A1A1A] text-[18px] pt-1">{step.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111111", padding: "100px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-white mb-6" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Ready to build your record?
            </h2>
            <Link
              href="/join/student"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-[15px] font-semibold text-white btn-primary"
              data-testid="cta-register-student"
            >
              Register as a Student <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
