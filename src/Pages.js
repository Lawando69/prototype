import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Auth from "./Pages/Auth/Auth";
import HealthAdvice from "./Pages/HealthAdvice/HealthAdvice";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profiles/Profile";

export default function Pages(){
    return(
        <main id="page-content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/join" element={<Auth/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/health-advice" element={<HealthAdvice/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/profile/*" element={<Profile/>} />
                {/*NOTE: The * in the profile path above is telling
                the url to allow any text and still function as normal
                without givin errors.*/}
            </Routes>
        </main>
    )
}