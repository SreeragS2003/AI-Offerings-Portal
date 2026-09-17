export default function NavigationTabs({ activeTab, setActiveTab }: { activeTab: "offerings" | "team"; setActiveTab: (tab: "offerings" | "team") => void }) {
    return(
        <div
                className="app-tabs"
                style={{
                    background: "var(--ust-white)",
                    borderBottom: "1px solid var(--ust-border-color)",
                    position: "sticky",
                    top: 64,
                    zIndex: 40,
                }}
        >
            <div
                className="app-tabs-content"
                style={{
                maxWidth: "var(--container-width)",
                margin: "0 auto",
                padding: "0 2rem",
                display: "flex",
                gap: "0",
                overflowX: "auto",
                scrollbarWidth: "none",
                }}
            >
                {[
                { id: "offerings", label: "Offerings" },
                { id: "team", label: "Our team" },
                ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as "offerings" | "team")}
                    style={{
                    padding: "0.9rem 1.1rem",
                    border: "none",
                    borderBottom: activeTab === tab.id ? "3px solid var(--ust-light-teal)" : "3px solid transparent",
                    background: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-primary)",
                    fontSize: "0.78rem",
                    fontWeight: activeTab === tab.id ? 700 : 500,
                    color: activeTab === tab.id ? "var(--ust-light-teal)" : "var(--body-text)",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s, border-color 0.15s",
                    borderRadius: 0,
                    }}
                >
                    {tab.label}
                </button>
                ))}
            </div>
        </div>
    )
}