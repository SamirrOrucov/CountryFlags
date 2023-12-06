import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Card";
import "./index.scss";
import Navbar from "../../layouts/Navbar";

const DetailPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  async function getFetch() {
    const response = await fetch("https://restcountries.com/v3.1/name/" + name);

    const data = await response.json();

    setCountry(data[0]);
    console.log(data[0]);
  }

  useEffect(() => {
    getFetch();
  }, []);
  return (
    <>
      <Navbar />
      <div className="detail_container">
        <Link to={"/"}>
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                
                d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                fill="#111517"
              />
            </svg>
            Go Back
          </button>
        </Link>
        {country && (
          <div className="container">
            <div className="image">
              <img src={country.flags?.png} alt="" />
            </div>
            <div className="info">
              <h5>{country.name?.common || "N/A"}</h5>
              <ul>
                <div className="left a">
                  <li>
                    <b>Native Name</b>:{" "}
                    {country.name?.nativeName
                      ? Object.values(country.name.nativeName)[0].official
                      : "N/A"}
                  </li>
                  <li>
                    <b>Population</b>:{" "}
                    {country.population?.toLocaleString() || "N/A"}
                  </li>
                  <li>
                    <b>Region</b>: {country.region || "N/A"}
                  </li>
                  <li>
                    <b>Sub Region</b>: {country.subregion || "N/A"}
                  </li>
                  <li>
                    <b>Capital</b>: {country.capital || "N/A"}
                  </li>
                </div>
                <div className="right a">
                  <li>
                    <b>Top Level Domain</b>:{" "}
                    {country.tld ? country.tld.join(", ") : "N/A"}
                  </li>
                  <li>
                    <b>Currencies</b>:{" "}
                    {country.currencies
                      ? Object.values(country.currencies)
                          .map((currency) => currency.name)
                          .join(", ")
                      : "N/A"}
                  </li>
                  <li>
                    <b>Languages</b>:{" "}
                    {country.languages
                      ? Object.values(country.languages).join(", ")
                      : "N/A"}
                  </li>
                </div>
                {/* {country.borders && (
        <li>Borders: {country.borders.join(', ')}</li>
      )} */}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailPage;
