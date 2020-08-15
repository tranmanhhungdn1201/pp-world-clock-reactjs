import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../ClockProvider";
import { formatTime, getTimeByTimeZone } from "../../utils/time";
import "./ClockCard.css";
import ConfirmRemove from "../ConfirmRemove";

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
  const [ show, setShow ] = useState(false);

  useEffect(() => {
    const setClock = setInterval(() => {
      initTime();
    }, 60000);
    initTime();
    return () => clearInterval(setClock);
  });

  const toggle = () => setShow(!show);

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
    <>
      <div className={`clock ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <button className="clock__close close" onClick={toggle}>x</button>
        <h3 className="clock__city">{name}</h3>
        <p className="clock__time">{time}</p>
      </div>
      <ConfirmRemove show={show} toggle={toggle} />
    </>
  );
}

export default ClockCard;
