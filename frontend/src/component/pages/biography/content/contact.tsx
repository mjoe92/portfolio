import {
  faEnvelope,
  faGlobe,
  faLink,
  faMapMarker,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { TextLinkProvider } from "./text-link-provider";
import React from "react";

import Website = TextLinkProvider.Website;
import City = TextLinkProvider.City;

export interface Contact {
  id: string;
  icon: IconDefinition;
  text: React.JSX.Element;
  disabled?: boolean;
}

const contactNavigation: Contact[] = [
  {
    id: "e-mail",
    icon: faEnvelope,
    text: TextLinkProvider.load([Website.GMAIL], false, "mailto:djcsurgai@gmail.com?subject=Nice Title&amp;body=Hey Joe")
  },
  {
    id: "webpage",
    icon: faGlobe,
    text: TextLinkProvider.load([Website.GITHUB])
  },
  {
    id: "linkedin",
    icon: faLink,
    text: TextLinkProvider.load([Website.LINKEDIN])
  },
  {
    id: "location",
    icon: faMapMarker,
    text: (
      <>
        { TextLinkProvider.load([City.BRAUNSCHWEIG]) },
        <br/>
        { TextLinkProvider.load([City.BUDAPEST]) },
        <br/>
        { TextLinkProvider.load([City.SZEKESFEHERVAR]) },
      </>
    )
  }
];

export default contactNavigation;
