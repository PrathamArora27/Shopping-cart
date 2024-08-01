import React, { useState } from 'react'

const NewProduct = ({addNewprod,prod}) => {

    const [newName, setnewName] = useState('');
    const [price,setprice] = useState('');

    const handleAddition = (e) =>{
        e.preventDefault();
        const newproduct = {Name:newName,Price:price};
        addNewprod(newproduct);
        setnewName('');
        setprice('');
    }

  return (
    <div>
         <h3>Add a new person</h3>
            <form onSubmit={handleAddition}>
                <input type="text" placeholder='name' value={newName}
                    onChange={(e) => setnewName(e.target.value)} required />

                <input type="number" placeholder='age' value={price}
                    onChange={(e) => setprice(e.target.value)} required />

                <button type="submit">Add Person</button>
            </form>
      
    </div>
  )
}

export default NewProduct
