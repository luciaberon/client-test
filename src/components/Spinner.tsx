import React from 'react'
import Loader from "react-loader-spinner";



const Spinner = () => {
    return (
        <div className="center">
        <Loader
            type="Oval"
            color="black"
            height={80}
            width={80}
            timeout={2000} //3 secs
        /> 
        </div>  
    )
}

export default Spinner
