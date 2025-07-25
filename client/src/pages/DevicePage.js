import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigGreyStar from '../assets/bigGreyStar.png';
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";
import { Context } from "..";

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] });
    const { id } = useParams();
    const { device: deviceStore } = useContext(Context);

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const handleAddToCart = (e) => {
        e.stopPropagation();
        deviceStore.addToOrder(device);
        deviceStore.setOpenCart(true);  
    };

    return (
        <div>
            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2 className="text-center">{device.name}</h2>
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ background: `url(${bigGreyStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                            >
                                {device.rating}
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                        >
                            <h3>From: {device.price}€</h3>
                            <Button variant={"outline-dark"} onClick={handleAddToCart}>Add to Cart</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h1>About this item</h1>
                    {device.info.map((info, index) =>
                        <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                            {info.title} : {info.description}
                        </Row>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default DevicePage;