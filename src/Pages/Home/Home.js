import "./Home.css"
import WeatherData from "../../Components/WeatherData/WeatherData";


export default function Home(){
    //Add the catch feature

    return(
        <div className="home-container">
            <WeatherData />
        </div>
    )
}