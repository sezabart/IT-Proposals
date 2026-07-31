import React, { useState } from 'react';
import { ProposalData } from '../types/proposal';
import { HardDrive, PhoneCall, Zap, Lock, CheckCircle2, PlusCircle } from 'lucide-react';
import { ProductTooltip } from './ProductTooltip';

interface ExtrasSectionProps {
  proposal: ProposalData;
}

export const ExtrasSection: React.FC<ExtrasSectionProps> = ({ proposal }) => {
  const [selectedExtraId, setSelectedExtraId] = useState<string>(proposal.extras[0].id);

  const activeExtra = proposal.extras.find(e => e.id === selectedExtraId) || proposal.extras[0];

  const getExtraIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-cyan-400" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5 text-purple-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'ShieldLock': return <Lock className="w-5 h-5 text-emerald-400" />;
      default: return <PlusCircle className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="extras" className="py-20 bg-slate-950/90 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Facility Expansion Possibilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Optional Extras & <span className="gradient-text-blue">Future Add-Ons</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Because UniFi is a modular ecosystem, these optional expansion modules can be integrated seamlessly anytime without replacing core hardware.
          </p>
        </div>

        {/* Extras Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {proposal.extras.map((extra) => {
            const isActive = extra.id === selectedExtraId;
            return (
              <button
                key={extra.id}
                onClick={() => setSelectedExtraId(extra.id)}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isActive
                    ? 'glass-panel border-cyan-500/60 bg-cyan-950/30 shadow-xl shadow-cyan-500/10 text-white'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${isActive ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                    {getExtraIcon(extra.icon)}
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                    {extra.category}
                  </span>
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>{extra.title}</h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Extra Detail Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-slate-800 bg-slate-900/90 shadow-2xl">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                {getExtraIcon(activeExtra.icon)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{activeExtra.category}</span>
                <h3 className="text-2xl font-bold text-white">{activeExtra.title}</h3>
              </div>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            {activeExtra.summary}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Value Benefits */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Key Operational Benefits</h4>
              <div className="space-y-3">
                {activeExtra.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start space-x-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware & EU Product Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Recommended Hardware & EU Store Links</h4>
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                {activeExtra.hardware.map((hw, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
                    <div className="space-y-1">
                      <ProductTooltip item={hw}>
                        <div className="text-xs font-bold text-cyan-300 font-mono hover:underline flex items-center space-x-1">
                          <span>{hw.model}</span>
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
