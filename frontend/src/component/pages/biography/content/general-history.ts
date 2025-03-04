import { HistoryEntry } from "./base-history";
import IContact from "./contact";
import IInterest from "./interest";
import ILanguage from "./language";
import ISkill from "./skill";

export interface GeneralHistory {
  jobList: HistoryEntry[];
  educationList: HistoryEntry[];
  interestList: IInterest[];
  skillList?: ISkill[];
  languageList?: ILanguage[];
  contactList?: IContact[];
}
