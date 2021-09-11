import React from "react";
import { Container, Card, Image, Row, Col, ListGroup } from "react-bootstrap";
import { Github, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import { MDBIcon } from 'mdbreact';

function Home() {
  return (
    <Container fluid style={{ minHeight: "85vh", display: "flex" }}>
      {/* <Row className="justify-content-md-center">
        <Col xs lg="2">
          1 of 3
        </Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row> */}
      <Row className="align-items-md-center">
        <Col xs lg="5" >
          <Card className="align-items-md-end shadow-none" >
            {/* <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/11/05/12/02/sunset-4603355_960_720.jpg"/> */}
            <Image
              src="https://cdn.pixabay.com/photo/2019/11/05/12/02/sunset-4603355_960_720.jpg"
              // src={profilPhoto}
              width="380"
              height="480"
              style={{ position: "relative", left: "50px", top: "120px", zIndex: "2", border: "4px solid orange" }}
            />
          </Card>
        </Col>
        <Col xs lg="7" className="m-0 p-0" >
          <Card className="shadow-none p-5" bg="dark" text="light " style={{ height: "400px", borderRadius: "0", margin: "0" }} >
            <Card.Body className="d-flex flex-column justify-content-center" >
              <Card.Title>I'am Yahya Yasir.</Card.Title>
              <Card.Subtitle>Full-Stack Web Developer</Card.Subtitle>
              <Card.Text>
                Hi, I'm Yahya Yasir! I'm a Full-Stack Developer who is passionate about writing code, solving problems, automating stuff, and building Single Page Application.
              </Card.Text>
              <ListGroup horizontal className="text-center">
                <ListGroup.Item action style={{ border: "none", backgroundColor: "rgb(38,38,38)" }} href="https://github.com/yykoca" target="_blank">
                  <Github color="white" /></ListGroup.Item>
                <ListGroup.Item action style={{ border: "none", backgroundColor: "rgb(38,38,38)" }} href="https://www.linkedin.com/in/yykoca/" target="_blank">
                  <Linkedin color="white" /></ListGroup.Item>
                <ListGroup.Item action style={{ border: "none", backgroundColor: "rgb(38,38,38)" }} href="https://www.xing.com/profile/YahyaYasir_KOCA/cv" target="_blank">
                  <MDBIcon fab icon="xing" style={{ color: "rgb(255,255,255)" }} /></ListGroup.Item>
                <ListGroup.Item action style={{ border: "none", backgroundColor: "rgb(38,38,38)" }} href="https://youtube.com" target="_blank">
                  <Twitter color="white" /></ListGroup.Item>
                <ListGroup.Item action style={{ border: "none", backgroundColor: "rgb(38,38,38)" }} href="https://google.com" target="_blank">
                  <Instagram color="white" /></ListGroup.Item>
              </ListGroup>
              <Card.Text>
                {/* Some text */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md="auto">Variable width content</Col> */}
      </Row>
    </Container>
  );
}

export default Home;
