export interface CreativeMaster {
  identity: IdentityMaster;
  communication: CommunicationMaster;
  visual: VisualMaster;
  narrative: NarrativeMaster;
  production: ProductionMaster;
}

export interface IdentityMaster {
  purpose: string;
  valueProposition: string;
  personality: string[];
  values: string[];
  audience: string[];
}

export interface CommunicationMaster {
  voice: string;
  tone: string;
  keyMessages: string[];
  keywords: string[];
}

export interface VisualMaster {
  style: string[];
  references: string[];
  colors: string[];
  lighting: string[];
  composition: string[];
}

export interface NarrativeMaster {
  themes: string[];
  emotions: string[];
  storytelling: string;
  concepts: string[];
}

export interface ProductionMaster {
  photography: boolean;
  cinema: boolean;
  podcast: boolean;
  editorial: boolean;
  socialMedia: boolean;
  presentation: boolean;
}