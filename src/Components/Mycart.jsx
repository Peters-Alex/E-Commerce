
const API_URL =  "https://fakestoreapi.com";

function MyCart() {

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/carts`);
        const data = await response.json();
        return data;
      }  catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    
    return(
        <div> 
            <h1> MyCart Page </h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatibus earum beatae itaque delectus ex sapiente ab voluptatem voluptatum quibusdam repellendus pariatur harum tempore molestiae iure ea minima dolores dolore.</p>
        </div>
    )
};
export default MyCart;