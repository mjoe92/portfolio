import {t} from "i18next";
import i18next from "./config";

export default function translate(key: string, ...value: any[]) {
  // the context outside React will eventually call translation in the lifecycle
  if (i18next.isInitialized) {
    const valuesToParse = value.reduce((accumulator, currentValue, index) => {
      accumulator[index] = currentValue;
      return accumulator;
    }, {} as [number, any]);

    return t([key, `common:${key}`], valuesToParse);
  }
}
