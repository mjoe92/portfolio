export namespace TextLinkProvider {
  interface LinkInformation {
    name: string;
    link: string;
    description?: string;
  }

  export enum Company {
    BREDEX_GMBH = `Bredex GmbH`,
    BREDEX_HU = `Bredex Hungary Ltd.`,
    INNOSTUDIO = `Innostudio Inc.`,
    MIRROTRON = `Mirrotron Ltd.`,
    CG_HUNGARY = `CG Electric Systems Hungary Inc.`,
    GANZ_EEM = `Ganz Engineering and Energetics Machinery Ltd.`,
    SIEMENS = `Siemens Energy Ltd.`,
  }

  export enum Institut {
    CODECOOL = `Codecool`,
    OBUDAI_UNIVERSITY = `Óbudai University`,
    NCT_ACADEMY = `NCT Academy`,
    BME = `Budapest University of Technology and Economics`,
  }

  export enum City {
    BRAUNSCHWEIG = `Braunschweig`,
    BUDAPEST = `Budapest`,
    DUBNA = `Dubna`,
    PEKING = 'Peking',
    SYDNEY = 'Sydney',
    SZEKESFEHERVAR = `Székesfehérvár`,
  }

  export enum Website {
    GITHUB = `https://github.com`,
    LINKEDIN = `https://www.linkedin.com`,
    GMAIL = `https://mail.google.com`,
  }

  export function load(key: Company | Institut | City | Website, highlight?: boolean): JSX.Element {
    const info = keyToLinkInfos.get(key)!;
    let className = "active";
    if (highlight) {
      className += " highlight-text"
    }

    return (
      <a href={info.link} target="_blank" rel="noreferrer">
        <span className={className}>{info.name}</span>
      </a>
    );
  }

  const keyToLinkInfos = new Map<Company | Institut | City | Website, LinkInformation>([
    createInstitutCompanyEntry(Company.BREDEX_GMBH, `https://www.bredex.de`),
    createInstitutCompanyEntry(Company.BREDEX_HU, `https://www.bredex.hu`),
    createInstitutCompanyEntry(Company.INNOSTUDIO, `https://innostudio.org`),
    createInstitutCompanyEntry(Company.MIRROTRON, `https://mirrotron.com`),
    createInstitutCompanyEntry(Company.CG_HUNGARY, `https://www.ganzelectric.com/`, "from 2023 Ganz Electric"),
    createInstitutCompanyEntry(Company.GANZ_EEM, `https://ganz.info.hu`),
    createInstitutCompanyEntry(Company.SIEMENS, `https://www.siemens-energy.com`),
    createInstitutCompanyEntry(Institut.CODECOOL, `https://codecool.com`),
    createInstitutCompanyEntry(Institut.OBUDAI_UNIVERSITY, `https://uni-obuda.hu`),
    createInstitutCompanyEntry(Institut.NCT_ACADEMY, `https://nctakademia.hu`),
    createInstitutCompanyEntry(Institut.BME, `https://www.bme.hu`),
    createCityEntry(City.BRAUNSCHWEIG, "Germany"),
    createCityEntry(City.SZEKESFEHERVAR, "Hungary"),
    createCityEntry(City.BUDAPEST, "Hungary"),
    createCityEntry(City.DUBNA, "Russia"),
    createCityEntry(City.PEKING, "China"),
    createCityEntry(City.SYDNEY, "Australia"),
    [
      Website.GITHUB,
      {
        name: `github.com/mjoe92`,
        link: `${Website.GITHUB}/mjoe92`,
      },
    ],
    [
      Website.LINKEDIN,
      {
        name: `linkedin.com/csurgai`,
        link: `${Website.LINKEDIN}/in/jozsef-csurgai`,
      },
    ],
    [
      Website.GMAIL,
      {
        name: `djcsurgai@gmail.com`,
        link: `${Website.GMAIL}`,
      },
    ],
  ]);

  function createCityEntry(city: City, country: string): [City, LinkInformation] {
    return [
      city,
      {
        name: `${city} (${country})`,
        link: `https://www.google.com/maps/place/${city}`,
      },
    ];
  }

  function createInstitutCompanyEntry(
    key: Institut | Company,
    page: string,
    nameSuffix?: string
  ): [Institut | Company, LinkInformation] {
    let name = `${key}`;
    if (nameSuffix) {
      name += ` (${nameSuffix})`;
    }

    return [
      key,
      {
        name: `${name}`,
        link: `${page}`,
      },
    ];
  }
}
