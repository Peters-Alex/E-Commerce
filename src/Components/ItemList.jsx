import { useProductsQuery } from "../api";
import Products from "./Products";
import NavBar from "./NavBar";

export default function ItemList() {
    const { data, error, isLoading } = useProductsQuery();


    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <h3>{error.data.message}</h3>;
    }
    console.log("data", data)
    
    return (
        <section>
            <NavBar />
            <div>
                <h2>List of Items</h2>
                {data.map((item) => (
                    <div key={item.id}>
                    <p>category: {data.category} </p>
                    <p>discription:{data.discription} </p>
                    <p>id: {data.id} </p>
                    <p> price: {data.price} </p>
                    <p> rating: {data.rating} </p>
                    <p> title: {data.title} </p>
                    </div>
                ))}
            </div>
        </section>
        );
    }

// My item list are not rendering on the page.I thiknk that it is an error in how im fetching my data. 
// The item key seems to be wrong withing the object.
