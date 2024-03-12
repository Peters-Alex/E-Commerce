import React from "react";



const Cart = (props) => {
    console.log(props.cart)

    return (
        <div className="Cart">
            <h1>Shopping Cart</h1>
            {/* <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity} - Price: {item.price}
                    </li>
                ))};
            </ul> */}
        </div>
    );
};


export default Cart;