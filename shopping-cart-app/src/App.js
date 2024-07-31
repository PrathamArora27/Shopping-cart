import './App.css';
import Navbar from './components/Navbar';
import products from './components/productsArr';
import CartItems from './components/CartItems';
import CartBox from './components/CartBox';
import ProductDetail from './components/ProductDetail';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [arr, setArr] = useState([]);
  const [Total, setTotal] = useState(0);

  // Function to add a product to the cart
  const addFunc = (product) => {
    setArr(prevArr => {
      const updatedArr = prevArr.some(p => p.prodID === product.prodID)
        ? prevArr.map(p =>
            p.prodID === product.prodID
              ? { ...p, quantity: p.quantity + 1 }
              : p
          )
        : [...prevArr, { ...product, quantity: 1 }];
        
      return updatedArr;
    });
  };

  // Effect to calculate the total whenever `arr` changes
  useEffect(() => {
    const newTotal = arr.reduce((acc, item) => acc + (item.Price * item.quantity), 0);
    setTotal(newTotal);
  }, [arr]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="main-container">
                <CartItems products={products} addLogic={addFunc} />
                <CartBox items={arr} Total={Total} />
              </div>
            } 
          />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
