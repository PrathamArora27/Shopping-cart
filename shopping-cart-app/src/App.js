
import './App.css';
import Navbar from './components/Navbar';
import products from './components/productsArr';
import CartItems from './components/CartItems';
import CartBox from './components/CartBox';
import { useState, useEffect } from 'react';

function App() {
const [arr,setArr] = useState([]);

const [Total,setTotal] = useState(0);
const addFunc = (product) => {
  setArr([...arr, product])  
  setTotal(Total+product.Price)
};

useEffect(() => {
  console.log(arr);
}, [arr]);


  return (
    <div className="App">
      <Navbar/>
      <CartItems products={products} addLogic={addFunc}  />
      <CartBox items={arr} Total={Total}/>
    </div>
  );
}

export default App;
