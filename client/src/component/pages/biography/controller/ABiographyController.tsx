import { Component } from "react";

export default abstract class ABiographyController<
  IProps,
  IState
> extends Component<IProps, IState> {
  protected getDateInFormat = (date: Date | null): string => {
    if (date == null) {
      return "Present";
    }

    const month: string = (date.getMonth() + 1).toString();
    return (date.getMonth() < 9 ? "0" : "") + month + "." + date.getFullYear();
  };

  protected getTimeIntervalInFormat = (
    startDate: Date,
    endDate: Date | null
  ): string => {
    return (
      this.getDateInFormat(startDate) + " - " + this.getDateInFormat(endDate)
    );
  };

  protected createRef = (ref: string): string => {
    return "#" + ref;
  };

  protected toBreakLine = (args: string[]): JSX.Element => {
    if (args.length === 1) {
      return <>{args[0]}</>;
    }

    return (
      <>
        {args.map((arg) => (
          <p>{arg}</p>
        ))}
      </>
    );
  };
}
