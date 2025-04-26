import { Constants } from "./constants"; 
import translate from "../i18n/locale-service";

export class FileUrlResolver {
  static load(folderName: FolderType, nameKey: string, ...value: any[]): string {
    return process.env.PUBLIC_URL + Constants.SLASH + folderName + Constants.SLASH + translate(nameKey, value);
  }
}

export enum FolderType {
  IMAGE =  "images",
  DOCUMENT = "documents",
}
