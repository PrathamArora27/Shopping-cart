
import React from 'react';
import { useParams } from 'react-router-dom';
import image from '../images/headphone.jpg';

const ProductDetail = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find(p => p.prodID === parseInt(id)); // Find the product by ID

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.Name}</h2>
      <img src={image} alt={product.Name} style={{height:'70px',width:'70px'}} /> 
      <p>Price: ${product.Price}</p>
    </div>
  );
};

export default ProductDetail;
