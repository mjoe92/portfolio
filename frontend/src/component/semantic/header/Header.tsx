import { FC, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EPageFragment } from "../../../router/EPageFragment";
import SvgReactIcon from "../../design/SvgReactIcon";
import { NavItem } from "./NavItem";
import IMainPage, { linkContent } from "./specification/ILink";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "../style/semantic.css";

export const Header: FC = () => {
  const [navLinks] = useState<IMainPage[]>(linkContent);

  const isDisabled = (link: IMainPage): boolean => {
    return link.disabled === null || link.disabled === undefined
      ? false
      : link.disabled;
  };

  const renderMainPage = (): JSX.Element => {
    //const navDropdownTitle = <Glyphicon glyph="star"> Dropdown </Glyphicon>;
    return (
      <Navbar.Brand onSubmit={handleClick}>
        <Link to={EPageFragment.HOME}>
          <SvgReactIcon key="homePage" icons={[faHouse]} />
        </Link>
      </Navbar.Brand>
    );
  };

  const renderPageGroups = (): JSX.Element => {
    return (
      <Navbar.Collapse id="navbar" className="navbar">
        {navLinks
          .filter((link) => !link.disabled)
          .map((link) => (
            <NavItem
              id={link.id}
              key={link.id}
              items={link.pages}
              expo={link.expo}
              title={link.title}
              disabled={isDisabled(link)}
            />
          ))}
      </Navbar.Collapse>
    );
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
  };

  return (
    <header className="navbar-fixed-top">
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
        <Container fluid className="navbar-nav mr-auto">
          {renderMainPage()}
          <Navbar.Toggle aria-controls="navbar" />
          {renderPageGroups()}
        </Container>
      </Navbar>
    </header>
  );
};