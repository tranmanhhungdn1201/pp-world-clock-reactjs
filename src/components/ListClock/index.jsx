import PropTypes from "prop-types";
import React, { useState } from "react";
import ClockCard from "../ClockCard";
import "./ListClock.css";
import ModalAddCity from "../ModalAddCity";

ListClock.propTypes = {
  cities: PropTypes.array
};

ListClock.defaultProps = {
  cities: []
};

function ListClock(props) {
  const { cities } = props;
  const [ show, setShow ] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <div className="listClock">
      {cities.map((city, i) => (
        <ClockCard key={i} city={city} />
      ))}
      <div className="listClock__addClock clock" onClick={toggle}>
        <p>Thêm</p>
      </div>
      <ModalAddCity show={show} toggle={toggle}/>
    </div>
  );
}

export default ListClock;
