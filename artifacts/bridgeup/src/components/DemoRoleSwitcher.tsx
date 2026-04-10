import { useState } from "react";

export type DemoRole = "student" | "sponsor" | "admin";

interface DemoRoleSwitcherProps {
  role: DemoRole;
  onRoleChange: (role: DemoRole) => void;
}

export default function DemoRoleSwitcher({ role, onRoleChange }: DemoRoleSwitcherProps) {
  const [open, setOpen] = useState(false);

  const roles: { value: DemoRole; label: string }[] = [
    { value: "student", label: "Student" },
    { value: "sponsor", label: "Sponsor" },
    { value: "admin", label: "Admin" },
  ];

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      data-testid="demo-role-switcher"
    >
      {open && (
        <div className="bg-white border border-[#E0E0E0] rounded shadow-lg overflow-hidden">
          {roles.map((r) => (
            <button
              key={r.value}
              className={`w-full px-5 py-2.5 text-left text-[13px] font-medium transition-colors hover:bg-[#F7F7F7] ${role === r.value ? "text-[#E4002B]" : "text-[#1A1A1A]"}`}
              onClick={() => {
                onRoleChange(r.value);
                setOpen(false);
              }}
              data-testid={`demo-role-${r.value}`}
            >
              {r.label}
            </button>
          ))}
        </div>
      )}
      <button
        className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-medium text-white shadow-lg transition-all hover:shadow-xl"
        style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.15)" }}
        onClick={() => setOpen(!open)}
        data-testid="btn-demo-role-toggle"
      >
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E4002B", display: "inline-block" }} />
        Demo: {roles.find(r => r.value === role)?.label}
      </button>
    </div>
  );
}
