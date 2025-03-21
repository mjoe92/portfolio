import { Level } from "./level";

export interface Language {
  key: string;
  oralLevel: Level;
  writeLevel?: Level;
  oralMessage?: string;
  writeMessage?: string;
  disabled?: boolean;
}

const languageContent: Language[] = [
  {
    key: "hungarian",
    oralLevel: Level.N,
    oralMessage:
      "Mandatory to know in Hungary, learnt from my father and in schools.",
  },
  {
    key: "russian",
    oralLevel: Level.N,
    writeLevel: Level.B2,
    oralMessage:
      "Since my mother is russian, I was able to learn from her" +
      " and currently speaking it with my parents.",
    writeMessage:
      "Unfortunately there were less chances to learn writing," +
      " my subject teacher teached me.",
  },
  {
    key: "english",
    oralLevel: Level.C2,
    oralMessage:
      "Learnt from my school teachers, practised in the workplaces" +
      " and cartoon network. Sometimes when I tired, I go on Hunglish!",
  },
  {
    key: "german",
    oralLevel: Level.B2,
    oralMessage:
      "Begin to learn in the university but kept prociding from BREDEX GmbH",
  },
  {
    key: "rench",
    oralLevel: Level.A0,
    writeLevel: Level.A1,
    oralMessage: "Learnt in the secondary school but forgot a lot every since.",
    writeMessage:
      "Still have better knowledge and more time to think during writing",
    disabled: true,
  },
];

export default languageContent;
