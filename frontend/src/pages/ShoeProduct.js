import React, { useState } from 'react';
import { Carousel, Button, Form, Row, Col } from 'react-bootstrap';

const ShoeProduct = () => {
    const [selectedSize, setSelectedSize] = useState(null);
    const shoeImages = [
        'https://via.placeholder.com/600x400?text=Shoe+1',
        'https://via.placeholder.com/600x400?text=Shoe+2',
        'https://via.placeholder.com/600x400?text=Shoe+3'
    ];

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        alert(`Added size ${selectedSize} to cart!`);
    };

    return (
        <div className="container mt-5">
            <Row>
                {/* Left Section - Carousel */}
                <Col md={6}>
                    <Carousel>
                        {shoeImages.map((img, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt={`Shoe image ${index + 1}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>

                {/* Right Section - Shoe Details */}
                <Col md={6}>
                    <h2 className="mb-4">Super Cool Sneakers</h2>
                    <p className="lead">$120.00</p>
                    <p>
                        These sneakers are perfect for any occasion. They offer premium comfort
                        and come in a variety of sizes. Step up your style with these modern,
                        sleek, and versatile shoes.
                    </p>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">
                                Choose Size:
                            </Form.Label>
                            <Col sm="9">
                                <div className="d-flex gap-2">
                                    {['7', '8', '9', '10', '11'].map(size => (
                                        <Button
                                            key={size}
                                            variant={selectedSize === size ? 'primary' : 'outline-primary'}
                                            onClick={() => handleSizeSelect(size)}
                                        >
                                            {size}
                                        </Button>
                                    ))}
                                </div>
                            </Col>
                        </Form.Group>

                        <Button
                            variant="success"
                            className="mt-3"
                            disabled={!selectedSize}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                    </Form>
                </Col>
            </Row>

            {/* Additional Info Section */}
            <div className="mt-5">
                <h4>Product Details</h4>
                <ul>
                    <li>Upper Material: Mesh</li>
                    <li>Sole Material: Rubber</li>
                    <li>Closure Type: Lace-Up</li>
                    <li>Available in various sizes</li>
                    <li>Color Options: Red, Blue, Black</li>
                </ul>
            </div>

            {/* Reviews Section */}
            <div className="mt-5">
                <h4>Customer Reviews</h4>
                <p><strong>John Doe:</strong> "Amazing comfort and style. Worth every penny!"</p>
                <p><strong>Jane Smith:</strong> "The quality is superb. I wear these almost every day!"</p>
            </div>
        </div>
    );
};

export default ShoeProduct;
