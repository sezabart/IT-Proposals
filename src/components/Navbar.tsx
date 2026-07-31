import React, { useState } from 'react';
import { ProposalData } from '../types/proposal';
import { Shield, ChevronDown, Mail, FileText, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  proposal: ProposalData;
  allProposals: ProposalData[];
  onSelectProposal: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  proposal,
  allProposals,
  onSelectProposal,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand & Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight text-white font-mono">SEZA</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">Infrastructure</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">proposals.seza.si</p>
            </div>
          </div>

          {/* Multi-Proposal Switcher */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-medium truncate max-w-[180px]">For: {proposal.client.companyOrBuilding}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 glass-panel rounded-xl border border-slate-800 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-slate-500 font-mono">
                  Active Proposals ({allProposals.length})
                </div>
                {allProposals.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectProposal(p.id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs flex items-center justify-between transition-all ${
                      p.id === proposal.id ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold' : 'text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{p.client.name} - {p.client.companyOrBuilding}</div>
                      <div className="text-[10px] text-slate-400">{p.version}</div>
                    </div>
                    {p.id === proposal.id && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
          <a href="#building-zones" className="hover:text-cyan-400 transition-colors">Savska Loka Layout</a>
          <a href="#pillars" className="hover:text-cyan-400 transition-colors">UniFi Ecosystem</a>
          <a href="#anpr-gate" className="hover:text-cyan-400 transition-colors">ANPR Gate</a>
          <a href="#top-floor-av" className="hover:text-cyan-400 transition-colors">Floor 2 AV</a>
          <a href="#extras" className="hover:text-cyan-400 transition-colors">Extras</a>
          <a href="#administration" className="hover:text-cyan-400 transition-colors">Administration</a>
        </nav>

        {/* Contact Email Button */}
        <div className="flex items-center space-x-3">
          <a
            href={`mailto:${proposal.provider.email}`}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95 transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-100" />
            <span className="font-mono">{proposal.provider.email}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
