import React from "react";
import { Router } from "react-router-dom";
import Home from './Components/Home';
import ItemList from './Components/ItemList';
import Login from './Components/Login';
import MyCart from './Components/Mycart';
import NavBar from './Components/NavBar';
import Register from './Components/Register';


function App() {
  return (
    <div>
      <Home />
      <ItemList />
      <Login />
      <MyCart />
      <NavBar />
      <Register /> 

    </div>
  );

}
export default App