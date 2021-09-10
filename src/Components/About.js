import React, { useState, useEffect } from "react";
import { Container, Card, Image, Row, Col, Button, ProgressBar } from "react-bootstrap";

function About() {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [javaScript, setJavaScript] = useState(0);
  const [react, setReact] = useState(0);
  const [python, setPython] = useState(0);

  useEffect(() => {
    setHtml(95);
    setCss(85);
    setJavaScript(80);
    setReact(90);
    setPython(65);
  }, []);


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
          <Card style={{ border: "none" }}>
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
                HTML<ProgressBar className="progress" animated striped variant="success" now={html} label={`${html}%`} />
                CSS<ProgressBar striped variant="info" now={css} label={`${css}%`} />
                JAVASCRIPT<ProgressBar striped variant="danger" now={javaScript} label={`${javaScript}%`} />
                REACT<ProgressBar striped variant="warning" now={react} label={`${react}%`} />
                PYTHON<ProgressBar striped variant="info" now={python} label={`${python}%`} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md="auto">Variable width content</Col> */}
        <Col xs lg="5">
          <Card className="align-items-md-center" style={{ border: "none" }}>
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
