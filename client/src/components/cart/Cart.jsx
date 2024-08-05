import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import { PayPalButtons } from "@paypal/react-paypal-js";
import './cart.css';

export default function Cart() {
  const { cart, changeQuantity, removeFromCart, clearCart } = useCart();
  const [showPayPal, setShowPayPal] = useState(false);

  const isEmpty = cart.items.length === 0;

  // Function to handle payment
  const handlePayment = () => {
    setShowPayPal(true);
  };

  return (
    <div className="section-cart">
      <h1>Cart</h1>
      {isEmpty ? (
        <div>
          <div className="empty">Sorry, your Cart is empty😔...</div>
          <Link className="addItems" to="/">Add items</Link>
        </div>
      ) : (
        <div className="container">
          <ul>
            {cart.items.map((cartItem) => (
              <li key={cartItem.perfume._id}>
                <div>
                  <img src={cartItem.perfume.imageUrl} alt={cartItem.perfume.brand} />
                </div>
                <div>
                  <Link to={`/home/${cartItem.perfume._id}`}>
                    {cartItem.perfume.brand}
                  </Link>
                </div>
                <div>
                  <input
                    type="number"
                    placeholder='How many...'
                    value={cartItem.quantity}
                    onChange={(e) => changeQuantity(cartItem.perfume._id, parseInt(e.target.value))}
                  />
                </div>
                <div>
                  {cartItem.price.toFixed(2)}
                </div>
                <div>
                  <button className="remove-button" onClick={() => removeFromCart(cartItem.perfume._id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout">
            <div>
              <div className="total-price">{cart.totalPrice.toFixed(2)}</div>
            </div>
            <Link to="/checkout">Proceed to Checkout</Link>
            <div className='btns'>
              <button onClick={clearCart}>Clear</button>
              {/* Show PayPal button when user clicks "Pay" */}
              {!showPayPal ? (
                <button onClick={handlePayment}>Pay</button>
              ) : (
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: cart.totalPrice.toFixed(2),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    return actions.order.capture().then(function(details) {
                      console.log('Transaction completed by ' + details.payer.name.given_name);
                      clearCart(); // Clear cart after successful payment
                      // Redirect to order confirmation or another page
                    });
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
