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
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { t } from "i18next";

export interface Interest {
  name: string;
  icons: IconDefinition[];
}

const interestContent = (): Interest[] => [
  {
    name: t("sport"),
    icons: [faSwimmer, faRunning, faDumbbell, faSkiing]
  },
  {
    name: t("travelling"),
    icons: [faPhotoFilm, faMap]
  },
  {
    name: t("learning"),
    icons: [faGear, faKeyboard, faLanguage]
  },
  {
    name: t("developing"),
    icons: [faGears, faCode]
  }
];

export default interestContent;
