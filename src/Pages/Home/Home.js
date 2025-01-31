import "./Home.css"
import WeatherData from "../../Components/WeatherData/WeatherData";



export default function Home(){
    //Add the catch feature
 // get weather data from context

 //NOTE: Add this function bellow is the weatherdata as its parameter to change the background image depending on the weather conditions
    // function getBgImage(){

    //     if(WeatherData.temp < 0){
    //         return WinterBg;
    //     } if else (WeatherData.temp < 10){
    //         return WinterBg;
    //     }


    // }


    return(
        //NOTE:style={{backgroundImage: getBgImage()}}
        <div className="home-container">
            <WeatherData />
        </div>
    )
}