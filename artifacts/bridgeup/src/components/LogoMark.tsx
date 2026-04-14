interface LogoMarkProps {
  size?: number;
  variant?: "light" | "dark";
}

export default function LogoMark({ size = 36, variant = "light" }: LogoMarkProps) {
  const height = Math.round(size * 0.82);

  return (
    <img
      src="/logo.png"
      alt="BridgeUp logo"
      width={size}
      height={height}
      style={{
        objectFit: "contain",
        display: "block",
        flexShrink: 0,
        filter: variant === "dark" ? "brightness(0) invert(1)" : "none",
      }}
    />
  );
}
