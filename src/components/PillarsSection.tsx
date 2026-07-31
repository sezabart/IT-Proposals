import React, { useState } from 'react';
import { ProposalData } from '../types/proposal';
import { Network, Key, Camera, Tv, Radio, Shield, CheckCircle2, Cpu, ExternalLink } from 'lucide-react';
import { ProductTooltip } from './ProductTooltip';

interface PillarsSectionProps {
  proposal: ProposalData;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ proposal }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(proposal.pillars[0].id);

  const activePillar = proposal.pillars.find(p => p.id === selectedPillarId) || proposal.pillars[0];

  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Key': return <Key className="w-5 h-5" />;
      case 'Camera': return <Camera className="w-5 h-5" />;
      case 'Tv': return <Tv className="w-5 h-5" />;
      case 'Radio': return <Radio className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="pillars" className="py-20 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>The 6 Unified Infrastructure Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complete UniFi <span className="gradient-text-blue">Ecosystem Capabilities</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Click a pillar to inspect hardware specs, product links, and capabilities. Hover over hardware names for direct official UniFi product pages.
          </p>
        </div>

        {/* Pillar Selector Pills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {proposal.pillars.map((pillar) => {
            const isActive = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isActive
                    ? 'glass-panel border-cyan-500/60 bg-cyan-950/20 shadow-lg shadow-cyan-500/10 text-white'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className={`p-2 rounded-xl w-fit mb-2 ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                  {getPillarIcon(pillar.icon)}
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">{pillar.badge}</span>
                  <span className="text-xs font-bold truncate block">{pillar.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Pillar Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-slate-800 bg-slate-900/90 shadow-2xl">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {getPillarIcon(activePillar.icon)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{activePillar.badge}</span>
                <h3 className="text-2xl font-bold text-white">{activePillar.title}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{activePillar.subtitle}</p>
              </div>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            {activePillar.summary}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Features List */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Key Capabilities & Features</h4>
              {activePillar.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-white">{feat.title}</h5>
                    {feat.highlight && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                        {feat.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>

            {/* Hardware & Devices with Hover Tooltips & Links */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Hardware Models & Direct Product Links</h4>
                <span className="text-[10px] text-slate-500 font-mono">Hover model for details</span>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                {activePillar.hardwareHighlights.map((hw, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
                    <div className="space-y-1">
                      <ProductTooltip item={hw}>
                        <div className="text-xs font-bold text-cyan-300 font-mono hover:underline flex items-center space-x-1">
                          <span>{hw.model}</span>
                          {hw.url && <ExternalLink className="w-3 h-3 text-cyan-400" />}
                        </div>
                      </ProductTooltip>
                      <div className="text-[11px] text-slate-300">{hw.role}</div>
                      {hw.description && (
                        <div className="text-[10px] text-slate-500">{hw.description}</div>
                      )}
                    </div>

                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1 ml-2" />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
