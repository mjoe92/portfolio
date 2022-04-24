import {
  faCookie,
  faDumbbell,
  faGear,
  faKeyboard,
  faLanguage,
  faPhotoFilm,
  faRunning,
  faSkiing,
  faSwimmer,
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import SvgReactIcon from "../icon/SvgReactIcon";
import { Level } from "./content/ELevel";
import IContact, { contactContent } from "./content/IContact";
import IEducation, { educationContent } from "./content/IEducation";
import IExperience, { experienceContent } from "./content/IExperience";
import IInterest, { interestContent } from "./content/IInterest";
import ILanguage, { languageContent } from "./content/ILanguage";
import IProfile from "./content/IProfile";
import ISkill from "./content/ISkill";

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
      contactList: contactContent,
      jobList: experienceContent,
      educationList: educationContent,
      languageList: languageContent,
      interestList: interestContent,
    };
  }

  private renderContactList(): JSX.Element {
    if (this.state.contactList == null) {
      return <></>;
    }

    return (
      <div className="anchor-point contact-info">
        <h3 className="title">Contact Info</h3>
        <ul>
          {this.state.contactList.map((contact) => (
            <li>
              <SvgReactIcon
                icons={[contact.icon]}
                text={contact.text}
                startWithIcon={true}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private renderInterestList(): JSX.Element {
    if (this.state.interestList == null) {
      return <></>;
    }

    return (
      <div className="about interest">
        <h2 className="title">Interest</h2>
        <ul>
          {this.state.interestList.map((interest) => (
            <li>
              <SvgReactIcon icons={interest.icons} text={interest.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private renderJobList(): JSX.Element {
    if (this.state.jobList == null) {
      return <></>;
    }

    return (
      <div className="anchor-point experience">
        <h3 className="title">Experience</h3>
        <ul>
          {this.state.jobList.map((xp) => (
            <li>
              <h5>
                {this.getDateInFormat(xp.timeStart) +
                  " - " +
                  this.getDateInFormat(xp.timeEnd)}
              </h5>
              <h4>{xp.title}</h4>
              <h4>{xp.employer}</h4>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private renderEducationList(): JSX.Element {
    if (this.state.educationList == null) {
      return <></>;
    }

    return (
      <div className="anchor-point education">
        <h3 className="title">Education</h3>
        <ul>
          {this.state.educationList.map((xp) => (
            <li>
              <h5>
                {this.getDateInFormat(xp.timeStart) +
                  " - " +
                  this.getDateInFormat(xp.timeEnd)}
              </h5>
              <h4>{xp.title}</h4>
              <h4>{xp.institution}</h4>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private renderLanguageList(): JSX.Element {
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
      <div className="anchor-point language">
        <h3 className="title">Language</h3>
        <ul>
          {this.state.languageList.map((xp) => (
            <li>
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
            </li>
          ))}
        </ul>
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

  render() {
    return (
      <div className="controller">
        <div className="container">
          <div className="navigation">
            <div className="profile-text">
              <div className="img-box">
                <img src="/public/images/profile/like_robert_de_niro.jpg" />
              </div>
              <h2>
                Jozsef Csurgai
                <br />
                <span>Fullstack Developer</span>
              </h2>
            </div>

            <>{this.renderContactList()}</>
            <>{this.renderJobList()}</>
            <>{this.renderEducationList()}</>
            <>{this.renderLanguageList()}</>
          </div>
          <div className="content">
            <div className="about">
              <h2 className="title">Profile</h2>
              <p>
                Currently I'm searching opportunities in webdesigning and
                application developing. I'm originally a mechanical engineer,
                working as an experienced construction engineer for over 5 years
                and also taking side projects in VBA programming for automatize
                monotonous, lumberjack processes as a hobby. Now, I'm looking
                forward to gain more experience in webdeveloping for my karrier.
                I learned Java developing at Codecool to a junior level with
                basics of HTML / CSS and JS languages. My main task is to become
                a fullstack developer. Achiving both frontend and backend with
                the most necessary up-to-date frameworks and APIs in order to be
                always successful at my job. Some of my programming skills with
                examples: https://www.codewars.com/users/mjoe92
                https://github.com/mjoe92?tab=repositories
              </p>
            </div>
            <div className="about">
              <h2 className="title">Experience</h2>
              <div className="card">
                <div className="date-company">
                  <h5>2021.09 - Present</h5>
                  <h5>Bredex GmbH</h5>
                </div>
                <div className="timeline">
                  <span className="branch-up"></span>
                  <span className="rounder"></span>
                  <span className="branch-down"></span>
                </div>
                <div className="text">
                  <h4>Junior Fullstack java Developer</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="date-company">
                  <h5>2020.10 - 2021.03</h5>
                  <h5>Bredex GmbH</h5>
                </div>
                <div className="timeline">
                  <span className="branch-up"></span>
                  <span className="rounder"></span>
                  <span className="branch-down"></span>
                </div>
                <div className="text">
                  <h4>Junior Fullstack java Developer</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="date-company">
                  <h5>2021.09 - Present</h5>
                  <h5>Bredex GmbH</h5>
                </div>
                <div className="timeline">
                  <span className="branch-up"></span>
                  <span className="rounder"></span>
                  <span className="branch-down"></span>
                </div>
                <div className="text">
                  <h4>Junior Fullstack java Developer</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="about l-skills">
              <h2 className="title">Professional L-Skills</h2>
              <div className="card">
                <h4>Html</h4>
                <div className="percent">
                  <div style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="card">
                <h4>CSS</h4>
                <div className="percent">
                  <div style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="card">
                <h4>Typescript</h4>
                <div className="percent">
                  <div style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="card">
                <h4>Java</h4>
                <div className="percent">
                  <div style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="card">
                <h4>Javascript</h4>
                <div className="percent">
                  <div style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="card">
                <h4>VBA</h4>
                <div className="percent">
                  <div style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="card">
                <h4>Python</h4>
                <div className="percent">
                  <div style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>

            <>{this.renderInterestList()}</>
          </div>
        </div>
      </div>
    );
  }
}
