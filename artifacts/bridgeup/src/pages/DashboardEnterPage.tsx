import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, ArrowRight, X, Check } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { competitions, students } from "@/data/seed";
import DemoRoleSwitcher, { DemoRole } from "@/components/DemoRoleSwitcher";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

type TeamMember = { id: string; name: string; university: string };

const inputClass = "w-full px-4 py-3 rounded border border-[#E0E0E0] text-[15px] text-[#1A1A1A] bg-white placeholder:text-[#AAAAAA] focus:outline-none transition-all duration-200";

function Step1({ value, onChange, onNext }: { value: string; onChange: (v: string) => void; onNext: () => void }) {
  const activeComps = competitions.filter(c => c.status === "Active");
  return (
    <div className="flex flex-col gap-6">
      <div>
        <label className="label-caps mb-3 block">Select Competition</label>
        <select className={inputClass} value={value} onChange={e => onChange(e.target.value)} data-testid="select-competition">
          <option value="">Choose a competition</option>
          {activeComps.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>
      <button onClick={onNext} disabled={!value} className="self-end flex items-center gap-2 px-6 py-3 rounded text-[14px] font-semibold text-white btn-primary disabled:opacity-50" data-testid="step1-next">
        Next <ArrowRight size={15} />
      </button>
    </div>
  );
}

function Step2({ team, onChange, onNext, onBack }: {
  team: TeamMember[];
  onChange: (t: TeamMember[]) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [search, setSearch] = useState("");
  const hsgMembers = team.filter(m => m.university === "HSG");
  const ethMembers = team.filter(m => m.university === "ETH");
  const suggestions = students.filter(s =>
    !team.find(m => m.id === s.id) &&
    (s.name.toLowerCase().includes(search.toLowerCase()) || s.programme.toLowerCase().includes(search.toLowerCase()))
  ).slice(0, 5);

  const canAdd = (student: typeof students[0]) => {
    if (team.length >= 4) return false;
    if (student.university === "HSG" && hsgMembers.length >= 3) return false;
    if (student.university === "ETH" && ethMembers.length >= 3) return false;
    return true;
  };

  const isValid = hsgMembers.length >= 1 && ethMembers.length >= 1;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bridgeup-card rounded p-4 text-center">
          <div className="font-display text-[32px] font-bold text-[#1A1A1A]">{hsgMembers.length}</div>
          <div className="label-caps mt-1" style={{ color: "#2563EB" }}>HSG Members</div>
        </div>
        <div className="bridgeup-card rounded p-4 text-center">
          <div className="font-display text-[32px] font-bold text-[#1A1A1A]">{ethMembers.length}</div>
          <div className="label-caps mt-1" style={{ color: "#16A34A" }}>ETH Members</div>
        </div>
      </div>
      <p className="text-[12px] text-[#6B6B6B]">Teams can be 2+2, 3+1, or 2+1 — at least one member from each university, up to 4 total.</p>

      <div>
        <label className="label-caps mb-2 block">Search Students</label>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={inputClass}
          placeholder="Search by name or programme..."
          data-testid="input-student-search"
        />
        {search && suggestions.length > 0 && (
          <div className="mt-1 border border-[#E0E0E0] rounded bg-white shadow-sm overflow-hidden">
            {suggestions.map(s => (
              <button
                key={s.id}
                disabled={!canAdd(s)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#F7F7F7] transition-colors disabled:opacity-40 border-b border-[#F0F0F0] last:border-0"
                onClick={() => { onChange([...team, { id: s.id, name: s.name, university: s.university }]); setSearch(""); }}
                data-testid={`suggestion-${s.id}`}
              >
                <div>
                  <span className="text-[14px] font-medium text-[#1A1A1A]">{s.name}</span>
                  <span className="text-[12px] text-[#6B6B6B] ml-2">{s.programme}</span>
                </div>
                <span className="text-[11px] font-medium" style={{ color: s.university === "HSG" ? "#2563EB" : "#16A34A" }}>{s.university}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {team.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {team.map(m => (
            <div key={m.id} className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#E0E0E0] bg-[#F7F7F7]" data-testid={`team-member-${m.id}`}>
              <span className="text-[13px] font-medium text-[#1A1A1A]">{m.name}</span>
              <span className="text-[11px]" style={{ color: m.university === "HSG" ? "#2563EB" : "#16A34A" }}>{m.university}</span>
              <button onClick={() => onChange(team.filter(x => x.id !== m.id))} className="text-[#6B6B6B] hover:text-[#E4002B] ml-1">
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      {!isValid && team.length > 0 && (
        <p className="text-[#E4002B] text-[13px]">Each team must have at least 1 HSG student and 1 ETH student (max 2 each).</p>
      )}

      <div className="flex justify-between">
        <button onClick={onBack} className="flex items-center gap-2 px-5 py-3 rounded text-[14px] font-medium text-[#6B6B6B] border border-[#E0E0E0] hover:border-[#1A1A1A] transition-colors" data-testid="step2-back">
          <ArrowLeft size={15} /> Back
        </button>
        <button onClick={onNext} disabled={!isValid} className="flex items-center gap-2 px-6 py-3 rounded text-[14px] font-semibold text-white btn-primary disabled:opacity-50" data-testid="step2-next">
          Next <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

function Step3({ entry, onChange, onNext, onBack }: {
  entry: { shortDesc: string; fullDesc: string; deliverables: string; visible: boolean };
  onChange: (e: typeof entry) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const isValid = entry.shortDesc.length > 0 && entry.fullDesc.length > 0;
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="label-caps">One-Line Description</label>
          <span className={`text-[12px] font-medium ${entry.shortDesc.length > 130 ? "text-[#E4002B]" : "text-[#6B6B6B]"}`}>{entry.shortDesc.length}/150</span>
        </div>
        <input
          className={inputClass}
          maxLength={150}
          placeholder="Briefly describe your entry..."
          value={entry.shortDesc}
          onChange={e => onChange({ ...entry, shortDesc: e.target.value })}
          data-testid="input-short-desc"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="label-caps">Full Description</label>
          <span className={`text-[12px] font-medium ${entry.fullDesc.length > 720 ? "text-[#E4002B]" : "text-[#6B6B6B]"}`}>{entry.fullDesc.length}/800</span>
        </div>
        <textarea
          className={`${inputClass} resize-none`}
          rows={5}
          maxLength={800}
          placeholder="Describe your approach, methodology, and solution..."
          value={entry.fullDesc}
          onChange={e => onChange({ ...entry, fullDesc: e.target.value })}
          data-testid="input-full-desc"
        />
      </div>
      <div>
        <label className="label-caps mb-2 block">Deliverables</label>
        <textarea
          className={`${inputClass} resize-none`}
          rows={3}
          placeholder="List your deliverables (slides, report, prototype, etc.)"
          value={entry.deliverables}
          onChange={e => onChange({ ...entry, deliverables: e.target.value })}
          data-testid="input-deliverables"
        />
      </div>
      <div className="flex items-center justify-between p-4 rounded border border-[#E0E0E0] bg-[#F7F7F7]">
        <div>
          <p className="text-[14px] font-medium text-[#1A1A1A]">Make entry recruiter-visible</p>
          <p className="text-[12px] text-[#6B6B6B]">Recruiters can see your entry on your public profile</p>
        </div>
        <button
          className="w-12 h-6 rounded-full transition-colors duration-200 relative"
          style={{ background: entry.visible ? "#E4002B" : "#E0E0E0" }}
          onClick={() => onChange({ ...entry, visible: !entry.visible })}
          data-testid="toggle-recruiter-visible"
        >
          <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${entry.visible ? "translate-x-6" : "translate-x-0.5"}`} />
        </button>
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className="flex items-center gap-2 px-5 py-3 rounded text-[14px] font-medium text-[#6B6B6B] border border-[#E0E0E0] hover:border-[#1A1A1A] transition-colors" data-testid="step3-back">
          <ArrowLeft size={15} /> Back
        </button>
        <button onClick={onNext} disabled={!isValid} className="flex items-center gap-2 px-6 py-3 rounded text-[14px] font-semibold text-white btn-primary disabled:opacity-50" data-testid="step3-next">
          Review <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

export default function DashboardEnterPage() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<DemoRole>("student");
  const [compId, setCompId] = useState("");
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [entry, setEntry] = useState({ shortDesc: "", fullDesc: "", deliverables: "", visible: true });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const comp = competitions.find(c => c.id === compId);

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    // TODO: write to Firestore — replace with:
    // await addDoc(collection(db, "entries"), { competitionId: compId, team, ...entry, submittedAt: serverTimestamp() });
    console.log("Entry submitted:", { compId, team, entry });
    toast({ title: "Entry submitted successfully!", description: `Your team has been registered for ${comp?.name}.` });
    setTimeout(() => setLocation("/dashboard"), 1500);
    setSubmitting(false);
  };

  const steps = ["Competition", "Team", "Details", "Review"];

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
        <div className="px-6 py-6">
          <Link href="/dashboard" className="flex items-center gap-2 text-[13px] text-[#6B6B6B] hover:text-[#E4002B] transition-colors mb-4">
            <ArrowLeft size={13} /> Back to Dashboard
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="max-w-[640px] mx-auto px-6 py-10">
          <div className="mb-8">
            <div className="label-caps mb-3" style={{ color: "#E4002B" }}>Competition Entry</div>
            <h1 className="font-display font-semibold text-[#1A1A1A] text-[28px]">Enter a Competition</h1>
          </div>

          {/* Step progress */}
          <div className="flex items-center gap-0 mb-10">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold transition-all duration-200"
                    style={{
                      background: i + 1 === step ? "#E4002B" : i + 1 < step ? "#1A1A1A" : "#E0E0E0",
                      color: i + 1 <= step ? "white" : "#6B6B6B",
                    }}
                    data-testid={`step-indicator-${i + 1}`}
                  >
                    {i + 1 < step ? <Check size={13} /> : i + 1}
                  </div>
                  <span className="text-[11px] font-medium text-[#6B6B6B] whitespace-nowrap hidden md:block">{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-[1px] mx-2" style={{ background: i + 1 < step ? "#1A1A1A" : "#E0E0E0" }} />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <div className="bg-white rounded border border-[#E0E0E0] p-8">
            <h2 className="font-semibold text-[#1A1A1A] text-[18px] mb-6">
              {step === 1 ? "Select Competition" : step === 2 ? "Form Your Team" : step === 3 ? "Entry Details" : "Review & Submit"}
            </h2>

            {step === 1 && <Step1 value={compId} onChange={setCompId} onNext={() => setStep(2)} />}
            {step === 2 && <Step2 team={team} onChange={setTeam} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
            {step === 3 && <Step3 entry={entry} onChange={setEntry} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
            {step === 4 && (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="label-caps block mb-1">Competition</span>
                    <p className="text-[#1A1A1A] font-medium text-[15px]">{comp?.name}</p>
                    <p className="text-[#6B6B6B] text-[13px]">{comp?.sponsor}</p>
                  </div>
                  <hr className="section-divider" />
                  <div>
                    <span className="label-caps block mb-2">Team ({team.length} members)</span>
                    <div className="flex flex-wrap gap-2">
                      {team.map(m => (
                        <span key={m.id} className="text-[13px] px-3 py-1.5 rounded border border-[#E0E0E0] bg-[#F7F7F7] font-medium text-[#1A1A1A]">
                          {m.name} <span className="text-[11px]" style={{ color: m.university === "HSG" ? "#2563EB" : "#16A34A" }}>{m.university}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <hr className="section-divider" />
                  <div>
                    <span className="label-caps block mb-1">One-Line Description</span>
                    <p className="text-[#1A1A1A] text-[15px]">{entry.shortDesc || <em className="text-[#6B6B6B]">Not provided</em>}</p>
                  </div>
                  <div>
                    <span className="label-caps block mb-1">Visibility</span>
                    <p className="text-[#1A1A1A] text-[14px]">{entry.visible ? "Recruiter-visible" : "Private"}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button onClick={() => setStep(3)} className="flex items-center gap-2 px-5 py-3 rounded text-[14px] font-medium text-[#6B6B6B] border border-[#E0E0E0]" data-testid="step4-back">
                    <ArrowLeft size={15} /> Edit
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex items-center gap-2 px-6 py-3 rounded text-[14px] font-semibold text-white btn-primary disabled:opacity-60"
                    data-testid="btn-submit-entry"
                  >
                    {submitting ? "Submitting..." : "Submit Entry"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Toaster />
      <DemoRoleSwitcher role={role} onRoleChange={setRole} />
    </div>
  );
}
