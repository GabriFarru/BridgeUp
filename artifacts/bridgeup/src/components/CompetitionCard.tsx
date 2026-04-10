import { Link } from "wouter";
import { ArrowRight, Trophy, Users, Calendar } from "lucide-react";

interface Competition {
  id: string;
  name: string;
  sponsor: string;
  status: string;
  prize: string;
  teams: number;
  winner?: string;
  deadline?: string;
}

interface CompetitionCardProps {
  competition: Competition;
  linkable?: boolean;
}

export default function CompetitionCard({ competition, linkable = true }: CompetitionCardProps) {
  const card = (
    <div className="bridgeup-card rounded p-7 flex flex-col gap-4 h-full cursor-pointer" data-testid={`card-competition-${competition.id}`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-[18px] font-semibold text-[#1A1A1A] leading-snug">{competition.name}</h3>
        <span
          className="shrink-0 inline-flex items-center rounded px-2.5 py-0.5 text-[12px] font-medium"
          style={{
            background: competition.status === "Active" ? "rgba(228,0,43,0.08)" : "rgba(0,0,0,0.05)",
            color: competition.status === "Active" ? "#E4002B" : "#6B6B6B",
            border: competition.status === "Active" ? "1px solid rgba(228,0,43,0.2)" : "1px solid rgba(0,0,0,0.08)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {competition.status}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="label-caps text-[#6B6B6B]">Sponsor</span>
        <span className="text-[15px] text-[#1A1A1A] font-medium">{competition.sponsor}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-auto">
        <div className="flex items-center gap-2">
          <Trophy size={14} className="text-[#6B6B6B]" />
          <span className="text-[14px] text-[#1A1A1A] font-medium">{competition.prize}</span>
        </div>
        {competition.deadline ? (
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-[#6B6B6B]" />
            <span className="text-[13px] text-[#6B6B6B]">{competition.deadline}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Users size={14} className="text-[#6B6B6B]" />
            <span className="text-[13px] text-[#6B6B6B]">{competition.teams} teams</span>
          </div>
        )}
      </div>

      {competition.winner && (
        <div className="pt-3 border-t border-[#E0E0E0] flex items-center gap-2">
          <Trophy size={13} className="text-[#E4002B]" />
          <span className="text-[13px] text-[#6B6B6B]">Winner: <span className="text-[#1A1A1A] font-medium">{competition.winner}</span></span>
        </div>
      )}

      {linkable && (
        <div className="flex items-center gap-1 text-[#E4002B] text-[13px] font-medium" style={{ marginTop: "auto" }}>
          View details <ArrowRight size={13} />
        </div>
      )}
    </div>
  );

  if (!linkable) return card;
  return <Link href={`/competitions/${competition.id}`} className="block h-full">{card}</Link>;
}
