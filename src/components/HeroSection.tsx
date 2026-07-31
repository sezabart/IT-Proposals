import React from 'react';
import { ProposalData } from '../types/proposal';
import { ShieldCheck, Lock, Tv, Building, ArrowRight, Compass } from 'lucide-react';

interface HeroSectionProps {
  proposal: ProposalData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ proposal }) => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-grid-pattern">
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/20 to-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Status Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-xl shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>INFRASTRUCTURE CONCEPT FOR: {proposal.client.name.toUpperCase()} ({proposal.client.companyOrBuilding})</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Unified Infrastructure Plan <br />
            <span className="gradient-text-blue">For Savska Loka Facility</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            Network Backbone • ANPR Smart Gate • AI Security • Dynamic Signage • Floor 2 LED AV & Transceivers
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Prepared by <strong className="text-cyan-400">{proposal.provider.companyName} ({proposal.provider.author})</strong> for <strong className="text-white">{proposal.client.name}</strong>. Tailored for the ~60×15m 3-floor facility (Floors 0, 1 & 2) housing Tehnosol, Flexgrid, Chinese EV dealership, future coworking space, and top-floor conference center.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#design-center"
            className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Compass className="w-4 h-4 text-cyan-200" />
            <span>Next Step: 3D Floorplan Mapping</span>
          </a>
          <a
            href="#building-zones"
            className="flex items-center space-x-2 px-6 py-3.5 rounded-xl glass-panel hover:bg-slate-800/80 text-slate-200 font-semibold text-sm transition-all hover:border-cyan-500/40"
          >
            <Building className="w-4 h-4 text-cyan-400" />
            <span>Explore Savska Loka Layout</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="glass-panel p-5 rounded-2xl border-slate-800 text-center hover:border-cyan-500/30 transition-all">
            <div className="flex justify-center mb-2">
              <Building className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">{proposal.client.buildingSpecs.dimensions}</div>
            <div className="text-xs text-slate-400 font-medium mt-1">3 Floors (0, 1, 2) + Tents</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-slate-800 text-center hover:border-emerald-500/30 transition-all">
            <div className="flex justify-center mb-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-emerald-400 font-mono">100% UniFi</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Ecosystem Backbone</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-slate-800 text-center hover:border-blue-500/30 transition-all">
            <div className="flex justify-center mb-2">
              <Lock className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-blue-400 font-mono">$0 Fees</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Zero Software Subscriptions</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-slate-800 text-center hover:border-purple-500/30 transition-all">
            <div className="flex justify-center mb-2">
              <Tv className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-purple-400 font-mono">Floor 2 AV</div>
            <div className="text-xs text-slate-400 font-medium mt-1">LED Video Wall & AV Transceivers</div>
          </div>

        </div>

      </div>
    </section>
  );
};
