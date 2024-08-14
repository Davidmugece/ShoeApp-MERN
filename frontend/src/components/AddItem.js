import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddItem = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="d-flex justify-content-between align-items-center p-3 mb-4 border rounded">
            <p className="mb-0">Manage your shoe inventory with ease.</p>
            <Button variant="primary" onClick={handleShow}>
                Add a Shoe
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Shoe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter shoe type" />
                        </Form.Group>
                        <Form.Group controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Enter quantity" />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter price" />
                        </Form.Group>
                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddItem;
