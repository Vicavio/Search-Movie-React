import React from 'react';
import { useState } from 'react';

const searchApi ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Navigation = (props) => {

    const [searchMovie, setSearchMovie] = useState("");
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(searchMovie) { 
          props.getMovies(searchApi + searchMovie);
        }
        fetch (searchApi + searchMovie)
        .then((res) => res.json())
        .then((data) => {
        props.setMovies(data.results);
        });
  }
   
    const handleOnChange = (e) => {
        setSearchMovie(e.target.value)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
            <div className="d-flex"> 
          <p className="navbar-brand ps-4 text-white fs-3 align-middle" >Movies</p>
              <form className="d-flex " id="form"
              onSubmit={handleOnSubmit}>
                <input className="form-control me-3 mt-2 mb-2 rounded-pill border-warning" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                id="search"
                value={searchMovie}
                onChange={handleOnChange}
                />
              </form>
            </div>
        </div>
          </nav>
        </>
    )
}

export default Navigation
