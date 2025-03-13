import { FC } from "react";
import { DropdownButton, Navbar } from "react-bootstrap";
import "../style/semantic.css";
import DropdownItem from "react-bootstrap/DropdownItem";
import { Language } from "../../../i18n/language";
import translate from "../../../i18n/locale-service";
import { Constants } from "../../../utils/constants";
import i18next from "i18next";

export const Footer: FC = () => {
  const currentLanguage = i18next.language;

  const createDropdownItemText = (language: Language) => {
    const createFullLanguageText = (languageKey: string) => {
      const prefix = language.toUpperCase() + Constants.COLON_SPACE;
      if (currentLanguage === Language.ENGLISH) {
        return prefix + translate(languageKey);
      }

      return prefix + languageKey + Constants.SPACE_PARENTHESIS_LEFT + translate(languageKey) + Constants.PARENTHESIS_RIGHT;
    };

    switch (language) {
      case Language.ENGLISH:
        return createFullLanguageText("english");
      case Language.HUNGARIAN:
        return createFullLanguageText("hungarian");
      case Language.GERMAN:
        return createFullLanguageText("german");
      // case Language.RUSSIAN:
      //   return createFullLanguageText("russian");
    }
  };

  return (
    <footer className="navbar-fixed-bottom">
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
        <DropdownButton
          title={ currentLanguage.toUpperCase() }
          variant="secondary"
          drop="up">
          {
            Object.values(Language).map(language =>
              <DropdownItem key={ language } variant="secondary"
                            onClick={ () => i18next.changeLanguage(language).then(() => window.location.reload())
                            }>
                { createDropdownItemText(language) }
              </DropdownItem>)
          }
        </DropdownButton>
      </Navbar>
    </footer>
  );
};
