import { AppLogo } from "../utils/constants";
import NavItems from "./Navitems";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={AppLogo}  alt="logo image"/>
            </div>
            <NavItems />
        </div>
    );
};

export default Header;