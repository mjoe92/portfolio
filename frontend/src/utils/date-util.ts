import { Constants } from "./constants"; 
import { t } from "i18next";

  export const NOW = new Date();

  export const getIntervalInText = (diffInMilli: number): string => {
    const dateInterval = new Date(diffInMilli);

    const yearInterval = dateInterval.getFullYear() - 1970;
    let yearIntervalText: string;
    if (yearInterval < 1) {
      yearIntervalText = Constants.EMPTY;
    } else {
      const yearTextKey = yearInterval === 1 ? "year" : "years-skill";
      yearIntervalText = yearInterval + Constants.SPACE + t(yearTextKey);
    }

    const monthInterval = dateInterval.getMonth();
    let monthIntervalText: string;
    if (monthInterval < 1) {
      monthIntervalText = Constants.EMPTY;
    } else {
      const monthTextKey = monthInterval === 1 ? "month" : "months-skill";
      monthIntervalText = monthInterval + Constants.SPACE + t(monthTextKey);
    }

    return yearIntervalText + Constants.SPACE + monthIntervalText;
  };
