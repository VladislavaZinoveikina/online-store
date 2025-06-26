import React from "react";
import { Modal } from "react-bootstrap";
import {Button, Form} from "react-bootstrap";

const CreateBrand = ({ show, onHide }) => {
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
                        Add brand
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            placeholder={"Enter the brand name"}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={() => onHide}>Close</Button>
                    <Button variant="outline-success" onClick={() => onHide}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateBrand;