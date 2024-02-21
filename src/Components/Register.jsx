
const registerNewUser = () => {
    console.log(registerNewUser)
}

function Register() {
    return(
        <div> 
            <h1> Register Page </h1>
            <form onSubmit={registerNewUser}> {/*button needs to go on the form*/}
                Username
                <input type="text" placeholder="Username" /> <br></br>
                Password
                <input type="password" placeholder="Password" /> <br></br>
                Email
                <input type="email" placeholder="email" /> <br></br>
                First Name
                <input type="text" placeholder="FirstName" /> <br></br>
                Last Name
                <input type="test" placeholder="LastName" /> <br></br>
                <button>Submit</button>
            </form>
        </div>
)}
export default Register;