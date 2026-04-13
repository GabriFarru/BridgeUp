import { Link } from "wouter";
import { ArrowRight, Trophy, Users, LayoutDashboard, LogOut } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { competitions, teams } from "@/data/seed";
import DemoRoleSwitcher, { DemoRole } from "@/components/DemoRoleSwitcher";
import { useState } from "react";

const sponsorComps = competitions.filter(c => c.sponsor === "Helvetica Ventures");

export default function SponsorDashboardPage() {
  const [role, setRole] = useState<DemoRole>("sponsor");

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col h-screen sticky top-0 bg-white border-r border-[#E0E0E0]" style={{ width: "240px", minWidth: "240px" }}>
        <div className="px-6 py-5 border-b border-[#E0E0E0]">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark size={28} />
            <span className="font-display text-[17px] font-semibold text-[#1A1A1A]">BridgeUp</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
          {[
            { icon: <LayoutDashboard size={16} />, label: "Dashboard", href: "/sponsor" },
            { icon: <Users size={16} />, label: "Student Directory", href: "/students" },
            { icon: <Trophy size={16} />, label: "Competitions", href: "/competitions" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded text-[14px] font-medium text-[#6B6B6B] hover:bg-[#F7F7F7] hover:text-[#1A1A1A] transition-colors"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-3 py-4 border-t border-[#E0E0E0]">
          <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded text-[14px] font-medium text-[#6B6B6B] hover:text-[#E4002B] transition-colors">
            <LogOut size={16} /> Sign out
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-10">
          <div className="mb-10">
            <div className="label-caps mb-2" style={{ color: "#6B6B6B" }}>Sponsor Dashboard</div>
            <h1 className="font-display font-semibold text-[#1A1A1A] text-[28px]">Helvetica Ventures</h1>
          </div>

          {/* Overview cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { label: "Competitions Sponsored", value: sponsorComps.length.toString() },
              { label: "Total Entries", value: teams.length.toString() },
              { label: "Active Competitions", value: sponsorComps.filter(c => c.status === "Active").length.toString() },
            ].map((stat, i) => (
              <div key={i} className="bridgeup-card rounded p-6" data-testid={`sponsor-stat-${i}`}>
                <div className="font-display text-[36px] font-bold text-[#1A1A1A] mb-1">{stat.value}</div>
                <div className="label-caps">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Competitions */}
          <div className="mb-10">
            <h2 className="font-semibold text-[#1A1A1A] text-[17px] mb-5">Your Competitions</h2>
            <div className="flex flex-col gap-4">
              {sponsorComps.map(comp => {
                const compTeams = teams.filter(t => t.competitionId === comp.id);
                return (
                  <Link
                    key={comp.id}
                    href={`/competitions/${comp.id}`}
                    className="bridgeup-card rounded p-5 flex items-center justify-between gap-4"
                    data-testid={`sponsor-comp-${comp.id}`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-semibold text-[#1A1A1A] text-[15px]">{comp.name}</p>
                        <span
                          className="text-[11px] font-medium px-2 py-0.5 rounded"
                          style={{
                            background: comp.status === "Active" ? "rgba(228,0,43,0.08)" : "rgba(0,0,0,0.05)",
                            color: comp.status === "Active" ? "#E4002B" : "#6B6B6B",
                          }}
                        >
                          {comp.status}
                        </span>
                      </div>
                      <p className="text-[13px] text-[#6B6B6B]">{compTeams.length} teams · {comp.prize}</p>
                    </div>
                    <ArrowRight size={16} className="text-[#6B6B6B] shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="bridgeup-card rounded p-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h3 className="font-semibold text-[#1A1A1A] text-[16px] mb-1">Browse the student directory</h3>
              <p className="text-[#6B6B6B] text-[14px]">Review verified profiles from HSG and ETH Zurich.</p>
            </div>
            <Link
              href="/students"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-[14px] font-semibold text-white btn-primary shrink-0"
              data-testid="btn-browse-students"
            >
              View Students <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>

      <DemoRoleSwitcher role={role} onRoleChange={setRole} />
    </div>
  );
}
