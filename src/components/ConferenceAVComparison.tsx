import React, { useState } from 'react';
import { ProposalData } from '../types/proposal';
import { Tv, XCircle, CheckCircle2, Sparkles, MonitorPlay, Info } from 'lucide-react';
import { ProductTooltip } from './ProductTooltip';

interface ConferenceAVComparisonProps {
  proposal: ProposalData;
}

export const ConferenceAVComparison: React.FC<ConferenceAVComparisonProps> = ({ proposal }) => {
  const [selectedTech, setSelectedTech] = useState<'led' | 'projector'>('led');

  return (
    <section id="top-floor-av" className="py-20 bg-slate-950/90 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-mono mb-3">
            <Tv className="w-3.5 h-3.5" />
            <span>Floor 2 Conference Center (Top Floor)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Direct-View LED Video Wall <span className="gradient-text-blue">vs Legacy Projectors</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            For Savska Loka’s top floor conference center, we propose a Direct-View LED video wall (SEZA recommended display panel) integrated with UniFi AV IP Transceivers and ceiling audio.
          </p>
        </div>

        {/* Tech Selector */}
        <div className="flex justify-center mb-8">
          <div className="p-1 rounded-2xl bg-slate-900 border border-slate-800 flex space-x-2">
            <button
              onClick={() => setSelectedTech('led')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                selectedTech === 'led' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/10' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>SEZA Proposed: Direct-View LED Wall</span>
            </button>

            <button
              onClick={() => setSelectedTech('projector')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                selectedTech === 'projector' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              <XCircle className="w-4 h-4 text-rose-400" />
              <span>Legacy Outdated Projector</span>
            </button>
          </div>
        </div>

        {/* Comparison Showcase */}
        <div className="max-w-5xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border-slate-800 bg-slate-900/90 shadow-2xl">
          
          {/* LED Clarification Banner */}
          <div className="mb-6 p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 flex items-start space-x-3 text-xs text-purple-300">
            <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed font-mono">
              {proposal.topFloorAV.ledClarification}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Visual Concept Mockup */}
            <div className="space-y-4">
              <div className={`aspect-video rounded-2xl p-6 flex flex-col justify-between transition-all border relative overflow-hidden ${
                selectedTech === 'led'
                  ? 'bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
                  : 'bg-slate-950/90 border-rose-900/40 opacity-75'
              }`}>
                {/* Simulated Screen */}
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className={selectedTech === 'led' ? 'text-cyan-400 font-bold' : 'text-rose-400 font-bold'}>
                    {selectedTech === 'led' ? 'DIRECT-VIEW LED PANEL (ULTRA BRIGHT)' : 'DIM PROJECTOR CANVAS (SHADOWS)'}
                  </span>
                  <span className="text-slate-500">Floor 2 Apex</span>
                </div>

                <div className="text-center my-4 space-y-2">
                  <MonitorPlay className={`w-12 h-12 mx-auto ${selectedTech === 'led' ? 'text-cyan-400 animate-pulse' : 'text-slate-600'}`} />
                  <div className="text-base font-extrabold text-white">
                    {selectedTech === 'led' ? '4K Ultra High Contrast Presentation' : 'Washed Out Ambient Lighting'}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {selectedTech === 'led' ? '1,500+ Nits Brightness • Zero Blinds Needed' : 'Low Lumens • Blinds Must Be Closed'}
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-3">
                  <span>Routing: UniFi AV IP Transceiver</span>
                  <span>Audio: UniFi Ceiling Speakers</span>
                </div>
              </div>
            </div>

            {/* Advantages / Disadvantages */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                {selectedTech === 'led' ? 'Why Direct-View LED Panels Win on Floor 2' : 'The Hidden Costs of Legacy Projectors'}
              </h3>

              <div className="space-y-3">
                {selectedTech === 'led' ? (
                  proposal.topFloorAV.ledPanelAdvantages.map((adv, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <p className="text-xs text-slate-200 leading-relaxed">{adv}</p>
                    </div>
                  ))
                ) : (
                  proposal.executiveSummary.painPointsSolved[3] ? (
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-rose-500/20 flex items-start space-x-3">
                      <XCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Projectors require closing blinds under daytime sunlight, frequent bulb replacements, and bulky ceiling mounts.
                      </p>
                    </div>
                  ) : null
                )}
              </div>

              {/* Hardware Stack */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Proposed Floor 2 AV Architecture</div>
                <div className="space-y-1.5">
                  {proposal.topFloorAV.hardware.map((hw, idx) => (
                    <ProductTooltip key={idx} item={hw}>
                      <div className="text-xs text-slate-300 flex items-center space-x-2 font-mono hover:text-cyan-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span className="underline decoration-dotted">{hw.model}</span>
                        <span className="text-[10px] text-slate-500 font-sans">({hw.role})</span>
                      </div>
                    </ProductTooltip>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
