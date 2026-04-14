import { Link } from "wouter";
import LogoMark from "@/components/LogoMark";

export default function Footer() {
  return (
    <footer style={{ background: "#111111", color: "white" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark size={48} variant="dark" />
              <span className="font-display text-[18px] font-semibold text-white">BridgeUp</span>
            </Link>
            <p className="text-[14px] text-[rgba(255,255,255,0.5)] leading-relaxed max-w-[240px]">
              The verified project layer for cross-disciplinary talent.
            </p>
          </div>

          {/* Platform links */}
          <div className="flex flex-col gap-4">
            <span className="label-caps text-[rgba(255,255,255,0.4)]">Platform</span>
            <div className="flex flex-col gap-3">
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "Competitions", href: "/competitions" },
                { label: "For Students", href: "/for-students" },
                { label: "For Sponsors", href: "/for-sponsors" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-[14px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Account links */}
          <div className="flex flex-col gap-4">
            <span className="label-caps text-[rgba(255,255,255,0.4)]">Account</span>
            <div className="flex flex-col gap-3">
              {[
                { label: "Login", href: "/login" },
                { label: "Join as Student", href: "/join/student" },
                { label: "Partner with Us", href: "/join/sponsor" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-[14px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[13px] text-[rgba(255,255,255,0.35)]">
            &copy; 2025 BridgeUp. All rights reserved.
          </p>
          <p className="text-[13px] text-[rgba(255,255,255,0.35)]">
            HSG × ETH — Switzerland's premier cross-disciplinary talent platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
