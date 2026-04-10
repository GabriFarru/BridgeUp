import { Link } from "wouter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Please provide a brief message"),
});
type FormValues = z.infer<typeof formSchema>;

const inputClass = "w-full px-4 py-3 rounded border border-[#E0E0E0] text-[15px] text-[#1A1A1A] bg-white placeholder:text-[#AAAAAA] focus:outline-none transition-all duration-200";

export default function JoinSponsorPage() {
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
    console.log("Sponsor interest form submitted:", values);
    setSubmitted(true);
  };

  return (
    <div className="page-enter min-h-screen flex flex-col" style={{ paddingTop: "80px" }}>
      {/* Tab bar */}
      <div style={{ borderBottom: "1px solid #E0E0E0", background: "#F7F7F7" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex gap-0">
          <Link href="/join/student" className="px-6 py-4 text-[14px] font-medium text-[#6B6B6B] border-b-2 border-transparent hover:text-[#1A1A1A] transition-colors" data-testid="tab-for-students">
            For Students
          </Link>
          <Link href="/join/sponsor" className="px-6 py-4 text-[14px] font-semibold text-[#E4002B] border-b-2 border-[#E4002B]" data-testid="tab-for-sponsors">
            For Sponsors
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-start justify-center px-6 py-16">
        <div className="w-full max-w-[480px]">
          {submitted ? (
            <div className="text-center py-12" data-testid="sponsor-form-success">
              <div className="w-12 h-12 rounded-full bg-[rgba(228,0,43,0.08)] flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#E4002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h2 className="font-display font-semibold text-[#1A1A1A] text-[24px] mb-2">Thank you!</h2>
              <p className="text-[#6B6B6B] text-[15px]">We'll be in touch shortly.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="label-caps mb-3" style={{ color: "#6B6B6B" }}>Sponsor Interest</div>
                <h1 className="font-display font-semibold text-[#1A1A1A] text-[32px] mb-2">Partner with BridgeUp</h1>
                <p className="text-[#6B6B6B] text-[15px]">Tell us about your company and your interest in sponsoring a competition.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" data-testid="form-sponsor-interest">
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
                <div>
                  <label className="label-caps mb-2 block">Email</label>
                  <input {...register("email")} type="email" className={inputClass} placeholder="anna@helvetica.vc" data-testid="input-email" />
                  {errors.email && <p className="text-[#E4002B] text-[12px] mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="label-caps mb-2 block">Message</label>
                  <textarea {...register("message")} rows={5} className={`${inputClass} resize-none`} placeholder="Tell us about your company and what you're looking to achieve..." data-testid="input-message" />
                  {errors.message && <p className="text-[#E4002B] text-[12px] mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded text-[15px] font-semibold text-white btn-primary disabled:opacity-60 mt-2"
                  data-testid="btn-send"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
