import React, { useState } from 'react';
import { allProposals, defaultProposal, getProposalById } from './data/proposals';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionBanner } from './components/ProblemSolutionBanner';
import { BuildingExplorer } from './components/BuildingExplorer';
import { PillarsSection } from './components/PillarsSection';
import { ANPRGateSection } from './components/ANPRGateSection';
import { ConferenceAVComparison } from './components/ConferenceAVComparison';
import { ExtrasSection } from './components/ExtrasSection';
import { AdminTransferability } from './components/AdminTransferability';
import { DesignCenterSection } from './components/DesignCenterSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentProposalId, setCurrentProposalId] = useState<string>(defaultProposal.id);

  const proposal = getProposalById(currentProposalId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        proposal={proposal}
        allProposals={allProposals}
        onSelectProposal={(id) => setCurrentProposalId(id)}
      />

      {/* Hero Header */}
      <HeroSection proposal={proposal} />

      {/* Infrastructure Considerations */}
      <ProblemSolutionBanner proposal={proposal} />

      {/* Interactive Savska Loka 3-Floor Blueprint Explorer */}
      <BuildingExplorer proposal={proposal} />

      {/* The 6 Infrastructure Pillars with Official EU UniFi Store Links */}
      <PillarsSection proposal={proposal} />

      {/* ANPR Front Gate Integration & Legal Compliance */}
      <ANPRGateSection proposal={proposal} />

      {/* Floor 2 Conference LED Video Wall AV Comparison */}
      <ConferenceAVComparison proposal={proposal} />

      {/* Extras: NAS, VoIP, EV Chargers, One-Click Identity VPN */}
      <ExtrasSection proposal={proposal} />

      {/* Effortless IT Administration & UniFi Identity Endpoint */}
      <AdminTransferability proposal={proposal} />

      {/* Single UniFi Design Center Section (design.ui.com + email to bart@seza.si) */}
      <DesignCenterSection proposal={proposal} />

      {/* Footer */}
      <Footer proposal={proposal} />
    </div>
  );
};

export default App;
