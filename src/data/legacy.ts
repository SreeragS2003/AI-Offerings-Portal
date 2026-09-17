// function LegacyBattleCard({
//   offering,
//   onClick,
// }: {
//   offering: Offering;
//   onClick: (o: Offering) => void;
// }) {
//   return (
//     <button
//       onClick={() => onClick(offering)}
//       style={{
//         background: "var(--ust-white)",
//         border: "1px solid var(--ust-border-color)",
//         borderTop: "3px solid var(--ust-light-teal)",
//         borderRadius: 0,
//         padding: "1.5rem",
//         textAlign: "left",
//         width: "100%",
//         height: "100%",
//         cursor: "pointer",
//         transition: "transform 0.18s ease, box-shadow 0.18s ease, border-top-color 0.18s ease",
//         display: "flex",
//         flexDirection: "column",
//         gap: "0.6rem",
//       }}
//       onMouseEnter={(e) => {
//         const el = e.currentTarget;
//         el.style.transform = "translateY(-4px)";
//         el.style.boxShadow = "0 8px 24px rgba(0,110,116,0.13)";
//         el.style.borderTopColor = "var(--ust-dark-teal)";
//       }}
//       onMouseLeave={(e) => {
//         const el = e.currentTarget;
//         el.style.transform = "translateY(0)";
//         el.style.boxShadow = "none";
//         el.style.borderTopColor = "var(--ust-light-teal)";
//       }}
//     >
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
//         <span
//           style={{
//             fontSize: "1.4rem",
//             color: "var(--ust-light-teal)",
//             lineHeight: 1,
//           }}
//         >
//           {offering.icon}
//         </span>
//       </div>

//       <div>
//         <div
//           style={{
//             fontWeight: 700,
//             fontSize: "1rem",
//             color: "var(--ust-soft-black)",
//             lineHeight: 1.25,
//             marginBottom: "0.2rem",
//           }}
//         >
//           {offering.name}
//         </div>
//         <div
//           style={{
//             fontSize: "0.78rem",
//             color: "var(--ust-light-teal)",
//             fontWeight: 500,
//             textTransform: "uppercase",
//             letterSpacing: "0.06em",
//           }}
//         >
//           {offering.tagline}
//         </div>
//       </div>

//       <p
//         style={{
//           fontSize: "0.82rem",
//           color: "var(--body-text)",
//           lineHeight: 1.55,
//           margin: 0,
//           flexGrow: 1,
//         }}
//       >
//         {offering.description}
//       </p>

//       <div
//         style={{
//           marginTop: "0.4rem",
//           fontSize: "0.75rem",
//           fontWeight: 700,
//           color: "var(--ust-light-teal)",
//           display: "flex",
//           alignItems: "center",
//           gap: "0.3rem",
//         }}
//       >
//         Explore offering →
//       </div>
//     </button>
//   );
// }

// function LegacyModal({
//   offering,
//   onClose,
// }: {
//   offering: Offering;
//   onClose: () => void;
// }) {
//   return (
//     <div
//       className="app-modal-backdrop"
//       onClick={onClose}
//       style={{
//         position: "fixed",
//         inset: 0,
//         background: "rgba(33,33,33,0.72)",
//         zIndex: 100,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "1.5rem",
//       }}
//     >
//       <div
//         className="app-modal"
//         onClick={(e) => e.stopPropagation()}
//         style={{
//           background: "var(--ust-white)",
//           borderTop: "4px solid var(--ust-light-teal)",
//           borderRadius: 0,
//           maxWidth: 520,
//           width: "100%",
//           padding: "2.5rem",
//           position: "relative",
//         }}
//       >
//         <button
//           onClick={onClose}
//           style={{
//             position: "absolute",
//             top: "1rem",
//             right: "1rem",
//             background: "none",
//             border: "none",
//             cursor: "pointer",
//             fontSize: "1.25rem",
//             color: "var(--body-text)",
//             lineHeight: 1,
//             padding: "0.25rem 0.5rem",
//           }}
//           aria-label="Close"
//         >
//           ✕
//         </button>

//         <div className="eyebrow">{offering.category}</div>
//         <div style={{ width: 40, height: 3, background: "var(--ust-light-teal)", margin: "0.5rem 0 1.25rem" }} />

//         <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
//           <span style={{ fontSize: "2rem", color: "var(--ust-light-teal)" }}>{offering.icon}</span>
//           <h2
//             style={{
//               fontWeight: 700,
//               fontSize: "1.4rem",
//               color: "var(--ust-soft-black)",
//               margin: 0,
//               lineHeight: 1.2,
//             }}
//           >
//             {offering.name}
//           </h2>
//         </div>

//         <p
//           style={{
//             fontSize: "0.85rem",
//             color: "var(--ust-light-teal)",
//             fontWeight: 600,
//             textTransform: "uppercase",
//             letterSpacing: "0.08em",
//             marginBottom: "1rem",
//           }}
//         >
//           {offering.tagline}
//         </p>

//         <p
//           style={{
//             fontSize: "0.92rem",
//             color: "var(--body-text)",
//             lineHeight: 1.65,
//             marginBottom: "2rem",
//           }}
//         >
//           {offering.description}
//         </p>

//         <a
//           href={offering.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "0.5rem",
//             background: "var(--ust-light-teal)",
//             color: "#fff",
//             fontWeight: 700,
//             fontSize: "0.875rem",
//             padding: "0.75rem 1.75rem",
//             borderRadius: 0,
//             textDecoration: "none",
//             textTransform: "uppercase",
//             letterSpacing: "0.06em",
//             transition: "background 0.15s ease",
//           }}
//           onMouseEnter={(e) => {
//             (e.currentTarget as HTMLAnchorElement).style.background = "var(--ust-dark-teal)";
//           }}
//           onMouseLeave={(e) => {
//             (e.currentTarget as HTMLAnchorElement).style.background = "var(--ust-light-teal)";
//           }}
//         >
//           Visit Offering
//           <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//             <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </a>

//         <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--ust-border-color)" }}>
//           <p style={{ fontSize: "0.75rem", color: "#9E9E9E", margin: 0 }}>
//             Direct link:{" "}
//             <span
//               style={{
//                 fontFamily: "'Cascadia Code', Consolas, 'SF Mono', monospace",
//                 color: "var(--ust-dark-teal)",
//                 fontSize: "0.72rem",
//                 wordBreak: "break-all",
//               }}
//             >
//               {offering.url}
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }