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
                    /*NOTE: The link bellow is uses an icon instead of text*/
                    :<Link to="/join" className="action-button">
                        <img
                            src="../../Assets/Icons/profile-icon.svg"
                        />
                    </Link>
            }
        </header>
    )

}


