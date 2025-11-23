import { faEnvelope, faGlobe, faLink, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { TextLinkProvider } from "../text-link-provider";
import React from "react";
import { ContactInput, ContactVo } from "./contact";
import { mapIcon } from "../icon";
import Website = TextLinkProvider.Website;
import City = TextLinkProvider.City;
import Company = TextLinkProvider.Company;
import Institut = TextLinkProvider.Institut;

//todo: join with <br/> between in fragment
const contactFactory = (input: ContactInput[]) => input.map(data => {
  const linkIds: React.JSX.Element[] = data.textLinks.map(textLink => {
    const id = textLink.id as Company | Institut | City | Website;

    return TextLinkProvider.load([id], data.highlight, data.link);
  });

  return {
    name: data.name,
    icon: mapIcon(data.icon),
    text: linkIds
  };
});

export const contactNavigation = (): ContactVo[] => [
  {
    name: "e-mail",
    icon: faEnvelope,
    text: TextLinkProvider.load([Website.GMAIL], false, "mailto:djcsurgai@gmail.com?subject=Nice Title&amp;body=Hey Joe")
  },
  {
    name: "webpage",
    icon: faGlobe,
    text: TextLinkProvider.load([Website.GITHUB])
  },
  {
    name: "linkedin",
    icon: faLink,
    text: TextLinkProvider.load([Website.LINKEDIN])
  },
  {
    name: "location",
    icon: faMapMarker,
    text: (
      <>
        { TextLinkProvider.load([City.BRAUNSCHWEIG]) },
        <br/>
        { TextLinkProvider.load([City.BUDAPEST]) },
        <br/>
        { TextLinkProvider.load([City.SZEKESFEHERVAR]) }
      </>
    )
  }
];

// export const contactContent: ContactVo[] = contactFactory(contactData);