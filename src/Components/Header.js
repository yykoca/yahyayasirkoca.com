import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ minHeight: "15vh" }}
      >
        <Container>
          <Navbar.Brand href="#">Yahya Yasir KOCA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link eventKey={2} href="/about">
                About
              </Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link eventKey={3} href="/project">
                Project
              </Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
