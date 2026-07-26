import { FC, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavItem } from "./nav-item";
import MainPage, { linkContent } from "./specification/link";

import "../style/semantic.css";

export const Header: FC = () => {
  const [navLinks] = useState<MainPage[]>(linkContent);

  const isDisabled = (link: MainPage): boolean => {
    return link.disabled === null || link.disabled === undefined
      ? false
      : link.disabled;
  };

  const renderPageGroups = (): React.JSX.Element => {
    return (
      <Navbar.Collapse id="navbar" className="navbar">
        { navLinks
        .filter((link) => !link.disabled)
        .map((link) => (
          <NavItem
            id={ link.id }
            key={ link.id }
            items={ link.pages }
            expo={ link.expo }
            title={ link.title }
            disabled={ isDisabled(link) }
          />
        )) }
      </Navbar.Collapse>
    );
  };

  return (
    <header className="navbar-fixed-top">
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
        <Container fluid className="navbar-nav mr-auto">
          {/* {renderMainPage()} */ }
          <Navbar.Toggle aria-controls="navbar"/>
          { renderPageGroups() }
        </Container>
      </Navbar>
    </header>
  );
};
