import { SpecialistId } from "../shared/ids";

export interface Specialist {
  id: SpecialistId;
  name: string;
  field: string;
  responsibility: string;
}
