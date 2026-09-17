import { useState } from "react";
import OfferingModal from "@/components/OfferingModal";
import type { Offering } from "@/types";
import { OFFERINGS, TEAM } from "@/data/data";
import Header from "@/components/Header";
import HeroStrip from "@/components/HeroStrip";
import NavigationTabs from "@/components/NavigationTabs";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import NoSearchResults from "@/components/NoSearchResults";
import OfferingsGrid from "@/components/OfferingsGrid";
import searchFunction from "@/utils/searchFunction";

export default function OfferingsPortal() {
  const [activeTab, setActiveTab] = useState<"offerings" | "team">("offerings");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Offering | null>(null);

  const filtered = OFFERINGS.filter((o) => {
    const q = search.toLowerCase();
    return searchFunction(o,q);
  });
  const featuredOffering = OFFERINGS[0];
  const standardOfferings = filtered.filter((offering) => offering.id !== featuredOffering.id);

  return (
    <div style={{ minHeight: "100vh", background: "var(--ust-light-gray)" }}>
      {/* Header */}
      <Header search={search} setSearch={setSearch} />

      {/* Hero strip */}
      <HeroStrip />

      {/* Primary navigation */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Grid */}
      <main className="app-main" style={{ maxWidth: "var(--container-width)", margin: "0 auto", padding: "2rem" }}>
        {activeTab === "team" ? (
          <TeamSection team={TEAM} />
        ) : filtered.length === 0 ? (
          <NoSearchResults />
        ) : (
          <OfferingsGrid 
              offerings={OFFERINGS} 
              filtered={filtered} 
              search={search} 
              featuredOffering={featuredOffering} 
              standardOfferings={standardOfferings} 
              setSelected={setSelected} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {selected && <OfferingModal offering={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
