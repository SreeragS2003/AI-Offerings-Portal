export default function NoSearchResults() {
    return(
        <div
            style={{
            textAlign: "center",
            padding: "4rem 2rem",
            color: "var(--body-text)",
        }}
        >
            <div style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--ust-light-teal)" }}>◈</div>
            <p style={{ fontWeight: 700, color: "var(--ust-soft-black)" }}>No offerings match your search.</p>
            <p style={{ fontSize: "0.85rem" }}>Try a different keyword.</p>
        </div>
    )
}