import React, { useContext, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Order from "./Order";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const { device } = useContext(Context);
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
                        <div className="position-relative">
                            <Button
                                variant="outline-light"
                                onClick={() => device.setOpenCart(!device.openCart)}
                                className={`shopping-cart me-4 ${device.openCart && 'active'}`}
                            >
                                <img src="/white-shopping-cart.png" alt="shopping-cart" width={20} height={20} />
                            </Button>
                            {device.openCart && (
                                <div className="shop-cart">
                                    {device.order.length > 0 ? (
                                        <>
                                            {device.order.map(el => (
                                                <Order key={el.id} device={el} />
                                            ))}
                                            <div className="mt-2 fw-bold">
                                                Total: {device.order.reduce((sum, item) => sum + item.price * item.count, 0)} €
                                            </div>
                                        </>
                                    ) : (
                                        <div className={"mt-4"}>Cart is empty :(</div>
                                    )}
                                </div>
                            )}
                        </div>
                        <Button
                            variant="outline-light"
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Admin dashboard
                        </Button>
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