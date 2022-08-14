import SvgReactIcon from "../../../design/SvgReactIcon";
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
        <p>{this.state.profile.description}</p>
      </div>
    );
  }

  private renderExperienceContent(): JSX.Element {
    if (this.state.jobList == null) {
      return <></>;
    }

    return (
      <div className="info">
        <h2 className="title">Experience</h2>
        {this.state.jobList.map((xp) => (
          <div className="card">
            <span id={xp.id + "-detail"} className="anchor-jump"></span>
            <div className="branch">
              <span className="branch-up"></span>
              <a href={this.createRef(xp.id + "-navigation")}>
                <span className="rounder"></span>
              </a>
              <span className="branch-down"></span>
            </div>
            <div id={xp.id} className="date-company card-right">
              <h5>{this.getTimeIntervalInFormat(xp.timeStart, xp.timeEnd)}</h5>
              <h5>{xp.employer}</h5>
            </div>
            <div className="text card-right">
              <h4>{xp.title}</h4>
              <div id={xp.id}>{xp.description}</div>
            </div>
          </div>
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
          <div className="card">
            <span id={xp.id + "-detail"} className="anchor-jump"></span>
            <div id={xp.id} className="date-company">
              <h5>{this.getTimeIntervalInFormat(xp.timeStart, xp.timeEnd)}</h5>
              <h5>{xp.institution}</h5>
            </div>
            <div className="branch">
              <span className="branch-up"></span>
              <a href={this.createRef(xp.id + "-navigation")}>
                <span className="rounder"></span>
              </a>
              <span className="branch-down"></span>
            </div>
            <div className="text">
              <h4>{xp.title}</h4>
              <div id={xp.id}>{xp.description}</div>
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
              <SvgReactIcon icons={xp.icons} description={<h4>{xp.name}</h4>} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
