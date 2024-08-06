import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './cart.css';
import { toast } from 'react-toastify';

export default function Cart() {
  const { cart, changeQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const isEmpty = cart.items.length === 0;

  const payHandler = () => {
    toast.success(`Payment successful $${cart.totalPrice.toFixed(2)}`)
    clearCart();
    navigate('/')
  }

  return (
    <div className="section-cart">
      <h1>Cart</h1>
      {isEmpty ? (
        <div>
          <div className="empty">Sorry, your Cart is empty😔...</div>
          < Link className="addItems" to="/">Add items</ Link>
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
                  < Link to={`/perfume/${cartItem.perfume._id}/details`}>
                    {cartItem.perfume.brand}
                  </ Link>
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
            < Link to="/checkout">Proceed to Checkout</ Link>
            <div className='btns'>
              <button onClick={clearCart}>Clear</button>
              <button onClick={payHandler}>Pay</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
