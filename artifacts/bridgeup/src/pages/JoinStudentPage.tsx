import { Link } from "wouter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";

const ALLOWED_DOMAINS = ["@student.unisg.ch", "@student.ethz.ch"];

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email").refine(
    (email) => ALLOWED_DOMAINS.some(d => email.toLowerCase().endsWith(d)),
    "Only @student.unisg.ch and @student.ethz.ch emails are accepted."
  ),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine(d => d.password === d.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
type FormValues = z.infer<typeof formSchema>;

const inputClass = "w-full px-4 py-3 rounded border border-[#E0E0E0] text-[15px] text-[#1A1A1A] bg-white placeholder:text-[#AAAAAA] focus:outline-none transition-all duration-200";

export default function JoinStudentPage() {
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [registered, setRegistered] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    await new Promise(r => setTimeout(r, 800));
    // TODO: integrate Firebase Auth — replace with:
    // const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
    // await updateProfile(userCredential.user, { displayName: values.fullName });
    console.log("Register:", values);
    setRegistered(true);
  };

  return (
    <div className="page-enter min-h-screen flex flex-col" style={{ paddingTop: "80px" }}>
      {/* Tab bar */}
      <div style={{ borderBottom: "1px solid #E0E0E0", background: "#F7F7F7" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex gap-0">
          <Link href="/join/student" className="px-6 py-4 text-[14px] font-semibold text-[#E4002B] border-b-2 border-[#E4002B]" data-testid="tab-for-students">
            For Students
          </Link>
          <Link href="/join/sponsor" className="px-6 py-4 text-[14px] font-medium text-[#6B6B6B] border-b-2 border-transparent hover:text-[#1A1A1A] transition-colors" data-testid="tab-for-sponsors">
            For Sponsors
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 flex items-start justify-center px-6 py-16">
        <div className="w-full max-w-[480px]">
          {registered ? (
            <div className="text-center py-12" data-testid="register-success">
              <div className="w-12 h-12 rounded-full bg-[rgba(228,0,43,0.08)] flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#E4002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h2 className="font-display font-semibold text-[#1A1A1A] text-[24px] mb-2">Registration submitted</h2>
              <p className="text-[#6B6B6B] text-[15px] mb-6">Your account is under review. We'll be in touch shortly.</p>
              <Link href="/login" className="text-[#E4002B] text-[14px] font-medium hover:underline">Go to Login</Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="label-caps mb-3" style={{ color: "#E4002B" }}>Student Registration</div>
                <h1 className="font-display font-semibold text-[#1A1A1A] text-[32px] mb-2">Create your account</h1>
                <p className="text-[#6B6B6B] text-[15px]">Open to students with @student.unisg.ch or @student.ethz.ch email addresses.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" data-testid="form-register-student">
                <div>
                  <label className="label-caps mb-2 block">Full Name</label>
                  <input {...register("fullName")} className={inputClass} placeholder="Marc Hoffmann" data-testid="input-full-name" />
                  {errors.fullName && <p className="text-[#E4002B] text-[12px] mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="label-caps mb-2 block">Institutional Email</label>
                  <input {...register("email")} type="email" className={inputClass} placeholder="name@student.ethz.ch" data-testid="input-email" />
                  {errors.email && <p className="text-[#E4002B] text-[12px] mt-1" data-testid="email-error">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="label-caps mb-2 block">Password</label>
                  <div className="relative">
                    <input {...register("password")} type={showPw ? "text" : "password"} className={`${inputClass} pr-11`} placeholder="Min. 8 characters" data-testid="input-password" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-[#1A1A1A]" onClick={() => setShowPw(!showPw)}>
                      {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-[#E4002B] text-[12px] mt-1">{errors.password.message}</p>}
                </div>
                <div>
                  <label className="label-caps mb-2 block">Confirm Password</label>
                  <div className="relative">
                    <input {...register("confirmPassword")} type={showConfirm ? "text" : "password"} className={`${inputClass} pr-11`} placeholder="Repeat password" data-testid="input-confirm-password" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-[#1A1A1A]" onClick={() => setShowConfirm(!showConfirm)}>
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-[#E4002B] text-[12px] mt-1">{errors.confirmPassword.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded text-[15px] font-semibold text-white btn-primary disabled:opacity-60 mt-2"
                  data-testid="btn-register"
                >
                  {isSubmitting ? "Creating account..." : "Register"}
                </button>
              </form>

              <p className="text-center text-[14px] text-[#6B6B6B] mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-[#E4002B] font-medium hover:underline" data-testid="link-login">
                  Log in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
