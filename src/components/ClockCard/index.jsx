import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../ClockProvider";
import { formatTime, getTimeByTimeZone } from "../../utils/time";
import "./ClockCard.css";

ClockCard.propTypes = {
  city: PropTypes.object
};

ClockCard.defaultProps = {
  city: {}
};

function ClockCard(props) {
  const [{ active }, dispatch] = useStateValue();
  const { city } = props;
  const { name, timezone } = city;
  const isActive = active === timezone ? true : false;
  const [time, setTime] = useState("");

  useEffect(() => {
    const setClock = setInterval(() => {
      initTime();
    }, 60000);
    initTime();
    return () => clearInterval(setClock);
  });

  const initTime = () => {
    const time = getTimeByTimeZone(timezone);
    setTime(formatTime(time));
  }

  const handleClick = () => {
    const data = {
      type: "SET_CITY",
      data: city
    };
    dispatch(data);
    initTime();
  };

  return (
    <div className={`clock ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <h3 className="clock__city">{name}</h3>
      <p className="clock__time">{time}</p>
    </div>
  );
}

export default ClockCard;
