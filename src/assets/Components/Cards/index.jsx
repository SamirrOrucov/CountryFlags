import React from "react";
import Card from "../Card";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Cards = () => {
  const [country, setCountry] = useState([]);
  async function getFetch() {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const data = await response.json();

    console.log(data);
    setCountry(data);
  }

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div>
      <div className="newcard">
        {country.map((x) => (
          <Card key={uuidv4()}
            flag={x.flags.png}
            name={x.name.common}
            pop={x.population}
            region={x.region}
            capital={x.capital}
            uuid={uuidv4()}
          />
        ))}
      </div>
    </div>
  );
};
export default Cards;
