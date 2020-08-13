import PropTypes from "prop-types";
import React from "react";
import ClockCard from "../ClockCard";
import "./ListClock.css";

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
