import { Field } from "./EField";
import { JSX } from "react";

export interface AbstractIBaseHistory {
  id: string;
  title: string[];
  timeStart: Date;
  timeEnd: Date | null;
  field: Field;
}

export interface AbstractIDetailedHistory extends AbstractIBaseHistory {
  description: JSX.Element;
}
