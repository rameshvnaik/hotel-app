import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import './ChefPanel.scss'

function Chef() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItem);

  const [isOrderApproved, setIsOrderApproved] = useState(false);
  const [completionTime, setCompletionTime] = useState('');

  
  const handleApproveOrder = () => {
    setIsOrderApproved(true);
  };

  const handleCompletionTimeChange = (e) => {
    setCompletionTime(e.target.value);
  };

  return (
    <div className="cart-container">
      <h3>Hi Chef</h3>
      {cartItems.length === 0 ? (
        <p>No Orders</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <h6>{item.name}</h6>
            <p>Quantity: {item.quantity || 1}</p>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div className="checkout-section">
          <Button className="checkout-button" onClick={handleApproveOrder}>
            Approve Order
          </Button>
        </div>
      )}

      {isOrderApproved && (
        <div className="completion-time-section">
          <h4>Set Estimated Time for Completion</h4>
          <Form>
            <Form.Group controlId="completionTime">
              <Form.Label>Completion Time (in minutes)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter time"
                value={completionTime}
                onChange={handleCompletionTimeChange}
              />
            </Form.Group>
          </Form>
          <Button
            className="complete-order-button"
            disabled={!completionTime}
            onClick={() => alert(`Order will be completed in ${completionTime} minutes!`)}
          >
            Time Required 
            
          </Button>
        </div>
      )}
    </div>
  );
}

export default Chef;
