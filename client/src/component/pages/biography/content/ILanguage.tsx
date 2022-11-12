import { Level } from "./ELevel";

export default interface ILanguage {
  name: string;
  oralLevel: Level;
  writeLevel?: Level;
  oralMessage?: string;
  writeMessage?: string;
}

export const languageContent: ILanguage[] = [
  {
    name: "Hungarian",
    oralLevel: Level.N,
    oralMessage:
      "Mandatory to know in Hungary, learnt from my father and in schools.",
  },
  {
    name: "Russian",
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
    name: "English",
    oralLevel: Level.C1,
    oralMessage:
      "Learnt from my school teachers, practised in the workplaces" +
      " and cartoon network. Sometimes when I tired, I go on Hunglish!",
  },
  {
    name: "German",
    oralLevel: Level.A2,
    oralMessage:
      "Begin to learn in the university but kept prociding from BREDEX GmbH",
  },
  {
    name: "French",
    oralLevel: Level.A0,
    writeLevel: Level.A1,
    oralMessage: "Learnt in the secondary school but forgot a lot every since.",
    writeMessage:
      "Still have better knowledge and more time to think during writing",
  },
];
