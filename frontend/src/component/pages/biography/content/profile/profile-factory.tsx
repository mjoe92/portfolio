import profileData from "./profile-data.json";
import { ProfileInput, ProfileVo } from "./profile";
import React from "react";
import { TextLinkProvider } from "../text-link-provider";
import { Trans } from "react-i18next";
import { NOW } from "../../../../../utils/date-util";

const profileFactory = (input: ProfileInput): ProfileVo => {
  const calculateAge = (timeEnd: Date, timeStart: Date): number => {
    const timeDiff = Math.abs(timeEnd.getTime() - timeStart.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  };

  const birthDate = new Date(input.birth.timeStart);
  const age = calculateAge(NOW, birthDate);
  return {
    name: input.name,
    birth: {
      cities: input.birth.cities as TextLinkProvider.City[],
      timeStart: birthDate
    },
    living: {
      cities: input.living.cities as TextLinkProvider.City[],
      timeStart: new Date(input.living.timeStart)
    },
    phone: input.phone,
    email: input.email,
    github: input.github,
    description: (
      <>
        <p><Trans i18nKey="profile-description-1"
                  values={ { 0: age } }/></p>
        <p><Trans i18nKey="profile-description-2"/></p>
        <p><Trans i18nKey="profile-description-3"/></p>
      </>
    )
  };
};

export const myProfileContent = profileFactory(profileData);
