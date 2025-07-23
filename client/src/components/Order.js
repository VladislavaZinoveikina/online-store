import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";

const Order = observer(({ device }) => {
    const itemTotal = device.price * device.count;

    return (
        <ListGroup>
            <Card style={{ width: '100%', cursor: 'pointer', backgroundColor: 'gray' }} border={"light"}>
                <Row>
                    <Col className={"mt-3"}>
                        <Image width={80} height={80} style={{ borderRadius: '5px' }} src={process.env.REACT_APP_API_URL + device.img} />
                    </Col>
                    <Col>
                        <div>{device.name}</div>
                        <div className="text-muted">Price: {device.price}€</div>
                        <div className="text-muted">Amount: {device.count}</div>
                        <div className={"mt-4"}><strong>Total price: {itemTotal}€</strong></div>
                    </Col>
                </Row>
            </Card>
        </ListGroup>
    );
});

export default Order;