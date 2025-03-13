import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../../../../utils/constants";
import SvgReactIcon from "../../../../design/svg-react-icon";
import { HistoryEntry, PlacePeriod } from "../../content/base-history";
import { profileContent } from "../../content/profile";
import Skill from "../../content/skill";
import { TextLinkProvider } from "../../content/text-link-provider";
import { GeneralHistory } from "../../content/general-history";
import SkillBarStack from "./skill-bar-stack";
import React, { useState } from "react";
import { createLinkRef, getTimeIntervalInFormat, toBreakLine } from "../base-controller-utils";
import { NOW } from "../../../../../utils/date-util";
import translate from "../../../../../i18n/locale-service";

const DetailController = ({ jobList, educationList, skillList, interestList }: GeneralHistory) => {
  const renderProfile = () => {
    return (
      <div className="info">
        <h2 className="title">{ profileContent.name }</h2>
        { profileContent.description }
      </div>
    );
  };

  const renderXpContent = (xps: HistoryEntry[], title: string) => {
    return (
      <div className="info">
        <h2 className="title">{ title }</h2>
        { xps.map((xp: HistoryEntry) => (
          <Card
            id={ xp.id }
            key={ xp.id }
            description={ xp.description }
            placePeriods={ xp.placePeriods }
            xpNames={ toBreakLine(xp.titles) }
            collapse={ xp.collapse }
          />
        )) }
      </div>
    );
  };

  const renderSkillContent = () => {
    if (!skillList) {
      return null;
    }

    const startDateTimes = skillList
    .flatMap((skill) => skill.intervals)
    .map((interval) => interval.startTime.getTime());
    const minDateTime = Math.min(...startDateTimes);

    const endDateTimes = skillList
    .flatMap((skill) => skill.intervals)
    .map((interval) => (interval.endTime ? interval.endTime.getTime() : NOW.getTime()));
    const maxDateTime = Math.max(...endDateTimes);

    const joinedTranslatedNames = (names: string[]) => names.map((name) => translate(name)).join(Constants.COMMA_SPACE);

    const createSkillCard = (xp: Skill, minDateTime: number, maxDateTime: number) => {
      return (
        <div className="card" key={ xp.names.toString() }>
          <h4>{ joinedTranslatedNames(xp.names) }</h4>
          <SkillBarStack key={ xp.names.toString() } skill={ xp } minDateTime={ minDateTime }
                         maxDateTime={ maxDateTime }/>
          { xp.frameworks && <span className="frameworks">({ xp.frameworks.join(Constants.COMMA_SPACE) })</span> }
        </div>
      );
    };

    return (
      <div className="info hard-skills">
        <h2 className="title">Hard Skills</h2>
        { skillList.filter((skill) => !skill.hide || skill.intervals)
        .sort((first, next) => next.intervals[0].startTime.getTime() - first.intervals[0].startTime.getTime())
        .map((xp) => createSkillCard(xp, minDateTime, maxDateTime)) }
      </div>
    );
  };

  const renderInterestContent = () => {
    if (!interestList) {
      return null;
    }

    return (
      <div className="info interest">
        <h2 className="title">{ translate("interest") }</h2>
        <div className="xp-s">
          { interestList.map((xp) => (
            <div className="xp" key={ xp.name }>
              <SvgReactIcon key={ xp.name } icons={ xp.icons } description={ <h4>{ xp.name }</h4> }/>
            </div>
          )) }
        </div>
      </div>
    );
  };

  return (
    <div className="sub-container detail protected">
      <div className="scroll scroll-detail">
        <div className="about">
          { renderProfile() }
          { renderXpContent(jobList, translate("job-experience")) }
          { renderXpContent(educationList, translate("education")) }
          { renderSkillContent() }
          { renderInterestContent() }
        </div>
      </div>
    </div>
  );
};

interface ICardProps {
  id: string;
  description: React.JSX.Element;
  placePeriods: PlacePeriod[];
  xpNames: React.JSX.Element;
  collapse?: boolean;
}

const Card = (props: ICardProps) => {
  const [collapse, setCollapse] = useState(props.collapse);

  const renderPeriodPlaces = () => {
    return (
      <div id={ props.id } className="date-company">
        { props.placePeriods.map((placePeriod: PlacePeriod) => (
          <div key={ placePeriod.place }>
            <h5>{ getTimeIntervalInFormat(placePeriod.timeStart, placePeriod.timeEnd) }</h5>
            <h5>{ TextLinkProvider.load([placePeriod.place]) }</h5>
          </div>
        )) }
      </div>
    );
  };

  const renderBranch = () => {
    return (
      <div className="branch">
        <span className="branch-up"></span>
        <a href={ createLinkRef(props.id, Constants.HASHTAG, "navigation") }>
          <span
            className={ "rounder" + (collapse ? Constants.SPACE + "active" : Constants.EMPTY) }
            onClick={ () => handleCardDropdown() }
          />
        </a>
        <span className="branch-down"></span>
      </div>
    );
  };

  const renderText = () => {
    const collapseClassName = collapse ? "show" : undefined;

    return (
      <div className="text">
        <h4>
          <div>{ props.xpNames }</div>
          <FontAwesomeIcon icon={ faAngleUp } className={ collapseClassName }
                           onClick={ () => handleDropdownShrunk(1000) }/>
        </h4>
        <div id={ props.id } className={ `card-detail ${ collapseClassName }` }>
          { props.description }
          <span className="show-right-branch"/>
        </div>
      </div>
    );
  };

  const handleDropdownShrunk = (minWidth: number) => {
    const windowWidth = window.innerWidth;

    if (windowWidth > minWidth) {
      return;
    }

    handleCardDropdown();
  };

  const handleCardDropdown = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="card">
      <span id={ createLinkRef(props.id, null, "detail") } className="anchor-jump"></span>
      { renderPeriodPlaces() }
      { renderBranch() }
      { renderText() }
    </div>
  );
};

export default DetailController;
