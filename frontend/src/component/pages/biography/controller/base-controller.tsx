import { Component } from "react";
import { Constants } from "../../../../utils/constants";
import { DateUtils } from "../../../../utils/date-util";

export default abstract class BaseController<IProps, IState> extends Component<IProps, IState> {
  protected getDateInFormat = (date: Date | null): string => {
    if (!date) {
      return "Present";
    }

    const month: number = date.getMonth() + 1;
    return (month <= 9 ? "0" : Constants.EMPTY) + month + Constants.DOT + date.getFullYear();
  };

  protected getTimeIntervalInFormat = (startDate: Date, endDate: Date | null): string => {
    return this.getDateInFormat(startDate) + Constants.SPACE_DASH_SPACE + this.getDateInFormat(endDate);
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
}
