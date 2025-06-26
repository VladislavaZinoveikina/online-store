import React, { useContext, useState } from "react";
import { Col, Dropdown, Modal, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add device
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type =>
                                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand =>
                                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control 
                            className="mt-3"
                            placeholder="Enter device name"
                        />
                        <Form.Control 
                            className="mt-3"
                            placeholder="Enter device price"
                            type="number"
                        />
                        <Form.Control 
                            className="mt-3"
                            type="file"
                        />
                        <hr/>
                        <Button
                            variant={"outline-dark"}
                            onClick={addInfo}
                        >
                            Add new characteristic
                        </Button>
                        {info.map(i =>
                            <Row className="mt-3" key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder="Enter name of the characteristic"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder="Enter description of the characteristic"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => removeInfo(i.number)}
                                        variant={"outline-danger"}
                                    >
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>Close</Button>
                    <Button variant="outline-success" onClick={onHide}>Add</Button> 
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateDevice;