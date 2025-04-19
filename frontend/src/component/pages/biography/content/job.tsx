import { HistoryEntry } from "./base-history";
import { Field } from "./field";

import "../style/experience.css";
import { TextLinkProvider } from "./text-link-provider";
import translate from "../../../../i18n/locale-service";
import { Constants } from "../../../../utils/constants";
import { Trans } from "react-i18next";
import Company = TextLinkProvider.Company;
import City = TextLinkProvider.City;

const jobContent: HistoryEntry[] = [
  {
    id: "bredex",
    titles: [`${ translate("full-stack") + Constants.SPACE + translate("java-developer") }`],
    placePeriods: [
      {
        place: Company.BREDEX_GMBH,
        cities: [City.BRAUNSCHWEIG],
        timeStart: new Date(2023, 0),
        timeEnd: null
      },
      {
        place: Company.BREDEX_HU,
        cities: [City.BUDAPEST, City.SZEKESFEHERVAR],
        timeStart: new Date(2021, 8),
        timeEnd: new Date(2022, 11)
      }
    ],
    collapse: true,
    description: (
      <>
        <p>{ translate("bredex-description") }</p>
        <ul>
          <p className="sub-title">{ translate("server-backend") }</p>
          <li>{ translate("oracle-sql") }</li>
          <li>
            { translate("java") }
            &nbsp; ({ translate("spring-boot") }
            ;&nbsp;
            { translate("hibernate") }
            ,&nbsp;
            { translate("jpa") })
          </li>
          <li>{ translate("git") }</li>
        </ul>
        <ul>
          <p className="sub-title">{ translate("client-frontend") }</p>
          <li>{ translate("java-fx") }</li>
          <li>
            { translate("typescript") } ({ translate("angular") })
          </li>
          <li>
            { translate("xml") }
            ,&nbsp;
            { translate("html") }
            ,&nbsp;
            { translate("css") }
          </li>
        </ul>
        <ul>
          <p className="sub-title">{ translate("soft-skills") }</p>
          <li>
            { translate("agile-work") } ({ translate("scrum-method") })
          </li>
          <li>
            { translate("manager-tools") } - { translate("atlassian-boards-jira") }
          </li>
        </ul>
        <ul>
          <p className="sub-title">{ translate("deployment-tools") }</p>
          <li>{ translate("remote-artifact-repository") } ({ translate("jfrog") })</li>
          <li>
            { translate("atlassian-tools") } ({ translate("bitbucket") }
            ,&nbsp;
            { translate("bamboo") })
          </li>
          <li>{ translate("ocp") }</li>
        </ul>
      </>
    ),
    field: Field.P
  },
  {
    id: "innostudio",
    titles: [translate("mechanical-engineer")],
    placePeriods: [
      {
        place: Company.INNOSTUDIO,
        cities: [City.BUDAPEST],
        timeStart: new Date(2020, 8),
        timeEnd: new Date(2021, 2)
      }
    ],
    description: (
      <>
        <p>{ translate("innostudio-description") }</p>
        <ul>
          <p className="sub-title">{ translate("my-duties") }</p>
          <li>{ translate("innostudio-task-1") }</li>
          <li>{ translate("innostudio-task-2") }</li>
          <li>{ translate("innostudio-task-3") }</li>
        </ul>
      </>
    ),
    field: Field.E
  },
  {
    id: "mirrotron",
    titles: [translate("construction-engineer")],
    placePeriods: [
      {
        place: Company.MIRROTRON,
        cities: [City.BUDAPEST, City.PEKING, City.SYDNEY, City.DUBNA],
        timeStart: new Date(2019, 0),
        timeEnd: new Date(2020, 3)
      }
    ],
    description: (
      <>
        <p>
          { translate("mirrotron-description") + Constants.SPACE }
          { TextLinkProvider.load([City.BUDAPEST, City.PEKING, City.SYDNEY, City.DUBNA], true) }{ Constants.DOT }
        </p>
        <ul>
          <p className="sub-title">{ translate("my-duties") }</p>
          { [[1, "construction-designer"], [2, "device-assembler"], [3, "device-installer"], [4, "process-developer"]].map((duty, index) =>
            <li key={ `duty-${ index }` }><Trans i18nKey={ `mirrotron-task-${ duty[0] }` }
                                                 components={ { tag: <span className="highlighted"/> } }
                                                 values={ { profession: translate(`${ duty[1] }`) } }/>
            </li>) }
        </ul>
      </>
    ),
    field: Field.M
  },
  {
    id: "cg",
    titles: [translate("construction-engineer")],
    placePeriods: [
      {
        place: Company.CG_HUNGARY,
        cities: [City.BUDAPEST],
        timeStart: new Date(2018, 0),
        timeEnd: new Date(2018, 8)
      }
    ],
    description: (
      <>
        <p>{ translate("cg-description") }</p>
        <ul>
          <p className="sub-title">{ translate("responsible") }</p>
          <li>{ translate("cg-task-1") }</li>
          <li>{ translate("cg-task-2") }</li>
          <li>{ translate("cg-task-3") }</li>
        </ul>
      </>
    ),
    field: Field.M
  },
  {
    id: "ganz",
    titles: [translate("mechanical-project-engineer"), translate("construction-engineer")],
    // MPE: exclamation mark, popup window with 'not officially contracted'
    placePeriods: [
      {
        place: Company.GANZ_EEM,
        cities: [City.BUDAPEST],
        timeStart: new Date(2016, 9),
        timeEnd: new Date(2017, 11)
      }
    ],
    description: (
      <>
        <p>{ translate("ganz-eem-description-1") }</p>
        <p>{ translate("ganz-eem-description-2") }</p>
        <ul>
          <p className="sub-title">{ translate("responsible") }</p>
          <li>{ translate("ganz-task-1") }</li>
          <li>{ translate("ganz-task-2") }</li>
          <li>{ translate("ganz-task-3") }</li>
        </ul>
      </>
    ),
    field: Field.E
  },
  {
    id: "siemens",
    titles: [translate("welding-engineer-intern")],
    placePeriods: [
      {
        place: Company.SIEMENS,
        cities: [City.BUDAPEST],
        timeStart: new Date(2015, 1),
        timeEnd: new Date(2015, 11)
      }
    ],
    description: (
      <>
        <p>{ translate("trainee-description-1") }</p>
        <p>{ translate("trainee-description-2") }</p>
      </>
    ),
    field: Field.E
  }
];

export default jobContent;
