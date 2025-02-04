import "./WeatherData.css";
import React, {useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

// NOTE: Add catching effect later for better performance

export default function WeatherData(){
    const [weatherData, setWeatherData] = useState(null);

    // const [temperature, setTemperature] = useState("");
    // const [precipition, setPrecipitation] = useState("");
    // const [wind, setWind] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [dsc, setDsc] = useState(""); //Description of the weather
    const api_key = "8fad9c886225d5088e4dfea3a18893c0";
    let location = useLocation(); //URL location of the user

    const handleSearch = async(city) => {
        if (!city) {
            setError("Please enter a location");
            return;
        }
        setError("");

        await axios({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`
        })
        .then((response) => {
            console.log([ response.data.list ]); //NOTE: Temporary line of code

            const setWeatherData = ({});
        
            let weeks = []
            let current_week = []
            
            for (let i in response.data.list){
                if ( (i + 7) % 7 === 0 && i != 0 ){
                    console.log("pushed on index: ", i); // NOTE: Temporary line of code 
                    weeks.push(current_week);
                    console.log(city);
                    
                    //NOTE: Code for the Home page
                    let current_temp = current_week[0].main.temp;
                    let cal_cur_temp = Math.round(current_temp);

                    setWeatherData["temp"] = cal_cur_temp;
                    setWeatherData["prec"] = current_week[0].pop;
                    setWeatherData["wind"] = current_week[0].wind.speed;

                    // NOTE: Code for the Dashboard page
                    for(let i of current_week){
                        console.log(i.main.temp);
                        setWeatherData(i[0].main.temp); 
                        console.log(i.weather[0].main);
                        // setDsc(i.weather[0].main);

                    }
                    current_week = []
                }
                current_week.push(response.data.list[i]);
            } 
            if(current_week.length > 0){
                weeks.push(current_week)
            }

            // console.log("visible: ")
            //console.log(weeks[0][0].visibility);
            //NOTE: The code within the Brackets above allows us to access the [] the first list, [] then the second list

            setIsLoading(false);
        })


        //NOTE: Look over the .catch bellow, its still not working
        .catch((error) => {
            setError(error?.response?.data?.detail || "Error Occured");
            setIsLoading(false);
        }, [] );
    };
    if(location.pathname === "/"){
        return(
            <div className="weather-container">
                <div className="header">
                    <h1>Current weather</h1>
                </div>

                <div className="search-container">
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Location..City"/>
                    <button onClick={handleSearch}>Search</button>
                    
                </div>

                {weatherData && (
                    <div className="weather-info">
                        <div className="weather-location">
                            <h2>{city}</h2>
                        </div>
                        <div className="weather-temp">
                            <h3>Temperature: {weatherData.temp}°C</h3>
                        </div>
                        <div className="aditional-info">
                            <p>Precipitation: {weatherData.prec}%</p>
                            <p>Wind Speed: {weatherData.wind} m/s</p>
                        </div>
                    </div>
                )}
                
            </div>


            // <>
            //     <div className="weather-container-home">
            //         <div className="weather-component-home">
            //             <p>{city} </p>
            //             <p>{temperature}°C</p>
            //             <p>
            //                 Chance of precipitation
            //                 {precipition}%
            //             </p>
            //             <p></p>
            //         </div>
            //         <br/>
            //         <input type="text" placeholder="Address, City" value={city} onChange={(ci => setCity(ci.target.value))} />
            //         <button onClick={() => {getWeatherData(city);}}>Search</button>
            //     </div>
            // </>
        )
    } else{
        return(
            <>
                <div className="weather-container-dashboard">
                    {/* NOTE: Put the code for Dashboard page here */}
                </div>
            </>
        )
    }
}

