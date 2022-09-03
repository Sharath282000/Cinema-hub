import React from "react";
import Moviecard from "./Moviecard";
import { useEffect, useState } from "react";


function Moviecontent(props) {
  //console.log(props.content_id)
  return (
    <div>
      <section>
        <h2 className="title">{props.content_title}</h2>
        <div className="content">
          {props.state_value ? (
            props.state_value.map((data) => {
              return (
                <Moviecard
                  key={data.id}
                  id={data.id}
                  poster={data.poster_path}
                  overview={data.overview}
                  type={data.media_type}
                  title={data.title}
                  vote={data.vote_average}
                  date={data.release_date}
                />
              );
            })
          ) : (
            <h3>Error fetching data</h3>
          )}
        </div>
      </section>
    </div>
  );
}

export default Moviecontent;
