import { TextLinkProvider } from "./text-link-provider"; 
import React from "react"; 

import Website = TextLinkProvider.Website;

export interface Skill {
  names: React.JSX.Element;
  intervals: Interval[];
  frameworks?: React.JSX.Element;
  hide?: boolean;
}

export interface Interval {
  startTime: Date;
  endTime?: Date;
}

const createLinksWithTranslations = (...keys: Website[]) => {
  return TextLinkProvider.load(keys, true);
}

const skillContent: Skill[] = [
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
    frameworks: createLinksWithTranslations(Website.MAVEN, Website.APACHE_FOP, Website.JAXB, Website.JINX),
  },
];

export default skillContent;
