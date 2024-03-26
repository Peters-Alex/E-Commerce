
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import "./styles/Account.css";

function Account(props) {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({ email: "", name:  })
    
    
    const eventHandler = async (event) => {
        event.preventDefault();

        props.setToken(null)
        
        navigate("/");
    }; 
    

    return(
        <section>
        <header> Welcome Back</header>
        {/* <NavBar /> */}
        <div className="AccountStyle"> 
            <form onSubmit={eventHandler}>
            <h2> Account Information </h2>
            <form> 
                <label> First Name</label>
                <input name="first" type="text" placeholder='FirstName'  />
                <label> Last Name </label>
                <input name="first" type="text" value=''/><br></br>
                <label> Email Address </label>
                <input type="text" value=''/><br></br>
                <label> Home Address 1</label>
                <input type="text" value=''/>
                <label> Shipping Address</label>
                <input type="text" value=''/><br></br>
                <label> City </label>
                <input type="text" value=''/>
                <label> State </label>
                <input type="text" value=''/>
                <label> Zip</label>
                <input type="text" value=''/><br></br>
                <label> Card Number </label>
                <input type="text" value=''/>
                <label> CC </label>
                <input type="text" value=''/><br></br>
                
                <label htmlFor="message">message </label>
                <input message=""/>
            </form>
            
            
            <button> Logout </button>
            
            </form>

        </div>
        </section>
    )
}
export default Account