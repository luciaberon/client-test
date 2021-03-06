import React from 'react';
import { WeatherForecast } from '../types/Data';
import { Card, CardHeader } from '@material-ui/core';

const CurrentWeather:React.FC<WeatherForecast> = (props) => {
    
    return (
        <div className="card">
        <Card>
            <h4>{props.weather[0].main}</h4>
            <h5>{props.weather[0].description}</h5>
            <h3>Max: {Math.trunc(props.main.temp_max-273)}° Min: {Math.trunc(props.main.temp_min-273)}°</h3>
            <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}/>         
        </Card>
        </div>
    )
}

export default CurrentWeather;

