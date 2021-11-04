import React, { useState, useEffect } from "react";
import { Github, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import { MDBIcon } from "mdbreact";

function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    };
  }, []);

  return (
    <div id="home">
      <section>
        <div>
          <h1>Full-Stack Web Developer</h1>
          <p>
            I'm a Full-Stack Developer who is passionate about writing code,
            solving problems, automating stuff, and building Single Page
            Application.
          </p>
        </div>
        <img src="./images/yykoca.jpg" alt="yykoca" width="240" height="240" />
      </section>
      <article>
        <p>
          Hi, I'm Yahya Yasir! I'm a Full-Stack Developer who is passionate
          about writing code, solving problems, automating stuff, and building
          Single Page Application.
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/yykoca"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yykoca/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.xing.com/profile/YahyaYasir_KOCA/cv"
              target="_blank"
              rel="noreferrer"
            >
              <MDBIcon fab icon="xing" />
            </a>
          </li>
          <li>
            <a
              href="http://twitter.com/yhysrkc"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/yhysrkc"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Home;

// <Container fluid id="home" className="d-flex flex-column p-0">
//   <Row className="w-100 m-0">
//     <Col lg={12} md={12} xs={12} className="my-4 h-75">
//       <Card className="d-flex flex-column justify-content-evenly shadow-none border-0 h-100" style={{  minHeight: "60vh" }}>
//         <Fade in={open}>
//           <div id="example-fade-text">
//             <h1
//               className="text-center text-dark"
//               aria-controls="example-fade-text"
//               aria-expanded={open}
//             >
//               Full-Stack Web Developer
//             </h1>
//           </div>
//         </Fade>
//         <Image
//           className={open ? "profil-image pro" : "profil-image"}
//           src="./images/yykoca.jpg"
//           width="240"
//           height="240"
//         />
//       </Card>
//     </Col>
//     <Col xs className="p-0 bg-dark">
//       <Card
//         className="shadow-none m-auto"
//         bg="dark"
//         text="light"
//         style={{ maxWidth:"750px", minHeight: "400px", borderRadius: "0" }}
//       >
//         <Card.Body className="d-flex flex-column justify-content-center">
//           <Card.Title>I'am Yahya Yasir.</Card.Title>
//           {/* <Card.Subtitle>Full-Stack Web Developer</Card.Subtitle> */}
//           <Card.Text>
//             Hi, I'm Yahya Yasir! I'm a Full-Stack Developer who is
//             passionate about writing code, solving problems, automating
//             stuff, and building Single Page Application.
//           </Card.Text>
//           <ListGroup horizontal className="text-center">
//             <ListGroup.Item
//               action
//               style={{ border: "none", backgroundColor: "rgb(38,38,38)" }}
//               href="https://github.com/yykoca"
//               target="_blank"
//             >
//               <Github color="white" />
//             </ListGroup.Item>
//             <ListGroup.Item
//               action
//               style={{ border: "none", backgroundColor: "rgb(38,38,38)" }}
//               href="https://www.linkedin.com/in/yykoca/"
//               target="_blank"
//             >
//               <Linkedin color="white" />
//             </ListGroup.Item>
//             <ListGroup.Item
//               action
//               style={{ border: "none", backgroundColor: "rgb(38,38,38)" }}
//               href="https://www.xing.com/profile/YahyaYasir_KOCA/cv"
//               target="_blank"
//             >
//               <MDBIcon
//                 fab
//                 icon="xing"
//                 style={{ color: "rgb(255,255,255)" }}
//               />
//             </ListGroup.Item>
//             <ListGroup.Item
//               action
//               style={{ border: "none", backgroundColor: "rgb(38,38,38)" }}
//               href="http://twitter.com/yhysrkc"
//               target="_blank"
//             >
//               <Twitter color="white" />
//             </ListGroup.Item>
//             <ListGroup.Item
//               action
//               style={{ border: "none", backgroundColor: "rgb(38,38,38)" }}
//               href="https://instagram.com/yhysrkc"
//               target="_blank"
//             >
//               <Instagram color="white" />
//             </ListGroup.Item>
//           </ListGroup>
//           <Card.Text>{/* Some text */}</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//     {/* <Col md="auto">Variable width content</Col> */}
//   </Row>
// </Container>
