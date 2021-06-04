import React, { useEffect } from 'react';
import Weather from './Weather';
import Headlines from './Headlines';
import useFetch from '../hooks/useFetch';
import Search from './Search';
import { useParams } from 'react-router-dom'; 


const Header: React.FC<{}> = () => {

    const { city } = useParams<{ city: string }>();
    const service = useFetch(city);
    console.log(service);


    return (
        <>
            <Search />
            { service ?
            <>
                <Weather {...service.weatherForecast}/> 
                <Headlines {...service.newsList}/>             
            </> 
            :
            <div>Loading...</div>                       
            }
           
        </>
    )
}

export default Header
