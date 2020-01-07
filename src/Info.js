import React from 'react';

const Info = ({weather, city}) => {
    
    return (
        <div>
            <h1>Weather</h1>
            <h1>{city}</h1>
            <h1>{weather}</h1>
        </div>
    );
}

export default Info;