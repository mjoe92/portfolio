import AbstractIHistory from "./AIHistory";
import { Field } from "./EField";

export default interface IExperience extends AbstractIHistory {
  employer: string;
}

//extends abbrevation meaning
export const experienceContent: IExperience[] = [
  {
    id: "bredex",
    title: "Junior Fullstack Java Developer",
    employer: "Bredex GmbH",
    timeStart: new Date(2021, 8),
    timeEnd: null,
    description:
      <div>
        <p>
          My first job as a programmer in an international but mostly in a 
          german environment with a Volkswagen related project. Technical stacks:
        </p>
        <ul>
          <p className="title">SERVER (BACKEND)</p>
          <li>Oracle SQL DB</li>
          <li>Java (Spring boot, Hibernate, JPA)</li>
          <li>Git VCS</li>
        </ul>
        <ul>
          <p className="title">CLIENT (FRONTEND)</p>
          <li>Java (FX)</li>
          <li>(F)XML, HTML, CSS</li>
          <li>Angular TS (WEB Client)</li>
        </ul>
        <ul>
          <p className="title">Soft skills</p>
          <li>Agile work (Scrum method)</li>
          <li>Manager tools - Atlassian boards (Jira, Bitbucket, Bamboo)</li>
        </ul>
      </div>
      ,
    field: Field.P,
  },
  {
    id: "innostudio",
    title: "Mechanical Engineer",
    employer: "InnoStudio Inc.",
    timeStart: new Date(2020, 8),
    timeEnd: new Date(2021, 2),
    description:
      <div>
        <p>

        </p>
      </div>
      ,
    field: Field.E,
  },
  {
    id: "mirrotron",
    title: "Construction Engineer",
    employer: "Mirrotron Ltd.",
    timeStart: new Date(2019, 0),
    timeEnd: new Date(2020, 3),
    description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia quas tenetur quibusdam facere veniam fugit repudiandae esse, nisi, laudantium numquam facilis officiis animi mollitia quod! Qui ad facilis libero!</p>,
    field: Field.M,
  },
  {
    id: "cg",
    title: "Construction Engineer",
    employer: "CG Electric Systems Hungary Zrt.",
    timeStart: new Date(2018, 0),
    timeEnd: new Date(2018, 8),
    description:<p>
      "I was responsible for:\n" +
      "- Creating models, drawings and part list of a transformer steel assembly in NX\n" +
      "- Improving inner requirements and 'standard' drawings for better and faster work\n" +
      "- Making functions and smart apps linking between model attributes and excel drawings\n" +
      "- Creating programs and macros in Excel VBA</p>,
    field: Field.M,
  },
  {
    id: "ganz",
    title: "Mechanical Project Engineer",
    employer: "Ganz Engineering and Energetics Machinery Ltd.",
    timeStart: new Date(2016, 9),
    timeEnd: new Date(2017, 11),
    description:
      <div>
        "As a mechanical engineer, my first duties were bounded strictly to designing water pump units for NPP-s at the beginning" +
        " (esp. for Rostov, Belorus and Kudankulam Nuclear Power Plant) then my work slightly extended with managing producing schedules," +
        " quality plans and organising meetings for discussing global technical issues with Russian engineer groups.\n" +
        "Basicly, I was responsible for:\n" +
        "- Designing water pumps and extended water supply systems for units in Solidworks, KOMPAS-3D CAD systems\n" +
        "- Correcting technical issues by comments of suppliers\n" +
        "- Oral translating between Hungarian and Russian engineer/sales groups
      </div>
      ,
    field: Field.E,
  },
  {
    id: "siemens",
    title: "Trainee Welding Engineer",
    employer: "Siemens Energy Ltd.",
    timeStart: new Date(2015, 1),
    timeEnd: new Date(2015, 11),
    description:
      <div>
        
      </div>,
    field: Field.E,
  },
];
