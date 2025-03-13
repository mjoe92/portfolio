import { Constants } from "./constants";

export class ImageLoader {

  static load(url: string): string {
    const slash = url[0] === Constants.SLASH ? Constants.EMPTY : Constants.SLASH;

    return process.env.PUBLIC_URL + slash + "images" + slash + url;
  }
}