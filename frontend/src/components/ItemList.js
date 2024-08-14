import React, { useState } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';  // Add Form here
import { FaEdit, FaTrash } from 'react-icons/fa';

const ItemList = () => {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setSelectedItem(item);
        setShow(true);
    };

    const handleDelete = (id) => {
        // Logic to delete item
    };

    return (
        <div className="flex-fill me-3">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example items */}
                    <tr>
                        <td>Sneakers</td>
                        <td>10</td>
                        <td>$100</td>
                        <td>Image</td>
                        <td>
                            <FaEdit className="me-3 text-warning" style={{ cursor: 'pointer' }} onClick={() => handleShow(/* pass item here */)} />
                            <FaTrash className="text-danger" style={{ cursor: 'pointer' }} onClick={() => handleDelete(/* pass id here */)} />
                        </td>
                    </tr>
                    {/* Additional rows can be added here */}
                </tbody>
            </Table>

            {/* Edit Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Shoe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Pre-fill with selected item's data */}
                    <Form>
                        <Form.Group controlId="formType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter shoe type" defaultValue={selectedItem?.type} />
                        </Form.Group>
                        <Form.Group controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Enter quantity" defaultValue={selectedItem?.quantity} />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter price" defaultValue={selectedItem?.price} />
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
};

export default ItemList;

