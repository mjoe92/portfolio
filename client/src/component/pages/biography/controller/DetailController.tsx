import { Component } from "react";
import SvgReactIcon from "../../../design/SvgReactIcon";
import { AbstractIDetailedHistory } from "../content/AbstractIHistory";
import IEducation, { educationContent } from "../content/IEducation";
import IExperience, { experienceContent } from "../content/IExperience";
import IInterest, { interestContent } from "../content/IInterest";
import ILanguage, { languageContent } from "../content/ILanguage";
import IProfile, { profileContent } from "../content/IProfile";
import ISkill, { skillContent } from "../content/ISkill";
import ABiographyController from "./ABiographyController";

interface IProps {}

interface IState {
  jobList?: IExperience[];
  educationList?: IEducation[];
  languageList?: ILanguage[];
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
      jobList: experienceContent,
      educationList: educationContent,
      languageList: languageContent,
      interestList: interestContent,
      profile: profileContent,
      skillList: skillContent,
    };
  }

  render() {
    return (
      <div className="sub-container detail protected">
        <div className="scroll scroll-detail">
          <div className="about">
            {this.renderProfile()}
            {this.renderExperienceContent()}
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

  private renderExperienceContent(): JSX.Element {
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

    return (
      <div className="info l-skills">
        <h2 className="title">Hard Skills</h2>
        {this.state.skillList.map((xp) => (
          <div className="card">
            <h4>{xp.name}</h4>
            <div className="percent">
              <div style={{ width: xp.level + "%" }}></div>
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

export class Card extends Component<ICardProps, ICardState> {
  private textHeight;

  constructor(props: ICardProps) {
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
              className={"rounder" + (this.state.showDropdown ? " active" : "")}
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
          {this.props.xpNames}
        </h4>
        <div
          id={this.props.history.id}
          className={this.state.showDropdown ? "show-dropdown" : undefined}
          // style={{ height: this.textHeight }}
        >
          {this.props.history.description}
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
    // this.slowAnimation();
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  //TODO: fetch content size
  private slowAnimation() {
    throw new Error("Method not implemented.");
  }
}
