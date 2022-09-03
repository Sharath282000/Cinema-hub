import React from "react";
import { useState, useEffect } from "react";
import Resultcontent from "./Resultcontent";
import Searchcontainer from "./Searchcontainer";
function Navbar(props) {
  const [search, setsearch] = useState("");
  const [result, setresult] = useState([]);
  function handleChange(e) {
    setsearch(e.target.value);
  }

  function Fetchresults() {
    fetch(
      `https://api.themoviedb.org/3/search/${
        (props.buttontype === "Home" && "multi") ||
        (props.buttontype === "Movies" && "movie") ||
        (props.buttontype === "Series" && "tv")
      }?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => search && setresult(data.results));
  }
  useEffect(() => {
    search && Fetchresults();
  }, [search]);

  return (
    <div>
      <div className="navbar">
        <nav>
          <div className="navbar-content">
            <h1 className="logo">Cinema Hub</h1>
          </div>
          {props.buttontype === "Home" && (
            <Searchcontainer
              placeholder="Search movies or series"
              value={search}
              change={handleChange}
            />
          )}
          {props.buttontype === "Movies" && (
            <Searchcontainer
              placeholder="Search movies"
              value={search}
              change={handleChange}
            />
          )}
          {props.buttontype === "Series" && (
            <Searchcontainer
              placeholder="Search series"
              value={search}
              change={handleChange}
            />
          )}
        </nav>
        <div className="buttons">
          <button name="Home" className={props.buttontype==="Home"?`active`:undefined} onClick={props.home}>
            Home
          </button>
          <button name="Movies" className={props.buttontype==="Movies"?`active`:undefined} onClick={props.movies}>
            Movies
          </button>
          <button name="Series" className={props.buttontype==="Series"?`active`:undefined} onClick={props.series}>
            Tv Shows
          </button>
        </div>
      </div>
      {result && search && (
        <Resultcontent content_title="Search Results" state_value={result} buttontype={props.buttontype} />
      )}
    </div>
  );
}

export default Navbar;
