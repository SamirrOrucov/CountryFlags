import "./index.scss";
import React from 'react'


const Card = ({flag,name,pop,region,capital,uuid}) => {
  
  return (
    <div id="cards">
      <div className="card_container">
        <div className="info_container">
          
            <ul key={uuid}>
              <div className="image">
                <img src={flag} alt="" />
              </div>
              <h5>{name}</h5>
              <li >
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
            </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
