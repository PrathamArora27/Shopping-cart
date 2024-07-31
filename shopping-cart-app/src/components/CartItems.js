import React from 'react';
import '../styling/CartItem.css';
import { Link } from 'react-router-dom';
import image from '../images/headphone.jpg';

const CartItems = ({ products, addLogic }) => {
  return (
    <div className="cart-items-container">
      <ul className="cart-items-list">
        {products.map(product => (
          <li key={product.prodID} className="cart-item">
            <img src={image} alt={product.Name} />
            <h2>{product.Name}</h2>
            <h4>Price: ${product.Price}</h4>
            <Link to={`/product/${product.prodID}`}>View</Link>
            <button onClick={() => addLogic(product)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;



// note: when we use product=>() , we are imlicitly returning the thing inside()
// but when we use product=>{}, we use it for multiple statements  and need to use the return keyoword