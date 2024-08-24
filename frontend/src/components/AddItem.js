import React, { useState , useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const AddItem = () => {
    const { token } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Create a form data object to send image files
        const formData = new FormData();
        formData.append('type', type);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('image', image);

        try {
            const response = await fetch('http://localhost:3000/adminshoes', {
                method: 'POST',
                body: formData,
                headers:({
                    "Accept": '*',
                    "Authorization": `${token}`
                }),
            });
const data = response.data;
            console.log(data);
            if (response.ok) {
                // Handle successful response
                alert('Shoe added successfully!');
            } else {
                // Handle errors
                alert('Failed to add shoe');
            }
        } catch (error) {
            console.error('Error adding shoe:', error);
            alert('There was an error adding the shoe');
        }

        handleClose();
    };


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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter shoe type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddItem;
