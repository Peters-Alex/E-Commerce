import { useState } from "react";
import { useRegisterMutation } from '../api'
import { json } from "react-router-dom";
import NavBar from "./NavBar";

function Register(props) {
    const [userInfo, setUserInfo] = useState({ email: "", username: "", password: "", name: { firstname: "", lastname: "", } }); //{it doesnt match the api in full}

    const [errorMsg, setError] = useState(null)
    const [register] = useRegisterMutation();



    const eventHandler = async (event) => {
        event.preventDault();
        const { data, error } = await register(userInfo);

        if (error) {
            setError(error.data.message);
            console.log(`error ${JSON.stringify(error.data.message)}`);
        } else {
            props.setToken(data.token);
            console.log(`data ${JSON.stringify(data.token)}`);
        }
    };

    const onUserInput = (e) => {
        if (errorMsg) {
            setError(null);
        }
        console.log(JSON.stringify(userInfo));
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value }); //... is my spread operator
    };


    return (
        <div>
            <NavBar />
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
                <input name="firstname" type="text" placeholder="FirstName" value={userInfo.firstname} onChange={onUserInput} /> <br></br>
                Last Name
                <input name="lastname" type="test" placeholder="LastName" value={userInfo.lastname} onChange={onUserInput} /> <br></br>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default Register;