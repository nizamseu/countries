import React from "react";
import "./Countries.css";
const Country = (props) => {
  console.log(props);
  const { name, capital, flag, population, area, borders } = props.country;
  //   const translations = Object.values(props.country.translations);

  return (
    <div className="cart mx-auto col-md-4 col-lg-4 col-sm-6 col-12 text-center">
      <h1 className="text-success">{name}</h1>
      <img className="images" src={flag} alt={name} />
      <p>
        <strong>Capital: </strong>
        {capital}
      </p>
      <p>
        <strong>Population: </strong> {population}, <strong>Area :</strong> {area}
      </p>
      {borders.length > 0 && (
        <>
          <strong>Borders: </strong> {borders.join()}
        </>
      )}
    </div>
  );
};

export default Country;
