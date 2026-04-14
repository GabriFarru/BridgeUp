interface LogoMarkProps {
  size?: number;
  variant?: "light" | "dark";
}

export default function LogoMark({ size = 36, variant = "light" }: LogoMarkProps) {
  const height = Math.round(size * 0.82);

  if (variant === "dark") {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
          borderRadius: 6,
          padding: 4,
          width: size + 8,
          height: height + 8,
          flexShrink: 0,
        }}
      >
        <img
          src="/logo.png"
          alt="BridgeUp logo"
          width={size}
          height={height}
          style={{ objectFit: "contain", display: "block" }}
        />
      </span>
    );
  }

  return (
    <img
      src="/logo.png"
      alt="BridgeUp logo"
      width={size}
      height={height}
      style={{
        objectFit: "contain",
        display: "block",
        mixBlendMode: "multiply",
        flexShrink: 0,
      }}
    />
  );
}
