import { HistoryEntry } from "./base-history";
import { Field } from "./field";
import { TextLinkProvider } from "./text-link-provider";

import Institut = TextLinkProvider.Institut;
import City = TextLinkProvider.City;

const educationContent = (t: (key: string) => string): HistoryEntry[] => [
  {
    id: "codecool2",
    titles: [t("java-enterprise-backend-developer")],
    placePeriods: [
      {
        place: Institut.CODECOOL,
        cities: [City.SZEKESFEHERVAR],
        timeStart: new Date(2021, 5),
        timeEnd: new Date(2021, 8)
      }
    ],
    description: (
      <>
        <p>{ t("codecool-description-1") }</p>
        <ul>
          <p className="sub-title">{ t("tech-stacks-colon") }</p>
          <li>{ t("tech-stack-1") }</li>
          <li>{ t("tech-stack-2") }</li>
          <li>{ t("tech-stack-3") }</li>
          <li>{ t("tech-stack-4") }</li>
        </ul>
      </>
    ),
    field: Field.P,
    certificates: [t('junior-enterprise-java-backend-developer-certificate')]
  },
  {
    id: "codecool1",
    titles: [t("java-backend-developer")],
    placePeriods: [
      {
        place: Institut.CODECOOL,
        cities: [City.BUDAPEST, City.SZEKESFEHERVAR],
        timeStart: new Date(2020, 11),
        timeEnd: new Date(2021, 2)
      }
    ],
    description: (
      <>
        <p>{ t("codecool-description-2") }</p>
        <ul>
          <p className="sub-title">{ t("tech-stacks-colon") }</p>
          <li>{ t("tech-stack-5") }</li>
          <li>{ t("tech-stack-6") }</li>
          <li>{ t("tech-stack-7") }</li>
        </ul>
      </>
    ),
    field: Field.P,
    certificates: [t('junior-java-backend-developer-certificate')]
  },
  {
    id: "obudai",
    titles: [t("mechatronics-msc")],
    placePeriods: [
      {
        place: Institut.OBUDAI_UNIVERSITY,
        cities: [City.BUDAPEST],
        timeStart: new Date(2016, 8),
        timeEnd: new Date(2019, 0)
      }
    ],
    description: <>{ t("obudai-description") }</>,
    field: Field.E
  },
  {
    id: "nct2",
    titles: [t("four-and-five-axis-programming-technology")],
    placePeriods: [
      {
        place: Institut.NCT_ACADEMY,
        cities: [City.BUDAPEST],
        timeStart: new Date(2015, 10),
        timeEnd: new Date(2016, 7)
      }
    ],
    description: <>{ t("nct-description-1") }</>,
    field: Field.M
  },
  {
    id: "nct1",
    titles: [t("cad-cam-cnc-programming")],
    placePeriods: [
      {
        place: Institut.NCT_ACADEMY,
        cities: [City.BUDAPEST],
        timeStart: new Date(2015, 2),
        timeEnd: new Date(2015, 10)
      }
    ],
    description: <>{ t("nct-description-2") }</>,
    field: Field.M,
    certificates: [t('cad-cam-cnc-programmer-technologist-certificate')]
  },
  {
    id: "bme",
    titles: [t("mechanical-engineer-bsc")],
    placePeriods: [
      {
        place: Institut.BME,
        cities: [City.BUDAPEST],
        timeStart: new Date(2011, 8),
        timeEnd: new Date(2016, 5)
      }
    ],
    description: <>{ t("bme-description") }</>,
    field: Field.E,
    certificates: [t('mechanical-engineer-bsc-degree')]
  }
];

export default educationContent;
