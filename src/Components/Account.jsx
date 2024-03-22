

import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

function Account(props) {
    const navigate = useNavigate();
    
    
    const eventHandler = async (event) => {
        event.preventDefault();

        props.setToken(null)
        
        navigate("/");
    }; 

    return(
        <section>
        {/* <NavBar /> */}
        <div> 
            <h1> Account Page </h1>
            <form onSubmit={eventHandler}>
            <button> Logout </button>
            </form>

        </div>
        </section>
    )
}
export default Account