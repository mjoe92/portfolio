import translate from "../../../../i18n/locale-service";
import { HistoryEntry } from "./base-history";
import { Field } from "./field";
import { TextLinkProvider } from "./text-link-provider";

export const educationContent: HistoryEntry[] = [
  {
    id: "codecool2",
    titles: [translate("java-enterprise-backend-developer")],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.CODECOOL,
        timeStart: new Date(2021, 5),
        timeEnd: new Date(2021, 8)
      }
    ],
    description: (
      <>
        <p>{ translate("codecool-description-1") }</p>
        <ul>
          <p className="sub-title">{ translate("tech-stacks-colon") }</p>
          <li>{ translate("tech-stack-1") }</li>
          <li>{ translate("tech-stack-2") }</li>
          <li>{ translate("tech-stack-3") }</li>
          <li>{ translate("tech-stack-4") }</li>
        </ul>
      </>
    ),
    field: Field.P
  },
  {
    id: "codecool1",
    titles: [translate("java-backend-developer")],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.CODECOOL,
        timeStart: new Date(2020, 11),
        timeEnd: new Date(2021, 2)
      }
    ],
    description: (
      <>
        <p>{ translate("codecool-description-2") }</p>
        <ul>
          <p className="sub-title">{ translate("tech-stacks-colon") }</p>
          <li>{ translate("tech-stack-5") }</li>
          <li>{ translate("tech-stack-6") }</li>
          <li>{ translate("tech-stack-7") }</li>
        </ul>
      </>
    ),
    field: Field.P
  },
  {
    id: "obudai",
    titles: [translate("mechatronics-msc")],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.OBUDAI_UNIVERSITY,
        timeStart: new Date(2016, 8),
        timeEnd: new Date(2019, 0)
      }
    ],
    description: translate("obudai-description"),
    field: Field.E
  },
  {
    id: "nct2",
    titles: [translate("four-and-five-axis-programming-technology")],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.NCT_ACADEMY,
        timeStart: new Date(2015, 10),
        timeEnd: new Date(2016, 7)
      }
    ],
    description: translate("nct-description-1"),
    field: Field.M
  },
  {
    id: "nct1",
    titles: [translate("cad-cam-cnc-programming")],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.NCT_ACADEMY,
        timeStart: new Date(2015, 2),
        timeEnd: new Date(2015, 10)
      }
    ],
    description: translate("nct-description-2"),
    field: Field.M
  },
  {
    id: "bme",
    titles: [translate("mechanical-engineer-bsc")],
    placePeriods: [
      {
        place: TextLinkProvider.Institut.BME,
        timeStart: new Date(2011, 8),
        timeEnd: new Date(2016, 5)
      }
    ],
    description: translate("bme-description"),
    field: Field.E
  }
];
