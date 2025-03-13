import {
  faCode,
  faDumbbell,
  faGear,
  faGears,
  faKeyboard,
  faLanguage,
  faMap,
  faPhotoFilm,
  faRunning,
  faSkiing,
  faSwimmer,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons"; 
import translate from "../../../../i18n/locale-service";

export default interface IInterest {
  name: string;
  icons: IconDefinition[];
}

export const interestContent: IInterest[] = [
  {
    name: translate("sport"),
    icons: [faSwimmer, faRunning, faDumbbell, faSkiing],
  },
  {
    name: translate("travelling"),
    icons: [faPhotoFilm, faMap],
  },
  {
    name: translate("learning"),
    icons: [faGear, faKeyboard, faLanguage],
  },
  {
    name: translate("work"),
    icons: [faGears, faCode],
  },
];
