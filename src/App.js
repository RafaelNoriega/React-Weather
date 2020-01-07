import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import Info from './Info';
import Data from './Keys'
// import SearchBar from './SearchBar/SearchBar'

const App = () =>{
  
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');
  const [zip, setZip] = useState('90001');
  const [key, setKey]= useState('37834_PC');
  const [city, setCity] = useState('');
  const APIKEY = Data['Key'];

  const getLocation = async () => {
    console.log(APIKEY)
    console.log('Zip: ',zip);
    const url = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${APIKEY}&q=${zip}`;
    let response = await Axios.get(url);
    let data =  response['data'][0];
    setCity(data.EnglishName);
    setKey(data.Key);
  }
  
  const getWeather = async () => {
    console.log('Key: ',key);
    //https://developer.accuweather.com/apis
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKEY}&language=en-us&details=false`;
    let response = await Axios.get(url);
    const data = response['data'][0]['Temperature']['Imperial']['Value'];
    setWeather(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    // prevent page reload on form submit
    e.preventDefault();
    setZip(search);
  }

  const Load = async () => {
    await getLocation();
    await getWeather();
  }
  //this will be called everytime an object in the array is called. Since it is empty, it will only run on the initial load.
  useEffect(()=>{
    Load();
  }, [zip]);

  return <div className="contianer">

            <div className='row'>
              <div className='col-12'>
                <form onSubmit={getSearch}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Search Location by Zip</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={search} onChange={updateSearch}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>

            <div className='row'>
              <div className='col-12 text-center'>
                <Info weather={weather} city={city}/>
              </div>
            </div>

        </div>
}

export default App;
