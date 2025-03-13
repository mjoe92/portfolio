import { Field } from "./field";
import { TextLinkProvider } from "./text-link-provider";

export interface HistoryEntry {
  id: string;
  titles: string[];
  placePeriods: PlacePeriod[];
  field: Field;
  description: JSX.Element;
  collapse?: boolean;
}

export interface PlacePeriod {
  place: TextLinkProvider.Company | TextLinkProvider.Institut;
  timeStart: Date;
  timeEnd: Date | null;
}
