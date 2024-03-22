import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import "./styles/NavBar.css";



function NavBar(props) {
    const navigate = useNavigate();



    const logoutUser = () => {
        props.setToken(null);
        navigate("/");
    };
    if (props.token) {
        return (
            <nav>
                <NavLink to="/Login">Login</NavLink>
                <NavLink to="/ItemList">Item List</NavLink> <br></br>
                <NavLink to="/Cart">Cart<ShoppingCart /> </NavLink> <br></br>
                <a onClick={logoutUser}>Logout</a>
            </nav >
        );
    } else {
        return (
            //This is for my nonAuthenticated user
            <nav>
                <NavLink to="/" className="bar"> Home </NavLink> <br></br>
                <NavLink to="/register">Register</NavLink> <br></br>

                {/* <NavLink to="/ItemList">Item List</NavLink> <br></br>
                <NavLink to="/Cart">Cart<ShoppingCart /> </NavLink> <br></br> */}
                <a onClick={() => navigate("/login")}>Login</a>
            </nav>
        );
    }
}
export default NavBar;