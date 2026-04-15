import { Link } from "wouter";
import { ArrowRight, Lightbulb, Users, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const valueProps = [
  {
    icon: <Lightbulb size={22} className="text-[#E4002B]" />,
    title: "Real Cases, Real Stakes",
    desc: "Work on actual briefs submitted by companies facing live business challenges. No hypotheticals — the problems are real, and so is the pressure to deliver.",
  },
  {
    icon: <Users size={22} className="text-[#E4002B]" />,
    title: "Cross-Disciplinary Teams",
    desc: "Collaborate with students from the other institution — business paired with engineering. The combination is what companies are actually looking for.",
  },
  {
    icon: <MessageSquare size={22} className="text-[#E4002B]" />,
    title: "Direct Industry Exposure",
    desc: "Present your work to executives, professionals, and recruiters in person. Receive structured feedback and make connections that go well beyond a CV submission.",
  },
];

const steps = [
  { num: "01", text: "Register with your institutional email" },
  { num: "02", text: "Join or form a team with HSG and ETH students" },
  { num: "03", text: "Compete on a real brief and present to industry professionals" },
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
              Apply your knowledge where it actually matters.
            </h1>
            <p className="text-[#6B6B6B] leading-relaxed mb-10" style={{ fontSize: "clamp(16px, 2vw, 18px)", maxWidth: "560px" }}>
              BridgeUp connects HSG business students with ETH engineers to solve real company problems — and puts you in the room with the executives, professionals, and recruiters who set the briefs.
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
              Experience you can't get in a classroom.
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
              Three steps to get started.
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
              Ready to get in the room?
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
