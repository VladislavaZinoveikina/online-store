import React, { useState } from "react";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Enter your password..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
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
                                    onClick={click}
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
});

export default Auth;