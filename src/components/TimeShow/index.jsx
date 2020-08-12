import React, { useEffect, useState } from "react";
import "./TimeShow.css";
import { getTimeByTimeZone } from "../../utils/time";
import { useStateValue } from "../../ClockProvider";

function TimeShow(props) {
  const [{ city }] = useStateValue();
  const { name, timezone } = city;
  const [time, setTime] = useState("");

  useEffect(() => {
    const setClock = setInterval(() => {
      const time = getTimeByTimeZone(timezone);
      setTime(time);
    }, 1000);
    return () => clearInterval(setClock);
  });

  return (
    <div className="time">
      <h1 className="time__title">
        {`Thời gian ở Thành phố ${name ? name : ""} của bạn hiện tại:`}
      </h1>
      <div className="time__clock">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default TimeShow;
