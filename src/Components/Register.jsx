import { useState } from "react";

function Register() {
    const [userInfo, setUserInfo] = useState({ email: "", username: "", password: "", name:{ firstname: "", lastname: "", } }); //{it doesnt match the api in full}

    const eventHandler = (event) => {
        event.preventDault();
        console.log("review eventHandler")
    }
    const onUserInput = (e) => {
        console.log(JSON.stringify(userInfo));
        setUserInfo({...userInfo, [e.target.name]: e.target.value }); //... is my spread operator
    };

    return (
        <div>
            <h1> Register Page </h1>
            <form onSubmit={eventHandler}> {/*button needs to go on the form so when it completed its submitted*/}
                Username
                <input type="text" placeholder="Username" name="username" value={userInfo.username} onChange={onUserInput} /> <br></br>
                Password
                <input name="password" type="password" placeholder="Password" value={userInfo.password} onChange={onUserInput} /> <br></br>
                Email
                <input name="email" type="email" placeholder="Email" value={userInfo.email} onChange={onUserInput}/> <br></br>
                First Name
                <input name="firstname" type="text" placeholder="FirstName" value={userInfo.firstname} onChange={onUserInput}/> <br></br>
                Last Name
                <input name="lastname" type="test" placeholder="LastName" value={userInfo.lastname} onChange={onUserInput}/> <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Register;