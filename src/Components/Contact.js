import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
    const submitContactForm = (e) => {
        e.preventDefault();
        console.log("Form sending.");
    }

    return (
        <Container id="contact" fluid className="d-flex justify-content-end p-0 m-0" style={{ width: "100%" }}>
            <Form onSubmit={submitContactForm} className="contact m-0 p-5 d-flex flex-column" style={{ width: "50vw", height: "85vh", background: "rgb(194,195,196" }}>
                <h2 className="text-center mb-5">Contact me</h2>
                
                <Form.Group className="mb-3 px-5" controlId="formBasicName">
                    <Form.Control type="text" placeholder="What's your name?" />
                </Form.Group>

                <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="What's your email adress?" />
                    <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 px-5" controlId="formBasicTextarea">
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                </Form.Group>

                <Form.Group className="mb-3 px-5" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="dark" type="submit" className="mx-5">
                    Let me know
                </Button>
            </Form>
        </Container>
    )
}

export default Contact
