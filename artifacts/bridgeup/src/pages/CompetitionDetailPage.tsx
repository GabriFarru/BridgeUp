import { useParams, Link } from "wouter";
import { ArrowLeft, Trophy, Users, Calendar, Building } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { competitions, students, teams } from "@/data/seed";

export default function CompetitionDetailPage() {
  const params = useParams<{ id: string }>();
  const competition = competitions.find(c => c.id === params.id);

  if (!competition) {
    return (
      <div className="page-enter min-h-screen flex items-center justify-center" style={{ paddingTop: "80px" }}>
        <div className="text-center">
          <h1 className="font-display text-[32px] text-[#1A1A1A] mb-4">Competition not found</h1>
          <Link href="/competitions" className="text-[#E4002B] text-[15px] font-medium">Back to competitions</Link>
        </div>
      </div>
    );
  }

  const relatedTeams = teams.filter(t => t.competitionId === competition.id);

  return (
    <div className="page-enter">
      {/* Header */}
      <section style={{ padding: "140px 0 60px" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Link href="/competitions" className="inline-flex items-center gap-2 text-[#6B6B6B] text-[14px] hover:text-[#E4002B] transition-colors mb-8" data-testid="btn-back-competitions">
            <ArrowLeft size={14} /> Back to Competitions
          </Link>

          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-flex items-center rounded px-3 py-1 text-[12px] font-medium"
                  style={{
                    background: competition.status === "Active" ? "rgba(228,0,43,0.08)" : "rgba(0,0,0,0.05)",
                    color: competition.status === "Active" ? "#E4002B" : "#6B6B6B",
                    border: competition.status === "Active" ? "1px solid rgba(228,0,43,0.2)" : "1px solid rgba(0,0,0,0.08)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                  data-testid="competition-status"
                >
                  {competition.status}
                </span>
              </div>
              <h1 className="font-display font-semibold text-[#1A1A1A]" style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1, maxWidth: "640px" }} data-testid="competition-name">
                {competition.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section style={{ padding: "60px 0 120px" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* About */}
              <ScrollReveal>
                <div>
                  <div className="label-caps mb-4" style={{ color: "#6B6B6B" }}>About</div>
                  <p className="text-[#6B6B6B] text-[16px] leading-relaxed">
                    A rigorous cross-disciplinary challenge bringing together HSG business students and ETH Zurich engineers to tackle real-world problems. Participants form verified cross-disciplinary teams and deliver structured solutions under time pressure.
                  </p>
                </div>
              </ScrollReveal>

              {/* Teams */}
              {relatedTeams.length > 0 && (
                <ScrollReveal>
                  <div>
                    <div className="label-caps mb-6" style={{ color: "#6B6B6B" }}>Teams</div>
                    <div className="flex flex-col gap-4">
                      {relatedTeams.map(team => {
                        const teamMembers = team.members.map(id => students.find(s => s.id === id)).filter(Boolean);
                        return (
                          <div key={team.id} className="bridgeup-card rounded p-6" data-testid={`team-${team.id}`}>
                            <div className="flex items-center gap-3 mb-4">
                              <h3 className="font-semibold text-[#1A1A1A] text-[16px]">{team.name}</h3>
                              {competition.winner === team.name && (
                                <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#E4002B]">
                                  <Trophy size={12} /> Winner
                                </span>
                              )}
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {teamMembers.map((member) => {
                                if (!member) return null;
                                const isHSG = member.university === "HSG";
                                return (
                                  <div key={member.id} className="flex flex-col gap-1 p-3 rounded" style={{ background: "#F0F0F0" }}>
                                    <span className="text-[13px] font-medium text-[#1A1A1A]">{member.name}</span>
                                    <span
                                      className="text-[11px] font-medium"
                                      style={{ color: isHSG ? "#2563EB" : "#16A34A" }}
                                    >
                                      {member.university}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                            {competition.winner === team.name && (
                              <div className="mt-4 pt-4 border-t border-[#E0E0E0]">
                                <span className="text-[13px] text-[#6B6B6B]">Result: <span className="text-[#E4002B] font-medium">Winner</span></span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {competition.status === "Active" && (
                <ScrollReveal>
                  <div className="bridgeup-card rounded p-6">
                    <h3 className="font-semibold text-[#1A1A1A] text-[16px] mb-2">No teams yet</h3>
                    <p className="text-[#6B6B6B] text-[14px] mb-4">Be the first to enter this competition.</p>
                    <Link
                      href={`/dashboard/enter?competition=${competition.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-[14px] font-semibold text-white btn-primary"
                      data-testid="btn-enter-competition"
                    >
                      Enter Competition
                    </Link>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <ScrollReveal>
                <div className="bridgeup-card rounded p-6 flex flex-col gap-5">
                  <div className="label-caps" style={{ color: "#6B6B6B" }}>Details</div>
                  <div className="flex items-center gap-3">
                    <Building size={16} className="text-[#6B6B6B]" />
                    <div>
                      <div className="text-[12px] text-[#6B6B6B]">Sponsor</div>
                      <div className="text-[14px] font-medium text-[#1A1A1A]">{competition.sponsor}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={16} className="text-[#6B6B6B]" />
                    <div>
                      <div className="text-[12px] text-[#6B6B6B]">Teams</div>
                      <div className="text-[14px] font-medium text-[#1A1A1A]">{competition.teams}</div>
                    </div>
                  </div>
                  {competition.deadline && (
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-[#6B6B6B]" />
                      <div>
                        <div className="text-[12px] text-[#6B6B6B]">Deadline</div>
                        <div className="text-[14px] font-medium text-[#1A1A1A]">{competition.deadline}</div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
              {competition.status === "Active" && (
                <ScrollReveal delay={100}>
                  <Link
                    href={`/dashboard/enter?competition=${competition.id}`}
                    className="block w-full text-center py-3.5 rounded text-[15px] font-semibold text-white btn-primary"
                    data-testid="sidebar-btn-enter"
                  >
                    Enter Competition
                  </Link>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
