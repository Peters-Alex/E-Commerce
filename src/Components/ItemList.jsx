import { useState, useEffect } from "react";
import { useProductsQuery } from "../redux/api";
import Cart from "./Cart";
import NavBar from "./NavBar";
import "./styles/ItemList.css";



export default function ItemList(props) {
    const { data = [], error, isLoading, } = useProductsQuery();
    const [filteredItems, setFilteredItems] = useState([]);
    const [sortItems, setSortItems] = useState("title")
    const [isAscending, setIsAscending] = useState(true);
 
    
    useEffect(() => {
        if(!isLoading && !error && data) {
            setFilteredItems(data)
        }
    }, [data, error, isLoading]);

    useEffect(() => {
        console.log(data)
        const sorted = [...data].sort((a,b) => {
            const aValue = a[sortItems];
            const bValue = b[sortItems];
            return isAscending ? aValue - bValue : bValue - aValue;
        });
        console.log(sortItems)
        setFilteredItems(sorted);
    }, [sortItems, isAscending]);


    
    const handleClick = (event) => {
        const productId = event.target.value;
        const product = data.find((item) => item.id == productId);
        
        props.setCart((Cart) => [...Cart, product]); 
        console.log(props.cart);
    }

 

    return (
        <section>

            <div>
                <h2>List of Items</h2>
                <select value={sortItems} onChange={(event) => setSortItems(event.target.value)}>
                    <option value="title">Name</option>
                    <option value="price">Price</option>
                </select>
                <ul className="items-container">
                {filteredItems.map((currentItem) => (
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
                </ul>  
                       
            </div>

        </section>
        );
    }

// My item list are not rendering on the page.I thiknk that it is an error in how im fetching my data. 
// The item key seems to be wrong withing the object.
