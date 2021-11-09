import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Project() {
    const projects = [{ name: "Driver&Order Tracking" }, { name: "Delicious Things" }, { name: "Not Kutusu" }, { name: "Nostalji Sekerleme" }, { name: "Movie Hub" }]
    return (
        // <Container fluid text-center id="project" className="my-5 p-5" style={{ backgroundColor: "rgb(167,237,219)" }} >
        <Container fluid text-center id="project" className="my-5 p-5 bg-dark">
            <h3 className="text-center mb-5 text-light" >Projects</h3>
            <Row xs={1} md={4} className="g-4 align-items-md-center d-flex flex-row flex-nowrap" id="project" style={{ overflow: "scroll", scrollbarWidth: "none" }} >
                {projects.map((project, idx) => (
                    <Col>
                        <Card className="border-0">
                            <Card.Img
                                variant="top"
                                src="https://cdn.pixabay.com/photo/2019/11/05/12/02/sunset-4603355_960_720.jpg"
                            />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
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
