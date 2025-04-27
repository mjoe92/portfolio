import { Constants } from "./constants"; 
import { t } from "i18next";

export class FileUrlResolver {
  static load(folderName: FolderType, nameKey: string, ...value: any[]): string {
    return process.env.PUBLIC_URL + Constants.SLASH + folderName + Constants.SLASH + t(nameKey, value);
  }
}

export enum FolderType {
  IMAGE =  "images",
  DOCUMENT = "documents",
}
