export default interface ISkill {
  name: string;
  level: number;
  timeStart: Date;
  timeEnd?: Date;
}

export const skillContent: ISkill[] = [
  {
    name: "HTML",
    level: 75,
    timeStart: new Date(2020, 5),
  },
  {
    name: "CSS",
    level: 70,
    timeStart: new Date(2020, 5),
  },
  {
    name: "Typescript",
    level: 30,
    timeStart: new Date(2022, 3),
  },
  {
    name: "Java",
    level: 50,
    timeStart: new Date(2021, 9),
  },
  {
    name: "Javascript",
    level: 20,
    timeStart: new Date(2020, 5),
  },
  {
    name: "VBA",
    level: 50,
    timeStart: new Date(2016, 3),
    timeEnd: new Date(2020, 3),
  },
  {
    name: "Python",
    level: 10,
    timeStart: new Date(2018, 6),
  },
];
