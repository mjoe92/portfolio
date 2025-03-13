import { HistoryEntry } from "./base-history";
import { IContact} from "./contact";
import IInterest from "./interest";
import ILanguage from "./language";
import Skill from "./skill";

export interface GeneralHistory {
  jobList: HistoryEntry[];
  educationList: HistoryEntry[];
  interestList?: IInterest[];
  skillList?: Skill[];
  languageList?: ILanguage[];
  contactList?: IContact[];
}
