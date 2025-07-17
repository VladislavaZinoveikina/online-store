import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>BuyDevice</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto">
                        <Button
                            variant="outline-light"
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >Admin dashboard</Button>
                        <Button
                            variant="outline-light"
                            onClick={() => logOut()}
                            className="ms-4"
                        >
                            Log out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Log in/Sign up</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
});

export default NavBar;