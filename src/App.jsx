import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import ItemList from './Components/ItemList';
import Login from './Components/Login';
import MyCart from './Components/Mycart';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import Account from "./Components/Account";
import Products from "./Components/Products";

function App() {
  const [token, setToken ] = useState(null);

  console.log("token", token)

  return (
    <div>
    
        <Routes>
          <Route path="/itemList" element={<ItemList />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/myCart" element={<MyCart />} />
          <Route path="/navBar" element={<NavBar />} />
          <Route path="/account" element={<Account setToken={setToken}/>} />
          <Route path="/register" element={<Register setToken={setToken}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
   
    </div>
  );

}
export default App