import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      // sticky="top"
      style={{ minHeight: "90px" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <span className="nav-link-span brand">Yahya Yasir KOCA</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#home">
              <span className="nav-link-span">Home</span>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#about">
              <span className="nav-link-span">About</span>
            </Nav.Link>
            <Nav.Link href="#experience">
              <span className="nav-link-span">Experience</span>
            </Nav.Link>
            <Nav.Link eventKey={3} href="#project">
              <span className="nav-link-span">Project</span>
            </Nav.Link>
            <Nav.Link href="#contact">
              <span className="nav-link-span">Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
