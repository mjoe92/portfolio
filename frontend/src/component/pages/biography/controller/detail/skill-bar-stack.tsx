import {Constants} from "../../../../../utils/constants";
import ISkill from "../../content/skill";
import BaseController from "../base-controller";
import { DateUtils } from "../../../../../utils/date-util";

interface IState {}

interface ISkillMinMaxInterval {
  skill: ISkill;
  minDateTime: number;
  maxDateTime: number;
}

export default class SkillBarStack extends BaseController<ISkillMinMaxInterval, IState> {
  private readonly barRatio = 85;

  private readonly minMaxDiff: number;

  constructor(props: ISkillMinMaxInterval) {
    super(props);

    this.minMaxDiff = props.maxDateTime - props.minDateTime;
  }

  render() {
    const startWithDiffSections: [number, number, number][] = this.createBarStartDiffSections();

    const intervals = this.props.skill.intervals;
    const hasAnimation = intervals[intervals.length - 1].endTime ? "none" : undefined;
    const animationGap = 100 - this.barRatio;

    return (
      <div className="skill-bar">
        <div
          className="end-gap"
          style={{
            width: animationGap + Constants.PERCENT,
            animation: hasAnimation,
          }}
        />
        {this.createBarsLimitsAndTexts(startWithDiffSections)}
      </div>
    );
  }

  private createBarStartDiffSections(): [number, number, number][] {
    const activeIntervals = this.props.skill.intervals;

    const activeRatioSections: [number, number, number][] = [];
    for (const activeInterval of activeIntervals) {
      const endTime = activeInterval.endTime ? activeInterval.endTime.getTime() : DateUtils.NOW.getTime();

      const startTime = (activeInterval.startTime.getTime());

      const startDiff = endTime - startTime;
      const diff = (startDiff * 100) / this.minMaxDiff;
      const startDiffRatio = (startTime - this.props.minDateTime) * 100 / this.minMaxDiff;

      activeRatioSections.push([startDiff, startDiffRatio, diff]);
    }

    return activeRatioSections;
  }

  private createBarsLimitsAndTexts(startWithDiffSections: [number, number, number][]): React.JSX.Element {
    const xpLimitClassName = "active-limit";
    const name = this.props.skill.name;

    return (
      <div className="past-bar" style={{width: this.barRatio + Constants.PERCENT}}>
        {startWithDiffSections.map((section, index) => (
          <div
            className="active-bar"
            style={{
              left: section[1] + Constants.PERCENT,
              width: section[2] + Constants.PERCENT,
            }}
          >
            <div
              key={`bar_${name}_${index}`}
              className="active-bar-section"
            />
            <div
              key={`text_${name}_${index}`}
              className="active-time-duration-text"
              style={{
                bottom: (index % 2 === 0 ? 18 : -22) + "px"
              }}
            >
              {DateUtils.getIntervalInText(section[0])}
            </div>
            <div key={`start_limit_${name}_${index}`} className={`${xpLimitClassName}`} />
            <div
              key={`end_limit_${name}_${index}`}
              className={`${xpLimitClassName} end-active-limit`}
            />
          </div>
        ))}
      </div>
    );
  }
}
