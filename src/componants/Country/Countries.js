import React, { useEffect, useState } from "react";
import Country from "./Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <div className="fixed-top banner p-1">
        <h1 className="text-center text-info">All Country</h1>
      </div>

      <div className="row countries">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
