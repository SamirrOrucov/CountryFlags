import React, { useState } from "react";
import Navbar from "../../layouts/Navbar";
import Cards from "../../Components/Cards";

import "./index.scss"
const Home = () => {
  const [impValue, setImpValue] = useState("")
  const [selectVal, setSelectVal] = useState("")
  return (
    <div id="home">
      <Navbar />
      <section id="search">
        <div className="search_container">
          <input type="text" name="" id="srch" value={impValue} onChange={(e)=>setImpValue(e.target.value)} placeholder="Search for a country..."/>
          <select name="region" id="region" onChange={(e)=>setSelectVal(e.target.value)}>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>

        </div>
      </section>
      <Cards impValue={impValue} select={selectVal}  />
    </div>
  );
};

export default Home;
