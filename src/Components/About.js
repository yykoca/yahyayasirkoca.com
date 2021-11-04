import React, { useState, useEffect } from "react";
import { Container, Card, Image, Row, Col, Button, ProgressBar } from "react-bootstrap";

function About() {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [javaScript, setJavaScript] = useState(0);
  const [react, setReact] = useState(0);
  const [python, setPython] = useState(0);

  const skills = [
    { name: "HTML", power: `${html}` },
    { name: "CSS", power: `${css}` },
    { name: "JAVASCRIPT", power: `${javaScript}` },
    { name: "REACT", power: `${react}` },
    { name: "PYTHON", power: `${python}` }]

  useEffect(() => {
    setHtml(95);
    setCss(85);
    setJavaScript(80);
    setReact(90);
    setPython(65);
  }, []);


  return (
    <Container id="about" className="d-flex my-5" >
      <Row className="align-items-md-center" >
        <Col>
          <Card className="shadow-none" >
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
              <Button variant="outline-dark">Download My Cv</Button>
              <br /> <br /> <br />
              <Card.Title>My Skills</Card.Title>
              {
                skills.map(skill => {
                  return (
                    <div>
                      {skill.name}
                      <ProgressBar
                        striped
                        animated
                        variant="dark"
                        now={skill.power}
                        label={`${skill.power}%`}
                        style={{ height: "16px" }} />
                    </div>
                  )
                })
              }
              {/* HTML
                <ProgressBar
                  animated
                  striped
                  variant="success"
                  now={html}
                  label={`${html}%`}
                  style={{ height: "16px" }}
                />
                CSS
                <ProgressBar striped variant="info" now={css} label={`${css}%`} style={{ height: "16px" }} />
                JAVASCRIPT<ProgressBar striped variant="danger" now={javaScript} label={`${javaScript}%`} style={{ height: "16px" }} />
                REACT<ProgressBar striped variant="warning" now={react} label={`${react}%`} style={{ height: "16px" }} />
                PYTHON<ProgressBar striped variant="info" now={python} label={`${python}%`} style={{ height: "16px" }} /> */}
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md="auto">Variable width content</Col> */}
        <Col xs lg="5">
          <Card className="align-items-md-center shadow-none" >
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
