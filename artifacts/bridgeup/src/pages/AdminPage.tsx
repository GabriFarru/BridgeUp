import { useState } from "react";
import { Link } from "wouter";
import { Check, X, Plus, LayoutDashboard, Users, Trophy, Settings, LogOut } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { students, competitions } from "@/data/seed";
import DemoRoleSwitcher, { DemoRole } from "@/components/DemoRoleSwitcher";

type AdminTab = "students" | "competitions" | "sponsors";

export default function AdminPage() {
  const [tab, setTab] = useState<AdminTab>("students");
  const [role, setRole] = useState<DemoRole>("admin");
  const [studentStatus, setStudentStatus] = useState<Record<string, "approved" | "rejected" | null>>({});

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
        <div className="px-3 py-2 flex-1">
          <div className="px-3 py-1 mb-2">
            <span className="label-caps text-[#E4002B]">Admin</span>
          </div>
          {[
            { icon: <LayoutDashboard size={16} />, label: "Overview", tab: null, href: "/admin" },
            { icon: <Users size={16} />, label: "Students", tab: "students" },
            { icon: <Trophy size={16} />, label: "Competitions", tab: "competitions" },
            { icon: <Settings size={16} />, label: "Sponsors", tab: "sponsors" },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-[14px] font-medium transition-colors text-left ${tab === item.tab ? "bg-[rgba(228,0,43,0.04)] text-[#E4002B]" : "text-[#6B6B6B] hover:bg-[#F7F7F7] hover:text-[#1A1A1A]"}`}
              onClick={() => item.tab && setTab(item.tab as AdminTab)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
        <div className="px-3 py-4 border-t border-[#E0E0E0]">
          <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded text-[14px] font-medium text-[#6B6B6B] hover:text-[#E4002B] transition-colors">
            <LogOut size={16} /> Sign out
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-10">
          <div className="mb-6">
            <div className="label-caps mb-2" style={{ color: "#E4002B" }}>Admin Panel</div>
            <h1 className="font-display font-semibold text-[#1A1A1A] text-[28px]">Platform Management</h1>
          </div>

          {/* Tab bar */}
          <div className="flex gap-0 border-b border-[#E0E0E0] mb-8">
            {(["students", "competitions", "sponsors"] as AdminTab[]).map(t => (
              <button
                key={t}
                className={`px-6 py-3.5 text-[14px] font-medium border-b-2 capitalize transition-colors ${tab === t ? "text-[#E4002B] border-[#E4002B]" : "text-[#6B6B6B] border-transparent hover:text-[#1A1A1A]"}`}
                onClick={() => setTab(t)}
                data-testid={`admin-tab-${t}`}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === "students" && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-[#1A1A1A] text-[17px]">Students ({students.length})</h2>
              </div>
              <div className="flex flex-col gap-3">
                {students.map(student => {
                  const status = studentStatus[student.id];
                  return (
                    <div key={student.id} className="bg-white rounded border border-[#E0E0E0] px-5 py-4 flex items-center justify-between gap-4" data-testid={`admin-student-${student.id}`}>
                      <div className="flex items-center gap-4">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center font-semibold text-[13px] shrink-0"
                          style={{ background: student.university === "HSG" ? "rgba(59,130,246,0.10)" : "rgba(34,197,94,0.10)", color: student.university === "HSG" ? "#2563EB" : "#16A34A" }}
                        >
                          {student.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-medium text-[#1A1A1A] text-[14px]">{student.name}</p>
                          <p className="text-[12px] text-[#6B6B6B]">{student.university} · {student.programme}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {status ? (
                          <span className={`text-[12px] font-medium px-3 py-1 rounded ${status === "approved" ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"}`}>
                            {status === "approved" ? "Approved" : "Rejected"}
                          </span>
                        ) : (
                          <>
                            <button
                              className="w-8 h-8 rounded border border-[#E0E0E0] flex items-center justify-center text-[#6B6B6B] hover:text-red-600 hover:border-red-200 transition-colors"
                              onClick={() => setStudentStatus({ ...studentStatus, [student.id]: "rejected" })}
                              data-testid={`btn-reject-${student.id}`}
                            >
                              <X size={14} />
                            </button>
                            <button
                              className="w-8 h-8 rounded border border-[#E0E0E0] flex items-center justify-center text-[#6B6B6B] hover:text-green-600 hover:border-green-200 transition-colors"
                              onClick={() => setStudentStatus({ ...studentStatus, [student.id]: "approved" })}
                              data-testid={`btn-approve-${student.id}`}
                            >
                              <Check size={14} />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {tab === "competitions" && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-[#1A1A1A] text-[17px]">Competitions ({competitions.length})</h2>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded text-[13px] font-semibold text-white btn-primary" data-testid="btn-add-competition">
                  <Plus size={14} /> Add Competition
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {competitions.map(comp => (
                  <div key={comp.id} className="bg-white rounded border border-[#E0E0E0] px-5 py-4 flex items-center justify-between gap-4" data-testid={`admin-comp-${comp.id}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-medium text-[#1A1A1A] text-[14px]">{comp.name}</p>
                        <span
                          className="text-[11px] px-2 py-0.5 rounded font-medium"
                          style={{ background: comp.status === "Active" ? "rgba(228,0,43,0.08)" : "rgba(0,0,0,0.05)", color: comp.status === "Active" ? "#E4002B" : "#6B6B6B" }}
                        >
                          {comp.status}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#6B6B6B]">{comp.sponsor} · {comp.prize} · {comp.teams} teams</p>
                    </div>
                    <button className="text-[13px] font-medium text-[#6B6B6B] hover:text-[#E4002B] transition-colors px-3 py-1.5 rounded border border-[#E0E0E0]" data-testid={`btn-edit-comp-${comp.id}`}>
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "sponsors" && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-[#1A1A1A] text-[17px]">Sponsors</h2>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded text-[13px] font-semibold text-white btn-primary" data-testid="btn-add-sponsor">
                  <Plus size={14} /> Add Sponsor
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {["Helvetica Ventures", "Nordvik Impact Partners"].map((sponsor, i) => (
                  <div key={i} className="bg-white rounded border border-[#E0E0E0] px-5 py-4 flex items-center justify-between" data-testid={`admin-sponsor-${i}`}>
                    <div>
                      <p className="font-medium text-[#1A1A1A] text-[14px]">{sponsor}</p>
                      <p className="text-[12px] text-[#6B6B6B]">{competitions.filter(c => c.sponsor === sponsor).length} competitions</p>
                    </div>
                    <button className="text-[13px] font-medium text-[#6B6B6B] hover:text-[#E4002B] transition-colors px-3 py-1.5 rounded border border-[#E0E0E0]">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <DemoRoleSwitcher role={role} onRoleChange={setRole} />
    </div>
  );
}
