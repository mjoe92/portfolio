import {
  faEnvelope,
  faGlobe,
  faLink,
  faMapMarker,
  faPhone,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export default interface IContact {
  id: string;
  icon: IconDefinition;
  text: string;
}

export const contactNavigation: IContact[] = [
  {
    id: "telephone",
    icon: faPhone,
    text: "+36 30 499 1514",
  },
  {
    id: "e-mail",
    icon: faEnvelope,
    text: "djcsurgai@gmail.com",
  },
  {
    id: "webpage",
    icon: faGlobe,
    text: "www.mjoeworld.com",
  },
  {
    id: "linkedin",
    icon: faLink,
    text: "www.linkedin.com/in/jozsef-csurgai/",
  },
  {
    id: "location",
    icon: faMapMarker,
    text: "Hungary, Székesfehérvár",
  },
];
