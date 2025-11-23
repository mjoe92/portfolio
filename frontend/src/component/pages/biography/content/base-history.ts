import { Field } from "./field";
import { TextLinkProvider } from "./text-link-provider"; 
import React from "react"; 

export interface HistoryEntry {
  id: string;
  titles: string[];
  placePeriods: NavigationPeriod[];
  field: Field;
  description: React.JSX.Element;
  collapse?: boolean;
  certificates?: string[];
}

export interface PdfPeriod extends NavigationPeriod{
  phone: string;
  gmail: string;
  github: TextLinkProvider.Website
}

export interface NavigationPeriod extends CityPeriod{
  place: TextLinkProvider.Company | TextLinkProvider.Institut;
}

export interface CityPeriodInput {
  cities: string[];
  timeStart: string;
  timeEnd?: Date;
}

export interface CityPeriod {
  cities: TextLinkProvider.City[];
  timeStart: Date;
  timeEnd?: Date;
}
