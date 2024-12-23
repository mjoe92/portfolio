export default interface ISkill {
  name: string;
  timeStart: Date;
  frameworks?: string[];
  timeEnd?: Date;
  hide?: boolean;
}

export const skillContent: ISkill[] = [
  {
    name: "HTML, CSS",
    timeStart: new Date(2020, 4),
    frameworks: ["SASS", "SCSS"],
  },
  {
    name: "Typescript",
    timeStart: new Date(2021, 10),
    frameworks: ["Angular", "React"],
  },
  {
    name: "Java",
    timeStart: new Date(2020, 10),
    frameworks: ["FX", "Spring", "Hessian", "Hibernate", "JPA"],
  },
  {
    name: "Javascript",
    timeStart: new Date(2020, 4),
    timeEnd: new Date(2021, 9),
    frameworks: ["jQuery"],
  },
  {
    name: "VBA",
    timeStart: new Date(2016, 3),
    timeEnd: new Date(2020, 3),
  },
];
