import React from 'react';
import { ProposalData } from '../types/proposal';
import { Car, AlertTriangle, FileText, CheckCircle2, Lock, Camera } from 'lucide-react';
import { ProductTooltip } from './ProductTooltip';

interface ANPRGateSectionProps {
  proposal: ProposalData;
}

export const ANPRGateSection: React.FC<ANPRGateSectionProps> = ({ proposal }) => {
  return (
    <section id="anpr-gate" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Business Park Entrance Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ANPR Front Gate & <span className="gradient-text-emerald">Legal Compliance</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Automatic Number Plate Recognition (ANPR) replaces physical guard bottlenecks while strictly adhering to EU & Slovene GDPR privacy standards.
          </p>
        </div>

        {/* ANPR Card Grid */}
        <div className="max-w-5xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border-slate-800 bg-slate-900/90 shadow-2xl space-y-8">
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Left: ANPR Solution Overview */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  AUTOMATED ACCESS INTEGRATION
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {proposal.anprGate.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {proposal.anprGate.overview}
              </p>

              <div className="space-y-2.5 pt-2">
                {proposal.anprGate.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-slate-200 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Legal & GDPR Compliance Guidance */}
            <div className="p-6 rounded-2xl bg-amber-950/10 border border-amber-500/30 space-y-4">
              <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>LEGAL & PRIVACY COMPLIANCE FRAMEWORK</span>
              </div>

              <h4 className="text-sm font-bold text-white">
                Navigating EU & Slovene ANPR Regulations
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                {proposal.anprGate.legalNote}
              </p>

              <div className="space-y-2 pt-2 border-t border-amber-500/20">
                <div className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-semibold">SEZA Compliance Deliverables:</div>
                <div className="text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>On-premise NVR storage with zero cloud plate export</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Automated 30-day log purge cycle for unregistered plates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>UniFi Protect privacy masking for public roadway boundaries</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <ProductTooltip item={{
                  model: 'UniFi AI DSLR / AI Bullet LPR',
                  role: 'High-Speed License Plate Reader',
                  url: 'https://ui.com/camera-security',
                  isUniFi: true,
                  description: 'Dedicated ANPR camera with IR optical zoom & AI OCR'
                }}>
                  <span className="text-xs font-mono text-cyan-300 hover:underline">
                    View UniFi AI LPR Camera Hardware Specs ↗
                  </span>
                </ProductTooltip>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
