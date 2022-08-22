import AbstractIHistory from "./AIHistory";
import { Field } from "./EField";

export default interface IEducation extends AbstractIHistory {
  institution: string;
}

export const educationContent: IEducation[] = [
  {
    id: "codecool2",
    title: ["Java Enterprise Backend Developer"],
    institution: "Codecool",
    timeStart: new Date(2021, 5),
    timeEnd: new Date(2021, 8),
    description: (
      <>
        <p>
          As an extension of the&nbsp;
          <a href="#codecool1-detail">Java Backend Developer course</a>, gives
          an advanced inside to the Java EE platform.
        </p>
        <ul>
          <p className="sub-title">Stack subjects:</p>
          <li>
            <span id="java" className="highlight-point">
              Java with Frameworks and Plugins (
              <span id="springBoot" className="highlight-point">
                Spring Boot
              </span>
              ,&nbsp;
              <span id="thymeleaf" className="highlight-point">
                Thymeleaf
              </span>
              ,&nbsp;
              <span id="jpa" className="highlight-point">
                JPA
              </span>
              ,&nbsp;
              <span id="hibernate" className="highlight-point">
                Hibernate
              </span>
              ,&nbsp;
              <span id="httpClient" className="highlight-point">
                HTTP Client
              </span>
            </span>
            )
          </li>
          <li>
            <span id="html" className="highlight-point">
              HTML
            </span>
            ,&nbsp;
            <span id="css" className="highlight-point">
              CSS (
              <span id="sass" className="highlight-point">
                SASS
              </span>
              )
            </span>
          </li>
          <li>
            <span id="postgres" className="highlight-point">
              PostgreSQL
            </span>
            ,&nbsp;
            <span id="mysql" className="highlight-point">
              MySQL
            </span>
          </li>
          <li>
            <span id="docker" className="highlight-point">
              Docker
            </span>
            &nbsp;(with&nbsp;
            <span id="kubernetes" className="highlight-point">
              Kubernetes
            </span>
            &nbsp;to&nbsp;
            <span id="heroku" className="highlight-point">
              Heroku platform
            </span>
            )
          </li>
        </ul>
      </>
    ),
    field: Field.P,
  },
  {
    id: "codecool1",
    title: ["Java Backend Developer"],
    institution: "Codecool",
    timeStart: new Date(2020, 0),
    timeEnd: new Date(2021, 2),
    description: (
      <>
        <p>
          During the COVID-19, my aim was very clear after I lost my&nbsp;
          <span id="mirrotron" className="highlight-point">
            job
          </span>
          : become a successful programmer. Thanks to the&nbsp;
          <span id="governmentAid" className="highlight-point">
            government's supporting aid{/** Újratervezés Program */}
          </span>
          , I was able to learn&nbsp;
          <span id="javaBackend" className="highlight-point">
            Java Backend
            {/** https://ujratervezes.nive.hu/kepzesek/java-backend-fejleszto */}
          </span>
          &nbsp;completely free in the&nbsp;
          <span id="codecool" className="highlight-point">
            bootcamp
          </span>
          .
        </p>
        <ul>
          <p className="sub-title">Stack subjects:</p>
          <li>
            <span id="java" className="highlight-point">
              Java (with&nbsp;
              <span id="javaFx" className="highlight-point">
                FX
              </span>
              )
            </span>
          </li>
          <li>
            <span id="postgres" className="highlight-point">
              PostgreSQL
            </span>
          </li>
          <li>
            <span id="git" className="highlight-point">
              Git VCS&nbsp;(with&nbsp;
              <span id="github" className="highlight-point">
                GitHub
              </span>
              &nbsp;profile)
            </span>
          </li>
        </ul>
      </>
    ),
    field: Field.P,
  },
  {
    id: "obudai",
    title: ["Mechatronics MSc"],
    institution: "Óbudai University",
    timeStart: new Date(2016, 8),
    timeEnd: new Date(2019, 0),
    description: (
      <>
        Looking for another challenge to study both mechanical engineering and
        programming, I took another orientation to enlarge my knowledge
        about&nbsp;
        <span id="microcontroller" className="highlight-point">
          microcontrollers
        </span>
        ,&nbsp;
        <span id="proximitySensor" className="highlight-point">
          proximity sensors
        </span>
        ,&nbsp;
        <span id="optimalisationMethod" className="highlight-point">
          optimalisational methods
        </span>
        &nbsp;and&nbsp;
        <span id="regulationMechanism" className="highlight-point">
          regulation mechanism
        </span>
        .{/** link to show list of subjects */}
      </>
    ),
    field: Field.E,
  },
  {
    id: "nct2",
    title: ["NCT Four- and Five-axis Programming Technology"],
    institution: "NCT Academy",
    timeStart: new Date(2015, 10),
    timeEnd: new Date(2016, 7),
    description: (
      <>
        My interest in the&nbsp;
        <span id="cnc" className="highlight-point">
          CNC
        </span>
        &nbsp;field continued to spread towards workstations to&nbsp;
        <span id="moreAxis" className="highlight-point">
          more than 3-axis
        </span>
        &nbsp;tool controlling. This required another development aproach also
        in the&nbsp;
        <span id="cad" className="highlight-point">
          CAD
        </span>
        &nbsp;and&nbsp;
        <span id="cam" className="highlight-point">
          CAM
        </span>
        &nbsp;field.
      </>
    ),
    field: Field.M,
  },
  {
    id: "nct1",
    title: ["CAD/CAM, CNC Programming Technology"],
    institution: "NCT Academy",
    timeStart: new Date(2015, 2),
    timeEnd: new Date(2015, 10),
    description: (
      <>
        Extending my interests about&nbsp;
        <span id="cnc" className="highlight-point">
          CNC
        </span>
        &nbsp;programming and manufacture, I took a&nbsp;
        <span id="nqr" className="highlight-point">
          NQR{/** National (Hungarian) Qualifications Register, OKJ képzés */}
        </span>
        &nbsp;course in&nbsp;
        <span id="cad" className="highlight-point">
          CAD
        </span>
        ,&nbsp;
        <span id="cam" className="highlight-point">
          CAM
        </span>
        &nbsp;and&nbsp;
        <span id="cnc" className="highlight-point">
          CNC
        </span>
        &nbsp;technology. This gave me basics of understanding raw material
        handling, controlling&nbsp;
        <span id="cncMachine" className="highlight-point">
          3-axis CNC machines{/** turning and milling machines */}
        </span>
        &nbsp;and making tool guiding&nbsp;
        <span id="gCode" className="highlight-point">
          programs
        </span>
        .
      </>
    ),
    field: Field.M,
  },
  {
    id: "bme",
    title: ["Mechanical Engineering BSc"],
    institution: "Budapest University of Technology and Economics",
    timeStart: new Date(2011, 8),
    timeEnd: new Date(2016, 5),
    description: (
      <>
        Studying basics with&nbsp;
        <span id="mechanicalDevelopment" className="highlight-point">
          Mechanical Development
        </span>
        &nbsp;specialisation. My preferred subjects were&nbsp;
        <span id="cncAutomation" className="highlight-point">
          CNC automation
        </span>
        , Mathematics, Basics of Programming,&nbsp;
        <span id="acoustic" className="highlight-point">
          Technical Acoustics and Noise Control
        </span>
        ,&nbsp;
        <span id="cad" className="highlight-point">
          CAD designing
        </span>
        .{/** link to show list of subjects */}
      </>
    ),
    field: Field.E,
  },
];
