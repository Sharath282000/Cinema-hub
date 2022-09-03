import React, { useState, useEffect } from "react";
import MovieContent from "./Moviecontent";

function Movies(props) {
  const [popularmovies, setpopularmovies] = useState([]);
  const [topratedmovies, settopratedmovies] = useState([]);
  const [nowplaying, setnowplaying] = useState([]);
  const [upcomingmovies, setupcomingmovies] = useState([]);
  /* for genres
  const [genres, setgenres] = useState([]);
  const [genremovies, setgenresmovies] = useState([]);
  const genreid=useGenres(genres)*/
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setpopularmovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => settopratedmovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setnowplaying(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setupcomingmovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setgenres(data.genres));
  }, []);

  //if using genre
  /*
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreid}&page=1`
    )
      .then((res) => res.json())
      .then((data) => setgenresmovies(data.results));
  }, []);*/

  return (
    <div>
      <MovieContent
        content_title="Popular Movies"
        state_value={popularmovies}
      />
      <MovieContent
        content_title="Top rated Movies"
        state_value={topratedmovies}
      />
      <MovieContent content_title="Now playing" state_value={nowplaying} />
      <MovieContent
        content_title="Upcoming Movies"
        state_value={upcomingmovies}
      />
    </div>
  );
}

export default Movies;
