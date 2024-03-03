import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api"
import NavBar from "./NavBar";

function Login(props) {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
    });
    const [errorMsg, setError] = useState(null);
    const [login] = useLoginMutation();
    const navigate = useNavigate();

    const eventHandler = async (event) => {
        event.preventDefault();
        const { data, error } = await login (userInfo);

        if (error) {
            //error.data
            console.log(`error ${JSON.stringify(error.data)}`)
        } else {
            //data/token
            props.setToken(data.token);
            console.log(`data ${JSON.stringify(data.token)}`)
            //Todo: Change to plant list route later
            navigate("/account");
        }
    };
    const onUserInput = (e) => {
        if (errorMsg) {
            setError(null);
        }
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
    };
    
    return (
        <div>
            <NavBar />
            <h2> Login </h2>
            {/* error message*/}
            {errorMsg ? <p>{errorMsg}</p> : <span />}
            <form onSubmit={eventHandler}> {/*button needs to go on the form so when it completed its submitted*/}
                <label>
                Username
                <input type="text" placeholder="Username" name="username" value={userInfo.username} onChange={onUserInput} /> <br></br>
                </label>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="Password" value={userInfo.password} onChange={onUserInput} /> <br></br>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Login;