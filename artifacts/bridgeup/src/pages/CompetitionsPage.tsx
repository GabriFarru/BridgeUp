import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import CompetitionCard from "@/components/CompetitionCard";
import { competitions } from "@/data/seed";

type Filter = "all" | "active" | "completed";

export default function CompetitionsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = [...competitions]
    .sort((a, b) => (a.status === "Active" ? -1 : 1) - (b.status === "Active" ? -1 : 1))
    .filter(c => {
      if (filter === "all") return true;
      if (filter === "active") return c.status === "Active";
      return c.status === "Completed";
    });

  const tabs: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="page-enter">
      {/* Header */}
      <section style={{ padding: "160px 0 60px" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="label-caps mb-5" style={{ color: "#E4002B" }}>Platform Competitions</div>
            <h1 className="font-display font-semibold text-[#1A1A1A]" style={{ fontSize: "clamp(36px, 6vw, 56px)", lineHeight: 1.05 }}>
              Competitions
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Filter tabs */}
      <div style={{ background: "#F7F7F7", borderBottom: "1px solid #E0E0E0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex gap-0">
          {tabs.map(tab => (
            <button
              key={tab.value}
              className={`px-6 py-4 text-[14px] font-medium border-b-2 transition-colors ${filter === tab.value ? "text-[#E4002B] border-[#E4002B]" : "text-[#6B6B6B] border-transparent hover:text-[#1A1A1A]"}`}
              onClick={() => setFilter(tab.value)}
              data-testid={`filter-${tab.value}`}
            >
              {tab.label}
              <span className="ml-2 text-[12px] opacity-60">
                ({tab.value === "all" ? competitions.length : competitions.filter(c => c.status.toLowerCase() === tab.value).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: "80px 0 120px" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#6B6B6B] text-[16px]">No competitions match this filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((comp, i) => (
                <ScrollReveal key={comp.id} delay={i * 80}>
                  <CompetitionCard competition={comp} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
