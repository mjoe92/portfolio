import { Field } from "./EField";

export default interface AbstractIHistory {
  id: string;
  title: string | string[];
  timeStart: Date;
  timeEnd: Date | null;
  description: JSX.Element;
  field: Field;
}
