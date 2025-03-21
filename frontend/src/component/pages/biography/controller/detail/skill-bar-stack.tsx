import { Constants } from "../../../../../utils/constants";
import { getIntervalInText, NOW } from "../../../../../utils/date-util";
import { Skill } from "../../content/skill";

interface ISkillMinMaxInterval {
  skill: Skill;
  minDateTime: number;
  maxDateTime: number;
}

const SkillBarStack = ({ skill, minDateTime, maxDateTime }: ISkillMinMaxInterval) => {
  const barRatio = 85;

  const minMaxDiff = maxDateTime - minDateTime;

  const createBarStartDiffSections = (): [number, number, number][] => {
    const activeIntervals = skill.intervals;

    const activeRatioSections: [number, number, number][] = [];
    for (const activeInterval of activeIntervals) {
      const endTime = activeInterval.endTime ? activeInterval.endTime.getTime() : NOW.getTime();

      const startTime = activeInterval.startTime.getTime();

      const startDiff = endTime - startTime;
      const diff = (startDiff * 100) / minMaxDiff;
      const startDiffRatio = ((startTime - minDateTime) * 100) / minMaxDiff;

      activeRatioSections.push([startDiff, startDiffRatio, diff]);
    }

    return activeRatioSections;
  };

  const createBarsLimitsAndTexts = (startWithDiffSections: [number, number, number][]) => {
    const xpLimitClassName = "active-limit";
    const names = skill.names;

    return (
      <div className="past-bar" style={ { width: barRatio + Constants.PERCENT } }>
        { startWithDiffSections.map((section, index) => (
          <div key={ `active-bar_${ names }_${ index }` }
               className="active-bar"
               style={ {
                 left: section[1] + Constants.PERCENT,
                 width: section[2] + Constants.PERCENT
               } }
          >
            <div key={ `bar_${ names }_${ index }` } className="active-bar-section"/>
            <div
              key={ `text_${ names }_${ index }` }
              className="active-time-duration-text"
              style={ {
                bottom: (index % 2 === 0 ? 18 : -22) + "px"
              } }
            >
              { getIntervalInText(section[0]) }
            </div>
            <div key={ `start_limit_${ names }_${ index }` } className={ `${ xpLimitClassName }` }/>
            <div key={ `end_limit_${ names }_${ index }` } className={ `${ xpLimitClassName } end-active-limit` }/>
          </div>
        )) }
      </div>
    );
  };

  const startWithDiffSections: [number, number, number][] = createBarStartDiffSections();

  const intervals = skill.intervals;
  const hasAnimation = intervals[intervals.length - 1].endTime ? "none" : undefined;
  const animationGap = 100 - barRatio;

  return (
    <div className="skill-bar">
      <div
        className="end-gap"
        style={ {
          width: animationGap + Constants.PERCENT,
          animation: hasAnimation
        } }
      />
      { createBarsLimitsAndTexts(startWithDiffSections) }
    </div>
  );
};

export default SkillBarStack;
