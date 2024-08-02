import React from 'react';
import '../styling/CartItem.css';
import { Link } from 'react-router-dom';
import image from '../images/headphone.jpg';
import { useState } from 'react';


const CartItems = ({ products, addLogic, deletePeople }) => {

  const [findProd, setFindProd] = useState('');
  const [filterProd, setFilterProd] = useState('');

  const filterProducts = products.filter(product => product.Name.toLowerCase().includes(findProd.toLowerCase()));
  let filterProducts2=filterProducts;
  if(filterProd==="remove filter"){
    //do nothing
  }
  else if(filterProd==="expensive"){
    filterProducts2 = filterProducts.filter(product=>product.Price>500);
  }
  else if(filterProd==="average"){
    filterProducts2 = filterProducts.filter(product=>product.Price>200 && product.Price<500);
  }
  else{
    filterProducts2 = filterProducts.filter(product=>product.Price<200)
  }
  return (
    <>
      <input type="text" placeholder='search product' value={findProd}
        onChange={e => setFindProd(e.target.value)} />


      <select value={filterProd} placeholder='filter by price' onChange={e => setFilterProd(e.target.value)}>
        <option value="" disabled selected className='dropdown-placeholder'><b>Filter by price:</b></option>
        <option value="remove filter">remove filter</option>
        <option value="cheap">cheap</option>
        <option value="average"> average</option>
        <option value="expensive">Expensive</option>
      </select>


      <div className="cart-items-container">
        <ul className="cart-items-list">
          {filterProducts2.map(product => (
            <li key={product.prodID} className="cart-item">
              <img src={image} alt={product.Name} />
              <h2>{product.Name}</h2>
              <h4>Price: ${product.Price}</h4>
              <Link to={`/product/${product.prodID}`}>View</Link>
              <button onClick={() => addLogic(product)}>Add</button>
              <button onClick={() => deletePeople(product)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CartItems;



// note: when we use product=>() , we are imlicitly returning the thing inside()
// but when we use product=>{}, we use it for multiple statements  and need to use the return keyoword