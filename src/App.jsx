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
import Footer from "./Components/Footer";



function App() {
  const [token, setToken ] = useState(false);
  const [cart, setCart ] = useState([])

  console.log("token", token)

  return (
    <div>
        <NavBar token={token} setToken={setToken} />
   
        <Routes>
          {token ? (
            <Route path="/itemList" element={<ItemList setCart={setCart} cart={cart} token={token} />} />
          ): null }
          <Route path="/products/:id" element={<Products />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          {token ? (
            <Route path="/Cart" element={<Cart setCart={setCart} cart={cart} token={token} />} />
          ) : null }
          <Route path="/account" element={<Account setToken={setToken}/>} />
          <Route path="/register" element={<Register setToken={setToken}/>} />
          <Route path="/" element={<Home />} />
          <Route path="/itemList" element={<ItemList setCart={setCart} cart={cart} token={token} />} /> 
          <Route path="/Cart" element={<Cart setCart={setCart} cart={cart} token={token} />} />
        </Routes>
        <Footer token={token} setToken={setToken}/>

    </div>
  );

}
export default App
//Line38 ItemList allows for users to see with itemList with out a token.