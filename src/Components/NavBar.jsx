import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';

 

function NavBar(props) {
    const navigate = useNavigate();

    const logoutUser = () => {
        props.setToken(null);
        navigate("/");
    };
    if (props.token) {
        return (
            //Authenticated User
            <nav>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/Login">Login</NavLink>
                <a onClick={logoutUser}>Logout</a>
            </nav>
        );
    }
    return(
        //This is for my Authenticated user
        <nav>
            <NavLink to="/"> Home </NavLink> <br></br>
            <NavLink to="/register">Register</NavLink> <br></br>
            <NavLink to="/ItemList">Item List</NavLink> <br></br>
            <NavLink to="/Cart">Cart<ShoppingCart /> </NavLink> <br></br>
            <a onClick={() => navigate("/login")}>Login</a>
        </nav>
    );
}
export default NavBar;