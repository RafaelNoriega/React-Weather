import React, { useState, useEffect } from 'react';

const SearchBar = ({getSearch, search, updateSearch}) => {
        return (

        <div className='col-4 offset-4 text-white pt-4'>
            <div className="row p-4">
                <div className="col-6 text-right">
                    <p>Powered By </p>
                </div>
                <div className="col-6 p-0">
                    <img className="accuWeather" src="/images/AW_CMYK.png" alt=""/>
                </div>
            </div>
            <form onSubmit={getSearch} className="text-center">
                <div className="form-group">
                    <label htmlFor="zip">Search Location by Zip</label>
                    <input type="text" className="form-control mt-4 mb-4" id="zip" aria-describedby="emailHelp" value={search} onChange={updateSearch}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        );
};
export default SearchBar;