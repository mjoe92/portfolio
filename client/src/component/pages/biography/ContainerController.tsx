import { Component } from "react";
import SvgReactIcon from "../../icon/SvgReactIcon";
import { Level } from "./content/ELevel";
import IContact, { contactNavigation } from "./content/IContact";
import IEducation, { educationContent } from "./content/IEducation";
import IExperience, { experienceContent } from "./content/IExperience";
import IInterest, { interestContent } from "./content/IInterest";
import ILanguage, { languageContent } from "./content/ILanguage";
import IProfile, { profileContent } from "./content/IProfile";
import ISkill, { skillContent } from "./content/ISkill";

import "./style/container.css";

interface IProps {}

interface IState extends INavigationState, IContentState {
  jobList?: IExperience[];
  educationList?: IEducation[];
  languageList?: ILanguage[];
  skillList?: ISkill[];
  interestList?: IInterest[];
}

interface INavigationState {
  contactList?: IContact[];
}

interface IContentState {
  profile?: IProfile;
}

/** @todo: add hover helper (show info message about hovered text) + grey color */
export default class ContainerController extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      contactList: contactNavigation,
      jobList: experienceContent,
      educationList: educationContent,
      languageList: languageContent,
      interestList: interestContent,
      profile: profileContent,
      skillList: skillContent,
    };
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
              //id={contact}
              icons={[contact.icon]}
              text={contact.text}
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
        <h3 className="title">Experience</h3>
        <div className="xp-s">
          {this.state.jobList.map((xp) => (
            <a href={this.createRef(xp.id)}>
              <div className="xp">
                <h5>
                  {this.getDateInFormat(xp.timeStart) +
                    " - " +
                    this.getDateInFormat(xp.timeEnd)}
                </h5>
                <h4>{xp.title}</h4>
                <h4>{xp.employer}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  private renderEducationNavigation(): JSX.Element {
    if (this.state.educationList == null) {
      return <></>;
    }

    return (
      <div className="navigation-point education">
        <h3 className="title">Education</h3>
        <div className="xp-s">
          {this.state.educationList.map((xp) => (
            <a href={this.createRef(xp.id)}>
              <div className="xp">
                <h5>
                  {this.getDateInFormat(xp.timeStart) +
                    " - " +
                    this.getDateInFormat(xp.timeEnd)}
                </h5>
                <h4>{xp.title}</h4>
                <h4>{xp.institution}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
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

      if (writeLevel == undefined || writeLevel == null) {
        return "(" + oralResult + ")";
      }

      let writeResult: string = shortenIfNative(Level[writeLevel]);

      return "(" + oralResult + "/" + writeResult + ")";
    };

    const shortenIfNative = (levelStr: string): string => {
      if (levelStr.toLowerCase() == "native") {
        return "N";
      }

      return levelStr;
    };

    const getPercentOfLevel = (
      oralLevel: Level,
      writeLevel?: Level
    ): number => {
      if (writeLevel == undefined || writeLevel == null) {
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
                      ).toString() + "%",
                  }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  private renderProfile(): JSX.Element {
    if (this.state.profile == null) {
      return <></>;
    }

    return (
      <div className="about">
        <h2 className="title">{this.state.profile.name}</h2>
        <p>{this.state.profile.description}</p>
      </div>
    );
  }

  private renderExperienceContent(): JSX.Element {
    if (this.state.jobList == null) {
      return <></>;
    }

    return (
      <div className="about">
        <h2 className="title">Experience</h2>
        {this.state.jobList.map((xp) => (
          <>
            <div className="card">
              <span id={xp.id} className="anchor-jump"></span>
              <div id={xp.id} className="date-company">
                <h5>
                  {this.getDateInFormat(xp.timeStart) +
                    " - " +
                    this.getDateInFormat(xp.timeEnd)}
                </h5>
                <h5>{xp.employer}</h5>
              </div>
              <div className="timeline">
                <span className="branch-up"></span>
                <span className="rounder"></span>
                <span className="branch-down"></span>
              </div>
              <div className="text">
                <h4>{xp.title}</h4>
                <p>{xp.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }

  private renderEducationContent(): JSX.Element {
    if (this.state.educationList == null) {
      return <></>;
    }

    return (
      <div className="about">
        <h2 className="title">Education</h2>
        {this.state.educationList.map((xp) => (
          <div className="card">
            <span id={xp.id} className="anchor-jump"></span>
            <div id={xp.id} className="date-company">
              <h5>
                {this.getDateInFormat(xp.timeStart) +
                  " - " +
                  this.getDateInFormat(xp.timeEnd)}
              </h5>
              <h5>{xp.institution}</h5>
            </div>
            <div className="timeline">
              <span className="branch-up"></span>
              <span className="rounder"></span>
              <span className="branch-down"></span>
            </div>
            <div className="text">
              <h4>{xp.title}</h4>
              <p>{xp.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  private renderSkillContent(): JSX.Element {
    if (this.state.skillList == null) {
      return <></>;
    }

    return (
      <div className="about l-skills">
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
      <div className="about interest">
        <h2 className="title">Interest</h2>
        <div className="xp-s">
          {this.state.interestList.map((xp) => (
            <div className="xp">
              <SvgReactIcon icons={xp.icons} text={xp.name} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  private getDateInFormat(date: Date | null): string {
    if (date == null) {
      return "Present";
    }

    const month: string = (date.getMonth() + 1).toString();
    return (date.getMonth() < 9 ? "0" : "") + month + "." + date.getFullYear();
  }

  private getPublicUrl(url: string): string {
    const slash = url[0] == "/" ? "" : "/";

    return process.env.PUBLIC_URL + slash + url;
  }

  private createRef = (ref: string): string => {
    return "#" + ref;
  };

  render() {
    return (
      <div className="controller">
        <div className="container">
          <div className="navigation">
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
          <div className="content">
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
}
