interface LogoMarkProps {
  size?: number;
  variant?: "light" | "dark";
}

export default function LogoMark({ size = 36, variant = "light" }: LogoMarkProps) {
  return (
    <img
      src="/logo.png"
      alt="BridgeUp"
      height={size}
      style={{
        height: size,
        width: "auto",
        display: "block",
        filter: variant === "dark" ? "brightness(0) invert(1)" : "none",
      }}
    />
  );
}
