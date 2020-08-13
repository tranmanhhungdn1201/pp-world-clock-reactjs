import React, { useEffect, useState } from "react";
import { useStateValue } from "../../ClockProvider";
import { getTimeByTimeZone } from "../../utils/time";
import "./TimeShow.css";

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
