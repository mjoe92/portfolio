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
  text: JSX.Element;
}

export const contactNavigation: IContact[] = [
  {
    id: "telephone",
    icon: faPhone,
    text: <p>+36 30 499 1514</p>,
  },
  {
    id: "e-mail",
    icon: faEnvelope,
    text: (
      <a href="mailto:djcsurgai@gmail.com?subject=Nice Title&amp;body=Hey Joe,">
        <p>djcsurgai@gmail.com</p>
      </a>
    ),
  },
  {
    id: "webpage",
    icon: faGlobe,
    text: <p>www.mjoeworld.com</p>,
  },
  {
    id: "linkedin",
    icon: faLink,
    text: (
      <a href="https://www.linkedin.com/in/jozsef-csurgai/" target="_blank">
        <p>www.linkedin.com/in/jozsef-csurgai/</p>
      </a>
    ),
  },
  {
    id: "location",
    icon: faMapMarker,
    text: <p>Hungary, Székesfehérvár</p>,
  },
];
