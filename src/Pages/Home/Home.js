import "./Home.css"
import react, {useEffect, useState} from "react";
import axios from 'axios';
import Logo from "../../Components/Logo/Logo";


export default function Home(){

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const weather_api = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8fad9c886225d5088e4dfea3a18893c0"; //NOTE: This will be used to add the api link later.
    
    return(
        useEffect(() => {
            axios.get(weather_api)
            .then((response) => {
                
            })
        })

    )
}