import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../../../../utils/constants";
import SvgReactIcon from "../../../../design/svg-react-icon";
import { HistoryEntry, PlacePeriod } from "../../content/base-history";
import IProfile, { profileContent } from "../../content/profile";
import ISkill from "../../content/skill";
import BaseController from "../base-controller";
import { TextLinkProvider } from "../../content/text-link-provider";
import { GeneralHistory } from "../../content/general-history";

import SkillBarStack from "./skill-bar-stack";
import { DateUtils } from "../../../../../utils/date-util";

interface IState {
  profile: IProfile;
}

// TODO: add keys to lists
export default class DetailController extends BaseController<GeneralHistory, IState> {
  constructor(props: GeneralHistory) {
    super(props);

    this.state = {
      profile: profileContent,
    };
  }

  render() {
    return (
      <div className="sub-container detail protected">
        <div className="scroll scroll-detail">
          <div className="about">
            {this.renderProfile()}
            {this.renderContent(this.props.jobList, "Job Experience")}
            {this.renderContent(this.props.educationList, "Education")}
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
    if (!this.props.skillList) {
      return null;
    }

    const startDateTimes = this.props.skillList.flatMap(skill => skill.intervals).map(interval => interval.startTime.getTime());
    const minDateTime = Math.min(...startDateTimes);

    const endDateTimes = this.props.skillList.flatMap(skill => skill.intervals).map(interval => interval.endTime ? interval.endTime.getTime() : DateUtils.NOW.getTime());
    const maxDateTime = Math.max(...endDateTimes);

    return (
      <div className="info hard-skills">
        <h2 className="title">Hard Skills</h2>
        {this.props.skillList
          .filter((skill) => !skill.hide || skill.intervals)
          .sort((first, next) => next.intervals[0].startTime.getTime() - first.intervals[0].startTime.getTime())
          .map((xp) => this.createSkillCard(xp, minDateTime, maxDateTime))}
      </div>
    );
  }

  private createSkillCard(xp: ISkill, minDateTime: number, maxDateTime: number): React.JSX.Element {
    return (
      <div className="card" key={xp.name}>
        <h4>{xp.name}</h4>
        <SkillBarStack skill={xp} minDateTime={minDateTime} maxDateTime={maxDateTime} />
        {xp.frameworks && <span className="frameworks">({xp.frameworks.join(Constants.COMMA_SPACE)})</span>}
      </div>
    );
  }

  private renderInterestContent(): JSX.Element | null {
    return (
      <div className="info interest">
        <h2 className="title">Interest</h2>
        <div className="xp-s">
          {this.props.interestList.map((xp) => (
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
