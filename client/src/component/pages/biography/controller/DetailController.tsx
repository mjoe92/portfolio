import { Constants } from "../../../../utils/Constants";
import SvgReactIcon from "../../../design/SvgReactIcon";
import { AbstractIDetailedHistory } from "../content/AbstractIHistory";
import IEducation, { educationContent } from "../content/IEducation";
import IExperience, { experienceContent } from "../content/IExperience";
import IInterest, { interestContent } from "../content/IInterest";
import IProfile, { profileContent } from "../content/IProfile";
import ISkill, { skillContent } from "../content/ISkill";
import ABiographyController from "./ABiographyController";

interface IProps {}

interface IState {
  jobList?: IExperience[];
  educationList?: IEducation[];
  skillList?: ISkill[];
  interestList?: IInterest[];
  profile?: IProfile;
}

export default class DetailController extends ABiographyController<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      profile: profileContent,
      jobList: experienceContent,
      educationList: educationContent,
      interestList: interestContent,
      skillList: skillContent,
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

  private renderProfile(): JSX.Element {
    if (this.state.profile == null) {
      return <></>;
    }

    return (
      <div className="info">
        <h2 className="title">{this.state.profile.name}</h2>
        {this.state.profile.description}
      </div>
    );
  }

  private renderJobContent(): JSX.Element {
    if (this.state.jobList == null) {
      return <></>;
    }

    return (
      <div className="info">
        <h2 className="title">Job Experience</h2>
        {this.state.jobList.map((xp) => (
          <Card
            history={xp}
            place={xp.employer}
            reference={this.createRef(xp.id)}
            timeInterval={this.getTimeIntervalInFormat(
              xp.timeStart,
              xp.timeEnd
            )}
            xpNames={this.toBreakLine(xp.title)}
          />
        ))}
      </div>
    );
  }

  private renderEducationContent(): JSX.Element {
    if (this.state.educationList == null) {
      return <></>;
    }

    return (
      <div className="info">
        <h2 className="title">Education</h2>
        {this.state.educationList.map((xp) => (
          <Card
            history={xp}
            place={xp.institution}
            reference={this.createRef(xp.id)}
            timeInterval={this.getTimeIntervalInFormat(
              xp.timeStart,
              xp.timeEnd
            )}
            xpNames={this.toBreakLine(xp.title)}
          />
        ))}
      </div>
    );
  }

  private renderSkillContent(): JSX.Element {
    if (this.state.skillList == null) {
      return <></>;
    }

    // const minDate = new Date(
    //   Math.min.apply(null,
    //     this.state.skillList
    //       .filter((skill) => !skill.hide)
    //       .map((xp) => xp.timeStart.getMilliseconds)
    //   )
    // );

    // console.log(minDate.getTime());

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
            <div className="card">
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

  private renderInterestContent(): JSX.Element {
    if (this.state.interestList == null) {
      return <></>;
    }

    return (
      <div className="info interest">
        <h2 className="title">Interest</h2>
        <div className="xp-s">
          {this.state.interestList.map((xp) => (
            <div className="xp">
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
  history: AbstractIDetailedHistory;
  place: string;
  timeInterval: string;
  reference: string;
  xpNames: JSX.Element;
}

interface ICardState {
  showDropdown: boolean;
}

export class Card extends ABiographyController<ICardProps, ICardState> {
  private static timeoutInMs = 500;

  constructor(props: ICardProps, private textHeight: number) {
    super(props);
    this.textHeight = 0;

    this.state = {
      showDropdown: false,
    };
  }

  render() {
    return (
      <div className="card">
        <span
          id={this.props.history.id + "-detail"}
          className="anchor-jump"
        ></span>
        <div id={this.props.history.id} className="date-company">
          <h5>{this.props.timeInterval}</h5>
          <h5>{this.props.place}</h5>
        </div>
        <div className="branch">
          <span className="branch-up"></span>
          <a href={this.props.reference + "-navigation"}>
            <span
              className={
                "rounder" +
                (this.state.showDropdown ? " active" : Constants.EMPTY)
              }
              onClick={() => this.handleDropdownShrunkDefault()}
            ></span>
          </a>
          <span className="branch-down"></span>
        </div>
        {this.renderText()}
      </div>
    );
  }

  private renderText(): JSX.Element {
    return (
      <div className="text">
        <h4 onClick={() => this.handleDropdownShrunk(1000)}>
          <p>{this.props.xpNames}</p>
          {this.showDropdownIcon(this.state.showDropdown, "icon")}
        </h4>
        <div
          id={this.props.history.id}
          className={this.state.showDropdown ? "show-dropdown" : undefined}
        >
          {this.props.history.description}
          <span className="show-right-branch" />
        </div>
      </div>
    );
  }

  private handleDropdownShrunk(minWidth: number): void {
    let windowWidth = window.innerWidth;

    if (windowWidth > minWidth) {
      return;
    }

    this.handleDropdownShrunkDefault();
  }

  private handleDropdownShrunkDefault(): void {
    const minHeight = 0;
    const maxHeight = 200;
    const diffRatio = Math.abs(maxHeight - minHeight) / Card.timeoutInMs;

    //const timeOut = setInterval(() => this.slowAnimation(diffRatio), 1);
    //clearInterval(timeOut);
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  private slowAnimation(diffRatio: number): void {
    if (this.state.showDropdown) {
      this.textHeight--;
      console.log(this.textHeight);
    } else {
      this.textHeight++;
      console.log(this.textHeight);
    }

    if (0 === this.textHeight || 200 === Math.abs(this.textHeight)) {
      return;
    }
  }
}
