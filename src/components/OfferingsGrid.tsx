import { Offering } from "@/types";
import BattleCardComponent from "@/components/BattleCard";

type OfferingGridProps = {
    offerings: Offering[],
    filtered: Offering[],
    search: string,
    featuredOffering: Offering | null,
    standardOfferings: Offering[],
    setSelected: (offering: Offering | null) => void
}
export default function OfferingsGrid({ offerings, filtered, search, featuredOffering, standardOfferings, setSelected }: OfferingGridProps) {
    return(
        <>
            <div
                style={{
                fontSize: "0.75rem",
                color: "#9E9E9E",
                marginBottom: "1.25rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                }}
            >
                Showing {filtered.length} of {offerings.length} offerings
            </div>
            {!search && (
                <button
                className="featured-offering"
                onClick={() => setSelected(featuredOffering)}
                style={{ width: "100%", textAlign: "left", cursor: "pointer", border: "0", borderLeft: "5px solid var(--ust-light-teal)", background: "var(--ust-dark-teal)", color: "#fff", padding: "1.5rem 1.75rem", marginBottom: "1.5rem", display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}
                >
                    <div>
                        <div style={{ color: "#78D6DE", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.35rem" }}>Featured offering</div>
                        <div style={{ fontSize: "1.25rem", fontWeight: 700 }}>{featuredOffering?.name}</div>
                        <div style={{ fontSize: "0.88rem", color: "#D4F2F4", marginTop: "0.2rem" }}>{featuredOffering?.tagline}</div>
                    </div>
                    <span style={{ fontWeight: 700, color: "#78D6DE", whiteSpace: "nowrap" }}>Explore →</span>
                </button>
            )}
            <div
                className="offerings-grid"
                style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                // A real gap keeps each row visually separate; card heights are
                // stretched so cards still align cleanly within the same row.
                gap: "1.25rem",
                alignItems: "stretch",
                }}
            >
                {(search ? filtered : standardOfferings).map((o) => (
                    <div key={o.id} style={{ display: "flex" }}>
                        <BattleCardComponent offering={o} onClick={setSelected} />
                    </div>
                ))}
            </div>
        </>
    )
}