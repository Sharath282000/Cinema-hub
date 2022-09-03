import React,{useState,useEffect} from 'react'
import SeriesContent from './Seriescontent'

function Series() {
  const [topratedseries, settopratedseries] = useState([]);
  const [populartvshows, setpopulartvshows] = useState([]);
  const [tvairingtoday, settvairingtoday] = useState([]);
  const [tvonair, settvonair] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => settopratedseries(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setpopulartvshows(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => settvairingtoday(data.results));
  },[]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => settvonair(data.results));
  },[]);
  return (
    <div>
      <SeriesContent
        content_title="Popular Tv Shows"
        state_value={populartvshows}
      />
      <SeriesContent
        content_title="Top rated Tv Shows"
        state_value={topratedseries}
      />
      <SeriesContent
        content_title="Tv Shows Airing Today"
        state_value={tvairingtoday}
      />
      <SeriesContent
        content_title="Upcoming Airing Tv Shows"
        state_value={tvonair}
      />
    </div>
  )
}

export default Series