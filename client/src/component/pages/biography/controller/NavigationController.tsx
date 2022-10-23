import { Component } from "react";
import { Constants } from "../../../../utils/Constants";
import SvgReactIcon from "../../../design/SvgReactIcon";
import { AbstractIBaseHistory } from "../content/AbstractIHistory";
import { Level } from "../content/ELevel";
import IContact, { contactNavigation } from "../content/IContact";
import IEducation, { educationContent } from "../content/IEducation";
import IExperience, { experienceContent } from "../content/IExperience";
import IInterest, { interestContent } from "../content/IInterest";
import ILanguage, { languageContent } from "../content/ILanguage";
import ISkill, { skillContent } from "../content/ISkill";
import ABiographyController from "./ABiographyController";

//import "../style/navigation.css"

interface IProps {}

interface IState {
  jobList?: IExperience[];
  educationList?: IEducation[];
  languageList?: ILanguage[];
  skillList?: ISkill[];
  interestList?: IInterest[];
  contactList?: IContact[];
  showExperienceDropdown: boolean;
  showEducationDropdown: boolean;
}

export default class NavigationController extends ABiographyController<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      contactList: contactNavigation,
      jobList: experienceContent,
      educationList: educationContent,
      languageList: languageContent,
      interestList: interestContent,
      skillList: skillContent,
      showExperienceDropdown: true,
      showEducationDropdown: true,
    };
  }

  render() {
    return (
      <div className="sub-container navigation protected">
        <div className="scroll scroll-navigation">
          <div className="about">
            <div className="profile-text">
              <div className="img-box">
                <img
                  src={this.getPublicUrl(
                    "images/profile/like_robert_de_niro.png"
                  )}
                  alt="mjoe92"
                />
              </div>
              <h2>
                Jozsef Csurgai
                <br />
                <span>Fullstack Developer</span>
              </h2>
            </div>
            {this.renderContactNavigation()}
            {this.renderJobNavigation()}
            {this.renderEducationNavigation()}
            {this.renderLanguageNavigation()}
          </div>
        </div>
      </div>
    );
  }

  private renderContactNavigation(): JSX.Element {
    if (this.state.contactList == null) {
      return <></>;
    }

    return (
      <div className="navigation-point contact-info">
        <h3 className="title">Contact Info</h3>
        <div className="contacts">
          {this.state.contactList.map((contact) => (
            <SvgReactIcon
              key={contact.id}
              icons={[contact.icon]}
              description={contact.text}
              startWithIcon={true}
            />
          ))}
        </div>
      </div>
    );
  }

  private renderJobNavigation(): JSX.Element {
    if (this.state.jobList == null) {
      return <></>;
    }

    return (
      <div className="navigation-point experience">
        <h3
          onClick={() => this.handleExperienceDropdownShrunk()}
          className="title"
        >
          Job Experience
        </h3>
        <div
          className={
            this.state.showExperienceDropdown ? "xp-s show-dropdown" : "xp-s"
          }
        >
          {this.state.jobList.map((xp) => (
            <Card
              id={xp.id}
              place={xp.employer}
              timeInterval={this.getTimeIntervalInFormat(
                xp.timeStart,
                xp.timeEnd
              )}
              reference={this.createRef(xp.id + "-detail")}
              xpNames={this.toBreakLine(xp.title)}
            />
          ))}
        </div>
      </div>
    );
  }

  private handleExperienceDropdownShrunk(): void {
    return this.setState({
      showExperienceDropdown: !this.state.showExperienceDropdown,
    });
  }

  private renderEducationNavigation(): JSX.Element {
    if (this.state.educationList == null) {
      return <></>;
    }

    return (
      <div className="navigation-point education">
        <h3
          onClick={() => this.handleEducationDropdownShrunk()}
          className="title"
        >
          Education
        </h3>
        <div
          className={
            this.state.showEducationDropdown ? "xp-s show-dropdown" : "xp-s"
          }
        >
          {this.state.educationList.map((xp) => (
            <Card
              id={xp.id}
              place={xp.institution}
              timeInterval={this.getTimeIntervalInFormat(
                xp.timeStart,
                xp.timeEnd
              )}
              reference={this.createRef(xp.id + "-detail")}
              xpNames={this.toBreakLine(xp.title)}
            />
          ))}
        </div>
      </div>
    );
  }

  private handleEducationDropdownShrunk(): void {
    return this.setState({
      showEducationDropdown: !this.state.showEducationDropdown,
    });
  }

  private renderLanguageNavigation(): JSX.Element {
    if (this.state.languageList == null) {
      return <></>;
    }

    const getPrefixLevel = (
      oralLevel: Level,
      writeLevel?: Level
    ): string | null => {
      if (oralLevel == null && writeLevel == null) {
        return null;
      }

      let oralResult: string = shortenIfNative(Level[oralLevel]);

      if (writeLevel === undefined || writeLevel === null) {
        return "(" + oralResult + ")";
      }

      let writeResult: string = shortenIfNative(Level[writeLevel]);

      return "(" + oralResult + Constants.SLASH + writeResult + ")";
    };

    const shortenIfNative = (levelStr: string): string => {
      if (levelStr.toLowerCase() === "native") {
        return "N";
      }

      return levelStr;
    };

    const getPercentOfLevel = (
      oralLevel: Level,
      writeLevel?: Level
    ): number => {
      if (writeLevel === undefined || writeLevel === null) {
        writeLevel = oralLevel;
      }

      return (50 * (oralLevel + writeLevel)) / (Object.keys(Level).length / 2);
    };

    return (
      <div className="navigation-point language">
        <h3 className="title">Language</h3>
        <div className="xp-s">
          {this.state.languageList.map((xp) => (
            <div className="xp">
              <span className="text">
                {xp.name}
                <span className="spec">
                  {getPrefixLevel(xp.oralLevel, xp.writeLevel)}
                </span>
              </span>
              <span className="percent">
                <div
                  style={{
                    width:
                      getPercentOfLevel(
                        xp.oralLevel,
                        xp.writeLevel
                      ).toString() + Constants.PERCENT,
                  }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  private getPublicUrl(url: string): string {
    const slash =
      url[0] === Constants.SLASH ? Constants.EMPTY : Constants.SLASH;

    return process.env.PUBLIC_URL + slash + url;
  }
}

interface ICardProps {
  id: string;
  place: string;
  timeInterval: string;
  reference: string;
  xpNames: JSX.Element;
}

interface ICardState {}

export class Card extends Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.reference}>
        <span id={this.props.id + "-navigation"} className="anchor-jump"></span>
        <div className="xp">
          <h5>{this.props.timeInterval}</h5>
          <h4>{this.props.xpNames}</h4>
          <h4>{this.props.place}</h4>
        </div>
      </a>
    );
  }
}
