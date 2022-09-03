import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Content from "./Content";
import Movies from "./Movies";
import Series from "./Series";
const Home = (props) => {
  const [trending, settrending] = useState([]);
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        settrending(data.results);
      });
  }, []);

  return (
    <div>
      <Content
        content_title="Trending Movies and Tv Shows"
        state_value={trending}
      />
      <Movies/>
      <Series/>
    </div>
  );
};

export default Home;
