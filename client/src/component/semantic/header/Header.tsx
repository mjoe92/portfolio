import { FC, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import "../style/semantic.css";
import { LeftNavItem } from "./LeftNavItem";
import ILink, { linkContent } from "./specification/ILink";

export const Header: FC = () => {
  const [navLinks] = useState<ILink[]>(linkContent);

  const isDisabled = (link: ILink): boolean => {
    return link.disabled == null || link.disabled == undefined
      ? false
      : link.disabled;
  };

  return (
    <header className="navbar-fixed-top">
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
        <Container fluid className="navbar-nav mr-auto">
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="navbar">
            {navLinks.map((link) => (
              <LeftNavItem
                id={link.id}
                items={link.pages}
                expo={link.expo}
                title={link.title}
                disabled={isDisabled(link)}
              />
            ))}
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
