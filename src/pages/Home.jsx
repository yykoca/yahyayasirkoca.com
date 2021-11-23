import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home() {
    return (
        <Container id="home" className="d-flex flex-column-reverse justify-content-evenly">
            <Row>
                <Col xs className="text-center">
                    <h1>Full-Stack Web Developer</h1>
                    <p>
                        I'm a Full-Stack Developer who is passionate about writing code,
                        solving problems, automating stuff, and building Single Page
                        Application.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <Image src="./images/yykoca.jpg" roundedCircle width="240" height="240" />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
