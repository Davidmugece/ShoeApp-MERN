import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {BASE_URL} from '../utils/config';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from the backend API
        fetch(`${BASE_URL}/shoes`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    return (
        <>
            {/* Start Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Made for every <span className="d-block">one of us</span></h1>
                                <p className="mb-4">To Step out in style, and total confidence. Start exploring our comfort collection</p>
                                <p><a href="#" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="https://i.imgur.com/gSYoT4L.png" className="img-fluid" alt="Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}

            <div className="untree_co-section product-section before-footer-section">
            <div className="container">
  <div className="row">
    {products.length > 0 ? (
      products.map((product) => (
        <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
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

            {/* Start Why Choose Us Section */}
            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <h2 className="section-title">Why Choose Us</h2>
                            <p>Kicks Kenya's dedicated staff, dynamic environment, and commitment to exceptional  </p>

                            <div className="row my-5">
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="https://themewagon.github.io/furni/images/truck.svg" alt="Fast & Free Shipping" className="imf-fluid" />
                                        </div>
                                        <h3>Fast &amp; Free Shipping</h3>
                                        <p>Kicks Kenya's dedicated staff, dynamic environment, and commitment to exceptional customer  </p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="https://themewagon.github.io/furni/images/bag.svg" alt="Easy to Shop" className="imf-fluid" />
                                        </div>
                                        <h3>Easy to Shop</h3>
                                        <p>Kicks Kenya's dedicated staff, dynamic environment, and commitment to exceptional customer </p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="https://themewagon.github.io/furni/images/support.svg" alt="24/7 Support" className="imf-fluid" />
                                        </div>
                                        <h3>24/7 Support</h3>
                                        <p>Kicks Kenya's dedicated staff, dynamic environment, and commitment to  </p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="https://themewagon.github.io/furni/images/return.svg" alt="Hassle Free Returns" className="imf-fluid" />
                                        </div>
                                        <h3>Hassle Free Returns</h3>
                                        <p>Kicks Kenya's dedicated staff, dynamic environment, and commitment to </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Why Choose Us" className="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}

            {/* Start We Help Section */}
            <div className="we-help-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="imgs-grid">
                                <div className="grid grid-1"><img src="https://i.imgur.com/dyXazl2.png" alt="Grid 1" /></div>
                                <div className="grid grid-2"><img src="https://i.imgur.com/Mmf9ND7.png" alt="Grid 2" /></div>
                                <div className="grid grid-3"><img src="https://i.imgur.com/grc5Sky.png" alt="Grid 3" /></div>
                            </div>
                        </div>
                        <div className="col-lg-5 ps-lg-5">
                            <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
                            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

                            <ul className="list-unstyled custom-list my-4">
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                            </ul>
                            <p><a href="#" className="btn">Explore</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End We Help Section */}

            

            {/* Start Testimonial Slider */}
            <div className="testimonial-section before-footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title mb-4">Testimonials</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="testimonial-entry">
                                <blockquote>
                                    <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.”</p>
                                </blockquote>
                                <div className="d-flex author align-items-center">
    <img
        src="https://themewagon.github.io/furni/images/person-1.png"
        alt="John Doe"
        className="img-fluid rounded-circle mr-3"
        style={{ width: '50px', height: '50px' }}
    />
    <div>
        <h3>John Doe</h3>
        <span>- Website Designer</span>
    </div>
</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="testimonial-entry">
                                <blockquote>
                                    <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.”</p>
                                </blockquote>
                                <div className="d-flex author">
                                    <img src="images/person_2.jpg" alt="Jane Smith" className="img-fluid mr-3" />
                                    <div>
                                        <h3>Jane Smith</h3>
                                        <span>- Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="testimonial-entry">
                                <blockquote>
                                    <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.”</p>
                                </blockquote>
                                <div className="d-flex author">
                                    <img src="images/person_3.jpg" alt="Emily Brown" className="img-fluid mr-3" />
                                    <div>
                                        <h3>Emily Brown</h3>
                                        <span>- Product Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Testimonial Slider */}
        </>
    );
};

export default Home;

