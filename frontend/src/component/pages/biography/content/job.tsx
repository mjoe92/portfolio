import { HistoryEntry } from "./base-history";
import { Field } from "./field";

import "../style/experience.css";
import { TextLinkProvider } from "./text-link-provider";
import translate from "../../../../i18n/locale-service";
import { Constants } from "../../../../utils/constants";
import City = TextLinkProvider.City;
import { Trans } from "react-i18next";

export const jobContent: HistoryEntry[] = [
  {
    id: "bredex",
    titles: [`${ translate("full-stack") + Constants.SPACE + translate("java-developer") }`],
    placePeriods: [
      {
        place: TextLinkProvider.Company.BREDEX_GMBH,
        timeStart: new Date(2023, 0),
        timeEnd: null
      },
      {
        place: TextLinkProvider.Company.BREDEX_HU,
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
          <li>{ translate("remote-artifact-repository") } (JFrog)</li>
          <li>
            Atlassian tools ({ translate("bitbucket") }
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
        place: TextLinkProvider.Company.INNOSTUDIO,
        timeStart: new Date(2020, 8),
        timeEnd: new Date(2021, 2)
      }
    ],
    description: (
      <>
        <p>{ translate("innostudio-description") }</p>
        <ul>
          <p className="sub-title">{ translate("my-duties") }</p>
          <li>{ translate("my-duties-1") }</li>
          <li>{ translate("my-duties-2") }</li>
          <li>{ translate("my-duties-3") }</li>
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
        place: TextLinkProvider.Company.MIRROTRON,
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
          { [[4, "construction-designer"], [5, "device-assembler"], [6, "device-installer"], [7, "process-developer"]].map((duty, index) =>
            <li key={ `duty-${ index }` }><Trans i18nKey={ `my-duties-${ duty[0] }` }
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
        place: TextLinkProvider.Company.CG_HUNGARY,
        timeStart: new Date(2018, 0),
        timeEnd: new Date(2018, 8)
      }
    ],
    description: (
      <>
        <p>{ translate("cg-description") }</p>
        <ul>
          <p className="sub-title">{ translate("responsible") }</p>
          <li>{ translate("responsible-1") }</li>
          <li>{ translate("responsible-2") }</li>
          <li>{ translate("responsible-3") }</li>
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
        place: TextLinkProvider.Company.GANZ_EEM,
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
          <li>{ translate("responsible-4") }</li>
          <li>{ translate("responsible-5") }</li>
          <li>{ translate("responsible-6") }</li>
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
        place: TextLinkProvider.Company.SIEMENS,
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
