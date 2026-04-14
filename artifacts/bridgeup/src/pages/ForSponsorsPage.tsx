import { Link } from "wouter";
import { ArrowDown, Target, Zap, Award, Globe } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ScrollReveal from "@/components/ScrollReveal";

const valueProps = [
  {
    icon: <Target size={22} className="text-[#E4002B]" />,
    title: "Talent Access",
    desc: "Engage with a curated pool of HSG business and ETH technical students before they enter the job market. Every profile is verified and recruiter-ready.",
  },
  {
    icon: <Zap size={22} className="text-[#E4002B]" />,
    title: "Real Solutions, Fresh Perspective",
    desc: "Pose an actual firm challenge — not a hypothetical. Cross-disciplinary student teams deliver structured, actionable solutions grounded in real business logic, backed by the kind of lateral thinking that only comes from outside the organisation.",
  },
  {
    icon: <Globe size={22} className="text-[#E4002B]" />,
    title: "Brand Visibility",
    desc: "Your brand sits at the centre of a high-quality academic experience across two of Europe's most respected institutions.",
  },
];

const caseFormats = [
  {
    label: "8-Hour Sprint",
    desc: "An intensive same-day challenge. Teams receive the brief at 9 am and present by 5 pm — ideal for gauging rapid analytical thinking and prioritisation under pressure.",
  },
  {
    label: "24-Hour Challenge",
    desc: "An overnight format that allows teams to go deeper: structured research, stakeholder mapping, and a fully developed recommendation delivered the following morning.",
  },
  {
    label: "Multi-Week Engagement",
    desc: "A project-style format spanning two to four weeks. Teams conduct primary research, iterate on solutions, and present a client-ready deliverable to a judging panel.",
  },
];

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Please enter a valid email"),
  sponsorshipOption: z.string().min(1, "Please select a sponsorship option"),
  message: z.string().min(10, "Please provide a brief message"),
});
type FormValues = z.infer<typeof formSchema>;

function ExpressInterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    await new Promise(r => setTimeout(r, 800));
    // TODO: integrate EmailJS — replace this with:
    // await emailjs.send(
    //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //   { ...values },
    //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    // );
    console.log("Form submitted:", values);
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded border border-[#E0E0E0] text-[15px] text-[#1A1A1A] bg-white placeholder:text-[#AAAAAA] focus:outline-none transition-all duration-200";

  if (submitted) {
    return (
      <div className="text-center py-12" data-testid="form-success-message">
        <div className="w-12 h-12 rounded-full bg-[rgba(228,0,43,0.08)] flex items-center justify-center mx-auto mb-4">
          <Award size={22} className="text-[#E4002B]" />
        </div>
        <h3 className="font-display font-semibold text-[#1A1A1A] text-[20px] mb-2">Thank you for your interest.</h3>
        <p className="text-[#6B6B6B] text-[15px]">We'll review your submission and be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" data-testid="form-express-interest">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label-caps mb-2 block">Company Name</label>
          <input {...register("companyName")} className={inputClass} placeholder="Helvetica Ventures" data-testid="input-company-name" />
          {errors.companyName && <p className="text-[#E4002B] text-[12px] mt-1">{errors.companyName.message}</p>}
        </div>
        <div>
          <label className="label-caps mb-2 block">Contact Name</label>
          <input {...register("contactName")} className={inputClass} placeholder="Anna Schmidt" data-testid="input-contact-name" />
          {errors.contactName && <p className="text-[#E4002B] text-[12px] mt-1">{errors.contactName.message}</p>}
        </div>
      </div>
      <div>
        <label className="label-caps mb-2 block">Email</label>
        <input {...register("email")} type="email" className={inputClass} placeholder="anna@helvetica.vc" data-testid="input-email" />
        {errors.email && <p className="text-[#E4002B] text-[12px] mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="label-caps mb-2 block">Sponsorship Option</label>
        <select {...register("sponsorshipOption")} className={inputClass} data-testid="select-sponsorship-option">
          <option value="">Select an option</option>
          <option value="case-competition">Case Competition Sponsorship</option>
          <option value="platform-naming">Platform Naming Sponsorship</option>
        </select>
        {errors.sponsorshipOption && <p className="text-[#E4002B] text-[12px] mt-1">{errors.sponsorshipOption.message}</p>}
      </div>
      <div>
        <label className="label-caps mb-2 block">Message</label>
        <textarea {...register("message")} className={`${inputClass} resize-none`} rows={5} placeholder="Tell us about your company and what you're looking to achieve..." data-testid="input-message" />
        {errors.message && <p className="text-[#E4002B] text-[12px] mt-1">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded text-[15px] font-semibold text-white btn-primary disabled:opacity-60 mt-2"
        data-testid="btn-submit-form"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}

export default function ForSponsorsPage() {
  return (
    <div className="page-enter">
      {/* Tab bar */}
      <div style={{ borderBottom: "1px solid #E0E0E0", background: "#F7F7F7", paddingTop: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex gap-0">
          <Link href="/for-students" className="px-6 py-4 text-[14px] font-medium text-[#6B6B6B] border-b-2 border-transparent hover:text-[#1A1A1A] transition-colors" data-testid="tab-for-students">
            For Students
          </Link>
          <Link href="/for-sponsors" className="px-6 py-4 text-[14px] font-semibold text-[#E4002B] border-b-2 border-[#E4002B]" data-testid="tab-for-sponsors">
            For Sponsors
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: "120px 0 80px" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="label-caps mb-5" style={{ color: "#E4002B" }}>For Companies</div>
            <h1 className="font-display font-semibold text-[#1A1A1A] mb-6" style={{ fontSize: "clamp(36px, 6vw, 60px)", maxWidth: "700px", lineHeight: 1.1 }}>
              Access the talent pipeline before everyone else.
            </h1>
            <p className="text-[#6B6B6B] leading-relaxed mb-10" style={{ fontSize: "clamp(16px, 2vw, 18px)", maxWidth: "560px" }}>
              BridgeUp gives you direct access to verified, cross-disciplinary student teams from HSG and ETH Zurich — Europe's leading business and technical universities.
            </p>
            <a
              href="#express-interest"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-[15px] font-semibold text-white btn-primary"
              data-testid="hero-btn-express-interest"
            >
              Express Interest <ArrowDown size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Value props */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="label-caps mb-4" style={{ color: "#6B6B6B" }}>Why Partner With Us</div>
            <h2 className="font-display font-semibold text-[#1A1A1A] mb-16" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Beyond the CV. Before the market.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((prop, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bridgeup-card rounded p-8 flex flex-col gap-4 h-full">
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

      {/* Sponsorship options */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="label-caps mb-4" style={{ color: "#6B6B6B" }}>Partnership Options</div>
            <h2 className="font-display font-semibold text-[#1A1A1A] mb-16" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Choose your format.
            </h2>
          </ScrollReveal>

          {/* Case Competition Sponsorship */}
          <ScrollReveal>
            <div className="bridgeup-card rounded p-8 md:p-10 mb-6" data-testid="sponsorship-option-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded bg-[rgba(228,0,43,0.06)]">
                  <Zap size={20} className="text-[#E4002B]" />
                </div>
                <h3 className="font-display font-semibold text-[#1A1A1A]" style={{ fontSize: "20px" }}>Case Competition Sponsorship</h3>
              </div>
              <p className="text-[#6B6B6B] text-[15px] leading-relaxed mb-8" style={{ maxWidth: "680px" }}>
                Design a real consulting brief and bring it to a cohort of cross-disciplinary HSG and ETH teams. You define the firm problem; students deliver structured, client-ready solutions. Choose the format that fits your timeline.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {caseFormats.map((fmt, i) => (
                  <div key={i} className="rounded p-5 flex flex-col gap-2" style={{ background: "#F7F7F7", borderLeft: "3px solid #E4002B" }}>
                    <span className="label-caps text-[#E4002B] text-[11px]">{fmt.label}</span>
                    <p className="text-[#6B6B6B] text-[13px] leading-relaxed">{fmt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Platform Naming Sponsorship */}
          <ScrollReveal delay={100}>
            <div className="bridgeup-card rounded p-8 md:p-10" style={{ borderColor: "#E4002B", borderWidth: "1px", borderLeftWidth: "3px" }} data-testid="sponsorship-option-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded bg-[rgba(228,0,43,0.06)]">
                  <Globe size={20} className="text-[#E4002B]" />
                </div>
                <h3 className="font-display font-semibold text-[#1A1A1A]" style={{ fontSize: "20px" }}>Platform Naming Sponsorship</h3>
              </div>
              <p className="text-[#6B6B6B] text-[15px] leading-relaxed" style={{ maxWidth: "680px" }}>
                Put your brand at the centre of BridgeUp. As the naming sponsor, your company is featured across the platform, in all competition materials, and in every student-facing communication throughout the academic year. One slot available per year.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111111", padding: "80px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-white mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Interested in partnering with BridgeUp?
            </h2>
            <p className="text-[rgba(255,255,255,0.6)] text-[17px] mb-8">Tell us about your company and we will be in touch.</p>
            <a
              href="#express-interest"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-[15px] font-semibold text-white border-2 border-white hover:bg-white hover:text-[#111111] transition-all duration-200"
              data-testid="cta-btn-express-interest"
            >
              Express Interest <ArrowDown size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Express interest form */}
      <section id="express-interest" style={{ padding: "100px 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-[640px] mx-auto">
            <ScrollReveal>
              <div className="label-caps mb-4" style={{ color: "#E4002B" }}>Express Interest</div>
              <h2 className="font-display font-semibold text-[#1A1A1A] mb-8" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
                Get in touch
              </h2>
              <ExpressInterestForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
