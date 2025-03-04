import { Constants } from "./constants";

export class DateUtils {
  static readonly NOW = new Date();

  static readonly getIntervalInText = (diffInMilli: number): string => {
    const dateInterval = new Date(diffInMilli);

    const yearInterval = dateInterval.getFullYear() - 1970;
    let yearIntervalText: string = Constants.EMPTY;
    if (yearInterval >= 1) {
      yearIntervalText = yearInterval + Constants.SPACE + "YEAR" + (yearInterval === 1 ? Constants.EMPTY : "S");
    }

    const monthInterval = dateInterval.getMonth();
    let monthIntervalText: string = Constants.EMPTY;
    if (monthInterval >= 1) {
      monthIntervalText = monthInterval + Constants.SPACE + "MONTH" + (monthInterval === 1 ? Constants.EMPTY : "S");
    }

    return yearIntervalText + Constants.SPACE + monthIntervalText;
  };
}