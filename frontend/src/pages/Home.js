import React from 'react';

const Home = () => {
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
                                <img src="images/couch.png" className="img-fluid" alt="Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}

            {/* Start Product Section */}
            <div className="product-section">
                <div className="container">
                    <div className="row">

                        {/* Start Column 1 */}
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                            <p className="mb-4">Discovering stylish comfortable shoes for women is now easy, whether you're on the hunt for elegant office footwear or casual options for your weekend wardrobe. At Backyard Shoez, we present a range of professional and comfortable work shoes for women</p>
                            <p><a href="shop.html" className="btn">Explore</a></p>
                        </div> 
                        {/* End Column 1 */}

                        {/* Start Column 2 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img src="images/product-1.png" className="img-fluid product-thumbnail" alt="Product 1" />
                                <h3 className="product-title">Jordan 1 Low "Paris"</h3>
                                <strong className="product-price">$55.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" alt="Cross" />
                                </span>
                            </a>
                        </div> 
                        {/* End Column 2 */}

                        {/* Start Column 3 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img src="images/product-2.png" className="img-fluid product-thumbnail" alt="Product 2" />
                                <h3 className="product-title">Jordan 4 Retro "Black/Grey/White"</h3>
                                <strong className="product-price">$78.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" alt="Cross" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 3 */}

                        {/* Start Column 4 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img src="images/product-3.png" className="img-fluid product-thumbnail" alt="Product 3" />
                                <h3 className="product-title">Dunk low "Grey Fog”</h3>
                                <strong className="product-price">$43.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" alt="Cross" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 4 */}

                    </div>
                </div>
            </div>
            {/* End Product Section */}

            {/* Start Why Choose Us Section */}
            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <h2 className="section-title">Why Choose Us</h2>
                            <p>Kicks Kenya's dedicated staff, dynamic environment, and commitment to exceptional customer service all provide a unique experience for buyers. We have also increased our employee number to more than 18 permanent employees and several casual workers. </p>

                            <div className="row my-5">
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/truck.svg" alt="Fast & Free Shipping" className="imf-fluid" />
                                        </div>
                                        <h3>Fast &amp; Free Shipping</h3>
                                        <p>Kicks Kenya's dedicated staff, dynamic environment, and commitment to exceptional customer service all provide a unique experience for buyers. We have also increased our employee number to more than 18 permanent employees and several casual workers. </p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/bag.svg" alt="Easy to Shop" className="imf-fluid" />
                                        </div>
                                        <h3>Easy to Shop</h3>
                                        <p>Kicks Kenya's dedicated staff, dynamic environment, and commitment to exceptional customer service all provide a unique experience for buyers. We have also increased our employee number to more than 18 permanent employees and several casual workers. </p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/support.svg" alt="24/7 Support" className="imf-fluid" />
                                        </div>
                                        <h3>24/7 Support</h3>
                                        <p>Kicks Kenya's dedicated staff, dynamic environment, and commitment to exceptional customer service all provide a unique experience for buyers. We have also increased our employee number to more than 18 permanent employees and several casual workers. </p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/return.svg" alt="Hassle Free Returns" className="imf-fluid" />
                                        </div>
                                        <h3>Hassle Free Returns</h3>
                                        <p>Kicks Kenya's dedicated staff, dynamic environment, and commitment to exceptional customer service all provide a unique experience for buyers. We have also increased our employee number to more than 18 permanent employees and several casual workers. </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img src="images/why-choose-us-img.jpg" alt="Why Choose Us" className="img-fluid" />
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
                                <div className="grid grid-1"><img src="images/img-grid-1.jpg" alt="Grid 1" /></div>
                                <div className="grid grid-2"><img src="images/img-grid-2.jpg" alt="Grid 2" /></div>
                                <div className="grid grid-3"><img src="images/img-grid-3.jpg" alt="Grid 3" /></div>
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

            {/* Start Popular Product */}
            <div className="popular-product">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="images/product-1.png" alt="Nordic Chair" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Nordic Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                    <p>$50.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="images/product-2.png" alt="Kruzo Aero Chair" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Kruzo Aero Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                    <p>$78.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="images/product-3.png" alt="Ergonomic Chair" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Ergonomic Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                    <p>$43.00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End Popular Product */}

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
                                <div className="d-flex author">
                                    <img src="images/person_1.jpg" alt="John Doe" className="img-fluid mr-3" />
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

