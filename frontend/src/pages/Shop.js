import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {BASE_URL} from '../utils/config';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend API
    fetch(`${BASE_URL}/shoes`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="col-12 col-md-4 col-lg-3 mb-5">
                {/* Link to ShoeProduct page with dynamic product ID */}
                <Link className="product-item" to={`/shoe/${product._id}`}>
            <img
              src={`${BASE_URL}/images/${product.image}` }
              className="img-fluid product-thumbnail"
              alt={product.title}
            />
            <h3 className="product-title">{product.type}</h3>
            <strong className="product-price">${product.price}</strong>
            <p className="product-stock">
              Available Stock: <span>{product.quantity}</span>
            </p>
            <span className="icon-cross">
              <img
                src="https://themewagon.github.io/furni/images/cross.svg"
                className="img-fluid"
                alt="Cross icon"
              />
            </span>
          </Link>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;



