import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import Collapse from 'react-bootstrap/Collapse'

function Header() {
    return (
        <Navbar id="header" collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* <Collapse in={open}> */}
            <Container>
                <Navbar.Brand href="#home">Yahya Yasir KOCA</Navbar.Brand>
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
            {/* </Collapse> */}
        </Navbar>
    )
}

export default Header
