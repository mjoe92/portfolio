import { Field } from "./field";
import { TextLinkProvider } from "./text-link-provider"; 
import React from "react";

export interface HistoryEntry {
  id: string;
  titles: string[];
  placePeriods: PlacePeriod[];
  field: Field;
  description: React.JSX.Element;
  collapse?: boolean;
  certificates?: string[];
}

export interface PlacePeriod {
  place: TextLinkProvider.Company | TextLinkProvider.Institut;
  cities: TextLinkProvider.City[];
  timeStart: Date;
  timeEnd: Date | null;
}
