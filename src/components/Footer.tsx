import React from 'react';
import { ProposalData } from '../types/proposal';
import { Shield, Mail, Globe } from 'lucide-react';

interface FooterProps {
  proposal: ProposalData;
}

export const Footer: React.FC<FooterProps> = ({ proposal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-mono font-extrabold text-xl text-white">SEZA</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Specialized IT Infrastructure Engineering & Ubiquiti UniFi Deployment. Delivering unified networks, ANPR gate automation, AI surveillance, digital signage, and high-impact conference AV across Slovenia and Europe.
            </p>

            <div className="flex items-center space-x-4 text-xs font-mono text-cyan-400">
              <a href={`mailto:${proposal.provider.email}`} className="flex items-center space-x-1 hover:underline">
                <Mail className="w-3.5 h-3.5" />
                <span>{proposal.provider.email}</span>
              </a>
              <span>•</span>
              <a href={`https://${proposal.provider.domain}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
                <Globe className="w-3.5 h-3.5" />
                <span>{proposal.provider.domain}</span>
              </a>
            </div>
          </div>

          {/* Proposal Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">Facility Details</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li>Client: <span className="text-slate-200">{proposal.client.name}</span></li>
              <li>Facility: <span className="text-slate-200">{proposal.client.companyOrBuilding}</span></li>
              <li>Footprint: <span className="text-slate-200">{proposal.client.buildingSpecs.dimensions}</span></li>
              <li>Floors: <span className="text-slate-200">Floors 0, 1 & 2 (Top Floor)</span></li>
              <li>Version: <span className="text-slate-200">{proposal.version}</span></li>
            </ul>
          </div>

          {/* Direct Email Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Contact SEZA Engineering</h4>
            <p className="text-xs text-slate-400">
              Send floorplans (PDF / DWG) for UniFi Design Center simulation directly to:
            </p>
            <a
              href={`mailto:${proposal.provider.email}`}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-200" />
              <span>{proposal.provider.email}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} SEZA ({proposal.provider.email}). All Rights Reserved.
          </div>
          <div>
            Hosted on GitHub Pages • Custom Domain: <span className="text-cyan-400">{proposal.provider.domain}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
