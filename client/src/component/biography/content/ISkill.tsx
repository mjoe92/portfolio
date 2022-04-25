export default interface ISkill {
  name: string;
  level: number;
  timeStart?: Date;
}

export const skillContent: ISkill[] = [
  {
    name: "HTML",
    level: 75,
  },
  {
    name: "CSS",
    level: 70,
  },
  {
    name: "Typescript",
    level: 30,
  },
  {
    name: "Java",
    level: 50,
  },
  {
    name: "Javascript",
    level: 20,
  },
  {
    name: "VBA",
    level: 50,
  },
  {
    name: "Python",
    level: 10,
  },
];
