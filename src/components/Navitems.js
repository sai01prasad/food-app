import { Link } from "react-router-dom";

const NavItems = () => {
    return(
        <>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/home">Home</Link> 
                </li>
                <li>
                    <Link to="/about">About Us</Link> 
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link> 
                </li>
                <li>
                    <Link to="/cart">Cart</Link> 
                </li>
            </ul>
        </div>
        </>
    );
};

export default NavItems;