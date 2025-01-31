import "./WeatherData.css";
import React, {useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";



export default function WeatherData(){
    const [temperature, setTemperature] = useState("");
    const [precipition, setPrecipitation] = useState("");
    const [wind, setWind] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [dsc, setDsc] = useState(""); //Description of the weather
    const api_key = "8fad9c886225d5088e4dfea3a18893c0";
    let location = useLocation(); //URL location of the user

    const getWeatherData = (city) => {
        axios({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`
        })
        .then((response) => {
            console.log([ response.data.list ]); //NOTE: Temporary, can be deleted after use
            

        
            let weeks = []
            let current_week = []
            
            
            for (let i in response.data.list){
                if ( (i + 7) % 7 === 0 && i != 0 ){
                    console.log("pushed on index: ", i);
                    weeks.push(current_week);
                    console.log(city);
                    
                    //NOTE: Code for the Home page
                    let current_temp = current_week[0].main.temp;
                    let cal_cur_temp = Math.round(current_temp);
                    setTemperature(cal_cur_temp);
                    
                    setPrecipitation(current_week[0].pop);
                    setWind(current_week[0].wind);

                    // NOTE: Code for the Dashboard page
                    for(let i of current_week){
                        console.log(i.main.temp);
                        setTemperature(i[0].main.temp); 
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
            <>
                <div className="weather-container-home">
                    <div className="weather-component-home">
                        <p>{city} </p>
                        <p>{temperature}°C</p>
                        <p>
                            Chance of precipitation
                            {precipition}%
                        </p>
                        <p></p>
                    </div>
                    <br/>
                    <input type="text" placeholder="Address, City" value={city} onChange={(ci => setCity(ci.target.value))} />
                    <button onClick={() => {getWeatherData(city);}}>Search</button>
                </div>
            </>
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

