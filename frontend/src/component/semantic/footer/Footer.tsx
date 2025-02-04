import { FC } from "react";
import { Navbar } from "react-bootstrap";
import "../style/semantic.css";

export const Footer: FC = () => {
  return (
    <footer className="navbar-fixed-bottom">
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center">
        {/*<span className="text-muted">All Rights Reserved 2022:</span>
        <Nav.Link>@PCD</Nav.Link> */}
      </Navbar>
      {/* slide card from left to right to show: status, alert,
      messages, accept cookies, etc. */}
    </footer>
  );
};
