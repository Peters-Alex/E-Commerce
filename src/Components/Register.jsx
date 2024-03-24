import { useState } from "react";
import { useRegisterMutation } from '../redux/api'
import NavBar from "./NavBar";
import "./styles/Register.css"

function Register() {
    const [userInfo, setUserInfo] = useState({ email: "", username: "", password: "", name: { firstname: "", lastname: "", } });

    const [errorMsg, setError] = useState(null)
    const [register] = useRegisterMutation();

    const eventHandler = async (event) => {
        event.preventDefault();
        const response = await register(userInfo);
        console.log("This is the response from the registeration API", response.data);
    };

    const onUserInput = (e) => {
        if (errorMsg) {
            setError(null);
        }
        const { name, value } = e.target;

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
        <div className="Register">
            <img src="src/assets/kaleb-tapp-J59wWPn09BE-unsplash.jpg"></img>

            {errorMsg ? <p>{errorMsg}</p> : <span />}
            <form onSubmit={eventHandler}> {/*button needs to go on the form so when it completed its submitted*/}
            <h2> Create Account </h2>
                First Name
                <input name="firstname" type="text" placeholder="FirstName" value={userInfo.name.firstname} onChange={onUserInput} /> <br></br>
                Last Name
                <input name="lastname" type="test" placeholder="LastName" value={userInfo.name.lastname} onChange={onUserInput} /> <br></br>
                {/* Username
                <input type="text" placeholder="Username" name="username" value={userInfo.username} onChange={onUserInput} /> <br></br> */}
                Password
                <input name="password" type="password" placeholder="Password" value={userInfo.password} onChange={onUserInput} /> <br></br>
                Email
                <input name="email" type="email" placeholder="Email" value={userInfo.email} onChange={onUserInput} /> <br></br>
                <button>Create</button>
            </form>
        </div>
    );
}
export default Register;

// When I try to register it takes my information and passes it through my url. 