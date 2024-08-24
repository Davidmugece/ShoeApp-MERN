import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Row, Col, Button, Form } from 'react-bootstrap'; // Add missing imports
import { BASE_URL } from '../utils/config';

const ShoeProduct = () => {
  const { id } = useParams(); // Extract product ID from URL using useParams
  const [selectedSize, setSelectedSize] = useState(null);
  const [shoeData, setShoeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) { // Make sure id is not undefined
      fetch(`http://localhost:3000/shoes/${id}`) // Use id from useParams
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setShoeData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching shoe data:', err);
          setError('Failed to fetch product data');
          setLoading(false);
        });
    } else {
      setError('Product ID is missing');
      setLoading(false);
    }
  }, [id]); // Dependency array includes id to refetch if it changes

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
   console.log(shoeData);
    if (selectedSize) {
      const item = {
        image: shoeData.image,
        title: shoeData.type,
        price: shoeData.price,
        size: selectedSize,
        quantity: 1, // Default quantity
      };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingIndex = cart.findIndex(cartItem => cartItem.title === item.title && cartItem.size === item.size);
      
      if (existingIndex > -1) {
        // Update quantity if item already exists in cart
        cart[existingIndex].quantity += 1;
      } else {
        // Add new item to cart
        cart.push(item);
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`Added size ${selectedSize} to cart!`);
      console.log('Item added to cart:', item); // Debugging line
    } else {
      alert('Please select a size.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <Row>
        {/* Left Section - image */}
        <Col md={6}>
          <img src={`${BASE_URL}/images/${shoeData.image}`} className="img-fluid" alt={shoeData ? shoeData.title : ''} />
        </Col>

        {/* Right Section - Shoe Details */}
        <Col md={6}>
          <h2 className="mb-4">{shoeData ? shoeData.title : 'Loading...'}</h2>
          <p className="lead">{shoeData ? `$${shoeData.price}` : ''}</p>
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

