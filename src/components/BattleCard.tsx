import type { Offering } from "@/types";

interface BattleCardProps {
  offering: Offering;
  onClick: (offering: Offering) => void;
}

export default function BattleCard({ offering, onClick }: BattleCardProps) {
  return (
    <button
      onClick={() => onClick(offering)}
      style={{ background: "var(--ust-white)", border: "1px solid var(--ust-border-color)", borderTop: "3px solid var(--ust-light-teal)", borderRadius: 0, padding: "1.5rem", textAlign: "left", width: "100%", height: "100%", cursor: "pointer", transition: "transform 0.18s ease, box-shadow 0.18s ease, border-top-color 0.18s ease", display: "flex", flexDirection: "column", gap: "0.6rem" }}
      onMouseEnter={(event) => { const element = event.currentTarget; element.style.transform = "translateY(-4px)"; element.style.boxShadow = "0 8px 24px rgba(0,110,116,0.13)"; element.style.borderTopColor = "var(--ust-dark-teal)"; }}
      onMouseLeave={(event) => { const element = event.currentTarget; element.style.transform = "translateY(0)"; element.style.boxShadow = "none"; element.style.borderTopColor = "var(--ust-light-teal)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontSize: "1.4rem", color: "var(--ust-light-teal)", lineHeight: 1 }}>{offering.icon}</span>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--ust-soft-black)", lineHeight: 1.25, marginBottom: "0.2rem" }}>{offering.name}</div>
        <div style={{ fontSize: "0.78rem", color: "var(--ust-light-teal)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{offering.tagline}</div>
      </div>
      <p style={{ fontSize: "0.82rem", color: "var(--body-text)", lineHeight: 1.55, margin: 0, flexGrow: 1 }}>{offering.description}</p>
      <div style={{ marginTop: "0.4rem", fontSize: "0.75rem", fontWeight: 700, color: "var(--ust-light-teal)", display: "flex", alignItems: "center", gap: "0.3rem" }}>Explore offering →</div>
    </button>
  );
}
