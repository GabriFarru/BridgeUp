import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import HeroBackground from "@/components/HeroBackground";
import MarqueeTicker from "@/components/MarqueeTicker";
import StatsBar from "@/components/StatsBar";
import ScrollReveal from "@/components/ScrollReveal";
import CompetitionCard from "@/components/CompetitionCard";
import { competitions } from "@/data/seed";

const heroWords = "Bridging the gap between students and companies".split(" ");

function HeroHeadline() {
  return (
    <h1 className="font-display font-semibold text-[#1A1A1A] leading-[1.1] mb-6" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
      {heroWords.map((word, i) => (
        <span
          key={i}
          className="hero-word"
          style={{ animationDelay: `${i * 80}ms`, marginRight: word === "" ? "0" : "0.25em" }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

const steps = [
  {
    number: "01",
    title: "Form a Team",
    desc: "HSG business students and ETH engineers, matched for real-world briefs.",
  },
  {
    number: "02",
    title: "Compete",
    desc: "Work on a sponsored challenge with a structured brief and real stakes.",
  },
  {
    number: "03",
    title: "Get Verified",
    desc: "Your entry is logged, timestamped, and visible to recruiters.",
  },
];

export default function LandingPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <HeroBackground />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-[700px]">
            <div className="label-caps mb-6" style={{ color: "#E4002B", animationDelay: "0ms" }}>
              Cross-University Collaboration
            </div>
            <HeroHeadline />
            <p
              className="text-[#6B6B6B] leading-relaxed mb-10"
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                opacity: 0,
                animation: "wordReveal 0.6s ease forwards",
                animationDelay: `${heroWords.length * 80 + 100}ms`,
              }}
            >
              A Cross-Disciplinary Platform Where Talent Meets Opportunity
            </p>
            <div
              className="flex flex-wrap items-center gap-4"
              style={{
                opacity: 0,
                animation: "wordReveal 0.6s ease forwards",
                animationDelay: `${heroWords.length * 80 + 250}ms`,
              }}
            >
              <Link
                href="/join/student"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-[15px] font-semibold text-white btn-primary"
                data-testid="hero-btn-join-student"
              >
                Join as a Student <ArrowRight size={16} />
              </Link>
              <Link
                href="/for-sponsors"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-[15px] font-semibold text-[#1A1A1A] border-2 border-[#1A1A1A] bg-white hover:bg-[#F7F7F7] transition-all duration-200"
                data-testid="hero-btn-become-sponsor"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeTicker />

      {/* How It Works */}
      <section style={{ padding: "120px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="label-caps mb-4" style={{ color: "#E4002B" }}>How It Works</div>
            <h2 className="font-display font-semibold text-[#1A1A1A] mb-16" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              From collaboration to verified record.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div
                  className="flex flex-col gap-4 p-8 md:p-10"
                  style={{
                    borderRight: i < 2 ? "1px solid #E0E0E0" : "none",
                    borderBottom: "none",
                  }}
                  data-testid={`step-${i + 1}`}
                >
                  <span className="font-display text-[48px] font-bold" style={{ color: "#E4002B", lineHeight: 1 }}>
                    {step.number}
                  </span>
                  <h3 className="font-display font-semibold text-[#1A1A1A]" style={{ fontSize: "22px" }}>{step.title}</h3>
                  <p className="text-[#6B6B6B] text-[15px] leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Stats */}
      <StatsBar />

      <hr className="section-divider" />

      {/* Competitions Preview */}
      <section style={{ padding: "120px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <div className="label-caps mb-3" style={{ color: "#E4002B" }}>Live & Recent</div>
                <h2 className="font-display font-semibold text-[#1A1A1A]" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
                  Competitions
                </h2>
              </div>
              <Link
                href="/competitions"
                className="inline-flex items-center gap-2 text-[#E4002B] text-[14px] font-medium hover:underline"
                data-testid="link-view-all-competitions"
              >
                View all competitions <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitions.map((comp, i) => (
              <ScrollReveal key={comp.id} delay={i * 100}>
                <CompetitionCard competition={comp} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Split CTA */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 px-12 md:px-16 py-20" style={{ background: "#FFFFFF" }}>
            <ScrollReveal>
              <div className="label-caps mb-2" style={{ color: "#6B6B6B" }}>For Students</div>
              <h3 className="font-display font-semibold text-[#1A1A1A] mb-4" style={{ fontSize: "28px" }}>
                Are you a student?
              </h3>
              <p className="text-[#6B6B6B] text-[15px] leading-relaxed mb-8 max-w-[340px]">
                Build a verified record of cross-disciplinary work that recruiters can actually see. Join HSG and ETH students already competing.
              </p>
              <Link
                href="/join/student"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-[14px] font-semibold text-white btn-primary w-fit"
                data-testid="split-cta-student"
              >
                Join as a Student <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
          <div className="flex flex-col justify-center gap-6 px-12 md:px-16 py-20" style={{ background: "#111111" }}>
            <ScrollReveal>
              <div className="label-caps mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>For Companies</div>
              <h3 className="font-display font-semibold text-white mb-4" style={{ fontSize: "28px" }}>
                Are you a company?
              </h3>
              <p className="text-[rgba(255,255,255,0.6)] text-[15px] leading-relaxed mb-8 max-w-[340px]">
                Engage Europe's finest business and technical students through a sponsored challenge. Get verified talent signals, not just CVs.
              </p>
              <Link
                href="/for-sponsors"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-[14px] font-semibold text-white border-2 border-white hover:bg-white hover:text-[#111111] transition-all duration-200 w-fit"
                data-testid="split-cta-sponsor"
              >
                Become a Sponsor <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
