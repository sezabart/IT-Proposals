import React from 'react';
import { ProposalData } from '../types/proposal';
import { ShieldCheck, DollarSign, FileCheck, Sparkles, UserCheck, SmartphoneNfc } from 'lucide-react';
import { ProductTooltip } from './ProductTooltip';

interface AdminTransferabilityProps {
  proposal: ProposalData;
}

export const AdminTransferability: React.FC<AdminTransferabilityProps> = ({ proposal }) => {
  return (
    <section id="administration" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Never Stuck — Standardized Administration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Effortless IT Administration & <span className="gradient-text-emerald">UniFi Identity</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            {proposal.administration.philosophy}
          </p>
        </div>

        {/* 4 Core Pillars of Administration */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-3 hover:border-emerald-500/30 transition-all">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Never Locked In</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clean, standard UniFi protocols mean any qualified IT administrator or technician can manage, support, or expand the system effortlessly.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-3 hover:border-cyan-500/30 transition-all">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
              <SmartphoneNfc className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">UniFi Identity Endpoint</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              The single one-stop app for employees and tenants to automatically receive corporate Wi-Fi keys, door access credentials, and VPN permissions.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-3 hover:border-indigo-500/30 transition-all">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Zero Subscription Fees</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ubiquiti UniFi charges $0 in annual software licenses across Network, Protect, Access, and Connect—saving thousands every year.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-3 hover:border-purple-500/30 transition-all">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">As-Built Cable Labels</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              SEZA delivers color-coded rack wiring schematics, cable drop labels, and operational walkthrough guides for Savska Loka.
            </p>
          </div>

        </div>

        {/* Identity Endpoint & Admin Highlights Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-3 text-cyan-400 font-mono text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>UNIFI IDENTITY ENDPOINT — EMPLOYEE ONBOARDING</span>
            </div>

            <ProductTooltip item={{
              model: 'UniFi Identity Endpoint',
              role: 'One-Stop Employee Access App',
              url: 'https://ui.com/identity',
              isUniFi: true,
              description: 'Unified mobile & desktop identity provisioning app'
            }}>
              <span className="text-xs font-mono text-cyan-300 hover:underline">
                Explore UniFi Identity Endpoint ↗
              </span>
            </ProductTooltip>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {proposal.administration.identityEndpointSummary}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {proposal.administration.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs text-slate-200 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
