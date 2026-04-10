interface Student {
  id: string;
  name: string;
  university: string;
  programme: string;
  skills: string[];
}

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
  const initials = student.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  const isHSG = student.university === "HSG";

  return (
    <div className="bridgeup-card rounded p-6 flex flex-col gap-4" data-testid={`card-student-${student.id}`}>
      <div className="flex items-start gap-4">
        <div
          className="flex items-center justify-center rounded-full shrink-0 font-semibold text-[15px]"
          style={{
            width: "44px",
            height: "44px",
            background: isHSG ? "rgba(59,130,246,0.10)" : "rgba(34,197,94,0.10)",
            color: isHSG ? "#2563EB" : "#16A34A",
          }}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-[15px] text-[#1A1A1A]">{student.name}</span>
            <span
              className="inline-flex items-center rounded px-2 py-0.5 text-[11px] font-medium"
              style={{
                background: isHSG ? "rgba(59,130,246,0.08)" : "rgba(34,197,94,0.08)",
                color: isHSG ? "#2563EB" : "#16A34A",
                border: isHSG ? "1px solid rgba(59,130,246,0.2)" : "1px solid rgba(34,197,94,0.2)",
                letterSpacing: "0.06em",
              }}
            >
              {student.university}
            </span>
          </div>
          <p className="text-[13px] text-[#6B6B6B] mt-0.5">{student.programme}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {student.skills.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center rounded px-2.5 py-0.5 text-[11px] font-medium"
            style={{ background: "#F0F0F0", color: "#1A1A1A", border: "1px solid #E0E0E0" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
