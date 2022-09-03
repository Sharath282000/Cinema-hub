import React from "react";
import Seriescard from './Seriescard'

function Seriescontent(props) {
  return (
    <div>
      <section>
        <h2 className="title">{props.content_title}</h2>
        <div className="content">
          {props.state_value ? (
            props.state_value.map((data) => {
              return (
                <Seriescard
                  key={data.id}
                  id={data.id}
                  poster={data.poster_path}
                  overview={data.overview}
                  type={data.media_type}
                  title={data.name}
                  vote={data.vote_average}
                  date={data.first_air_date}
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

export default Seriescontent;