import React from "react";
import { Container, Card, Image, Row, Col, ListGroup} from "react-bootstrap";
import { Github, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";

function Home() {
  return (
    <Container style={{ minHeight: "85vh", display: "flex" }}>
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
        <Col xs lg="5">
          <Card className="align-items-md-center" style={{border:"none"}}>
            {/* <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/11/05/12/02/sunset-4603355_960_720.jpg"/> */}
            <Image
              src="https://cdn.pixabay.com/photo/2019/11/05/12/02/sunset-4603355_960_720.jpg"
              roundedCircle
              width="320"
              height="320"
            />
          </Card>
        </Col>
        <Col xs lg="7">
          <Card style={{border:"none"}}>
            <Card.Body>
              <Card.Title>I'am Yahya Yasir.</Card.Title>
              <Card.Subtitle>Full-Stack Web Developer</Card.Subtitle>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <ListGroup horizontal>
                <ListGroup.Item action active variant="light" style={{border: "none", width:"100px"}} href="https://github.com/yykoca" target="_blank"><Github /></ListGroup.Item>
                <ListGroup.Item action active variant="light" style={{border: "none", width:"100px"}} href="https://github.com/yykoca" target="_blank"><Linkedin /></ListGroup.Item>
                <ListGroup.Item action active variant="light" style={{border: "none", width:"100px"}} href="https://github.com/yykoca" target="_blank"><Instagram /></ListGroup.Item>
                <ListGroup.Item action active variant="light" style={{border: "none", width:"100px"}} href="https://github.com/yykoca" target="_blank"><Twitter /></ListGroup.Item>
              </ListGroup>
              <Card.Text>
                   
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
