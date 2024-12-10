

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';

function AdminPanel({ item }) {

  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cartItem);

  const handleRemoveFromMenu = () => {
    dispatch({
      type: "REMOVEFROMMENU",
      payload: item,
    })
  }

  return (
    <div className="item-card">
      <Card style={{ textAlign: 'center', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180px' }}>
          <Card.Img
          className='card-image'
            variant="top"
            src={item.image}
            alt={item.title}
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>
        <Card.Body>
          <Card.Title className='card-title'>{item.name}</Card.Title>
          
          <button
            className={`custom-button ${cartItems.includes(item) ? 'remove-button' : 'add-button'}`}
            onClick={handleRemoveFromMenu}
          >
            {/* {cartItems.includes(item) ? 'Remove' : 'Add to Cart'} */}

            Remove From Cart
          </button>      
          </Card.Body>
      </Card>
    </div>

  );
}

export default AdminPanel;