import {
  faBars,
  faCode,
  faDumbbell,
  faGear,
  faKeyboard,
  faLanguage,
  faMap,
  faPhotoFilm,
  faRunning,
  faSkiing,
  faSwimmer,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export default interface IInterest {
  name: string;
  icons: IconDefinition[];
}

export const interestContent: IInterest[] = [
  {
    name: "Sport",
    icons: [faSwimmer, faRunning, faDumbbell, faSkiing],
  },
  {
    name: "Travelling",
    icons: [faPhotoFilm, faMap],
  },
  {
    name: "Learning",
    icons: [faGear, faKeyboard, faLanguage],
  },
  {
    name: "Work",
    icons: [faBars],
  },
  {
    name: "Coding",
    icons: [faCode],
  },
];
