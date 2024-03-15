import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import ItemList from './Components/ItemList';
import Login from './Components/Login';
import Cart from './Components/Cart';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import Account from "./Components/Account";
import Products from "./Components/Products";
import Checkout from "./Components/Checkout";


function App() {
  const [token, setToken ] = useState(null);
  const [cart, setCart ] = useState([])
  


  console.log("token", token)

  return (
    <div>
    
        <Routes>
          <Route path="/itemList" element={<ItemList setCart={setCart} cart={cart} />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/Cart" element={<Cart setCart={setCart} cart={cart} />} />
          <Route path="/navBar" element={<NavBar />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account setToken={setToken}/>} />
          <Route path="/register" element={<Register setToken={setToken}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
   
    </div>
  );

}
export default App