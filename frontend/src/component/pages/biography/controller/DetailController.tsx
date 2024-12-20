import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../../../utils/Constants";
import SvgReactIcon from "../../../design/SvgReactIcon";
import { AbstractIDetailedHistory } from "../content/AbstractIHistory";
import IEducation, { educationContent } from "../content/IEducation";
import IExperience, { experienceContent } from "../content/IExperience";
import IInterest, { interestContent } from "../content/IInterest";
import IProfile, { profileContent } from "../content/IProfile";
import ISkill, { skillContent } from "../content/ISkill";
import BaseController from "./BaseController";
import { JSX } from "react";

interface IProps {}

interface IState {
  profile?: IProfile;
  jobList?: IExperience[];
  educationList?: IEducation[];
  skillList?: ISkill[];
  interestList?: IInterest[];
}

// TODO: add keys to lists
export default class DetailController extends BaseController<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      profile: profileContent,
      jobList: experienceContent,
      educationList: educationContent,
      skillList: skillContent,
      interestList: interestContent,
    };
  }

  render() {
    return (
      <div className="sub-container detail protected">
        <div className="scroll scroll-detail">
          <div className="about">
            {this.renderProfile()}
            {this.renderJobContent()}
            {this.renderEducationContent()}
            {this.renderSkillContent()}
            {this.renderInterestContent()}
          </div>
        </div>
      </div>
    );
  }

  private renderProfile(): JSX.Element | null {
    if (this.state.profile == null) {
      return null;
    }

    return (
      <div className="info">
        <h2 className="title">{this.state.profile.name}</h2>
        {this.state.profile.description}
      </div>
    );
  }

  private renderJobContent(): JSX.Element | null {
    if (this.state.jobList == null) {
      return null;
    }

    return (
      <div className="info">
        <h2 className="title">Job Experience</h2>
        {this.state.jobList.map((xp: IExperience) => (
          <Card
            key={xp.id}
            history={xp}
            place={xp.employer}
            reference={this.createRef(xp.id)}
            timeInterval={this.getTimeIntervalInFormat(xp.timeStart, xp.timeEnd)}
            xpNames={this.toBreakLine(xp.title)}
            collapse={xp.collapse}
          />
        ))}
      </div>
    );
  }

  private renderEducationContent(): JSX.Element | null {
    if (this.state.educationList == null) {
      return null;
    }

    return (
      <div className="info">
        <h2 className="title">Education</h2>
        {this.state.educationList.map((xp) => (
          <Card
            key={xp.id}
            history={xp}
            place={xp.institution}
            reference={this.createRef(xp.id)}
            timeInterval={this.getTimeIntervalInFormat(xp.timeStart, xp.timeEnd)}
            xpNames={this.toBreakLine(xp.title)}
            collapse={xp.collapse}
          />
        ))}
      </div>
    );
  }

  private renderSkillContent(): JSX.Element | null {
    if (this.state.skillList == null) {
      return null;
    }

    const getTimeIntervalInText = (xp: ISkill): JSX.Element => {
      const timeInterval: string = this.getYearMonthIntervalInText(
        xp.timeStart,
        xp.timeEnd
      );

      const minTimeStartInNumber = (skills?: ISkill[]): number => {
        if (skills === undefined) {
          throw new Error("skills undefined!");
        }

        const numbers: number[] = skills.map((skill) =>
          skill.timeStart.getTime()
        );
        return Math.min(...numbers);
      };

      const maxTimeEndInNumber = (skills?: ISkill[]): number => {
        if (skills === undefined) {
          throw new Error("skills undefined!");
        }

        const numbers: number[] = skills.map((skill) =>
          this.getActualTime(skill.timeEnd).getTime()
        );
        return Math.max(...numbers);
      };

      const ratioOfInterval = (minDate: Date, maxDate?: Date): number => {
        if (maxDate === undefined) {
          maxDate = new Date();
        }

        return (
          ((maxDate.getTime() - minDate.getTime()) /
            (maxTimeEndInNumber(this.state.skillList) -
              minTimeStartInNumber(this.state.skillList))) *
          100
        );
      };

      const getDeadTime = (minDate?: Date, shrink?: number): number => {
        if (shrink === undefined) {
          shrink = 1;
        }

        return (
          ratioOfInterval(
            new Date(minTimeStartInNumber(this.state.skillList)),
            minDate
          ) / shrink
        );
      };

      const drawLimitLine = (leftOffset: number): JSX.Element => {
        return (
          <div
            className="xp-limit"
            style={{
              left: leftOffset + Constants.PERCENT,
            }}
          />
        );
      };

      return (
        <>
          <div
            className="xp-bar"
            style={{
              width:
                ratioOfInterval(xp.timeStart, xp.timeEnd) + Constants.PERCENT,
              left: getDeadTime(xp.timeStart) + Constants.PERCENT,
            }}
          />
          {drawLimitLine(getDeadTime(xp.timeStart))}
          {drawLimitLine(
            ratioOfInterval(xp.timeStart, xp.timeEnd) +
              getDeadTime(xp.timeStart)
          )}
          <div
            className="xp-time-duration-text"
            style={{
              left:
                ratioOfInterval(xp.timeStart, xp.timeEnd) / 2 +
                getDeadTime(xp.timeStart) -
                timeInterval.length * 1.5 +
                Constants.PERCENT,
            }}
          >
            {timeInterval}
          </div>
        </>
      );
    };

    const hasAnimation = (date?: Date): string => {
      return date === undefined ? Constants.EMPTY : "none";
    };

    const rightEndGapRatio = 15;

    return (
      <div className="info hard-skills">
        <h2 className="title">Hard Skills</h2>
        {this.state.skillList
          .filter((skill) => !skill.hide)
          .map((xp) => (
            <div className="card" key={xp.name}>
              <h4>{xp.name}</h4>
              <div className="percent">
                <div
                  className="percent-end-gap"
                  style={{
                    width: rightEndGapRatio + Constants.PERCENT,
                    animation: hasAnimation(xp.timeEnd),
                  }}
                />
                <div
                  className="percent-effective"
                  style={{ width: 100 - rightEndGapRatio + Constants.PERCENT }}
                >
                  {getTimeIntervalInText(xp)}
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  private renderInterestContent(): JSX.Element | null {
    if (this.state.interestList == null) {
      return null;
    }

    return (
      <div className="info interest">
        <h2 className="title">Interest</h2>
        <div className="xp-s">
          {this.state.interestList.map((xp) => (
            <div className="xp" key={xp.name}>
              <SvgReactIcon
                key={xp.name}
                icons={xp.icons}
                description={<h4>{xp.name}</h4>}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

interface ICardProps {
  key: string;
  history: AbstractIDetailedHistory;
  place: string;
  timeInterval: string;
  reference: string;
  xpNames: JSX.Element;
  collapse?: boolean;
}

interface ICardState {
  collapse?: boolean;
}

export class Card extends BaseController<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);

    this.state = {
      collapse: props.collapse,
    };
  }

  render() {
    return (
      <div className="card">
        <span
          id={this.props.history.id + "-detail"}
          className="anchor-jump"
        ></span>
        {this.renderDateCompany()}
        {this.renderBranch()}
        {this.renderText()}
      </div>
    );
  }

  private renderDateCompany(): JSX.Element {
    return (
      <div id={this.props.history.id} className="date-company">
        <h5>{this.props.timeInterval}</h5>
        <h5>{this.props.place}</h5>
      </div>
    );
  }

  private renderBranch(): JSX.Element {
    return (
      <div className="branch">
        <span className="branch-up"></span>
        <a href={this.props.reference + "-navigation"}>
          <span
            className={
              "rounder" +
              (this.state.collapse
                ? Constants.SPACE + "active"
                : Constants.EMPTY)
            }
            onClick={() => this.handleCardDropdown()}
          />
        </a>
        <span className="branch-down"></span>
      </div>
    );
  }

  private renderText(): JSX.Element {
    const collapseClassName = this.state.collapse ? "show" : undefined;

    return (
      <div className="text">
        <h4>
          <div>{this.props.xpNames}</div>
          <FontAwesomeIcon
            icon={faAngleUp}
            className={collapseClassName}
            onClick={() => this.handleDropdownShrunk(1000)}
          />
        </h4>
        <div
          id={this.props.history.id}
          className={`card-detail ${collapseClassName}`}
        >
          {this.props.history.description}
          <span className="show-right-branch" />
        </div>
      </div>
    );
  }

  private handleDropdownShrunk(minWidth: number): void {
    const windowWidth = window.innerWidth;

    if (windowWidth > minWidth) {
      return;
    }

    this.handleCardDropdown();
  }

  private handleCardDropdown(): void {
    this.setState({ collapse: !this.state.collapse });
  }
}
