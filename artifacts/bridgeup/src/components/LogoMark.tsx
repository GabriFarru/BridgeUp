interface LogoMarkProps {
  size?: number;
  variant?: "light" | "dark";
}

export default function LogoMark({ size = 36, variant = "light" }: LogoMarkProps) {
  const height = Math.round(size * 0.82);

  return (
    <img
      src={variant === "dark" ? "/logo-dark.png" : "/logo.png"}
      alt="BridgeUp logo"
      width={size}
      height={height}
      style={{
        objectFit: "contain",
        display: "block",
        flexShrink: 0,
      }}
    />
  );
}
