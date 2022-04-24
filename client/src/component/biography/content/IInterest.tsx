import {
  faDumbbell,
  faGear,
  faKeyboard,
  faLanguage,
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
    name: "Photography",
    icons: [faPhotoFilm],
  },
  {
    name: "Learning",
    icons: [faGear, faKeyboard, faLanguage],
  },
];
