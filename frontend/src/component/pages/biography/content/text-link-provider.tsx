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
    GITHUB = "https://github.com",
    LINKEDIN = "https://www.linkedin.com",
    GMAIL = "https://mail.google.com",
    TYPESCRIPT = "https://www.typescriptlang.org/",
    ANGULAR = "https://angular.dev/",
    REACT = "https://react.dev/",
    PRIMENG = "https://primeng.org/",
    AG_GRID = "https://www.ag-grid.com/",
    SQL = "https://wikipedia.org/wiki/SQL",
    POSTGRE_SQL = "https://www.postgresql.org/",
    MY_SQL = "https://www.mysql.com/",
    ORACLE = "https://docs.oracle.com/en/database/oracle/oracle-database/18/sqlrf/Introduction-to-Oracle-SQL.html",
    MAVEN = "https://maven.apache.org/",
    APACHE_FOP = "https://xmlgraphics.apache.org/fop/",
    JAXB = "https://javaee.github.io/jaxb-v2/",
    JINX = "https://exceljava.com/",
    JAVA = "https://www.java.com/",
    FX = "https://openjfx.io/",
    SPRING = "https://spring.io/",
    HESSIAN = "http://hessian.caucho.com/",
    HIBERNATE = "https://hibernate.org/",
    JPA = "https://spring.io/projects/spring-data-jpa",
    LOMBOK = "https://projectlombok.org/",
    LOG4J = "https://logging.apache.org/log4j/2.x/index.html",
    SWAGGER = "https://swagger.io/",
    QUARTZ_SCHEDULER = "https://www.quartz-scheduler.org/",
    APACHE_POI = "https://poi.apache.org/",
    HTML = "https://developer.mozilla.org/docs/Web/HTML",
    CSS = "https://developer.mozilla.org/docs/Web/CSS",
    SASS = "https://sass-lang.com/documentation/modules/",
    SCSS = "https://sass-lang.com/documentation/syntax/",
    BOOTSTRAP = "https://getbootstrap.com/",
    JAVASCRIPT = "https://www.javascript.com/",
    JQUERY = "https://jquery.com/",
    JASMINE = "https://jasmine.github.io/",
    KARMA = "https://karma-runner.github.io/6.4/index.html",
    VBA = "https://learn.microsoft.com/office/vba/library-reference/concepts/getting-started-with-vba-in-office",
    XSLT = "https://developer.mozilla.org/docs/Web/XML/XSLT",
    XML = "https://developer.mozilla.org/docs/Web/XML/Guides/XML_introduction",
    XML_SCHEMA = "https://wikipedia.org/wiki/XML_Schema_(W3C)"
  }

  export function load(keys: (Company | Institut | City | Website)[], highlight?: boolean, link?: string) {
    return <>
      { keys
      .map<React.ReactNode>(key => mapToLink(key, highlight, link))
      .reduce((prev, curr) => [prev, Constants.SPACE_MIDDLE_DOT_SPACE, curr])
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
      <a key={ infoLink } href={ infoLink } target="_blank" rel="noreferrer">
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
    createHardSkillEntry(Website.TYPESCRIPT, 'typescript'),
    createHardSkillEntry(Website.ANGULAR, 'angular'),
    createHardSkillEntry(Website.REACT, 'react'),
    createHardSkillEntry(Website.PRIMENG, 'prime-ng'),
    createHardSkillEntry(Website.AG_GRID, 'ag-grid'),
    createHardSkillEntry(Website.SQL, 'sql'),
    createHardSkillEntry(Website.POSTGRE_SQL, 'postgresql'),
    createHardSkillEntry(Website.MY_SQL, 'mysql'),
    createHardSkillEntry(Website.ORACLE, 'oracle'),
    createHardSkillEntry(Website.MAVEN, 'maven'),
    createHardSkillEntry(Website.APACHE_FOP, 'apache-fop'),
    createHardSkillEntry(Website.JAXB, 'jaxb'),
    createHardSkillEntry(Website.JINX, 'jinx'),
    createHardSkillEntry(Website.JAVA, 'java'),
    createHardSkillEntry(Website.FX, 'fx'),
    createHardSkillEntry(Website.SPRING, 'spring'),
    createHardSkillEntry(Website.HESSIAN, 'hessian'),
    createHardSkillEntry(Website.HIBERNATE, 'hibernate'),
    createHardSkillEntry(Website.JPA, 'jpa'),
    createHardSkillEntry(Website.LOMBOK, 'lombok'),
    createHardSkillEntry(Website.LOG4J, 'log4j'),
    createHardSkillEntry(Website.SWAGGER, 'swagger'),
    createHardSkillEntry(Website.QUARTZ_SCHEDULER, 'quartz-scheduler'),
    createHardSkillEntry(Website.APACHE_POI, 'apache-poi'),
    createHardSkillEntry(Website.HTML, 'html'),
    createHardSkillEntry(Website.CSS, 'css'),
    createHardSkillEntry(Website.SASS, 'sass'),
    createHardSkillEntry(Website.SCSS, 'scss'),
    createHardSkillEntry(Website.BOOTSTRAP, 'bootstrap'),
    createHardSkillEntry(Website.JAVASCRIPT, 'javascript'),
    createHardSkillEntry(Website.JQUERY, 'jquery'),
    createHardSkillEntry(Website.JASMINE, 'jasmine'),
    createHardSkillEntry(Website.KARMA, 'karma'),
    createHardSkillEntry(Website.VBA, 'vba'),
    createHardSkillEntry(Website.XML, 'xml'),
    createHardSkillEntry(Website.XSLT, 'xslt'),
    createHardSkillEntry(Website.XML_SCHEMA, 'xml-schema'),
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

  function createHardSkillEntry(website: Website, name: string): [Website, LinkInformation] {
    return [
      website,
      {
        name: translate(name),
        link: website
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
