import { ProposalData } from '../../types/proposal';
import { andrejProposal } from './andrej-proposal';

export const allProposals: ProposalData[] = [
  andrejProposal
];

export const defaultProposal = andrejProposal;

export function getProposalById(id: string): ProposalData {
  return allProposals.find(p => p.id === id) || defaultProposal;
}
