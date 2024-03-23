import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import { UserCircle } from 'phosphor-react'
import { Storefront } from 'phosphor-react'
import { House } from 'phosphor-react'
import { SignOut } from 'phosphor-react'
import { UserCirclePlus} from 'phosphor-react'
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
                {/* <NavLink to="/Login">Login</NavLink> */}
                <NavLink to="/"><House/></NavLink>
                <NavLink to="/Account"><UserCircle/> </NavLink>
                <NavLink to="/ItemList"><Storefront></Storefront></NavLink> <br></br>
                <NavLink to="/Cart"><ShoppingCart /> </NavLink> <br></br>
                <a onClick={logoutUser}><SignOut/></a>
            </nav >
        );
    } else {
        return (
            //This is for my nonAuthenticated user
            <nav>
                <NavLink to="/" className="bar"> <House/> </NavLink> <br></br>
                <NavLink to="/register"><UserCirclePlus/></NavLink> <br></br>

                {/* <NavLink to="/ItemList">Item List</NavLink> <br></br>
                <NavLink to="/Cart">Cart<ShoppingCart /> </NavLink> <br></br> */}
                <a onClick={() => navigate("/login")}><UserCircle/></a>
            </nav>
        );
    }
}
export default NavBar;