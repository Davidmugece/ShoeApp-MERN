import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const { token } = useContext(AuthContext); // Get token from AuthContext

    const [formValues, setFormValues] = useState({
        type: '',
        quantity: '',
        price: '',
        image: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/shoes', {
                    headers: {
                        Authorization: `${token}`
                    }
                });
                const data = await response.json();
                
                // Ensure data is an array before setting it
                if (Array.isArray(data)) {
                    setItems(data);
                } else {
                    console.error('Expected an array, but got:', data);
                    setItems([]); // Or handle accordingly
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setItems([]); // Handle error state
            }
        };

        fetchData();
    }, [token]);

    const handleClose = () => setShow(false);

    const handleShow = (item) => {
        setSelectedItem(item);
        setFormValues({
            type: item.type,
            quantity: item.quantity,
            price: item.price,
            image: item.image // Assuming this is the image URL or path
        });
        setShow(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSaveChanges = async () => {
        if (!selectedItem) return;

        try {
            const response = await fetch(`http://localhost:3001/shoes/${selectedItem._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                },
                body: JSON.stringify(formValues)
            });

            if (response.ok) {
                const updatedItem = await response.json();
                setItems(items.map(item => item._id === selectedItem._id ? updatedItem : item));
                setShow(false);
            } else {
                console.error('Failed to update item:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleDelete = async (_id) => {
        console.log('Deleting item:', _id);
        try {
            const response = await fetch(`http://localhost:3000/adminshoes/${_id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `${token}`
                }
            });
    
            if (response.ok) {
                console.log('Delete successful');
                setItems(items.filter(item => item._id !== _id)); // Use _id here
            } else {
                console.error('Failed to delete item:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
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
                    {items.length > 0 ? (
                        items.map(item => (
                            <tr key={item.id}>
                                <td>{item.type}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}</td>
                                <td>
                                    <img src={item.image} alt={item.type} width="50" height="50" />
                                </td>
                                <td>
                                    <FaEdit className="me-3 text-warning" style={{ cursor: 'pointer' }} onClick={() => handleShow(item)} />
                                    <FaTrash className="text-danger" style={{ cursor: 'pointer' }} onClick={() => handleDelete(item._id)} />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No items available</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Edit Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Shoe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSaveChanges}>
                        <Form.Group controlId="formType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="type"
                                placeholder="Enter shoe type" 
                                value={formValues.type} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control 
                                type="number" 
                                name="quantity"
                                placeholder="Enter quantity" 
                                value={formValues.quantity} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                                type="number" 
                                name="price"
                                placeholder="Enter price" 
                                value={formValues.price} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control 
                                type="text"
                                name="image"
                                placeholder="Enter image URL" 
                                value={formValues.image} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ItemList;





