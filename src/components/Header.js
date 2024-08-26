import { AppLogo } from "../utils/constants";
import NavItems from "./Nav-items";

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