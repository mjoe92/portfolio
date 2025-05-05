import React from "react";
import { Constants } from "../../../../utils/constants";
import { t } from "i18next";

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
    XML_SCHEMA = "https://wikipedia.org/wiki/XML_Schema_(W3C)",
    APACHE_PDFBOX = "https://pdfbox.apache.org/",
    OCP_FULL = "https://www.redhat.com/technologies/cloud-computing/openshift/container-platform",
    AZURE = "https://azure.microsoft.com/"
  }

  export const load = (keys: (Company | Institut | City | Website)[], highlight?: boolean, link?: string) => {
    return <>
      { keys
      .map<React.ReactNode>(key => mapToLink(key, highlight, link))
      .reduce((prev, curr) => [prev, Constants.SPACE_MIDDLE_DOT_SPACE, curr])
      }
    </>;
  };

  function mapToLink(key: Company | Institut | City | Website, highlight?: boolean, link?: string): React.JSX.Element {
    const info: [string, string?] = keyToLinks.get(key)!;
    let entry: LinkInformation;
    if (isEnum(City, key)) {
      entry = createCityLink(key, info[0]);
    } else if (isEnum(Website, key)) {
      entry = createWebsiteLink(key, info);
    } else {
      entry = createInstitutCompanyLink(key, info);
    }

    let className = "active";
    if (highlight) {
      className += " highlight-text";
    }

    const infoLink = link || entry.link;
    return (
      <a key={ infoLink } href={ infoLink } target="_blank" rel="noreferrer">
        <span className={ className }>{ entry.name }</span>
      </a>
    );
  }

  function isEnum<T extends object>(enumObject: T, value: unknown): value is T[keyof T] {
    return Object.values(enumObject).includes(value as T[keyof T]);
  }

  const keyToLinks = new Map<Company | Institut | City | Website, [string, string?]>([
    [Company.BREDEX_GMBH, [`https://www.bredex.de`]],
    [Company.BREDEX_HU, [`https://www.bredex.hu`]],
    [Company.INNOSTUDIO, [`https://innostudio.org`]],
    [Company.MIRROTRON, [`https://mirrotron.com`]],
    [Company.CG_HUNGARY, [`https://www.ganzelectric.com/`, "cg-from-2023"]],
    [Company.GANZ_EEM, [`https://ganz.info.hu`]],
    [Company.SIEMENS, [`https://www.siemens-energy.com`]],
    [Institut.CODECOOL, [`https://codecool.com`]],
    [Institut.OBUDAI_UNIVERSITY, [`https://uni-obuda.hu`]],
    [Institut.NCT_ACADEMY, [`https://nctakademia.hu`]],
    [Institut.BME, [`https://www.bme.hu`]],
    [City.BRAUNSCHWEIG, [`germany`]],
    [City.SZEKESFEHERVAR, [`hungary`]],
    [City.BUDAPEST, [`hungary`]],
    [City.DUBNA, [`russia`]],
    [City.PEKING, [`china`]],
    [City.SYDNEY, [`australia`]],
    [Website.TYPESCRIPT, [`typescript`]],
    [Website.ANGULAR, [`angular`]],
    [Website.REACT, [`react`]],
    [Website.PRIMENG, [`prime-ng`]],
    [Website.AG_GRID, [`ag-grid`]],
    [Website.SQL, [`sql`]],
    [Website.POSTGRE_SQL, [`postgresql`]],
    [Website.MY_SQL, [`mysql`]],
    [Website.ORACLE, [`oracle`]],
    [Website.MAVEN, [`maven`]],
    [Website.APACHE_FOP, [`apache-fop`]],
    [Website.JAXB, [`jaxb`]],
    [Website.JINX, [`jinx`]],
    [Website.JAVA, [`java`]],
    [Website.JAVASCRIPT, [`javascript`]],
    [Website.FX, [`fx`]],
    [Website.SPRING, [`spring`]],
    [Website.HESSIAN, [`hessian`]],
    [Website.HIBERNATE, [`hibernate`]],
    [Website.JPA, [`jpa`]],
    [Website.LOMBOK, [`lombok`]],
    [Website.LOG4J, [`log4j`]],
    [Website.SWAGGER, [`swagger`]],
    [Website.QUARTZ_SCHEDULER, [`quartz-scheduler`]],
    [Website.APACHE_POI, [`apache-poi`]],
    [Website.APACHE_PDFBOX, [`apache-pdfbox`]],
    [Website.HTML, [`html`]],
    [Website.CSS, [`css`]],
    [Website.SASS, [`sass`]],
    [Website.SCSS, [`scss`]],
    [Website.BOOTSTRAP, [`bootstrap`]],
    [Website.JQUERY, [`jquery`]],
    [Website.JASMINE, [`jasmine`]],
    [Website.KARMA, [`karma`]],
    [Website.VBA, [`vba`]],
    [Website.XML, [`xml`]],
    [Website.XSLT, [`xslt`]],
    [Website.XML_SCHEMA, [`xml-schema`]],
    [Website.GMAIL, [`djcsurgai@gmail.com`, '/']],
    [Website.GITHUB, [`github.com/mjoe92`, 'mjoe92']],
    [Website.LINKEDIN, [`linkedin.com/csurgai`, `in/jozsef-csurgai`]],
    [Website.OCP_FULL, ['ocp-full']],
    [Website.AZURE, [`azure-cloud`]]
  ]);

  function createCityLink(city: City, countryKey: string): LinkInformation {
    return {
      name: `${ t(city) } (${ t(countryKey) })`,
      link: `https://www.google.com/maps/place/${ city }`
    };
  }

  function createWebsiteLink(website: Website, info: [string, string?]): LinkInformation {
    if (info.length > 1) {
      return {
        name: info[0],
        link: `${ website }/${ info[1] }`
      };
    }

    return {
      name: t(info[0]),
      link: website
    };
  }

  function createInstitutCompanyLink(
    key: Institut | Company,
    link: [string, string?]
  ): LinkInformation {
    let name = `${ t(key) }`;
    if (link.length > 1) {
      name += ` (${ t(link[1]) })`;
    }

    return {
      name: `${ name }`,
      link: `${ link[0] }`
    };
  }
}
