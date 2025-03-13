import {
  faEnvelope,
  faGlobe,
  faLink,
  faMapMarker,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { TextLinkProvider } from "./text-link-provider";
import React from "react";

export interface IContact {
  id: string;
  icon: IconDefinition;
  text: React.JSX.Element;
  disabled?: boolean;
}

export const contactNavigation: IContact[] = [
  {
    id: "e-mail",
    icon: faEnvelope,
    text: TextLinkProvider.load([TextLinkProvider.Website.GMAIL], false, "mailto:djcsurgai@gmail.com?subject=Nice Title&amp;body=Hey Joe")
  },
  {
    id: "webpage",
    icon: faGlobe,
    text: TextLinkProvider.load([TextLinkProvider.Website.GITHUB])
  },
  {
    id: "linkedin",
    icon: faLink,
    text: TextLinkProvider.load([TextLinkProvider.Website.LINKEDIN])
  },
  {
    id: "location",
    icon: faMapMarker,
    text: (
      <>
        { TextLinkProvider.load([TextLinkProvider.City.BRAUNSCHWEIG]) },
        <br/>
        { TextLinkProvider.load([TextLinkProvider.City.BUDAPEST]) },
        <br/>
        { TextLinkProvider.load([TextLinkProvider.City.SZEKESFEHERVAR]) },
      </>
    )
  }
];
