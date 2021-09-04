import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../App.css';

function Contact() {
    const submitContactForm = (e) => {
        e.preventDefault();
        console.log("Form sending.");
    }

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Form onSubmit={submitContactForm} className="contact p-5 d-flex flex-column" style={{ border: "1px solid", borderRadius: "0px", boxShadow: "4px 4px 5px black" }}>
                <h2 className="text-center mb-5">Contact me</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="What's your name?" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="What's your email adress?" />
                    <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Let me know
                </Button>
            </Form>
        </Container>
    )
}

export default Contact
