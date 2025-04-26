import { Constants } from "./constants";

export class FileUrlResolver {
  static load(name: string, type: Type): string {
    const slash = name[0] === Constants.SLASH ? Constants.EMPTY : Constants.SLASH;

    return process.env.PUBLIC_URL + slash + type + slash + name;
  }
}

export enum Type {
  IMAGE =  "images",
  DOCUMENT = "documents",
}
