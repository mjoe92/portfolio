export default interface ISkill {
  name: string;
  intervals: Interval[];
  frameworks?: string[];
  hide?: boolean;
}

export interface Interval {
  startTime: Date;
  endTime?: Date;
}

export const skillContent: ISkill[] = [
  {
    name: "HTML, CSS",
    intervals: [
      {
        startTime: new Date(2020, 4),
      },
    ],
    frameworks: ["SASS", "SCSS", "Bootstrap"],
  },
  {
    name: "Typescript",
    intervals: [
      {
        startTime: new Date(2021, 10),
      },
    ],
    frameworks: ["Angular", "React", "PrimeNG", "AG-Grid"],
  },
  {
    name: "Java",
    intervals: [
      {
        startTime: new Date(2020, 7),
      },
    ],
    frameworks: [
      "FX",
      "Spring",
      "Hessian",
      "Hibernate",
      "JPA",
      "Lombok",
      "Log4J",
      "Swagger",
      "Quartz Scheduler",
      "Apache POI",
    ],
  },
  {
    name: "SQL",
    intervals: [
      {
        startTime: new Date(2021, 0),
      },
    ],
    frameworks: ["PostgreSQL, MySQL, Oracle"],
  },
  {
    name: "JavaScript",
    intervals: [
      {
        startTime: new Date(2020, 4),
        endTime: new Date(2021, 9),
      },
      {
        startTime: new Date(2023, 8),
      },
    ],
    frameworks: ["jQuery", "Jasmine", "Karma"],
  },
  {
    name: "VBA",
    intervals: [
      {
        startTime: new Date(2016, 3),
        endTime: new Date(2020, 3),
      },
    ],
  },
  {
    name: "XML, XML-Schema, XSLT",
    intervals: [
      {
        startTime: new Date(2021, 0),
      },
    ],
    frameworks: ["Maven", "Apache FOP", "JAXB", "JINX"],
  },
];
