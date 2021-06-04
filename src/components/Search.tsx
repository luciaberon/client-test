import React, { useState } from 'react'
import SearchBar from "material-ui-search-bar";


const Search : React.FC = () => {
    const [input, setInput] = useState<string>('');
    return (
        <SearchBar
        value={input}
        onChange={(value) => setInput(value)}
        onRequestSearch={() => console.log(input)}
        />
    )
}
export default Search
