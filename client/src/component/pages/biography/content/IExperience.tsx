import AbstractIHistory from "./AIHistory";
import { Field } from "./EField";

import "../style/experience.css";

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
    description: (
      <>
        <p>
          My first job as a programmer in an international but mostly in a
          german environment with a Volkswagen related project. Technical
          stacks:
        </p>
        <ul>
          <p className="sub-title">Server (backend)</p>
          <li>Oracle SQL DB</li>
          <li>Java (Spring boot, Hibernate, JPA)</li>
          <li>Git VCS</li>
        </ul>
        <ul>
          <p className="sub-title">Client (frontend)</p>
          <li>Java (FX)</li>
          <li>(F)XML, HTML, CSS</li>
          <li>Angular TS (WEB Client)</li>
        </ul>
        <ul>
          <p className="sub-title">Soft skills</p>
          <li>Agile work (Scrum method)</li>
          <li>Manager tools - Atlassian boards (Jira, Bitbucket, Bamboo)</li>
        </ul>
      </>
    ),
    field: Field.P,
  },
  {
    id: "innostudio",
    title: "Mechanical Engineer",
    employer: "InnoStudio Inc.",
    timeStart: new Date(2020, 8),
    timeEnd: new Date(2021, 2),
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia
          quas tenetur quibusdam facere veniam fugit repudiandae esse, nisi,
          laudantium numquam facilis officiis animi mollitia quod! Qui ad
          facilis libero!
        </p>
      </>
    ),
    field: Field.E,
  },
  {
    id: "mirrotron",
    title: "Construction Engineer",
    employer: "Mirrotron Ltd.",
    timeStart: new Date(2019, 0),
    timeEnd: new Date(2020, 3),
    description: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia
        quas tenetur quibusdam facere veniam fugit repudiandae esse, nisi,
        laudantium numquam facilis officiis animi mollitia quod! Qui ad facilis
        libero!
      </p>
    ),
    field: Field.M,
  },
  {
    id: "cg",
    title: "Construction Engineer",
    employer: "CG Electric Systems Hungary Zrt.",
    timeStart: new Date(2018, 0),
    timeEnd: new Date(2018, 8),
    description: (
      <>
        <p>
          I was responsible for: - Creating models, drawings and part list of a
          transformer steel assembly in NX - Improving inner requirements and
          'standard' drawings for better and faster work - Making functions and
          smart apps linking between model attributes and excel drawings -
          Creating programs and macros in Excel VBA
        </p>
        <p>
          I came here prepared for another type of steel construction designing
        </p>
      </>
    ),
    field: Field.M,
  },
  {
    id: "ganz",
    title: ["Mechanical Project Engineer\n", "Construction Engineer"],
    employer: "Ganz Engineering and Energetics Machinery Ltd.",
    timeStart: new Date(2016, 9),
    timeEnd: new Date(2017, 11),
    description: (
      <>
        <p>
          {/** link to Ganz EEM. */}
          My first place as a&nbsp;
          <span id="profession" className="highlight-point">
            Mechanical Engineering
          </span>
          &nbsp;where I was bounded strictly to design steel structures for
          water&nbsp;
          <span id="pump-units" className="highlight-point">
            pump units{/** link to pictures */}
          </span>
          &nbsp;for&nbsp;
          <span id="npp" className="highlight-point">
            NPP-s
            {/** link to pictures, esp. for Rostov,
        Belorus and Kudankulam Nuclear Power Plant */}
          </span>
          &nbsp;at the beginning.
        </p>
        <p>
          My work slightly extended with managing producing schedules, quality
          plans and organising meetings for discussing technical issues with
          Russian engineer groups.
        </p>
        <ul>
          <p className="sub-title">I was responsible for:</p>
          <li>
            Designing water pumps and extended water supply systems for units in
            Solidworks, KOMPAS-3D CAD systems)
          </li>
          <li>Correcting technical issues by comments of suppliers</li>
          <li>
            Oral translating between Hungarian and Russian engineer/sales groups
          </li>
        </ul>
        {/* <p> -> show / hide on click, message: are you sure you want to see
          The reason I left:<span id="ganz" className="leaving-reason"></span>
        </p> */}
      </>
    ),
    field: Field.E,
  },
  {
    id: "siemens",
    title: "Trainee Welding Engineer",
    employer: "Siemens Energy Ltd.",
    timeStart: new Date(2015, 1),
    timeEnd: new Date(2015, 11),
    description: (
      <>
        <p>
          {/** CV-ről fordítani, emlékezz vissza mit írtál, span.highlighted-point */}
          I began my&nbsp;
          <span id="profession" className="highlight-point">
            Mechanical Engineering
          </span>
          &nbsp;career path here as a trainee in the&nbsp;
          <span id="division" className="highlight-point">
            Welding Structure
          </span>
          &nbsp;division. My job was related to the technical administrational
          field, most of these tasks were&nbsp;
          <span id="wpq" className="highlight-point">
            configuring and managing welding technologies for different seams
            (WPQ)
          </span>
          , create&nbsp;
          <span id="welding-drawing" className="highlight-point">
            welding drawings
          </span>
          &nbsp;and&nbsp;
          <span className="highlight-point">welding protocols (WPS)</span>.
        </p>
        <p>
          Lots of these jobs were repetative "wood-cutting" tasks done in Excel
          environment. It gave me the opportunity to dive deep to learn&nbsp;
          <span id="vba" className="highlight-point">
            VBA programming
          </span>
          . By creating macros I was able to learn basics of functional
          programming which also increased mine and others administrative
          work-flow.
        </p>
      </>
    ),
    field: Field.E,
  },
];
