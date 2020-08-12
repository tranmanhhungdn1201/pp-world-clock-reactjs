import React from "react";
import PropTypes from "prop-types";
import "./ListClock.css";
import ClockCard from "../ClockCard";

ListClock.propTypes = {
  cities: PropTypes.array
};

ListClock.defaultProps = {
  cities: []
};

function ListClock(props) {
  const { cities } = props;
  return (
    <div className="listClock">
      {cities.map((city, i) => (
        <ClockCard key={i} city={city} />
      ))}
    </div>
  );
}

export default ListClock;
