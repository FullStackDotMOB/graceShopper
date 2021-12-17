import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
  return (
    <div>
      <div className="checkout-header">
        <h1>CHECKOUT</h1>
        <br />
        <Link to="/products">
          <button>CONTINUE SHOPPING</button>
        </Link>
        <br />
        <div className="checkout-billing">
          <p>Billing Address</p>
          <form className="checkout-billing-info-section">
            <label>First Name</label>
            <input />
            <label>Last Name</label>
            <input />
            <label>Email</label>
            <input />
            <label>Address</label>
            <input />
          </form>
        </div>

        <br />
        <hr style={{ marginLeft: '125px', marginRight: '200px' }} />

        <div className="checkout-shipping">
          <p>Shipping Address</p>
          <form className="checkout-shipping-info-form">
            <label>First Name</label>
            <input />
            <label>Last Name</label>
            <input />
            <label>Email</label>
            <input />
            <label>Address</label>
            <input />
          </form>
        </div>

        <br />
        <hr style={{ marginLeft: '125px', marginRight: '200px' }} />

        <div className="checkout-payment">
          <p>Payment</p>
          <form className="checkout-payment-info-form">
            <label>Name on Card</label>
            <input />
            <label>Credit Card Number</label>
            <input />
            <label>Expiration</label>
            <input />
            <label>CVV</label>
            <input />
          </form>
        </div>
        <br />
        <Link to="/Confirmation">
          <button>CONFIRM ORDER</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
