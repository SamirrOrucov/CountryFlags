import React from "react";
import Card from "../Card";
import "./index.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Cards = ({ impValue, select }) => {
  const [country, setCountry] = useState([]);
  async function getFetch() {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const data = await response.json();

    setCountry(data);
  }

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div id="cards" key={uuidv4}>
      <div className="newcard" key={uuidv4()}>
        {country
          .filter((x) =>
            x.name.common.toLowerCase().includes(impValue.toLowerCase())
          )
          .filter((x) => x.region.toLowerCase().includes(select))

          .map((x) => (
            <Link key={uuidv4()} to={"/detail/" + x.name.common}>
              <Card
                key={uuidv4()}
                flag={x.flags.png}
                name={x.name.common}
                pop={x.population}
                region={x.region}
                capital={x.capital}
                uuid={uuidv4()}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Cards;
