import { useState } from "react";
import { useRegisterMutation } from '../api'
//import { json } from "react-router-dom";
import NavBar from "./NavBar";
//import { createActionCreatorInvariantMiddleware } from "@reduxjs/toolkit";
import "./styles/Register.css"

function Register() {
    const [userInfo, setUserInfo] = useState({ email: "", username: "", password: "", name: { firstname: "", lastname: "", } }); //{it doesnt match the api in full}

    const [errorMsg, setError] = useState(null)
    const [register] = useRegisterMutation();



    const eventHandler = async (event) => {
        event.preventDefault();
        const response = await register(userInfo);
        //const { data, error } = await register(userInfo);
        console.log("This is the response from the registeration API",response.data);
       
    };

    const onUserInput = (e) => {
        if (errorMsg) {
            setError(null);
        }
        const { name, value } = e.target;

        //     console.log(JSON.stringify(userInfo));
        //     setUserInfo({ ...userInfo, [e.target.name.firstname]: e.target.value }); //... is my spread operator

        //checking to see if the input is for the name object
        if (name === "firstname" || name === "lastname") {
            setUserInfo(prevState => ({
                ...prevState,
                name: {
                    ...prevState.name,
                    [name]: value,
                },
            }))
        } else {
            setUserInfo(prevState => ({
               ...prevState,
               [name]: value, 
            }))
        }
    };


    return (
        <div>
               <NavBar />
               <img src="src/assets/kaleb-tapp-J59wWPn09BE-unsplash.jpg"></img>
         
            <h1> Register Page </h1>
            {errorMsg ? <p>{errorMsg}</p> : <span />}
            <form onSubmit={eventHandler}> {/*button needs to go on the form so when it completed its submitted*/}
                Username
                <input type="text" placeholder="Username" name="username" value={userInfo.username} onChange={onUserInput} /> <br></br>
                Password
                <input name="password" type="password" placeholder="Password" value={userInfo.password} onChange={onUserInput} /> <br></br>
                Email
                <input name="email" type="email" placeholder="Email" value={userInfo.email} onChange={onUserInput} /> <br></br>
                First Name
                <input name="firstname" type="text" placeholder="FirstName" value={userInfo.name.firstname} onChange={onUserInput} /> <br></br>
                Last Name
                <input name="lastname" type="test" placeholder="LastName" value={userInfo.name.lastname} onChange={onUserInput} /> <br></br>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default Register;

// When I try to register it takes my information and passes it through my url. 