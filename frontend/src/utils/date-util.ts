import { Constants } from "./constants"; 
import translate from "../i18n/locale-service";

  export const NOW = new Date();

  export const getIntervalInText = (diffInMilli: number): string => {
    const dateInterval = new Date(diffInMilli);

    const yearInterval = dateInterval.getFullYear() - 1970;
    let yearIntervalText: string = Constants.EMPTY;
    if (yearInterval >= 1) {
      const yearTextKey = yearInterval === 1 ? "year" : "years-skill";
      yearIntervalText = yearInterval + Constants.SPACE + translate(yearTextKey);
    }

    const monthInterval = dateInterval.getMonth();
    let monthIntervalText: string = Constants.EMPTY;
    if (monthInterval >= 1) {
      const monthTextKey = monthInterval === 1 ? "month" : "months-skill";
      monthIntervalText = monthInterval + Constants.SPACE + translate(monthTextKey);
    }

    return yearIntervalText + Constants.SPACE + monthIntervalText;
  };
