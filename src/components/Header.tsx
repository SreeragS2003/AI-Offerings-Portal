export default function Header({ search, setSearch }: { search: string; setSearch: (value: string) => void }) {
    return(
        <header
        className="app-header"
        style={{
          background: "var(--ust-soft-black)",
          borderBottom: "3px solid var(--ust-light-teal)",
          padding: "0 2rem",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          className="app-header-content"
          style={{
            maxWidth: "var(--container-width)",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
            gap: "1rem",
          }}
        >
          <div className="app-brand" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: 32,
                height: 32,
                background: "var(--ust-light-teal)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="1" width="7" height="7" fill="white"/>
                <rect x="10" y="1" width="7" height="7" fill="white" opacity="0.6"/>
                <rect x="1" y="10" width="7" height="7" fill="white" opacity="0.6"/>
                <rect x="10" y="10" width="7" height="7" fill="white"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff", lineHeight: 1.1 }}>
                UST AI Solutions
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--ust-light-teal)", fontWeight: 500, letterSpacing: "0.06em" }}>
                AI Solutions Portal
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="app-search" style={{ position: "relative", maxWidth: 280, width: "100%" }}>
            <svg
              style={{ position: "absolute", left: "0.7rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              width="14" height="14" viewBox="0 0 14 14" fill="none"
            >
              <circle cx="6" cy="6" r="4.5" stroke="#9E9E9E" strokeWidth="1.4"/>
              <path d="M9.5 9.5L13 13" stroke="#9E9E9E" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <input
              type="search"
              placeholder="Search offerings…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "0.55rem 0.75rem 0.55rem 2.2rem",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 0,
                color: "#fff",
                fontSize: "0.85rem",
                outline: "none",
                fontFamily: "var(--font-primary)",
              }}
            />
          </div>
        </div>
      </header>
    )
}