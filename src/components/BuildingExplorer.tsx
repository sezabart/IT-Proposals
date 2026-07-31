import React, { useState } from 'react';
import { ProposalData } from '../types/proposal';
import { Car, Building2, Tv, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { ProductTooltip } from './ProductTooltip';

interface BuildingExplorerProps {
  proposal: ProposalData;
}

export const BuildingExplorer: React.FC<BuildingExplorerProps> = ({ proposal }) => {
  const [activeZoneId, setActiveZoneId] = useState<string>(proposal.zones[0].id);

  const activeZone = proposal.zones.find(z => z.id === activeZoneId) || proposal.zones[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Tv': return <Tv className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="building-zones" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Savska Loka Layout (~60m × 15m)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Floor-by-Floor <span className="gradient-text-blue">UniFi Deployment</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Select a floor to inspect network backbone, access control, AI cameras, dynamic signage, and AV routing across Savska Loka.
          </p>
        </div>

        {/* Floor Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {proposal.zones.map((zone) => {
            const isActive = zone.id === activeZoneId;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`p-4 rounded-2xl text-left transition-all flex flex-col justify-between border ${
                  isActive
                    ? 'glass-panel border-cyan-500/60 bg-gradient-to-b from-cyan-950/40 to-slate-900 shadow-xl shadow-cyan-500/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                    {getIcon(zone.iconName)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400">
                    {zone.floor}
                  </span>
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>{zone.name}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{zone.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Zone Detail Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-slate-800 bg-slate-900/80 shadow-2xl relative overflow-hidden">
          
          {/* Blueprint Label Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {getIcon(activeZone.iconName)}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{activeZone.floor}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400 font-mono">Savska Loka Footprint: ~60m × 15m</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">{activeZone.name}</h3>
              </div>
            </div>

            {/* Tenant Tags */}
            <div className="flex flex-wrap gap-1.5 max-w-md">
              {activeZone.tenantsOrUsage.map((tenant, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-slate-300 font-medium font-mono">
                  {tenant}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            {activeZone.description}
          </p>

          {/* UniFi Integrated Solutions Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {activeZone.unifiSolutions.map((solution, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SOLUTION FEATURE #{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{solution.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{solution.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2">Key Hardware & Tech:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {solution.keyTech.map((tech, tIdx) => (
                      <ProductTooltip
                        key={tIdx}
                        item={{
                          model: tech,
                          role: 'Deployment Specification',
                          url: tech.toLowerCase().includes('unifi') ? 'https://ui.com' : undefined,
                          isUniFi: tech.toLowerCase().includes('unifi')
                        }}
                      >
                        <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-300 font-mono hover:bg-cyan-500/20 transition-colors">
                          {tech}
                        </span>
                      </ProductTooltip>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
