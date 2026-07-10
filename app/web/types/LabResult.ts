export interface LabResult {

  laboratory: string;

  confidence: number;

  patterns: string[];

  contradictions: string[];

  recommendations: string[];

}