import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import ItemList from './Components/ItemList';
import Login from './Components/Login';
import MyCart from './Components/Mycart';
import NavBar from './Components/NavBar';
import Register from './Components/Register';


function App() {
  const [token, setToken ] = useState(null);

  return (
    <div>
    
        <Routes>
          <Route path="/itemList" element={<ItemList />} />
          <Route path="/login" element={<Login token={token} />} />
          <Route path="/myCart" element={<MyCart />} />
          <Route path="/navBar" element={<NavBar />} />
          <Route path="/register" element={<Register setToken={setToken}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
   
    </div>
  );

}
export default App