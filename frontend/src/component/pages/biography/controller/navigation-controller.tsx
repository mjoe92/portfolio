import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Constants } from "../../../../utils/constants";
import SvgReactIcon from "../../../design/svg-react-icon";
import { Level } from "../content/level";
import IContact, { contactNavigation } from "../content/contact";
import { educationContent } from "../content/education";
import { jobContent } from "../content/job";
import IInterest, { interestContent } from "../content/interest";
import ILanguage, { languageContent } from "../content/language";
import ISkill, { skillContent } from "../content/skill";
import BaseController from "./base-controller";
import { ImageLoader } from "../../../../utils/image-loader";
import { HistoryEntry } from "../content/base-history";

interface IProps {}

interface IState {
  jobList: HistoryEntry[];
  educationList: HistoryEntry[];
  languageList: ILanguage[];
  skillList: ISkill[];
  interestList: IInterest[];
  contactList: IContact[];
  collapseJob: boolean;
  collapseEducation: boolean;
}

export default class NavigationController extends BaseController<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      contactList: contactNavigation,
      jobList: jobContent,
      educationList: educationContent,
      languageList: languageContent,
      interestList: interestContent,
      skillList: skillContent,
      collapseJob: true,
      collapseEducation: true,
    };
  }

  render() {
    return (
      <div className="sub-container navigation protected">
        <div className="scroll scroll-navigation">
          <div className="about">
            {this.renderProfile()}
            {this.renderContactNavigation()}
            {this.renderContentNavigation(true)}
            {this.renderContentNavigation(false)}
            {this.renderLanguageNavigation()}
          </div>
        </div>
      </div>
    );
  }

  private renderProfile(): JSX.Element {
    return (
      <div className="profile-text">
        <div className="img-box">
          <img src={ImageLoader.load("office_style_grayscale.jpg")} alt="profile face" />
        </div>
        <h2>
          Jozsef Csurgai
          <br />
          <span>Full-Stack Developer</span>
        </h2>
      </div>
    );
  }

  private renderContactNavigation(): JSX.Element | null {
    if (this.state.contactList == null) {
      return null;
    }

    return (
      <div className="navigation-point contact-info">
        <h3 className="title">Contact Info</h3>
        <div className="contacts">
          {this.state.contactList
            .filter((contact) => !contact.disabled)
            .map((contact) => (
              <SvgReactIcon key={contact.id} icons={[contact.icon]} description={contact.text} startWithIcon={true} />
            ))}
        </div>
      </div>
    );
  }

  private renderContentNavigation(isJobExperience: boolean): JSX.Element | null {
    let xpList: HistoryEntry[];
    let title: string;
    let collapse: boolean;
    if (isJobExperience) {
      xpList = this.state.jobList;
      title = "Job Experience";
      collapse = this.state.collapseJob;
    } else {
      xpList = this.state.educationList;
      title = "Education";
      collapse = this.state.collapseEducation;
    }

    return (
      <div className="navigation-point experience">
        <h3 onClick={() => this.handleDropdownShrunk(isJobExperience)} className="title">
          <p>{title}</p>
          <FontAwesomeIcon icon={faAngleUp} className={collapse ? "show" : undefined} />
        </h3>
        <div className={collapse ? "xp-s show-dropdown" : "xp-s"}>
          {xpList.map((xp: HistoryEntry) => {
            const startDates: Date[] = xp.placePeriods.map((placePeriod) => placePeriod.timeStart);
            const minDate: Date = startDates.reduce((first, after) => this.compareDates(first, after)!);

            const endDates: (Date | null)[] = xp.placePeriods.map((placePeriod) => placePeriod.timeEnd);
            const maxDate: Date | null = endDates.reduce((first, after) => this.compareDates(first, after));

            const places = xp.placePeriods.map((placePeriod) => placePeriod.place).join(Constants.COMMA_SPACE);

            return (
              <Card
                id={xp.id}
                key={xp.id}
                places={places}
                timeInterval={this.getTimeIntervalInFormat(minDate, maxDate)}
                reference={this.createRef(xp.id + "-detail")}
                xpNames={this.toBreakLine(xp.title)}
              />
            );
          })}
        </div>
      </div>
    );
  }

  private compareDates(first: Date | null, after: Date | null): Date | null {
    if (!first) {
      return first;
    }

    if (!after) {
      return after;
    }

    return first > after ? first : after;
  }

  private handleDropdownShrunk(isJobExperience: boolean): void {
    return isJobExperience
      ? this.setState({
          collapseJob: !this.state.collapseJob,
        })
      : this.setState({
          collapseEducation: !this.state.collapseEducation,
        });
  }

  private renderLanguageNavigation(): JSX.Element | null {
    if (this.state.languageList == null) {
      return null;
    }

    const getPrefixLevel = (oralLevel: Level, writeLevel?: Level): string | null => {
      if (oralLevel == null && writeLevel == null) {
        return null;
      }

      let oralResult: string;
      if (writeLevel === undefined || writeLevel === null) {
        oralResult = Level[oralLevel];
      } else {
        oralResult = Level[oralLevel] + Constants.SPACE_SLASH_SPACE + Level[writeLevel];
      }
      return Constants.PARENTHESIS_LEFT + oralResult + Constants.PARENTHESIS_RIGHT;
    };

    const getPercentOfLevel = (oralLevel: Level, writeLevel?: Level): number => {
      return (100 * (oralLevel + (writeLevel ?? oralLevel))) / Object.keys(Level).length;
    };

    return (
      <div className="navigation-point language">
        <h3 className="title">Language</h3>
        <div className="xp-s">
          {this.state.languageList
            .filter((xp) => !xp.disabled)
            .map((xp) => (
              <div className="xp" key={xp.name.toLowerCase()}>
                <span className="text">
                  {xp.name}
                  <span className="spec">{getPrefixLevel(xp.oralLevel, xp.writeLevel)}</span>
                </span>
                <span className="percent">
                  <div
                    style={{
                      width: getPercentOfLevel(xp.oralLevel, xp.writeLevel).toString() + Constants.PERCENT,
                    }}
                  />
                </span>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

interface ICardProps {
  id: string;
  places: string;
  timeInterval: string;
  reference: string;
  xpNames: JSX.Element;
}

interface ICardState {}

export class Card extends Component<ICardProps, ICardState> {

  render() {
    return (
      <a href={this.props.reference}>
        <span id={this.props.id + "-navigation"} className="anchor-jump"></span>
        <div className="xp">
          <h5>{this.props.timeInterval}</h5>
          <h4>{this.props.xpNames}</h4>
          <h4>{this.props.places}</h4>
        </div>
      </a>
    );
  }
}
