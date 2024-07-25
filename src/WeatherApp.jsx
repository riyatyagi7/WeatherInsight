import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import "./Back.css";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",      
       feelsLike: 35.74,
       humidity: 55, 
       temp: 32.05,
       tempMax: 32.05,
       tempMin: 32.05,
       weather: "haze",
    });
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo)
    }
    
    
    return(
        <div className="Back"  >
           
           <div className="content-center"> 
          {/* </div> <div style={{textAlign: "center"}}> */}
            <h2>Weather Insights - Stay Prepared </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            </div>
        </div>

       
    )
} 