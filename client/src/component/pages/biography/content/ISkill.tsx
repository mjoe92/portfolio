export default interface ISkill {
  name: string;
  timeStart: Date;
  timeEnd?: Date;
  hide?: boolean;
}

export const skillContent: ISkill[] = [
  {
    name: "HTML",
    timeStart: new Date(2020, 4),
  },
  {
    name: "CSS",
    timeStart: new Date(2020, 4),
  },
  {
    name: "Typescript",
    timeStart: new Date(2021, 10),
  },
  {
    name: "Java",
    timeStart: new Date(2020, 10),
  },
  {
    name: "Javascript",
    timeStart: new Date(2020, 4),
    timeEnd: new Date(2021, 9),
  },
  {
    name: "VBA",
    timeStart: new Date(2016, 3),
    timeEnd: new Date(2020, 3),
  },
  {
    name: "Python",
    timeStart: new Date(2018, 6),
    hide: true,
  },
];
