import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Navigation from "./components/Navigation";


const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=50cc2d929715507f8e887ec799afc87c&page=1";
 
function App() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
   getMovies(apiUrl);
    }, []);
  
  const getMovies = (apiUrl) => {
    fetch (apiUrl)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
  });
};

  return (
    <>
    <Navigation setMovies={setMovies} getMovies={getMovies}/>
    <main className="bg-dark">
           <div className="container bg-light">
             <div  className=" d-flex flex-row bg-light justify-content-evenly flex-wrap">
    {movies.length > 0 && movies.map(movie => (
      <Movie key={movie.id} { ...movie }/>
    ))}
    </div>
    </div>
    </main>
    </>
  );
}

export default App;
