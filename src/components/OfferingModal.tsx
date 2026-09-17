import type { Offering } from "@/types";

interface OfferingModalProps { offering: Offering; onClose: () => void; }

export default function OfferingModal({ offering, onClose }: OfferingModalProps) {
  return (
    <div className="app-modal-backdrop" onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(33,33,33,0.72)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div className="app-modal" onClick={(event) => event.stopPropagation()} style={{ background: "var(--ust-white)", borderTop: "4px solid var(--ust-light-teal)", borderRadius: 0, maxWidth: 520, width: "100%", padding: "2.5rem", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: "1rem", right: "1rem", background: "none", border: "none", cursor: "pointer", fontSize: "1.25rem", color: "var(--body-text)", lineHeight: 1, padding: "0.25rem 0.5rem" }} aria-label="Close">×</button>
        <div className="eyebrow">{offering.category}</div>
        <div style={{ width: 40, height: 3, background: "var(--ust-light-teal)", margin: "0.5rem 0 1.25rem" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
          <span style={{ fontSize: "2rem", color: "var(--ust-light-teal)" }}>{offering.icon}</span>
          <h2 style={{ fontWeight: 700, fontSize: "1.4rem", color: "var(--ust-soft-black)", margin: 0, lineHeight: 1.2 }}>{offering.name}</h2>
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--ust-light-teal)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>{offering.tagline}</p>
        <p style={{ fontSize: "0.92rem", color: "var(--body-text)", lineHeight: 1.65, marginBottom: "2rem" }}>{offering.description}</p>
        <a href={offering.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--ust-light-teal)", color: "#fff", fontWeight: 700, fontSize: "0.875rem", padding: "0.75rem 1.75rem", borderRadius: 0, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.06em", transition: "background 0.15s ease" }} onMouseEnter={(event) => { event.currentTarget.style.background = "var(--ust-dark-teal)"; }} onMouseLeave={(event) => { event.currentTarget.style.background = "var(--ust-light-teal)"; }}>
          Visit Offering <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--ust-border-color)" }}>
          <p style={{ fontSize: "0.75rem", color: "#9E9E9E", margin: 0 }}>Direct link: <span style={{ fontFamily: "'Cascadia Code', Consolas, 'SF Mono', monospace", color: "var(--ust-dark-teal)", fontSize: "0.72rem", wordBreak: "break-all" }}>{offering.url}</span></p>
        </div>
      </div>
    </div>
  );
}
