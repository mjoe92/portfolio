import { Component } from "react";
import { Constants } from "../../../../utils/Constants";

export default abstract class ABiographyController<
  IProps,
  IState
> extends Component<IProps, IState> {
  protected getDateInFormat = (date: Date | null): string => {
    if (date == null) {
      return "Present";
    }

    const month: number = date.getMonth() + 1;
    return (
      (month <= 9 ? "0" : Constants.EMPTY) +
      month +
      Constants.DOT +
      date.getFullYear()
    );
  };

  protected getTimeIntervalInFormat = (
    startDate: Date,
    endDate: Date | null
  ): string => {
    return (
      this.getDateInFormat(startDate) +
      Constants.SPACE_DASH_SPACE +
      this.getDateInFormat(endDate)
    );
  };

  protected createRef = (ref: string): string => {
    return Constants.HASHTAG + ref;
  };

  // TODO: change to generic paramter implements key interface
  protected toBreakLine = (args: string[]): JSX.Element => {
    if (args.length === 1) {
      return <>{args[0]}</>;
    }

    return (
      <>
        {args.map((arg) => (
          <p key={arg}>{arg}</p>
        ))}
      </>
    );
  };

  protected getYearMonthIntervalInText = (start: Date, end?: Date): string => {
    if (end === undefined || end === null) {
      end = new Date();
    }

    const yearInterval = end?.getFullYear() - start.getFullYear();
    let yearIntervalText: string = Constants.EMPTY;
    if (yearInterval >= 1) {
      yearIntervalText =
        yearInterval + " YEAR" + (yearInterval === 1 ? Constants.EMPTY : "S");
    }

    const monthInterval = end?.getMonth() - start.getMonth();
    let monthIntervalText: string = Constants.EMPTY;
    if (monthInterval >= 1) {
      monthIntervalText =
        monthInterval +
        " MONTH" +
        (monthInterval === 1 ? Constants.EMPTY : "S");
    }

    return yearIntervalText + Constants.SPACE + monthIntervalText;
  };

  protected getActualTime(time?: Date): Date {
    return time === undefined ? new Date() : time;
  }
}
