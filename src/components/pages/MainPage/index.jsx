import React, { useState }from "react";
import Header from "../../Header";
import TimeShow from "../../TimeShow";
import ListClock from "../../ListClock";
import { cities } from "../../../constants/timezone";
import "./MainPage.css";

function MainPage(props) {
  const [ city , setCity] = useState({});
  const handleCity = (data) => {
    setCity(data);
  }
  return (
    <div className="main">
      <Header />
      <div className="main__container">
        <TimeShow city={city}/>
        <ListClock cities={cities} handleCity={handleCity}/>
      </div>
    </div>
  );
}

export default MainPage;
