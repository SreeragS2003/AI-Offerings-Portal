import { TeamMember } from "@/types";

export default function TeamSection({ team }: { team: TeamMember[] }) {
    return(
        <section>
            <div className="eyebrow">The people behind the work</div>
            <h2 style={{ color: "var(--ust-soft-black)", fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.2, margin: "0.45rem 0 0.7rem" }}>Meet the AI Solutions team</h2>
            <p style={{ maxWidth: 620, margin: "0 0 2rem", color: "var(--body-text)", fontSize: "0.92rem" }}>A cross-functional team of strategists, engineers, and architects focused on turning ambitious AI plans into measurable outcomes.</p>
            <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
              {team.map((member) => (
                <article key={member.name} style={{ background: "var(--ust-white)", border: "1px solid var(--ust-border-color)", padding: "1.25rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <img src={member.photo} alt={member.name} style={{ width: 88, height: 88, objectFit: "cover", borderRadius: "50%", marginBottom: "1rem" }} />
                  <h3 style={{ margin: 0, color: "var(--ust-soft-black)", fontSize: "1.05rem" }}>{member.name}</h3>
                  <p style={{ margin: "0.2rem 0 0.8rem", color: "var(--ust-light-teal)", fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{member.role}</p>
                  <p style={{ margin: 0, color: "var(--body-text)", fontSize: "0.84rem", lineHeight: 1.55 }}>{member.bio}</p>
                </article>
              ))}
            </div>
          </section>
    )
}