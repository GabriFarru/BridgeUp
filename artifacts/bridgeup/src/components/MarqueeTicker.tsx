const items = [
  "HSG × ETH",
  "Verified Records",
  "Recruiter-Facing",
  "Case Competitions",
  "Cross-Disciplinary Teams",
  "Real Projects",
  "Talent Infrastructure",
];

export default function MarqueeTicker() {
  const text = items.map((item, i) => (
    <span key={i} className="flex items-center gap-6 shrink-0">
      <span className="label-caps" style={{ color: "#1A1A1A" }}>{item}</span>
      <span style={{ color: "#E4002B", fontWeight: 700, fontSize: "18px" }}>·</span>
    </span>
  ));

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        borderTop: "1px solid #E0E0E0",
        borderBottom: "1px solid #E0E0E0",
        background: "#F7F7F7",
        height: "52px",
        display: "flex",
        alignItems: "center",
      }}
      aria-hidden="true"
    >
      <div className="flex marquee-track" style={{ whiteSpace: "nowrap" }}>
        <div className="flex items-center gap-6 px-6">
          {text}
          {text}
        </div>
      </div>
    </div>
  );
}
