import translate from "../../../../i18n/locale-service";
import React from "react";
import { Constants } from "../../../../utils/constants";

export namespace TextLinkProvider {
  interface LinkInformation {
    name: string;
    link: string;
    description?: string;
  }

  export enum Company {
    BREDEX_GMBH = `bredex-germany`,
    BREDEX_HU = `bredex-hungary`,
    INNOSTUDIO = `innostudio`,
    MIRROTRON = `mirrotron`,
    CG_HUNGARY = `cg-electric-systems-hungary`,
    GANZ_EEM = `ganz-eem`,
    SIEMENS = `siemens-energy`,
  }

  export enum Institut {
    CODECOOL = `codecool`,
    OBUDAI_UNIVERSITY = `obudai-university`,
    NCT_ACADEMY = `nct-academy`,
    BME = `bme`,
  }

  export enum City {
    BRAUNSCHWEIG = `braunschweig`,
    BUDAPEST = `budapest`,
    DUBNA = `dubna`,
    PEKING = 'peking',
    SYDNEY = 'sydney',
    SZEKESFEHERVAR = `szekesfehervar`,
  }

  export enum Website {
    GITHUB = `https://github.com`,
    LINKEDIN = `https://www.linkedin.com`,
    GMAIL = `https://mail.google.com`,
  }

  export function load(keys: (Company | Institut | City | Website)[], highlight?: boolean, link?: string) {
    return <>
      { keys
      .map<React.ReactNode>(key => mapToLink(key, highlight, link))
      .reduce((prev, curr) => [prev, Constants.COMMA_SPACE, curr])
      }
    </>;
  }

  function mapToLink(key: Company | Institut | City | Website, highlight?: boolean, link?: string): React.JSX.Element {
    const info = keyToLinkInfos.get(key)!;
    let className = "active";
    if (highlight) {
      className += " highlight-text";
    }

    const infoLink = link || info.link;
    return (
      <a key={ key } href={ infoLink } target="_blank" rel="noreferrer">
        <span className={ className }>{ info.name }</span>
      </a>
    );
  }

  const keyToLinkInfos = new Map<Company | Institut | City | Website, LinkInformation>([
    createInstitutCompanyEntry(Company.BREDEX_GMBH, `https://www.bredex.de`),
    createInstitutCompanyEntry(Company.BREDEX_HU, `https://www.bredex.hu`),
    createInstitutCompanyEntry(Company.INNOSTUDIO, `https://innostudio.org`),
    createInstitutCompanyEntry(Company.MIRROTRON, `https://mirrotron.com`),
    createInstitutCompanyEntry(Company.CG_HUNGARY, `https://www.ganzelectric.com/`, "cg-from-2023"),
    createInstitutCompanyEntry(Company.GANZ_EEM, `https://ganz.info.hu`),
    createInstitutCompanyEntry(Company.SIEMENS, `https://www.siemens-energy.com`),
    createInstitutCompanyEntry(Institut.CODECOOL, `https://codecool.com`),
    createInstitutCompanyEntry(Institut.OBUDAI_UNIVERSITY, `https://uni-obuda.hu`),
    createInstitutCompanyEntry(Institut.NCT_ACADEMY, `https://nctakademia.hu`),
    createInstitutCompanyEntry(Institut.BME, `https://www.bme.hu`),
    createCityEntry(City.BRAUNSCHWEIG, "germany"),
    createCityEntry(City.SZEKESFEHERVAR, "hungary"),
    createCityEntry(City.BUDAPEST, "hungary"),
    createCityEntry(City.DUBNA, "russia"),
    createCityEntry(City.PEKING, "china"),
    createCityEntry(City.SYDNEY, "australia"),
    [
      Website.GITHUB,
      {
        name: `github.com/mjoe92`,
        link: `${ Website.GITHUB }/mjoe92`
      }
    ],
    [
      Website.LINKEDIN,
      {
        name: `linkedin.com/csurgai`,
        link: `${ Website.LINKEDIN }/in/jozsef-csurgai`
      }
    ],
    [
      Website.GMAIL,
      {
        name: `djcsurgai@gmail.com`,
        link: `${ Website.GMAIL }`
      }
    ]
  ]);

  function createCityEntry(city: City, countryKey: string): [City, LinkInformation] {
    return [
      city,
      {
        name: `${ translate(city) } (${ translate(countryKey) })`,
        link: `https://www.google.com/maps/place/${ city }`
      }
    ];
  }

  function createInstitutCompanyEntry(
    key: Institut | Company,
    page: string,
    nameSuffix?: string
  ): [Institut | Company, LinkInformation] {
    let name = `${ translate(key) }`;
    if (nameSuffix) {
      name += ` (${ translate(nameSuffix) })`;
    }

    return [
      key,
      {
        name: `${ name }`,
        link: `${ page }`
      }
    ];
  }
}
