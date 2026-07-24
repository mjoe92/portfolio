import { Constants } from "./constants"; 
import { t } from "i18next";

export class FileUrlResolver {

  private static BASE_URL: string = import.meta.env.BASE_URL;

  static load(folderName: FolderType, nameKey: string, ...value: any[]): string {
    return this.BASE_URL + Constants.SLASH + folderName + Constants.SLASH + t(nameKey, value);
  }
}

export enum FolderType {
  IMAGE =  "images",
  DOCUMENT = "documents",
}
