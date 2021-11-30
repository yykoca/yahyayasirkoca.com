import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";

function About() {
    return (
        <Container id="about" className="d-flex align-items-center">
            <Row>
                <Col lg="6" className="d-flex align-items-center order-md-2">
                    <Image
                        src="./images/vector-web-developer.png"
                        width="100%"
                    />
                </Col>
                <Col lg="6" className="order-md-1">
                    <Row>
                        <AboutMe />
                    </Row>
                    <Row>
                        <MySkills />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default About
