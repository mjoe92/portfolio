import { Field } from "./EField";

export default interface AbstractIHistory {
  title: string;
  timeStart: Date;
  timeEnd: Date | null;
  description: string;
  field: Field;
}
