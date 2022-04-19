import AbstractContent from "./AContent";
import { Field } from "./EField";

export default interface IEducation extends AbstractContent {
  institution: string;
}

export const educationContent: IEducation[] = [
  {
    title: "Java Enterprise Backend Developer",
    institution: "Codecool",
    timeStart: new Date(2021, 5),
    timeEnd: new Date(2021, 8),
    description: "",
    field: Field.P,
  },
  {
    title: "Java Backend Developer",
    institution: "Codecool",
    timeStart: new Date(2020, 0),
    timeEnd: new Date(2021, 2),
    description: "",
    field: Field.P,
  },
  {
    title: "Óbudai University",
    institution: "Mechatronics MSc",
    timeStart: new Date(2016, 8),
    timeEnd: new Date(2019, 0),
    description: "",
    field: Field.E,
  },
  {
    title: "NCT Four- and Five-axis Programming Technology",
    institution: "NCT Academy",
    timeStart: new Date(2015, 10),
    timeEnd: new Date(2016, 7),
    description: "",
    field: Field.M,
  },
  {
    title: "CAD/CAM, CNC Programming Technology",
    institution: "NCT Academy",
    timeStart: new Date(2015, 2),
    timeEnd: new Date(2015, 10),
    description: "",
    field: Field.M,
  },
  {
    title: "Mechanical Engineering BSc",
    institution: "Budapest University of Technology and Economics",
    timeStart: new Date(2011, 8),
    timeEnd: new Date(2016, 5),
    description: "",
    field: Field.E,
  },
];
