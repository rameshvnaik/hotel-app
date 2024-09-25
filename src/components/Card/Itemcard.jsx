import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Displayitem.scss'
import { useDispatch, useSelector } from 'react-redux';

function Itemcard({ item }) {

  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cartItem);

  const handleAddToCart = () => {
    dispatch({
      type: "ADDTOCART",
      payload: item,
    })
  }
  return (
    <div className="item-card">
      <Card style={{ textAlign: 'center', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180px' }}>
          <Card.Img
            variant="top"
            src={item.image}
            alt={item.title}
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <button
            className={`custom-button ${cartItems.includes(item) ? 'remove-button' : 'add-button'}`}
            onClick={handleAddToCart}
          >
            {cartItems.includes(item) ? 'Remove' : 'Add to Cart'}
          </button>      
          </Card.Body>
      </Card>
    </div>

  );
}

export default Itemcard;