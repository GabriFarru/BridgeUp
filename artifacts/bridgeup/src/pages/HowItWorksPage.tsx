import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const platformSteps = [
  {
    num: "01",
    title: "Students Join",
    desc: "Verified with institutional emails — @student.unisg.ch for HSG, @student.ethz.ch for ETH. Your identity is tied to your institution from day one.",
  },
  {
    num: "02",
    title: "Teams Form",
    desc: "Each team is mixed between students of the two institutions. The structure is enforced — so every record reflects genuine cross-disciplinary collaboration.",
  },
  {
    num: "03",
    title: "Competitions Run",
    desc: "BridgeUp and sponsors co-design the briefs. Teams compete over 8 hours, 24 hours, or a custom format. Deliverables are structured and evaluated.",
  },
  {
    num: "04",
    title: "Records Are Verified",
    desc: "Every entry is logged with your institutional identity, team composition, deliverables, and outcome. Timestamped and immutable.",
  },
  {
    num: "05",
    title: "Recruiters See Results",
    desc: "Your BridgeUp profile surfaces your verified project history to companies that matter. Not just what you claim — what you did.",
  },
];

const studentValues = [
  "Real consulting briefs from companies with actual challenges to solve",
  "Direct interaction with executives, professionals, and recruiters",
  "Structured feedback from industry experts on your work",
  "Cross-disciplinary collaboration with students from HSG and ETH",
];

const sponsorValues = [
  "Direct engagement with Europe's top business and technical students",
  "Structured challenge formats (8h, 24h, or custom)",
  "In-person assessment of real outputs and problem-solving under pressure",
  "Brand presence across both institutions",
];

export default function HowItWorksPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ padding: "160px 0 100px", background: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="label-caps mb-5" style={{ color: "#E4002B" }}>Platform Model</div>
            <h1 className="font-display font-semibold text-[#1A1A1A] mb-6" style={{ fontSize: "clamp(36px, 6vw, 64px)", maxWidth: "720px", lineHeight: 1.05 }}>
              How BridgeUp Works
            </h1>
            <p className="text-[#6B6B6B] leading-relaxed" style={{ fontSize: "clamp(16px, 2vw, 18px)", maxWidth: "540px" }}>
              BridgeUp connects HSG and ETH students with real company challenges — and gives sponsors direct access to how the best emerging talent thinks, works, and delivers under pressure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="section-divider" />

      {/* The Platform Model */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="label-caps mb-4" style={{ color: "#E4002B" }}>The Model</div>
            <h2 className="font-display font-semibold text-[#1A1A1A] mb-16" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Five steps from collaboration to record.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col">
            {platformSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div
                  className="flex items-start gap-8 md:gap-12 py-10"
                  style={{ borderBottom: i < platformSteps.length - 1 ? "1px solid #E0E0E0" : "none" }}
                  data-testid={`platform-step-${i + 1}`}
                >
                  <span className="font-display text-[44px] font-bold shrink-0 w-20 hidden md:block" style={{ color: "#F0F0F0", lineHeight: 1 }}>{step.num}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-semibold text-[#1A1A1A] text-[22px]">{step.title}</h3>
                    <p className="text-[#6B6B6B] text-[16px] leading-relaxed max-w-[600px]">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* For Students + Sponsors */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bridgeup-card rounded p-8 flex flex-col gap-5 h-full">
                <div className="label-caps" style={{ color: "#E4002B" }}>For Students</div>
                <h3 className="font-display font-semibold text-[#1A1A1A] text-[22px]">Real exposure to the business world.</h3>
                <div className="flex flex-col gap-3">
                  {studentValues.map((val, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#E4002B] shrink-0 mt-0.5" />
                      <p className="text-[#6B6B6B] text-[15px]">{val}</p>
                    </div>
                  ))}
                </div>
                <Link href="/for-students" className="inline-flex items-center gap-1.5 text-[#E4002B] text-[13px] font-medium mt-auto" data-testid="link-for-students">
                  Learn more <ArrowRight size={13} />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bridgeup-card rounded p-8 flex flex-col gap-5 h-full">
                <div className="label-caps" style={{ color: "#6B6B6B" }}>For Sponsors</div>
                <h3 className="font-display font-semibold text-[#1A1A1A] text-[22px]">Assess real skills on your real problems.</h3>
                <div className="flex flex-col gap-3">
                  {sponsorValues.map((val, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#6B6B6B] shrink-0 mt-0.5" />
                      <p className="text-[#6B6B6B] text-[15px]">{val}</p>
                    </div>
                  ))}
                </div>
                <Link href="/for-sponsors" className="inline-flex items-center gap-1.5 text-[#1A1A1A] text-[13px] font-medium mt-auto hover:text-[#E4002B] transition-colors" data-testid="link-for-sponsors">
                  Learn more <ArrowRight size={13} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111111", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-white" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              Ready to get started?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex gap-4 flex-wrap">
              <Link href="/join/student" className="px-6 py-3 rounded text-[14px] font-semibold text-white btn-primary" data-testid="cta-join-student">
                Join as a Student
              </Link>
              <Link href="/for-sponsors" className="px-6 py-3 rounded text-[14px] font-semibold text-white border border-[rgba(255,255,255,0.3)] hover:border-white transition-colors" data-testid="cta-for-sponsors">
                Become a Sponsor
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
