import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  const { isScrolledDown, setIsScrolledDown } = useState(false);

  return (
    <Navbar
      // fixed="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ minHeight: "15vh" }}
      className="autohide"
    >
      <Container>
        <Navbar.Brand href="#home"><span className="nav-link-span">Yahya Yasir KOCA</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
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
