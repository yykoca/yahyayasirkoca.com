import React from "react";
import { Container, Card, Image, Row, Col, Button, ProgressBar } from "react-bootstrap";

function About() {
  return (
    <Container style={{ minHeight: "90vh", display: "flex" }}>
      {/* <Row className="justify-content-md-center">
            <Col xs lg="2">
              1 of 3
            </Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row> */}
      <Row className="align-items-md-center" >
        <Col>
          <Card style={{border:"none"}}>
            <Card.Body>
              <Card.Title>About me</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. <br />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer. <br />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="outline-dark">Download My Cv</Button>{' '}
              <br /> <br /> <br />
              <Card.Title>My Skills</Card.Title>
              <div>
                HTML<ProgressBar striped variant="success" now={95} />
                CSS<ProgressBar striped variant="info" now={85} />
                REACT<ProgressBar striped variant="warning" now={80} />
                JAVASCRIPT<ProgressBar striped variant="danger" now={90} />
                PYTHON<ProgressBar striped variant="info" now={50} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md="auto">Variable width content</Col> */}
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
      </Row>
    </Container>
  );
}
export default About;
