import { CreativeDirection } from "@/src/domain/creative-direction/CreativeDirection";

export interface SpecialistContribution {
  specialist: string;
  result: string;
}

interface RunSpecialistsParams {
  creativeDirection: CreativeDirection;
}

export function runSpecialists({
  creativeDirection,
}: RunSpecialistsParams): SpecialistContribution[] {
  void creativeDirection;

  return [
    {
      specialist: "Brand Strategist",
      result: "",
    },
    {
      specialist: "Art Director",
      result: "",
    },
    {
      specialist: "Copywriter",
      result: "",
    },
  ];
}