import { AbstractIDetailedHistory } from "./AbstractIHistory";
import { Field } from "./EField";

import "../style/experience.css";

export default interface IExperience extends AbstractIDetailedHistory {
  employer: string;
}

//extends abbrevation meaning
export const experienceContent: IExperience[] = [
  {
    id: "bredex",
    title: ["Junior Fullstack Java Developer"],
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
          <li>
            <span id="oracleSql" className="highlight-point">
              Oracle SQL
            </span>
          </li>
          <li>
            <span id="java" className="highlight-point">
              Java
            </span>
            &nbsp; (
            <span id="springBoot" className="highlight-point">
              Spring boot
            </span>
            ,&nbsp;
            <span id="hibernate" className="highlight-point">
              Hibernate
            </span>
            ,&nbsp;
            <span id="jpa" className="highlight-point">
              JPA
            </span>
            )
          </li>
          <li>
            <span id="git" className="highlight-point">
              Git VCS
            </span>
          </li>
        </ul>
        <ul>
          <p className="sub-title">Client (frontend)</p>
          <li>
            <span id="javaFx" className="highlight-point">
              Java (FX)
            </span>
          </li>
          <li>
            <span id="typescript" className="highlight-point">
              Typescript
            </span>
          </li>
          <li>
            <span id="xml" className="highlight-point">
              (F)XML
            </span>
            ,&nbsp;
            <span id="html" className="highlight-point">
              HTML
            </span>
            ,&nbsp;
            <span id="css" className="highlight-point">
              CSS
            </span>
          </li>
          <li>
            <span id="angular" className="highlight-point">
              Angular
            </span>
          </li>
        </ul>
        <ul>
          <p className="sub-title">Soft skills</p>
          <li>Agile work (Scrum method)</li>
          <li>
            Manager tools - Atlassian boards (
            <span id="jira" className="highlight-point">
              Jira
            </span>
            ,&nbsp;
            <span id="bitbucket" className="highlight-point">
              Bitbucket
            </span>
            ,&nbsp;
            <span id="bamboo" className="highlight-point">
              Bamboo
            </span>
            )
          </li>
        </ul>
      </>
    ),
    field: Field.P,
  },
  {
    id: "innostudio",
    title: ["Mechanical Engineer"],
    employer: "InnoStudio Inc.",
    timeStart: new Date(2020, 8),
    timeEnd: new Date(2021, 2),
    description: (
      <>
        <p>
          I was involved only to a project related job, which was one of the
          hungarian contribution branch of the scientific space industry (
          <span id="esa" className="highlight-point">
            ESA
          </span>
          ). They needed a mechanical engineer for planning a modularised&nbsp;
          <span id="flow-chemical-device" className="highlight-point">
            Flow Chemical Device
          </span>
          &nbsp;transported through a space shuttle on-board to the&nbsp;
          <span id="iss" className="highlight-point">
            ISS
          </span>
          .
        </p>
        <ul>
          <p className="sub-title">My duties were:</p>
          <li>
            Designing the mechanical controlling and flow system in&nbsp;
            <span id="solidworks" className="highlight-point">
              Solidworks
            </span>
            .
          </li>
          <li>
            Preparing parts to&nbsp;
            <span id="print3d" className="highlight-point">
              3D printing
            </span>
            &nbsp;for local testing environment
          </li>
          <li>Negotiating with ESA members about distribution of 'workload'</li>
        </ul>
        {/** reason I left: very lack of support was given by this company,
         * including sotfware and manifacture infrstructure to accomplish with an important care */}
      </>
    ),
    field: Field.E,
  },
  {
    id: "mirrotron",
    title: ["Construction Engineer"],
    employer: "Mirrotron Ltd.",
    timeStart: new Date(2019, 0),
    timeEnd: new Date(2020, 3),
    description: (
      <>
        <p>
          Most of the time I dealt with products series so far, but this company
          specialized for very special individual devices which work under
          radioaktive radiation. These are called&nbsp;
          <span id="neutron-scattering-device" className="highlight-point">
            Neutron Scattering Devices
          </span>
          &nbsp;which are usually setupped close to a&nbsp;
          <span id="nuclear-reactor" className="highlight-point">
            (testing) Nuclear Reactor{/** Csillabérc, Dubna, Sydney */}
          </span>
          .
        </p>
        <ul>
          <p className="sub-title">My duties were:</p>
          <li>
            <span className="bulletpoint">as a</span>&nbsp;
            <span className="bold-italic">Construction Designer</span>,
            &nbsp;planning&nbsp;
            <span id="scattering-device" className="highlight-point">
              scattering devices
              {/** beam-guides, chopper, shutter - explanation about steel structures under vacuum */}
            </span>
            , reforming shapes along&nbsp;
            <span id="finite-element-method" className="highlight-point">
              stress analyzer
            </span>
            &nbsp;checking in&nbsp;
            <span id="solidworks" className="highlight-point">
              Solidworks
            </span>
            , and coordinating construction.
          </li>
          <li>
            <span className="bulletpoint">as a</span>&nbsp;
            <span className="bold-italic">Device Assembler</span>
            ,&nbsp;
            <span id="precise set-up" className="highlight-point">
              precise set-up
              {/** teodolit, mitutoyo coo. machine -> link to picture in net */}
            </span>
            &nbsp;of parts and already built&nbsp;
            <span id="subassemblies" className="highlight-point">
              subassemblies
              {/** mirror guide units, commercial products e.g pneum. pumps */}
            </span>
            &nbsp;into product.
          </li>
          <li>
            <span className="bulletpoint">as a</span>&nbsp;
            <span className="bold-italic">Device Installer</span>, meaning by
            on-site building with preciese alignment.
          </li>
        </ul>
        {/** show reason why moving on: lost job during COVID-19 */}
      </>
    ),
    field: Field.M,
  },
  {
    id: "cg",
    title: ["Construction Engineer"],
    employer: "CG Electric Systems Hungary Zrt.",
    timeStart: new Date(2018, 0),
    timeEnd: new Date(2018, 8),
    description: (
      <>
        <p>
          I came here prepared for another type of steel construction
          designing:&nbsp;
          <span id="high-power-transformer" className="highlight-point">
            High Power Electric Transformers
          </span>
          . I also made my&nbsp;
          <span id="mechatronics-msc" className="highlight-point">
            Mechatronics MSc
          </span>
          &nbsp;
          <span id="diploma" className="highlight-point">
            diploma thesis
          </span>
          &nbsp;here.
        </p>
        <ul>
          <p className="sub-title">I was responsible for:</p>
          <li>
            Creating models, drawings and part list of a transformer steel
            assembly in&nbsp;
            <span id="nx" className="highlight-point">
              NX
            </span>
          </li>
          <li>
            Improving inner requirements and 'standard' drawings for better and
            faster work
          </li>
          <li>Making macros in Excel VBA</li> {/** translator in form */}
        </ul>
        {/** show reason why moving on: end of agreement, no need more construction engineers */}
      </>
    ),
    field: Field.M,
  },
  {
    id: "ganz",
    title: ["Mechanical Project Engineer", "Construction Engineer"],
    // MPE: exclamation mark, popup window with 'not officially contracted'
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
            <span id="solidworks" className="highlight-point">
              Solidworks
            </span>
            ,&nbsp;
            <span id="kompas-3d" className="highlight-point">
              KOMPAS-3D
            </span>
            &nbsp;CAD systems)
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
    title: ["Trainee Welding Engineer"],
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
            VBA programming{/** show / hide in picture: WPQS table sample */}
          </span>
          . By creating macros I was able to learn basics of functional
          programming which also increased mine and others administrative
          work-flow.
        </p>
        {/** reason I left: no chance to take me as a full time welding engineer */}
      </>
    ),
    field: Field.E,
  },
];
