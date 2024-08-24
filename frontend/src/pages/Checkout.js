import React, { useState, useEffect } from 'react';

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await fetch('http://localhost:3000/purchaseshoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Order placed successfully!');
        console.log(result); // Handle the response from the server if needed
      } else {
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing the order.');
    }
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Checkout</h1>
              </div>
            </div>
            <div className="col-lg-7">
              {/* Additional content can go here */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="border p-4 rounded" role="alert">
                Returning customer? <a href="#">Click here</a> to login
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Billing Details</h2>
              <div className="p-3 p-lg-5 border bg-white">
                {/* Billing Details Form */}
                <form>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_fname" name="c_fname" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_lname" name="c_lname" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_companyname" className="text-black">Company Name</label>
                      <input type="text" className="form-control" id="c_companyname" name="c_companyname" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_email" className="text-black">Email Address <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" id="c_email" name="c_email" placeholder="" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_phone" name="c_phone" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Street address" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_towncity" className="text-black">Town / City <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_towncity" name="c_towncity" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_zipcode" className="text-black">ZIP Code <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_zipcode" name="c_zipcode" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_country" className="text-black">Country <span className="text-danger">*</span></label>
                      <select id="c_country" name="c_country" className="form-control">
                        <option value="">Select Country</option>
                        {/* Add country options here */}
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <label htmlFor="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
                    <div className="input-group w-75">
                      <input type="text" className="form-control" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-primary btn-sm" type="button" id="button-addon2">Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Your Order</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item, index) => (
                          <tr key={index}>
                            <td>{item.title} <strong className="mx-2">x</strong> {item.quantity}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                          <td className="text-black">${calculateTotal()}</td>
                        </tr>
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                          <td className="text-black font-weight-bold"><strong>${calculateTotal()}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="border p-3 mb-3">
                      <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</a></h3>
                      <div className="collapse" id="collapsebank">
                        <div className="py-2">
                          <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-3 mb-3">
                      <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</a></h3>
                      <div className="collapse" id="collapsecheque">
                        <div className="py-2">
                          <p className="mb-0">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-3 mb-3">
                      <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">PayPal</a></h3>
                      <div className="collapse" id="collapsepaypal">
                        <div className="py-2">
                          <p className="mb-0">Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-lg btn-block" onClick={handlePlaceOrder}>Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* End Untree Co Section */}
    </>
  );
};

export default Checkout;


