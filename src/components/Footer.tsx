export default function Footer(){
    return(
        <footer
        className="app-footer"
        style={{
          borderTop: "3px solid var(--ust-light-teal)",
          background: "var(--ust-soft-black)",
          padding: "1.5rem 2rem",
          marginTop: "3rem",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-width)",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span style={{ color: "#9E9E9E", fontSize: "0.78rem" }}>
            © 2026 UST Global. All rights reserved.
          </span>
          <span style={{ color: "var(--ust-light-teal)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em" }}>
            ust.com
          </span>
        </div>
      </footer>
    )
}