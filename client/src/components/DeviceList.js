import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const { device } = useContext(Context);

    const addToOrder = (item) => {
        device.addToOrder(item);
    }

    return (
        <Row className="d-flex">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device} onAdd={addToOrder} />
            )}
        </Row>
    );
});

export default DeviceList;