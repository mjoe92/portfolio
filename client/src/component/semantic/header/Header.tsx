import { faGlobe, faPager } from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";
import {
  Button,
  Container,
  DropdownButton,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import SvgReactIcon from "../../icon/SvgReactIcon";
import "../style/semantic.css";
import { LeftNavItem } from "./LeftNavItem";
import { RightNav } from "./RigthNav";
import ILink, { linkContent } from "./specification/ILink";

export const Header: FC = () => {
  const [navLinks] = useState<ILink[]>(linkContent);

  const isDisabled = (link: ILink): boolean => {
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
      <Navbar.Brand href="home">
        <SvgReactIcon icons={[faPager]} />
      </Navbar.Brand>
    );
  };

  const renderPageGroups = (): JSX.Element[] => {
    return navLinks.map((link) => (
      <LeftNavItem
        id={link.id}
        items={link.pages}
        expo={link.expo}
        title={link.title}
        disabled={isDisabled(link)}
      />
    ));
  };

  return (
    <header className="navbar-fixed-top">
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
        <Container fluid className="navbar-nav mr-auto">
          {renderMainPage()}
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="navbar">
            {renderPageGroups()}
          </Navbar.Collapse>

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
