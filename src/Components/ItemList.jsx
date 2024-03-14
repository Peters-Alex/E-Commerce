import { useEffect } from "react";
import { useProductsQuery } from "../api";
import Cart from "./Cart";
// import Products from "./Products";
import NavBar from "./NavBar";



export default function ItemList(props) {
    const { data, error, isLoading } = useProductsQuery();
    console.log(props.cart)
    if (isLoading) {
        return <p>Loading...</p>;
    }
    
    if (error) {
        return <h3>{error.data.message}</h3>;
    }
    console.log("data", data)
    
    const handleClick = (event) => {
        const productId = event.target.value;
        const product = data.find((item) => item.id == productId);
        
        props.setCart((Cart) => [...Cart, product]); 
        console.log(props.cart);
    }

    return (
        <section>
            <NavBar />
            <div>
                <h2>List of Items</h2>
                {data.map((currentItem) => (
                    <div key={currentItem.id}>
                    <p> category: {currentItem.category} </p>
                    <p> description:{currentItem.description} </p>
                    <p> id: {currentItem.id} </p>
                    <img src={currentItem.image} /> 
                    <p> price: ${currentItem.price} </p>
                    <p> rating: {currentItem.rating.rate} </p>
                    <p> rating count: {currentItem.rating.count} </p>
                    <p> title: {currentItem.title} </p>
                        <button value ={currentItem.id } onClick={handleClick}>
                            Add to Cart
                        </button>
                    </div>
                    
                ))}
            </div>
        </section>
        );
    }

// My item list are not rendering on the page.I thiknk that it is an error in how im fetching my data. 
// The item key seems to be wrong withing the object.
