import React, { useState, useEffect } from 'react';

const SearchBar = ({getSearch, search, updateSearch}) => {
        return (
            <div className='col-4 offset-4 text-center text-white pt-4'>
            <form onSubmit={getSearch}>
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