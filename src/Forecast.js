import React,{useEffect, useState} from 'react';
import moment from 'moment';

const Forecast = ({date,min,max,icon,iconPhrase}) => {

    const [dayOfWeek, setDayOfWeek] = useState(0);
    const [image, setImage] = useState(1)

    useEffect( ()=>{
        if(moment(date).day() === moment().day()){
            setDayOfWeek("Today");
        }
        else{
            switch(moment(date).day()){
                case 0: setDayOfWeek("Sunday");
                break;
                case 1: setDayOfWeek("Monday");
                break;
                case 2: setDayOfWeek("Tuesday");
                break;
                case 3: setDayOfWeek("Wednesday");
                break;
                case 4: setDayOfWeek("Thursday");
                break;
                case 5: setDayOfWeek("Friday");
                break;
                case 6: setDayOfWeek("Saturday");
                break;
                default: setDayOfWeek("Unknown");
                break;
            }
        }
        setImage(`/images/weatherIcons/${icon}-s.png`);
    },[date,icon]);

    return (
        <div className="col-2 text-center text-white">
            <h1>{dayOfWeek}</h1>
            <img src={image} alt=""/>
            <h4>{min}&#8457; - {max}&#8457;</h4>
            <p>{iconPhrase}</p>
        </div>
    );
}

export default Forecast;
