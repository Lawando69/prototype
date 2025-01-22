import "./Logo.css";
import LogoImage from "../../Assets/Icons/logo.png";

export default function Logo(){
    return(
        <a id="logo" href="/">
            <img 
                className="logo-image"
                src={LogoImage}
                alt="Climate care logo"
            />
            <h1>Climate Care</h1>
        </a>
    )
}