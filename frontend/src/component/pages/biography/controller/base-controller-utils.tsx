import { Constants } from "../../../../utils/constants";
import { t } from "i18next";

export const getDateInFormat = (date: Date | null): string => {
  if (!date) {
    return t("present");
  }

  const month: number = date.getMonth() + 1;
  return (month <= 9 ? "0" : Constants.EMPTY) + month + Constants.DOT + date.getFullYear();
};

export const getTimeIntervalInFormat = (startDate: Date, endDate: Date | null): string => {
  return getDateInFormat(startDate) + Constants.SPACE_DASH_SPACE + getDateInFormat(endDate);
};

export const createLinkRef = (ref: string, prefix: string | null, ...suffixes: string[]): string => {
  const baseRef = prefix ? prefix + ref : ref;
  if (suffixes) {
    return baseRef + Constants.DASH + suffixes.join(Constants.DASH);
  }

  return baseRef;
};

export const toBreakLine = (args: string[]) => {
  if (args.length === 1) {
    return <>{ args[0] }</>;
  }

  return (
    <>
      { args.map((arg, index) => (
        <p key={ arg }>
          { arg }
          { !index && Constants.COMMA }
        </p>
      )) }
    </>
  );
};
