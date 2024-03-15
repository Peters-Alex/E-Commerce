import React from "react";
import ItemList from "./ItemList";
import NavBar from "./NavBar";


const Cart = ({ cart, updateQuantity }) => {
console.log(cart)
    const handleIncreaseQuantity = (selectedItem) => { 
        updateQuantity(selectedItem, 1);
    };    
    const handleDecreasedQuantity = (selectedItem) => {
        updateQuantity(selectedItem, -1);
    };
    
 
     return (
        <section>
            <NavBar />
            <div>
                <h1>Shopping Cart</h1>
                <ul>
                 {cart.map((selectedItem) => (      
                    <li key={selectedItem.id}>
                    <p> category: {selectedItem.category} </p>
                    <p> description:{selectedItem.description} </p>
                    <p> id: {selectedItem.id} </p>
                    <img src={selectedItem.image} /> 
                    <p> price: ${selectedItem.price} </p>
                    <p> rating: {selectedItem.rating.rate} </p>
                    <p> rating count: {selectedItem.rating.count} </p>
                    <p> title: {selectedItem.title} </p> 
                    {selectedItem.name} - Quantity: {selectedItem.quantity} - Price: {selectedItem.price}<br></br>
                    <button onClick={() => handleIncreaseQuantity(selectedItem.id)}>+</button>
                    <button onClick={() => handleDecreasedQuantity(selectedItem.id)}>-</button>
                    </li>
                ))};
            </ul>
        </div>
        </section>
     );
};


export default Cart;