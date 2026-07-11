export interface Revelation {
  id: string;

  title: string;

  text: string;

  confidence: number;

  laboratories: string[];

  createdAt: string;

  council: {
    specialist: string;
    confidence: number;
    summary: string;
  }[];
}