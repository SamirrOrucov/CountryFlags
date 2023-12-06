import "./index.scss";
import React from "react";

const Card = ({ flag, name, pop, region, capital, uuid }) => {
  return (
    <div>
      <div className="card_container">
        <ul key={uuid}>
          <div className="image">
            <img src={flag} alt="" />
          </div>
          <div className="info_container">
            <h5>{name}</h5>
            <li>
              <span>Population: </span>
              {pop}
            </li>
            <li>
              <span>Region: </span>
              {region}
            </li>
            <li>
              <span>Capital: </span>
              {capital}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Card;
