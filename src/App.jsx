import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import ItemList from './Components/ItemList';
import Login from './Components/Login';
import MyCart from './Components/Mycart';
import NavBar from './Components/NavBar';
import Register from './Components/Register';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ItemList" element={<ItemList />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MyCart" element={<MyCart />} />
          <Route path="/NavBar" element={<NavBar />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}
export default App