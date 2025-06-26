import React from "react";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ height: window.innerHeight - 54 }}
            >
                <Card style={{ width: 600 }} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Log in' : "Sign up"}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Enter your E-Mail..."
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Enter your password..."
                        />
                        <Row className="d-flex justify-content-between mt-3">
                            {isLogin ?
                                <Col>
                                    No account? <NavLink to={REGISTRATION_ROUTE}>Sign up now!</NavLink>
                                </Col>
                                :
                                <Col>
                                    Got an account? <NavLink to={LOGIN_ROUTE}>Log in now!</NavLink>
                                </Col>
                            }
                                <Col className="d-flex justify-content-end">
                                    <Button
                                        variant={"outline-success"}
                                    >
                                        {isLogin ? 'Log in' : "Sign up"}
                                    </Button>
                                </Col>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Auth;