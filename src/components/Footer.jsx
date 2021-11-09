import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { Github, Instagram, Linkedin, Twitter, Envelope } from "react-bootstrap-icons";
// import { MDBIcon } from "mdbreact";

function Footer() {
    return (
        <Navbar id="footer" expand="lg" variant="dark" bg="dark">
            <Container>
                {/* <Navbar.Brand href="#">Tüm haklari saklidir.</Navbar.Brand> */}
                <Nav className="mx-auto">
                    <Nav.Link className="px-4" href="https://github.com/yykoca"><Github /></Nav.Link>
                    <Nav.Link className="px-4" href="https://www.linkedin.com/in/yykoca"><Linkedin /></Nav.Link>
                    {/* <Nav.Link className="px-4" href="https://www.xing.com/profile/YahyaYasir_KOCA/cv"><MDBIcon fab icon="xing" className="text-light"/></Nav.Link> */}
                    <Nav.Link className="px-4" href="http://twitter.com/yhysrkc"><Twitter /></Nav.Link>
                    <Nav.Link className="px-4" href="https://instagram.com/yhysrkc"><Instagram /></Nav.Link>
                    <Nav.Link className="px-4" href="mailto:yykoca.08@gmail.com"><Envelope /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer
