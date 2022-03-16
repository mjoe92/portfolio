import { FC } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./semantic-style/semantic.css";

export const Header: FC = () => {
  return (
    <header>
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
        <Container fluid className="navbar-nav mr-auto">
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="navbar">
            <Nav>
              <NavDropdown
                id="dropdownProjects"
                title="Projects"
                menuVariant="dark">
                <NavDropdown.Item href="#pcd">PCD</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#webPages">Web pages</NavDropdown.Item>
                <NavDropdown.Item href="#miniApps">Mini apps</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#blog">Blog</Nav.Link>

              <NavDropdown
                id="dropdownSoft"
                title="Soft aspects"
                menuVariant="dark">
                <NavDropdown.Item href="#motivation">
                  Motivation
                </NavDropdown.Item>
                <NavDropdown.Item href="#mission">Mission</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                id="dropdownAboutme"
                title="About me"
                menuVariant="dark">
                <NavDropdown.Item href="#cv">CV</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#engineering">
                  Engineering
                </NavDropdown.Item>
                <NavDropdown.Item href="#programming">
                  Programming
                </NavDropdown.Item>
                <NavDropdown.Item href="#photographing">
                  Photographing
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <span className="text-muted">All Rights Reserved 2022 @PCD</span>
    </footer>
  );
};
