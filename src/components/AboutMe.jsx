import React from 'react';
import { Card } from "react-bootstrap";

function AboutMe() {
    return (
        <Card className="shadow-none bg-transparent border-0">
            <Card.Body>
                <Card.Title className="text-center m-3">About me</Card.Title>
                <Card.Text>
                    Hi, I'm Yahya Yasir! I'm a Full-Stack Developer who is passionate about writing code, solving problems, automating stuff, and building Single Page Application.<br />
                    🔭 I’m currently a Web Development student & tutor at DCI - Digital Career Institute.<br />
                    📚 I’m currently learning backend web development using NodeJS, ExpressJS and MongoDB.<br />
                    👯 I’m looking for a Full-Stack development internship.<br />
                    📫 How to reach me: <a href="https://www.linkedin.com/in/yykoca/" target="_blank" rel="noreferrer">Linkedin</a> <a href="mailto:yykoca.08@gmail.com">Gmail</a>
                </Card.Text>
                {/* <Button variant="outline-dark mt-2">Download My Cv</Button> */}
            </Card.Body>
        </Card>
    )
}

export default AboutMe
