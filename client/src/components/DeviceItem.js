import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import star from '../assets/star.png';
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { Context } from "..";

const DeviceItem = ({ device, onAdd }) => {
    const navigate = useNavigate();
    const { device: deviceStore } = useContext(Context);

    const handleAddToCart = (e) => {
        e.stopPropagation(); 
        onAdd(device); 
        deviceStore.setOpenCart(true);
    };

    return (
        <Col md={3} className={"mt-3"}>
            <Card
                style={{ width: 150, cursor: 'pointer' }}
                border={"light"}
                onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
            >
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={14} height={14} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
                <div className="mt-2">
                    <Button variant="outline-dark" onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;