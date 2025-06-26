import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigGreyStar from '../assets/bigGreyStar.png';

const DevicePage = () => {
    const device = { id: 1, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg' };
    const description = [
        { id: 1, title: 'RAM', description: '5gb' },
        { id: 2, title: 'Camera', description: '12mp' },
        { id: 3, title: 'Processor', description: 'Intel i7-3300' },
        { id: 4, title: 'Number of cores', description: '8' },
        { id: 5, title: 'Battery', description: '4000' },
    ]

    return (
        <div>
            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <Image width={300} height={300} src={device.img} />
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{device.name}</h2>
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
                            <Button variant={"outline-dark"}>Add to Cart</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h1>About this item</h1>
                    {description.map((info, index) =>
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title} : {info.description}
                        </Row>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default DevicePage;