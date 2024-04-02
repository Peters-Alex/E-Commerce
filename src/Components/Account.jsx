
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import "./styles/Account.css";

function Account(props) {
    const navigate = useNavigate();
    const [errorMsg, setError] = useState(null)

    const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "", email: "", homeAddress: "", shipping: "", city: "", state: "", zip: "", card: "", securityCode: "", message: "" });


    const onUserInput = (e) => {
        if (errorMsg) {
            setError(null);
        }
        const { name, value } = e.target;
        
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));


     };


const eventHandler = async (event) => {
    event.preventDefault();

    props.setToken(null)

    navigate("/");
};


return (
    <div className="acountPg">
        <header> Welcome Back</header>
        {/* <NavBar /> */}
        <div>
        {/* <img className="accountImg"src="src/assets/clem-onojeghuo-HpEDSZukJqk-unsplash.jpg"/> */}
            <form className="AccountStyle" onSubmit={eventHandler}>
                <h2> Account Information </h2>
                    First Name
                    <input name="firstName" type="text" placeholder='First Name'value={userInfo.firstName} onChange={onUserInput} />
                    Last Name 
                    <input name="lastName" type="text" placeholder="Last Name"value={userInfo.lastName} onChange={onUserInput} /><br></br>
                    Email Address 
                    <input name="email" type="text" placeholder="Email " value={userInfo.email} onChange={onUserInput}/><br></br>
                    Home Address
                    <input name="homeAddress" type="text" placeholder="Home Address" value={userInfo.homeAddress} onChange={onUserInput}/>
                    Shipping Address
                    <input name="shipping" type="text" placeholder  ="Shipping Address" value={userInfo.shipping} onChange={onUserInput} /><br></br>
                    City
                    <input name="city" type="text" placeholder="City" value={userInfo.city} onChange={onUserInput} />
                    State
                    <input name="state" type="text" placeholder="State" value={userInfo.state} onChange={onUserInput} />
                    Zip
                    <input name="zip" type="text" placeholder="Zip"value={userInfo.zip} onChange={onUserInput} /><br></br>
                    Card Number 
                    <input name="card" type="text" placeholder="Card Number" value={userInfo.card} onChange={onUserInput}/>
                    CC
                    <input name="securityCode" type="text" placeholder="CC" value={userInfo.securityCode} onChange={onUserInput}/><br></br>

                    Message
                    <input name="message" type="text" placeholder="Deliver Instructions" value={userInfo.message} onChange={onUserInput}/> <br></br>


                <button> CheckOut  </button>

            </form>

        </div>
    </div>
)
}
export default Account;