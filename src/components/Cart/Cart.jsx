import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import './Cart.scss'; 

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItem);

  const handleIncrease = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const handleDecrease = (item) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item });
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
              <h6>{item.name}</h6>
              <p>Quantity: {item.quantity || 1}</p>
              <div className="cart-item-actions">
                <Button onClick={() => handleIncrease(item)}>+</Button>
                <Button onClick={() => handleDecrease(item)}>-</Button>
              </div>
          </div>
        ))
      )}

{   cartItems.length >0 ?      <div className="checkout-section">
          <Button     className="checkout-button">
            Proceed to Checkout
          </Button>
        </div> : ""}
    </div>


  );
}

export default Cart;
