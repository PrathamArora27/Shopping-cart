import React from 'react'

const CartBox = ({items,Total}) => {
    
  return (
    <div>
        <h1>Cart List</h1>
      <ul>
        { items.map((item)=>(
        <li key={item.prodID}>
            <p>{item.Name}</p>
            <h4>{item.Price}</h4>
        </li>
        ))
        }
        
      </ul>
      <h2>Total: {Total}</h2>
    </div>
  )
}

export default CartBox
