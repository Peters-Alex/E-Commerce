
import { useProductsQuery } from "../api";

function Products (){
    const { data, error, isLoading } = useProductsQuery();

    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>{error.data.message}</p>;
    }

    console.log(data)
    return (
        <section>
            <h2> Product Details </h2>
        </section>
    );
}

export default Products