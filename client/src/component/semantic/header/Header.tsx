import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";
import {
  Container,
  Navbar,
} from "react-bootstrap";
import { PageFragment } from "../../../router/EPageFragment";
import SvgReactIcon from "../../icon/SvgReactIcon";
import "../style/semantic.css";
import { LeftNavItem } from "./LeftNavItem";
import IMainPage, { linkContent } from "./specification/ILink";

export const Header: FC = () => {
  const [navLinks] = useState<IMainPage[]>(linkContent);

  const isDisabled = (link: IMainPage): boolean => {
    return link.disabled == null || link.disabled == undefined
      ? false
      : link.disabled;
  };

  const makeUrl = (expo: string): string => {
    return expo.toLowerCase().replace(" ", "-");
  };

  const renderMainPage = (): JSX.Element => {
    //const navDropdownTitle = <Glyphicon glyph="star"> Dropdown </Glyphicon>;
    return (
      <Navbar.Brand href={PageFragment.HOME} onSubmit={handleClick}>
        <SvgReactIcon icons={[faHouse]} />
      </Navbar.Brand>
    );
  };

  const renderPageGroups = (): JSX.Element => {
    return <Navbar.Collapse id="navbar" className="navbar">{
      navLinks.map((link) => (
      <LeftNavItem
        id={link.id}
        items={link.pages}
        expo={link.expo}
        title={link.title}
        disabled={isDisabled(link)}
      />
    ))
    }</Navbar.Collapse>
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
  }

  return (
    <header className="navbar-fixed-top">
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
        <Container fluid className="navbar-nav mr-auto">
          {renderMainPage()}
          <Navbar.Toggle aria-controls="navbar" />
          {renderPageGroups()}

          {/* <Navbar.Collapse id="navbar" className="navbar">
            <Nav>
              <Nav.Link href="#blog">RIGHT-NAV</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </header>
  );
};
