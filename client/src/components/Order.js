import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Context } from "..";

const Order = observer(({ device }) => {
    const { device: deviceStore } = useContext(Context);
    const itemTotal = device.price * device.count;

    const handleDelete = () => {
        deviceStore.removeFromOrder(device.id)
    };

    const handleIncrease = () => {
        deviceStore.increaseCount(device.id)
    };
    const handleDecrease = () => {
        deviceStore.decreaseCount(device.id)
    };

    return (
        <ListGroup>
            <Card style={{ width: '100%', cursor: 'pointer', backgroundColor: 'gray' }} border={"light"}>
                <Row>
                    <Col className={"mt-3 d-flex flex-column align-items-center"}>
                        <Image
                            width={80}
                            height={80}
                            style={{ borderRadius: '5px' }}
                            src={process.env.REACT_APP_API_URL + device.img}
                        />
                        <Button className={"mt-3"} variant="danger" onClick={handleDelete}>Delete</Button>
                    </Col>
                    <Col>
                        <div>{device.name}</div>
                        <div className="text-muted">Price: {device.price}€</div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <Button variant="outline-dark" size="sm" onClick={handleDecrease}>−</Button>
                            <span>{device.count}</span>
                            <Button variant="outline-dark" size="sm" onClick={handleIncrease}>+</Button>
                        </div>
                        <div className="text-muted">Amount: {device.count}</div>
                        <div className={"mt-4"}><strong>Total price: {itemTotal}€</strong></div>
                    </Col>
                </Row>
            </Card>
        </ListGroup>
    );
});

export default Order;