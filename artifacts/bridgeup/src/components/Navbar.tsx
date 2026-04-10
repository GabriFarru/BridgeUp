import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Competitions", href: "/competitions" },
  { label: "For Students", href: "/for-students" },
  { label: "For Sponsors", href: "/for-sponsors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => location === href || (href !== "/" && location.startsWith(href));

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 0 #E0E0E0" : "none",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" data-testid="link-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="BridgeUp logo">
              <path d="M4 22 Q16 10 28 22" stroke="#E4002B" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M8 22 Q16 14 24 22" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <line x1="4" y1="22" x2="28" y2="22" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
              <line x1="10" y1="18" x2="10" y2="22" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="16" y1="14.5" x2="16" y2="22" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="22" y1="18" x2="22" y2="22" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="font-display text-[20px] font-semibold text-[#1A1A1A] tracking-tight">BridgeUp</span>
          </Link>

          {/* Centre nav links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors duration-200 hover:text-[#E4002B] ${isActive(link.href) ? "nav-active" : "text-[#1A1A1A]"}`}
                data-testid={`nav-link-${link.label.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions — desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded text-[14px] font-medium text-[#1A1A1A] border border-[#E0E0E0] bg-white hover:border-[#1A1A1A] transition-all duration-200"
              data-testid="nav-btn-login"
            >
              Login
            </Link>
            <Link
              href="/join/student"
              className="px-4 py-2 rounded text-[14px] font-medium text-white btn-primary"
              data-testid="nav-btn-join"
            >
              Join BridgeUp
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#1A1A1A] hover:text-[#E4002B] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-testid="btn-mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: menuOpen ? "all" : "none",
          background: menuOpen ? "rgba(0,0,0,0.25)" : "transparent",
          backdropFilter: menuOpen ? "blur(4px)" : "none",
        }}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="absolute top-0 right-0 h-full bg-white flex flex-col"
          style={{
            width: "min(320px, 85vw)",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: "-8px 0 40px rgba(0,0,0,0.1)",
            paddingTop: "80px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col px-8 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[16px] font-medium py-3 border-b border-[#F0F0F0] transition-colors hover:text-[#E4002B] ${isActive(link.href) ? "text-[#E4002B]" : "text-[#1A1A1A]"}`}
                data-testid={`mobile-nav-${link.label.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-8">
              <Link href="/login" className="w-full text-center px-4 py-3 rounded text-[15px] font-medium text-[#1A1A1A] border border-[#E0E0E0]" data-testid="mobile-btn-login">
                Login
              </Link>
              <Link href="/join/student" className="w-full text-center px-4 py-3 rounded text-[15px] font-medium text-white btn-primary" data-testid="mobile-btn-join">
                Join BridgeUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
