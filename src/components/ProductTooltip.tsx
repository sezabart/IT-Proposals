import React, { useState } from 'react';
import { HardwareLink } from '../types/proposal';
import { ExternalLink } from 'lucide-react';

interface ProductTooltipProps {
  item: HardwareLink;
  children?: React.ReactNode;
}

export const ProductTooltip: React.FC<ProductTooltipProps> = ({ item, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="flex items-center space-x-1.5 cursor-pointer group">
        {children || (
          <span className="font-mono text-cyan-300 font-bold text-xs group-hover:text-cyan-200 transition-colors border-b border-dashed border-cyan-500/50 pb-0.5">
            {item.model}
          </span>
        )}
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center"
            title="Open official UniFi product page"
          >
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        )}
      </div>

      {/* Floating Glass Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3.5 rounded-xl glass-panel bg-slate-900/95 border-cyan-500/30 shadow-2xl z-50 animate-in fade-in zoom-in-95 pointer-events-none">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <span className="text-xs font-bold text-white font-mono">{item.model}</span>
            {item.isUniFi ? (
              <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[9px] font-mono shrink-0">
                Official UniFi
              </span>
            ) : (
              <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[9px] font-mono shrink-0">
                SEZA Spec
              </span>
            )}
          </div>
          
          <p className="text-[11px] text-slate-300 leading-snug mb-2">
            {item.description || item.role}
          </p>

          <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between border-t border-slate-800 pt-1.5">
            <span>{item.role}</span>
            {item.url && <span className="text-cyan-400 font-bold">ui.com ↗</span>}
          </div>
        </div>
      )}
    </div>
  );
};
