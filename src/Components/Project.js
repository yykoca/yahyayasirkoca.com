import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Project() {
  return (
    <Container fluid text-center id="project" className="my-5 p-5" style={{ backgroundColor: "orange" }} >
      <h4 className="text-center mb-5" >Project</h4>
      <Row xs={1} md={4} className="g-4 align-items-md-center d-flex flex-row flex-nowrap" id="project" style={{ overflow: "scroll",   scrollbarWidth: "none"}} >
        {Array.from({ length: 10 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2019/11/05/12/02/sunset-4603355_960_720.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;
