import React, { Component } from 'react';

const Info = ({weather}) => {
    
    return (
        <div>
            <h1>Weather</h1>
            <h1>{weather}</h1>
        </div>
    );
}

export default Info;