import "./Footer.css";
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";


import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";

import Home from "../../Pages/Home/Home";
import SignUp from "../../Pages/Auth/Auth";
import SignIn from "../../Pages/Auth/Auth";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import HealthAdvice from "../../Pages/HealthAdvice/HealthAdvice";

export default function Footer(){
    return(
        <div className="footer">
            <div className="logo-container">
                <Logo className="logo"/>
            </div>
            <div className="nav-container">
                <Link to={Home} className="nav-link">Home</Link>
                <Link to={SignUp} className="nav-link">Sign Up</Link>
                <Link to={SignIn} className="nav-link">Sign In</Link>
                <Link to={Dashboard} className="nav-link">Dashboard</Link>
                <Link to={HealthAdvice} className="nav-link">Health Advice</Link>
                <Link to={HealthAdvice} className="nav-link">Home risk assessments</Link>
            </div>
            <div className="social-media">
                <h2>FOLLOW US</h2>
                <FacebookIcon /> <InstagramIcon /> <TwitterIcon /> <LinkedinIcon />
            </div>
        </div>
    )
}