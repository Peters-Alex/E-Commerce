import React from "react";
import ItemList from "./ItemList";
import NavBar from "./NavBar";


const Cart = ({ cart }) => {
console.log(cart)
 
     return (
        <section>
            <NavBar />
         <div className="Cart">
            <h1>Shopping Cart</h1>
            <ul>
    
            </ul>
        </div>
        </section>
    );
};


export default Cart;