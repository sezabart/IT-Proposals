export interface ClientInfo {
  name: string;
  role: string;
  companyOrBuilding: string;
  location?: string;
  buildingSpecs: {
    dimensions: string;
    floors: number;
    additionalStructures: string;
    keyTenants: string[];
  };
}

export interface ProviderInfo {
  companyName: string;
  author: string;
  email: string;
  domain: string;
}

export interface HardwareLink {
  model: string;
  role: string;
  url?: string;
  description?: string;
  isUniFi?: boolean;
}

export interface BuildingZone {
  id: string;
  name: string;
  floor: string;
  iconName: string;
  description: string;
  tenantsOrUsage: string[];
  unifiSolutions: {
    title: string;
    description: string;
    keyTech: string[];
  }[];
}

export interface SystemPillar {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  color: string;
  summary: string;
  features: {
    title: string;
    description: string;
    highlight?: string;
  }[];
  hardwareHighlights: HardwareLink[];
}

export interface ExtraItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  badge?: string;
  summary: string;
  benefits: string[];
  hardware: HardwareLink[];
}

export interface ProposalData {
  id: string;
  title: string;
  subtitle: string;
  client: ClientInfo;
  provider: ProviderInfo;
  createdDate: string;
  version: string;
  executiveSummary: {
    pitch: string;
    corePhilosophy: string;
    painPointsSolved: {
      legacyIssue: string;
      sezaUniFiSolution: string;
    }[];
  };
  zones: BuildingZone[];
  pillars: SystemPillar[];
  extras: ExtraItem[];
  anprGate: {
    title: string;
    overview: string;
    legalNote: string;
    features: string[];
  };
  topFloorAV: {
    locationNote: string;
    ledClarification: string;
    ledPanelAdvantages: string[];
    hardware: HardwareLink[];
  };
  administration: {
    philosophy: string;
    identityEndpointSummary: string;
    highlights: string[];
  };
  designCenter: {
    title: string;
    subtitle: string;
    description: string;
    url: string;
    steps: string[];
  };
}
