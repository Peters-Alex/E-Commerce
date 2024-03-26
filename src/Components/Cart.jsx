import React from "react";
import ItemList from "./ItemList";
import NavBar from "./NavBar";
import {useState} from "react"
import "./styles/Cart.css";
import {Star} from 'phosphor-react' 

const Cart = ({ cart: intialCart, updateQuantity }) => {
// console.log(cart)
    const [cartItems, setCartItems] = useState(intialCart)

    const handleIncreaseQuantity = (selectedItem) => { 
        const updateItem = cartItems.map(item => item.id === selectedItem.id ? { ...item, quantity: item.quantity + 1} : item);
        setCartItems(updateItem);
        console.log(updateItem)
    };    
    const handleDecreasedQuantity = (selectedItem) => {
        updateQuantity(selectedItem, -1);
    };
    const handleCheckout = () => {
        alert("Thank you for your purchase! Your items will be shipped soon.");
    };
    
    const removeItemFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        console.log(updatedCart);
      };

     return (
        <section>
            {/* <NavBar /> */}
            <div className="mycart">
                <ul>
                <h1>Shopping Cart</h1>
                 {cartItems.map((selectedItem) => (      
                    <li key={selectedItem.id}>
                    <p> Category: {selectedItem.category} </p>
                    <p> Description:{selectedItem.description} </p>
                    <p> Id: {selectedItem.id} </p>
                    <img className="cartimg"src={selectedItem.image} /> 
                    <p> Price: ${selectedItem.price} </p>
                    <p> Rating: {selectedItem.rating.rate} </p>
                    <p> <Star/><Star/><Star/><Star/> Rating count: {selectedItem.rating.count} </p>
                    <p> Title: {selectedItem.title} </p> 
                    {selectedItem.name} - Quantity: {selectedItem.quantity} - Price: {selectedItem.price}<br></br>
                    <button onClick={() => handleIncreaseQuantity(selectedItem.id)}>+</button>
                    <button onClick={() => handleDecreasedQuantity(selectedItem.id)}>-</button> <br></br>
                    <button onClick={handleCheckout}> Checkout</button>
                    <button onClick={() => removeItemFromCart(selectedItem.id)}> Remove Item</button>

                    </li>
                ))};
            </ul>
        </div>
        </section>
     );
};


export default Cart;