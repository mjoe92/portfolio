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
        <p className="active">djcsurgai@gmail.com</p>
      </a>
    ),
  },
  {
    id: "webpage",
    icon: faGlobe,
    text: (
      <a href="https://www.mjoeworld.com" target="_blank">
        <p className="active">mjoeworld.com</p>
      </a>
    ),
  },
  {
    id: "linkedin",
    icon: faLink,
    text: (
      <a href="https://www.linkedin.com/in/jozsef-csurgai/" target="_blank">
        <p className="active">linkedin.com/csurgai</p>
      </a>
    ),
  },
  {
    id: "location",
    icon: faMapMarker,
    text: (
      <>
        <a
          href="https://www.google.com/maps/place/Braunschweig/"
          target="_blank"
        >
          <p className="active">Braunschweig (Germany)</p>
        </a>
        <br />
        <a
          href="https://www.google.com/maps/place/Székesfehérvár/"
          target="_blank"
          className="offset"
        >
          <p className="active">Székesfehérvár (Hungary)</p>
        </a>
        <br />
        <a
          href="https://www.google.com/maps/place/Budapest/"
          target="_blank"
          className="offset"
        >
          <p className="active">Budapest (Hungary)</p>
        </a>
      </>
    ),
  },
];
