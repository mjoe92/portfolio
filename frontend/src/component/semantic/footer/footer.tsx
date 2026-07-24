import React, { FC } from "react";
import { Button, DropdownButton, Navbar } from "react-bootstrap";
import "../style/semantic.css";
import DropdownItem from "react-bootstrap/DropdownItem";
import { Language } from "../../../i18n/language";
import { Constants } from "../../../utils/constants";
import i18next, { changeLanguage } from "i18next";

import './style/footer.css';
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import SvgReactIcon from "../../design/svg-react-icon";
import { FileUrlResolver, FolderType } from "../../../utils/file-url-resolver";
import { useTranslation } from "react-i18next";
import { BiographyExport } from "../../pages/biography/export/pdf-export";
import { pdf } from "@react-pdf/renderer";

export const Footer: FC = () => {
  const currentLanguage = i18next.language;

  const { t } = useTranslation();

  const createDropdownItemText = (language: Language) => {
    const createFullLanguageText = (languageKey: string) => {
      const prefix = language.toUpperCase() + Constants.COLON_SPACE;
      if (currentLanguage === Language.ENGLISH) {
        return prefix + t(languageKey);
      }

      return prefix + languageKey + Constants.SPACE_PARENTHESIS_LEFT + t(languageKey) + Constants.PARENTHESIS_RIGHT;
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

  const exportPdf = () => {
    const link = document.createElement("a");
    link.href = FileUrlResolver.load(FolderType.DOCUMENT, "cv-input-file-name", currentLanguage.toUpperCase());
    link.download = t("cv-output-file-name");
    link.click();
  };

  const exportPdf1 = async () => {
    const blob = await pdf(<BiographyExport/>).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = t("cv-output-file-name");
    link.click();
  };

  return (
    <footer className="navbar-fixed-bottom">
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-left">
          <DropdownButton title={ currentLanguage.toUpperCase() } variant="secondary" drop="up" data-bs-theme="dark">
            { Object.values(Language)
            .filter((language) => language !== currentLanguage)
            .map((language) => (
              <DropdownItem key={ language } onClick={ () => changeLanguage(language) }>
                { createDropdownItemText(language) }
              </DropdownItem>
            )) }
          </DropdownButton>
        </div>
        <div className="navbar-right">
          <Button variant="secondary" onClick={ exportPdf }>
            <SvgReactIcon key={ "print" } icons={ [faPrint] }/>
          </Button>
          {/*<Button variant="secondary" onClick={ exportPdf1 }>*/ }
          {/*  <SvgReactIcon key={ "tree" } icons={ [faTree] }/>*/ }
          {/*</Button>*/ }
        </div>
      </Navbar>
    </footer>
  );
};