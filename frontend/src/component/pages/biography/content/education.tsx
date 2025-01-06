import { HistoryEntry } from "./base-history";
import { Field } from "./field";
import loadHighlightedText from "./highlighted-text-provider";
import { TextLinkProvider } from "./text-link-provider";

export const educationContent: HistoryEntry[] = [
  {
    id: "codecool2",
    title: ["Java Enterprise Backend Developer"],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.CODECOOL,
        timeStart: new Date(2021, 5),
        timeEnd: new Date(2021, 8),
      },
    ],
    description: (
      <>
        <p>
          As an extension of the&nbsp;
          <a href="#codecool1-detail">Java Backend Developer course</a>, gives an advanced inside to the Java EE
          platform.
        </p>
        <ul>
          <p className="sub-title">Stack subjects:</p>
          <li>
            {/* {loadHighlightedText("java")} */}
            {loadHighlightedText("java", "Java")}
            &nbsp;with Frameworks and Plugins ({loadHighlightedText("springBoot", "Spring Boot")}
            ,&nbsp;
            {loadHighlightedText("thymeleaf", "Thymeleaf")}
            ,&nbsp;
            {loadHighlightedText("jpa", "JPA")}
            ,&nbsp;
            {loadHighlightedText("hibernate", "Hibernate")}
            ,&nbsp;
            {loadHighlightedText("httpClient", "HTTP Client")})
          </li>
          <li>
            {loadHighlightedText("html", "HTML")},&nbsp;
            {loadHighlightedText("css", "CSS")}
            &nbsp;({loadHighlightedText("sass", "SASS")})
          </li>
          <li>
            {loadHighlightedText("postgres", "PostgreSQL")}
            ,&nbsp;
            {loadHighlightedText("mysql", "MySQL")}
          </li>
          <li>
            {loadHighlightedText("docker", "Docker")}
            &nbsp;(with&nbsp;
            {loadHighlightedText("kubernetes", "Kubernetes")}
            &nbsp;to&nbsp;
            {loadHighlightedText("heroku", "Heroku")}
            &nbsp;platform)
          </li>
        </ul>
      </>
    ),
    field: Field.P,
  },
  {
    id: "codecool1",
    title: ["Java Backend Developer"],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.CODECOOL,
        timeStart: new Date(2020, 11),
        timeEnd: new Date(2021, 2),
      },
    ],
    description: (
      <>
        <p>
          During the COVID-19, my aim was very clear after I lost my&nbsp;
          {loadHighlightedText("mirrotron", "job")}: become a successful programmer. Thanks to the&nbsp;
          {loadHighlightedText("governmentAid", "government's supporting aid")}, I was able to learn&nbsp;
          {loadHighlightedText("javaBackend", "Java Backend")}
          &nbsp;completely free in the&nbsp;
          {loadHighlightedText("codecool", "bootcamp")}.
        </p>
        <ul>
          <p className="sub-title">Stack subjects:</p>
          <li>
            {loadHighlightedText("java", "Java")}
            &nbsp;(with&nbsp;
            {loadHighlightedText("javaFx", "FX")})
          </li>
          <li>{loadHighlightedText("postgres", "PostgreSQL")}</li>
          <li>
            {loadHighlightedText("git", "Git VCS")}&nbsp;(via&nbsp;
            {loadHighlightedText("github", "GitHub")})
          </li>
        </ul>
      </>
    ),
    field: Field.P,
  },
  {
    id: "obudai",
    title: ["Mechatronics MSc"],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.OBUDAI_UNIVERSITY,
        timeStart: new Date(2016, 8),
        timeEnd: new Date(2019, 0),
      },
    ],
    description: (
      <>
        Looking for another challenge to study both mechanical engineering and programming, I took another orientation
        to enlarge my knowledge about&nbsp;
        {loadHighlightedText("microcontroller", "microcontrollers")}
        ,&nbsp;
        {loadHighlightedText("proximitySensor", "proximity sensors")}
        ,&nbsp;
        {loadHighlightedText("optimalisationMethod", "optimalisational methods")}
        &nbsp;and&nbsp;
        {loadHighlightedText("regulationMechanism", "regulation mechanism")}.{/** link to show list of subjects */}
      </>
    ),
    field: Field.E,
  },
  {
    id: "nct2",
    title: ["NCT Four- and Five-axis Programming Technology"],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.NCT_ACADEMY,
        timeStart: new Date(2015, 10),
        timeEnd: new Date(2016, 7),
      },
    ],
    description: (
      <>
        My interest in the&nbsp;
        {loadHighlightedText("cnc", "CNC")}
        &nbsp;field continued to spread towards workstations to&nbsp;
        {loadHighlightedText("moreAxis", "more than 3-axis")}
        &nbsp;tool controlling. This required another development aproach also in the&nbsp;
        {loadHighlightedText("cad", "CAD")}
        &nbsp;and&nbsp;
        {loadHighlightedText("cam", "CAM")}
        &nbsp;field.
      </>
    ),
    field: Field.M,
  },
  {
    id: "nct1",
    title: ["CAD/CAM, CNC Programming Technology"],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.NCT_ACADEMY,
        timeStart: new Date(2015, 2),
        timeEnd: new Date(2015, 10),
      },
    ],
    description: (
      <>
        Extending my interests about&nbsp;
        {loadHighlightedText("cnc", "CNC")}
        &nbsp;programming and manufacture, I took a&nbsp;
        {loadHighlightedText("nqr", "NQR")}
        {/** National (Hungarian) Qualifications Register, OKJ képzés */}
        &nbsp;course in&nbsp;
        {loadHighlightedText("cad", "CAD")}
        ,&nbsp;
        {loadHighlightedText("cam", "CAM")}
        &nbsp;and&nbsp;
        {loadHighlightedText("cnc", "CNC")}
        &nbsp;technology. This gave me basics of understanding raw material handling, controlling&nbsp;
        {loadHighlightedText("cncMachine", "3-axis CNC machines")}
        {/** turning and milling machines */}
        &nbsp;and making tool guiding programs ( in&nbsp;
        {loadHighlightedText("gCode", "G-code")}).
      </>
    ),
    field: Field.M,
  },
  {
    id: "bme",
    title: ["Mechanical Engineering BSc"],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.BME,
        timeStart: new Date(2011, 8),
        timeEnd: new Date(2016, 5),
      },
    ],
    description: (
      <>
        Studying basics with&nbsp;
        {loadHighlightedText("mechanicalDevelopment", "Mechanical Development")}
        &nbsp;specialisation. My preferred subjects were&nbsp;
        {loadHighlightedText("cncAutomation", "CNC automation")}, Mathematics, Basics of Programming,&nbsp;
        {loadHighlightedText("acoustic", "Technical Acoustics and Noise Control")}
        ,&nbsp;
        {loadHighlightedText("cad", "CAD designing")}.{/** link to show list of subjects */}
      </>
    ),
    field: Field.E,
  },
];
