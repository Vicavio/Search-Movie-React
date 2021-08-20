import React from 'react'

const imgPath = "https://image.tmdb.org/t/p/w1280";
const Movie = ({title, poster_path, vote_average}) => {
    return (
        <>
                <div className="card col-md-4" style={{width: "25%"}}>
                  <img className="img-thumbnail w-65 h-65" src={imgPath + poster_path} alt={title}/>
                  <p className="text-center text-dark font-weight-bold">{title}</p>
                  <p className="text-center">Rating: {vote_average}</p>
                </div>
            
        </>
    )
}

export default Movie
