import React, { useState } from 'react';
import { ProposalData } from '../types/proposal';
import { X, Sparkles, CheckCircle2, Calendar, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  proposal: ProposalData;
}

export const ActionModal: React.FC<ActionModalProps> = ({ isOpen, onClose, proposal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [actionType, setActionType] = useState<'accept' | 'walkthrough'>('walkthrough');
  const [name, setName] = useState(proposal.client.name);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Fire confetti celebration!
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // Ignore if confetti fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border-slate-700 bg-slate-900 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SEZA Proposal Action</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Next Steps for {proposal.client.name}
              </h3>
              <p className="text-xs text-slate-400">
                Submit this response to confirm interest, request a physical site measurement walkthrough, or approve the infrastructure plan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Option Selector */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setActionType('walkthrough')}
                  className={`p-3 rounded-xl text-left border text-xs font-semibold flex items-center space-x-2 transition-all ${
                    actionType === 'walkthrough'
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Request Site Walkthrough & Measurement</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActionType('accept')}
                  className={`p-3 rounded-xl text-left border text-xs font-semibold flex items-center space-x-2 transition-all ${
                    actionType === 'accept'
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Approve Proposal Concept</span>
                </button>
              </div>

              {/* Input Fields */}
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="andrej@company.si"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+386 ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Notes / Specific Building Requirements (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Mention any specific electrical points, floorplan blueprints, or tentative schedule..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Response to SEZA ({proposal.provider.email})</span>
              </button>

            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              Thank You, {name}!
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Your response has been registered. Bart from SEZA ({proposal.provider.email}) will contact you shortly to schedule the on-site walkthrough and discuss floorplan details for your building.
            </p>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
