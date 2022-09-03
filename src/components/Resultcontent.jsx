import React from "react";
import Resultcards from "./Resultcards";

function Resultcontent(props) {
  return (
    props.state_value.length>0 && (
      <div>
        <section>
          <h2 className="title">{props.content_title}</h2>
          <div className="content">
            {props.state_value ? (
              props.state_value.map((data) => {
                return (
                  <Resultcards
                    key={data.id}
                    id={data.id}
                    poster={data.poster_path}
                    overview={data.overview}
                    type={data.media_type}
                    title={data.name || data.title}
                    vote={data.vote_average}
                    date={data.first_air_date || data.release_date}
                    buttontype={props.buttontype}
                  />
                );
              })
            ) : (
              <h3>Error fetching data</h3>
            )}
          </div>
        </section>
      </div>
    )
  );
}

export default Resultcontent;
