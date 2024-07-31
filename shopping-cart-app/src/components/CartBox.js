import React from 'react';

const CartBox = ({ items, Total }) => {
    return (
        <div className="cart-box">
            <h2>Cart</h2>
            <ul>
                {items.map(item => (
                    <li key={item.prodID}>
                        {item.Name} - Quantity: {item.quantity} - Price: ${item.Price} 
                    </li>
                ))}
            </ul>
            <h3>Total: ${Total}</h3>
        </div>
    );
};

export default CartBox;
