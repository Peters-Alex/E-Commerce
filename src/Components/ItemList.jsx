import { useState, useEffect } from "react";
import { useProductsQuery } from "../redux/api";
import Cart from "./Cart";
import NavBar from "./NavBar";
import "./styles/ItemList.css";
import { Star } from "phosphor-react";



export default function ItemList(props) {
    const { data = [], error, isLoading, } = useProductsQuery();
    const [filteredItems, setFilteredItems] = useState([]);
    const [sortItems, setSortItems] = useState("title")
    const [isAscending, setIsAscending] = useState(true);
    const [showDetails, setShowDetails] = useState({});
    
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

    const toggleDetails = (itemId) => {
        setShowDetails(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId]
        }));
    };

    
    const handleClick = (event) => {
        const productId = event.target.value;
        const product = data.find((item) => item.id == productId);
        
        props.setCart((Cart) => [...Cart, product]); 
        console.log(props.cart);
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
            <div className="wrapper">
                <select value={sortItems} onChange={(event) => setSortItems(event.target.value)}>
                    <option value="title">Name</option>
                    <option value="price">Price</option>
                </select>
                <h2>List of Items</h2>
                <ul className="items-container">
                {filteredItems.map((currentItem) => (
                    <div className="productItems" key={currentItem.id}>
                    <p className="p2"> Title: {currentItem.title} </p>
                    <img className="ProductImg" src={currentItem.image} /> 
                    <p className="p2"> Price: ${currentItem.price} </p>
                    <p className="p2"> Rating: {generateStar(currentItem.rating.rate)} </p>
                        <button value ={currentItem.id } onClick={handleClick}>
                            Add to Cart
                        </button>
                    <button className="itemsButton" onClick={() => toggleDetails(currentItem.id)}>Product Details</button>
                    {showDetails[currentItem.id] && (
                        <div>
                        <p className="p1"> Category: {currentItem.category} </p>
                        <p className="p1"> Description:{currentItem.description} </p>
                        <p className="p1"> id: {currentItem.id} </p>
                        <p className="p1"> Rating Count: {currentItem.rating.count} </p>
                        </div>
                    )}
                
                        </div>                    
                     ))}
                </ul>  
                       
            </div>

        </section>
        );
    }

// My item list are not rendering on the page.I thiknk that it is an error in how im fetching my data. 
// The item key seems to be wrong withing the object.
