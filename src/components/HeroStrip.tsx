export default function HeroStrip() {
    return(
        <div style={{ background: "var(--ust-white)", borderBottom: "1px solid var(--ust-border-color)" }}>
        <div
          className="app-hero-content"
          style={{
            maxWidth: "var(--container-width)",
            margin: "0 auto",
            padding: "2.5rem 2rem 2rem",
          }}
        >
          <div className="eyebrow">AI Offerings Portfolio</div>
          <div style={{ width: 48, height: 3, background: "var(--ust-light-teal)", margin: "0.5rem 0 0.75rem" }} />
          <h1
            style={{
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              color: "var(--ust-soft-black)",
              margin: 0,
              lineHeight: 1.2,
              maxWidth: 560,
            }}
          >
            Explore UST's AI Launchpad Solutions
          </h1>
          <p
            style={{
              color: "var(--body-text)",
              fontSize: "0.9rem",
              marginTop: "0.6rem",
              lineHeight: 1.6,
              maxWidth: 540,
            }}
          >
            Discover the AI capabilities and people behind our enterprise solutions.
          </p>
        </div>
      </div>
    )
}