import "./Footer.css";
// import Logo from "../../Assets/Icons/logo.png";
import FacebookIcon from "../../Assets/Icons/SocialMedia/facebook-icon.svg";
import InstagramIcon from "../../Assets/Icons/SocialMedia/instagram-icon.svg";
import TwitterIcon from "../../Assets/Icons/SocialMedia/twitter-icon.svg";
import LinkedinIcon from "../../Assets/Icons/SocialMedia/linkedin-icon.svg";


export default function Footer(){
    return(
        <div className="footer">
            <div className="logo-container">
                {/* <img src={Logo} alt="Website Logo"/> */}
            </div>
            <div className="social-media">
                <FacebookIcon /> <InstagramIcon /> <TwitterIcon /> <LinkedinIcon />
            </div>
        </div>
    )
}