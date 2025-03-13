import translate from "../../../../i18n/locale-service"; 

export default interface Skill {
  names: string[];
  intervals: Interval[];
  frameworks?: string[];
  hide?: boolean;
}

export interface Interval {
  startTime: Date;
  endTime?: Date;
}

const translateSkills = (...keys: string[]): string[] => {
  return keys.map(key => translate(key));
}

export const skillContent: Skill[] = [
  {
    names: translateSkills("html", "css"),
    intervals: [
      {
        startTime: new Date(2020, 4),
      },
    ],
    frameworks: translateSkills("sass", "scss", "bootstrap"),
  },
  {
    names: translateSkills("typescript"),
    intervals: [
      {
        startTime: new Date(2021, 10),
      },
    ],
    frameworks: translateSkills("angular", "react", "prime-ng", "ag-grid"),
  },
  {
    names: translateSkills("java"),
    intervals: [
      {
        startTime: new Date(2020, 7),
      },
    ],
    frameworks: translateSkills(
      "fx",
      "spring",
      "hessian",
      "hibernate",
      "jpa",
      "lombok",
      "log4j",
      "swagger",
      "quartz-scheduler",
      "apache-poi",
    ),
  },
  {
    names: translateSkills("sql"),
    intervals: [
      {
        startTime: new Date(2021, 0),
      },
    ],
    frameworks: translateSkills("postgresql", "my-sql", "oracle"),
  },
  {
    names: translateSkills("javascript"),
    intervals: [
      {
        startTime: new Date(2020, 4),
        endTime: new Date(2021, 9),
      },
      {
        startTime: new Date(2023, 8),
      },
    ],
    frameworks: translateSkills("jquery", "jasmine", "karma"),
  },
  {
    names: translateSkills("vba"),
    intervals: [
      {
        startTime: new Date(2016, 3),
        endTime: new Date(2020, 3),
      },
    ],
  },
  {
    names: translateSkills("xml", "xml-schema", "xslt"),
    intervals: [
      {
        startTime: new Date(2021, 0),
      },
    ],
    frameworks: translateSkills("maven", "apache-fop", "jaxb", "jinx"),
  },
];
