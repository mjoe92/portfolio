import {
  faEnvelope,
  faGlobe,
  faLink,
  faMapMarker,
  faPhone,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { TextLinkProvider } from "./text-link-provider";

export default interface IContact {
  id: string;
  icon: IconDefinition;
  text: JSX.Element;
  disabled?: boolean;
}

export const contactNavigation: IContact[] = [
  {
    id: "telephone",
    icon: faPhone,
    text: <span>+36 30 499 1514</span>,
  },
  {
    id: "e-mail",
    icon: faEnvelope,
    text: (
      <a href="mailto:djcsurgai@gmail.com?subject=Nice Title&amp;body=Hey Joe,">
        <span className="active">djcsurgai@gmail.com</span>
      </a>
    ),
  },
  {
    id: "webpage",
    icon: faGlobe,
    text: TextLinkProvider.load(TextLinkProvider.Website.GITHUB),
  },
  {
    id: "linkedin",
    icon: faLink,
    text: TextLinkProvider.load(TextLinkProvider.Website.LINKEDIN),
  },
  {
    id: "location",
    icon: faMapMarker,
    text: (
      <>
        {TextLinkProvider.load(TextLinkProvider.City.BRAUNSCHWEIG)},
        <br />
        {TextLinkProvider.load(TextLinkProvider.City.BUDAPEST)},
        <br />
        {TextLinkProvider.load(TextLinkProvider.City.SZEKESFEHERVAR)},
      </>
    ),
  },
];
