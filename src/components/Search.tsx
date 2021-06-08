import React, { useState } from 'react'
import SearchBar from "material-ui-search-bar";
import { useHistory } from 'react-router-dom';


const Search : React.FC = () => {
    const history = useHistory();
    const [input, setInput] = useState('');
    const searchCity =async () => {        

        const response = await fetch(`https://localhost:44391/api/history`,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            mode: 'cors',
            body: JSON.stringify({city: input})
        })
        history.push(`/${input}`);
        history.go(0);
    }
    return (
        <SearchBar
        value={input}
        onChange={(value) => setInput(value)}
        onRequestSearch={() => searchCity()}
        className="searchbar"
        />
    )
}
export default Search
