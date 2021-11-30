import React, { useState, useEffect } from 'react';
import { Card, ProgressBar } from "react-bootstrap";

function MySkills() {
    // const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [javaScript, setJavaScript] = useState(0);
    const [react, setReact] = useState(0);
    const [python, setPython] = useState(0);

    const skills = [
        // { name: "HTML", power: `${html}` },
        { name: "JAVASCRIPT", power: `${javaScript}`, variant: "danger" },
        { name: "REACT", power: `${react}`, variant: "warning" },
        { name: "VUE.JS", power: `${css}`, variant: "secondary" },
        { name: "SASS", power: `${css}`, variant: "info" },
        { name: "PYTHON", power: `${python}`, variant: "dark" },
        { name: "MONGODB", power: `${react}`, variant: "alert" },
        { name: "EXPRESSJS", power: `${css}`, variant: "success" },
    ]

    useEffect(() => {
        setTimeout(() => {
            // setHtml(95);
            setCss(85);
            setJavaScript(80);
            setReact(90);
            setPython(65);
        }, 1000);
    }, []);

    return (
        <Card className="border-0">
            <Card.Body>
                <Card.Title className="text-center m-3">My Skills</Card.Title>
                {
                    skills.map((skill, i) => {
                        return (
                            <div style={{ fontSize: "12px" }} key={i}>
                                {skill.name}
                                <ProgressBar
                                    striped
                                    animated
                                    variant={skill.variant}
                                    now={skill.power}
                                    label={`${skill.power}%`}
                                    style={{ height: "12px", fontSize: "10px" }}
                                />
                            </div>
                        )
                    })
                }
            </Card.Body>
        </Card>
    )
}

export default MySkills
