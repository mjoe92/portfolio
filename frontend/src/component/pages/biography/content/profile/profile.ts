import { CityPeriod,CityPeriodInput } from "../base-history";
import React from "react";

export interface ProfileInput {
  name: string;
  birth: CityPeriodInput;
  living: CityPeriodInput;
  phone: string;
  email: string;
  github: string;
}

export interface ProfileVo {
  name: string;
  birth: CityPeriod;
  living: CityPeriod;
  phone: string;
  email: string;
  github: string;
  description?: React.JSX.Element;
}
