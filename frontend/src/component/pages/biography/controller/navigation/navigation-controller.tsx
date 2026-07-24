import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import { Constants } from "../../../../../utils/constants";
import SvgReactIcon from "../../../../design/svg-react-icon";
import { Level } from "../../content/level";
import { FileUrlResolver, FolderType } from "../../../../../utils/file-url-resolver";
import { HistoryEntry } from "../../content/base-history";
import { createLinkRef, getTimeIntervalInFormat, toBreakLine } from "../base-controller-utils";
import languageContent from "../../content/language";
import { useTranslation } from "react-i18next";
import { contactNavigation } from "../../content/contact/contact-factory";

const NavigationController = (props: { jobs: HistoryEntry[], courses: HistoryEntry[] }) => {
  const [collapseJob, setCollapseJob] = useState(true);
  const [collapseEducation, setCollapseEducation] = useState(true);

  const { t } = useTranslation();

  const handleDropdownShrunk = useCallback(
    (isJob: boolean) => isJob ? setCollapseJob(!collapseJob) : setCollapseEducation(!collapseEducation),
    [collapseJob, collapseEducation]
  );

  const renderProfile = () => (
    <div className="profile-text">
      <div className="img-box">
        <img src={ FileUrlResolver.load(FolderType.IMAGE, "profile-picture") } alt="profile face"/>
      </div>
      <h2>
        { t("me") }
        <br/>
        <span>
          { t("full-stack") } { t("developer") }
        </span>
      </h2>
    </div>
  );

  const renderContact = () => {
    const contactList = contactNavigation();
    if (!contactList) {
      return null;
    }

    return (
      <div className="navigation-point contact-info">
        <h3 className="title">{ t("contact") }</h3>
        <div className="contacts">
          { contactList.filter((contact) => !contact.disabled)
          .map((contact) => (
            <SvgReactIcon key={ contact.name } icons={ [contact.icon] } description={ contact.text }
                          startWithIcon={ true }/>
          )) }
        </div>
      </div>
    );
  };

  const renderContentNavigation = (isJobExperience: boolean) => {
    const xpList: HistoryEntry[] = isJobExperience ? props.jobs : props.courses;
    const title: string = isJobExperience ? t("job-experience") : t("education");
    const collapse: boolean = isJobExperience ? collapseJob : collapseEducation;

    const navigationCard = (xp: HistoryEntry) => {
      const startDates: Date[] = xp.placePeriods.map((period) => period.timeStart);
      const minDate: Date = startDates.reduce((first, next) => (first < next ? first : next));

      const endDates: (Date | undefined)[] = xp.placePeriods.map((period) => period.timeEnd);
      const maxDate: Date | undefined = endDates.reduce((a, b) => (a && b ? (a > b ? a : b) : a && b));

      const places = xp.placePeriods.map((period) => t(period.place)).join(Constants.COMMA_SPACE);

      return (
        <a key={ xp.id } href={ createLinkRef(xp.id, Constants.HASHTAG, "detail") }>
          <span id={ createLinkRef(xp.id, null, "navigation") } className="anchor-jump"/>
          <div className="xp">
            <h5>{ getTimeIntervalInFormat(minDate, maxDate) }</h5>
            <h4>{ toBreakLine(xp.titles) }</h4>
            <h4 className="company">{ places }</h4>
          </div>
        </a>
      );
    };

    return (
      <div className="navigation-point experience">
        <h3 onClick={ () => handleDropdownShrunk(isJobExperience) } className="title collapse-card">
          <p>{ title }</p>
          <FontAwesomeIcon icon={ faAngleUp } className={ collapse ? "show" : undefined }/>
        </h3>
        <div className={ collapse ? "xp-s show-dropdown" : "xp-s" }>
          { xpList.map((xp: HistoryEntry) => navigationCard(xp)) }
        </div>
      </div>
    );
  };

  const renderLanguage = () => {
    const languageList = languageContent;
    if (!languageList) {
      return null;
    }

    const getPrefixLevel = (oralLevel: Level, writeLevel?: Level): string | null => {
      if (!oralLevel && !writeLevel) {
        return null;
      }

      const oralResult = writeLevel
        ? Level[oralLevel] + Constants.SPACE_SLASH_SPACE + Level[writeLevel]
        : Level[oralLevel];
      return Constants.PARENTHESIS_LEFT + oralResult + Constants.PARENTHESIS_RIGHT;
    };

    const getPercentOfLevel = (oralLevel: Level, writeLevel?: Level): number => {
      return (100 * (oralLevel + (writeLevel ?? oralLevel))) / Object.keys(Level).length;
    };

    return (
      <div className="navigation-point language">
        <h3 className="title">{ t("language") }</h3>
        <div className="xp-s">
          { languageList.filter((xp) => !xp.disabled)
          .map((xp) => (
            <div className="xp" key={ xp.key.toLowerCase() }>
                <span className="text">
                  { t(xp.key) }
                  <span className="spec">{ getPrefixLevel(xp.oralLevel, xp.writeLevel) }</span>
                </span>
              <span className="percent">
                  <div
                    style={ { width: `${ getPercentOfLevel(xp.oralLevel, xp.writeLevel) }${ Constants.PERCENT }` } }/>
                </span>
            </div>
          )) }
        </div>
      </div>
    );
  };

  return (
    <div className="sub-container navigation protected">
      <div className="scroll scroll-navigation">
        <div className="about">
          { renderProfile() }
          { renderContact() }
          { renderContentNavigation(true) }
          { renderContentNavigation(false) }
          { renderLanguage() }
        </div>
      </div>
    </div>
  );
};

export default NavigationController;