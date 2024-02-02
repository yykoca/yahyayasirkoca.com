import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logo.png';

function Header() {
    return (
        <Navbar id="header" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <img src={logo} alt="Logo" height={40} width={40} style={{ marginRight: "10px", filter: "invert(1)"}} />
                {/* <Navbar.Brand href="#home">Yahya Yasir KOCA</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#project">Project</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
