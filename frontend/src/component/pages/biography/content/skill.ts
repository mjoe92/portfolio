import {TextLinkProvider} from "./text-link-provider"; 
import React from "react"; 
import Website = TextLinkProvider.Website; 
import { t } from "i18next";

export interface Skill {
  names: React.JSX.Element | string;
  intervals: Interval[];
  frameworks?: React.JSX.Element;
  hide?: boolean;
}

export interface Interval {
  startTime: Date;
  endTime?: Date;
}

const createLinksWithTranslations = (...keys: Website[]): React.JSX.Element => {
  return TextLinkProvider.load(keys, true);
}

const skillContent = (): Skill[] => [
  {
    names: createLinksWithTranslations(Website.HTML, Website.CSS),
    intervals: [
      {
        startTime: new Date(2020, 4),
      },
    ],
    frameworks: createLinksWithTranslations(Website.SASS, Website.SCSS, Website.BOOTSTRAP),
  },
  {
    names: createLinksWithTranslations(Website.TYPESCRIPT),
    intervals: [
      {
        startTime: new Date(2021, 10),
      },
    ],
    frameworks: createLinksWithTranslations(Website.ANGULAR, Website.REACT, Website.PRIMENG, Website.AG_GRID),
  },
  {
    names: createLinksWithTranslations(Website.JAVA),
    intervals: [
      {
        startTime: new Date(2020, 7),
      },
    ],
    frameworks: createLinksWithTranslations(
      Website.FX,
      Website.SPRING,
      Website.HESSIAN,
      Website.HIBERNATE,
      Website.JPA,
      Website.LOMBOK,
      Website.LOG4J,
      Website.SWAGGER,
      Website.QUARTZ_SCHEDULER,
      Website.APACHE_POI,
      Website.APACHE_PDFBOX
    ),
  },
  {
    names: createLinksWithTranslations(Website.SQL),
    intervals: [
      {
        startTime: new Date(2021, 0),
      },
    ],
    frameworks: createLinksWithTranslations(Website.POSTGRE_SQL, Website.MY_SQL, Website.ORACLE),
  },
  {
    names: createLinksWithTranslations(Website.JAVASCRIPT),
    intervals: [
      {
        startTime: new Date(2020, 4),
        endTime: new Date(2021, 9),
      },
      {
        startTime: new Date(2023, 8),
      },
    ],
    frameworks: createLinksWithTranslations(Website.JQUERY, Website.JASMINE, Website.KARMA),
  },
  {
    names: createLinksWithTranslations(Website.VBA),
    intervals: [
      {
        startTime: new Date(2016, 3),
        endTime: new Date(2020, 3),
      },
    ],
  },
  {
    names: createLinksWithTranslations(Website.XML, Website.XML_SCHEMA, Website.XSLT),
    intervals: [
      {
        startTime: new Date(2021, 0),
      },
    ],
    frameworks: createLinksWithTranslations(Website.MAVEN, Website.GRADLE, Website.APACHE_FOP, Website.JAXB, Website.JINX),
  },
  {
    names: t("cloud-engineering"),
    intervals: [
      {
        startTime: new Date(2024, 0),
      },
    ],
    frameworks: createLinksWithTranslations(Website.AZURE),
  },
  {
    names: t("deploy-platform"),
    intervals: [
      {
        startTime: new Date(2023, 6),
      },
    ],
    frameworks: createLinksWithTranslations(Website.OCP_FULL, Website.GITHUB, Website.GITLAB, Website.RENDER, Website.VERCEL, Website.NEON),
  },
];

export default skillContent;
