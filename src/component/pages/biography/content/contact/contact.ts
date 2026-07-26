import React from "react"; 
import { IconInput } from "../icon"; 
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"; 

export interface TextLink {
  id: string
}

export interface ContactInput {
  name: string;
  icon: IconInput;
  textLinks: TextLink[],
  highlight?: boolean,
  link?: string
}

export interface ContactVo {
  name: string;
  icon: IconDefinition;
  text: React.JSX.Element;
  disabled?: boolean;
}