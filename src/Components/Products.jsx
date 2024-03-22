import { useParams } from 'react-router-dom'
import { useSingleProductQuery } from "../redux/api";

function Products (){
    const { id } = useParams();
    console.log(id)
    const { data, error, isLoading } = useSingleProductQuery(id);

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
            <div key={data.id}>
                    <p> category: {data.category} </p>
                    <p> description:{data.description} </p>
                    <p> id: {data.id} </p>
                    <img src={data.image} /> 
                    <p> price: {data.price} </p>
                    <p> rating: {data.rating.rate} </p>
                    <p> rating count: {data.rating.count} </p>
                    <p> title: {data.title} </p>
            </div>

        </section>
    );
}

export default Products