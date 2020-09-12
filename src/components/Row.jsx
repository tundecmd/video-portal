import React, { useState, useEffect, createContext } from "react";
import "./Row.css";
import axios from "../axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

//const API_KEY = "fad866c27c86c4b55dbd8f0e152453c6";
//const lang = "language=en-US";
export const movieContext = createContext();
//const baseUrl = "https://api.themoviedb.org/3";
const imageBaseUrl = "https://image.tmdb.org/t/p/";
//const file_path = "k68nPLbIST6NP96JmTxmZijEvCA.jpg";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  //console.log(fetchUrl);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);

      setMovies(res.data.results);
      return res;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //console.log(movie);

      movieTrailer(movie?.name || movie.title)
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          //console.log("res:", trailerUrl);
        })
        .catch(error => console.log("error", error));
    }
  };

  //console.log("movies:", movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies &&
          movies.map(movie => {
            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${imageBaseUrl}/w200/${movie.poster_path}`}
                alt={movie.name || movie.title}
                className="row_poster"
              />
            );
          })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
