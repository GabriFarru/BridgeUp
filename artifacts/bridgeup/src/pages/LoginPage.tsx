import { Link } from "wouter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import LogoMark from "@/components/LogoMark";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});
type FormValues = z.infer<typeof formSchema>;

const inputClass = "w-full px-4 py-3 rounded border border-[#E0E0E0] text-[15px] text-[#1A1A1A] bg-white placeholder:text-[#AAAAAA] focus:outline-none transition-all duration-200";

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    setError("");
    await new Promise(r => setTimeout(r, 800));
    // TODO: integrate Firebase Auth — replace with:
    // await signInWithEmailAndPassword(auth, values.email, values.password);
    console.log("Login:", values);
    setError("Authentication not yet configured. Firebase credentials are required.");
  };

  return (
    <div className="page-enter min-h-screen flex items-center justify-center px-6" style={{ paddingTop: "80px" }}>
      <div className="w-full max-w-[440px]">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center justify-center gap-2.5 mb-8" data-testid="link-logo-login">
            <LogoMark size={58} />
            <span className="font-display text-[20px] font-semibold text-[#1A1A1A]">BridgeUp</span>
          </Link>
          <h1 className="font-display font-semibold text-[#1A1A1A] text-[30px] mb-2">Welcome back</h1>
          <p className="text-[#6B6B6B] text-[15px]">Sign in to your BridgeUp account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" data-testid="form-login">
          {error && (
            <div className="px-4 py-3 rounded border border-[rgba(228,0,43,0.2)] bg-[rgba(228,0,43,0.04)] text-[#E4002B] text-[13px]" data-testid="login-error">
              {error}
            </div>
          )}
          <div>
            <label className="label-caps mb-2 block">Email</label>
            <input {...register("email")} type="email" className={inputClass} placeholder="name@student.ethz.ch" data-testid="input-email" />
            {errors.email && <p className="text-[#E4002B] text-[12px] mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="label-caps">Password</label>
              <Link href="/login" className="text-[12px] text-[#6B6B6B] hover:text-[#E4002B] transition-colors" data-testid="link-forgot-password">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input {...register("password")} type={showPw ? "text" : "password"} className={`${inputClass} pr-11`} placeholder="Your password" data-testid="input-password" />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-[#1A1A1A]" onClick={() => setShowPw(!showPw)}>
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <p className="text-[#E4002B] text-[12px] mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded text-[15px] font-semibold text-white btn-primary disabled:opacity-60"
            data-testid="btn-login"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-[14px] text-[#6B6B6B] mt-6">
          Don't have an account?{" "}
          <Link href="/join/student" className="text-[#E4002B] font-medium hover:underline" data-testid="link-register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
