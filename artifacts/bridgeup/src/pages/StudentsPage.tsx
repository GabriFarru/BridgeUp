import { useState } from "react";
import { Link } from "wouter";
import { Search, ArrowLeft } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { students } from "@/data/seed";
import StudentCard from "@/components/StudentCard";
import DemoRoleSwitcher, { DemoRole } from "@/components/DemoRoleSwitcher";

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [uni, setUni] = useState<"all" | "HSG" | "ETH">("all");
  const [role, setRole] = useState<DemoRole>("sponsor");

  const filtered = students.filter(s => {
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.programme.toLowerCase().includes(search.toLowerCase());
    const matchUni = uni === "all" || s.university === uni;
    return matchSearch && matchUni;
  });

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col h-screen sticky top-0 bg-white border-r border-[#E0E0E0]" style={{ width: "240px", minWidth: "240px" }}>
        <div className="px-6 py-5 border-b border-[#E0E0E0]">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark size={44} />
            <span className="font-display text-[17px] font-semibold text-[#1A1A1A]">BridgeUp</span>
          </Link>
        </div>
        <div className="px-6 py-6 flex-1">
          <nav className="flex flex-col gap-1">
            <Link href="/sponsor" className="flex items-center gap-3 px-3 py-2.5 rounded text-[14px] font-medium text-[#6B6B6B] hover:bg-[#F7F7F7] hover:text-[#1A1A1A] transition-colors">
              Dashboard
            </Link>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded text-[14px] font-medium text-[#E4002B] bg-[rgba(228,0,43,0.04)]">
              Student Directory
            </div>
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-10">
          <div className="mb-8">
            <Link href="/sponsor" className="inline-flex items-center gap-2 text-[#6B6B6B] text-[13px] hover:text-[#E4002B] transition-colors mb-4">
              <ArrowLeft size={13} /> Sponsor Dashboard
            </Link>
            <div className="label-caps mb-2" style={{ color: "#6B6B6B" }}>Student Directory</div>
            <h1 className="font-display font-semibold text-[#1A1A1A] text-[28px] mb-2">All Students</h1>
            <p className="text-[#6B6B6B] text-[14px]">{students.length} verified students from HSG and ETH Zurich</p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6B6B]" />
              <input
                className="w-full pl-10 pr-4 py-3 rounded border border-[#E0E0E0] text-[15px] text-[#1A1A1A] bg-white placeholder:text-[#AAAAAA] focus:outline-none transition-all duration-200"
                placeholder="Search by name or programme..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                data-testid="input-student-search"
              />
            </div>
            <div className="flex gap-1 border border-[#E0E0E0] rounded overflow-hidden bg-white">
              {(["all", "HSG", "ETH"] as const).map(u => (
                <button
                  key={u}
                  className={`px-4 py-2.5 text-[13px] font-medium transition-colors ${uni === u ? "bg-[#1A1A1A] text-white" : "text-[#6B6B6B] hover:text-[#1A1A1A]"}`}
                  onClick={() => setUni(u)}
                  data-testid={`filter-uni-${u.toLowerCase()}`}
                >
                  {u === "all" ? "All" : u}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(student => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6B6B6B] text-[15px]">No students match your search.</p>
            </div>
          )}
        </div>
      </main>

      <DemoRoleSwitcher role={role} onRoleChange={setRole} />
    </div>
  );
}
