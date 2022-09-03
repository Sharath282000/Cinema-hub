import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { img_300, unavailable } from "../config/config";

function Resultcards(props) {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${
        props.buttontype === "Home"
          ? props.type
          : props.buttontype === "Movies"
          ? "movie"
          : "tv"
      }/${props.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setvideos(data.results[0].key !== undefined && data.results[0].key);
      });
  }, []);
  return props.vote &&
    props.title &&
    props.poster &&
    props.date &&
    props.overview ? (
    <div className="card">
      {videos ? (
        <div className="play">
          <a
            href={`https://www.youtube.com/watch?v=${videos}`}
            target="_blank"
            title="Watch Trailer"
          >
            <img src="assets/play.png" />
          </a>
        </div>
      ) : (
        ""
      )}
      {props.vote > 0 && (
        <div className="rating">
          {props.vote > 0 && (
            <h4
              style={
                Math.round(props.vote * 10) / 10 >= 8.5
                  ? { color: "#e91414", fontWeight: "bold" }
                  : { color: "white" }
              }
            >
              {Math.round(props.vote * 10) / 10}
            </h4>
          )}
        </div>
      )}
      <img
        src={props.poster ? `${img_300}${props.poster}` : `${unavailable}`}
        alt={props.title}
      />
      <div className="name">
        {props.title ? (
          <b>
            {props.title}{" "}
            {props.date && (
              <span
                style={{ color: "rgb(184, 174, 174)", fontWeight: "normal" }}
              >
                ({props.date.substring(0, 4)})
              </span>
            )}
          </b>
        ) : (
          <b>Title not found</b>
        )}
      </div>
      {props.type && (
        <div className="type">
          {props.type === "movie" ? <i>Movie</i> : <i>Tv Show</i>}
        </div>
      )}
      {props.overview.length > 0 && props.date.length > 0 ? (
        <div className="overview">
          {props.overview ? <p>{props.overview}</p> : ""}
          {props.date ? (
            <h5 style={{ paddingBottom: "15px" }}>
              {props.type === "movie" || props.type === undefined
                ? `Release Date: ${props.date.charAt(8)}${props.date.charAt(
                    9
                  )}-${props.date.charAt(5)}${props.date.charAt(
                    6
                  )}-${props.date.substring(0, 4)}`
                : `First Air Date: ${props.date.charAt(8)}${props.date.charAt(
                    9
                  )}-${props.date.charAt(5)}${props.date.charAt(
                    6
                  )}-${props.date.substring(0, 4)}`}
            </h5>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    ""
  );
}

export default Resultcards;
