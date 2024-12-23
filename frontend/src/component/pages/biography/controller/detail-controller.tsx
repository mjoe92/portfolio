import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../../../utils/constants";
import SvgReactIcon from "../../../design/svg-react-icon";
import { HistoryEntry, PlacePeriod } from "../content/base-history";
import { educationContent } from "../content/education";
import { jobContent } from "../content/job";
import IInterest, { interestContent } from "../content/interest";
import IProfile, { profileContent } from "../content/profile";
import ISkill, { skillContent } from "../content/skill";
import BaseController from "./base-controller";
import { TextLinkProvider } from "../content/text-link-provider";

interface IProps {}

interface IState {
  profile: IProfile;
  jobList: HistoryEntry[];
  educationList: HistoryEntry[];
  skillList: ISkill[];
  interestList: IInterest[];
}

// TODO: add keys to lists
export default class DetailController extends BaseController<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      profile: profileContent,
      jobList: jobContent,
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
            {this.renderContent(this.state.jobList, "Job Experience")}
            {this.renderContent(this.state.educationList, "Education")}
            {this.renderSkillContent()}
            {this.renderInterestContent()}
          </div>
        </div>
      </div>
    );
  }

  private renderProfile(): JSX.Element | null {
    return (
      <div className="info">
        <h2 className="title">{this.state.profile.name}</h2>
        {this.state.profile.description}
      </div>
    );
  }

  private renderContent(xps: HistoryEntry[], title: string): JSX.Element | null {
    return (
      <div className="info">
        <h2 className="title">{title}</h2>
        {xps.map((xp: HistoryEntry) => (
          <Card
            id={xp.id}
            key={xp.id}
            description={xp.description}
            placePeriods={xp.placePeriods}
            reference={this.createRef(xp.id)}
            xpNames={this.toBreakLine(xp.title)}
            collapse={xp.collapse}
          />
        ))}
      </div>
    );
  }

  private renderSkillContent(): JSX.Element | null {
    const getTimeIntervalInText = (xp: ISkill): JSX.Element => {
      const timeInterval: string = this.getYearMonthIntervalInText(xp.timeStart, xp.timeEnd);

      const minTimeStartInNumber = (skills?: ISkill[]): number => {
        if (skills === undefined) {
          throw new Error("skills undefined!");
        }

        const numbers: number[] = skills.map((skill) => skill.timeStart.getTime());
        return Math.min(...numbers);
      };

      const maxTimeEndInNumber = (skills?: ISkill[]): number => {
        if (skills === undefined) {
          throw new Error("skills undefined!");
        }

        const numbers: number[] = skills.map((skill) => this.getActualTime(skill.timeEnd).getTime());
        return Math.max(...numbers);
      };

      const ratioOfInterval = (minDate: Date, maxDate?: Date): number => {
        if (maxDate === undefined) {
          maxDate = new Date();
        }

        return (
          ((maxDate.getTime() - minDate.getTime()) /
            (maxTimeEndInNumber(this.state.skillList) - minTimeStartInNumber(this.state.skillList))) *
          100
        );
      };

      const getDeadTime = (minDate?: Date, shrink?: number): number => {
        if (shrink === undefined) {
          shrink = 1;
        }

        return ratioOfInterval(new Date(minTimeStartInNumber(this.state.skillList)), minDate) / shrink;
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
              width: ratioOfInterval(xp.timeStart, xp.timeEnd) + Constants.PERCENT,
              left: getDeadTime(xp.timeStart) + Constants.PERCENT,
            }}
          />
          {drawLimitLine(getDeadTime(xp.timeStart))}
          {drawLimitLine(ratioOfInterval(xp.timeStart, xp.timeEnd) + getDeadTime(xp.timeStart))}
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
              <div>
                <h4>{xp.name}</h4>
              </div>
              <div className="percent">
                <div
                  className="percent-end-gap"
                  style={{
                    width: rightEndGapRatio + Constants.PERCENT,
                    animation: hasAnimation(xp.timeEnd),
                  }}
                />
                <div className="percent-effective" style={{width: 100 - rightEndGapRatio + Constants.PERCENT}}>
                  {getTimeIntervalInText(xp)}
                </div>
              </div>
              {xp.frameworks && <span className="frameworks">({xp.frameworks.join(Constants.COMMA_SPACE)})</span>}
            </div>
          ))}
      </div>
    );
  }

  private renderInterestContent(): JSX.Element | null {
    return (
      <div className="info interest">
        <h2 className="title">Interest</h2>
        <div className="xp-s">
          {this.state.interestList.map((xp) => (
            <div className="xp" key={xp.name}>
              <SvgReactIcon key={xp.name} icons={xp.icons} description={<h4>{xp.name}</h4>} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

interface ICardProps {
  id: string;
  description: JSX.Element;
  placePeriods: PlacePeriod[];
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
          id={this.props.id + "-detail"}
          className="anchor-jump"
        ></span>
        {this.renderPeriodPlaces()}
        {this.renderBranch()}
        {this.renderText()}
      </div>
    );
  }

  private renderPeriodPlaces(): JSX.Element {
    return (
      <div id={this.props.id} className="date-company">
        {this.props.placePeriods.map((placePeriod: PlacePeriod) => (
          <div key={placePeriod.place}>
            <h5>{this.getTimeIntervalInFormat(placePeriod.timeStart, placePeriod.timeEnd)}</h5>
            <h5>{TextLinkProvider.load(placePeriod.place)}</h5>
          </div>
        ))}
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
          id={this.props.id}
          className={`card-detail ${collapseClassName}`}
        >
          {this.props.description}
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
