export interface Revelation {

  id: string;

  title: string;

  text: string;

  summary: string;

  confidence: number;

  clarity: {

    identity: number;

    narrative: number;

    visual: number;

    strategy: number;

  };

  patterns: string[];

  recommendations: string[];

  references: string[];

  laboratories: string[];

  createdAt: string;

  council: {

    specialist: string;

    confidence: number;

    summary: string;

  }[];

}