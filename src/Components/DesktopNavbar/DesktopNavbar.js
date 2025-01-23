import "./DesktopNavbar.css";
import Logo from "../Logo/Logo";

import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import { Link } from "react-router-dom";

export default function DesktopNavbar(){

    const {user, logout} = useContext(MainContext);

    return(
        <header id="desktop-navbar">
            <Logo/>
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/healthadvice" className="nav-link">HEALTH ADVICE</Link>
            <Link to="/about" className="nav-link">ABOUT</Link>
            <Link to="/dashboard" className="nav-link">DASHBOARD</Link>
            {
                user ?
                <>
                    <a className="nav-link" onClick={logout}>Logout</a>
                    <Link to="/profile" className="action-button">My account</Link>
                </>
                    :<a to="/join" className="action-button" />
                    /*NOTE: You can use the Link feature instead of the anchor tag which will still allow to save img in there for the icon.*/
            }
        </header>
    )

}


