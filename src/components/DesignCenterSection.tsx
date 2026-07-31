import React from 'react';
import { ProposalData } from '../types/proposal';
import { Compass, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';

interface DesignCenterSectionProps {
  proposal: ProposalData;
}

export const DesignCenterSection: React.FC<DesignCenterSectionProps> = ({ proposal }) => {
  return (
    <section id="design-center" className="py-20 bg-slate-950/90 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 shadow-2xl relative overflow-hidden">
          
          {/* Background Ambient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>3D FLOORPLAN MAPPING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                UniFi Design Center <br />
                <span className="gradient-text-blue">Floorplan Simulation</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                When Savska Loka's architectural drawings (PDF or DWG) are available, email them to <strong className="text-cyan-400">{proposal.provider.email}</strong>. SEZA will upload them into the official <strong className="text-white">UniFi Design Center (design.ui.com)</strong> to generate exact 3D signal heatmaps and equipment placement reports.
              </p>

              <div className="space-y-3 pt-2">
                {proposal.designCenter.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={`mailto:${proposal.provider.email}?subject=Savska Loka Floorplans for UniFi Design Center`}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Floorplans to {proposal.provider.email}</span>
                </a>

                <a
                  href={proposal.designCenter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 font-semibold text-xs transition-all border-slate-700"
                >
                  <span>Visit design.ui.com</span>
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Right Card / Visual Preview */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
                <span className="text-cyan-400 font-bold">SAVSKA LOKA FLOORPLAN MODEL</span>
                <span className="text-slate-500">design.ui.com</span>
              </div>

              <div className="aspect-video rounded-xl bg-slate-900 border border-slate-800/80 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                  <span>Dimensions: ~60m × 15m</span>
                  <span>Floors: 0, 1, 2</span>
                </div>

                <div className="text-center my-4 space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/10">
                    <Compass className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="text-sm font-bold text-white">3D Signal & Camera Coverage Heatmap</div>
                  <div className="text-xs text-slate-400">Accurate PoE Budgeting • Camera FOV Simulation</div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono text-center">
                  SEZA Engineering • Email drawings to {proposal.provider.email}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed italic">
                Send your blueprint files to {proposal.provider.email} whenever ready, and SEZA will deliver your 3D layout report.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
