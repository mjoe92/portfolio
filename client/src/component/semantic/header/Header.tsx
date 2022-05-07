import { FC, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import "../semantic-style/semantic.css";
import IPageItem from "./IPageItem";
import { LeftNavItem } from "./LeftNavItem";
import LinkContent from "./specification/LinkContent";

interface IState {
  id: string;
  title: string;
  expo: string;
  pages: IPageItem[];
  disabled?: boolean;
}

export const Header: FC = () => {
  const [navLinks] = useState<IState[]>(LinkContent);

  const disabled = (link: IState): boolean => {
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
                disabled={disabled(link)}
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
