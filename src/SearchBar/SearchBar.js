import React, { useState, useEffect } from 'react';

const SearchBar = () => {
        return (
            <div>
               <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Search Location by Zip</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
};
export default SearchBar;