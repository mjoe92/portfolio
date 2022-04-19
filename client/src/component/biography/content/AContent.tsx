import { Field } from "./EField";

export default interface AbstractContent {
  title: string;
  timeStart: Date;
  timeEnd: Date | null;
  description: string;
  field: Field;
}
