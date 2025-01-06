import { HistoryEntry } from "./base-history";
import { Field } from "./field";

import "../style/experience.css";
import { TextLinkProvider } from "./text-link-provider";
import loadHighlightedText from "./highlighted-text-provider";

//extends abbrevation meaning
export const jobContent: HistoryEntry[] = [
  {
    id: "bredex",
    title: ["Full-Stack Java Developer"],
    placePeriods: [
      {
        place: TextLinkProvider.Company.BREDEX_GMBH,
        timeStart: new Date(2023, 0),
        timeEnd: null,
      },
      {
        place: TextLinkProvider.Company.BREDEX_HU,
        timeStart: new Date(2021, 8),
        timeEnd: new Date(2022, 11),
      },
    ],
    collapse: true,
    description: (
      <>
        <p>
          My first job as a programmer in an international but mostly in a german environment on a Volkswagen related
          project. Technical stacks:
        </p>
        <ul>
          <p className="sub-title">Server (backend)</p>
          <li>{loadHighlightedText("oracleSql", "Oracle SQL")}</li>
          <li>
            {loadHighlightedText("java", "Java")}
            &nbsp; ({loadHighlightedText("springBoot", "Spring boot")}
            ;&nbsp;
            {loadHighlightedText("hibernate", "Hibernate")}
            ,&nbsp;
            {loadHighlightedText("jpa", "JPA")})
          </li>
          <li>{loadHighlightedText("git", "Git VCS")}</li>
        </ul>
        <ul>
          <p className="sub-title">Client (frontend)</p>
          <li>{loadHighlightedText("javaFx", "Java (FX)")}</li>
          <li>
            {loadHighlightedText("typescript", "Typescript")} ({loadHighlightedText("angular", "Angular")})
          </li>
          <li>
            {loadHighlightedText("xml", "(F)XML")}
            ,&nbsp;
            {loadHighlightedText("html", "HTML")}
            ,&nbsp;
            {loadHighlightedText("css", "CSS")}
          </li>
        </ul>
        <ul>
          <p className="sub-title">Soft skills</p>
          <li>Agile work (Scrum method)</li>
          <li>Manager tools - Atlassian boards ({loadHighlightedText("jira", "Jira")})</li>
        </ul>
        <ul>
          <p className="sub-title">Deployment tools</p>
          <li>Remote artifact repository (JFrog)</li>
          <li>
            Atlassian tools ({loadHighlightedText("bitbucket", "Bitbucket")}
            ,&nbsp;
            {loadHighlightedText("bamboo", "Bamboo")})
          </li>
          <li>{loadHighlightedText("ocp", "Openshift Container Platform (OCP)")}</li>
        </ul>
      </>
    ),
    field: Field.P,
  },
  {
    id: "innostudio",
    title: ["Mechanical Engineer"],
    placePeriods: [
      {
        place: TextLinkProvider.Company.INNOSTUDIO,
        timeStart: new Date(2020, 8),
        timeEnd: new Date(2021, 2),
      },
    ],
    description: (
      <>
        <p>
          I was involved only to a project related job, which was one of the hungarian contribution branch of the
          scientific space industry ({loadHighlightedText("esa", "ESA")}
          ). They needed a mechanical engineer for planning a modularised&nbsp;
          {loadHighlightedText("flowChemicalDevice", "Flow Chemical Device")}
          &nbsp;transported through a space shuttle on-board to the&nbsp;
          {loadHighlightedText("iss", "ISS")}.
        </p>
        <ul>
          <p className="sub-title">My duties were:</p>
          <li>
            Designing the mechanical controlling and flow system in&nbsp;
            {loadHighlightedText("solidworks", "Solidworks")}.
          </li>
          <li>
            Preparing parts to&nbsp;
            {loadHighlightedText("print3d", "3D printing")}
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
    placePeriods: [
      {
        place: TextLinkProvider.Company.MIRROTRON,
        timeStart: new Date(2019, 0),
        timeEnd: new Date(2020, 3),
      },
    ],
    description: (
      <>
        <p>
          Most of the time I dealt with products series so far, but this company specialized for very special individual
          devices which work under radioaktive radiation. These are called&nbsp;
          {loadHighlightedText("neutronScatteringDevice", "Neutron Scattering Devices")}
          &nbsp;which are usually setupped close to a&nbsp;
          {loadHighlightedText("nuclearReactor", "(testing) Nuclear Reactor")} in&nbsp;
          {TextLinkProvider.load(TextLinkProvider.City.BUDAPEST, true)},&nbsp;
          {TextLinkProvider.load(TextLinkProvider.City.PEKING, true)},&nbsp;
          {TextLinkProvider.load(TextLinkProvider.City.SYDNEY, true)} and&nbsp;
          {TextLinkProvider.load(TextLinkProvider.City.DUBNA, true)}.{/** Csillabérc, Dubna, Sydney */}
        </p>
        <ul>
          <p className="sub-title">My duties were:</p>
          <li>
            as a&nbsp;
            <span className="bold-italic">Construction Designer</span>, &nbsp;planning&nbsp;
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
            as a&nbsp;
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
            as a&nbsp;
            <span className="bold-italic">Device Installer</span>, on-site building with preciese alignment.
          </li>
          <li>
            as a&nbsp;
            <span className="bold-italic">Process Developer</span>, creating manufacture protocol in Excel VBA to
            monitor current production status
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
    placePeriods: [
      {
        place: TextLinkProvider.Company.CG_HUNGARY,
        timeStart: new Date(2018, 0),
        timeEnd: new Date(2018, 8),
      },
    ],
    description: (
      <>
        <p>
          I came here prepared for another type of steel construction designing:&nbsp;
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
            Creating models, drawings and part list of a transformer steel assembly in&nbsp;
            <span id="nx" className="highlight-point">
              NX
            </span>
          </li>
          <li>Improving inner requirements and 'standard' drawings for better and faster work</li>
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
    placePeriods: [
      {
        place: TextLinkProvider.Company.GANZ_EEM,
        timeStart: new Date(2016, 9),
        timeEnd: new Date(2017, 11),
      },
    ],
    description: (
      <>
        <p>
          {/** link to Ganz EEM. */}
          My first place as a&nbsp;
          <span id="profession" className="highlight-point">
            Mechanical Engineering
          </span>
          &nbsp;where I was bounded strictly to design steel structures for water&nbsp;
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
          My work slightly extended with managing producing schedules, quality plans and organising meetings for
          discussing technical issues with Russian engineer groups.
        </p>
        <ul>
          <p className="sub-title">I was responsible for:</p>
          <li>
            Designing water pumps and extended water supply systems for units in&nbsp;
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
          <li>Oral translating between Hungarian and Russian engineer/sales groups</li>
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
    placePeriods: [
      {
        place: TextLinkProvider.Company.SIEMENS,
        timeStart: new Date(2015, 1),
        timeEnd: new Date(2015, 11),
      },
    ],
    description: (
      <>
        <p>
          {/** CV-ről fordítani, emlékezz vissza mit írtál, span.highlighted-point */}I began my&nbsp;
          <span id="profession" className="highlight-point">
            Mechanical Engineering
          </span>
          &nbsp;career path here as a trainee in the&nbsp;
          <span id="division" className="highlight-point">
            Welding Structure
          </span>
          &nbsp;division. My job was related to the technical administrational field, most of these tasks were&nbsp;
          <span id="wpq" className="highlight-point">
            configuring and managing welding technologies for different seams (WPQ)
          </span>
          , create&nbsp;
          <span id="welding-drawing" className="highlight-point">
            welding drawings
          </span>
          &nbsp;and&nbsp;
          <span className="highlight-point">welding protocols (WPS)</span>.
        </p>
        <p>
          Lots of these jobs were repetative "wood-cutting" tasks done in Excel environment. It gave me the opportunity
          to dive deep to learn&nbsp;
          <span id="vba" className="highlight-point">
            VBA programming{/** show / hide in picture: WPQS table sample */}
          </span>
          . By creating macros I was able to learn basics of functional programming which also increased mine and others
          administrative work-flow.
        </p>
        {/** reason I left: no chance to take me as a full time welding engineer */}
      </>
    ),
    field: Field.E,
  },
];
