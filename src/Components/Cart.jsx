import React from "react";
import ItemList from "./ItemList";
import NavBar from "./NavBar";
import {useState, useEffect} from "react"
import "./styles/Cart.css";
import {Star} from 'phosphor-react' 

const Cart = ({ cart: intialCart}) => {
// console.log(cart)
    const [cartItems, setCartItems] = useState(intialCart)
    const [totalPrice, setTotalPrice] = useState(0)

    const handleIncreaseQuantity = (selectedItem) => { 
        const updatedCartItems = cartItems.map(item => item.id === selectedItem.id ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.price } : item);
        setCartItems(updatedCartItems);
    };    
    const handleDecreasedQuantity = (selectedItem) => {
        const updatedCartItems = cartItems.map(item => item.id === selectedItem.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.price } : item );
        setCartItems(updatedCartItems);
    };
    
    const handleCheckout = () => {
        alert("Thank you for your purchase! Your items will be shipped soon.");
    };
    
    const removeItemFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        console.log(updatedCart);
      };
    const calculateTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    };
    useEffect(() => {
        const newTotalPrice = calculateTotalPrice();
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
    }
    const generateStar = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<Star key={i}/>)
        }
        return stars
    };
    
     return (
        <section>
            {/* <NavBar /> */}
            <div className="mycart">
                <ul>
                <h1>Shopping Cart</h1>
                 {cartItems.map((selectedItem) => (      
                    <li className="IndivdualProduct" key={selectedItem.id}>
                    <p> Category: {selectedItem.category} </p>
                    <p> Description:{selectedItem.description} </p>
                    {/* <p> Id: {selectedItem.id} </p> */}
                    <p> Price: ${selectedItem.price} </p>
                    <p> Rating: {generateStar(selectedItem.rating.rate)} </p>
                    <p>{selectedItem.name} - Quantity: {selectedItem.quantity} - Price: ${selectedItem.price}</p>
                    <img className="cartimg"src={selectedItem.image} /> 
                    <p> Total Price: ${selectedItem.totalPrice}</p>
                    <button onClick={() => handleIncreaseQuantity(selectedItem)}>+</button>
                    <button onClick={() => handleDecreasedQuantity(selectedItem)}>-</button> <br></br>
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