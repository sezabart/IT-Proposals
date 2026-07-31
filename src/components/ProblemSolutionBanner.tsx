import React from 'react';
import { ProposalData } from '../types/proposal';
import { AlertTriangle, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

interface ProblemSolutionBannerProps {
  proposal: ProposalData;
}

export const ProblemSolutionBanner: React.FC<ProblemSolutionBannerProps> = ({ proposal }) => {
  return (
    <section className="py-16 bg-slate-950/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Infrastructure Considerations</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Scaling Savska Loka: Single-Tenant vs <span className="gradient-text-emerald">Unified Ecosystem</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Local Slovene installers offer functional app-based access control for basic setups. However, as Savska Loka expands into multi-tenant coworking and corporate suites, scalability and unified management become key.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Considerations Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-slate-800 bg-slate-900/40 space-y-6">
            <div className="flex items-center space-x-3 text-slate-300 border-b border-slate-800 pb-4">
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
              <h3 className="text-lg font-bold text-white">Traditional & Single-Tenant Solutions</h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              {proposal.executiveSummary.painPointsSolved.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <p className="text-slate-300 leading-relaxed font-normal">
                    {item.legacyIssue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SEZA UniFi Solution Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-emerald-500/30 bg-emerald-950/10 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider rounded-bl-xl font-mono">
              SEZA Standard
            </div>

            <div className="flex items-center space-x-3 text-emerald-400 border-b border-emerald-500/20 pb-4">
              <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">SEZA Unified UniFi Ecosystem</h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              {proposal.executiveSummary.painPointsSolved.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-emerald-300 font-semibold text-xs mb-0.5 font-mono">SEZA UNIFIED ADVANTAGE</p>
                    <p className="text-slate-200 leading-relaxed">
                      {item.sezaUniFiSolution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
