import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../../../../utils/constants";
import SvgReactIcon from "../../../../design/svg-react-icon";
import { HistoryEntry, PlacePeriod } from "../../content/base-history";
import profileContent from "../../content/profile";
import { TextLinkProvider } from "../../content/text-link-provider";
import SkillBarStack from "./skill-bar-stack";
import React, { useEffect, useRef, useState } from "react";
import { createLinkRef, getTimeIntervalInFormat, toBreakLine } from "../base-controller-utils";
import { NOW } from "../../../../../utils/date-util";
import translate from "../../../../../i18n/locale-service";
import skillContent, { Skill } from "../../content/skill";
import interestContent from "../../content/interest";
import jobContent from "../../content/job";
import educationContent from "../../content/education";

const DetailController = () => {
  const [collapseJobs, setCollapseJobs] = useState(true);
  const [collapseEducations, setCollapseEducations] = useState(true);

  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
  });

  const renderProfile = () => {
    return (
      <div className="info">
        <h2 className="title">{ profileContent.name }</h2>
        { profileContent.description }
      </div>
    );
  };

  const renderXpContent = (xps: HistoryEntry[], isJob: boolean) => {
    let title: string, mainCollapse: boolean;
    if (isJob) {
      title = translate("job-experience");
      mainCollapse = collapseJobs;
    } else {
      title = translate("education");
      mainCollapse = collapseEducations;
    }

    const cards = xps.map((xp: HistoryEntry) => <Card
      id={ xp.id }
      key={ xp.id }
      description={ xp.description }
      placePeriods={ xp.placePeriods }
      titles={ toBreakLine(xp.titles) }
      mainCollapse={ mainCollapse }
      collapse={ xp.collapse }
      isMounted={ isMounted.current }/>
    );

    const collapseClassName = mainCollapse ? "show" : undefined;
    return (
      <div className="info">
        <h3 onClick={ () => isJob ? setCollapseJobs(!collapseJobs) : setCollapseEducations(!collapseEducations) }
            className="title">
          <p>{ title }</p>
          <FontAwesomeIcon icon={ faAngleUp } className={ collapseClassName }/>
        </h3>
        { cards }
      </div>
    );
  };

  const renderSkillContent = () => {
    const skillList = skillContent;
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

    const createSkillCard = (xp: Skill, minDateTime: number, maxDateTime: number) => {
      return (
        <div className="card" key={ xp.names.toString() }>
          <h4>{ xp.names }</h4>
          <SkillBarStack key={ xp.names.toString() } skill={ xp } minDateTime={ minDateTime }
                         maxDateTime={ maxDateTime }/>
          { xp.frameworks && <span className="frameworks">({ xp.frameworks })</span> }
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
    const interestList = interestContent;
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
          { renderXpContent(jobContent, true) }
          { renderXpContent(educationContent, false) }
          { renderSkillContent() }
          { renderInterestContent() }
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  id: string;
  description: React.JSX.Element;
  placePeriods: PlacePeriod[];
  titles: React.JSX.Element;
  mainCollapse: boolean;
  collapse?: boolean;
  isMounted: boolean;
}

const Card = (props: CardProps) => {
  const [collapse, setCollapse] = useState(props.collapse);
  useEffect(() => {
    if (!props.isMounted) {
      return;
    }

    setCollapse(props.mainCollapse);
  }, [props.mainCollapse]);

  const renderPeriodPlaces = () => {
    return (
      <div id={ props.id } className="date-company">
        { props.placePeriods.map((placePeriod: PlacePeriod) => (
          <div key={ placePeriod.place }>
            <h5
              className="date-company-text time">{ getTimeIntervalInFormat(placePeriod.timeStart, placePeriod.timeEnd) }</h5>
            <h5 className="date-company-text company">{ TextLinkProvider.load([placePeriod.place]) }</h5>
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
          <div>{ props.titles }</div>
          <FontAwesomeIcon icon={ faAngleUp } className={ collapseClassName }
                           onClick={ () => handleDropdownShrunk(1000) }/>
        </h4>
        <h5
          className="date-company-text place">{ TextLinkProvider.load(props.placePeriods.flatMap(place => place.cities)) }</h5>
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
