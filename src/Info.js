import React,{useEffect, useState}  from 'react';

const Info = ({weather, city, icon}) => {
    const [image, setImage] = useState("/images/weatherIcons/01.png");
    useEffect( ()=>{
        setImage(`/images/weatherIcons/${icon}-s.png`);
    },[icon]);
    return (
        <div className="infoWrapper white p-4">
            <h1>Current Weather</h1>
            <h2>{city}</h2>
            <img src={image} alt=""/>
            <h1>{weather}&#8457;</h1>
        </div>
    );
}

export default Info;