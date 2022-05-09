import AbstractIHistory from "./AIContent";
import { Field } from "./EField";

export default interface IExperience extends AbstractIHistory {
  employer: string;
}

export const experienceContent: IExperience[] = [
  {
    id: "bredex",
    title: "Junior Fullstack Java Developer",
    employer: "Bredex GmbH",
    timeStart: new Date(2021, 8),
    timeEnd: null,
    description: "",
    field: Field.P,
  },
  {
    id: "innostudio",
    title: "Mechanical Engineer",
    employer: "InnoStudio Inc.",
    timeStart: new Date(2020, 8),
    timeEnd: new Date(2021, 2),
    description: "",
    field: Field.E,
  },
  {
    id: "mirrotron",
    title: "Construction Engineer",
    employer: "Mirrotron Ltd.",
    timeStart: new Date(2019, 0),
    timeEnd: new Date(2020, 3),
    description: "",
    field: Field.M,
  },
  {
    id: "cg",
    title: "Construction Engineer",
    employer: "CG Electric Systems Hungary Zrt.",
    timeStart: new Date(2018, 0),
    timeEnd: new Date(2018, 8),
    description:
      "I was responsible for:\n" +
      "- Creating models, drawings and part list of a transformer steel assembly in NX\n" +
      "- Improving inner requirements and 'standard' drawings for better and faster work\n" +
      "- Making functions and smart apps linking between model attributes and excel drawings\n" +
      "- Creating programs and macros in Excel VBA",
    field: Field.M,
  },
  {
    id: "ganz",
    title: "Mechanical Project Engineer",
    employer: "Ganz Engineering and Energetics Machinery Ltd.",
    timeStart: new Date(2016, 9),
    timeEnd: new Date(2017, 11),
    description:
      "As a mechanical engineer, my first duties were bounded strictly to designing water pump units for NPP-s at the beginning" +
      " (esp. for Rostov, Belorus and Kudankulam Nuclear Power Plant) then my work slightly extended with managing producing schedules," +
      " quality plans and organising meetings for discussing global technical issues with Russian engineer groups.\n" +
      "Basicly, I was responsible for:\n" +
      "- Designing water pumps and extended water supply systems for units in Solidworks, KOMPAS-3D CAD systems\n" +
      "- Correcting technical issues by comments of suppliers\n" +
      "- Oral translating between Hungarian and Russian engineer/sales groups",
    field: Field.E,
  },
];
