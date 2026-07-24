import { IconDefinition } from "@fortawesome/free-solid-svg-icons"; 
import { SVG_ICONS } from "./svg-icons";

export interface IconInput {
  name: string;
  id: string;
}

export interface IconVo {
  name: string;
  icon: IconDefinition;
}

export const mapIcon = (icon: IconInput): IconVo => ({
  name: icon.name,
  icon: SVG_ICONS.get(icon.id)!
});
