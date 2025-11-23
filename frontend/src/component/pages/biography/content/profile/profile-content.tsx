import { NOW } from "../../../../../utils/date-util";
import React from "react";
import { Trans } from "react-i18next";
import { t } from "i18next";

export interface IProfile {
  name: string;
  description: React.JSX.Element;
}

const calculateAge = (): number => {
  const timeDiff = Math.abs(NOW.getTime() - new Date(1992, 1, 18).getTime());
  return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
};

const myProfileContent = (): IProfile => ({
  name: t(`profile`),
  description: (
    <>
      <p><Trans i18nKey="profile-description-1" values={ { 0: calculateAge() } }/></p>
      <p><Trans i18nKey="profile-description-2"/></p>
      <p><Trans i18nKey="profile-description-3"/></p>
    </>
  )
});

export default myProfileContent;