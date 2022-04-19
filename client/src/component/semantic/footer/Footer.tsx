import { FC } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../semantic-style/semantic.css";

export const Footer: FC = () => {
  return (
    <footer className="navbar-fixed-bottom">
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center">
        <span className="text-muted">All Rights Reserved 2022:</span>
        <Nav.Link>@PCD</Nav.Link>
      </Navbar>
    </footer>
  );
};
