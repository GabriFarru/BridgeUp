interface LogoMarkProps {
  size?: number;
  variant?: "light" | "dark";
}

export default function LogoMark({ size = 36, variant = "light" }: LogoMarkProps) {
  const innerColor = variant === "dark" ? "white" : "#1A1A1A";
  const h = Math.round(size * 0.68);

  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 38 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BridgeUp logo mark"
    >
      {/* Outer arc — red, wide */}
      <path
        d="M1 24 C9 1, 29 1, 37 24"
        stroke="#E4002B"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner arc — dark/white, narrower */}
      <path
        d="M8 24 C14 7, 24 7, 30 24"
        stroke={innerColor}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
