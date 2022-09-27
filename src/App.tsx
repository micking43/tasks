import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Button } from "react-bootstrap";
import logo from "./IMG_1715.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Michael King UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Another Header</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div style={{ backgroundColor: "red" }}>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <img
                                    src={logo}
                                    alt="A picture of abandoned food my friend took"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Button
                                    onClick={() => console.log("Hello World!")}
                                >
                                    Log Hello World
                                </Button>
                            </div>
                            <div>
                                Ordered List:
                                <ol>
                                    <li>First</li>
                                    <li>Next</li>
                                    <li>Last</li>
                                </ol>
                            </div>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "1",
                                    height: "1"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
