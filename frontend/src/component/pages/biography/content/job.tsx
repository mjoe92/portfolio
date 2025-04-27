import { HistoryEntry } from "./base-history";
import { Field } from "./field";

import "../style/experience.css";
import { TextLinkProvider } from "./text-link-provider";
import { Constants } from "../../../../utils/constants";
import { Trans } from "react-i18next";
import Company = TextLinkProvider.Company;
import City = TextLinkProvider.City;
import { t } from "i18next";

const jobContent = (): HistoryEntry[] => [
  {
    id: "bredex",
    titles: [`${ t("full-stack") + Constants.SPACE + t("java-developer") }`],
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
        <p>{ t("bredex-description") }</p>
        <ul>
          <p className="sub-title">{ t("server-backend") }</p>
          <li>{ t("oracle-sql") }</li>
          <li>
            { t("java") }
            &nbsp; ({ t("spring-boot") }
            ;&nbsp;
            { t("hibernate") }
            ,&nbsp;
            { t("jpa") })
          </li>
          <li>{ t("git") }</li>
        </ul>
        <ul>
          <p className="sub-title">{ t("client-frontend") }</p>
          <li>{ t("java-fx") }</li>
          <li>
            { t("typescript") } ({ t("angular") })
          </li>
          <li>
            { t("xml") }
            ,&nbsp;
            { t("html") }
            ,&nbsp;
            { t("css") }
          </li>
        </ul>
        <ul>
          <p className="sub-title">{ t("soft-skills") }</p>
          <li>
            { t("agile-work") } ({ t("scrum-method") })
          </li>
          <li>
            { t("manager-tools") } - { t("atlassian-boards-jira") }
          </li>
        </ul>
        <ul>
          <p className="sub-title">{ t("deployment-tools") }</p>
          <li>{ t("remote-artifact-repository") } ({ t("jfrog") })</li>
          <li>
            { t("atlassian-tools") } ({ t("bitbucket") }
            ,&nbsp;
            { t("bamboo") })
          </li>
          <li>{ t("ocp") }</li>
        </ul>
      </>
    ),
    field: Field.P
  },
  {
    id: "innostudio",
    titles: [t("mechanical-engineer")],
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
        <p>{ t("innostudio-description") }</p>
        <ul>
          <p className="sub-title">{ t("my-duties") }</p>
          <li>{ t("innostudio-task-1") }</li>
          <li>{ t("innostudio-task-2") }</li>
          <li>{ t("innostudio-task-3") }</li>
        </ul>
      </>
    ),
    field: Field.E
  },
  {
    id: "mirrotron",
    titles: [t("construction-engineer")],
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
          { t("mirrotron-description") + Constants.SPACE }
          { TextLinkProvider.load([City.BUDAPEST, City.PEKING, City.SYDNEY, City.DUBNA], true) }{ Constants.DOT }
        </p>
        <ul>
          <p className="sub-title">{ t("my-duties") }</p>
          { [[1, "construction-designer"], [2, "device-assembler"], [3, "device-installer"], [4, "process-developer"]].map((duty, index) =>
            <li key={ `duty-${ index }` }><Trans i18nKey={ `mirrotron-task-${ duty[0] }` }
                                                 components={ { tag: <span className="highlighted"/> } }
                                                 values={ { profession: t(`${ duty[1] }`) } }/>
            </li>) }
        </ul>
      </>
    ),
    field: Field.M
  },
  {
    id: "cg",
    titles: [t("construction-engineer")],
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
        <p>{ t("cg-description") }</p>
        <ul>
          <p className="sub-title">{ t("responsible") }</p>
          <li>{ t("cg-task-1") }</li>
          <li>{ t("cg-task-2") }</li>
          <li>{ t("cg-task-3") }</li>
        </ul>
      </>
    ),
    field: Field.M
  },
  {
    id: "ganz",
    titles: [t("mechanical-project-engineer"), t("construction-engineer")],
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
        <p>{ t("ganz-eem-description-1") }</p>
        <p>{ t("ganz-eem-description-2") }</p>
        <ul>
          <p className="sub-title">{ t("responsible") }</p>
          <li>{ t("ganz-task-1") }</li>
          <li>{ t("ganz-task-2") }</li>
          <li>{ t("ganz-task-3") }</li>
        </ul>
      </>
    ),
    field: Field.E
  },
  {
    id: "siemens",
    titles: [t("welding-engineer-intern")],
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
        <p>{ t("trainee-description-1") }</p>
        <p>{ t("trainee-description-2") }</p>
      </>
    ),
    field: Field.E
  }
];

export default jobContent;
