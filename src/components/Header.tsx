import React, { useEffect } from 'react';
import CurrentWeather from './CurrentWeather';
import Headlines from './Headlines';
import useFetch from '../hooks/useFetch';
import Search from './Search';
import { useParams } from 'react-router-dom'; 
import Spinner from './Spinner'



const Header: React.FC<{}> = () => {

    const { city } = useParams<{ city: string }>();
    const service = useFetch(city);
    return (
        <>
            <Search />
            { service ?
            <div>
                <CurrentWeather {...service.weatherForecast}/> 
                <Headlines {...service.newsList}/>             
            </div> 
            :   
            <Spinner />
            }
           
        </>
    )
}

export default Header
