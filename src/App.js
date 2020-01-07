import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import Info from './Info'

const App = () =>{
  const getWeather = async () => {
    //https://developer.accuweather.com/apis
    const APIKEY = 'jHoDGPmF8EMulC2gLWEEy23iEgVPk5ex';
    const loacation = '39054_PC';
    const url = `http://dataservice.accuweather.com/currentconditions/v1/{location}?apikey={APIKEY}&language=en-us&details=false`;
    
    let response = await Axios.get(url);
    const data = response['data'][0]['Temperature']['Imperial']['Value'];
    
    console.log('Response: ', response)
    setWeather(data);
  }

  const [weather, setWeather] = useState([]);

  useEffect(()=>{
    getWeather();
  }, []);

  return <div>
          <Info weather={weather}/>
      </div>
}

export default App;
