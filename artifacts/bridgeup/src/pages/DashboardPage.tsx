import { Link } from "wouter";
import { Plus, Trophy, Clock, ChevronRight, LogOut, LayoutDashboard, Users, Settings } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { competitions, students, teams } from "@/data/seed";
import DemoRoleSwitcher, { DemoRole } from "@/components/DemoRoleSwitcher";
import { useState } from "react";

const currentStudent = students[0];

function Sidebar({ role, onRoleChange }: { role: DemoRole; onRoleChange: (r: DemoRole) => void }) {
  const navItems = [
    { icon: <LayoutDashboard size={16} />, label: "Dashboard", href: "/dashboard" },
    { icon: <Trophy size={16} />, label: "My Entries", href: "/dashboard" },
    { icon: <Users size={16} />, label: "Students", href: "/students" },
    { icon: <Settings size={16} />, label: "Settings", href: "/dashboard" },
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen sticky top-0 bg-white border-r border-[#E0E0E0]" style={{ width: "240px", minWidth: "240px" }}>
      <div className="px-6 py-5 border-b border-[#E0E0E0]">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark size={44} />
          <span className="font-display text-[17px] font-semibold text-[#1A1A1A]">BridgeUp</span>
        </Link>
      </div>
      <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded text-[14px] font-medium text-[#6B6B6B] hover:bg-[#F7F7F7] hover:text-[#1A1A1A] transition-colors"
            data-testid={`sidebar-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="px-3 py-4 border-t border-[#E0E0E0]">
        <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded text-[14px] font-medium text-[#6B6B6B] hover:text-[#E4002B] transition-colors">
          <LogOut size={16} />
          Sign out
        </Link>
      </div>
    </aside>
  );
}

export default function DashboardPage() {
  const [role, setRole] = useState<DemoRole>("student");
  const myTeams = teams;

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <Sidebar role={role} onRoleChange={setRole} />

      <main className="flex-1 overflow-auto">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-10">
            <div>
              <p className="label-caps mb-2" style={{ color: "#6B6B6B" }}>Student Dashboard</p>
              <h1 className="font-display font-semibold text-[#1A1A1A] text-[28px]">
                Welcome back, {currentStudent.name.split(" ")[0]}.
              </h1>
            </div>
            <Link
              href="/dashboard/enter"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-[14px] font-semibold text-white btn-primary shrink-0"
              data-testid="btn-enter-competition"
            >
              <Plus size={15} /> Enter a Competition
            </Link>
          </div>

          {/* Profile card */}
          <div className="bridgeup-card rounded p-6 mb-8" data-testid="profile-card">
            <div className="flex items-start gap-5">
              <div
                className="flex items-center justify-center rounded-full font-semibold text-[18px] shrink-0"
                style={{ width: "52px", height: "52px", background: "rgba(59,130,246,0.10)", color: "#2563EB" }}
              >
                {currentStudent.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <span className="font-semibold text-[17px] text-[#1A1A1A]">{currentStudent.name}</span>
                  <span className="inline-flex items-center rounded px-2 py-0.5 text-[11px] font-medium bg-[rgba(59,130,246,0.08)] text-[#2563EB] border border-[rgba(59,130,246,0.2)]">
                    HSG
                  </span>
                </div>
                <p className="text-[13px] text-[#6B6B6B] mb-3">{currentStudent.programme}</p>
                <div className="flex flex-wrap gap-1.5">
                  {currentStudent.skills.map((skill, i) => (
                    <span key={i} className="inline-flex items-center rounded px-2.5 py-0.5 text-[11px] font-medium" style={{ background: "#F0F0F0", color: "#1A1A1A", border: "1px solid #E0E0E0" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* My Entries */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-[#1A1A1A] text-[17px]">My Competition Entries</h2>
            </div>
            <div className="flex flex-col gap-4">
              {myTeams.map(team => {
                const comp = competitions.find(c => c.id === team.competitionId);
                if (!comp) return null;
                return (
                  <Link
                    key={team.id}
                    href={`/competitions/${comp.id}`}
                    className="bridgeup-card rounded p-5 flex items-center justify-between gap-4"
                    data-testid={`entry-${team.id}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded bg-[rgba(228,0,43,0.06)] flex items-center justify-center shrink-0">
                        <Trophy size={16} className="text-[#E4002B]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A1A1A] text-[15px]">{comp.name}</p>
                        <p className="text-[13px] text-[#6B6B6B]">{team.name} · {comp.sponsor}</p>
                        <p className="text-[12px] text-[#E4002B] font-medium mt-1">{team.result}</p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-[#6B6B6B] shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Record timeline */}
          <div>
            <h2 className="font-semibold text-[#1A1A1A] text-[17px] mb-5">My Record</h2>
            <div className="flex flex-col gap-0 relative" style={{ borderLeft: "2px solid #E0E0E0", paddingLeft: "24px", marginLeft: "8px" }}>
              {myTeams.map((team, i) => {
                const comp = competitions.find(c => c.id === team.competitionId);
                if (!comp) return null;
                return (
                  <div key={team.id} className="relative pb-8" data-testid={`timeline-${team.id}`}>
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full border-2 border-white" style={{ background: "#E4002B" }} />
                    <div className="flex items-start gap-3">
                      <Clock size={13} className="text-[#6B6B6B] mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-[#1A1A1A] text-[14px]">{comp.name}</p>
                        <p className="text-[12px] text-[#6B6B6B]">{team.name} · {team.result}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <DemoRoleSwitcher role={role} onRoleChange={setRole} />
    </div>
  );
}
