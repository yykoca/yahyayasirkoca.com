import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Project() {
    const projects = [{ name: "Driver&Order Tracking", url: "./images/projects/order-tracking.png" }, { name: "Delicious Things", url: "./images/projects/delicious-things.png" }, { name: "Not Kutusu", url: "./images/projects/not-kutusu.png" }, { name: "Nostalji Sekerleme", url: "./images/projects/nostalji.png" }, { name: "Movie Hub", url: "./images/projects/" }]
    return (
        // <Container fluid text-center id="project" className="my-5 p-5" style={{ backgroundColor: "rgb(167,237,219)" }} >
        <Container fluid text-center id="project" className="mt-5 p-5 bg-dark">
            <h3 className="text-center mb-5 text-light" >Projects</h3>
            <Row xs={1} md={2} lg={3} className="g-4 align-items-md-center d-flex flex-row flex-nowrap" id="project" style={{ overflow: "scroll", scrollbarWidth: "none" }} >
                {projects.map((project, idx) => (
                    <Col>
                        <Card id="projct" className="border-0">
                            <Card.Body id="teil1" className="flex-column justify-content-evenly">
                                <Card.Title className="text-center">{project.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body id="teil2" className="upAnimation flex-column justify-content-evenly">
                                <Card.Img
                                    variant="top"
                                    src={project.url}
                                />
                                <Card.Title className="text-center">{project.name}</Card.Title>
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
