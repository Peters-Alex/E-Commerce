

import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import "./styles/Account.css";

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
        <div className="AccountStyle"> 
     
            <form onSubmit={eventHandler}>
            <h1> Account Info </h1><button> Logout </button>
            
            </form>

        </div>
        </section>
    )
}
export default Account