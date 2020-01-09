import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import Info from './Info';
import Data from './Keys';
import './App.css'
// import SearchBar from './SearchBar/SearchBar'

const App = () =>{
  
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');
  const [zip, setZip] = useState('90001');
  const [key, setKey]= useState('37834_PC');
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState(1);
  const APIKEY = Data['Key'];

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    // prevent page reload on form submit
    e.preventDefault();
    setZip(search);
  }

  //this will be called every time an object in the array is called. Since it is empty, it will only run on the initial load.
  useEffect( ()=>{
    async function fetchData() {
      try {
        const url = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${APIKEY}&q=${zip}`;
        let response = await Axios.get(url);
        let data =  await response['data'][0];
        setCity(await data.EnglishName);
        setKey(await data.Key);
  
        const url2 = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKEY}&language=en-us&details=false`;
        response = await Axios.get(url2);
        data = await response['data'][0];
        setWeather(await data.Temperature.Imperial.Value);
        setIcon(await data.WeatherIcon);
        
      } catch (error) {
        console.log(error);
        setCity('Not Available');
        setKey('Error')
        setWeather('0');
      }
    };

    fetchData();
  }, [zip, key, APIKEY]);

  return <div className="contianer">

            <div className='row'>
              <div className='col-8 offset-2 text-center'>
                <form onSubmit={getSearch}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Search Location by Zip</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={search} onChange={updateSearch}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>

            <div className='row pt-4'>
              <div className='col-6 offset-3 text-center p-4'>
                <Info weather={weather} city={city} icon={icon}/>
              </div>
            </div>

        </div>
}

export default App;
