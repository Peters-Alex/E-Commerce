import React from "react";
import ItemList from "./ItemList";
import NavBar from "./NavBar";
import {useState} from "react"
import "./styles/Cart.css";

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
                <h1>Shopping Cart</h1>
                <ul>
                 {cartItems.map((selectedItem) => (      
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