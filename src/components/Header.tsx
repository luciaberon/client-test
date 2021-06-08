import React, { useEffect } from 'react';
import CurrentWeather from './CurrentWeather';
import Headlines from './Headlines';
import useFetch from '../hooks/useFetch';
import Search from './Search';
import { useParams } from 'react-router-dom'; 
import Spinner from './Spinner';
import SearchHistory from './SearchHistory';

const Header: React.FC<{}> = () => {

    const { city } = useParams<{ city: string }>();
    const { result, loading, error } = useFetch(city);

    return (
        <>
            { loading && <Spinner />}
            { result &&
                <div className="header">
                    <Search />
                    <SearchHistory />
                    <Headlines {...result.newsList}/> 
                    <CurrentWeather {...result.weatherForecast}/>             
                </div> 
            }
            { error && <h3>{error}</h3>}           
        </>
    )
}

export default Header
