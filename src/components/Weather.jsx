import {useEffect,useRef, useState } from "react";
import search_icon from '../assets/search_icon.png';
import clear_icon from '../assets/clear_icon.png';
import cloud_icon from '../assets/cloud_icon.png';
import drizzle_icon from '../assets/drizzle_icon.png';
import snow_icon from '../assets/snow_icon.png';
import rain_icon from '../assets/rain_icon.png';
import humidity_icon from '../assets/humidity_icon.png';
import wind_icon from '../assets/wind_icon.png'

export default function Weather(){
    const [loading,setLoading] = useState(false)
    const [weather,setWeather] = useState({})
    const [city,setCity] = useState('')
  const apiKey = `d8ffd0df1dfa702d12938225900ecd53`
   
   const getWeather = () =>{
         setLoading(true)
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
         .then(response=> response.json())
         .then(data => setWeather(data))
         .catch(error => {console.log(error)})
         .finally(()=>{setLoading(false)})
     };
     const handleCityChange = (e) => {
      setCity(e.target.value.toLowerCase())
     };
   
  
    return(
        <div className="weather">
            <div className="search-bar">
             <input type="text" placeholder="Search" value={city} onChange={handleCityChange} />
             <img src={search_icon} alt=""  onClick={getWeather} />
            </div>
            {loading ? 'LOADING...' : weather.main && (
             < div className='list' key={weather.id}>
            <img src={clear_icon} alt=""  className="weather-icon"/>
            <p className="temperature">{weather.main.temp}°C</p>
            <p className='location'>{weather.name}</p>
            <div className="weather-data">
            <div className="row">
                    <img src={humidity_icon} alt="" className='humidity'/>
                    <div>
                        <p>{weather.main.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="row">
                    <img src={wind_icon} alt="" className='wind' />
                    <div>
                        <p> {weather.wind.speed} km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>

            </div>
            
            )}
        </div>
    )
} 