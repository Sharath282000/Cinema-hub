import React, { useState } from 'react'
import Home from './components/Home';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Series from './components/Series';

function App() {
  const [buttontype, setbuttontype] = useState({ name: "Home" });
  const [active, setactive] = useState("")
  function Moviesbutton() {
    setbuttontype((oldvalue) => {
      return {
        ...oldvalue,
        name: "Movies",
      };
    });
    if (buttontype.name === "Movies") {
      setactive("active")
    }
    else {
      setactive("")
    }
  }

  function Seriesbutton() {
    setbuttontype((oldvalue) => {
      return {
        ...oldvalue,
        name: "Series",
      };
    });
    if (buttontype.name === "Series") {
      setactive("active")
    }
    else {
      setactive("")
    }
  }

  function Homebutton() {
    setbuttontype((oldvalue) => {
      return {
        ...oldvalue,
        name: "Home",
      };
    });
    if (buttontype.name === "Home") {
      setactive("active")
    }
    else {
      setactive("")
    }
  }
  return (
    <div className='container'>
      <Navbar home={Homebutton} series={Seriesbutton} movies={Moviesbutton} buttontype={buttontype.name} class={active} />
      {buttontype.name === "Home" && <Home />}
      {buttontype.name === "Movies" && <Movies buttontype={buttontype.name} />}
      {buttontype.name === "Series" && <Series buttontype={buttontype.name} />}
    </div>
  );
}

export default App;
