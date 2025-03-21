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

export interface Interest {
  name: string;
  icons: IconDefinition[];
}

const interestContent: Interest[] = [
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
    name: translate("developing"),
    icons: [faGears, faCode],
  },
];

export default interestContent;
