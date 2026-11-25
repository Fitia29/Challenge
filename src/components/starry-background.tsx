import StarField from "@/components/Starfield";

function Decor() {
  const stroke = { fill: "none", stroke: "rgba(255,255,255,0.07)", strokeWidth: 1.5 } as const;
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox="0 0 1920 911"
      preserveAspectRatio="xMidYMid slice"
    >
      <g transform="translate(252 171) rotate(33)">
        <rect x={-1600} y={-100} width={1700} height={200} rx={100} {...stroke} />
      </g>
      <g transform="translate(1752 163) rotate(-29)">
        <rect x={-60} y={-60} width={1400} height={120} rx={60} {...stroke} />
      </g>
      <g transform="translate(1602 906) rotate(-28)">
        <rect x={-150} y={-150} width={1600} height={300} rx={150} {...stroke} />
      </g>
    </svg>
  );
}

export default function StarryBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ background: "#0A123D" }}
    >
      <Decor />
      <StarField />
    </div>
  );
}
