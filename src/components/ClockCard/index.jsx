import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../ClockProvider";
import { getTimeByTimeZone } from "../../utils/time";
import "./ClockCard.css";

ClockCard.propTypes = {
  city: PropTypes.object
};

ClockCard.defaultProps = {
  city: {}
};

function ClockCard(props) {
  const [{ state }, dispatch] = useStateValue();
  const { city } = props;
  const { name, timezone } = city;
  const [time, setTime] = useState("");

  useEffect(() => {
    const setClock = setInterval(() => {
      const time = getTimeByTimeZone(timezone);
      setTime(time);
    }, 1000);
    return () => clearInterval(setClock);
  });
  const handleClick = () => {
    const data = {
      type: "SET_CITY",
      data: city
    };
    dispatch(data);
  };
  return (
    <div className="clock" onClick={handleClick}>
      <h3 className="clock__city">{name}</h3>
      <p className="clock__time">{time}</p>
    </div>
  );
}

export default ClockCard;
